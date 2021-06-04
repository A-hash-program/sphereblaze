import React from 'react'
import Header from "./Head/Header.js"
function More() {
    return (
        <div>
            <Header/>
            <div className ="More-Background">
                <h4>Links related to blockchain and Cryptocurency</h4>
            <h3>News</h3>
            <ol>
                <li>
                    <a href="https://decrypt.co/">Decrypt</a>
                </li>
                <li>
                    <a href="https://coindesk.com/">CoinDesk</a>
                </li>
                <li>
                    <a href="https://cointelegraph.com/">CoinTelegraph</a>
                </li>
                 <li>
                    <a href="https://coincodex.com/article/8167/sites-similar-to-coindesk/">Other Alternatives</a>
                </li>
            </ol>
               <h4>Cryptocurrency exchanges</h4>
            <ol>
                <li>
                    <a href="https://coinbase.com/">Coinbase</a>
                        <img width = "120" height ="120" src= "https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" alt = ""/>
                </li>
                <li>
                    <a href="https://binance.com/">Binance</a>
                </li>
                <li>
                    <a href="https://etoro.com/">Etoro</a>
                </li>
                <li>
                    <a href="https://kraken.com/">Kraken</a>
                </li>
                <li>
                    <a href="https://1inch.exchange/">1inch</a>
                </li>
                    <li>
                        <a href="https://app.uniswap.org/#/swap">Uniswap</a>
                    </li>
                    <li>
                        <a href="https://coingate.com">CoinGate</a>
                    </li>
            </ol> 

                <h4>Apis for Developers</h4>
                <ol>
                    <li>
                        <a href="https://blockset.com/">Blockset</a>
                    </li>
                    <li>
                        <a href="https://gem.co/">Gem</a>
                    </li>
                    <li>
                        <a href="https://wyre.com/">Wyre</a>
                    </li>
                    <li>
                        <a href="https://onramper.com/">Onramper</a>
                    </li>
                    <li>
                        <a href="https://moonpay.com/">MoonPay</a>
                    </li>            
                </ol>

            </div>
        </div>
    )
}
export default More
