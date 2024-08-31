import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Button from "./Buttons/ButtonLarge";

const Navbar = () => {
	return (
		<div className="mx-auto max-w-full p-6">
			<div className="flex justify-center items-center w-full">
				<Link href="/">
					<div className="text-6xl uppercase">
						<h1 className="font-customSerifMed">Sophia Marinelli</h1>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
