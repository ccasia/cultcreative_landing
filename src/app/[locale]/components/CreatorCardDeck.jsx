"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CreatorCardDeck = ({ creators = [] }) => {
	const [deck, setDeck] = useState(creators);
	const [isAnimating, setIsAnimating] = useState(false);
	const [dragRotation, setDragRotation] = useState(0);

	useEffect(() => {
		setDeck(creators);
	}, [creators]);

	const [swipeDirection, setSwipeDirection] = useState(null);

	const swipe = async (direction) => {
		if (deck.length < 2 || isAnimating) return;

		setIsAnimating(true);
		setSwipeDirection(direction);

		// Wait a bit for the animation to complete
		setTimeout(() => {
			setDeck((currentDeck) => {
				const [firstCard, ...restOfCards] = currentDeck;
				return [...restOfCards, firstCard];
			});
			setIsAnimating(false);
			setSwipeDirection(null);
		}, 300);
	};

	const onDragEnd = (event, info) => {
		const swipeThreshold = 100;
		if (info.offset.x > swipeThreshold) {
			swipe("right");
		} else if (info.offset.x < -swipeThreshold) {
			swipe("left");
		}
		setDragRotation(0); // Reset rotation when drag ends
	};

	const getCardAnimation = (index) => {
		if (index > 2) {
			return { opacity: 0, scale: 0, y: 0, x: 0 };
		}

		// Add drag rotation for the top card
		const baseRotation = index === 0 ? 0 : index === 1 ? 8 : -6;
		const finalRotation =
			index === 0 ? baseRotation + dragRotation : baseRotation;

		return {
			x: index * 15,
			opacity: 1,
			rotate: finalRotation,
			y: (deck.length - 1 - index) * 15,
			scale: 1,
		};
	};

	return (
		<div className="relative flex items-center justify-center w-full h-[400px] md:h-[500px]">
			{deck.map((creator, index) => {
				const isTop = index === 0;
				return (
					<motion.div
						key={creator.id}
						className="absolute pb-20 md:pb-0 mb-10 md:mb-0 w-72 cursor-grab active:cursor-grabbing"
						style={{ zIndex: deck.length - index }}
						initial={false}
						animate={getCardAnimation(index)}
						exit={
							isTop && isAnimating
								? {
										x: swipeDirection === "right" ? 300 : -300,
										rotate: swipeDirection === "right" ? 20 : -20,
										opacity: 0,
								  }
								: {}
						}
						transition={{
							type: "spring",
							stiffness: 200,
							damping: 25,
						}}
						onTap={() => {
							if (isTop) swipe("right");
						}}
						drag={isTop && !isAnimating ? "x" : false}
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={0.3}
						onDragEnd={onDragEnd}
						whileDrag={
							isTop
								? {
										scale: 1.05,
										cursor: "grabbing",
								  }
								: {}
						}
						onDrag={(event, info) => {
							// Update rotation state based on drag distance
							if (isTop) {
								const rotation = info.offset.x * 0.03; // Adjust multiplier for more/less rotation
								setDragRotation(rotation);
							}
						}}
					>
						<div className={`p-5 rounded-[22px] ${creator.gradientColor}`}>
							<div className="w-full h-full rounded-[22px] overflow-hidden relative bg-gray-800">
								<div className="relative w-full aspect-[5/7]">
									<Image
										src={creator.img}
										alt={creator.name}
										fill={true}
										style={{ objectFit: "cover" }}
										priority={isTop}
									/>
									<div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
										<div className="self-start">
											<span className="inline-block bg-white text-cc-dark-grey text-xs font-semibold px-2 py-1.5 rounded-md border border-gray-200 shadow-[inset_0_-3px_0_0_#E7E7E7]">
												{creator.tag}
											</span>
										</div>
										<h2 className="flex text-2xl font-aileron text-off-white justify-center drop-shadow-md">
											{creator.name}
										</h2>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};

export default CreatorCardDeck;
