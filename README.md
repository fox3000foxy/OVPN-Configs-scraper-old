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
| 201.88.57.19 | Brazil | V tal | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/201.88.57.19.ovpn) |


### Japan
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 124.38.138.146 | Japan | ARTERIA Networks Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.38.138.146.ovpn) |
| 222.228.238.178 | Japan | ARTERIA Networks Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.228.238.178.ovpn) |
| 138.64.214.7 | Japan | ASAHI Net, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/138.64.214.7.ovpn) |
| 138.64.237.175 | Japan | ASAHI Net, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/138.64.237.175.ovpn) |
| 119.241.124.39 | Japan | BIGLOBE Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.241.124.39.ovpn) |
| 133.203.20.192 | Japan | BIGLOBE Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/133.203.20.192.ovpn) |
| 180.199.227.81 | Japan | Chubu Telecommunications Company, Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.199.227.81.ovpn) |
| 180.197.7.89 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.197.7.89.ovpn) |
| 115.37.104.31 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/115.37.104.31.ovpn) |
| 118.105.192.244 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.105.192.244.ovpn) |
| 14.132.27.53 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.132.27.53.ovpn) |
| 118.105.239.110 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.105.239.110.ovpn) |
| 14.132.27.53 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.132.27.53.ovpn) |
| 180.197.144.146 | Japan | Chubu Telecommunications Company, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/180.197.144.146.ovpn) |
| 121.104.177.123 | Japan | DION (KDDI CORPORATION) | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.104.177.123.ovpn) |
| 114.16.18.46 | Japan | DION (KDDI CORPORATION) | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/114.16.18.46.ovpn) |
| 59.140.6.12 | Japan | DION (KDDI CORPORATION) | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.140.6.12.ovpn) |
| 217.178.136.156 | Japan | Internet Multifeed CO. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/217.178.136.156.ovpn) |
| 175.177.49.119 | Japan | its communications Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.177.49.119.ovpn) |
| 210.194.188.55 | Japan | JCOM Co., Ltd. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.194.188.55.ovpn) |
| 58.85.23.215 | Japan | JCOM Co., Ltd. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/58.85.23.215.ovpn) |
| 116.222.29.22 | Japan | JCOM Co., Ltd. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.222.29.22.ovpn) |
| 126.251.1.126 | Japan | Joetsu Cable Vision | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.251.1.126.ovpn) |
| 106.73.225.97 | Japan | JPNE-IP4 | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.73.225.97.ovpn) |
| 121.109.137.24 | Japan | Kddi Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.109.137.24.ovpn) |
| 121.111.129.224 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.111.129.224.ovpn) |
| 111.238.128.11 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/111.238.128.11.ovpn) |
| 106.136.232.152 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.136.232.152.ovpn) |
| 106.176.30.209 | Japan | Kddi Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.176.30.209.ovpn) |
| 106.178.223.50 | Japan | Kddi Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/106.178.223.50.ovpn) |
| 203.76.64.38 | Japan | Kurashiki Cable TV | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/203.76.64.38.ovpn) |
| 122.135.177.147 | Japan | NEC BIGLOBE Ltd. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.135.177.147.ovpn) |
| 118.1.246.146 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.1.246.146.ovpn) |
| 124.98.118.106 | Japan | NTT Communications Corporation | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.98.118.106.ovpn) |
| 118.17.237.182 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.17.237.182.ovpn) |
| 153.207.220.127 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.207.220.127.ovpn) |
| 153.215.107.136 | Japan | NTT Communications Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/153.215.107.136.ovpn) |
| 1.66.34.35 | Japan | NTT Docomo, inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.66.34.35.ovpn) |
| 1.66.34.35 | Japan | NTT Docomo, inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.66.34.35.ovpn) |
| 61.115.64.9 | Japan | NTT-ME Corporation | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/61.115.64.9.ovpn) |
| 112.71.183.240 | Japan | OPTAGE Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.71.183.240.ovpn) |
| 119.47.36.120 | Japan | QTnet, Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.47.36.120.ovpn) |
| 124.159.58.251 | Japan | QTnet, Inc. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.159.58.251.ovpn) |
| 223.133.215.32 | Japan | So-net Entertainment Corporation | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/223.133.215.32.ovpn) |
| 126.141.81.205 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.141.81.205.ovpn) |
| 60.95.76.42 | Japan | SoftBank Corp. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.95.76.42.ovpn) |
| 60.149.75.205 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.149.75.205.ovpn) |
| 60.153.100.247 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.153.100.247.ovpn) |
| 126.34.131.228 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.34.131.228.ovpn) |
| 126.92.75.177 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.92.75.177.ovpn) |
| 60.114.255.84 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.114.255.84.ovpn) |
| 126.145.66.67 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.145.66.67.ovpn) |
| 126.37.240.235 | Japan | SoftBank Corp. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.37.240.235.ovpn) |
| 126.36.37.237 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.36.37.237.ovpn) |
| 126.37.152.223 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.37.152.223.ovpn) |
| 126.39.253.121 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.39.253.121.ovpn) |
| 126.55.80.229 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.55.80.229.ovpn) |
| 126.78.72.160 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.78.72.160.ovpn) |
| 126.94.134.97 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/126.94.134.97.ovpn) |
| 60.109.54.100 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.109.54.100.ovpn) |
| 60.125.195.98 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.125.195.98.ovpn) |
| 60.153.177.130 | Japan | SoftBank Corp. | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/60.153.177.130.ovpn) |
| 219.100.37.195 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.195.ovpn) |
| 219.100.37.185 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.185.ovpn) |
| 219.100.37.170 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.170.ovpn) |
| 219.100.37.112 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.112.ovpn) |
| 219.100.37.201 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.201.ovpn) |
| 219.100.37.127 | Japan | SoftEther | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.100.37.127.ovpn) |
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
| 152.165.193.146 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/152.165.193.146.ovpn) |
| 39.111.221.149 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/39.111.221.149.ovpn) |
| 116.82.239.43 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.82.239.43.ovpn) |
| 59.147.41.39 | Japan | Sony Network Communications Inc | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.147.41.39.ovpn) |
| 118.240.68.160 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.240.68.160.ovpn) |
| 121.3.23.96 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.3.23.96.ovpn) |
| 159.28.244.249 | Japan | Sony Network Communications Inc | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/159.28.244.249.ovpn) |
| 211.2.56.29 | Japan | Sony Network Communications Inc. | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.2.56.29.ovpn) |
| 210.250.96.130 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.250.96.130.ovpn) |
| 219.104.41.232 | Japan | Sony Network Communications Inc. | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/219.104.41.232.ovpn) |
| 202.140.202.248 | Japan | TOSHIMA CABLE NETWORK CO., LTD | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/202.140.202.248.ovpn) |


