import React from "react";

interface Props {
	title: string;
}

const ButtonLarge = ({ title = "" }: Props) => {
	return (
		<button className="border border-black border-4 w-full px-4 py-2  hover:rounded-none font-customMed text-xl uppercase hover:rounded-full hover:border-red-600 hover:bg-red-600 hover:text-white">
			{title}
		</button>
	);
};

export default ButtonLarge;
