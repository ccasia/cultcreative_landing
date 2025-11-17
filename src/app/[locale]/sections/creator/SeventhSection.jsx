"use client";

import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";

// reusable child component for creator avatars
const CreatorAvatar = ({
	creator,
	onClick,
	size,
	positionClass = "",
	isActive = false,
	isMobile = false,
}) => {
	return (
		<button
			onClick={onClick}
			className={`rounded-full transition-all duration-300 ease-in-out transform focus:outline-none ${size} ${
				isMobile
					? `relative ${isActive ? "scale-[1.3] opacity-100" : "opacity-70"}`
					: `absolute ${positionClass}`
			}`}
		>
			{/* The colored ring */}
			<div
				className={`w-full h-full rounded-full border-4 ${creator.borderColor}`}
			>
				<div className={`w-full h-full rounded-full`}>
					<Image
						src={creator.svgPath}
						alt={creator.name}
						width={96}
						height={96}
						className="w-full h-full object-cover rounded-full"
					/>
				</div>
			</div>
		</button>
	);
};

const SeventhSection = () => {
	const testimonialsData = [
		{
			id: 1,
			name: "Jane Doe",
			svgPath: "/images/NewCreator/testimonialAvatar1.png",
			testimonial:
				"The analytics tools are a game-changer. I can finally see what content resonates with my audience and tailor my strategy accordingly. My engagement has gone up by 40%!",
			borderColor: "border-lavender",
			position: "top-1/5 left-1/7 ",
			size: "w-28 h-28",
		},
		{
			id: 2,
			name: "Ken Watanabe",
			svgPath: "/images/NewCreator/testimonialAvatar2.png",
			testimonial:
				"As a photographer, managing contracts and payments was always a hassle. This platform automates everything, letting me focus on what I love—creating beautiful images.",
			borderColor: "border-cc-green",
			position: "bottom-1/2 right-20 -translate-y-1/2",
			size: "w-20 h-20",
		},
		{
			id: 3,
			name: "Emily Chen",
			svgPath: "/images/NewCreator/testimonialAvatar1.png",
			testimonial:
				"I was hesitant to join another platform, but the community here is incredibly supportive. It’s more than a tool; it’s a network of like-minded creators.",
			borderColor: "border-bright-yellow",
			position: "top-1/5 right-1/6",
			size: "w-12 h-12",
		},
		{
			id: 4,
			name: "Aisha Khan",
			svgPath: "/images/NewCreator/testimonialAvatar2.png",
			testimonial:
				"The integration with other tools I already use is seamless. It has simplified my workflow and saved me hours every week. I can't recommend it enough.",
			borderColor: "border-vibrant-purple",
			position: "top-1/2 left-20 -translate-y-1/2",
			size: "w-16 h-16",
		},
		{
			id: 5,
			name: "David Lee",
			svgPath: "/images/NewCreator/testimonialAvatar1.png",
			testimonial:
				"Finally, a platform that understands the financial needs of creators. The payment system is fast, reliable, and transparent.",
			borderColor: "border-cc-blue",
			position: "bottom-1/3 right-1/6",
			size: "w-24 h-24",
		},
		{
			id: 6,
			name: "Maria Garcia",
			svgPath: "/images/NewCreator/testimonialAvatar2.png",
			testimonial:
				"The user interface is so intuitive and beautiful. It's a joy to use every day, unlike other clunky software I've tried.",
			borderColor: "border-cc-pink",
			position: "bottom-1/5 left-1/5 -translate-y-1/2",
			size: "w-18 h-18",
		},
	];

	// Initialize state with the first creator's ID
	const [activeId, setActiveId] = useState(testimonialsData[0].id);
	const activeTestimonial = testimonialsData.find((t) => t.id === activeId);
	const { isMdAndAbove } = useMediaQuery();

	const [cardHeight, setCardHeight] = useState("auto");
	const contentRef = useRef(null);

	useLayoutEffect(() => {
		if (contentRef.current) {
			setCardHeight(contentRef.current.scrollHeight);
		}
	}, [activeId]);

	return (
		<section className="relative w-full bg-white py-28 md:pt-40 overflow-hidden">
			<div className="flex flex-col items-center md:mx-60">
				<div className="max-w-4xl text-center mx-auto">
					<h2 className="font-aileron text-4xl md:text-[64px] font-bold leading-[57.86px] tracking-[-0.06em] text-center capitalize text-cc-onyx">
						What Our Creators Say
					</h2>
					<p className="md:mt-4 font-aileron font-normal text-base/5 md:text-2xl md:leading-[28px] text-center text-[400] max-w-2xl mx-auto text-cc-onyx">
						A short message reflecting our value of{" "}
						<br className="block md:hidden" />
						putting creators first. We love them!
					</p>
				</div>
				{isMdAndAbove ? (
					<div>
						<div
							className="absolute inset-0 w-full z-10"
							aria-hidden="true"
						>
							{testimonialsData.map((creator) => (
								<CreatorAvatar
									key={creator.id}
									creator={creator}
									onClick={() => setActiveId(creator.id)}
									size={creator.size}
									positionClass={creator.position}
									isMobile={false}
								/>
							))}
						</div>
						<div className="relative mt-32 flex justify-center min-h-[400px] max-w-3xl mx-auto">
							<div className="relative">
								<div className="relative bg-neutral-100 rounded-2xl p-12 md:p-20 shadow-sm mx-auto">
									{/* THE TESTIMONIAL CARD */}
									<div
										style={{ height: cardHeight }}
										className="transition-[height] duration-500 ease-in-out"
									>
										<div ref={contentRef}>
											<div className="flex flex-col items-center justify-center gap-6">
												<p className="font-aileron text-xl font-normal leading-none tracking-normal text-center text-gray-700">
													{activeTestimonial.testimonial}
												</p>
												<p className="font-baskerville text-2xl italic leading-[28px] text-center text-gray-900">
													{activeTestimonial.name}
												</p>
											</div>
										</div>
									</div>

									{/* Quotation Marks */}
									<div className="absolute top-0 left-0 translate-x-9 -translate-y-7">
										<Image
											src="/images/NewCreator/openQuote.svg"
											alt="Quote start"
											width={64}
											height={64}
										/>
									</div>
									<div className="absolute bottom-0 right-0 -translate-x-9 translate-y-7">
										<Image
											src="/images/NewCreator/closeQuote.svg"
											alt="Quote end"
											width={64}
											height={64}
										/>
									</div>

									{/* Active creator's avatar */}
									<div className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
										<div
											className={`w-30 h-30 rounded-full border-8 ${activeTestimonial.borderColor}`}
										>
											<Image
												src={activeTestimonial.svgPath}
												alt={activeTestimonial.name}
												width={96}
												height={96}
												className="w-full h-full object-cover rounded-full"
											/>
										</div>
									</div>
								</div>
								{/* Large active avatar for desktop */}
								<div className="absolute -top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
									<div
										className={`w-30 h-30 rounded-full border-6 ${activeTestimonial.borderColor}`}
									>
										<Image
											src={activeTestimonial.svgPath}
											alt={activeTestimonial.name}
											width={96}
											height={96}
											className="w-full h-full object-cover rounded-full"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div className="mt-12">
						<div className="flex justify-center items-center gap-2 px-4 pb-4 z-20">
							{testimonialsData.map((creator) => (
								<CreatorAvatar
									key={creator.id}
									creator={creator}
									onClick={() => setActiveId(creator.id)}
									size="w-12 h-12"
									isActive={creator.id === activeId}
									isMobile={true}
								/>
							))}
						</div>

						<div className="relative mt-12 flex justify-center min-h-[300px] max-w-3xl mx-auto px-4">
							<div className="relative w-full">
								<div className="relative bg-neutral-100 rounded-2xl p-8 pt-16 shadow-sm mx-auto">
									{/* Card content with animation */}
									<div
										style={{ height: cardHeight }}
										className="transition-[height] duration-500 ease-in-out"
									>
										<div ref={contentRef}>
											<div className="flex flex-col items-center justify-center gap-6">
												<p className="font-aileron text-lg md:text-xl font-normal leading-none tracking-normal text-center text-cc-onyx">
													{activeTestimonial.testimonial}
												</p>
												<p className="font-baskerville text-xl md:text-2xl italic leading-[28px] text-center text-cc-onyx">
													{activeTestimonial.name}
												</p>
											</div>
										</div>
									</div>

									{/* Quotation Marks */}
									<div className="absolute top-0 left-0 translate-x-4 -translate-y-4">
										<Image
											src="/images/NewCreator/openQuote.svg"
											alt="Quote start"
											width={48}
											height={48}
										/>
									</div>
									<div className="absolute bottom-0 right-0 -translate-x-4 translate-y-4">
										<Image
											src="/images/NewCreator/closeQuote.svg"
											alt="Quote end"
											width={48}
											height={48}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default SeventhSection;
