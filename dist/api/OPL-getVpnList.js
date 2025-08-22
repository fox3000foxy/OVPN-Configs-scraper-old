"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVpnList = getVpnList;
const puppeteer_1 = __importDefault(require("puppeteer"));
const cheerio_1 = require("cheerio");
const node_fetch_1 = __importDefault(require("node-fetch"));
const configs = require("../../configs.json");
function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}
async function getListsScriptFn() {
    while (!window.grecaptcha?.execute)
        await sleep(100);
    await sleep(1000);
    const fetchPage = async (page) => {
        const token = await window.grecaptcha.execute(configs.oplConstants.site_key, { action: "homepage" });
        return (0, node_fetch_1.default)("https://openproxylist.com/get-list.html", {
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
    while (!document.querySelector('.pagination .page-link[page-data]'))
        await sleep(100);
    const pages = Array.from(document.querySelectorAll('.pagination .page-link[page-data]'))
        .filter(el => !isNaN(parseInt(el.innerText)));
    const lastPage = !configs.devMode ? parseInt(pages[pages.length - 1].innerText) : 1;
    const results = await Promise.all(Array.from({ length: lastPage }, (_, i) => fetchPage((i + 1).toString())));
    return results.join("\\n<!--PAGE_BREAK-->\\n");
}
const getListsScript = `
    const configs = ${JSON.stringify(configs)};
    ${sleep.toString()}
    ${getListsScriptFn.toString()}
    getListsScriptFn();
`;
async function getVpnListHTML() {
    const browser = await puppeteer_1.default.launch({ headless: "shell" });
    const page = await browser.newPage();
    // Bloquer les requêtes de pub
    await page.setRequestInterception(true);
    page.on('request', (req) => {
        if (/ads|doubleclick|googlesyndication|adservice|adserver/.test(req.url())) {
            req.abort();
        }
        else {
            req.continue();
        }
    });
    await page.goto(configs.oplConstants.base_url, { waitUntil: "networkidle2" });
    // Supprimer la CSP pour permettre l'injection de scripts si besoin
    await page.setBypassCSP(true);
    // Injecter le script et récupérer le résultat
    const result = await page.evaluate(getListsScript);
    await browser.close();
    return result;
}
function parseVpnList(html) {
    const $ = (0, cheerio_1.load)(html);
    const servers = [];
    const countries = {};
    $("tr").each((i, el) => {
        if (i < 2)
            return;
        const ip = $(el).find("th").first().text().trim();
        if (!ip)
            return;
        const cells = $(el).find("td");
        const [country, city = ""] = $(cells[1]).text().trim().split(",").map(s => s.trim());
        const server = {
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
async function getVpnList() {
    try {
        console.log("Fetching VPN list HTML from OPL");
        const html = await getVpnListHTML();
        console.log("Fetched VPN list HTML successfully");
        const parsed = parseVpnList(html);
        console.log("Parsed VPN list successfully");
        return parsed;
    }
    catch (e) {
        console.error("Error fetching VPN list:", e);
        return { servers: [], countries: {} };
    }
}
