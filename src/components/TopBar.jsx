import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { LogoImg } from "../assets";
import { PurpleButton } from "./Button";
import Social from "./Social";

const TopBar = () => {
	// eslint-disable-next-line
	const [active, setActive] = useState(false);

	return (
		<div className="bg-white h-24 rounded-4xl font-roboto my-2 mx-3 flex flex-row gap-16 justify-center items-center">
			<Link to="/" className="flex items-center">
				<img src={LogoImg} alt="Annex Exchange Logo" />
			</Link>
			<div className="flex flex-row items-center justify-end gap-10">
				<div className="grid grid-cols-4 items-center justify-end gap-2">
					<Link
						to="/"
						className="hover:bg-purple-annex hover:rounded-3xl hover:text-white duration-300 text-center p-3 font-roboto font-medium text-sm"
					>
						Home
					</Link>
					<Link
						to="/"
						className="hover:bg-purple-annex hover:rounded-3xl hover:text-white duration-300 text-center p-3 font-roboto font-medium text-sm"
					>
						Live Market
					</Link>
					<Link
						to="/trade"
						className="hover:bg-purple-annex hover:rounded-3xl hover:text-white duration-300 text-center p-3 font-roboto font-medium text-sm flex items-center justify-center"
					>
						Trade{" "}
						<ChevronDownIcon className="h-5 w-5 hover:text-white font-medium" />
					</Link>
					<Link
						to="/contact"
						className="hover:bg-purple-annex hover:rounded-3xl hover:text-white duration-300 text-center p-3 font-roboto font-medium text-sm"
					>
						Contact
					</Link>
				</div>
				<div className="flex flex-row gap-5">
					<PurpleButton text={"Download App"} />
					<Social />
				</div>
			</div>
		</div>
	);
};

export default TopBar;

// font-roboto text-white text-xs bg-purple-annex py-4 px-10 h-fit w-fit rounded-4xl items-center justify-center tracking-wider cursor-pointer
