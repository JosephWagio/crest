import React from "react";

import Header from "./Header/Header";
import Features from "./Features/Features";
import AboutUs from "./AboutUs/AboutUs";
import Testimonials from "./Testimonials/Testimonials";
import Navbar from "../../components/common/Nav/Navbar";
import Footer from "../../components/common/Footer/Footer";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Features />
			<AboutUs />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default Home;