### Latvia
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 91.105.70.159 | Latvia | LATTELEKOM | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/91.105.70.159.ovpn) |


### Russia
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 5.8.206.213 | Russia | CJSC "Transtelecom-DV" | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/5.8.206.213.ovpn) |
| 178.163.93.66 | Russia | Infoline networks | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/178.163.93.66.ovpn) |
| 94.102.126.232 | Russia | Iskratelecom JSC | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/94.102.126.232.ovpn) |
| 176.212.95.243 | Russia | JSC "ER-Telecom Holding" | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/176.212.95.243.ovpn) |
| 37.113.200.52 | Russia | JSC "ER-Telecom Holding" | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/37.113.200.52.ovpn) |
| 94.180.30.10 | Russia | JSC "ER-Telecom Holding" | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/94.180.30.10.ovpn) |
| 46.166.93.116 | Russia | Limited Liability Company "TTK-Svyaz" | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/46.166.93.116.ovpn) |
| 90.157.78.186 | Russia | LLC "KomTehCentr" | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/90.157.78.186.ovpn) |
| 159.255.8.133 | Russia | LLC Teledyne Systems Limited | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/159.255.8.133.ovpn) |
| 46.41.94.100 | Russia | Macroregional South | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/46.41.94.100.ovpn) |
| 2.62.171.99 | Russia | OJSC "Sibirtelecom" | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/2.62.171.99.ovpn) |
| 77.34.241.79 | Russia | PJSC Rostelecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/77.34.241.79.ovpn) |
| 82.162.191.20 | Russia | Primorye NET | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/82.162.191.20.ovpn) |
| 5.143.0.211 | Russia | Rostelecom networks | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/5.143.0.211.ovpn) |
| 5.143.78.48 | Russia | Rostelecom networks | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/5.143.78.48.ovpn) |
| 85.173.64.214 | Russia | Volgograd Electro Svyaz | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/85.173.64.214.ovpn) |
| 46.241.10.171 | Russia | ZSTTK | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/46.241.10.171.ovpn) |


