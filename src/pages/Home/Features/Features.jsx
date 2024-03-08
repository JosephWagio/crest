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
						We have curated the finest features to enhance your {" "}
						<span className="span">Investment</span> journey.
					</p>
					<button className="button">Learn more</button>
				</div>
				<div className="feature-details">
					<div className="details">
						<h3>Secure Portfolio Management</h3>
						<p>
							Experience peace of mind with our state-of-the-art Portfolio{" "}
							<span className="span">Management System</span>, ensuring the
							highest level of security for your financial assets.
						</p>
					</div>
					<div className="details">
						<h3>Intuitive Investment Platforms</h3>
						<p>
							Effortlessly invest, diversify, and manage your assets on our user-friendly
							<span className="span"> Investment platforms</span>,
							equipped with advanced tools and real-time market insights.
						</p>
					</div>
					<div className="details">
						<h3>Diverse Investment Opportunities</h3>
						<p>
							Explore a wide range of{" "}
							<span className="span">investment options</span>, 
							from traditional stocks and bonds to alternative assets like
							real estate investment trusts (REITs) and venture capital opportunities.
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
