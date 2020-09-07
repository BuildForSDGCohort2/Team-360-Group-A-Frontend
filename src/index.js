import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/Homepage/App";
import About from "./components/About/index";
import "./style.css";
import Register from "./components/SignUp";
import LogIn from "./components/SignIn";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={App}></Route>
				<Route exact path="/about" component={About}></Route>
				<Route exact path="/sign-up" component={Register}></Route>
				<Route exact path="/sign-in" component={LogIn}></Route>
			</div>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
