import React from "react";

const TransparentButton = ({ text }) => {
	return (
		<a
			href="/"
			className="font-roboto text-white text-xs bg-transparent py-4 px-10 h-fit w-fit rounded-4xl items-center justify-center border-white border-2 tracking-wider cursor-pointer"
		>
			{text}
		</a>
	);
};

const PurpleButton = ({ text }) => {
	return (
		<a
			href="/"
			className="font-roboto text-white text-xs bg-purple-annex py-5 px-10 h-fit w-fit rounded-4xl items-center justify-center tracking-wider cursor-pointer"
		>
			{text}
		</a>
	);
};

const BuyButton = ({ text }) => {
	return (
		<a
			href="/"
			className="font-roboto text-center text-purple-900 text-base bg-white rounded-md py-2 px-5 h-fit w-fit font-semibold cursor-pointer"
		>
			Buy Now
		</a>
	);
};

export { TransparentButton, PurpleButton, BuyButton };
