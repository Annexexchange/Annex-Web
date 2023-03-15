import React from "react";

const TransparentButton = ({ text }) => {
	return (
		<a
			href="/"
			className="font-roboto text-white text-xs bg-transparent p-3 md:py-4 md:px-10 h-fit w-fit rounded-2xl md:rounded-5xl items-center justify-center border-white border-2 tracking-wider cursor-pointer"
		>
			{text}
		</a>
	);
};

const PurpleButton = ({ text }) => {
	return (
		<a
			href="/"
			className="font-roboto text-white text-xs bg-purple-annex p-4 md:py-5 md:px-10 h-fit w-fit rounded-2xl md:rounded-5xl items-center justify-center tracking-wider cursor-pointer"
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
