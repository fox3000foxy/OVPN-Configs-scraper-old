import http from "http";
export function getVpnList() {
    return new Promise((resolve, reject) => {
        const vpnGateApiUrl = "http://www.vpngate.net/api/iphone/";
        const req = http.get(vpnGateApiUrl, (res) => {
            let data = "";
            res.on("data", (chunk) => {
                data += chunk.toString();
            });
            res.on("end", () => {
                if (res.statusCode !== 200) {
                    reject({ servers: [], countries: {} });
                }
                else {
                    try {
                        const servers = [];
                        const countries = {};
                        const returnData = { servers, countries };
                        let lines = data.trim().split("\n");
                        if (lines.length < 2) {
                            reject(returnData);
                            return;
                        }
                        const headers = lines[1]
                            .slice(1, -1)
                            .split(",")
                            .map((header) => header.trim());
                        lines = lines.slice(2, lines.length - 2);
                        lines.forEach((vpn) => {
                            var _a, _b, _c, _d, _e, _f, _g;
                            const values = vpn.split(",");
                            countries[(_b = (_a = values[6]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : ""] = (_c = values[5]) !== null && _c !== void 0 ? _c : "";
                            const obj = {};
                            for (let j = 0; j < values.length; j++) {
                                const excludeHeaders = [
                                    "numvpnsessions",
                                    "uptime",
                                    "totalusers",
                                    "totaltraffic",
                                    "logtype",
                                    "message"
                                ];
                                const headerKey = (_e = (_d = headers[j]) === null || _d === void 0 ? void 0 : _d.toLowerCase()) !== null && _e !== void 0 ? _e : "";
                                if (!excludeHeaders.includes(headerKey)) {
                                    obj[headerKey] = (_g = (_f = values[j]) === null || _f === void 0 ? void 0 : _f.trim()) !== null && _g !== void 0 ? _g : "";
                                }
                            }
                            servers.push(obj);
                        });
                        resolve(returnData);
                    }
                    catch (error) {
                        reject({ servers: [], countries: {} });
                    }
                }
            });
        });
        console.log("Fetching VPN list from VPNGate API");
        req.on("error", () => {
            reject({ servers: [], countries: {} });
        });
        req.end();
    });
}
