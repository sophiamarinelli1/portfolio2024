import React from "react";
import { About } from "../utils/interface";

interface Props {
	about: About;
}

const AboutComponent = ({ about }: Props) => {
	return (
		<div>
			<h1>{about.bio}</h1>
			<p>Previously at:</p>
			<p>{about.former}</p>
			<p>Currently at:</p>
			<p>{about.current}</p>
		</div>
	);
};

export default AboutComponent;
