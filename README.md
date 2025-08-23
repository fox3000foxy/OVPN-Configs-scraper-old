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

### Argentina
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 181.116.60.240 | Argentina | Techtel LMDS Comunicaciones Interactivas S.A. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/181.116.60.240.ovpn) |


### Australia
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 27.33.133.201 | Australia | TPG Internet Pty Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/27.33.133.201.ovpn) |


### Japan
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 222.229.213.169 | Japan | ARTERIA Networks Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.229.213.169.ovpn) |
| 220.146.32.132 | Japan | ASAHI Net, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.146.32.132.ovpn) |
| 60.237.17.175 | Japan | BIGLOBE Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.237.17.175.ovpn) |
| 133.209.175.252 | Japan | BIGLOBE Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/133.209.175.252.ovpn) |
| 121.92.30.10 | Japan | Cable Television TOYAMA Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.92.30.10.ovpn) |
| 180.198.6.244 | Japan | Chubu Telecommunications Company, Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.198.6.244.ovpn) |
| 124.18.97.154 | Japan | Chubu Telecommunications Company, Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.18.97.154.ovpn) |
| 14.132.27.53 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.132.27.53.ovpn) |
| 115.38.83.183 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/115.38.83.183.ovpn) |
| 14.132.27.53 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.132.27.53.ovpn) |
| 202.79.159.167 | Japan | Community Network Center Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/202.79.159.167.ovpn) |
| 202.79.159.167 | Japan | Community Network Center Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/202.79.159.167.ovpn) |
| 116.12.3.7 | Japan | Community Network Center Incorporated. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.12.3.7.ovpn) |
| 125.4.218.176 | Japan | CWK | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.4.218.176.ovpn) |
| 113.154.110.135 | Japan | DION (KDDI CORPORATION) | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/113.154.110.135.ovpn) |
| 118.158.196.180 | Japan | DION (KDDI CORPORATION) | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.158.196.180.ovpn) |
| 122.145.117.190 | Japan | FreeBit Co., Ltd. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.145.117.190.ovpn) |
| 175.41.101.48 | Japan | JCOM | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.41.101.48.ovpn) |
| 125.14.139.151 | Japan | JCOM Co | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.14.139.151.ovpn) |
| 61.26.8.101 | Japan | JCOM Co., Ltd. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.26.8.101.ovpn) |
| 58.85.126.221 | Japan | JCOM Co., Ltd. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.85.126.221.ovpn) |
| 61.23.155.215 | Japan | JCOM Co., Ltd. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.23.155.215.ovpn) |
| 116.222.29.22 | Japan | JCOM Co., Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.222.29.22.ovpn) |
| 27.136.219.48 | Japan | JCOM Co., Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/27.136.219.48.ovpn) |
| 106.136.47.234 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.136.47.234.ovpn) |
| 106.153.5.207 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.153.5.207.ovpn) |
| 175.135.233.246 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.135.233.246.ovpn) |
| 106.153.80.158 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.153.80.158.ovpn) |
| 106.157.86.66 | Japan | Kddi Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.157.86.66.ovpn) |
| 60.46.252.114 | Japan | NTT Communications Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.46.252.114.ovpn) |
| 180.49.196.87 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.49.196.87.ovpn) |
| 153.181.100.35 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.181.100.35.ovpn) |
| 114.173.91.31 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/114.173.91.31.ovpn) |
| 153.178.173.86 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.178.173.86.ovpn) |
| 153.230.178.25 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.230.178.25.ovpn) |
| 114.144.250.194 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/114.144.250.194.ovpn) |
| 153.181.100.35 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.181.100.35.ovpn) |
| 180.11.142.178 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.11.142.178.ovpn) |
| 1.66.34.35 | Japan | NTT Docomo, inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.66.34.35.ovpn) |
| 210.165.136.195 | Japan | NTT PC Communications, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.165.136.195.ovpn) |
| 180.146.97.71 | Japan | OPTAGE Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.146.97.71.ovpn) |
| 125.56.117.10 | Japan | QTnet, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.56.117.10.ovpn) |
| 124.159.92.159 | Japan | QTnet, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.159.92.159.ovpn) |
| 126.64.214.156 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.64.214.156.ovpn) |
| 60.141.175.27 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.141.175.27.ovpn) |
| 126.218.214.56 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.218.214.56.ovpn) |
| 126.28.92.73 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.28.92.73.ovpn) |
| 126.1.163.33 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.1.163.33.ovpn) |
| 126.92.159.10 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.92.159.10.ovpn) |
| 60.96.126.111 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.96.126.111.ovpn) |
| 126.34.193.162 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.34.193.162.ovpn) |
| 126.177.247.185 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.177.247.185.ovpn) |
| 126.60.124.202 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.60.124.202.ovpn) |
| 126.29.1.144 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.29.1.144.ovpn) |
| 126.51.225.45 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.51.225.45.ovpn) |
| 126.48.182.76 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.48.182.76.ovpn) |
| 60.125.195.98 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.125.195.98.ovpn) |
| 126.216.204.136 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.216.204.136.ovpn) |
| 126.125.83.121 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.125.83.121.ovpn) |
| 126.120.236.29 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.120.236.29.ovpn) |
| 126.125.35.148 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.125.35.148.ovpn) |
| 126.145.136.66 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.145.136.66.ovpn) |
| 126.171.145.197 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.171.145.197.ovpn) |
| 221.45.69.114 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.45.69.114.ovpn) |
| 60.120.20.164 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.120.20.164.ovpn) |
| 60.122.72.40 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.122.72.40.ovpn) |
| 60.150.170.138 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.150.170.138.ovpn) |
| 60.67.223.111 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.67.223.111.ovpn) |
| 219.100.37.97 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.97.ovpn) |
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
| 92.203.159.128 | Japan | Sony Network Communications Inc | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.203.159.128.ovpn) |
| 59.147.136.61 | Japan | Sony Network Communications Inc | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.147.136.61.ovpn) |
| 118.240.75.72 | Japan | Sony Network Communications Inc | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.240.75.72.ovpn) |
| 182.168.207.109 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/182.168.207.109.ovpn) |
| 182.168.207.109 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/182.168.207.109.ovpn) |
| 118.237.170.123 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.237.170.123.ovpn) |
| 150.147.41.74 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/150.147.41.74.ovpn) |
| 121.103.81.209 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.103.81.209.ovpn) |
| 121.103.60.56 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.103.60.56.ovpn) |
| 121.103.40.108 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.103.40.108.ovpn) |
| 118.237.170.123 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.237.170.123.ovpn) |
| 118.240.3.52 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.240.3.52.ovpn) |
| 92.202.213.130 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.202.213.130.ovpn) |
| 92.203.77.135 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.203.77.135.ovpn) |
| 131.147.4.204 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/131.147.4.204.ovpn) |
| 182.21.139.78 | Japan | TOKAI Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/182.21.139.78.ovpn) |
| 59.85.51.59 | Japan | TOKAI Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.85.51.59.ovpn) |


