# OVPN-Configs-scraper

OVPN-Configs-scraper is a Node.js tool that automatically collects free OpenVPN configuration files from various public sources. It streamlines the retrieval, organization, and updating of these configs for quick use.

## Features
- Automated scraping of public VPN server lists.
- Generation of ready-to-use `.ovpn` files.
- IP address caching and duplicate management.
- Export of configurations to a dedicated folder.

> [!IMPORTANT]
> To deploy your own version, you can use the following section.
> PLEASE DO NOT FORK, OUR VERSIONS WILL DIFFER ANYWAYS.
> 
>  ## Prerequisites
>  - Node.js >= 20
>  - npm
>
>  ## Installation
>  ```bash
>  git clone https://github.com/your-username/OVPN-Configs-scraper.git
>  cd OVPN-Configs-scraper
>  npm install
>  ```
>
>  ## Build 
>  Before running the app, you need to build the TypeScript source files:
>  ```bash
>  npm run build
>  ```
>  This will compile the TypeScript code into JavaScript in the `dist/` directory.
> 
>  ## Usage
>  To run the scraper and update the configuration files:
>  ```bash
>  npm start
>  ```

> [!TIP]
> The generated `.ovpn` files can be found in the `data/configs/` folder.

## Download VPN Configurations
You can directly download the generated configuration files:

- [Go to the configs/ folder](./data/configs/)

Or download individually:

### Brazil
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 191.44.11.51 | Brazil | V tal | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/191.44.11.51.ovpn) |
| 179.228.177.69 | Brazil | Vivo | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/179.228.177.69.ovpn) |


### Canada
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 68.150.171.190 | Canada | Shaw Communications Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/68.150.171.190.ovpn) |
| 174.1.62.137 | Canada | Shaw Communications Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/174.1.62.137.ovpn) |


### China
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 219.147.27.214 | China | Chinanet | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.147.27.214.ovpn) |


### Colombia
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 181.53.96.88 | Colombia | Telmex Colombia S.A. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/181.53.96.88.ovpn) |


