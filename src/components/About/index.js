import React from "react";
import Navbar from "../General/Navbar";
import AboutTheApp from "./AboutTheApp";
import AboutTheTeam from "./AboutTheTeam";
import Footer from "../General/Footer";

const About = () => {
	return (
		<div className="about__us">
			<Navbar />
            <AboutTheApp />
            <AboutTheTeam />
            <Footer />
		</div>
	);
};

export default About;
