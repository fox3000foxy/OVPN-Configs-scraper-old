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

### Canada
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 70.69.200.251 | Canada | Shaw Communications Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/70.69.200.251.ovpn) |


### Iran
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 213.176.120.57 | Iran | Parsway Shomal Company Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/213.176.120.57.ovpn) |
| 91.206.171.94 | Iran | Web Dadeh Paydar Co (Ltd) | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/91.206.171.94.ovpn) |


### Japan
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 131.129.141.44 | Japan | ASAHI Net, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/131.129.141.44.ovpn) |
| 14.3.169.219 | Japan | ASAHI Net, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.3.169.219.ovpn) |
| 14.3.169.219 | Japan | ASAHI Net, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.3.169.219.ovpn) |
| 220.144.138.106 | Japan | BIGLOBE | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.144.138.106.ovpn) |
| 133.202.204.158 | Japan | BIGLOBE Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/133.202.204.158.ovpn) |
| 180.198.223.175 | Japan | Chubu Telecommunications Company, Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.198.223.175.ovpn) |
| 124.18.157.30 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.18.157.30.ovpn) |
| 118.104.82.43 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.104.82.43.ovpn) |
| 123.48.130.59 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.48.130.59.ovpn) |
| 203.179.136.244 | Japan | Chukai Television Co, .Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/203.179.136.244.ovpn) |
| 221.121.235.53 | Japan | Community Network Center Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.121.235.53.ovpn) |
| 211.15.3.221 | Japan | Community Network Center Incorporated. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.15.3.221.ovpn) |
| 218.216.222.52 | Japan | Community Network Center Incorporated. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.216.222.52.ovpn) |
| 113.148.41.252 | Japan | DION (KDDI CORPORATION) | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/113.148.41.252.ovpn) |
| 125.49.164.68 | Japan | DION (KDDI CORPORATION) | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.49.164.68.ovpn) |
| 124.211.232.11 | Japan | DION (KDDI CORPORATION) | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.211.232.11.ovpn) |
| 119.105.64.95 | Japan | DION (KDDI CORPORATION) | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.105.64.95.ovpn) |
| 222.0.159.199 | Japan | DION (KDDI CORPORATION) | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.0.159.199.ovpn) |
| 223.223.101.14 | Japan | Enecom, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/223.223.101.14.ovpn) |
| 116.80.75.113 | Japan | InfoSphere | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.80.75.113.ovpn) |
| 58.138.59.133 | Japan | Internet Initiative Japan Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.138.59.133.ovpn) |
| 219.104.203.212 | Japan | Japan Network Information Center | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.104.203.212.ovpn) |
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
| 121.113.246.97 | Japan | NTT Communications Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.113.246.97.ovpn) |
| 180.20.78.122 | Japan | NTT Communications Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.20.78.122.ovpn) |
| 180.52.41.74 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.52.41.74.ovpn) |
| 153.232.238.142 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.232.238.142.ovpn) |
| 121.119.11.100 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.119.11.100.ovpn) |
| 125.207.202.184 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.207.202.184.ovpn) |
| 153.189.235.170 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.189.235.170.ovpn) |
| 125.202.44.37 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.202.44.37.ovpn) |
| 153.198.176.89 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.198.176.89.ovpn) |
| 157.120.13.212 | Japan | NTT PC Communications, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/157.120.13.212.ovpn) |
| 157.120.13.45 | Japan | NTT PC Communications, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/157.120.13.45.ovpn) |
| 61.115.64.9 | Japan | NTT-ME Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.115.64.9.ovpn) |
| 121.86.147.16 | Japan | OPTAGE Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.86.147.16.ovpn) |
| 58.189.6.26 | Japan | OPTAGE Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.189.6.26.ovpn) |
| 112.69.85.160 | Japan | OPTAGE Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.69.85.160.ovpn) |
| 121.86.56.148 | Japan | OPTAGE Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.86.56.148.ovpn) |
| 58.70.196.112 | Japan | OPTAGE Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.70.196.112.ovpn) |
| 210.203.255.34 | Japan | QTnet, Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.203.255.34.ovpn) |
| 202.226.247.224 | Japan | QTnet, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/202.226.247.224.ovpn) |
| 58.3.3.12 | Japan | QTnet, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.3.3.12.ovpn) |
| 223.135.47.109 | Japan | So-net Entertainment Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/223.135.47.109.ovpn) |
| 126.115.0.249 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.115.0.249.ovpn) |
| 60.94.219.155 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.94.219.155.ovpn) |
| 221.103.92.61 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.103.92.61.ovpn) |
| 126.217.201.240 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.217.201.240.ovpn) |
| 60.129.119.6 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.129.119.6.ovpn) |
| 60.153.147.72 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.153.147.72.ovpn) |
| 60.109.22.154 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.109.22.154.ovpn) |
| 126.108.250.38 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.108.250.38.ovpn) |
| 126.108.90.181 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.108.90.181.ovpn) |
| 126.114.249.79 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.114.249.79.ovpn) |
| 126.115.0.249 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.115.0.249.ovpn) |
| 126.207.124.101 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.207.124.101.ovpn) |
| 126.26.235.86 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.26.235.86.ovpn) |
| 126.28.92.236 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.28.92.236.ovpn) |
| 126.79.91.233 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.79.91.233.ovpn) |
| 60.69.234.104 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.69.234.104.ovpn) |
| 60.95.76.42 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.95.76.42.ovpn) |
| 219.100.37.60 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.60.ovpn) |
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
| 118.241.17.89 | Japan | Sony Network Communications Inc | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.241.17.89.ovpn) |
| 39.111.40.240 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/39.111.40.240.ovpn) |
| 115.162.118.226 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/115.162.118.226.ovpn) |
| 152.165.208.68 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/152.165.208.68.ovpn) |
| 39.110.119.41 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/39.110.119.41.ovpn) |
| 211.2.56.29 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.2.56.29.ovpn) |
| 120.75.146.85 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/120.75.146.85.ovpn) |
| 111.217.106.162 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/111.217.106.162.ovpn) |
| 42.124.59.85 | Japan | TOKAI Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.124.59.85.ovpn) |
| 124.35.165.239 | Japan | UCOM Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.35.165.239.ovpn) |


