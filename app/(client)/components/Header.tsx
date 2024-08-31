import React from "react";

interface Props {
	title: string;
}

const Header = ({ title = "" }: Props) => {
	return (
		<header className="text-7xl text-center uppercase my-8 font-customSerifMed">
			<h2>{title}</h2>
		</header>
	);
};

export default Header;
