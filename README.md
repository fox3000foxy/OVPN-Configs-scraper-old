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

### Iran
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 213.176.120.57 | Iran | Parsway Shomal Company Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/213.176.120.57.ovpn) |


### Japan
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 131.129.141.44 | Japan | ASAHI Net, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/131.129.141.44.ovpn) |
| 14.3.169.219 | Japan | ASAHI Net, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.3.169.219.ovpn) |
| 14.3.169.219 | Japan | ASAHI Net, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.3.169.219.ovpn) |
| 220.144.138.106 | Japan | BIGLOBE | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.144.138.106.ovpn) |
| 133.202.204.158 | Japan | BIGLOBE Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/133.202.204.158.ovpn) |
| 118.104.82.43 | Japan | Chubu Telecommunications Company, Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.104.82.43.ovpn) |
| 124.18.157.30 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.18.157.30.ovpn) |
| 118.104.82.43 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.104.82.43.ovpn) |
| 123.48.130.59 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.48.130.59.ovpn) |
| 203.179.136.244 | Japan | Chukai Television Co, .Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/203.179.136.244.ovpn) |
| 221.121.235.53 | Japan | Community Network Center Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.121.235.53.ovpn) |
| 211.15.3.221 | Japan | Community Network Center Incorporated. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.15.3.221.ovpn) |
| 218.216.222.52 | Japan | Community Network Center Incorporated. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.216.222.52.ovpn) |
| 124.211.232.11 | Japan | DION (KDDI CORPORATION) | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.211.232.11.ovpn) |
| 119.105.64.95 | Japan | DION (KDDI CORPORATION) | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.105.64.95.ovpn) |
| 222.0.159.199 | Japan | DION (KDDI CORPORATION) | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.0.159.199.ovpn) |
| 223.223.101.14 | Japan | Enecom, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/223.223.101.14.ovpn) |
| 121.200.179.81 | Japan | Enecom, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.200.179.81.ovpn) |
| 116.80.75.113 | Japan | InfoSphere | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.80.75.113.ovpn) |
| 58.138.59.133 | Japan | Internet Initiative Japan Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.138.59.133.ovpn) |
| 14.193.110.208 | Japan | JCN | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.193.110.208.ovpn) |
| 125.15.242.22 | Japan | JCOM Co | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.15.242.22.ovpn) |
| 125.15.242.22 | Japan | JCOM Co | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.15.242.22.ovpn) |
| 125.9.19.197 | Japan | JCOM Co | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.9.19.197.ovpn) |
| 42.148.24.137 | Japan | JCOM Co., Ltd. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.148.24.137.ovpn) |
| 42.150.0.82 | Japan | JCOM Co., Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.150.0.82.ovpn) |
| 60.62.142.107 | Japan | JCOM Co., Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.62.142.107.ovpn) |
| 106.161.34.210 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.161.34.210.ovpn) |
| 124.213.240.18 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.213.240.18.ovpn) |
| 118.156.63.54 | Japan | Kddi Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.156.63.54.ovpn) |
| 117.109.142.141 | Japan | Kintetsu Cable Network Co., Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/117.109.142.141.ovpn) |
| 113.197.44.117 | Japan | Newmedia Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/113.197.44.117.ovpn) |
| 180.20.78.122 | Japan | NTT Communications Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.20.78.122.ovpn) |
| 180.29.95.165 | Japan | NTT Communications Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.29.95.165.ovpn) |
| 114.159.149.38 | Japan | NTT Communications Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/114.159.149.38.ovpn) |
| 180.52.41.74 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.52.41.74.ovpn) |
| 153.232.238.142 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.232.238.142.ovpn) |
| 121.119.11.100 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.119.11.100.ovpn) |
| 125.207.202.184 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.207.202.184.ovpn) |
| 153.189.235.170 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.189.235.170.ovpn) |
| 125.202.44.37 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.202.44.37.ovpn) |
| 153.198.176.89 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.198.176.89.ovpn) |
| 157.120.13.212 | Japan | NTT PC Communications, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/157.120.13.212.ovpn) |
| 157.120.13.45 | Japan | NTT PC Communications, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/157.120.13.45.ovpn) |
| 124.45.52.112 | Japan | NTT-ME Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.45.52.112.ovpn) |
| 58.189.6.26 | Japan | OPTAGE Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.189.6.26.ovpn) |
| 112.69.85.160 | Japan | OPTAGE Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.69.85.160.ovpn) |
| 121.86.56.148 | Japan | OPTAGE Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.86.56.148.ovpn) |
| 58.70.196.112 | Japan | OPTAGE Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.70.196.112.ovpn) |
| 202.226.247.224 | Japan | QTnet, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/202.226.247.224.ovpn) |
| 58.3.3.12 | Japan | QTnet, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.3.3.12.ovpn) |
| 223.135.47.109 | Japan | So-net Entertainment Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/223.135.47.109.ovpn) |
| 60.137.146.81 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.137.146.81.ovpn) |
| 221.103.92.61 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.103.92.61.ovpn) |
| 126.217.201.240 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.217.201.240.ovpn) |
| 60.129.119.6 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.129.119.6.ovpn) |
| 60.153.147.72 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.153.147.72.ovpn) |
| 60.109.22.154 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.109.22.154.ovpn) |
| 126.108.250.38 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.108.250.38.ovpn) |
| 126.108.90.181 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.108.90.181.ovpn) |
| 126.114.249.79 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.114.249.79.ovpn) |
| 126.115.0.249 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.115.0.249.ovpn) |
| 126.26.235.86 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.26.235.86.ovpn) |
| 126.28.92.236 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.28.92.236.ovpn) |
| 126.79.91.233 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.79.91.233.ovpn) |
| 60.69.234.104 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.69.234.104.ovpn) |
| 219.100.37.49 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.49.ovpn) |
| 219.100.37.199 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.199.ovpn) |
| 219.100.37.101 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.101.ovpn) |
| 219.100.37.224 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.224.ovpn) |
| 219.100.37.200 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.200.ovpn) |
| 219.100.37.111 | Japan | SoftEther | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.111.ovpn) |
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
| 92.203.159.128 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.203.159.128.ovpn) |
| 39.111.40.240 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/39.111.40.240.ovpn) |
| 115.162.118.226 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/115.162.118.226.ovpn) |
| 115.162.118.226 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/115.162.118.226.ovpn) |
| 121.3.118.83 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.3.118.83.ovpn) |
| 152.165.208.68 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/152.165.208.68.ovpn) |
| 39.110.119.41 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/39.110.119.41.ovpn) |
| 211.2.56.29 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.2.56.29.ovpn) |
| 120.75.146.85 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/120.75.146.85.ovpn) |
| 111.217.106.162 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/111.217.106.162.ovpn) |
| 219.106.207.134 | Japan | TOKAI Communications Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.106.207.134.ovpn) |
| 182.21.139.78 | Japan | TOKAI Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/182.21.139.78.ovpn) |
| 42.124.59.85 | Japan | TOKAI Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.124.59.85.ovpn) |
| 123.200.32.254 | Japan | Tokyo Cable Network., Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.200.32.254.ovpn) |
| 124.35.165.239 | Japan | UCOM Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.35.165.239.ovpn) |


