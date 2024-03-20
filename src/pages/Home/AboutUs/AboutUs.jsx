import React from "react";
import { Link } from "react-router-dom";

import "./AboutUs.css";
import Arrow from "../../../assets/arrow-right.png";
import Choose from "../../../assets/6218785-Photoroom.png-Photoroom.png";
import Check from "../../../assets/check.png";
import MiddleEllipse from "../../../assets/Ellipse 3.png";
import BottomEllipse from "../../../assets/Ellipse 4.png";

const AboutUs = () => {
	return (
		<div className="aboutus section__padding" id="aboutus">
			<div className="aboutus-main">
				<div className="aboutus-header">
					<h1>
						About <br /> <span className="span">CREST HOLDINGS LTD</span>
					</h1>
					<p>
						You should know about CREST HOLDINGS LTD before you{" "}
						<span className="span">register</span>.
					</p>
				</div>
				<div className="aboutus-vision">
					<div className="vision">
						<h3>Our Journey</h3>
						<p>
							Explore <span className="span">our evolution</span> from a
							pioneering startup to a trusted leader in the Finance and Investment
							industry. Discover how our relentless pursuit of excellence has
							shaped our success story.
						</p>
						<Link to="/signin">
							Learn More <img src={Arrow} alt="arrow" />
						</Link>
					</div>
					<div className="vision">
						<h3>Our Mission</h3>
						<p>
							At Crest Holding Ltd, <span className="span">our mission</span> is
							to democratize access to Finance and Investment opportunities.
							We're committed to providing innovative solutions that empower
							individuals and businesses to thrive in the digital economy.
						</p>
						<Link to="/signin">
							Learn More <img src={Arrow} alt="arrow" />
						</Link>
					</div>
					<div className="vision">
						<h3>Our Team</h3>
						<p>
							Meet the passionate and dedicated individuals behind Crest
							Holdings LTD's success. Interactive profiles of key{" "}
							<span className="span">team members</span>, accompanied by photos
							and bios, offer insights into their expertise, experience, and
							contributions to the company's growth and success.
						</p>
						<Link to="/signin">
							Learn More <img src={Arrow} alt="arrow" />
						</Link>
					</div>
				</div>
				<div className="bottom-ellipse">
					<img src={BottomEllipse} alt="" />
				</div>
			</div>
			<div className="chooseus">
				<div className="chooseus-img">
					<img src={Choose} alt="choose" />
				</div>
				<div className="chooseus-content">
					<h1>Why choose us</h1>
					<p>
						A compelling narrative highlighting the unique value proposition of
						Crest Holdings LTD
					</p>
					<button className="button">
						<Link to="/signin">Learn More</Link>
					</button>
					<ul>
						<li>
							<img src={Check} alt="check" /> Proven Track Record
						</li>
						<li>
							<img src={Check} alt="check" /> Cutting-edge Technology
						</li>
						<li>
							<img src={Check} alt="check" /> Transparent Approach
						</li>
					</ul>
				</div>
			</div>
			<div className="middle-ellipse-2">
				<img src={MiddleEllipse} alt="" />
			</div>
		</div>
	);
};

export default AboutUs;
