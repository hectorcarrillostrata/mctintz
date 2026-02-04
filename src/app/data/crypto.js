import { BiQrScan } from 'react-icons/bi'
import { FiAirplay, FiBarChart2, FiClipboard, FiMonitor, FiUserCheck } from 'react-icons/fi'
import {HiOutlineColorSwatch} from 'react-icons/hi'
import { LiaUniversitySolid } from 'react-icons/lia'
import { LuNewspaper, LuPencil, LuShieldCheck } from 'react-icons/lu'
import { PiBrowsers, PiMoneyBold } from 'react-icons/pi'
import { TbArrowsExchange2, TbCoinBitcoin, TbFileDollar } from 'react-icons/tb'
import { ImCoinEuro } from 'react-icons/im'
import { GrDashboard } from 'react-icons/gr'
import { SlLock } from 'react-icons/sl'

export const coinList = [
    {
        image:'/images/crypto/bitcoin.png',
        name:'Bitcoin',
        sName:'BTC',
        price:'$34587',
        perChange:'-2.5%',
        change:'-$745',
        marketcap:'$725,354M',
        status:'loss'
    },
    {
        image:'/images/crypto/litecoin.png',
        name:'Litecoin',
        sName:'LTC',
        price:'$216',
        perChange:'+.264%',
        change:'+$.264',
        marketcap:'$11,100M',
        status:'profit'
    },
    {
        image:'/images/crypto/auroracoin.png',
        name:'Auroracoin',
        sName:'ARC',
        price:'$452',
        perChange:'-1.9%',
        change:'-$1.9',
        marketcap:'$45,785M',
        status:'loss'
    },
    {
        image:'/images/crypto/coinye.png',
        name:'Coinye',
        sName:'CNY',
        price:'$154',
        perChange:'+1.05%',
        change:'+$1.05',
        marketcap:'$85,478M',
        status:'profit'
    },
    {
        image:'/images/crypto/ethereum.png',
        name:'Ethereum Coin',
        sName:'ETH',
        price:'$854',
        perChange:'+1.705%',
        change:'+$1.705',
        marketcap:'$112,452M',
        status:'profit'
    },
    {
        image:'/images/crypto/potcoin.png',
        name:'Potcoin',
        sName:'PTC',
        price:'$548',
        perChange:'-3.2%',
        change:'-$3.2',
        marketcap:'$4,712M',
        status:'loss'
    },
    {
        image:'/images/crypto/zcash.png',
        name:'Zcash Coin',
        sName:'ZCC',
        price:'$965',
        perChange:'+1.465%',
        change:'+$1.465',
        marketcap:'$487,552M',
        status:'profit'
    },
    {
        image:'/images/crypto/primecoin.png',
        name:'Prime coin',
        sName:'XPM',
        price:'$4875',
        perChange:'-1.08%',
        change:'-$1.08',
        marketcap:'$55,221M',
        status:'loss'
    },
    {
        image:'/images/crypto/blocknet.png',
        name:'Blocknet',
        sName:'BLOCK',
        price:'$478',
        perChange:'+2.8%',
        change:'+$2.8',
        marketcap:'$66,552M',
        status:'profit'
    },
    {
        image:'/images/crypto/kucoin.png',
        name:'Kucoin',
        sName:'KCS',
        price:'$545',
        perChange:'+1.5%',
        change:'+$1.5',
        marketcap:'$98,562M',
        status:'profit'
    },
    {
        image:'/images/crypto/bittorrent.png',
        name:'Bittorrent',
        sName:'BTT',
        price:'$4935',
        perChange:'-3.2%',
        change:'-$3.2',
        marketcap:'$98,562M',
        status:'loss'
    },
    {
        image:'/images/crypto/avalanche.png',
        name:'Avalanche',
        sName:'AVAX',
        price:'$1008',
        perChange:'+1.4%',
        change:'+$1.4',
        marketcap:'$88,512M',
        status:'profit'
    },
    {
        image:'/images/crypto/bitcoin-cash.png',
        name:'Bitcoin cash',
        sName:'BCS',
        price:'$816',
        perChange:'+4.65%',
        change:'+$4.65',
        marketcap:'$54,212M',
        status:'profit'
    },
    {
        image:'/images/crypto/binance.png',
        name:'Binance',
        sName:'BNB',
        price:'$965',
        perChange:'+2.45%',
        change:'+$2.45',
        marketcap:'$458,122M',
        status:'profit'
    },
    {
        image:'/images/crypto/monero.png',
        name:'Monero',
        sName:'XMR',
        price:'$4758',
        perChange:'+3.5%',
        change:'+$3.5',
        marketcap:'$52,142M',
        status:'profit'
    },
]

export const cryptoAbout = [
    {
        image:'/images/crypto/1.png',
        name:'Create Account',
        title:'Earn upto 10%'
    },
    {
        image:'/images/crypto/2.png',
        name:'Buy Coin',
        title:'Save upto $50/coin'
    },
    {
        image:'/images/crypto/3.png',
        name:'Loans',
        title:'Use crypto as collateral'
    },
    {
        image:'/images/crypto/4.png',
        name:'Credit & Debit Cards',
        title:'Payments with cards'
    },
]

