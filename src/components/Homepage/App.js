import React from "react";
import Navbar from "../General/Navbar";
import Banner from './Banner';
import Informed from './Informed';
import Footer from "../General/Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<Banner />
			<Informed />
			<Footer />
		</div>
	);
};

export default App;