### Russia
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 5.8.206.213 | Russia | CJSC "Transtelecom-DV" | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/5.8.206.213.ovpn) |
| 92.37.217.121 | Russia | KHT RU | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.37.217.121.ovpn) |
| 77.82.101.9 | Russia | OJSC Rostelecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/77.82.101.9.ovpn) |
| 82.162.52.22 | Russia | Primorye NET | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/82.162.52.22.ovpn) |
| 77.82.24.206 | Russia | Rostelecom Khabarovsk branch | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/77.82.24.206.ovpn) |
| 79.105.154.118 | Russia | Rostelecom networks | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/79.105.154.118.ovpn) |
| 5.18.159.94 | Russia | Z-Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/5.18.159.94.ovpn) |


### South Korea
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 113.199.32.62 | South Korea | ABN | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/113.199.32.62.ovpn) |
| 61.96.244.33 | South Korea | CCS | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.96.244.33.ovpn) |
| 118.32.42.108 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.32.42.108.ovpn) |
| 220.86.35.207 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.86.35.207.ovpn) |
| 121.139.244.22 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.139.244.22.ovpn) |
| 211.248.10.82 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.248.10.82.ovpn) |
| 175.203.99.209 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.203.99.209.ovpn) |
| 14.34.175.127 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.34.175.127.ovpn) |
| 175.204.219.167 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.204.219.167.ovpn) |
| 14.42.230.125 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.42.230.125.ovpn) |
| 183.109.13.142 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/183.109.13.142.ovpn) |
| 121.142.168.169 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.142.168.169.ovpn) |
| 59.29.254.93 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.29.254.93.ovpn) |
| 218.146.77.98 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.146.77.98.ovpn) |
| 119.203.71.47 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.203.71.47.ovpn) |
| 14.38.102.250 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.38.102.250.ovpn) |
| 121.161.2.130 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.161.2.130.ovpn) |
| 222.98.75.207 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.98.75.207.ovpn) |
| 220.126.11.18 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.126.11.18.ovpn) |
| 121.141.111.125 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.141.111.125.ovpn) |
| 203.251.123.85 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/203.251.123.85.ovpn) |
| 220.121.88.62 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.121.88.62.ovpn) |
| 211.57.147.198 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.57.147.198.ovpn) |
| 121.187.26.249 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.187.26.249.ovpn) |
| 211.199.17.252 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.199.17.252.ovpn) |
| 220.84.162.134 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.84.162.134.ovpn) |
| 221.155.135.166 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.155.135.166.ovpn) |
| 218.159.62.209 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.159.62.209.ovpn) |
| 14.63.51.52 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.63.51.52.ovpn) |
| 221.145.151.109 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.145.151.109.ovpn) |
| 112.164.216.222 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.164.216.222.ovpn) |
| 118.38.131.91 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.38.131.91.ovpn) |
| 119.196.161.108 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.196.161.108.ovpn) |
| 119.207.53.148 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.207.53.148.ovpn) |
| 121.144.11.141 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.144.11.141.ovpn) |
| 121.183.139.146 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.183.139.146.ovpn) |
| 121.186.197.223 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.186.197.223.ovpn) |
| 14.32.161.234 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.32.161.234.ovpn) |
| 14.33.133.125 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.33.133.125.ovpn) |
| 14.38.150.121 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.38.150.121.ovpn) |
| 175.195.254.126 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.195.254.126.ovpn) |
| 175.203.99.209 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.203.99.209.ovpn) |
| 175.210.238.10 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.210.238.10.ovpn) |
| 175.212.128.6 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.212.128.6.ovpn) |
| 175.238.21.152 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.238.21.152.ovpn) |
| 210.179.26.117 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.179.26.117.ovpn) |
| 210.91.8.68 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.91.8.68.ovpn) |
| 210.96.106.5 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.96.106.5.ovpn) |
| 211.184.12.252 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.184.12.252.ovpn) |
| 211.227.110.122 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.227.110.122.ovpn) |
| 220.127.192.79 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.127.192.79.ovpn) |
| 221.148.106.166 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.148.106.166.ovpn) |
| 222.103.9.189 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.103.9.189.ovpn) |
| 222.116.36.78 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.116.36.78.ovpn) |
| 59.17.238.210 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.17.238.210.ovpn) |
| 59.27.244.139 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.27.244.139.ovpn) |
| 59.3.169.228 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.3.169.228.ovpn) |
| 61.82.153.93 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.82.153.93.ovpn) |
| 222.104.162.46 | South Korea | KORNET | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.104.162.46.ovpn) |
| 119.195.68.10 | South Korea | KORNET | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.195.68.10.ovpn) |
| 220.83.152.7 | South Korea | KORNET | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.83.152.7.ovpn) |
| 106.242.0.235 | South Korea | LG DACOM Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.242.0.235.ovpn) |
| 115.90.91.30 | South Korea | LG DACOM Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/115.90.91.30.ovpn) |
| 58.151.202.78 | South Korea | LG DACOM Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.151.202.78.ovpn) |
| 119.70.127.101 | South Korea | LG POWERCOMM | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.70.127.101.ovpn) |
| 49.166.235.210 | South Korea | LG POWERCOMM | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.166.235.210.ovpn) |
| 112.145.244.240 | South Korea | LG POWERCOMM | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.145.244.240.ovpn) |
| 182.213.165.128 | South Korea | LG POWERCOMM | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/182.213.165.128.ovpn) |
| 116.36.148.140 | South Korea | LG POWERCOMM | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.36.148.140.ovpn) |
| 122.47.245.200 | South Korea | LG POWERCOMM | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.47.245.200.ovpn) |
| 118.216.175.105 | South Korea | SK Broadband Co Ltd | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.216.175.105.ovpn) |
| 1.243.176.200 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.243.176.200.ovpn) |
| 1.246.154.63 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.246.154.63.ovpn) |
| 1.240.128.118 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.240.128.118.ovpn) |
| 1.235.107.148 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.235.107.148.ovpn) |
| 123.214.51.62 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.214.51.62.ovpn) |
| 211.205.161.205 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.205.161.205.ovpn) |
| 1.246.154.67 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.246.154.67.ovpn) |
| 114.207.243.18 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/114.207.243.18.ovpn) |
| 123.212.106.120 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.212.106.120.ovpn) |
| 175.121.178.81 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.121.178.81.ovpn) |
| 219.240.6.118 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.240.6.118.ovpn) |
| 58.126.16.227 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.126.16.227.ovpn) |


