import { load } from "cheerio";
import fetch from 'node-fetch';
const url = "https://ipspeed.info/freevpn_openvpn.php?language=en&page=";
async function scrapPage(page) {
    const response = await fetch(url + page);
    if (!response.ok)
        throw new Error("Network error");
    return response.text();
}
function parsePage(html) {
    const $ = load(html);
    const links = $("a[href$='.ovpn']");
    const ipSpeedServers = [];
    for (const link of links) {
        const parentRow = $(link).parent().parent();
        const country = parentRow.find(".list_o1").text().trim().split(" ")[1];
        const ip = $(link).text().trim().replace(".ovpn", "");
        const download_url = $(link).attr("href");
        ipSpeedServers.push({ ip, country, download_url });
    }
    return ipSpeedServers;
}
const PAGE_NB = 4;
export async function getVpnList() {
    const pages = Array.from({ length: PAGE_NB }, (_, i) => i + 1);
    const htmls = await Promise.all(pages.map(page => scrapPage(page.toString())));
    const allLinks = htmls.flatMap(parsePage);
    const linksSet = new Set(allLinks);
    const linksArray = Array.from(linksSet);
    linksArray.sort((a, b) => a.country.localeCompare(b.country) || a.ip.localeCompare(b.ip));
    linksSet.clear();
    return linksArray;
}
