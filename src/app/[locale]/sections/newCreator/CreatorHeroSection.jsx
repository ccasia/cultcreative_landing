"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { videoGallery } from "../../components/videoData";

const Thumbnail = ({ videoData, onClick, isActive }) => (
	<div className="w-24 md:w-36 flex-shrink-0">
		<button
			onClick={onClick}
			className="group w-full rounded-2xl overflow-hidden opacity-60 hover:opacity-100"
		>
			<div className="relative aspect-[4/5]">
				<Image
					src={videoData.thumbnail}
					alt={videoData.alt}
					fill
					sizes="(max-width: 768px) 144px, 160px"
					className="object-cover"
				/>
			</div>
		</button>
	</div>
);

const CreatorHeroSection = () => {
	const [currentVideoUrl, setCurrentVideoUrl] = useState(
		videoGallery[0].videoUrl
	);

	const handleThumbnailClick = (videoUrl) => {
		setCurrentVideoUrl(videoUrl);
	};

	const row1 = videoGallery.slice(0, 7);
	const row2 = videoGallery.slice(7, 14);
	const row3 = videoGallery.slice(14, 21);

	return (
		<section className="min-h-screen flex justify-center items-center w-full bg-white pt-32 pb-0 lg:pt-56 md:pb-12">
			<div className="container mx-auto px-6 flex flex-col items-center gap-y-28 md:gap-y-48">
				<div className="relative text-center">
					<div className="flex items-center justify-center">
						<h2
							className="text-4xl md:text-7xl font-bold font-aileron relative tracking-[-0.06em]"
							style={{ color: "#231f20" }}
						>
							Get{" "}
							<span className="relative inline-block align-middle -top-1">
								<Image
									src="/images/NewCreator/heroPurpleRectangle.svg"
									alt="Rectangle background"
									fill
									className="object-cover z-0"
								/>
								<span className="relative z-10 px-2 py-1 text-white">
									Brand Deals,
								</span>
							</span>
						</h2>
					</div>
					<h3 className="text-4xl md:text-5xl font-baskerville font-[400] italic relative tracking-[-0.06em] mb-2 text-cc-onyx">
						Get paid.
					</h3>

					<p
						className="text-sm md:text-xl max-w-3xl mx-auto relative font-aileron"
						style={{ color: "#231f20" }}
					>
						Stop chasing. Become a creator with The Cult
						<br /> and make money off your content today!
					</p>
				</div>
				<div className="relative flex flex-col justify-center items-center">
					<div className="z-10 flex flex-col justify-center items-center gap-1 md:gap-2">
						<div className="flex justify-center gap-3 md:gap-5 w-full pl-20">
							{row1.map((video) => (
								<Thumbnail
									key={video.id}
									videoData={video}
									isActive={currentVideoUrl === video.videoUrl}
									onClick={() => handleThumbnailClick(video.videoUrl)}
								/>
							))}
						</div>
						<div className="flex justify-center gap-3 md:gap-5 w-full">
							{row2.map((video) => (
								<Thumbnail
									key={video.id}
									videoData={video}
									isActive={currentVideoUrl === video.videoUrl}
									onClick={() => handleThumbnailClick(video.videoUrl)}
								/>
							))}
						</div>
						<div className="flex justify-center gap-3 md:gap-5 w-full pr-20">
							{row3.map((video) => (
								<Thumbnail
									key={video.id}
									videoData={video}
									isActive={currentVideoUrl === video.videoUrl}
									onClick={() => handleThumbnailClick(video.videoUrl)}
								/>
							))}
						</div>
					</div>
					<div className="absolute inset-0 z-20 pointer-events-none">
						<Image
							src="/images/NewCreator/radialBlur.svg"
							alt="Radial blur"
							fill
							className="object-cover"
						/>
					</div>
					{/* Iphone video player */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-60 h-auto md:w-80 lg:w-80 drop-shadow-2xl pointer-events-none">
						<div className="aspect-[9/19]">
							<Image
								src="/images/NewCreator/iphone.svg"
								alt="iPhone frame"
								fill
								sizes="(max-width: 768px) 240px, 270px"
								className="object-contain"
							/>
							<video
								key={currentVideoUrl}
								className="absolute top-0 left-0 w-full h-full object-cover px-[5.5%] py-[9.5%] rounded-[48px] md:rounded-[60px]"
								autoPlay
								loop
								muted
								playsInline
							>
								<source src={currentVideoUrl} type="video/mp4" />
							</video>
						</div>
					</div>
				</div>
				<div
					className="flex justify-center mb-24 md:mb-28"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					<motion.button
						className="px-12 py-4 md:px-16 md:py-3 text-white font-semibold rounded-full text-xs md:text-lg font-aileron relative overflow-hidden"
						style={{
							backgroundColor: "#1340ff",
							background: "#1340ff",
							filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
						}}
						whileHover={{
							scale: 1.05,
							background: "#1340ff",
							filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4))",
						}}
						transition={{ duration: 0.3 }}
					>
						<span className="flex items-center gap-2">
							JOIN AS A CREATOR
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								className="inline-block"
							>
								<path
									d="M7 17L17 7M17 7H7M17 7V17"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					</motion.button>
				</div>
			</div>
		</section>
	);
};

export default CreatorHeroSection;
