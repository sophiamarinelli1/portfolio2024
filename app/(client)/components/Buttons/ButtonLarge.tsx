import Link from "next/link";
import React from "react";

interface Props {
	title: string;
	href: string;
}

const ButtonLarge = ({ title = "", href = "" }: Props) => {
	return (
		<Link href={href}>
			<button className="w-full px-4 py-4 rounded-lg font-customBold text-actionM bg-black text-white hover:bg-zinc-800 hover:text-white">
				{title}
			</button>
		</Link>
	);
};

export default ButtonLarge;
