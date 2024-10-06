import {useState} from "react";
import './TokenForm.css'

export default function TokenForm({addToken}) {
    const [formValues, setFormValues] = useState({
        ticker: "",
        name: "",
        purchase_date: "",
        quantity: "",
        purchase_price: "",
        sell_date: "",
        sell_price: "",
        profit_loss: ""
    })

    async function handleSubmit(event) {
        event.preventDefault();
        const res = await fetch(`http://localhost:8080/portfolio`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        });
        
        const newToken = await res.json(token);
        addToken(formValues);
    };

    function handleInputChange(event) {
        setFormValues({ ...formValues, [event.target.ticker]: event.target.value});
    };

    return (
        <>
        <form className="token-form" onSubmit={handleSubmit}>
            <label htmlFor="ticker">Ticker</label>
            <input
                type="text"
                id="ticker"
                name="ticker"
                placeholder="ticker"
                value={formValues.ticker}
                onChange={handleInputChange}
            />
            <label htmlFor="name">Token Name</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="token name"
                value={formValues.name}
                onChange={handleInputChange}
            />
            <label htmlFor="name">Purchase Date</label>
            <input
                type="date"
                id="purchaseDate"
                name="Purchese Date"
                placeholder="Purchase Date"
                value={formValues.purchase_date}
                onChange={handleInputChange}
            />
            <label htmlFor="name">Quantity</label>            
            <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Quantity"
                value={formValues.quantity}
                onChange={handleInputChange}
            />
            <label htmlFor="name">Purchase Price</label>        
            <input
                type="number"
                id="purchasePrice"
                name="Purchese Price"
                placeholder="Purchase Price"
                value={formValues.purchase_price}
                onChange={handleInputChange}
            />
            <label htmlFor="name">Sell Date</label>        
            <input
                type="date"
                id="sellDate"
                name="sellDate"
                placeholder="Sell Date"
                value={formValues.sell_date}
                onChange={handleInputChange}
            />
            <label htmlFor="name">Sell Price</label>        
            <input
                type="number"
                id="sellPrice"
                name="sellPrice"
                placeholder="Sell Price"
                value={formValues.sell_price}
                onChange={handleInputChange}
            />
            <button type="submit" className="submit">Submit</button>
        </form>
        </>
    )
}