### Japan
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 133.175.239.30 | Japan | ARTERIA Networks Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/133.175.239.30.ovpn) |
| 14.132.250.49 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.132.250.49.ovpn) |
| 14.132.27.53 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.132.27.53.ovpn) |
| 123.1.24.191 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.1.24.191.ovpn) |
| 118.104.240.254 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.104.240.254.ovpn) |
| 118.106.226.94 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.106.226.94.ovpn) |
| 124.18.185.213 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.18.185.213.ovpn) |
| 14.132.238.32 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.132.238.32.ovpn) |
| 14.132.27.53 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.132.27.53.ovpn) |
| 180.198.170.53 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.198.170.53.ovpn) |
| 222.9.32.235 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.9.32.235.ovpn) |
| 219.124.213.238 | Japan | Community Network Center Incorporated. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.124.213.238.ovpn) |
| 116.12.3.7 | Japan | Community Network Center Incorporated. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.12.3.7.ovpn) |
| 121.104.177.123 | Japan | DION (KDDI CORPORATION) | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.104.177.123.ovpn) |
| 113.147.90.71 | Japan | DION (KDDI CORPORATION) | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/113.147.90.71.ovpn) |
| 113.153.93.34 | Japan | DION (KDDI CORPORATION) | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/113.153.93.34.ovpn) |
| 122.145.117.190 | Japan | FreeBit Co., Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.145.117.190.ovpn) |
| 211.2.97.0 | Japan | InfoWeb | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.2.97.0.ovpn) |
| 220.100.119.190 | Japan | Internet Initiative Japan | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.100.119.190.ovpn) |
| 125.30.84.181 | Japan | Internet Initiative Japan Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.30.84.181.ovpn) |
| 149.54.152.39 | Japan | ITEC HANKYU HANSHIN CO., LTD. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/149.54.152.39.ovpn) |
| 111.90.98.127 | Japan | JCOM | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/111.90.98.127.ovpn) |
| 125.15.177.125 | Japan | JCOM Co | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.15.177.125.ovpn) |
| 119.175.51.215 | Japan | JCOM Co., Ltd. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.175.51.215.ovpn) |
| 27.136.219.48 | Japan | JCOM Co., Ltd. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/27.136.219.48.ovpn) |
| 119.172.209.34 | Japan | JCOM Co., Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.172.209.34.ovpn) |
| 119.175.138.33 | Japan | JCOM Co., Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.175.138.33.ovpn) |
| 58.85.126.221 | Japan | JCOM Co., Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.85.126.221.ovpn) |
| 61.23.155.215 | Japan | JCOM Co., Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.23.155.215.ovpn) |
| 27.84.177.35 | Japan | Kddi Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/27.84.177.35.ovpn) |
| 121.109.137.24 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.109.137.24.ovpn) |
| 106.159.231.146 | Japan | Kddi Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.159.231.146.ovpn) |
| 106.172.187.114 | Japan | Kddi Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.172.187.114.ovpn) |
| 175.134.148.140 | Japan | Kddi Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.134.148.140.ovpn) |
| 222.229.115.162 | Japan | MEDIAS | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.229.115.162.ovpn) |
| 122.132.49.54 | Japan | NEC BIGLOBE Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.132.49.54.ovpn) |
| 220.102.49.219 | Japan | NEC BIGLOBE Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.102.49.219.ovpn) |
| 114.167.32.102 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/114.167.32.102.ovpn) |
| 153.203.210.157 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.203.210.157.ovpn) |
| 180.52.117.243 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.52.117.243.ovpn) |
| 153.210.249.96 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.210.249.96.ovpn) |
| 114.186.227.133 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/114.186.227.133.ovpn) |
| 153.151.175.100 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.151.175.100.ovpn) |
| 153.164.65.178 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.164.65.178.ovpn) |
| 153.167.57.181 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.167.57.181.ovpn) |
| 153.194.19.88 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.194.19.88.ovpn) |
| 153.195.4.56 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.195.4.56.ovpn) |
| 220.108.51.219 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.108.51.219.ovpn) |
| 1.66.34.35 | Japan | NTT Docomo, inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.66.34.35.ovpn) |
| 1.66.34.35 | Japan | NTT Docomo, inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.66.34.35.ovpn) |
| 124.159.114.8 | Japan | QTnet, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.159.114.8.ovpn) |
| 60.83.105.13 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.83.105.13.ovpn) |
| 60.105.78.58 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.105.78.58.ovpn) |
| 126.1.163.33 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.1.163.33.ovpn) |
| 126.147.3.39 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.147.3.39.ovpn) |
| 221.44.222.243 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.44.222.243.ovpn) |
| 117.55.17.21 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/117.55.17.21.ovpn) |
| 60.91.157.48 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.91.157.48.ovpn) |
| 126.159.10.41 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.159.10.41.ovpn) |
| 60.108.64.157 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.108.64.157.ovpn) |
| 126.92.184.126 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.92.184.126.ovpn) |
| 126.116.179.122 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.116.179.122.ovpn) |
| 126.125.138.230 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.125.138.230.ovpn) |
| 126.161.219.147 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.161.219.147.ovpn) |
| 126.203.95.239 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.203.95.239.ovpn) |
| 126.207.9.145 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.207.9.145.ovpn) |
| 126.227.110.1 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.227.110.1.ovpn) |
| 60.101.84.33 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.101.84.33.ovpn) |
| 60.113.239.82 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.113.239.82.ovpn) |
| 60.119.199.206 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.119.199.206.ovpn) |
| 60.73.52.136 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.73.52.136.ovpn) |
| 60.93.7.71 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.93.7.71.ovpn) |
| 60.93.79.252 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.93.79.252.ovpn) |
| 219.100.37.60 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.60.ovpn) |
| 219.100.37.170 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.170.ovpn) |
| 219.100.37.97 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.97.ovpn) |
| 219.100.37.127 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.127.ovpn) |
| 219.100.37.49 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.49.ovpn) |
| 219.100.37.199 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.199.ovpn) |
| 219.100.37.101 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.101.ovpn) |
| 219.100.37.224 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.224.ovpn) |
| 219.100.37.111 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.111.ovpn) |
| 219.100.37.200 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.200.ovpn) |
| 219.100.37.167 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.167.ovpn) |
| 219.100.37.196 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.196.ovpn) |
| 219.100.37.168 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.168.ovpn) |
| 219.100.37.29 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.29.ovpn) |
| 219.100.37.110 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.110.ovpn) |
| 219.100.37.100 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.100.ovpn) |
| 219.100.37.110 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.110.ovpn) |
| 219.100.37.117 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.117.ovpn) |
| 219.100.37.119 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.119.ovpn) |
| 219.100.37.125 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.125.ovpn) |
| 219.100.37.13 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.13.ovpn) |
| 219.100.37.163 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.163.ovpn) |
| 219.100.37.176 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.176.ovpn) |
| 219.100.37.209 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.209.ovpn) |
| 219.100.37.31 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.31.ovpn) |
| 219.100.37.81 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.81.ovpn) |
| 219.100.37.94 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.94.ovpn) |
| 219.100.37.98 | Japan | SoftEther | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.98.ovpn) |
| 90.149.251.61 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/90.149.251.61.ovpn) |
| 121.3.118.83 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.3.118.83.ovpn) |
| 92.202.104.251 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.202.104.251.ovpn) |
| 59.147.25.134 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.147.25.134.ovpn) |
| 118.240.70.11 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.240.70.11.ovpn) |
| 123.198.239.43 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.198.239.43.ovpn) |
| 223.135.235.118 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/223.135.235.118.ovpn) |
| 131.147.203.90 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/131.147.203.90.ovpn) |
| 131.147.226.44 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/131.147.226.44.ovpn) |
| 111.217.106.162 | Japan | Sony Network Communications Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/111.217.106.162.ovpn) |
| 120.75.146.85 | Japan | Sony Network Communications Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/120.75.146.85.ovpn) |
| 133.114.81.169 | Japan | Sony Network Communications Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/133.114.81.169.ovpn) |
| 211.2.56.29 | Japan | Sony Network Communications Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.2.56.29.ovpn) |
| 112.138.221.113 | Japan | TOKAI Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.138.221.113.ovpn) |
| 123.200.32.254 | Japan | Tokyo Cable Network., Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.200.32.254.ovpn) |
| 117.18.181.73 | Japan | ZTV Co., ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/117.18.181.73.ovpn) |


