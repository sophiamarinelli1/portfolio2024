import React from "react";
import { About } from "../utils/interface";

interface Props {
	about: About;
}

const AboutComponent = ({ about }: Props) => {
	return <div>{about.bio}</div>;
};

export default AboutComponent;
