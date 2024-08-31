"use client";

import React, { useEffect, useState } from "react";
import { About, Post } from "../utils/interface";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
	about: About;
}

const ImageFlash = ({ about }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = about?.gallery?.images || [];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 500);

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, [images.length]);

	return (
		<div className={flashStyle}>
			{images.length > 0 && (
				<div className="h-full">
					<Image
						src={urlFor(images[currentIndex]).url()}
						alt={`Slide ${currentIndex + 1}`}
						className="w-full h-full object-cover"
						width={700}
						height={700}
					/>
				</div>
			)}
		</div>
	);
};

export default ImageFlash;

const flashStyle = `
fixed inset-0 w-full h-full z-[-1] object-fill
`;
