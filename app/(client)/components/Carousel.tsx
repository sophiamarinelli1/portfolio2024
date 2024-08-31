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
							className="w-full h-full object-cover"
							width={700}
							height={700}
						/>
					</div>
					<div className="carousel-controls absolute inset-0 flex justify-between items-center px-6">
						<button
							onClick={goToPrevious}
							className="text-white p-2 mix-blend-difference">
							Previous
						</button>
						<button
							onClick={goToNext}
							className="text-white p-2 mix-blend-difference">
							<ArrowRight />
						</button>
					</div>
					<div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mb-4">
						<span className="text-white px-3 py-1 mix-blend-difference">
							{currentIndex + 1} / {images.length}
						</span>
					</div>
				</>
			)}
		</div>
	);
};

export default Carousel;
