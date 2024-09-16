"use client";

import React, { useState } from "react";
import { About } from "../utils/interface";
import Link from "next/link";
import ArrowRight from "./Icons/ArrowRight";
import ButtonSmall from "./Buttons/ButtonSmall";
import ButtonLarge from "./Buttons/ButtonLarge";

interface Props {
	about: About;
}

const AboutComponent = ({ about }: Props) => {
	return (
		<div>
			<div className="font-customBlack w-full mx-4 sm:text-3xl lg:text-6xl">
				<div className="flex flex-col w-full">
					<p className="">{about.bio}</p>
					<div className=" flex sm:flex-col lg:flex-row gap-8 mt-8 text-2xl">
						<div className="">
							<p className="text-body">Previously at:</p>
							{about.former.map((employer, index) => (
								<div className="" key={employer._key || index}>
									<Link
										className="hover:text-ash"
										href={employer.employerUrl}
										target="_blank"
										rel="noopener noreferrer">
										{employer.employerName}
									</Link>
								</div>
							))}
						</div>
						<div className="text-2xl">
							<p className="text-body">Currently At:</p>
							<Link
								className="hover:text-ash"
								href={about.current.employerUrl}
								target="_blank"
								rel="noopener noreferrer">
								{about.current.employerName}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutComponent;