### Russia
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 217.168.71.220 | Russia | BALTNET | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/217.168.71.220.ovpn) |
| 104.28.225.181 | Russia | Cloudflare, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/104.28.225.181.ovpn) |
| 176.212.53.221 | Russia | JSC "ER-Telecom Holding" | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/176.212.53.221.ovpn) |
| 92.37.200.194 | Russia | KHT RU | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.37.200.194.ovpn) |
| 95.84.132.179 | Russia | NCNET | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/95.84.132.179.ovpn) |
| 109.173.82.211 | Russia | NCNET | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/109.173.82.211.ovpn) |
| 77.34.222.75 | Russia | Primorye NET | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/77.34.222.75.ovpn) |
| 79.105.83.166 | Russia | Rostelecom networks | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/79.105.83.166.ovpn) |
| 176.107.102.45 | Russia | Uzel Svyazy Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/176.107.102.45.ovpn) |


### Saudi Arabia
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 178.80.71.119 | Saudi Arabia | Etihad Etisalat | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/178.80.71.119.ovpn) |


### South Korea
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 120.29.134.202 | South Korea | CMBKWANGJUNET | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/120.29.134.202.ovpn) |
| 58.143.114.217 | South Korea | DLIVE | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.143.114.217.ovpn) |
| 119.192.132.14 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.192.132.14.ovpn) |
| 14.44.79.237 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.44.79.237.ovpn) |
| 61.74.103.127 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.74.103.127.ovpn) |
| 221.144.146.230 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.144.146.230.ovpn) |
| 220.86.35.207 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.86.35.207.ovpn) |
| 121.145.22.30 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.145.22.30.ovpn) |
| 211.192.121.212 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.192.121.212.ovpn) |
| 125.136.187.85 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.136.187.85.ovpn) |
| 211.225.57.219 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.225.57.219.ovpn) |
| 119.195.171.16 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.195.171.16.ovpn) |
| 221.149.220.108 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.149.220.108.ovpn) |
| 119.201.51.221 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.201.51.221.ovpn) |
| 218.146.132.145 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.146.132.145.ovpn) |
| 220.117.106.159 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.117.106.159.ovpn) |
| 222.109.72.37 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.109.72.37.ovpn) |
| 14.33.107.111 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.33.107.111.ovpn) |
| 175.203.99.209 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.203.99.209.ovpn) |
| 211.185.43.203 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.185.43.203.ovpn) |
| 218.158.51.10 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.158.51.10.ovpn) |
| 210.96.106.5 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.96.106.5.ovpn) |
| 59.18.161.138 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.18.161.138.ovpn) |
| 14.40.9.134 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.40.9.134.ovpn) |
| 220.94.12.20 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.94.12.20.ovpn) |
| 125.134.123.30 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.134.123.30.ovpn) |
| 211.218.242.45 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.218.242.45.ovpn) |
| 125.139.180.77 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.139.180.77.ovpn) |
| 210.99.216.226 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.99.216.226.ovpn) |
| 121.188.176.107 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.188.176.107.ovpn) |
| 222.101.198.6 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.101.198.6.ovpn) |
| 220.120.27.3 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.120.27.3.ovpn) |
| 14.48.77.162 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.48.77.162.ovpn) |
| 119.192.99.40 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.192.99.40.ovpn) |
| 121.165.121.93 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.165.121.93.ovpn) |
| 125.140.60.105 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.140.60.105.ovpn) |
| 14.32.119.233 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.32.119.233.ovpn) |
| 14.36.144.253 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.36.144.253.ovpn) |
| 14.42.230.125 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.42.230.125.ovpn) |
| 14.53.132.231 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.53.132.231.ovpn) |
| 175.196.3.212 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.196.3.212.ovpn) |
| 183.103.164.119 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/183.103.164.119.ovpn) |
| 183.99.115.65 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/183.99.115.65.ovpn) |
| 211.192.121.212 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.192.121.212.ovpn) |
| 211.51.70.253 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.51.70.253.ovpn) |
| 220.87.49.215 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.87.49.215.ovpn) |
| 220.90.245.30 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.90.245.30.ovpn) |
| 221.167.26.145 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.167.26.145.ovpn) |
| 222.108.241.212 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.108.241.212.ovpn) |
| 59.5.39.246 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.5.39.246.ovpn) |
| 61.76.60.236 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.76.60.236.ovpn) |
| 121.129.180.216 | South Korea | KORNET | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.129.180.216.ovpn) |
| 211.170.143.162 | South Korea | LG DACOM Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.170.143.162.ovpn) |
| 106.250.59.87 | South Korea | LG DACOM Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.250.59.87.ovpn) |
| 1.255.125.82 | South Korea | LG HelloVision Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.255.125.82.ovpn) |
| 115.138.248.91 | South Korea | LG POWERCOMM | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/115.138.248.91.ovpn) |
| 112.151.52.86 | South Korea | LG POWERCOMM | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.151.52.86.ovpn) |
| 115.138.88.176 | South Korea | LG POWERCOMM | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/115.138.88.176.ovpn) |
| 115.143.141.187 | South Korea | LG POWERCOMM | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/115.143.141.187.ovpn) |
| 49.164.67.73 | South Korea | LG POWERCOMM | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.164.67.73.ovpn) |
| 114.206.206.178 | South Korea | SK Broadband Co Ltd | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/114.206.206.178.ovpn) |
| 1.230.188.36 | South Korea | SK Broadband Co Ltd | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.230.188.36.ovpn) |
| 58.224.55.199 | South Korea | SK Broadband Co Ltd | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.224.55.199.ovpn) |
| 175.114.13.177 | South Korea | SK Broadband Co Ltd | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.114.13.177.ovpn) |
| 211.44.36.5 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.44.36.5.ovpn) |
| 121.127.181.174 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.127.181.174.ovpn) |
| 1.235.135.82 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.235.135.82.ovpn) |
| 61.254.214.84 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.254.214.84.ovpn) |
| 124.111.221.107 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.111.221.107.ovpn) |
| 123.212.29.52 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.212.29.52.ovpn) |
| 211.178.35.232 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.178.35.232.ovpn) |
| 58.120.6.81 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.120.6.81.ovpn) |


