"use client";

import StatsSection from "../../components/Stats";
import CreatorCardDeck from "../../components/CreatorCardDeck";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";

const creators_col_1 = [
	{
		id: 1,
		name: "Shermaine Wong",
		tag: "Fashion",
		img: "/images/NewCreator/placeholder2.png",
		gradientColor: "bg-gradient-to-b from-vibrant-purple to-cc-blue",
	},
	{
		id: 2,
		name: "Wong",
		tag: "F&B",
		img: "/images/NewCreator/shermaine-wong.jpg",
		gradientColor: "bg-gradient-to-b from-cc-red to-vibrant-purple",
	},
	{
		id: 3,
		name: "Wong Shermaine",
		tag: "Sports",
		img: "/images/NewCreator/placeholder1.jpg",
		gradientColor: "bg-gradient-to-b from-cc-blue to-cc-red",
	},
];

const creators_col_2 = [
	{
		id: 4,
		name: "Shermaine Wong",
		tag: "Fashion",
		img: "/images/NewCreator/shermaine-wong.jpg",
		gradientColor: "bg-gradient-to-b from-cc-blue to-cc-red",
	},
	{
		id: 5,
		name: "Claude Morgan",
		tag: "F&B",
		img: "/images/NewCreator/placeholder1.jpg",
		gradientColor: "bg-gradient-to-b from-vibrant-purple to-cc-blue",
	},
	{
		id: 6,
		name: "Denise",
		tag: "Sports",
		img: "/images/NewCreator/placeholder2.png",
		gradientColor: "bg-gradient-to-b from-cc-red to-vibrant-purple",
	},
];

const creators_col_3 = [
	{
		id: 7,
		name: "Shermaine Wong",
		tag: "Fashion",
		img: "/images/NewCreator/placeholder1.jpg",
		gradientColor: "bg-gradient-to-b from-cc-red to-vibrant-purple",
	},
	{
		id: 8,
		name: "Wong",
		tag: "F&B",
		img: "/images/NewCreator/placeholder2.png",
		gradientColor: "bg-gradient-to-b from-cc-blue to-cc-red",
	},
	{
		id: 9,
		name: "Wong Shermaine",
		tag: "Sports",
		img: "/images/NewCreator/shermaine-wong.jpg",
		gradientColor: "bg-gradient-to-b from-vibrant-purple to-cc-blue",
	},
];

const creators_combined = [
	...creators_col_1,
	...creators_col_2,
	...creators_col_3,
];

const SecondSection = () => {
	const { isMdAndAbove } = useMediaQuery();

	return (
		<div className="bg-white md:py-8">
			<section className="md:py-20 rounded-3xl bg-star-creator-mobile md:bg-star-creator-desktop bg-contain bg-center bg-no-repeat">
				<div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
					<StatsSection />

					{/* Title Section */}
					<div className="text-center mt-32 md:mt-72 md:mb-16">
						<h2 className="text-[2rem] md:text-6xl font-semibold md:font-bold text-white font-aileron relative inline-block tracking-[-0.06em]">
							{/* Sparkle effect */}
							<Image
								src="/images/NewCreator/stars.svg"
								alt="stars"
								width={360}
								height={360}
								className="absolute object-contain z-0 left-32 -top-28 md:left-72 md:-top-48"
							/>
							Our Star Creators.
						</h2>
						<p className="md:mt-4 text-base md:text-xl font-light text-white">
							Your next favorite collaborator starts here.
						</p>
					</div>
					<div className="w-full">
						{isMdAndAbove ? (
							<div className="flex flex-col md:flex-row">
								<CreatorCardDeck creators={creators_col_1} />
								<CreatorCardDeck creators={creators_col_2} />
								<CreatorCardDeck creators={creators_col_3} />
							</div>
						) : (
							<div>
								<CreatorCardDeck creators={creators_combined} />
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default SecondSection;