### Singapore
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 121.7.137.17 | Singapore | Singapore Telecommunications Ltd, Magix Services | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.7.137.17.ovpn) |


### South Korea
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 211.237.95.17 | South Korea | CMB Daejeon Broadcasting Co, .Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.237.95.17.ovpn) |
| 122.128.209.73 | South Korea | CMB DONDAEMOON BROADCASTING | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.128.209.73.ovpn) |
| 122.0.41.177 | South Korea | Keumgang Cable Network | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.0.41.177.ovpn) |
| 220.125.74.193 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.125.74.193.ovpn) |
| 14.40.9.134 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.40.9.134.ovpn) |
| 211.196.188.133 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.196.188.133.ovpn) |
| 211.185.43.203 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.185.43.203.ovpn) |
| 222.109.72.37 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.109.72.37.ovpn) |
| 119.200.35.213 | South Korea | Korea Telecom | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.200.35.213.ovpn) |
| 59.10.44.242 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.10.44.242.ovpn) |
| 218.151.48.166 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.151.48.166.ovpn) |
| 222.109.180.8 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.109.180.8.ovpn) |
| 119.196.39.14 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.196.39.14.ovpn) |
| 211.228.234.43 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.228.234.43.ovpn) |
| 220.79.87.77 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.79.87.77.ovpn) |
| 222.104.17.219 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.104.17.219.ovpn) |
| 118.39.200.167 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.39.200.167.ovpn) |
| 119.207.7.177 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.207.7.177.ovpn) |
| 118.37.11.108 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/118.37.11.108.ovpn) |
| 119.196.39.14 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.196.39.14.ovpn) |
| 218.144.18.105 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.144.18.105.ovpn) |
| 121.159.253.63 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.159.253.63.ovpn) |
| 121.151.81.118 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.151.81.118.ovpn) |
| 14.52.57.107 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.52.57.107.ovpn) |
| 175.203.144.182 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.203.144.182.ovpn) |
| 220.126.162.145 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.126.162.145.ovpn) |
| 183.109.157.121 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/183.109.157.121.ovpn) |
| 218.159.255.93 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.159.255.93.ovpn) |
| 211.114.93.139 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.114.93.139.ovpn) |
| 210.217.25.74 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/210.217.25.74.ovpn) |
| 112.163.190.219 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.163.190.219.ovpn) |
| 125.135.121.7 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.135.121.7.ovpn) |
| 121.138.253.191 | South Korea | Korea Telecom | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.138.253.191.ovpn) |
| 112.167.199.81 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/112.167.199.81.ovpn) |
| 119.193.222.5 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.193.222.5.ovpn) |
| 119.203.103.201 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/119.203.103.201.ovpn) |
| 121.137.18.249 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.137.18.249.ovpn) |
| 121.140.69.141 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.140.69.141.ovpn) |
| 121.145.141.43 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.145.141.43.ovpn) |
| 121.154.241.214 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.154.241.214.ovpn) |
| 121.166.208.67 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/121.166.208.67.ovpn) |
| 125.142.231.248 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.142.231.248.ovpn) |
| 14.34.37.32 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.34.37.32.ovpn) |
| 14.47.91.159 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.47.91.159.ovpn) |
| 14.50.208.209 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.50.208.209.ovpn) |
| 14.54.69.133 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/14.54.69.133.ovpn) |
| 175.198.167.226 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.198.167.226.ovpn) |
| 175.204.167.19 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.204.167.19.ovpn) |
| 175.211.23.13 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/175.211.23.13.ovpn) |
| 183.109.13.142 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/183.109.13.142.ovpn) |
| 211.224.156.54 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.224.156.54.ovpn) |
| 211.251.199.29 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.251.199.29.ovpn) |
| 220.121.110.199 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.121.110.199.ovpn) |
| 220.122.51.250 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/220.122.51.250.ovpn) |
| 221.154.132.11 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/221.154.132.11.ovpn) |
| 222.111.88.66 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.111.88.66.ovpn) |
| 222.113.5.147 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.113.5.147.ovpn) |
| 59.27.42.154 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.27.42.154.ovpn) |
| 59.9.33.192 | South Korea | Korea Telecom | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/59.9.33.192.ovpn) |
| 124.51.193.120 | South Korea | LG POWERCOMM | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/124.51.193.120.ovpn) |
| 125.177.239.27 | South Korea | LG POWERCOMM | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.177.239.27.ovpn) |
| 125.242.196.139 | South Korea | LG POWERCOMM | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/125.242.196.139.ovpn) |
| 49.173.24.11 | South Korea | LG POWERCOMM | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.173.24.11.ovpn) |
| 123.214.51.62 | South Korea | SK Broadband Co Ltd | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.214.51.62.ovpn) |
| 222.235.7.210 | South Korea | SK Broadband Co Ltd | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/222.235.7.210.ovpn) |
| 211.187.165.54 | South Korea | SK Broadband Co Ltd | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.187.165.54.ovpn) |
| 211.210.229.127 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.210.229.127.ovpn) |
| 116.122.215.170 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.122.215.170.ovpn) |
| 116.126.251.244 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.126.251.244.ovpn) |
| 211.208.128.33 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.208.128.33.ovpn) |
| 211.202.99.196 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.202.99.196.ovpn) |
| 123.212.106.120 | South Korea | SK Broadband Co Ltd | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/123.212.106.120.ovpn) |
| 1.239.70.208 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.239.70.208.ovpn) |
| 114.207.22.63 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/114.207.22.63.ovpn) |
| 116.125.191.9 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.125.191.9.ovpn) |
| 116.125.27.114 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/116.125.27.114.ovpn) |
| 211.58.39.152 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/211.58.39.152.ovpn) |
| 218.55.90.234 | South Korea | SK Broadband Co Ltd | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/218.55.90.234.ovpn) |
| 182.161.157.120 | South Korea | Ulsan Jung-Ang Broadcasting Network | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/182.161.157.120.ovpn) |


