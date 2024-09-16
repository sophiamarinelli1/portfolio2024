"use client";

import React, { useState } from "react";
import { Post } from "../utils/interface";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ArrowRight from "./Icons/ArrowRight";

interface Props {
	post: Post;
}

const Carousel = ({ post }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const media = post?.gallery?.media || []; // Use media array

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? media.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === media.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="relative sm:w-full md:w-full lg:w-1/2 sm:h-[75vh] md:h-screen lg:h-screen">
			{media.length > 0 && (
				<>
					<div className="carousel-container w-full h-full overflow-hidden relative">
						{/* Check the type of media */}
						{media[currentIndex]._type === "image" ? (
							<Image
								// Use the direct URL if available, else fallback to `urlFor`
								src={
									media[currentIndex].asset?.url
										? media[currentIndex].asset?.url
										: media[currentIndex].asset?._ref
											? urlFor(media[currentIndex].asset._ref).url() // Only call urlFor if _ref exists
											: ""
								}
								alt={media[currentIndex].alt || `Slide ${currentIndex + 1}`}
								className="w-full h-full sm:object-contain lg:object-cover"
								width={700}
								height={700}
							/>
						) : (
							<div className="video-background">
								<iframe
									src={`${media[currentIndex].vimeoUrl}`}
									width="100%"
									height="100%"
									frameBorder="0"
									allow="autoplay; fullscreen; picture-in-picture"
									allowFullScreen
									className="w-full h-full object-cover"></iframe>
							</div>
						)}
					</div>
					<div className="carousel-controls absolute bottom-6 flex justify-between w-full items-center px-6 text-white mix-blend-difference">
						<button onClick={goToPrevious} className="p-2">
							Previous
						</button>
						<div className="">
							<span className="px-3 py-1">
								{currentIndex + 1} / {media.length}
							</span>
						</div>
						<button onClick={goToNext} className="flex-1 p-2">
							Next
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Carousel;
