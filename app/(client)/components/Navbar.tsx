import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="mx-auto max-w-5xl p-6">
			<div className="flex justify-between items-center h-16 w-full">
				<Link href="/">
					<div>Logo</div>
				</Link>
				<div>Icon</div>
			</div>
		</div>
	);
};

export default Navbar;
