import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from "react";
import axios from 'axios'
import Table from "./Table"
import StockMarket from './StockMarket';
import RetireStock from "./retireStock.tsx"
import New from "./New"
import Header from "./Head/Header.js"
import SEO from "./seo"
import Popup from "./Popup"
import PopupFront from "./PopupFront"
import { Grid } from 'gridjs-react';
export default function Home() {
const [stock, showStock] = useState([]);
const [coins, setCoins] = useState([]);
const [search, setSearch] = useState('');
const [News, setNews] = useState([]);
const [candle, setCandle] = useState([]);
const [crypto, setCrypto] = useState([]);
const [merger, setMerger] = useState([]);
const [symbol, setSymbol] = useState([]);
const [index, setIndex] = useState([]);
const [isOpen, setIsOpen] = useState(false);
 const togglePopup = () => {
    setIsOpen(!isOpen);
  }
//ecee7649eece4dfc986d8f441dbe5af1; api key for newsapi.org
//https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ecee7649eece4dfc986d8f441dbe5af1
//https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ecee7649eece4dfc986d8f441dbe5af1
//https://newsapi.org/v2/everything?q=tesla&from=2021-04-19&sortBy=publishedAt&apiKey=ecee7649eece4dfc986d8f441dbe5af1
//https://finnhub.io/api/v1/index/constituents?symbol=^GSPC&token=c0u4t6v48v6qqphtsng0
useEffect(() => {axios.get('https://finnhub.io/api/v1/index/constituents?symbol=^GSPC&token=c0u4t6v48v6qqphtsng0').then(res => {setIndex(res.data);});}, []);
//'https://finnhub.io/api/v1/stock/symbol?exchange=US&mic=XNYS&token=c0u4t6v48v6qqphtsng0'
useEffect(() => {axios.get('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c0u4t6v48v6qqphtsng0').then(res => {setSymbol(res.data);});}, []);
//'https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c0u4t6v48v6qqphtsng0' (not finished)
useEffect(() => {axios.get('https://finnhub.io/api/v1/news?category=crypto&token=c0u4t6v48v6qqphtsng0').then(res => {setCrypto(res.data);});}, []);
useEffect(() => {axios.get('https://finnhub.io/api/v1/news?category=merger&token=c0u4t6v48v6qqphtsng0').then(res => {setMerger(res.data);});}, []);
useEffect(() => {axios.get('https://finnhub.io/api/v1/news?category=forex&token=c0u4t6v48v6qqphtsng0').then(res => {setCandle(res.data);});}, []);
useEffect(() => {axios.get('https://finnhub.io/api/v1/news?category=general&token=c0u4t6v48v6qqphtsng0').then(res => {setNews(res.data);});}, []);
useEffect(() => {axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000000&page=1&sparkline=false').then(res => {setCoins(res.data);});}, []);
  const handleChange = e => {setSearch(e.target.value);}
  const filteredCoins = coins.filter(coin =>coin.name.toLowerCase().includes(search.toLowerCase()));
  //const ticker = coins.filter(coin.name.toUpperCase())
 const filterNews = News.filter(News => News.category);
 const filterEarnings = candle.filter(candle => candle.category);
 const cryptoNews = crypto.filter(crypto => crypto.category);
 const mergerNews = merger.filter(merger => merger.category);
 //const orgSymbol = symbol.filter(symbol => symbol);
 //const indexNew = index.filter(index => index.symbol);
  return (
   <div>
     <Header/>
    <div className={styles.container}>
         
      <Head>
        <title>Sphereball</title>
        <link rel="icon" href="/Finance.ico" />
        <SEO description = "Invest" title = "sphereball" siteTitle = "Sphereball"/>
        <meta property="og:title" content="Sphereball"  key="title"/>
        <meta property=" og:site_name" content="Sphereball" />
        <meta property="og:description" content="This is the souce to track and purchase cryptocurrency" />
        
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className = {styles.card}>
            <input className ={styles.search} type='text' onChange={handleChange} placeholder='Search'/>
            <a>{filteredCoins.map(coin => {
        return (
            <Table 
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
       </a>
       <div>
       </div>
          </div>
           <div>
          <div className = {styles.card}>
            <a>
              {filterNews.map(News => {
        return (
            <New 
            category = {News.category}
                headline = {News.headline}
                datetime = {News.datetime}
                image = {News.image}
                summary = {News.summary}
                url = {News.url}
          />
        );
      })}
            </a>
          </div>
        </div>
        <div className = {styles.card}>
          {filterEarnings.map(candle => {
            return(
              <New
              category = {candle.category}
              headline = {candle.headline}
              image = {candle.image}
              summary = {candle.summary}
              url = {candle.url}
              />
            )
          })}
        </div>
        <div className = {styles.card}>
          {cryptoNews.map(merger => {
            return(
              <New
              category = {merger.category}
              headline = {merger.headline}
              image = {merger.image}
              summary = {merger.summary}
              url = {merger.url}
              />
            )
          })}
        </div>
          <div className = {styles.card}>
            <a>
              {mergerNews.map(News => {
        return (
            <New 
            category = {News.category}
                headline = {News.headline}
                datetime = {News.datetime}
                image = {News.image}
                summary = {News.summary}
                url = {News.url}
          />
        );
      })}
            </a>
          </div>
          <div >
          </div>
        <head>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3485523512580483" crossOrigin="anonymous"></script>
        </head>
        </div>
        
      </main>
      <footer className={styles.footer}>
        <a
        >Copyright @ 2021{' '} Sphereball </a>
      </footer>
    </div>
    </div>
  )
}
