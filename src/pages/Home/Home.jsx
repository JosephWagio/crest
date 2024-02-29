import React from "react";

import Header from "./Header/Header";
import Features from "./Features/Features";
import AboutUs from "./AboutUs/AboutUs";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
	return (
		<div>
			<Header />
			<Features />
			<AboutUs />
			<Testimonials />
		</div>
	);
};

export default Home;
