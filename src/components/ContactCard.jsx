import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

import Social from "./Social";
import ContactForm from "./ContactForm";

const ContactCard = () => {
	return (
		<div className="bg-transparent w-[75%] py-16 grid grid-flow-col grid-cols-2">
			<div className="flex flex-col gap-10">
				<div className=" flex flex-col gap-3">
					<div className="font-roboto font-semibold text-base text-slate-700">
						Get In Touch
					</div>
					<div className="flex flex-col gap-3">
						<div className="flex flex-row gap-3 items-start justify-start">
							<MapPinIcon className="h-6 w-6 text-slate-600" />
							<div className="flex flex-col">
								<div className="font-roboto text-sm text-slate-600">
									Address
								</div>
								<div className="font-roboto font-semibold text-sm text-slate-700">
									Lagos, Nigeria
								</div>
							</div>
						</div>
						<div className="flex flex-row gap-3 items-start justify-start">
							<PhoneIcon className="h-6 w-6 text-slate-600" />
							<div className="flex flex-col">
								<div className="font-roboto text-sm text-slate-600">
									Telephone
								</div>
								<div className="font-roboto font-semibold text-sm text-slate-700">
									+234-704-254-1462
								</div>
							</div>
						</div>
						<div className="flex flex-row gap-3 items-start justify-start">
							<EnvelopeIcon className="h-6 w-6 text-slate-600" />
							<div className="flex flex-col">
								<div className="font-roboto text-sm text-slate-600">Email</div>
								<div className="font-roboto font-semibold text-sm text-slate-700">
									annexexchangeme@gmail.com
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-3">
					<div className="font-roboto font-semibold text-base text-slate-700">
						Follow Us
					</div>
					<Social background />
				</div>
			</div>
			<div>
				<ContactForm />
			</div>
		</div>
	);
};

export default ContactCard;
