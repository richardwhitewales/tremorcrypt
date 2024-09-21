import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function Chart() {
    const onLoadScriptRef = useRef();

    useEffect(
        () => {
            onLoadScriptRef.current = createWidget;

            if (!tvScriptLoadingPromise) {
                tvScriptLoadingPromise = new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.id = 'tradingview-widget-loading-script';
                    script.src = 'https://s3.tradingview.com/tv.js';
                    script.type = 'text/javascript';
                    script.onload = resolve;

                    document.head.appendChild(script);
                });
            }

            tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

            return () => onLoadScriptRef.current = null;

            function createWidget() {
                if (document.getElementById('tradingview_1') && 'TradingView' in window) {
                    new window.TradingView.widget({
                        autosize: true,
                        symbol: "BITSTAMP:BTCUSD",
                        interval: "D",
                        timezone: "Etc/UTC",
                        theme: "dark",
                        style: "2",
                        locale: "en",
                        toolbar_bg: "#ffffff",
                        enable_publishing: false,
                        hide_top_toolbar: true,
                        hide_legend: true,
                        save_image: false,
                        container_id: "tradingview_1",
                        backgroundColor: "#222222"
                    });
                }
            }
        },
        []
    );

    return <div id='tradingview_1' style={{ height: "50vh" }} />;
}