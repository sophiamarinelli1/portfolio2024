"use client";

import React, { useState } from "react";
import { Post } from "../utils/interface";
import ArrowRight from "./Icons/ArrowRight";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface Props {
	post: Post;
}

const Carousel = ({ post }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = post?.gallery?.images || [];

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === images.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="relative w-full h-full text-2xl">
			{images.length > 0 && (
				<>
					<div className="carousel-container w-full h-full overflow-hidden relative">
						<Image
							src={urlFor(images[currentIndex]).url()}
							alt={`Slide ${currentIndex + 1}`}
							className="w-full h-full object-cover mix-blend-multiply saturate-0"
							width={700}
							height={700}
						/>
					</div>
					<div className="carousel-controls absolute bottom-0 flex justify-between w-full items-center px-6">
						<button
							onClick={goToPrevious}
							className=" text-red-600 p-2 mix-blend-difference">
							Previous
						</button>
						<div className="">
							<span className=" text-red-600 px-3 py-1 mix-blend-difference">
								{currentIndex + 1} / {images.length}
							</span>
						</div>
						<button
							onClick={goToNext}
							className="flex-1 text-red-600 p-2 mix-blend-difference">
							Next
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Carousel;
