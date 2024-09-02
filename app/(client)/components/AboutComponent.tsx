"use client";

import React, { useState } from "react";
import { About } from "../utils/interface";
import Link from "next/link";
import ButtonLarge from "./Buttons/ButtonLarge";

interface Props {
	about: About;
}

const AboutComponent = ({ about }: Props) => {
	const [isContentVisible, setIsContentVisible] = useState(true);

	const handleToggle = () => {
		setIsContentVisible(!isContentVisible);
	};

	return (
		<div className={`${cardStyle(isContentVisible)}`}>
			<div
				className={`flex flex-col ${isContentVisible ? "justify-between" : "justify-center"} sm:text-xl lg:text-2xl`}>
				<div className="flex justify-between items-start mb-4">
					<h1 className="font-CustomMed text-4xl h-auto">
						Sophia C. Marinelli
					</h1>
					<div
						onClick={handleToggle}
						className="cursor-pointer text-xl font-bold">
						{isContentVisible ? "x" : "Menu"}
					</div>
				</div>

				{/* Conditionally render content */}
				{isContentVisible && (
					<div className="flex flex-col flex-grow">
						<span>{about.bio}</span>
						<div className="relative flex items-center my-4">
							<div className="flex-grow border-t border-black"></div>
						</div>
						<div className="flex sm:flex-col md:flex-row lg:flex-row w-full mb-4">
							<div className="grow w-1/2 font-customMono uppercase text-note">
								Previously at:
							</div>
							<div className="w-full">
								<div className="font-customSerifMed flex sm:flex-col md:flex-col lg:flex-col sm:items-start md:items-end">
									{about.former.map((employer, index) => (
										<div
											className="flex w-full items-end text-right mb-1"
											key={employer._key || index}>
											<Link
												className="w-full hover:mix-blend-difference"
												href={employer.employerUrl}
												target="_blank"
												rel="noopener noreferrer">
												{employer.employerName}
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="flex sm:flex-col md:flex-row lg:flex-row w-full mb-4 gap-2">
							<div className="grow font-customMono uppercase text-note">
								Currently at:
							</div>
							<div className="font-customSerifMed grow sm:text-left md:text-right lg:text-right">
								<Link
									className="hover:mix-blend-difference"
									href={about.current.employerUrl}
									target="_blank"
									rel="noopener noreferrer">
									{about.current.employerName}
								</Link>
							</div>
						</div>
						<div className="relative flex items-center mb-4">
							<div className="flex-grow border-t border-black"></div>
						</div>
						<div className="flex sm:flex-col md:flex-row lg:flex-row gap-2">
							<Link href={`/`} className="grow sm:w-full md:w-1/2 lg:w-1/2">
								<ButtonLarge title="View Projects" />
							</Link>
							<Link href={`/`} className="grow sm:w-full md:w-1/2 lg:w-1/2">
								<ButtonLarge title="Contact" />
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AboutComponent;

const cardStyle = (isContentVisible: boolean) => `
  fixed
  inset-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  shadow-[0px_4px_32px_rgba(0,_0,_0,_0.25)]
  text-xl
  rounded-2xl
  flex
  flex-col
  items-center
  sm:w-3/4
  md:w-1/2
  lg:w-1/2
  ${isContentVisible ? "h-screen sm:p-8 md:p-16 lg:p-16" : "h-[25vh] sm:p-2 md:p-4 lg:p-4"}
  max-h-[70vh]
  justify-start
  box-border
  mix-blend-normal
  text-left
  text-black 
  z-[50]
  content-center
`;
