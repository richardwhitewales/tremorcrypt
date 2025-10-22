"use client";
import { useEffect } from "react";

export default function Marquee() {
    useEffect(() => {
        // Create the TradingView widget script
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbols: [
                { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
                { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
                { proName: "FX_IDC:EURUSD", title: "EUR/USD" },
                { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
                { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
                { proName: "FX_IDC:GBPUSD", title: "GBP/USD" },
                { proName: "FX_IDC:USDJPY", title: "USD/JPY" },
                { proName: "FX_IDC:AUDUSD", title: "AUD/USD" },
                { proName: "FX_IDC:USDCAD", title: "USD/CAD" },
                { proName: "FX_IDC:USDCHF", title: "USD/CHF" },
                { proName: "FX_IDC:EURJPY", title: "EUR/JPY" },
                { proName: "FX_IDC:EURGBP", title: "EUR/GBP" },
                { proName: "FX_IDC:EURCHF", title: "EUR/CHF" },
                { proName: "FX_IDC:EURCAD", title: "EUR/CAD" },
                { proName: "FX_IDC:EURAUD", title: "EUR/AUD" },
            ],
            showSymbolLogo: true,
            colorTheme: "dark", // or "light"
            isTransparent: false,
            displayMode: "regular", // can also be "compact"
            locale: "en",
        });

        const container = document.getElementById("tradingview-ticker-tape");
        container.innerHTML = ""; // clear any SSR residue
        container.appendChild(script);
    }, []);

    return (
        <div
            className="tradingview-widget-container w-full"
            style={{ height: "60px", overflow: "hidden" }}
        >
            <div id="tradingview-ticker-tape"></div>
        </div>
    );
}
