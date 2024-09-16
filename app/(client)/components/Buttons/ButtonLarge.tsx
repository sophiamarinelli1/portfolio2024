import Link from "next/link";
import React from "react";
import ArrowRight from "../Icons/ArrowRight";

interface Props {
	title: string;
	href: string;
}

const ButtonLarge = ({ title = "", href = "" }: Props) => {
	return (
		<Link href={href}>
			<button className="px-4 py-2 rounded-sm font-customBlack text-2xl text-black hover:bg-black hover:text-cream">
				{title}
			</button>
		</Link>
	);
};

export default ButtonLarge;
