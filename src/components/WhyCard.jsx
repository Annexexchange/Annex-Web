import React from "react";

const WhyCard = () => {
	return (
		<div className="bg-white w-[92%] md:w-[98%] py-20 px-10 md:p-40 rounded-3xl md:rounded-5xl flex-col flex gap-10 items-center justify-center">
			<div className=" flex flex-col gap-3 md:gap-5">
				<div className="font-roboto font-bold text-3xl tracking-wide text-slate-700 text-center">
					Why Us
				</div>
				<div className="font-roboto font-normal text-center text-sm text-slate-600 md:text-slate-500">
					The Best in the crypto Industry
				</div>
			</div>
			<div className="flex flex-col items-start gap-10 md:grid md:grid-cols-3 md:gap-20">
				<div className="flex flex-col gap-2 items-center justify-start">
					<div className="font-roboto font-medium md:font-bold text-sm text-slate-800 md:text-slate-700 leading-1">
						Easy To Start
					</div>
					<div className="font-roboto font-normal text-sm text-center md:text-justify text-slate-500 md:text-slate-700">
						Start trading and you're good to go! Buy/sell crypto, set up
						recurring buys for your investments, and discover what Annex has to
						offer.
					</div>
				</div>
				<div className="flex flex-col gap-2 items-center justify-start">
					<div className="font-roboto font-medium md:font-bold text-sm text-slate-800 md:text-slate-700 leading-1">
						Safe & Secure
					</div>
					<div className="font-roboto font-normal text-sm text-center md:text-justify text-slate-500 md:text-slate-700">
						Advanced Data Encryption Your transaction data is secured via end-
						to-end encryption, ensuring that only you have access to your
						personal information.
					</div>
				</div>
				<div className="flex flex-col gap-2 items-center justify-start">
					<div className="font-roboto font-medium md:font-bold text-sm text-slate-800 md:text-slate-700 leading-1">
						Affordable Plans
					</div>
					<div className="font-roboto font-normal text-sm text-center md:text-justify text-slate-500 md:text-slate-700">
						Trade on the go. Anywhere and anytime.
					</div>
				</div>
				<div className="flex flex-col gap-2 items-center justify-start">
					<div className="font-roboto font-medium md:font-bold text-sm text-slate-800 md:text-slate-700 leading-1">
						Secure Storage
					</div>
					<div className="font-roboto font-normal text-sm text-center md:text-justify text-slate-500 md:text-slate-700">
						Personalized access control allows you to restrict devices and
						addresses that can access your account, for greater ease of mind.
					</div>
				</div>
				<div className="flex flex-col gap-2 items-center justify-start">
					<div className="font-roboto font-medium md:font-bold text-sm text-slate-800 md:text-slate-700 leading-1">
						Protected By Insurance
					</div>
					<div className="font-roboto font-normal text-sm text-center md:text-justify text-slate-500 md:text-slate-700">
						Secure Asset Fund for Users (SAFU) Binance stores 10% of all trading
						fees in a secure asset fund to protect a share of user funds.
					</div>
				</div>
				<div className="flex flex-col gap-2 items-center justify-start">
					<div className="font-roboto font-medium md:font-bold text-sm text-slate-800 md:text-slate-700 leading-1">
						24/7 Support
					</div>
					<div className="font-roboto font-normal text-sm text-center md:text-justify text-slate-500 md:text-slate-700">
						24/7 Chat Support Get 24/7 chat support with our friendly customer
						service agents at your service.
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyCard;
