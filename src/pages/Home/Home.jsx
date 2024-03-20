import React from "react";

import Header from "./Header/Header";
import Features from "./Features/Features";
import AboutUs from "./AboutUs/AboutUs";
import Testimonials from "./Testimonials/Testimonials";
import Navbar from "../../components/common/Nav/Navbar";
import Footer from "../../components/common/Footer/Footer";
import TradingViewTickerTape from "./Tradingview/TradingViewTicker";
import TradingViewTimeline from "./Tradingview/TradingViewTimeline";

const Home = () => {
  return (
    <div>
      <TradingViewTimeline/>
      <Navbar />
      <Header />
      <Features />
      <AboutUs />
      <TradingViewTickerTape/>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
