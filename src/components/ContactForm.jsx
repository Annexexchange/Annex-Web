import React from "react";

const ContactForm = () => {
	return (
		<div className="flex flex-col gap-3">
			<div className="border border-purple-annex rounded-5xl p-1 relative mt-2 flex items-center justify-center">
				<input
					type="text"
					placeholder="Surname First e.g John Doe"
					className="bg-slate-200 rounded-5xl py-3 placeholder:px-4 px-8 w-full placeholder-slate-400 text-slate-600 font-roboto font-medium placeholder:font-roboto placeholder:font-normal placeholder:text-sm"
				/>
				<span className="absolute left-14 top-0 px-1 font-roboto font-medium text-sm text-slate-600 -translate-x-4 -translate-y-2 tracking-wide bg-purple-100">
					*Your Name
				</span>
			</div>

			<div className="border border-purple-annex rounded-5xl p-1 relative mt-2 flex items-center justify-center">
				<input
					type="email"
					placeholder="yourmail@example.com"
					className="bg-slate-200 rounded-5xl py-3 placeholder:px-4 px-8 w-full placeholder-slate-400 text-slate-600 font-roboto font-medium placeholder:font-roboto placeholder:font-normal placeholder:text-sm"
				/>
				<span className="absolute left-14 top-0 px-1 font-roboto font-medium text-sm text-slate-600 -translate-x-4 -translate-y-2 tracking-wide bg-purple-100">
					*Your Email
				</span>
			</div>

			<div className="border border-purple-annex rounded-5xl p-1 relative mt-2 flex items-center justify-center">
				<textarea
					name="mesage"
					id="message"
					cols="30"
					rows="5"
					placeholder="Your message goes here"
					className="bg-slate-200 rounded-5xl py-3 placeholder:px-4 px-8 w-full placeholder-slate-400 text-slate-600 font-roboto font-medium placeholder:font-roboto placeholder:font-normal placeholder:text-sm"
				></textarea>
				<span className="absolute left-14 top-0 px-1 font-roboto font-medium text-sm text-slate-600 -translate-x-4 -translate-y-2 tracking-wide bg-purple-100">
					*Your Message
				</span>
				<a
					href="/"
					className="bg-purple-100 rounded-5xl p-1 absolute right-14 bottom-0 translate-y-7 translate-x-3"
				>
					<div className="bg-purple-annex font-roboto font-medium text-sm text-white rounded-5xl py-3 px-5">
						Submit
					</div>
				</a>
			</div>

			<div className="font-roboto font-medium text-black text-sm">
				* Compulsory fields
			</div>
		</div>
	);
};

export default ContactForm;
