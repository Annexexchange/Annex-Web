import React from "react";

const EmailInput = () => {
	return (
		<div className="border border-purple-annex rounded-5xl md:p-1 relative mt-2">
			<input
				type="email"
				placeholder="yourmail@example.com"
				className="bg-slate-200 rounded-5xl py-3 md:placeholder:px-4 p-4 w-full placeholder-slate-400 text-slate-600 font-roboto font-normal text-xs md:text-base md:font-medium placeholder:font-roboto placeholder:font-normal md:placeholder:font-medium placeholder:text-xs md:placeholder:text-sm"
			/>
			<span className="absolute left-10 md:left-14 top-0 px-1 font-roboto font-medium text-sm text-slate-600 -translate-x-4 -translate-y-2 tracking-wide bg-white">
				Your Email
			</span>
			<a
				href="/"
				className="bg-white rounded-5xl p-1 absolute right-6 md:right-14 bottom-0 translate-y-2 md:translate-y-4 translate-x-3"
			>
				<div className="bg-purple-annex font-roboto font-normal md:font-medium text-xs md:text-sm text-white rounded-3xl md:rounded-5xl p-3 md:py-3 md:px-5">
					Sign Up
				</div>
			</a>
		</div>
	);
};

export default EmailInput;
