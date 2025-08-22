# OVPN-Configs-scraper

OVPN-Configs-scraper is a Node.js tool that automatically collects free OpenVPN configuration files from various public sources. It streamlines the retrieval, organization, and updating of these configs for quick use.

## Features
- Automated scraping of public VPN server lists.
- Generation of ready-to-use `.ovpn` files.
- IP address caching and duplicate management.
- Export of configurations to a dedicated folder.

## Prerequisites
- Node.js >= 18
- npm

## Installation
```bash
git clone https://github.com/your-username/OVPN-Configs-scraper.git
cd OVPN-Configs-scraper
npm install
```

## Usage
To run the scraper and update the configuration files:
```bash
npm start
```

The generated `.ovpn` files can be found in the `data/configs/` folder.

## Download VPN Configurations
You can directly download the generated configuration files:

- [Go to the configs/ folder](./data/configs/)

Or download individually:

| IP | Country | ISP | Provider | Score | Ping | Speed | Config |
|---|---|---|---|---|---|---|---|
| 58.224.55.199 | South Korea | SK Broadband Co Ltd | OPL | N/A | N/A | N/A | [Download](./data/configs/58.224.55.199.ovpn) |
| 14.34.175.127 | South Korea | Korea Telecom | OPL | N/A | N/A | N/A | [Download](./data/configs/14.34.175.127.ovpn) |
| 203.234.214.116 | South Korea | Korea Telecom | OPL | N/A | N/A | N/A | [Download](./data/configs/203.234.214.116.ovpn) |
| 220.92.211.149 | South Korea | Korea Telecom | OPL | N/A | N/A | N/A | [Download](./data/configs/220.92.211.149.ovpn) |
| 125.8.119.43 | Japan | JCOM Co | OPL | N/A | N/A | N/A | [Download](./data/configs/125.8.119.43.ovpn) |
| 49.49.219.10 | Thailand | Triple T Broadband Public Company Limited | OPL | N/A | N/A | N/A | [Download](./data/configs/49.49.219.10.ovpn) |
| 221.145.111.91 | South Korea | Korea Telecom | OPL | N/A | N/A | N/A | [Download](./data/configs/221.145.111.91.ovpn) |
| 126.64.214.156 | Japan | SoftBank Corp. | OPL | N/A | N/A | N/A | [Download](./data/configs/126.64.214.156.ovpn) |
| 126.24.177.42 | Japan | SoftBank Corp. | OPL | N/A | N/A | N/A | [Download](./data/configs/126.24.177.42.ovpn) |
| 121.175.252.174 | South Korea | Korea Telecom | OPL | N/A | N/A | N/A | [Download](./data/configs/121.175.252.174.ovpn) |
| 180.0.202.214 | Japan | NTT Communications Corporation | OPL | N/A | N/A | N/A | [Download](./data/configs/180.0.202.214.ovpn) |
| 60.137.98.229 | Japan | SoftBank Corp. | OPL | N/A | N/A | N/A | [Download](./data/configs/60.137.98.229.ovpn) |
| 115.39.216.94 | Japan | Chubu Telecommunications Company, Inc. | OPL | N/A | N/A | N/A | [Download](./data/configs/115.39.216.94.ovpn) |
| 221.45.120.53 | Japan | SoftBank Corp. | OPL | N/A | N/A | N/A | [Download](./data/configs/221.45.120.53.ovpn) |
| 185.82.196.19 | Russia | Maxima, LLC | OPL | N/A | N/A | N/A | [Download](./data/configs/185.82.196.19.ovpn) |
| 122.99.21.46 | Taiwan | KE-ING | OPL | N/A | N/A | N/A | [Download](./data/configs/122.99.21.46.ovpn) |
| 115.36.139.222 | Japan | Chubu Telecommunications Company, Inc. | OPL | N/A | N/A | N/A | [Download](./data/configs/115.36.139.222.ovpn) |
| 203.165.114.190 | Japan | Jupiter Telecommunication Co. Ltd | OPL | N/A | N/A | N/A | [Download](./data/configs/203.165.114.190.ovpn) |
| 210.113.225.149 | South Korea | KORNET | OPL | N/A | N/A | N/A | [Download](./data/configs/210.113.225.149.ovpn) |
| 180.27.0.87 | Japan | NTT Communications Corporation | OPL | N/A | N/A | N/A | [Download](./data/configs/180.27.0.87.ovpn) |
| 60.77.105.253 | Japan | SoftBank Corp. | OPL | N/A | N/A | N/A | [Download](./data/configs/60.77.105.253.ovpn) |
| 59.138.34.86 | Japan | Kddi Corporation | OPL | N/A | N/A | N/A | [Download](./data/configs/59.138.34.86.ovpn) |
| 118.237.170.123 | Japan | Sony Network Communications Inc | OPL | N/A | N/A | N/A | [Download](./data/configs/118.237.170.123.ovpn) |
| 118.71.204.136 | Vietnam | Vietnam Internet Network Information Center | OPL | N/A | N/A | N/A | [Download](./data/configs/118.71.204.136.ovpn) |
| 27.136.195.231 | Japan | JCOM Co., Ltd. | OPL | N/A | N/A | N/A | [Download](./data/configs/27.136.195.231.ovpn) |
| 113.148.179.138 | Japan | DION (KDDI CORPORATION) | OPL | N/A | N/A | N/A | [Download](./data/configs/113.148.179.138.ovpn) |
| 106.157.175.170 | Japan | Kddi Corporation | OPL | N/A | N/A | N/A | [Download](./data/configs/106.157.175.170.ovpn) |
| 124.212.251.101 | Japan | DION (KDDI CORPORATION) | OPL | N/A | N/A | N/A | [Download](./data/configs/124.212.251.101.ovpn) |
| 222.159.12.205 | Japan | QTNet | OPL | N/A | N/A | N/A | [Download](./data/configs/222.159.12.205.ovpn) |
| 219.100.37.101 | Japan | SoftEther | VPNGate | 2521116 | 12 | 266348803 | [Download](./data/configs/219.100.37.101.ovpn) |
| 219.100.37.128 | Japan | SoftEther | VPNGate | 2424441 | 21 | 180227359 | [Download](./data/configs/219.100.37.128.ovpn) |
| 219.100.37.4 | Japan | SoftEther | VPNGate | 2371677 | 15 | 366418248 | [Download](./data/configs/219.100.37.4.ovpn) |
| 219.100.37.82 | Japan | SoftEther | VPNGate | 2296954 | 30 | 456114821 | [Download](./data/configs/219.100.37.82.ovpn) |
| 219.100.37.126 | Japan | SoftEther | VPNGate | 2255844 | 19 | 164121279 | [Download](./data/configs/219.100.37.126.ovpn) |
| 219.100.37.15 | Japan | SoftEther | VPNGate | 2231567 | 27 | 210267711 | [Download](./data/configs/219.100.37.15.ovpn) |
| 219.100.37.16 | Japan | SoftEther | VPNGate | 2180047 | 16 | 161902081 | [Download](./data/configs/219.100.37.16.ovpn) |
| 219.100.37.109 | Japan | SoftEther | VPNGate | 1917768 | 20 | 198975442 | [Download](./data/configs/219.100.37.109.ovpn) |
| 69.181.74.214 | United States | Comcast Cable Communications | VPNGate | 1868749 | 10 | 368265910 | [Download](./data/configs/69.181.74.214.ovpn) |
| 219.100.37.208 | Japan | SoftEther | VPNGate | 1860216 | 21 | 179381383 | [Download](./data/configs/219.100.37.208.ovpn) |
| 36.13.249.70 | Japan | Kddi Corporation | VPNGate | 1529975 | 3 | 902991688 | [Download](./data/configs/36.13.249.70.ovpn) |
| 126.115.0.249 | Japan | SoftBank Corp. | VPNGate | 1511667 | 7 | 69551990 | [Download](./data/configs/126.115.0.249.ovpn) |
| 118.104.100.159 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | 1508336 | 7 | 876105388 | [Download](./data/configs/118.104.100.159.ovpn) |
| 59.138.6.205 | Japan | Kddi Corporation | VPNGate | 1464377 | 2 | 5218833321 | [Download](./data/configs/59.138.6.205.ovpn) |
| 125.240.225.152 | South Korea | LG POWERCOMM | VPNGate | 1446278 | 42 | 39008075 | [Download](./data/configs/125.240.225.152.ovpn) |
| 218.151.48.166 | South Korea | Korea Telecom | VPNGate | 1389920 | 31 | 81423347 | [Download](./data/configs/218.151.48.166.ovpn) |
| 14.132.27.53 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | 1374586 | 14 | 712329672 | [Download](./data/configs/14.132.27.53.ovpn) |
| 82.162.191.20 | Russia | Primorye NET | VPNGate | 1319330 | 120 | 61381842 | [Download](./data/configs/82.162.191.20.ovpn) |
| 180.49.196.87 | Japan | NTT Communications Corporation | VPNGate | 1285430 | 11 | 84100019 | [Download](./data/configs/180.49.196.87.ovpn) |
| 126.163.160.107 | Japan | SoftBank Corp. | VPNGate | 1272940 | 6 | 638953928 | [Download](./data/configs/126.163.160.107.ovpn) |
| 125.15.242.22 | Japan | JCOM Co | VPNGate | 1266791 | 8 | 18463715 | [Download](./data/configs/125.15.242.22.ovpn) |
| 219.100.37.102 | Japan | SoftEther | VPNGate | 1238457 | 22 | 288025852 | [Download](./data/configs/219.100.37.102.ovpn) |
| 219.100.37.50 | Japan | SoftEther | VPNGate | 1225413 | 8 | 599512225 | [Download](./data/configs/219.100.37.50.ovpn) |
| 153.129.133.54 | Japan | NTT Communications Corporation | VPNGate | 1200878 | 8 | 315474905 | [Download](./data/configs/153.129.133.54.ovpn) |
| 180.83.190.65 | South Korea | LG POWERCOMM | VPNGate | 1178672 | 49 | 68294891 | [Download](./data/configs/180.83.190.65.ovpn) |
| 168.126.172.15 | South Korea | Korea Telecom | VPNGate | 1129998 | 41 | 5783200 | [Download](./data/configs/168.126.172.15.ovpn) |
| 1.255.125.82 | South Korea | LG HelloVision Corp. | VPNGate | 1040727 | 56 | 7876237 | [Download](./data/configs/1.255.125.82.ovpn) |
| 124.18.141.184 | Japan | Chubu Telecommunications Company, Inc. | VPNGate | 1006827 | 8 | 588052931 | [Download](./data/configs/124.18.141.184.ovpn) |
| 180.146.97.71 | Japan | OPTAGE Inc. | VPNGate | 962285 | 3 | 56477323 | [Download](./data/configs/180.146.97.71.ovpn) |
| 125.142.231.219 | South Korea | Korea Telecom | VPNGate | 927794 | 27 | 75264136 | [Download](./data/configs/125.142.231.219.ovpn) |
| 133.203.20.192 | Japan | BIGLOBE Inc. | VPNGate | 905516 | 6 | 96059567 | [Download](./data/configs/133.203.20.192.ovpn) |
| 125.198.37.125 | Japan | BIGLOBE Inc. | VPNGate | 875083 | 6 | 190194350 | [Download](./data/configs/125.198.37.125.ovpn) |
| 58.121.28.21 | South Korea | SK Broadband Co Ltd | VPNGate | 846396 | 51 | 101959381 | [Download](./data/configs/58.121.28.21.ovpn) |
| 153.195.248.179 | Japan | NTT Communications Corporation | VPNGate | 815119 | 7 | 586754228 | [Download](./data/configs/153.195.248.179.ovpn) |
| 49.228.177.50 | Thailand | Advanced Wireless Network Company Limited | VPNGate | 808161 | 31 | 286332412 | [Download](./data/configs/49.228.177.50.ovpn) |
| 92.127.73.173 | Russia | OJSC "Sibirtelecom" | VPNGate | 795964 | 68 | 99069906 | [Download](./data/configs/92.127.73.173.ovpn) |
| 121.184.227.187 | South Korea | Korea Telecom | VPNGate | 792814 | 29 | 40583232 | [Download](./data/configs/121.184.227.187.ovpn) |
| 221.149.126.56 | South Korea | Korea Telecom | VPNGate | 777208 | 28 | 340606564 | [Download](./data/configs/221.149.126.56.ovpn) |
| 121.186.197.223 | South Korea | Korea Telecom | VPNGate | 771210 | 28 | 114950451 | [Download](./data/configs/121.186.197.223.ovpn) |
| 171.99.161.166 | Thailand | True Internet Corporation CO. Ltd. | VPNGate | 760228 | 11 | 161452915 | [Download](./data/configs/171.99.161.166.ovpn) |
| 183.97.153.219 | South Korea | Korea Telecom | VPNGate | 739953 | 31 | 279995605 | [Download](./data/configs/183.97.153.219.ovpn) |
| 182.165.70.147 | Japan | OPTAGE Inc. | VPNGate | 728939 | 2 | 312319510 | [Download](./data/configs/182.165.70.147.ovpn) |
| 126.69.251.29 | Japan | SoftBank Corp. | VPNGate | 726654 | 13 | 95119547 | [Download](./data/configs/126.69.251.29.ovpn) |
| 211.228.234.43 | South Korea | Korea Telecom | VPNGate | 709908 | 26 | 665911715 | [Download](./data/configs/211.228.234.43.ovpn) |
| 158.62.98.167 | Philippines | Globe Telecom Inc. | VPNGate | 694194 | 7 | 370200777 | [Download](./data/configs/158.62.98.167.ovpn) |
| 138.64.67.91 | Japan | ASAHI Net, Inc. | VPNGate | 691785 | 5 | 306165702 | [Download](./data/configs/138.64.67.91.ovpn) |
| 110.135.132.24 | Japan | JCOM Co., Ltd. | VPNGate | 688730 | 23 | 241043502 | [Download](./data/configs/110.135.132.24.ovpn) |
| 122.99.21.46 | Taiwan | KE-ING | VPNGate | 682247 | 15 | 448713366 | [Download](./data/configs/122.99.21.46.ovpn) |
| 126.36.37.237 | Japan | SoftBank Corp. | VPNGate | 676891 | 4 | 807875516 | [Download](./data/configs/126.36.37.237.ovpn) |
| 1.246.154.63 | South Korea | SK Broadband Co Ltd | VPNGate | 667381 | 33 | 89478779 | [Download](./data/configs/1.246.154.63.ovpn) |
| 118.70.45.199 | Vietnam | Vietnam Internet Network Information Center | VPNGate | 658899 | 58 | 107222419 | [Download](./data/configs/118.70.45.199.ovpn) |
| 187.250.42.242 | Mexico | Uninet S.A. de C.V. | VPNGate | 658557 | 7 | 132388923 | [Download](./data/configs/187.250.42.242.ovpn) |
| 183.88.237.254 | Thailand | Triple T Broadband Public Company Limited | VPNGate | 655430 | 22 | 71805296 | [Download](./data/configs/183.88.237.254.ovpn) |
| 59.6.15.42 | South Korea | Korea Telecom | VPNGate | 655116 | 33 | 57498254 | [Download](./data/configs/59.6.15.42.ovpn) |
| 203.135.232.54 | Japan | QTnet, Inc. | VPNGate | 652609 | 18 | 638337441 | [Download](./data/configs/203.135.232.54.ovpn) |
| 46.53.244.137 | Belarus | Unitary enterprise A1 | VPNGate | 651354 | 9 | 0 | [Download](./data/configs/46.53.244.137.ovpn) |
| 170.249.125.78 | Japan | Joetsu Cable Vision | VPNGate | 650979 | 6 | 167039182 | [Download](./data/configs/170.249.125.78.ovpn) |
| 14.33.224.178 | South Korea | Korea Telecom | VPNGate | 646603 | 31 | 368125594 | [Download](./data/configs/14.33.224.178.ovpn) |
| 125.139.95.1 | South Korea | Korea Telecom | VPNGate | 644455 | 32 | 69220248 | [Download](./data/configs/125.139.95.1.ovpn) |
| 183.88.237.254 | Thailand | Triple T Broadband Public Company Limited | VPNGate | 642080 | 22 | 539747818 | [Download](./data/configs/183.88.237.254.ovpn) |
| 126.39.253.121 | Japan | SoftBank Corp. | VPNGate | 638914 | 10 | 605207500 | [Download](./data/configs/126.39.253.121.ovpn) |
| 221.162.193.234 | South Korea | Korea Telecom | VPNGate | 627568 | 22 | 80032369 | [Download](./data/configs/221.162.193.234.ovpn) |
| 61.73.162.4 | South Korea | Korea Telecom | VPNGate | 617105 | 34 | 333247313 | [Download](./data/configs/61.73.162.4.ovpn) |
| 118.240.118.77 | Japan | Sony Network Communications Inc. | VPNGate | 616953 | 3 | 967254190 | [Download](./data/configs/118.240.118.77.ovpn) |
| 118.68.97.199 | Vietnam | FPT Telecom Company | VPNGate | 616035 | 21 | 658054012 | [Download](./data/configs/118.68.97.199.ovpn) |
| 61.206.254.103 | Japan | Suzuka Cable Co., Ltd | VPNGate | 604852 | 8 | 798526824 | [Download](./data/configs/61.206.254.103.ovpn) |
| 221.145.111.91 | South Korea | Korea Telecom | VPNGate | 598302 | 31 | 416354739 | [Download](./data/configs/221.145.111.91.ovpn) |
| 153.204.90.16 | Japan | NTT Communications Corporation | VPNGate | 595721 | 16 | 186133289 | [Download](./data/configs/153.204.90.16.ovpn) |
| 180.229.33.160 | South Korea | LG POWERCOMM | VPNGate | 595320 | 83 | 91164769 | [Download](./data/configs/180.229.33.160.ovpn) |
| 220.210.236.213 | Japan | Enecom, Inc. | VPNGate | 586994 | 6 | 744474913 | [Download](./data/configs/220.210.236.213.ovpn) |
| 222.238.181.128 | South Korea | SK Broadband Co Ltd | VPNGate | 579095 | 50 | 39112238 | [Download](./data/configs/222.238.181.128.ovpn) |
| 220.71.101.159 | South Korea | Korea Telecom | VPNGate | 578020 | 31 | 761017561 | [Download](./data/configs/220.71.101.159.ovpn) |
| 221.147.63.37 | South Korea | Korea Telecom | VPNGate | 574667 | 28 | 313182920 | [Download](./data/configs/221.147.63.37.ovpn) |
| 175.114.235.3 | South Korea | broadNnet | VPNGate | 570529 | 29 | 465835736 | [Download](./data/configs/175.114.235.3.ovpn) |
| 221.163.122.165 | South Korea | Korea Telecom | VPNGate | 561359 | 32 | 216682751 | [Download](./data/configs/221.163.122.165.ovpn) |
| 220.118.235.18 | South Korea | Korea Telecom | VPNGate | 556589 | 27 | 78862584 | [Download](./data/configs/220.118.235.18.ovpn) |
| 91.205.25.139 | Russia | Digital Networks Ltd | VPNGate | 555855 | 47 | 27525465 | [Download](./data/configs/91.205.25.139.ovpn) |
| 183.88.237.254 | Thailand | Triple T Broadband Public Company Limited | VPNGate | 555551 | 39 | 572235553 | [Download](./data/configs/183.88.237.254.ovpn) |
| 222.117.146.214 | South Korea | KORNET | VPNGate | 554013 | 29 | 92775665 | [Download](./data/configs/222.117.146.214.ovpn) |
| 116.123.228.25 | South Korea | SK Broadband Co Ltd | VPNGate | 539699 | 38 | 93320705 | [Download](./data/configs/116.123.228.25.ovpn) |
| 176.62.100.30 | Russia | Omskie kabelnye seti Ltd. | VPNGate | 535994 | 61 | 30488796 | [Download](./data/configs/176.62.100.30.ovpn) |
| 1.233.23.251 | South Korea | SK Broadband Co Ltd | VPNGate | 529524 | 33 | 84403851 | [Download](./data/configs/1.233.23.251.ovpn) |
| 81.235.12.17 | Sweden | Telia Company AB | VPNGate | 529481 | 5 | 23139800 | [Download](./data/configs/81.235.12.17.ovpn) |
| 218.235.89.115 | South Korea | SK Broadband Co Ltd | VPNGate | 525195 | 37 | 580048153 | [Download](./data/configs/218.235.89.115.ovpn) |
| 49.165.187.142 | South Korea | LG POWERCOMM | VPNGate | 525030 | 38 | 601866660 | [Download](./data/configs/49.165.187.142.ovpn) |
| 92.37.143.211 | Russia | Rostelecom networks | VPNGate | 524294 | 115 | 94348792 | [Download](./data/configs/92.37.143.211.ovpn) |
| 5.143.99.24 | Russia | Rostelecom networks | VPNGate | 501082 | 128 | 85503694 | [Download](./data/configs/5.143.99.24.ovpn) |
| 218.209.80.207 | South Korea | SK Broadband Co Ltd | VPNGate | 497619 | 39 | 85210510 | [Download](./data/configs/218.209.80.207.ovpn) |
| 135.180.161.214 | United States | Sonic Telecom LLC | VPNGate | 495818 | 3 | 686611192 | [Download](./data/configs/135.180.161.214.ovpn) |
| 58.124.0.187 | South Korea | SK Broadband Co Ltd | VPNGate | 490283 | 44 | 57843615 | [Download](./data/configs/58.124.0.187.ovpn) |
| 185.130.83.204 | Russia | JSC "ER-Telecom Holding" | VPNGate | 465616 | 62 | 162817217 | [Download](./data/configs/185.130.83.204.ovpn) |
| 77.35.202.31 | Russia | Rostelecom networks | VPNGate | 456002 | 129 | 132280814 | [Download](./data/configs/77.35.202.31.ovpn) |
| 217.150.74.177 | Russia | ISP Podryad Nets | VPNGate | 427181 | 126 | 92562494 | [Download](./data/configs/217.150.74.177.ovpn) |
| 128.0.145.50 | Germany | mywire Datentechnik GmbH | VPNGate | 413011 | - | 25662165 | [Download](./data/configs/128.0.145.50.ovpn) |

> **Tip**: For the full list, check the `data/configs/` folder after running the scraper.


## Contributing
Contributions are welcome! Feel free to open an issue or a pull request.

## License
MIT

