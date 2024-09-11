import React from "react";

interface Props {
	title: string;
}

const Hyperlink = ({ title = "" }: Props) => {
	return (
		<span className="font-customBold text-actionM uppercase">{title}</span>
	);
};

export default Hyperlink;
