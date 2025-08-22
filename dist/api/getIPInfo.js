var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createRequire } from "module";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const require = createRequire(import.meta.url);
const configs = require("../../configs.json");
import os from "os";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
let cachePath;
if (__dirname.includes(".asar")) {
    // If running from an ASAR archive, use the system temp directory
    cachePath = path.join(os.tmpdir(), "ipCache.json");
}
else {
    cachePath = path.resolve(__dirname, "../ipCache.json");
}
// Ensure cache file exists
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs.access(cachePath);
    }
    catch (error) {
        console.log("IP info cache file not found, creating a new one.");
        yield fs.writeFile(cachePath, "{}", "utf-8");
    }
}))();
function readCache() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fs.readFile(cachePath, "utf-8");
            return JSON.parse(data);
        }
        catch (_a) {
            return {};
        }
    });
}
function writeCache(cache) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fs.writeFile(cachePath, JSON.stringify(cache, null, 2), "utf-8");
    });
}
/**
 * Bulk IP lookup using IP-API (no token required, free for non-commercial use) with cache support.
 * @param {string[]} ips - Array of IP addresses
 * @param {number} chunkSize - Max IPs per bulk request (default 100 for IP-API)
 * @returns {Promise<Object[]>} - Array of lookup results (same order as input)
 */
export function bulkIpLookup(ips_1) {
    return __awaiter(this, arguments, void 0, function* (ips, chunkSize = 100) {
        const cache = yield readCache();
        const uncachedIps = [];
        const ipIndexMap = {};
        ips.forEach((ip, idx) => {
            if (!cache[ip]) {
                uncachedIps.push(ip);
            }
            if (!ipIndexMap[ip])
                ipIndexMap[ip] = [];
            ipIndexMap[ip].push(idx);
        });
        let newResults = {};
        for (let i = 0; i < uncachedIps.length; i += chunkSize) {
            const chunk = uncachedIps.slice(i, i + chunkSize);
            if (chunk.length === 0)
                continue;
            const res = yield fetch("http://ip-api.com/batch", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(chunk.map(ip => ({ query: ip }))),
            });
            if (!res.ok) {
                throw new Error(`API error: ${res.status} ${res.statusText}`);
            }
            const data = yield res.json();
            chunk.forEach((ip, idx) => {
                cache[ip] = data[idx];
                newResults[ip] = data[idx];
            });
        }
        if (Object.keys(newResults).length > 0) {
            yield writeCache(cache);
        }
        return ips.map(ip => cache[ip]);
    });
}
