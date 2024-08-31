import React from "react";
import { About } from "../utils/interface";

interface Props {
	about: About;
}

const AboutComponent = ({ about }: Props) => {
	return (
		<div className={`${cardStyle}`}>
			<span>{about.bio}</span>
			<span>Previously at:</span>
			<span>&nbsp;</span>
			<span className="font-customSerifMed">{about.former}</span>
			<span>&nbsp;</span>
			<span className="my-2">Currently at:</span>
			<span>&nbsp;</span>
			<span className="font-customSerifMed">{about.current}</span>
		</div>
	);
};

export default AboutComponent;

const cardStyle = `
p-6
mx-auto
text-6xl
font-customMed
`;