### Switzerland
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 80.218.232.247 | Switzerland | UPC Schweiz GmbH | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/80.218.232.247.ovpn) |


### Taiwan
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 122.99.21.46 | Taiwan | KE-ING | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |
| 122.99.21.46 | Taiwan | KE-ING | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |


### Thailand
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 49.228.105.161 | Thailand | Advanced Wireless Network Company Limited | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.228.105.161.ovpn) |


### United Kingdom
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 92.19.114.253 | United Kingdom | TalkTalk | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.19.114.253.ovpn) |
| 92.19.114.253 | United Kingdom | TalkTalk | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.19.114.253.ovpn) |
| 86.24.15.142 | United Kingdom | Virgin Media Limited | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/86.24.15.142.ovpn) |


### United States
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 71.95.123.11 | United States | Charter Communications | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/71.95.123.11.ovpn) |
| 73.223.183.55 | United States | Comcast Cable Communications, LLC | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/73.223.183.55.ovpn) |
| 76.135.123.187 | United States | Comcast Cable Communications, LLC | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/76.135.123.187.ovpn) |
| 98.167.207.43 | United States | Cox Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/98.167.207.43.ovpn) |
| 47.148.185.224 | United States | Frontier Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/47.148.185.224.ovpn) |


### Vietnam
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 210.245.78.240 | Vietnam | FPT Telecom Company | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.245.78.240.ovpn) |
| 42.113.112.163 | Vietnam | FPT Telecom Company | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.113.112.163.ovpn) |
| 42.119.163.76 | Vietnam | FPT Telecom Company | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.119.163.76.ovpn) |
| 58.187.248.20 | Vietnam | FPT Telecom Company | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.187.248.20.ovpn) |
| 115.76.7.78 | Vietnam | VIETELGPRS | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/115.76.7.78.ovpn) |
| 117.2.236.149 | Vietnam | Viettel Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/117.2.236.149.ovpn) |
| 171.247.189.38 | Vietnam | Viettel Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/171.247.189.38.ovpn) |

> **Tip**: For the full list, check the `data/configs/` folder after running the scraper.


## Contributing
Contributions are welcome! Feel free to open an issue or a pull request.

## License
MIT

