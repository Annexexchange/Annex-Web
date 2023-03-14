import React from "react";
import { AstronautImg } from "../assets";

const Astronaut = () => {
	return (
		<div className="shadow-xl shadow-white rounded-5xl px-36 py-5">
			<img src={AstronautImg} alt="About us astronaut pic" className=" h-80" />
		</div>
	);
};

export default Astronaut;
