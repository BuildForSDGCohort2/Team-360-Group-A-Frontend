import React from "react";

const Footer = () => {
	return (
		<div className="wrapper mt-3 mt-lg-5 px-3 px-lg-5">
			{/* <div className="row pt-3 pt-lg-5">
				<div className="col-md-4">
					<div className="border-top border-secondary py-5">
						<img className="img-fluid" src="/images/logo.png" alt="" />
						&nbsp; Team 360 Group A.
					</div>
				</div>

				<div className="col-md-4">
					<div className="border-top border-secondary py-5">
						<p className="mb-0">About Us</p>
						<span className="my-2 green-line d-block bg-success"></span>
						<p className="mt-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea vel ratione laborum totam repudiandae.
							Aliquam distinctio animi praesentium! Hic eum dolorem molestiae aliquam mollitia distinctio nobis perspiciatis
							error porro, facere praesentium quas aliquid tempore maiores similique. Porro, ipsam odio!
						</p>
						<button className="btn btn-outline-light">About Company</button>
					</div>
				</div>

				<div className="col-md-4">
					<div className="border-top border-secondary py-5">
						<p className="mb-0">Contact</p>
						<span className="my-2 green-line d-block bg-success"></span>
						<p className="mt-3">+2348163087542</p>
						<p className="text-success">info@covid19tracker.com</p>
						<p>Lagos, Nigeria</p>
						<p>West Africa.</p>
					</div>
				</div>
			</div> */}
			<hr className="text-light bg-secondary mt-5 mb-4" />
			<div className="d-flex flex-column flex-sm-row justify-content-center align-items-center text-center mb-0">
				<p>© 2020 Covid Tracker. | All rights reserved.</p>
				<p className="ml-sm-auto mt-2 mt-sm-auto">
					Made with love by{" "}
					<span className="text-dark">
						TEAM 360 GROUP A <span className="text-light">+2348163087542</span>
					</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
