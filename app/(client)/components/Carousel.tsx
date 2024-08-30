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
		<div className="carousel-container">
			{images.length > 0 && (
				<>
					<div className="carousel">
						<img
							src={images[currentIndex].asset.url}
							alt={`Slide ${currentIndex + 1}`}
							className="carousel-image"
						/>
					</div>
					<div className="carousel-controls">
						<button onClick={goToPrevious}>Previous</button>
						<button onClick={goToNext}>Next</button>
					</div>
					<div className="carousel-indicators">
						{images.map((_, index) => (
							<span
								key={index}
								className={`indicator ${
									index === currentIndex ? "active" : ""
								}`}
								onClick={() => setCurrentIndex(index)}></span>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Carousel;
