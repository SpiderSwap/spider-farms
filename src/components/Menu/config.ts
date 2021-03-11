import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: 'http://swap.spiderswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://swap.spiderswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Spiderweb',
    icon: 'PoolIcon',
    href: '/spiderweb',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF8556bF595AB8793D5e2851216A691BB570D4887',
      },
      //     {
      //       label: 'CoinGecko',
      //       href: 'https://www.coingecko.com/en/coins/goose-finance',
      //     },
      //     {
      //       label: 'CoinMarketCap',
      //       href: 'https://coinmarketcap.com/currencies/goose-finance/',
      //     },
      //     {
      //       label: 'AstroTools',
      //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      //     },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/SpiderSwap/',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://Spiderfinance.gitbook.io/Spider-finance/',
      // },
      // {
      //   label: 'Blog',
      //   href: 'https://Spiderfinance.medium.com/',
      // },
    ],
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
