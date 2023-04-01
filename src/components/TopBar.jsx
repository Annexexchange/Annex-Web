import React from "react";
import { Link } from "react-router-dom";
import {
	ChevronDownIcon,
	Bars3BottomLeftIcon,
	XMarkIcon,
} from "@heroicons/react/20/solid";

import { LogoImg } from "../assets";
import { PurpleButton } from "./Button";
import Social from "./Social";

const TopBar = ({ showMobileNav, setShowMobileNav }) => {
	return (
		<div className="z-0 bg-slate-50 md:bg-white md:h-24 md:rounded-b-4xl font-roboto md:m-0 p-7 flex flex-row md:gap-16 justify-between md:justify-center items-center">
			<Link to="/" className="flex items-center w-28">
				<img src={LogoImg} alt="Annex Exchange Logo" />
			</Link>
			<div className="hidden md:flex md:flex-row md:items-center md:justify-end gap-10">
				<div className="grid grid-cols-4 items-center justify-end gap-2">
					<Link
						to="/"
						className="hover:bg-purple-annex hover:rounded-3xl hover:text-white duration-300 text-center p-3 font-roboto font-medium text-sm"
					>
						Home
					</Link>
					<Link
						to="/livemarket"
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
			<div className="flex md:hidden">
				{showMobileNav ? (
					<div
						onClick={() => {
							setShowMobileNav(false);
						}}
					>
						<XMarkIcon className="h-8 w-8 text-slate-600 rotate-180" />
					</div>
				) : (
					<div
						onClick={() => {
							setShowMobileNav(true);
						}}
					>
						<Bars3BottomLeftIcon className="h-8 w-8 text-slate-600 rotate-180" />
					</div>
				)}
			</div>
			{/* <div
				className={
					showMobileNav
						? "block z-10 w-screen h-screen bg-orange-700"
						: "hidden z-10 w-screen h-screen bg-orange-700"
				}
			></div> */}
		</div>
	);
};

export default TopBar;
