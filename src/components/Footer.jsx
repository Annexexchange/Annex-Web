import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

import { LogoImg } from "../assets";
import EmailInput from "./EmailInput";
import Social from "./Social";

const Footer = () => {
	return (
		<div className="bg-white w-[98%] md:w-[98%] p-0 md:p-24 rounded-3xl md:rounded-5xl">
			<div className="hidden flex-col md:flex gap-6 items-center justify-center">
				<div className="flex flex-row gap-10">
					<div className="flex flex-col w-1/2 gap-3">
						<div>
							<img src={LogoImg} alt="Annex Exchange Logo" className="" />
						</div>
						<div className="font-roboto font-light text-sm text-justify text-slate-600">
							Buy, trade, and hold 350+ cryptocurrencies on Annex. we are
							committed to user protection with strict protocols and
							industry-leading technical measures.
						</div>
					</div>
					<div className="flex flex-col w-1/2 gap-3">
						<div className="font-roboto font-bold text-base text-slate-700">
							Newsletter
						</div>
						<div className="font-roboto font-light text-sm text-justify text-slate-600">
							Send us an email. We will respond shortly.
						</div>
						<EmailInput />
					</div>
				</div>

				<div className="flex flex-row items-start justify-between w-full mb-10">
					<div className="flex flex-col gap-5">
						<div className="font-roboto font-bold text-slate-700 text-sm">
							Get In Touch
						</div>
						<div className="flex flex-col justify-between gap-2">
							<div className="font-roboto font-semibold text-slate-500 text-sm flex gap-2 items-center">
								<MapPinIcon className="h-4 w-4 text-slate-500" />
								Lagos, Nigeria
							</div>
							<div className="font-roboto font-semibold text-slate-500 text-sm flex gap-2 items-center">
								<PhoneIcon className="h-4 w-4 text-slate-500" />
								+234-704-254-1462
							</div>
							<div className="font-roboto font-semibold text-slate-500 text-sm flex gap-2 items-center">
								<EnvelopeIcon className="h-4 w-4 text-slate-500" />
								annexexchangeme@gmail.com
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-between gap-4">
						<div className="font-roboto font-bold text-slate-700 text-sm">
							Our Services
						</div>
						<div className="flex flex-col">
							<Link
								to="/"
								className="font-roboto font-semibold text-purple-annex text-sm"
							>
								Currency Wallet
							</Link>
							<Link
								to="/"
								className="font-roboto font-semibold text-purple-annex text-sm"
							>
								Currency Transaction
							</Link>
							<Link
								to="/"
								className="font-roboto font-semibold text-purple-annex text-sm"
							>
								Crypto Investment
							</Link>
							<Link
								to="/"
								className="font-roboto font-semibold text-purple-annex text-sm"
							>
								Annex Token Sale
							</Link>
						</div>
					</div>
					<div className="flex flex-col justify-between gap-4">
						<div className="font-roboto font-bold text-slate-700 text-sm">
							Quick Links
						</div>
						<div className="flex flex-col">
							<Link
								to="/"
								className="font-roboto font-semibold text-purple-annex text-sm"
							>
								About Us
							</Link>
							<Link
								to="/"
								className="font-roboto font-semibold text-purple-annex text-sm"
							>
								Contact Us
							</Link>
							<Link
								to="/"
								className="font-roboto font-semibold text-purple-annex text-sm"
							>
								Services
							</Link>
							<Link
								to="/"
								className="font-roboto font-semibold text-purple-annex text-sm"
							>
								Terms & Condition
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-3">
						<div className="font-roboto font-bold text-slate-700 text-sm">
							Follow us
						</div>
						<div>
							<Social background />
						</div>
					</div>
				</div>
			</div>

			<div className="md:hidden flex-col flex gap-6 px-5 py-14 items-center justify-center">
				<div className="flex flex-col gap-5">
					<div className="flex items-center justify-center">
						<img
							src={LogoImg}
							alt="Annex Exchange Logo"
							className="flex items-center justify-center"
						/>
					</div>
					<div className="font-roboto text-center text-base text-slate-600">
						Buy, trade, and hold 350+ cryptocurrencies on Annex. we are
						committed to user protection with strict protocols and
						industry-leading technical measures.
					</div>
					<div className="flex flex-col gap-2 justify-center items-start">
						<div className="font-roboto font-semibold text-base">
							Get In Touch
						</div>
						<div className="flex flex-col justify-between gap-2">
							<div className="font-roboto font-medium text-slate-600 text-sm flex gap-2 items-center">
								<MapPinIcon className="h-4 w-4" />
								Lagos, Nigeria
							</div>
							<div className="font-roboto font-medium text-slate-600 text-sm flex gap-2 items-center">
								<PhoneIcon className="h-4 w-4" />
								+234-704-254-1462
							</div>
							<div className="font-roboto font-medium text-slate-600 text-sm flex gap-2 items-center">
								<EnvelopeIcon className="h-4 w-4" />
								annexexchangeme@gmail.com
							</div>
						</div>
					</div>
				</div>

				<hr className="border border-slate-500 w-full md:hidden" />

				<div className="w-full flex flex-col gap-3">
					<div className="font-roboto font-medium text-base text-black">
						Newsletter
					</div>
					<div className="font-roboto font-normal text-xs text-slate-500">
						Send us an email. We'll respond shortly
					</div>
					<EmailInput />
				</div>

				<hr className="border border-slate-500 w-full md:hidden" />

				<div className="flex flex-col gap-4">
					<div className="grid grid-cols-2 gap-5">
						<div className="flex flex-col gap-2">
							<div className="font-roboto font-medium text-base">
								Our Services
							</div>
							<div>
								<ol className="font-roboto text-sm text-purple-annex">
									<li>Currency Wallet</li>
									<li>Currency Transaction</li>
									<li>Bitcoin Investment</li>
									<li>Annex Token Sale</li>
								</ol>
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<div className="font-roboto font-medium text-base">
								Quick Links
							</div>
							<div>
								<ol className="font-roboto text-sm text-purple-annex">
									<li>About Us</li>
									<li>Contact Us</li>
									<li>Services</li>
									<li>Terms & Conditions</li>
								</ol>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-2 justify-center items-center">
						<div className="font-roboto font-medium text-base">Follow Us</div>
						<Social background />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
