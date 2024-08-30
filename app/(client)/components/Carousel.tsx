"use client";

import React, { useState } from "react";
import { Post } from "../utils/interface";

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
		<div className="relative max-w-full mx-auto">
			{images.length > 0 && (
				<>
					<div className="carousel-container w-full h-screen overflow-hidden relative">
						<img
							src={images[currentIndex].asset.url}
							alt={`Slide ${currentIndex + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="carousel-controls absolute inset-0 flex justify-between items-center p-4">
						<button
							onClick={goToPrevious}
							className="bg-black bg-opacity-50 text-white p-2 rounded-full">
							Previous
						</button>
						<button
							onClick={goToNext}
							className="bg-black bg-opacity-50 text-white p-2 rounded-full">
							Next
						</button>
					</div>
					<div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mb-4">
						<span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
							{currentIndex + 1} / {images.length}
						</span>
					</div>
				</>
			)}
		</div>
	);
};

export default Carousel;
