import React from "react";
import { ClockIcon } from "@heroicons/react/24/solid";

import { BuyButton } from "./index";

const TokenSalesCard = () => {
	return (
		<div className=" w-[45%] h-17 p-10 rounded-4xl bg-purple-900 flex flex-col justify-evenly items-center">
			<div className="font-roboto text-3xl font-bold text-white tracking-widest text-center">
				Annex Token Sale
			</div>
			<div className="font-roboto text-base text-white text-center">
				Token Sale Countdown
			</div>
			<div className="items-center flex flex-col gap-2">
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
