import Link from "next/link";
import React from "react";

interface Props {
	title: string;
	href: string;
}

const ButtonSmall = ({ title = "", href = "" }: Props) => {
	return (
		<Link href={href}>
			<button className="border border-black border px-4 py-2  hover:rounded-none font-customBold uppercase rounded-sm text-note hover:border-black hover:bg-black hover:text-white">
				{title}
			</button>
		</Link>
	);
};

export default ButtonSmall;