### Taiwan
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 122.99.21.46 | Taiwan | KE-ING | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |
| 122.99.21.46 | Taiwan | KE-ING | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |


### Thailand
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 184.22.20.224 | Thailand | AIS-Fibre | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/184.22.20.224.ovpn) |
| 124.120.192.100 | Thailand | TRUEBB | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.120.192.100.ovpn) |


### United Kingdom
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 92.237.94.165 | United Kingdom | Virgin Media Limited | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.237.94.165.ovpn) |


### United States
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 64.189.47.114 | United States | Apogee Telecom Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/64.189.47.114.ovpn) |
| 67.180.18.67 | United States | Comcast Cable Communications, LLC | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/67.180.18.67.ovpn) |
| 24.2.179.226 | United States | Comcast Cable Communications, LLC | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/24.2.179.226.ovpn) |
| 98.56.111.53 | United States | Comcast Cable Communications, LLC | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/98.56.111.53.ovpn) |
| 68.109.162.45 | United States | Cox Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/68.109.162.45.ovpn) |
| 47.146.98.204 | United States | Frontier Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/47.146.98.204.ovpn) |
| 136.36.50.20 | United States | Google Fiber Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/136.36.50.20.ovpn) |


### Vietnam
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 58.187.199.227 | Vietnam | FPT Telecom Company | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.187.199.227.ovpn) |
| 1.53.181.116 | Vietnam | FPT Telecom Company | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.53.181.116.ovpn) |
| 42.118.45.99 | Vietnam | FPT Telecom Company | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.118.45.99.ovpn) |
| 42.112.233.36 | Vietnam | FPT Telecom Company | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.112.233.36.ovpn) |
| 42.113.73.43 | Vietnam | FPT Telecom Company | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.113.73.43.ovpn) |
| 118.71.204.136 | Vietnam | Vietnam Internet Network Information Center | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.71.204.136.ovpn) |
| 118.71.204.136 | Vietnam | Vietnam Internet Network Information Center | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.71.204.136.ovpn) |
| 118.71.199.48 | Vietnam | Vietnam Internet Network Information Center | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.71.199.48.ovpn) |
| 117.2.233.34 | Vietnam | Viettel Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/117.2.233.34.ovpn) |

> **Tip**: For the full list, check the `data/configs/` folder after running the scraper.


## Contributing
Contributions are welcome! Feel free to open an issue or a pull request.

## License
MIT

