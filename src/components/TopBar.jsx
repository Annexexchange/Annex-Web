import React, { useState } from "react";

import { LogoImg } from "../assets";
import { PurpleButton, Social } from "./index";

const TopBar = () => {
	// eslint-disable-next-line
	const [active, setActive] = useState(false);

	return (
		<div className="bg-white h-24 rounded-2xl font-roboto my-2 mx-5 flex flex-row gap-16 justify-center items-center">
			<div className="flex items-center">
				<img src={LogoImg} alt="Annex Exchange Logo" />
			</div>
			<div className="w-[35%] grid grid-cols-4 items-center justify-end gap-6">
				<a
					href="/"
					className="hover:bg-purple-annex hover:rounded-3xl hover:text-white text-center p-3 font-roboto font-medium text-sm"
				>
					Home
				</a>
				<a
					href="/"
					className="hover:bg-purple-annex hover:rounded-3xl hover:text-white text-center p-3 font-roboto font-medium text-sm"
				>
					Live Market
				</a>
				<a
					href="/"
					className="hover:bg-purple-annex hover:rounded-3xl hover:text-white text-center p-3 font-roboto font-medium text-sm"
				>
					Trade
				</a>
				<a
					href="/"
					className="hover:bg-purple-annex hover:rounded-3xl hover:text-white text-center p-3 font-roboto font-medium text-sm"
				>
					Contact
				</a>
			</div>
			<div className="flex flex-row gap-5">
				<PurpleButton text={"Download App"} />
				<Social />
			</div>
		</div>
	);
};

export default TopBar;

// font-roboto text-white text-xs bg-purple-annex py-4 px-10 h-fit w-fit rounded-4xl items-center justify-center tracking-wider cursor-pointer
