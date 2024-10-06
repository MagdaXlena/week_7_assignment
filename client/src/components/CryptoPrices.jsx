import { useEffect, useState } from "react";
import axios from 'axios';
import './CryptoPrices.css'

export default function CryptoPrices() {
    const[search, setSearch] = useState("")
    const[currency, setCurrency] = useState([])

    useEffect(() => {
        axios.get('https://openapiv1.coinstats.app/coins', {
            headers: {'X-API-KEY': 'aLsBKfyxbPA2oOG3J2iVDLoqRhFlGxiFaKO0XN9LKCM='}

        }).then(res => setCurrency(res.data.result))
        .catch(err => console.log(err))
    },[])

    return(
        <div className='cryptoPricesContainer'>
            <input className='search' type='text' placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            <h2>Cryptocurrency Prices</h2>  

            <table className='table'>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Makret Cap</th>
                        <th>Price</th>
                        <th>Available Supply</th>
                        <th>Volume (24h)</th>
                    </tr>
                </thead>
                <tbody>
                    {currency.filter((val) => {
                        return val.name.toLowerCase().includes(search.toLowerCase())
                    }).map((val) => {
                        // eslint-disable-next-line react/jsx-key
                        return <tr>
                            <td className='rank'>{val.rank}</td>
                            <td className='logo'>
                                <a href={val.websireUrl}>
                                    <img src={val.icon} alt='' />
                                </a>
                            <p>{val.name}</p>
                            </td>
                            <td className='symbol'>{val.symbol}</td>
                            <td>${val.marketCap.toFixed(2)}</td>
                            <td>${val.price.toFixed(2)}</td>
                            <td>{val.availableSupply}</td>
                            <td>{val.volume.toFixed(0)}</td>

                        </tr>
                    })}
                      
                </tbody>
            </table>
        </div>
    )
}