import React, { useEffect, useState } from "react";

import "./Footer.css";
import Logo from '../../../assets/Logo-Photoroom.png-Photoroom.png';
import FB from '../../../assets/Facebook.png';
import X from '../../../assets/X.png';
import IG from '../../../assets/Insta.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-header">
        <h1>200 000+</h1>
        <p>Users and Counting</p>
        <h3>What are you waiting for?</h3>
        <button className="button"><Link to="/signin">Get Started</Link></button>
      </div>
      <div className="footer-content">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <p>Investing in futures, pioneering Finance: Crest Holdings LTD, your trusted partner for financial growth and innovation.</p>
        </div>
        <div className="links">
          <h3>Quick Links</h3>
            <><Link to="/signin">Explore</Link></>
            <><Link to="/signin">Buy and Sell Assets</Link></>
            <><Link to="/signin">Send and Receive Payments</Link></>
            <><Link to="/signin">Exchange Currencies</Link></>
            <><Link to="/signin">Pay for Business Transactions</Link></>
        </div>
        <div className="resources">
          <h3>Resources</h3>
            <><Link to="/signin">Earn</Link></>
            <><Link to="/signin">Grow Your Account</Link></>
            <><Link to="/signin">Secure Transactions</Link></>
            <><Link to="/signin">Smart Investment Token</Link></>
            <><Link to="/signin">Access Crypto API</Link></>
        </div>
        <div className="social">
          <h3>Socials</h3>
          <div className="social-logo-container">
            <div className="social-logo"><img src={FB} alt="Facebook" /></div>
            <div className="social-logo"><img src={X} alt="Twitter" /></div>
            <div className="social-logo"><img src={IG} alt="Instargran" /></div>
          </div>
          <a href="mailto:wagiojoseph@gmail.com">crestholding@gmail.com</a>   
        </div>
      </div>
      <div className="footer-copyright">
        <span className='p__opensnans'>Copyright © 2024 Crest Holdings LTD All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
