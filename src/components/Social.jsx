import React from "react";

import { DiscordImg, FacebookImg, InstagramImg, LinkedInImg } from "../assets";

const Social = ({ background }) => {
	return (
		<div className="flex flex-row gap-5 items-center justify-start">
			<a
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				className={background && "p-2 rounded-full bg-slate-300"}
			>
				<img src={FacebookImg} alt="Facebook" className="h-6 w-6" />
			</a>

			<a
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				className={background && "p-2 rounded-full bg-slate-300"}
			>
				<img src={InstagramImg} alt="Instagram" className="h-6 w-6" />
			</a>

			<a
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				className={background && "p-2 rounded-full bg-slate-300"}
			>
				<img src={LinkedInImg} alt="LinkedIn" className="h-6 w-6" />
			</a>

			<a
				href="/"
				target="_blank"
				rel="noopener noreferrer"
				className={background && "p-2 rounded-full bg-slate-300"}
			>
				<img src={DiscordImg} alt="Discord" className="h-6 w-6" />
			</a>
		</div>
	);
};

export default Social;
