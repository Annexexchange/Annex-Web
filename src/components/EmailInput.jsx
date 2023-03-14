import React from "react";

const EmailInput = () => {
	return (
		<div className="border border-purple-annex rounded-5xl p-1 relative mt-2">
			<input
				type="email"
				placeholder="yourmail@example.com"
				className="bg-slate-200 rounded-5xl py-3 placeholder:px-4 p-8 w-full placeholder-slate-400 text-slate-600 font-roboto font-medium placeholder:font-roboto placeholder:font-medium placeholder:text-sm"
			/>
			<span className="absolute left-14 top-0 px-1 font-roboto font-medium text-sm text-slate-600 -translate-x-4 -translate-y-2 tracking-wide bg-white">
				Your Email
			</span>
			<a
				href="/"
				className="bg-white rounded-5xl p-1 absolute right-14 bottom-0 translate-y-4 translate-x-3"
			>
				<div className="bg-purple-annex font-roboto font-medium text-sm text-white rounded-5xl py-3 px-5">
					Sign Up
				</div>
			</a>
		</div>
	);
};

export default EmailInput;