### Russia
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 80.243.3.178 | Russia | COMPNET | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/80.243.3.178.ovpn) |
| 46.181.6.196 | Russia | Goodline.info | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/46.181.6.196.ovpn) |
| 176.226.148.124 | Russia | Intersvyaz-2 JSC | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/176.226.148.124.ovpn) |
| 46.242.13.176 | Russia | NCNET | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/46.242.13.176.ovpn) |
| 46.242.13.176 | Russia | NCNET | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/46.242.13.176.ovpn) |
| 95.154.70.147 | Russia | OCTOPUSNET-NAT | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/95.154.70.147.ovpn) |
| 77.82.38.44 | Russia | PJSC Rostelecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/77.82.38.44.ovpn) |
| 109.110.57.105 | Russia | Podryad Nets | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/109.110.57.105.ovpn) |
| 109.110.57.105 | Russia | Podryad Nets | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/109.110.57.105.ovpn) |
| 77.35.13.126 | Russia | PRIMORYE | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/77.35.13.126.ovpn) |
| 81.2.14.132 | Russia | Primorye NET | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/81.2.14.132.ovpn) |
| 164.138.88.215 | Russia | Redcom LIR 5 | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/164.138.88.215.ovpn) |
| 94.233.119.27 | Russia | Rostelecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/94.233.119.27.ovpn) |
| 95.188.84.114 | Russia | Rostelecom networks | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/95.188.84.114.ovpn) |
| 5.137.106.120 | Russia | Rostelecom networks | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/5.137.106.120.ovpn) |
| 5.137.7.135 | Russia | Rostelecom networks | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/5.137.7.135.ovpn) |
| 5.143.59.23 | Russia | Rostelecom networks | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/5.143.59.23.ovpn) |
| 92.126.241.150 | Russia | Rostelecom networks | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.126.241.150.ovpn) |
| 92.126.241.150 | Russia | Rostelecom networks | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/92.126.241.150.ovpn) |
| 188.113.157.153 | Russia | Sakhalin Cable Telesystems Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/188.113.157.153.ovpn) |
| 188.242.188.133 | Russia | SkyNet LLC | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/188.242.188.133.ovpn) |
| 79.136.130.78 | Russia | TOMTEL networks | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/79.136.130.78.ovpn) |
| 146.120.216.115 | Russia | Vasilyev Ivan Ivanovich | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/146.120.216.115.ovpn) |


