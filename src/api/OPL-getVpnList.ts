import puppeteer from "puppeteer";
import { load } from "cheerio";
import fetch from 'node-fetch';

const configs = require("../../configs.json");

declare global {
  interface Window {
    [key: string]: any;
  }
}

function sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms));
}

async function getListsScriptFn() {
    while (!window.grecaptcha?.execute) await sleep(100);
    await sleep(1000);

    const fetchPage = async (page: string) => {
        const token = await window.grecaptcha.execute(configs.oplConstants.site_key, { action: "homepage" });
        return fetch("https://openproxylist.com/get-list.html", {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Language": "en-US,en;q=0.5",
                "Sec-Fetch-Dest": "document",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-Site": "same-origin",
            },
            // referrer: configs.oplConstants.base_url, // Removed because 'referrer' is not a valid RequestInit property in node-fetch
            body: `g-recaptcha-response=${token}&response=&sort=sortlast&dataType=openvpn&page=${page}`,
            method: "POST",
            // mode: "cors",
        }).then(r => r.ok ? r.text() : Promise.reject("Network error"));
    };

    while (!document.querySelector('.pagination .page-link[page-data]')) await sleep(100);

    const pages = Array.from(document.querySelectorAll('.pagination .page-link[page-data]'))
        .filter(el => !isNaN(parseInt((el as HTMLElement).innerText)));
    const lastPage = !configs.devMode ? parseInt((pages[pages.length - 1] as HTMLElement).innerText) : 1;
    const results = await Promise.all(
        Array.from({ length: lastPage }, (_, i) => fetchPage((i + 1).toString()))
    );
    return results.join("\\n<!--PAGE_BREAK-->\\n");
}

const getListsScript = `
    const configs = ${JSON.stringify(configs)};
    ${sleep.toString()}
    ${getListsScriptFn.toString()}
    getListsScriptFn();
`;

async function getVpnListHTML(): Promise<string> {
    const browser = await puppeteer.launch({ headless: "shell" });
    const page = await browser.newPage();

    // Bloquer les requêtes de pub
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if (/ads|doubleclick|googlesyndication|adservice|adserver/.test(req.url())) {
            req.abort();
        } else {
            req.continue();
        }
    });

    await page.goto(configs.oplConstants.base_url, { waitUntil: "networkidle2" });

    // Supprimer la CSP pour permettre l'injection de scripts si besoin
    await page.setBypassCSP(true);

    // Injecter le script et récupérer le résultat
    const result = await page.evaluate(getListsScript) as string;

    await browser.close();
    return result;
}

interface OPLVpnServer {
    ip: string;
    country: string;
    download_url: string;
    city: string;
    response_time: string;
    isp: string;
    last_check: string;
}

function parseVpnList(html: string): { servers: OPLVpnServer[]; countries: { [k: string]: string } } {
    const $ = load(html);
    const servers: OPLVpnServer[] = [];
    const countries: { [k: string]: string } = {};

    $("tr").each((i, el) => {
        if (i < 2) return;
        const ip = $(el).find("th").first().text().trim();
        if (!ip) return;
        const cells = $(el).find("td");
        const [country, city = ""] = $(cells[1]).text().trim().split(",").map(s => s.trim());
        const server: OPLVpnServer = {
            ip,
            download_url: "https://openproxylist.com" + $(cells[0]).find("a").attr("href") || "",
            country,
            city,
            response_time: $(cells[2]).text().trim(),
            isp: $(cells[3]).text().trim(),
            last_check: $(cells[4]).text().trim(),
        };
        countries[country.toLowerCase().replace(/ /g, "_")] = country;
        servers.push(server);
    });

    return { servers, countries };
}

export async function getVpnList(): Promise<{ servers: OPLVpnServer[]; countries: { [k: string]: string } }> {
    try {
        console.log("Fetching VPN list HTML from OPL");
        const html = await getVpnListHTML();
        console.log("Fetched VPN list HTML successfully");
        const parsed = parseVpnList(html);
        console.log("Parsed VPN list successfully");
        return parsed;
    } catch (e) {
        console.error("Error fetching VPN list:", e);
        return { servers: [], countries: {} };
    }
}