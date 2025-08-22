var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
import path from 'path';
import { getVpnList as VPNGate } from './api/VPNGATE-getVpnList.js';
import { getVpnList as OPL } from './api/OPL-getVpnList.js';
import { bulkIpLookup } from './api/getIPInfo.js';
import simpleGit from 'simple-git';
// --- Ajout de la fonction convertOvpnConfig ---
function convertOvpnConfig(config) {
    const supportedCiphers = [
        'AES-128-CBC',
        'AES-128-GCM',
        'AES-256-CBC',
        'AES-256-GCM'
    ].join(':');
    let convertedConfig = config;
    convertedConfig = convertedConfig.replace(/^tls-version.*$/gm, '');
    convertedConfig = convertedConfig.replace(/^route.*$/gim, '');
    convertedConfig = convertedConfig.replace(/^redirect-gateway.*$/gim, '');
    const additionalConfig = `
tls-version-min 1.0
tls-version-max 1.2
data-ciphers ${supportedCiphers}
redirect-gateway bypass-dhcp
`;
    return convertedConfig.replace(/^(\s*cipher\s+([^\s]+).*)$/gim, (match, fullLine) => `${fullLine}${additionalConfig}`);
}
// --- Fin ajout ---
function ensureDir(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!fs.existsSync(dir))
            fs.mkdirSync(dir, { recursive: true });
    });
}
function saveConfig(ip, configUrl, outDir) {
    return __awaiter(this, void 0, void 0, function* () {
        const outPath = path.join(outDir, `${ip}.ovpn`);
        let originalConfig;
        if (configUrl.startsWith('data:text/opvn;base64,')) {
            const base64 = configUrl.split(',')[1];
            originalConfig = Buffer.from(base64, 'base64').toString('utf8');
        }
        else {
            const res = yield fetch(configUrl);
            originalConfig = yield res.text();
        }
        const converted = convertOvpnConfig(originalConfig);
        fs.writeFileSync(outPath, converted, 'utf8');
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataDir = path.resolve('data');
        const configsDir = path.join(dataDir, 'configs');
        yield ensureDir(dataDir);
        yield ensureDir(configsDir);
        const [opl, vpngate] = yield Promise.all([OPL(), VPNGate()]);
        const allServers = [
            ...opl.servers.map((s) => (Object.assign(Object.assign({}, s), { provider: 'OPL', url: s.download_url || "data:text/opvn;base64," + s.openvpn_configdata_base64 }))),
            ...vpngate.servers.map((s) => (Object.assign(Object.assign({}, s), { provider: 'VPNGate', url: s.download_url || "data:text/opvn;base64," + s.openvpn_configdata_base64 }))),
        ];
        // Sauvegarde des configs modifiées
        for (const server of allServers) {
            try {
                yield saveConfig(server.ip, server.url, configsDir);
                console.log(`Saved config for ${server.ip}`);
            }
            catch (e) {
                console.error(`Failed for ${server.ip}:`, e);
            }
        }
        // Lookup ISP info et sauvegarde du cache enrichi
        const allIps = allServers.map((server) => server.ip);
        const ipInfos = yield bulkIpLookup(allIps);
        // On sauvegarde un cache enrichi (ISP, pays, etc) dans data/ipCache.json
        const ipCache = {};
        ipInfos.forEach((info) => {
            if (info && info.query)
                ipCache[info.query] = info;
        });
        fs.writeFileSync(path.join(dataDir, 'ipCache.json'), JSON.stringify(ipCache, null, 2));
        // On peut aussi sauvegarder la liste simple des IPs si besoin
        fs.writeFileSync(path.join(dataDir, 'ips.json'), JSON.stringify(allIps, null, 2));
        console.log('Done!');
    });
}
function loop() {
    return __awaiter(this, void 0, void 0, function* () {
        const git = simpleGit();
        while (true) {
            try {
                yield main();
                // Git add, commit, push
                yield git.add('./*');
                const date = new Date().toLocaleString('en-GB', { timeZone: 'GMT', hour12: false });
                yield git.commit(`Update ${date} GMT`);
                yield git.push();
                console.log('Git push done!');
            }
            catch (e) {
                console.error('Erreur dans main ou git:', e);
            }
            yield new Promise(res => setTimeout(res, 60000)); // 1 minute
        }
    });
}
loop();