### South Korea
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 211.241.185.22 | South Korea | abcle | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.241.185.22.ovpn) |
| 101.235.81.130 | South Korea | DLIVE | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/101.235.81.130.ovpn) |
| 183.99.115.65 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/183.99.115.65.ovpn) |
| 183.104.120.195 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/183.104.120.195.ovpn) |
| 183.99.8.24 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/183.99.8.24.ovpn) |
| 14.42.230.125 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.42.230.125.ovpn) |
| 121.169.7.27 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.169.7.27.ovpn) |
| 175.199.109.201 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.199.109.201.ovpn) |
| 112.187.58.188 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.187.58.188.ovpn) |
| 59.2.145.202 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.2.145.202.ovpn) |
| 222.117.186.129 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.117.186.129.ovpn) |
| 121.165.95.225 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.165.95.225.ovpn) |
| 220.122.51.250 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.122.51.250.ovpn) |
| 61.74.103.127 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.74.103.127.ovpn) |
| 218.146.77.98 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.146.77.98.ovpn) |
| 59.8.205.180 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.8.205.180.ovpn) |
| 59.2.145.202 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.2.145.202.ovpn) |
| 128.134.180.173 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/128.134.180.173.ovpn) |
| 220.85.140.220 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.85.140.220.ovpn) |
| 59.6.15.42 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.6.15.42.ovpn) |
| 222.98.75.207 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.98.75.207.ovpn) |
| 121.140.69.141 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.140.69.141.ovpn) |
| 121.144.17.56 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.144.17.56.ovpn) |
| 121.139.122.45 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.139.122.45.ovpn) |
| 211.54.248.214 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.54.248.214.ovpn) |
| 119.207.188.208 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.207.188.208.ovpn) |
| 175.199.106.185 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.199.106.185.ovpn) |
| 121.134.72.146 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.134.72.146.ovpn) |
| 220.126.211.10 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.126.211.10.ovpn) |
| 220.126.11.18 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.126.11.18.ovpn) |
| 121.150.220.180 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.150.220.180.ovpn) |
| 220.126.206.103 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.126.206.103.ovpn) |
| 121.164.128.122 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.164.128.122.ovpn) |
| 112.170.156.205 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.170.156.205.ovpn) |
| 121.134.70.25 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.134.70.25.ovpn) |
| 121.134.72.146 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.134.72.146.ovpn) |
| 121.138.184.62 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.138.184.62.ovpn) |
| 121.144.108.185 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.144.108.185.ovpn) |
| 121.148.153.162 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.148.153.162.ovpn) |
| 121.169.185.252 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.169.185.252.ovpn) |
| 14.46.204.232 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.46.204.232.ovpn) |
| 211.197.189.78 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.197.189.78.ovpn) |
| 220.121.196.246 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.121.196.246.ovpn) |
| 222.112.202.229 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.112.202.229.ovpn) |
| 59.13.255.242 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.13.255.242.ovpn) |
| 125.133.241.87 | South Korea | KORNET | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.133.241.87.ovpn) |
| 112.216.35.186 | South Korea | LG DACOM Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.216.35.186.ovpn) |
| 58.151.98.70 | South Korea | LG DACOM Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.151.98.70.ovpn) |
| 1.212.13.22 | South Korea | LG DACOM Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.212.13.22.ovpn) |
| 58.150.189.252 | South Korea | LG DACOM Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.150.189.252.ovpn) |
| 42.82.223.31 | South Korea | LG HelloVision Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.82.223.31.ovpn) |
| 125.240.157.209 | South Korea | LG POWERCOMM | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.240.157.209.ovpn) |
| 124.153.232.169 | South Korea | Seokyung Cable Television Co.. Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.153.232.169.ovpn) |
| 218.234.8.63 | South Korea | SK Broadband Co Ltd | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.234.8.63.ovpn) |
| 39.121.107.44 | South Korea | SK Broadband Co Ltd | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/39.121.107.44.ovpn) |
| 58.238.40.242 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.238.40.242.ovpn) |
| 1.238.197.132 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.238.197.132.ovpn) |
| 211.245.134.52 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.245.134.52.ovpn) |
| 58.236.42.120 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.236.42.120.ovpn) |
| 58.121.128.4 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.121.128.4.ovpn) |
| 211.204.78.157 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.204.78.157.ovpn) |
| 1.235.107.148 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.235.107.148.ovpn) |
| 211.243.70.83 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.243.70.83.ovpn) |
| 114.207.165.128 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/114.207.165.128.ovpn) |
| 211.110.172.118 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.110.172.118.ovpn) |
| 211.243.70.83 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.243.70.83.ovpn) |
| 58.125.136.79 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.125.136.79.ovpn) |


