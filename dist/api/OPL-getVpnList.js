var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import puppeteer from "puppeteer";
import { load } from "cheerio";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const configs = require("../../configs.json");
function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}
function getListsScriptFn() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        while (!((_a = window.grecaptcha) === null || _a === void 0 ? void 0 : _a.execute))
            yield sleep(100);
        yield sleep(1000);
        const fetchPage = (page) => __awaiter(this, void 0, void 0, function* () {
            const token = yield window.grecaptcha.execute(configs.oplConstants.site_key, { action: "homepage" });
            return fetch("https://openproxylist.com/get-list.html", {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Sec-Fetch-Dest": "document",
                    "Sec-Fetch-Mode": "navigate",
                    "Sec-Fetch-Site": "same-origin",
                },
                referrer: configs.oplConstants.base_url,
                body: `g-recaptcha-response=${token}&response=&sort=sortlast&dataType=openvpn&page=${page}`,
                method: "POST",
                mode: "cors",
            }).then(r => r.ok ? r.text() : Promise.reject("Network error"));
        });
        while (!document.querySelector('.pagination .page-link[page-data]'))
            yield sleep(100);
        const pages = Array.from(document.querySelectorAll('.pagination .page-link[page-data]'))
            .filter(el => !isNaN(parseInt(el.innerText)));
        const lastPage = !configs.devMode ? parseInt(pages[pages.length - 1].innerText) : 1;
        const results = yield Promise.all(Array.from({ length: lastPage }, (_, i) => fetchPage((i + 1).toString())));
        return results.join("\\n<!--PAGE_BREAK-->\\n");
    });
}
const getListsScript = `
    const configs = ${JSON.stringify(configs)};
    ${sleep.toString()}
    ${getListsScriptFn.toString()}
    getListsScriptFn();
`;
function getVpnListHTML() {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer.launch({ headless: "shell" });
        const page = yield browser.newPage();
        // Bloquer les requêtes de pub
        yield page.setRequestInterception(true);
        page.on('request', (req) => {
            if (/ads|doubleclick|googlesyndication|adservice|adserver/.test(req.url())) {
                req.abort();
            }
            else {
                req.continue();
            }
        });
        yield page.goto(configs.oplConstants.base_url, { waitUntil: "networkidle2" });
        // Supprimer la CSP pour permettre l'injection de scripts si besoin
        yield page.setBypassCSP(true);
        // Injecter le script et récupérer le résultat
        const result = yield page.evaluate(getListsScript);
        yield browser.close();
        return result;
    });
}
function parseVpnList(html) {
    const $ = load(html);
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
export function getVpnList() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Fetching VPN list HTML from OPL");
            const html = yield getVpnListHTML();
            console.log("Fetched VPN list HTML successfully");
            const parsed = parseVpnList(html);
            console.log("Parsed VPN list successfully");
            return parsed;
        }
        catch (e) {
            console.error("Error fetching VPN list:", e);
            return { servers: [], countries: {} };
        }
    });
}
