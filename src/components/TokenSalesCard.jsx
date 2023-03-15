import React from "react";
import { ClockIcon } from "@heroicons/react/24/solid";

import { BuyButton } from "./Button";

const TokenSalesCard = () => {
	return (
		<div className="w-full md:w-[45%] h-48 md:h-68 p-7 md:p-10 rounded-3xl md:rounded-5xl bg-purple-900 flex flex-col justify-between md:justify-evenly items-center">
			<div className="font-roboto text-2xl md:text-3xl font-medium md:font-bold text-white md:tracking-widest text-center">
				Annex Token Sale
			</div>
			<div className="font-roboto text-xs md:text-base text-white text-center">
				Token Sale Countdown
			</div>
			<div className="items-center flex flex-col gap-1">
				<BuyButton />
				<div className="font-roboto text-sm text-gray-300 text-center flex items-center gap-1">
					<ClockIcon className="h-5 w-5" />
					183d 21h 57m 30s
				</div>
			</div>
		</div>
	);
};

export default TokenSalesCard;
