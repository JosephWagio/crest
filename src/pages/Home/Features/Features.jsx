import React from "react";
import { motion } from "framer-motion";

import SignUp from "../../../assets/3d-render-smartphone-black-hands-with-finger-Photoroom.png-Photoroom.png";
import vector from "../../../assets/Vector.png";
import MiddleEllipse from "../../../assets/Ellipse 3.png";
import "./Features.css";

const Features = () => {
	const bounceTransition = {
		y: {
			duration: 3,
			repeat: Infinity,
			repeatType: "reverse",
			ease: "easeInOut",
		},
	};

	return (
		<div className="features section__padding" id="features">
			<div className="feature-content">
				<div className="feature-key">
					<h1>Key Features</h1>
					<p>
						We have put together the best features to better your{" "}
						<span className="span">crypto</span> journey.
					</p>
					<button className="button">Learn more</button>
				</div>
				<div className="feature-details">
					<div className="details">
						<h3>Secure Wallet Management</h3>
						<p>
							Experience peace of mind with our state-of-the-art wallet{" "}
							<span className="span">management system</span>, ensuring the
							highest level of security for your digital assets.
						</p>
					</div>
					<div className="details">
						<h3>Intuitive Trading Platforms</h3>
						<p>
							Seamlessly buy, sell, and trade cryptocurrencies on our
							user-friendly <span className="span">trading platforms</span>,
							equipped with advanced tools and real-time market insights.
						</p>
					</div>
					<div className="details">
						<h3>Diverse Investment Opportunities</h3>
						<p>
							Explore a wide range of{" "}
							<span className="span">investment options</span>, from established
							cryptocurrencies to emerging tokens and decentralized finance
							(DeFi) projects.
						</p>
					</div>
					<div className="details">
						<h3>Responsive Customer Support</h3>
						<p>
							Our dedicated <span className="span">support team</span> is here
							to assist you every step of the way, providing personalized
							guidance and timely assistance whenever you need it.
						</p>
					</div>
				</div>
			</div>
			<div className="signup">
				<button>
					Sign Up <img src={vector} alt="vector" />
				</button>
				<motion.div
					className="signup-motion_img"
					transition={bounceTransition}
					animate={{ y: [12, -12, 12] }}
				>
					<img src={SignUp} alt="signup" />
				</motion.div>
			</div>
			<div className="middle-ellipse">
				<img src={MiddleEllipse} alt="" />
			</div>
		</div>
	);
};

export default Features;
