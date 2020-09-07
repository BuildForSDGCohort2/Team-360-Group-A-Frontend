import React from "react";

const Informed = () => {
	return (
		<div className="informed my-3 my-md-5">
			<div className="wrapper text-center px-4 px-lg-5 mt-5">
				<h2>Healthy Practices to Protect Yourself</h2>
				<div className="container mt-4">
					<div className="justify-content-center align-items-stretch row no-gutters">
						<ol className="col-md-7 text-justify p-0 d-flex flex-column justify-content-center">
							<li>
								Wash your hands often with soap and water for at least 20 seconds, especially after being in a public place,
								or after blowing your nose, coughing or sneezing. If soap and water are not readily available, use a hand
								sanitizer with at least 60% alcohol.
							</li>
							<li>Avoid touching your eyes, nose and mouth with unwashed hands.</li>
							<li>
								Avoid close contact with people who are sick, and practice social distancing by keeping at least 6 feet away
								from others if you must go out in public.
							</li>
						</ol>
						<div className="col-md-5 d-none d-md-block overflow-0">
							<img className="stay-safe" src="/images/stay-safe.jpg" alt="Stay Safe" />
						</div>
					</div>
					<div className="justify-content-center align-items-stretch row no-gutters">
						<div className="col-md-5 d-none d-md-block overflow-0">
							<img className="stay-safe" src="/images/stay-safe.jpg" alt="Stay Safe" />
						</div>
						<ol className="col-md-7 text-justify p-0 d-flex flex-column justify-content-center" start="4">
							<li>
								Cover your nose and mouth with a tissue when coughing or sneezing and throw the tissue away after use. If a
								tissue isn’t available, cough or sneeze into your elbow or sleeve, not your hands.
							</li>
							<li>
								Clean and disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches,
								handles, desks, computers, phones, keyboards, sinks, toilets, faucets and countertops.
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Informed;
