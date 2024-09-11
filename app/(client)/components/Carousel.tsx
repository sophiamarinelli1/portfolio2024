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
		<div className="relative w-full h-full text-xl">
			{images.length > 0 && (
				<>
					<div className="carousel-container w-full overflow-hidden relative">
						<Image
							src={urlFor(images[currentIndex]).url()}
							alt={`Slide ${currentIndex + 1}`}
							className="w-full object-contain "
							width={700}
							height={700}
						/>
					</div>
					<div className="carousel-controls absolute bottom-0 flex justify-between w-full items-center px-6">
						<button onClick={goToPrevious} className="p-2 ">
							Previous
						</button>
						<div className="">
							<span className="px-3 py-1 ">
								{currentIndex + 1} / {images.length}
							</span>
						</div>
						<button onClick={goToNext} className="flex-1p-2 ">
							Next
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Carousel;
