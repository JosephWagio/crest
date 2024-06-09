import React, { useEffect } from "react";

import "./TradingViewTimeline.css"

const TradingViewTimeline = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.setAttribute("crossorigin", "anonymous");

    script.innerHTML = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          },
          {
            "description": "Tsla",
            "proName": "NASDAQ:TSLA"
          },
          {
            "description": "Apple",
            "proName": "NASDAQ:AAPL"
          },
          {
            "description": "Amazon",
            "proName": "NASDAQ:AMZN"
          },
          {
            "description": "Meta",
            "proName": "NASDAQ:META"
          },
          {
            "description": "Bitcoin to Usdt",
            "proName": "BINANCE:BTCUSDT"
          },
          {
            "description": "Doge",
            "proName": "CRYPTOCAP:DOGE"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": true,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      }
    `;

    const container = document.getElementById("tradingview-widget-container");

    return () => {
      if (container) {
        container.appendChild(script);
      }
    };
  }, []);

  return <div id="tradingview-widget-container"></div>;
};

export default TradingViewTimeline;
