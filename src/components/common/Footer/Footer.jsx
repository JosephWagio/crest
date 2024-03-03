import React from "react";

import "./Footer.css";
import Logo from '../../../assets/Logo.png'

const Footer = () => {
	return (
		<div className="footer section__padding">
			<div className="footer-header">
				<h1>200 000+</h1>
				<p>Users and Counting</p>
				<h3>What are you waiting for?</h3>
				<button className="button">Get Started</button>
			</div>
			<div className="footer-content">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
				<div className="links">
					<p>Quick Links</p>
					<ul>
						<li>Explore</li>
						<li>Buy and Sell</li>
						<li>Send and Receive</li>
						<li>Exchange Currency</li>
						<li>Pay for Business</li>
					</ul>
				</div>
				<div className="resources">
					<p>Resources</p>
					<ul>
						<li>Earn </li>
						<li>Account Funding</li>
						<li>Secure Exchange</li>
						<li>Smart Token</li>
						<li>Crypto API</li>
					</ul>
				</div>
				<div className="language">
					
				</div>
			</div>
			<div className="footer-copyright">
				<span className='p__opensnans'>Copyright © 2024 Crest Holdings LTD All rights reserved.</span>
			</div>
		</div>
	);
};

export default Footer;
