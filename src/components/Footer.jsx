import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

import { LogoImg } from "../assets";
import { EmailInput, Social } from "./index";

const Footer = () => {
	return (
		<div className="bg-white w-[98%] p-24 rounded-4xl flex-col flex gap-6 items-center justify-center">
			<div className="flex flex-row gap-10">
				<div className="flex flex-col w-1/2 gap-3">
					<div>
						<img src={LogoImg} alt="Annex Exchange Logo" className="" />
					</div>
					<div className="font-roboto font-light text-sm text-justify text-slate-400">
						Buy, trade, and hold 350+ cryptocurrencies on Annex. we are
						committed to user protection with strict protocols and
						industry-leading technical measures.
					</div>
				</div>
				<div className="flex flex-col w-1/2 gap-3">
					<div className="font-roboto font-bold text-base text-slate-600">
						Newsletter
					</div>
					<div className="font-roboto font-light text-sm text-justify text-slate-400">
						Send us an email. We will respond shortly.
					</div>
					<EmailInput />
				</div>
			</div>

			<div className="flex flex-row gap-4 items-start justify-between w-full mb-10">
				<div className="flex flex-col gap-5">
					<div className="font-roboto font-bold text-slate-500 text-sm">
						Get In Touch
					</div>
					<div className="flex flex-col justify-between gap-2">
						<div className="font-roboto font-semibold text-slate-400 text-sm flex gap-2 items-center">
							<MapPinIcon className="h-4 w-4 text-slate-400" />
							Lagos, Nigeria
						</div>
						<div className="font-roboto font-semibold text-slate-400 text-sm flex gap-2 items-center">
							<PhoneIcon className="h-4 w-4 text-slate-400" />
							+234-704-254-1462
						</div>
						<div className="font-roboto font-semibold text-slate-400 text-sm flex gap-2 items-center">
							<EnvelopeIcon className="h-4 w-4 text-slate-400" />
							annexexchangeme@gmail.com
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-4">
					<div className="font-roboto font-semibold text-slate-500 text-sm">
						Our Services
					</div>
					<div className="flex flex-col">
						<a
							href="/"
							className="font-roboto font-semibold text-purple-annex text-sm"
						>
							Currency Wallet
						</a>
						<a
							href="/"
							className="font-roboto font-semibold text-purple-annex text-sm"
						>
							Currency Transaction
						</a>
						<a
							href="/"
							className="font-roboto font-semibold text-purple-annex text-sm"
						>
							Crypto Investment
						</a>
						<a
							href="/"
							className="font-roboto font-semibold text-purple-annex text-sm"
						>
							Annex Token Sale
						</a>
					</div>
				</div>
				<div className="flex flex-col justify-between gap-4">
					<div className="font-roboto font-semibold text-slate-500 text-sm">
						Quick Links
					</div>
					<div className="flex flex-col">
						<a
							href="/"
							className="font-roboto font-semibold text-purple-annex text-sm"
						>
							About Us
						</a>
						<a
							href="/"
							className="font-roboto font-semibold text-purple-annex text-sm"
						>
							Contact Us
						</a>
						<a
							href="/"
							className="font-roboto font-semibold text-purple-annex text-sm"
						>
							Services
						</a>
						<a
							href="/"
							className="font-roboto font-semibold text-purple-annex text-sm"
						>
							Terms & Condition
						</a>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div className="font-roboto font-semibold text-slate-500 text-sm">
						Follow us
					</div>
					<div>
						<Social background />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
