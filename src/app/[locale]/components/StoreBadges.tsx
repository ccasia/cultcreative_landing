"use client";

import { Icon } from "@iconify/react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appLinks";

const badges = [
	{
		href: APP_STORE_URL,
		icon: "ic:baseline-apple",
		eyebrow: "Download on the",
		label: "App Store",
	},
	{
		href: PLAY_STORE_URL,
		icon: "logos:google-play-icon",
		eyebrow: "GET IT ON",
		label: "Google Play",
	},
];

const StoreBadges = ({ size = "md" }: { size?: "sm" | "md" }) => {
	const isSmall = size === "sm";

	return (
		<div className={`flex items-center ${isSmall ? "gap-1" : "gap-1.5"}`}>
			{badges.map((badge) => (
				<a
					key={badge.label}
					href={badge.href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`${badge.eyebrow} ${badge.label}`}
					className={`flex shrink-0 items-center rounded-md border border-white/60 bg-black text-white transition-transform duration-200 hover:scale-105 ${
						isSmall ? "h-6 gap-0.2 px-1" : "h-9 gap-1.5 px-2"
					}`}
				>
					<Icon
						icon={badge.icon}
						className={isSmall ? "h-3 w-3" : "h-5 w-5"}
					/>
					<span className="flex flex-col leading-none">
						<span className={isSmall ? "text-[6px]" : "text-[8px]"}>
							{badge.eyebrow}
						</span>
						<span
							className={`font-semibold tracking-tight ${isSmall ? "text-[8px]" : "text-[13px]"}`}
						>
							{badge.label}
						</span>
					</span>
				</a>
			))}
		</div>
	);
};

export default StoreBadges;