### Taiwan
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 182.235.231.66 | Taiwan | Hoshin Multimedia Center Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/182.235.231.66.ovpn) |
| 122.99.21.46 | Taiwan | KE-ING | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |
| 122.99.21.46 | Taiwan | KE-ING | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |
| 122.99.21.46 | Taiwan | KE-ING | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |


### Thailand
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 49.228.101.221 | Thailand | Advanced Wireless Network Company Limited | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.228.101.221.ovpn) |
| 184.22.89.48 | Thailand | AIS-Fibre | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/184.22.89.48.ovpn) |
| 184.22.105.172 | Thailand | AIS-Fibre | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/184.22.105.172.ovpn) |
| 184.82.151.164 | Thailand | AIS-Fibre | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/184.82.151.164.ovpn) |
| 223.207.245.190 | Thailand | Triple T Broadband Public Company Limited | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/223.207.245.190.ovpn) |
| 49.48.178.24 | Thailand | Triple T Broadband Public Company Limited | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.48.178.24.ovpn) |
| 49.49.222.211 | Thailand | Triple T Broadband Public Company Limited | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.49.222.211.ovpn) |


### Ukraine
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 31.28.244.97 | Ukraine | Lancom Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/31.28.244.97.ovpn) |


### United States
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 73.71.101.152 | United States | Comcast Cable Communications | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/73.71.101.152.ovpn) |
| 67.188.239.110 | United States | Comcast Cable Communications, LLC | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/67.188.239.110.ovpn) |
| 47.154.109.161 | United States | Frontier Communications Solutions | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/47.154.109.161.ovpn) |
| 47.147.219.96 | United States | Frontier Communications Solutions | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/47.147.219.96.ovpn) |


### Uzbekistan
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 62.209.146.86 | Uzbekistan | "IST TELEKOM" JV LLC | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/62.209.146.86.ovpn) |


### Vietnam
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 58.186.173.62 | Vietnam | FPT Telecom Company | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.186.173.62.ovpn) |
| 27.72.73.79 | Vietnam | Newass2011xDSLHN | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/27.72.73.79.ovpn) |
| 45.80.186.41 | Vietnam | PacketHub S.A. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/45.80.186.41.ovpn) |
| 118.70.202.83 | Vietnam | Vietnam Internet Network Information Center | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.70.202.83.ovpn) |
| 123.21.150.249 | Vietnam | VietNam Post and Telecom Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.21.150.249.ovpn) |

> **Tip**: For the full list, check the `data/configs/` folder after running the scraper.


## Contributing
Contributions are welcome! Feel free to open an issue or a pull request.

## License
MIT

