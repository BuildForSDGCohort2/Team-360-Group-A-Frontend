import React from "react";

const SignIn = () => {
	return (
		<div className="wrapper mt-lg-5 px-3 px-lg-5 sign__in">
			<div className="row no-gutters align-items-stretch shadow mb-5">
				<div className="col-lg-6">
					<img className="h-100 w-100" src="/images/user.jpg" alt="User" />
				</div>
				<div className="col-lg-6 sign__in-form mt-3 p-3 p-lg-3">
					<h2 className="text-center mb-3">Log In Form</h2>
					<form className="" action="#">
						<input
							className="w-100 mb-2 mb-lg-4 p-2 p-lg-3"
							type="email"
							name="Email Address"
							placeholder="Email Address"
							required
						/>
						<input className="w-100 mb-2 mb-lg-4 p-2 p-lg-3" type="password" name="Password" placeholder="Password" required />

						<button className="submit d-block mx-auto p-2 p-lg-3 btn btn-outline-dark mb-3" type="submit">
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
