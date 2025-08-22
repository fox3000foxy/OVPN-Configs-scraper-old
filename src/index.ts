import fs from 'fs';
import path from 'path';
import { getVpnList as VPNGate } from './api/VPNGATE-getVpnList.js';
import { getVpnList as OPL } from './api/OPL-getVpnList.js';
import { bulkIpLookup } from './api/getIPInfo.js';
import simpleGit from 'simple-git';
import fetch from 'node-fetch';

// --- Ajout de la fonction convertOvpnConfig ---
function convertOvpnConfig(config: string): string {
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

  return convertedConfig.replace(
    /^(\s*cipher\s+([^\s]+).*)$/gim,
    (match, fullLine) => `${fullLine}${additionalConfig}`
  );
}
// --- Fin ajout ---

async function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function saveConfig(ip: string, configUrl: string, outDir: string) {
  const outPath = path.join(outDir, `${ip}.ovpn`);
  let originalConfig: string;

  if (configUrl.startsWith('data:text/opvn;base64,')) {
    const base64 = configUrl.split(',')[1];
    originalConfig = Buffer.from(base64, 'base64').toString('utf8');
  } else {
    const res = await fetch(configUrl);
    originalConfig = await res.text();
  }

  const converted = convertOvpnConfig(originalConfig);
  fs.writeFileSync(outPath, converted, 'utf8');
}

async function main() {
  const dataDir = path.resolve('data');
  const configsDir = path.join(dataDir, 'configs');
  await ensureDir(dataDir);
  await ensureDir(configsDir);

  simpleGit().pull();

  // Delete old configs
  fs.readdirSync(configsDir).forEach(file => {
    if (file.endsWith('.ovpn')) {
      fs.unlinkSync(path.join(configsDir, file));
    }
  });

  const [opl, vpngate] = await Promise.all([OPL(), VPNGate()]);
  const allServers = [
    ...opl.servers.map((s: any) => ({ ...s, provider: 'OPL', url: s.download_url || "data:text/opvn;base64," + s.openvpn_configdata_base64 })),
    ...vpngate.servers.map((s: any) => ({ ...s, provider: 'VPNGate', url: s.download_url || "data:text/opvn;base64," + s.openvpn_configdata_base64 })),
  ];

  // Sauvegarde des configs modifiées
  for (const server of allServers) {
    try {
      await saveConfig(server.ip, server.url, configsDir);
    } catch (e) {
      console.error(`Failed for ${server.ip}:`, e);
    }
  }

  console.log(`Saved ${allServers.length} configs.`);

  // Lookup ISP info et sauvegarde du cache enrichi
  const allIps = allServers.map((server: any) => server.ip);
  const ipInfos = await bulkIpLookup(allIps);

  // On sauvegarde un cache enrichi (ISP, pays, etc) dans data/ipCache.json
  const ipCache: { [key: string]: any } = {};
  ipInfos.forEach((info: any) => {
    if (info && info.query) ipCache[info.query] = info;
  });
  fs.writeFileSync(path.join(dataDir, 'ipCache.json'), JSON.stringify(ipCache, null, 2));

  // On peut aussi sauvegarder la liste simple des IPs si besoin
  fs.writeFileSync(path.join(dataDir, 'ips.json'), JSON.stringify(allIps, null, 2));
  console.log('Done!');
}

async function loop() {
  const git = simpleGit();
  while (true) {
    try {
      await main();

      // Git add, commit, push
      await git.add('./*');
      const date = new Date().toLocaleString('en-GB', { timeZone: 'GMT', hour12: false });
      await git.commit(`Update ${date} GMT`);
      await git.push();
      console.log('Git push done!');
    } catch (e) {
      console.error('Erreur dans main ou git:', e);
    }
    await new Promise(res => setTimeout(res, 60_000)); // 1 minute
  }
}

loop();