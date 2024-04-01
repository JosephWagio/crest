// import React, { useEffect } from 'react';

// import "./TradingViewTicker.css";

// const TradingViewTickerTape = () => {

//  useEffect(() => {
//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
//     script.async = true;
//     script.innerHTML = JSON.stringify({
//       feedMode: "all_symbols",
//       isTransparent: true,
//       displayMode: "adaptive",
//       width: "100%",
//       height: "100%",
//       colorTheme: "dark",
//       locale: "en"
//     });

//    const container = document.getElementById("tradingviewticker-widget-container");
    
//     return () => {
//      if (container) {
//         container.appendChild(script);
//       }
//     };
//   }, []);

//   return (
//     <div className="tradingviewticker-widget-container" id="tradingviewticker-widget-container"></div>
//   );
// };

// export default TradingViewTickerTape;

import React, { useEffect } from 'react';

const TradingViewTickerTape = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.innerHTML = JSON.stringify({
      "feedMode": "all_symbols",
      "isTransparent": true,
      "displayMode": "regular",
      "width": "100%",
      "height": 550,
      "colorTheme": "dark",
      "locale": "en"
    });
    document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewTickerTape;

