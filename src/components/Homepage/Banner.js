import React from "react";

const Banner = () => {
	return (
		<div className="banner px-sm-4 px-lg-5">
			<div className="wrapper d-flex justify-content-center align-items-center">
				<div className="bg-light p-3 p-lg-5 rounded text-center">
					COVID 19 is real. Stay safe!
					<div className="d-flex justify-content-center align-items-center mt-3">
                        <div className="px-2">
                            <h3>40000</h3>
                            <p>Confirmed</p>
                        </div>
                        <div className="px-2 text-success">
                            <h3>40000</h3>
                            <p>Recovered</p>
                        </div>
                        <div className="px-2 text-danger">
                            <h3>40000</h3>
                            <p>Death</p>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