### Russia
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 45.94.119.61 | Russia | Beirel Telecom ISP | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/45.94.119.61.ovpn) |
| 80.243.3.178 | Russia | COMPNET | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/80.243.3.178.ovpn) |
| 46.181.6.196 | Russia | Goodline.info | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/46.181.6.196.ovpn) |
| 176.226.148.124 | Russia | Intersvyaz-2 JSC | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/176.226.148.124.ovpn) |
| 95.70.20.24 | Russia | KHT RU | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/95.70.20.24.ovpn) |
| 178.140.166.225 | Russia | NCNET | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/178.140.166.225.ovpn) |
| 46.242.13.176 | Russia | NCNET | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/46.242.13.176.ovpn) |
| 95.154.70.147 | Russia | OCTOPUSNET-NAT | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/95.154.70.147.ovpn) |
| 77.82.38.44 | Russia | PJSC Rostelecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/77.82.38.44.ovpn) |
| 109.110.57.105 | Russia | Podryad Nets | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/109.110.57.105.ovpn) |
| 109.110.57.105 | Russia | Podryad Nets | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/109.110.57.105.ovpn) |
| 109.110.57.105 | Russia | Podryad Nets | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/109.110.57.105.ovpn) |
| 77.35.13.126 | Russia | PRIMORYE | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/77.35.13.126.ovpn) |
| 81.2.14.132 | Russia | Primorye NET | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/81.2.14.132.ovpn) |
| 164.138.88.215 | Russia | Redcom LIR 5 | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/164.138.88.215.ovpn) |
| 94.233.119.27 | Russia | Rostelecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/94.233.119.27.ovpn) |
| 89.109.45.161 | Russia | Rostelecom networks | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/89.109.45.161.ovpn) |
| 95.188.84.114 | Russia | Rostelecom networks | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/95.188.84.114.ovpn) |
| 5.137.106.120 | Russia | Rostelecom networks | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/5.137.106.120.ovpn) |
| 5.137.7.135 | Russia | Rostelecom networks | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/5.137.7.135.ovpn) |
| 77.35.171.96 | Russia | Rostelecom networks | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/77.35.171.96.ovpn) |
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
| 59.2.145.202 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.2.145.202.ovpn) |
| 222.117.186.129 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.117.186.129.ovpn) |
| 175.210.229.179 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.210.229.179.ovpn) |
| 121.165.95.225 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.165.95.225.ovpn) |
| 211.251.199.29 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.251.199.29.ovpn) |
| 211.227.110.122 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.227.110.122.ovpn) |
| 121.168.227.79 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.168.227.79.ovpn) |
| 211.225.57.219 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.225.57.219.ovpn) |
| 221.167.213.174 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.167.213.174.ovpn) |
| 220.122.51.250 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.122.51.250.ovpn) |
| 61.74.103.127 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.74.103.127.ovpn) |
| 218.146.77.98 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.146.77.98.ovpn) |
| 59.8.205.180 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.8.205.180.ovpn) |
| 59.2.145.202 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.2.145.202.ovpn) |
| 128.134.180.173 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/128.134.180.173.ovpn) |
| 59.6.15.42 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.6.15.42.ovpn) |
| 121.140.69.141 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.140.69.141.ovpn) |
| 121.145.141.43 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.145.141.43.ovpn) |
| 121.144.17.56 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.144.17.56.ovpn) |
| 121.139.122.45 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.139.122.45.ovpn) |
| 211.54.248.214 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.54.248.214.ovpn) |
| 175.199.106.185 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.199.106.185.ovpn) |
| 121.134.72.146 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.134.72.146.ovpn) |
| 220.126.211.10 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.126.211.10.ovpn) |
| 121.150.220.180 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.150.220.180.ovpn) |
| 220.126.206.103 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.126.206.103.ovpn) |
| 121.164.128.122 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.164.128.122.ovpn) |
| 112.170.156.205 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.170.156.205.ovpn) |
| 121.134.70.25 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.134.70.25.ovpn) |
| 121.134.72.146 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.134.72.146.ovpn) |
| 121.138.184.62 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.138.184.62.ovpn) |
| 121.144.108.185 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.144.108.185.ovpn) |
| 121.148.153.162 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.148.153.162.ovpn) |
| 121.162.221.57 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.162.221.57.ovpn) |
| 121.169.185.252 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.169.185.252.ovpn) |
| 14.46.204.232 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.46.204.232.ovpn) |
| 211.197.189.78 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.197.189.78.ovpn) |
| 220.92.210.60 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.92.210.60.ovpn) |
| 221.161.133.98 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.161.133.98.ovpn) |
| 222.112.202.229 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.112.202.229.ovpn) |
| 125.133.241.87 | South Korea | KORNET | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.133.241.87.ovpn) |
| 61.43.117.114 | South Korea | LG DACOM Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.43.117.114.ovpn) |
| 58.151.98.70 | South Korea | LG DACOM Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.151.98.70.ovpn) |
| 58.150.189.252 | South Korea | LG DACOM Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.150.189.252.ovpn) |
| 42.82.223.31 | South Korea | LG HelloVision Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.82.223.31.ovpn) |
| 125.240.157.209 | South Korea | LG POWERCOMM | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.240.157.209.ovpn) |
| 124.153.232.169 | South Korea | Seokyung Cable Television Co.. Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.153.232.169.ovpn) |
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
| 122.99.21.46 | Taiwan | KE-ING | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |
| 122.99.21.46 | Taiwan | KE-ING | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |


