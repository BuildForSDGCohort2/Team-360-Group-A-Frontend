import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="shadow mb-4">
			<nav className="wrapper navbar navbar-expand-lg navbar-light justify-content-between w-100 bg-white px-lg-5 py-0">
				<Link className="navbar-brand py-2" to="/">
					<img className="logo" src="/images/logo.jpg" alt="Team 360" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
                
				<div className="collapse navbar-collapse justify-content-lg-end border-bottom" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link d-block px-3 py-2 " to="/">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link d-block px-3 py-2" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link d-block px-3 py-2" to="/sign-up">
								Sign up
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link d-block px-3 py-2" to="/sign-in">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link d-block px-3 py-2" to="/">
								Notifications
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
