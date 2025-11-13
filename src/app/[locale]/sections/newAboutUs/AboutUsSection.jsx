"use client";

import React from "react";
import Image from "next/image";

// A reusable component for the stat boxes to keep the code clean
const StatBox = ({ number, text, iconSrc }) => (
	<div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl text-white text-center w-full max-w-sm p-8">
		{/* Decorative Icon */}
		<div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3">
			<Image src={iconSrc} alt="decoration" width={60} height={60} />
		</div>
		<p className="text-5xl md:text-[5rem] font-bold">{number}</p>
		<p className="mt-2 text-lg">{text}</p>
	</div>
);

const AboutUsSection = () => {
	return (
		<section className="w-full bg-cover bg-center bg-no-repeat bg-about-mobile md:bg-about-desktop">
				{/* 1. The White Content Card */}
				<div className="bg-white rounded-3xl md:rounded-[36px] md:p-20 py-[60px] md:py-[120px] my-24 md:my-48 mx-3 md:mx-6 z-10">
					{/* Header Text */}
					<div className="text-center">
						<h1 className="text-[1.75rem] md:text-[4rem] font-aileron font-bold text-cc-onyx relative inline-block tracking-[-0.06em]">
							Cultivating Collaboration
							{/* Decorative Sparkle */}
							<span className="absolute -top-2 -right-6">
								<Image
									src="/images/AboutUs/sparkle.svg"
									alt="sparkle"
									width={24}
									height={24}
								/>
							</span>
						</h1>
						<p className="text-2xl md:text-5xl font-times-new-roman font-[400] italic text-cc-onyx tracking-[-0.04em]">
							between creators and brands.
						</p>
					</div>

					{/* Self-Playing Video */}
					<div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
						<video
							src="/videos/about-us-placeholder.mp4" // Replace with your actual video path
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-full object-cover"
						></video>
					</div>

					{/* About Us Text */}
					<div className="mt-12">
						<h2 className="md:text-[2rem] font-bold text-cc-onyx tracking-[-0.06em]">About Us</h2>
						<p className="mt-4 text-cc-onyx max-w-2xl mx-auto ">
							Cult Creative is a data-driven platform that streamlines
							creator-brand collaborations, backed by a dedicated team ensuring
							every partnership succeeds.
						</p>
						<p className="mt-4 text-cc-onyx max-w-2xl mx-auto ">
							We believe that meaningful collaborations are founded on
							creativity, trust, and insight. By merging technology with human
							expertise, we empower creators and brands to grow together,
							shaping the future of creator-brand partnerships.
						</p>
					</div>
				</div>

				{/* 2. Content Outside the White Card (in the dark blue area) */}
				<div className="mt-24 md:mx-6 text-center text-white">
					{/* Stats Boxes Section */}
					{/* - Mobile: flex-col (stacks them vertically) */}
					{/* - Desktop: md:flex-row (places them side-by-side) */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
						<StatBox
							number="13,000+"
							text="Creators Contributed"
							iconSrc="/images/AboutUs/stat-icon-1.svg"
						/>
						<StatBox
							number="900+"
							text="Companies Onboarded"
							iconSrc="/images/AboutUs/stat-icon-2.svg"
						/>
						<StatBox
							number="1,200"
							text="Jobs Matched"
							iconSrc="/images/AboutUs/stat-icon-3.svg"
						/>
					</div>

					{/* Empowering Text Line */}
					<p className="text-2xl md:text-3xl font-serif italic mt-20">
						We’re here to empower creators to thrive and shape the future of
						brands.
					</p>

					{/* Buttons Section */}
					{/* - Mobile: flex-col (stacks them vertically) */}
					{/* - Desktop: md:flex-row (places them side-by-side) */}
					<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
						<a
							href="#"
							className="w-full md:w-auto bg-blue-600 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors"
						>
							SIGN UP AS A CREATOR
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</a>
						<a
							href="#"
							className="w-full md:w-auto bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 hover:bg-white hover:text-blue-600 transition-colors"
						>
							CONTACT OUR TEAM
							<svg
								className="w-5 h-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</a>
					</div>
				</div>
		</section>
	);
};

export default AboutUsSection;