### Taiwan
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 122.99.21.46 | Taiwan | KE-ING | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |
| 122.99.21.46 | Taiwan | KE-ING | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/122.99.21.46.ovpn) |


### Thailand
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 49.228.98.208 | Thailand | Advanced Wireless Network Company Limited | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.228.98.208.ovpn) |
| 49.228.122.67 | Thailand | Advanced Wireless Network Company Limited | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.228.122.67.ovpn) |
| 49.228.97.5 | Thailand | Advanced Wireless Network Company Limited | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.228.97.5.ovpn) |
| 49.228.238.89 | Thailand | Advanced Wireless Network Company Limited | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.228.238.89.ovpn) |
| 49.228.101.15 | Thailand | Advanced Wireless Network Company Limited | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/49.228.101.15.ovpn) |
| 184.22.101.135 | Thailand | AIS-Fibre | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/184.22.101.135.ovpn) |
| 184.22.14.75 | Thailand | AIS-Fibre | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/184.22.14.75.ovpn) |
| 223.207.226.194 | Thailand | Triple T Broadband Public Company Limited | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/223.207.226.194.ovpn) |


### United States
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 50.47.108.60 | United States | Wholesail networks LLC | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/50.47.108.60.ovpn) |


### Vietnam
| IP | Country | ISP | Provider | Config |
|---|---|---|---|---|
| 1.54.173.135 | Vietnam | FPT Telecom Company | OPL | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.54.173.135.ovpn) |
| 42.119.207.126 | Vietnam | FPT Telecom Company | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.119.207.126.ovpn) |
| 1.55.149.131 | Vietnam | FPT Telecom Company | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/1.55.149.131.ovpn) |
| 42.119.130.117 | Vietnam | FPT Telecom Company | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/42.119.130.117.ovpn) |
| 27.77.19.113 | Vietnam | Newass2011xDSLHCMC | IPSpeed | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/27.77.19.113.ovpn) |
| 183.80.5.227 | Vietnam | Vietnam Internet Network Information Center | VPNGate | [Download](https://raw.githubusercontent.com/fox3000foxy/OVPN-Configs-scraper/refs/heads/main/data/configs/183.80.5.227.ovpn) |

> **Tip**: For the full list, check the `data/configs/` folder after running the scraper.


## Contributing
Contributions are welcome! Feel free to open an issue or a pull request.

## License
MIT