export const cryptoFeature = [
    {
        icon:LuShieldCheck,
        title:'Fully Secured',
        desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon:LuNewspaper,
        title:'Protected by insurance',
        desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon:PiBrowsers,
        title:'Industry best practices',
        desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
]

export const tokenAbout = [
    {
        icon:FiUserCheck,
        title:'Verify your identity',
        desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon:BiQrScan,
        title:'Sale the Bitcoin',
        desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
    {
        icon:LiaUniversitySolid,
        title:'Money in your bank account',
        desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.'
    },
]

export const sucessRoadMap = [
    {
        icon:LuPencil,
        title:'Planning',
        date:'January, 2026',
        active:false
    },
    {
        icon:TbCoinBitcoin,
        title:'Blockchain Starts',
        date:'February, 2026',
        active:false
    },
    {
        icon:FiClipboard,
        title:'Expanded Licensing',
        date:'March, 2026',
        active:false
    },
    {
        icon:PiMoneyBold,
        title:'Token Sale',
        date:'April, 2026',
        active:true
    },
    {
        icon:FiAirplay,
        title:'Project Launch',
        date:'May, 2026',
        active:false
    },
    {
        icon:ImCoinEuro,
        title:'Tier 5 sold',
        date:'June, 2026',
        active:false
    },
    {
        icon:FiMonitor,
        title:'Project Live',
        date:'December, 2026',
        active:false
    },
]

export const cryptotrader = [
    {
        title:'Buy & Sell Crypto',
        desc:'Buy or sell Bitcoin, Ethereum, and other crypto assets with your credit card, debit card, or bank account.',
        btn:'Buy Bitcoin',
        image:'/images/crypto/cpu.svg'
    },
    {
        title:'Trade Assets',
        desc:'Discover new and innovative crypto assets with over 200 spot trading pairs and 25 margin trading pairs.',
        btn:'View Exchange',
        image:'/images/crypto/analytics.svg'
    },
    {
        title:'Hedge with Poloniex Futures',
        desc:'Trade Bitcoin, Ethereum, and other perpetual with up to 100x leverage on Poloniex Futures.',
        btn:'Trade Futures',
        image:'/images/crypto/exchange.svg'
    },
    {
        title:'Earn Rewards for Trading',
        desc:'Never miss an opportunity for a little competition. Join our latest campaigns to earn rewards.',
        btn:'Join Competition',
        image:'/images/crypto/money.svg'
    },
]

export const cryptoServices = [
    {
        icon:TbFileDollar,
        title:'Support',
        desc:'Composed in a pseudo-Latin language which more or less corresponds.'
    },
    {
        icon:FiBarChart2,
        title:'Service Level',
        desc:'Composed in a pseudo-Latin language which more or less corresponds.'
    },
    {
        icon:GrDashboard,
        title:'Take profit / Stoploss',
        desc:'Composed in a pseudo-Latin language which more or less corresponds.'
    },
    {
        icon:HiOutlineColorSwatch,
        title:'Trailing Stop',
        desc:'Composed in a pseudo-Latin language which more or less corresponds.'
    },
    {
        icon:TbArrowsExchange2,
        title:'Pending Orders',
        desc:'Composed in a pseudo-Latin language which more or less corresponds.'
    },
    {
        icon:SlLock,
        title:'Platform Fees',
        desc:'Composed in a pseudo-Latin language which more or less corresponds.'
    },
]

export const blogData = [
    {
        id:1,
        image:'/images/blog/01.jpg',
        tag:'ICO',
        date:'13th Sep 2026',
        title:'Start The Redemption Before The ICO Completion'
    },
    {
        id:2,
        image:'/images/blog/02.jpg',
        tag:'Bitcoin',
        date:'29th Nov 2026',
        title:'New Trends In UI/UX Design World Integration'
    },
    {
        id:3,
        image:'/images/blog/03.jpg',
        tag:'Cryptocurrency',
        date:'29th Dec 2026',
        title:'The Crypto Project Has Reached Seven Billions'
    },
    {
        id:4,
        image:'/images/blog/04.jpg',
        tag:'Blockchain',
        date:'13th March 2026',
        title:'What is blockchain ?'
    },
    {
        id:5,
        image:'/images/blog/05.jpg',
        tag:'Crypto',
        date:'5th May 2026',
        title:'Top 10 cryptocurrency'
    },
    {
        id:6,
        image:'/images/blog/06.jpg',
        tag:'Trading',
        date:'19th June 2026',
        title:'Trading Platform'
    },
    {
        id:7,
        image:'/images/blog/07.jpg',
        tag:'Crypto',
        date:'20th June 2026',
        title:'The Crypto Project Has Reached Seven Billions'
    },
    {
        id:8,
        image:'/images/blog/08.jpg',
        tag:'Integration',
        date:'31st Aug 2026',
        title:'New Trends In UI/UX Design World Integration'
    },
]