"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CreatorCardDeck = ({ creators = [] }) => {
	const [deck, setDeck] = useState(creators);
	const [dragRotation, setDragRotation] = useState(0);

	useEffect(() => {
		setDeck(creators);
	}, [creators]);

	// This function now immediately reorders the deck state
	const moveCardToEnd = () => {
		if (deck.length < 2) return;

		setDeck((currentDeck) => {
			const [firstCard, ...restOfCards] = currentDeck;
			return [...restOfCards, firstCard];
		});
	};

	const onDragEnd = (event, info) => {
		const swipeThreshold = 100;
		if (Math.abs(info.offset.x) > swipeThreshold) {
			moveCardToEnd();
		}
		// No need to reset dragRotation here; the animate prop will handle it smoothly
	};

	const getCardAnimation = (index) => {
		// Hide cards beyond the third one to improve performance and avoid visual clutter
		if (index > 2) {
			return { opacity: 0, scale: 0.8, y: 60, x: 0, display: "none" };
		}

		const isTop = index === 0;

		const baseRotation = isTop ? 0 : index === 1 ? 8 : -6;
		// Add drag-induced rotation only to the top card
		const finalRotation = isTop ? baseRotation + dragRotation : baseRotation;

		return {
			display: "block",
			x: isTop ? 0 : index * 15,
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
						// The layout prop enables smooth animation on reordering
						layout
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 30,
						}}
						onTap={() => {
							if (isTop) moveCardToEnd();
						}}
						drag={isTop ? "x" : false}
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
							if (isTop) {
								const rotation = info.offset.x * 0.03;
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
