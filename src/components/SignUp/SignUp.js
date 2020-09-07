import React from "react";

const SignUp = () => {
	return (
		<div className="wrapper mt-lg-5 px-3 px-lg-5 sign__up">
			<div className="row no-gutters align-items-stretch shadow mb-5">
				<div className="col-lg-6">
					<img className="h-100 w-100" src="/images/user.jpg" alt="User" />
				</div>
				<div className="col-lg-6 sign__up-form mt-3 p-3 p-lg-3">
					<h2 className="text-center mb-3">Sign Up Form</h2>
					<form className="" action="#">
						<input className="w-100 mb-2 mb-lg-4 p-2 p-lg-3" type="text" name="First Name" placeholder="First Name" required />
						<input className="w-100 mb-2 mb-lg-4 p-2 p-lg-3" type="text" name="Last Name" placeholder="Last Name" required />
						<input
							className="w-100 mb-2 mb-lg-4 p-2 p-lg-3"
							type="email"
							name="Email Address"
							placeholder="Email Address"
							required
						/>
						<input className="w-100 mb-2 mb-lg-4 p-2 p-lg-3" type="password" name="Password" placeholder="Password" required />
						<input
							className="w-100 mb-2 mb-lg-4 p-2 p-lg-3"
							type="password"
							name="Password"
							placeholder="Confirm Password"
							required
						/>
						<button className="submit d-block mx-auto p-2 p-lg-3 btn btn-outline-dark mb-3" type="submit">
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
