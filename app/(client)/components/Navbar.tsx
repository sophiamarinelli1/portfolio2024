import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
	return (
		<div className="mx-auto max-w-5xl p-6">
			<div className="flex justify-center items-center h-16 w-full">
				<Link href="/">
					<div>
						<Logo />
					</div>
				</Link>
				<Button />
			</div>
		</div>
	);
};

export default Navbar;
