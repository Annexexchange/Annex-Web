import React from "react";

import { DiscordImg, FacebookImg, InstagramImg, LinkedInImg } from "../assets";

const Social = ({ background }) => {
	return (
		<div className="flex flex-row gap-5 items-center justify-start">
			<a href="/" target="_blank" rel="noopener noreferrer">
				<img src={FacebookImg} alt="Facebook" className="h-7 w-7" />
			</a>

			<a href="/" target="_blank" rel="noopener noreferrer">
				<img src={InstagramImg} alt="Instagram" className="h-7 w-7" />
			</a>

			<a href="/" target="_blank" rel="noopener noreferrer">
				<img src={LinkedInImg} alt="LinkedIn" className="h-7 w-7" />
			</a>

			<a href="/" target="_blank" rel="noopener noreferrer">
				<img src={DiscordImg} alt="Discord" className="h-7 w-7" />
			</a>
		</div>
	);
};

export default Social;
