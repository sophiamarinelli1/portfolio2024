import React from "react";

interface Props {
	title: string;
}

const ButtonLarge = ({ title = "" }: Props) => {
	return (
		<button className="w-full px-4 py-4 rounded-lg font-customMed text-actionS bg-zinc-300 hover:border-red-600 hover:bg-red-600 hover:text-white">
			{title}
		</button>
	);
};

export default ButtonLarge;
