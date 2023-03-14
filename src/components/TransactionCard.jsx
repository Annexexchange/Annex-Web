import React from "react";

const TransactionCard = () => {
	return (
		<div className="bg-white w-[75%] p-16 rounded-5xl flex flex-col gap-5 shadow-2xl shadow-black">
			<div className="font-roboto font-bold text-3xl tracking-wide text-slate-700 text-center">
				Transactions
			</div>
			<div className="flex-row flex items-center justify-between py-5">
				<div className="items-center justify-center flex flex-col gap-2">
					<div className="font-roboto font-bold text-2xl text-slate-800">
						1,378
					</div>
					<div className="font-roboto font-medium text-sm text-slate-600">
						Today’s Transactions
					</div>
				</div>
				<div className="items-center justify-center flex flex-col gap-2">
					<div className="font-roboto font-bold text-2xl text-slate-800">
						56,862
					</div>
					<div className="font-roboto font-medium text-sm text-slate-600">
						Monthly Transactions
					</div>
				</div>
				<div className="items-center justify-center flex flex-col gap-2">
					<div className="font-roboto font-bold text-2xl text-slate-800">
						398,712
					</div>
					<div className="font-roboto font-medium text-sm text-slate-600">
						Total Transactions
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransactionCard;
