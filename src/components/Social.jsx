import React from "react";

import { DiscordImg, TwitterImg, InstagramImg, LinkedInImg } from "../assets";

const Social = ({ background }) => {
	return (
		<div className="flex flex-row gap-5 items-center justify-start">
			<a
				href="https://twitter.com/annexexchangeme?t=UHaflT7WScrHXQFDVf3ArQ&s=09"
				target="_blank"
				rel="noopener noreferrer"
				className={background && "p-2 rounded-full bg-slate-300"}
			>
				<img src={TwitterImg} alt="Facebook" className="h-6 w-6" />
			</a>

			<a
				href="https://instagram.com/annexexchangeme?igshid=MjljNjAzYmU="
				target="_blank"
				rel="noopener noreferrer"
				className={background && "p-2 rounded-full bg-slate-300"}
			>
				<img src={InstagramImg} alt="Instagram" className="h-6 w-6" />
			</a>

			<a
				href="https://www.linkedin.com/mwlite/company/annex-exchange"
				target="_blank"
				rel="noopener noreferrer"
				className={background && "p-2 rounded-full bg-slate-300"}
			>
				<img src={LinkedInImg} alt="LinkedIn" className="h-6 w-6" />
			</a>

			<a
				href="https://discord.gg/a6BpfGY8D4"
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
