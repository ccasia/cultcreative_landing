"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import StoreBadges from "./StoreBadges";
import { useNavVisibility } from "./NavVisibilityContext";

const QR_SRC = "/images/app/get-app-qr.svg";

const spring = {
	type: "spring",
	stiffness: 260,
	damping: 26,
	mass: 0.9,
} as const;

const headlineStyle = {
	fontFamily: "Aileron, sans-serif",
	fontWeight: 700,
	letterSpacing: "-0.06em",
};

const CloseIcon = ({ className }: { className: string }) => (
	<svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={3}
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
);

const DesktopBanner = () => {
	const [isDismissed, setIsDismissed] = useState(false);
	const [isExpanded, setIsExpanded] = useState(false);

	const dismiss = () => setIsDismissed(true);

	return (
		<AnimatePresence>
			{!isDismissed && (
				<motion.aside
					aria-label="Get the Cult Creative app"
					className="fixed right-14 -bottom-20 z-40 hidden md:block"
					style={{ y: "-50%" }}
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 40 }}
					transition={{ duration: 0.3, ease: "easeOut" }}
					onMouseEnter={() => setIsExpanded(true)}
					onMouseLeave={() => setIsExpanded(false)}
					onFocus={() => setIsExpanded(true)}
					onBlur={(e) => {
						if (!e.currentTarget.contains(e.relatedTarget as Node | null))
							setIsExpanded(false);
					}}
				>
					<motion.div
						className="relative h-[280px] overflow-hidden rounded-tl-[60px] rounded-bl-[60px] rounded-tr-[60px] rounded-br-[20px] bg-gradient-to-r from-[#8a5afe]  to-[#231F20] shadow-2xl"
						initial={false}
						animate={{ width: isExpanded ? 739 : 183 }}
						transition={spring}
					>
						<motion.div
							className="absolute right-0 top-0 flex h-full w-[168px] flex-col pl-4 pr-5 pt-8"
							initial={false}
							animate={{ opacity: isExpanded ? 0 : 1 }}
							transition={{ duration: 0.15 }}
							aria-hidden={isExpanded}
						>
							<p
								className="text-[20px] leading-[24px] tracking-[-0.06em] text-white"
								style={headlineStyle}
							>
								Cult Creative Is Now On Your Phone
							</p>
							<img
								src={QR_SRC}
								alt="QR code to download the Cult Creative app"
								className="mt-5 h-[122px] w-[122px] rounded-lg bg-white p-0.5"
							/>
						</motion.div>

						<motion.div
							className="absolute right-0 top-0 flex h-full w-[739px] items-center gap-8 pl-11 pr-11"
							initial={false}
							animate={{ opacity: isExpanded ? 1 : 0 }}
							transition={{ duration: 0.2, delay: isExpanded ? 0.1 : 0 }}
							aria-hidden={!isExpanded}
						>
							<div className="min-w-0 flex-1">
								<p
									className="text-[32px] leading-[36px] text-white"
									style={headlineStyle}
								>
									Cult Creative Is Now On Your Phone
								</p>
								<p
									className="mt-2 font-baskerville-thin text-[28px] leading-[31px] italic text-white tracking-[-0.04em]"
									style={{ letterSpacing: "-0.04em" }}
								>
									Pitch, sign, and upload - all on the
									<br /> Cult Creative app!
								</p>
								<div className="mt-5">
									<StoreBadges />
								</div>
							</div>
							<img
								src={QR_SRC}
								alt="QR code to download the Cult Creative app"
								className="h-[191px] w-[191px] shrink-0 rounded-xl bg-white p-0.5"
							/>
						</motion.div>

						<button
							onClick={dismiss}
							aria-label="Dismiss app download banner"
							className="absolute bottom-2 right-2 cursor-pointer p-1 text-white/70 transition-colors duration-200 hover:text-white"
						>
							<CloseIcon className="h-4 w-4" />
						</button>
					</motion.div>
				</motion.aside>
			)}
		</AnimatePresence>
	);
};

const MobileBanner = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isDismissed, setIsDismissed] = useState(false);
	const [isGone, setIsGone] = useState(false);

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>;
		const open = () => {
			timer = setTimeout(() => setIsExpanded(true), 400);
		};

		if (document.readyState === "complete") open();
		else window.addEventListener("load", open, { once: true });

		return () => {
			clearTimeout(timer);
			window.removeEventListener("load", open);
		};
	}, []);

	const dismiss = () => {
		setIsExpanded(false);
		setIsDismissed(true);
	};

	if (isGone) return null;

	return (
		<motion.div
			className="pointer-events-none fixed left-0 right-0 bottom-0 z-40 flex justify-end px-3 md:hidden"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1}}
			transition={{ duration: 0.3, ease: "easeInOut" }}
		>
			<motion.div
				className="pointer-events-auto min-w-0 max-w-[calc(100vw-80px)] overflow-hidden"
				style={{ transformOrigin: "right center" }}
				initial={false}
				animate={{
					width: isExpanded ? "auto" : 0,
					opacity: isExpanded ? 1 : 0,
					marginRight: isExpanded ? 8 : 0,
					scale: isExpanded ? 1 : 0.6,
				}}
				transition={{ width: spring, marginRight: spring, scale: spring }}
				aria-hidden={!isExpanded}
			>
				<div className="flex items-center gap-1.5 rounded-l-[20px] rounded-r-[12px] bg-gradient-to-r from-[#8a5afe] to-[#231F20] py-2 pl-3 pr-2.5">
					<button
						onClick={dismiss}
						aria-label="Dismiss app download banner"
						className="shrink-0 cursor-pointer p-0.5 text-white/80 transition-colors duration-200 hover:text-white"
						tabIndex={isExpanded ? 0 : -1}
					>
						<CloseIcon className="h-3.5 w-3.5" />
					</button>
					{/* Row 1: copy — Row 2: store badges */}
					<div className="flex min-w-0 flex-1 flex-col gap-1.5">
						<div className="flex min-w-0 flex-row items-baseline gap-1">
							<p
								className="truncate text-[17px] leading-[20px] text-white"
								style={headlineStyle}
							>
								You Made It This Far,
							</p>
							<p
								className="truncate font-baskerville-thin text-[16px] italic leading-[100%] text-white/90"
								style={{ letterSpacing: "-0.04em" }}
							>
								Get our app now!
							</p>
						</div>
						<StoreBadges />
					</div>
				</div>
			</motion.div>

			<motion.div
				aria-hidden
				className="shrink-0 rounded-[14px]"
				animate={{
					opacity: isDismissed ? 0 : 1,
					scale: isDismissed ? 0.8 : 1,
				}}
				transition={{
					delay: isDismissed ? 0.45 : 0,
					duration: 0.25,
					ease: "easeOut",
				}}
				onAnimationComplete={() => {
					if (isDismissed) setIsGone(true);
				}}
			>
				<img
					src="/favicon-192x192.png"
					alt=""
					className="h-12 w-12 rounded-[14px]"
				/>
			</motion.div>
		</motion.div>
	);
};

const AppDownloadBanner = ({ showMobile }: { showMobile: boolean }) => (
	<>
		<DesktopBanner />
		{showMobile && <MobileBanner />}
	</>
);

export default AppDownloadBanner;
