"use client";

import React, { useState } from "react";
import { About } from "../utils/interface";
import Link from "next/link";
import ButtonLarge from "./Buttons/ButtonLarge";
import Hyperlink from "./Buttons/Hyperlink";

interface Props {
	about: About;
}

const AboutComponentAlt = ({ about }: Props) => {
	const [isContentVisible, setIsContentVisible] = useState(true);

	const handleToggle = () => {
		setIsContentVisible(!isContentVisible);
	};

	return (
		<div className={`${cardStyle(isContentVisible)}`}>
			{/* Remove h-full or conditionally apply it */}
			<div
				className={`flex flex-col justify-between w-full ${isContentVisible ? "h-full" : "h-auto"}`}>
				<div className="flex flex-row justify-between w-full">
					<h1 className=" uppercase h-auto">Sophia C. Marinelli</h1>
					<div onClick={handleToggle} className="cursor-pointer ml-auto">
						{isContentVisible ? "x" : "Menu"}
					</div>
				</div>

				{isContentVisible && (
					<div className="flex flex-col flex-grow justify-between mt-8">
						<span>{about.bio}</span>
						<Hyperlink title="Read More"></Hyperlink>
						<div className="relative flex items-center my-4">
							<div className="flex-grow border-t border-black"></div>
						</div>
						<div className="flex sm:flex-col md:flex-row lg:flex-row w-full gap-2">
							<div className="grow w-1/2 font-customMono uppercase text-note">
								Previously at:
							</div>
							<div className="w-full">
								<div className="font-customMed flex sm:flex-col md:flex-col lg:flex-col sm:items-start md:items-end">
									{about.former.map((employer, index) => (
										<div
											className="flex w-full items-end sm:text-left md:text-right lg:text-right mb-1"
											key={employer._key || index}>
											<Link
												className="w-full hover:text-white hover:mix-blend-difference"
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
									className="hover:text-white hover:mix-blend-difference"
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
							<div className="grow sm:w-full md:w-1/2 lg:w-1/2">
								<ButtonLarge href="/" title="View Projects" />
							</div>
							<div className="grow sm:w-full md:w-1/2 lg:w-1/2">
								<ButtonLarge
									href="mailto:phiamarinelli@gmail.com"
									title="Contact"
								/>
							</div>
						</div>
						<div className="w-full flex flex-row font-customMono text-note mt-1">
							<p className="grow text-left">2024©</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AboutComponentAlt;

const cardStyle = (isContentVisible: boolean) => `
font-customMed 
text-body
  fixed
  inset-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  shadow-[0px_0px_32px_rgba(0,_0,_0,_0.15)]
  rounded-2xl
  flex
  flex-col
  items-center
  sm:w-5/6
  md:w-1/2
  lg:w-1/2
  ${isContentVisible ? "h-screen" : "h-auto "}
  sm:p-8 md:p-8 lg:p-16
  min-h-[15vh]
  max-h-[70vh]
  justify-center
  box-border
  text-left
  text-black
  z-[50]
  bg-zinc-200/40
    backdrop-blur-md
  content-center

`;
