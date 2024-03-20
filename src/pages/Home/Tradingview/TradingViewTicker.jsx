import React, { useEffect, useState } from 'react';

import "./TradingViewTicker.css";

const TradingViewTickerTape = () => {

 useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: true,
      displayMode: "adaptive",
      width: "100%",
      height: "100%",
      colorTheme: "dark",
      locale: "en"
    });

   const container = document.getElementById("tradingviewticker-widget-container");
    
    return () => {
     if (container) {
        container.appendChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingviewticker-widget-container" id="tradingviewticker-widget-container">

    </div>
  );
};

export default TradingViewTickerTape;