### Thailand
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 49.228.97.111 | Thailand | Advanced Wireless Network Company Limited | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.228.97.111.ovpn) |
| 184.22.89.48 | Thailand | AIS-Fibre | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/184.22.89.48.ovpn) |
| 184.22.105.172 | Thailand | AIS-Fibre | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/184.22.105.172.ovpn) |
| 184.82.151.164 | Thailand | AIS-Fibre | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/184.82.151.164.ovpn) |
| 49.49.222.211 | Thailand | Triple T Broadband Public Company Limited | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.49.222.211.ovpn) |


### Ukraine
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 31.28.244.97 | Ukraine | Lancom Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/31.28.244.97.ovpn) |


### United States
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 71.193.50.70 | United States | Comcast Cable Communications, LLC | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/71.193.50.70.ovpn) |
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
| 42.113.89.87 | Vietnam | FPT Telecom Company | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.113.89.87.ovpn) |
| 27.72.73.79 | Vietnam | Newass2011xDSLHN | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/27.72.73.79.ovpn) |
| 45.80.186.41 | Vietnam | PacketHub S.A. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/45.80.186.41.ovpn) |
| 118.70.202.83 | Vietnam | Vietnam Internet Network Information Center | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.70.202.83.ovpn) |
| 123.21.150.249 | Vietnam | VietNam Post and Telecom Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.21.150.249.ovpn) |

> **Tip**: For the full list, check the `data/configs/` folder after running the scraper.


## Contributing
Contributions are welcome! Feel free to open an issue or a pull request.

## License
MIT

