import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Prices() {
    const apiKey = "b43d54f168091d19cde4a240f47d1862";
    const { symbol } = useParams();
    const [stockInfo, setStockInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const url = `https://financialmodelingprep.com/api/v3/stock/list?apikey=${apiKey}`;

    async function getStockInfo() {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            const selectedStock = data.find((stock) => stock.symbol === symbol);
            setStockInfo(selectedStock);
            setLoading(false);
        } catch (error) {
            console.log(error);
            // setLoading(false);
        }
    }

    useEffect(() => {
        getStockInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [symbol]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : stockInfo ? (
                <div>
                    <h1>{stockInfo.symbol}</h1>
                    <p>Name: {stockInfo.name}</p>
                    <p>Price: {stockInfo.price}</p>
                </div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}
