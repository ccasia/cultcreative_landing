"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CreatorCardDeck = ({ creators = [] }) => {
	const [deck, setDeck] = useState(creators);
	const [isSwiping, setIsSwiping] = useState(false);
	const [revealedIds, setRevealedIds] = useState(
		() => new Set(creators.length ? [creators[0].id] : []),
	);

	useEffect(() => {
		setDeck(creators);
	}, [creators]);

	const topCardId = deck[0]?.id;
	useEffect(() => {
		if (topCardId === undefined) return;
		setRevealedIds((prev) =>
			prev.has(topCardId) ? prev : new Set(prev).add(topCardId),
		);
	}, [topCardId]);

	const moveCardToEnd = () => {
		if (deck.length < 2) return;

		setDeck((currentDeck) => {
			const [firstCard, ...restOfCards] = currentDeck;
			return [...restOfCards, firstCard];
		});
	};

	// --- CHANGE 2: New function to handle the tap sequence ---
	const handleTap = () => {
		// Prevent double taps while animating
		if (isSwiping || deck.length < 2) return;

		// 1. Start the swipe animation
		setIsSwiping(true);

		// 2. Wait for the animation to finish (300ms), then reorder the deck
		setTimeout(() => {
			moveCardToEnd();
			setIsSwiping(false); // Reset state so the card reappears at the bottom
		}, 200);
	};

	const onDragEnd = (event, info) => {
		const swipeThreshold = 100;
		if (Math.abs(info.offset.x) > swipeThreshold) {
			moveCardToEnd();
		}
	};

	const getCardAnimation = (index) => {
		const isTop = index === 0;

		if (isTop && isSwiping) {
			return {
				x: 250, // Fly off to the right
				opacity: 1, // Fade out
				transition: { duration: 0.2 }, // Quick, snappy swipe
			};
		}

		if (index === 3) {
			return {
				display: "block", // Keep it in layout!
				x: 0,
				opacity: 0, // But make it invisible
				scale: 1, // Match scale of visible cards
				// Position it roughly where Index 2 is, so it doesn't "jump" when it moves up
				y: (deck.length - 1 - 2) * 15,
				// No zIndex here: once animated, Framer keeps it and overrides the style prop,
				// leaving this invisible card on top of the stack and blocking swipes
			};
		}

		if (index > 3) {
			return {
				opacity: 1,
				scale: 0.8,
				y: (deck.length - 1 - 2) * 15, // Keep Y stable to prevent layout jumps
				x: 0,
				display: "none",
			};
		}

		return {
			display: "block",
			x: isTop ? 0 : index * 15,
			opacity: 1,
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
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 30,
						}}
						onTap={() => {
							if (isTop) handleTap();
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
					>
						<div className={`p-5 rounded-[22px] ${creator.gradientColor}`}>
							{/* Rounded corners live on the image + overlay rather than an overflow-hidden wrapper:
							    clipping every child of a transformed card is very expensive in Firefox's WebRender */}
							<div className="w-full h-full rounded-[22px] relative bg-gray-800">
								<div className="relative w-full aspect-[5/7]">
									{revealedIds.has(creator.id) && (
										<Image
											src={creator.img}
											alt={creator.name}
											fill={true}
											sizes="248px"
											className="rounded-[22px] opacity-0 transition-opacity duration-300"
											style={{ objectFit: "cover" }}
											onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
										/>
									)}
									<div className="absolute inset-0 flex flex-col justify-between p-4 rounded-[22px] bg-gradient-to-t from-black/60 via-black/20 to-transparent">
										<div className="self-start">
											<span className="inline-block bg-white text-cc-dark-grey text-xs font-semibold px-2 py-1.5 rounded-md border border-gray-200 shadow-[inset_0_-3px_0_0_#E7E7E7]">
												{creator.tag}
											</span>
										</div>
										<h2 className="flex text-2xl font-aileron text-off-white justify-center text-shadow-md">
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
