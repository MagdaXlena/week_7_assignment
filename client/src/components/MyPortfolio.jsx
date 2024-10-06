import { useState, useEffect } from "react";
import "./MyPortfolio.css"

export default function MyPortfolio() {
    const [cryptoData, setCryptoData] = useState([])

    useEffect(() => {
        async function fetchCryptoData() {
            const res = await fetch('http://localhost:8080/portfolio')
            const cryptoData = await res.json()
            setCryptoData(cryptoData)
        }

        fetchCryptoData()
    }, [])

    return (
        <div className="myPortfolioContainer">
        <h2>My Bag</h2> 
        <table className="tokensTable">
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Token Name</th>
                    <th>Purchase Date</th>
                    <th>Quantity</th>
                    <th>Purchase Price</th>
                    <th>Sell Date</th>
                    <th>Sell Price</th>
                    <th>P & L</th>
                </tr>
            </thead>
            <tbody className="tableBody">
            {cryptoData.map(({ticker, name, purchase_date, quantity, purchase_price, sell_date, sell_price, profit_loss}) => {
                return <tr>
                    <td className="ticker">{ticker}</td>
                    <td className="tokenName">{name}</td>
                    <td>{purchase_date}</td>
                    <td>{quantity}</td>
                    <td>${purchase_price}</td>
                    <td>{sell_date}</td>
                    <td>${sell_price}</td>
                    <td>${profit_loss}</td>                    
                </tr>
                })}
            </tbody>
        </table>
    </div>

           
                // <Crypto key={crypto.id} {...crypto}/>
           
 
          
    )
}