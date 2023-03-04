import React from "react";

import { PurpleButton } from "./index";

const EmailInput = () => {
	return (
		<div className="border border-purple-annex rounded-4xl p-1 relative mt-2">
			{/* <div className=""> */}
			<div className="bg-white px-1 absolute left-14 -top-3 font-roboto text-sm text-slate-600">
				Your Email
			</div>
			<input
				type="email"
				name=""
				id=""
				placeholder="yourmail@example.com"
				className="bg-slate-200 rounded-4xl py-3 px-16 w-full placeholder-slate-400 text-slate-600 font-roboto font-medium placeholder:font-roboto placeholder:font-medium placeholder:text-sm"
			/>
			<div className="absolute right-14 bottom-2">
				<PurpleButton text="Sign Up" />
			</div>
			{/* </div> */}
		</div>
	);
};

export default EmailInput;
