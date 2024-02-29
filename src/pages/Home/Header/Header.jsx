import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import HeaderImg from "../../../assets/BTC.png";
import BTC from "../../../assets/ic_btc.png";
import ETH from "../../../assets/ic_eth.png";
import BNB from "../../../assets/ic_bnb.png";
import USDT from "../../../assets/ic_usdt.png";
import SOL from "../../../assets/ic_sol.png";
import Ellipse2 from "../../../assets/Ellipse 2.png";

import "./Header.css";

const Header = () => {
	const bounceTransition = {
		x: {
			duration: 4,
			repeat: Infinity,
			repeatType: "reverse",
			ease: "easeInOut",
		},
	};

	return (
		<div className="header section__padding">
			<div className="header-content">
				<div className="header-text">
					<h1>
						Empowering Your Financial <br /> Future with{" "}
						<span className="span">Cryptocurrency</span>{" "}
					</h1>
					<p>
						At Crest Holdings LTD, we believe in democratizing access to the
						world of <span className="span">Cryptocurrency</span> and blockchain
						technology. Join us on our journey to reshape the future of finance.
					</p>
					<button className="button">
						<Link to="/">Get Started</Link>
					</button>
				</div>
				<div className="header-img">
					<motion.div
						transition={bounceTransition}
						animate={{ x: [10, -10, 10] }}
					>
						<img src={HeaderImg} alt="header" />
					</motion.div>
				</div>
			</div>
			<div className="top-ellipse">
				<img src={Ellipse2} alt="" />
			</div>
			<div className="header-crypto">
				<div className="crypto">
					<img src={BTC} alt="btc" />
				</div>
				<div className="crypto">
					<img src={ETH} alt="eth" />
				</div>
				<div className="crypto">
					<img src={BNB} alt="bnb" />
				</div>
				<div className="crypto">
					<img src={USDT} alt="usdt" />
				</div>
				<div className="crypto">
					<img src={SOL} alt="sol" />
				</div>
			</div>
		</div>
	);
};

export default Header;
