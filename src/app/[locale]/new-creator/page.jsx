import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { setRequestLocale } from "next-intl/server";

// Dynamic import for floating navbar
const FloatingNavbar = dynamic(() =>
	import("@/app/[locale]/components/FloatingNavbar")
);

// Dynamic imports for better performance
const CreatorTestimonialsSection = dynamic(() =>
	import("@/app/[locale]/sections/newCreator/CreatorTestimonialsSection")
);
const CreatorAcademySection = dynamic(() =>
	import("@/app/[locale]/sections/newCreator/CreatorAcademySection")
);
const CreatorHeroSection = dynamic(() =>
	import("@/app/[locale]/sections/newCreator/CreatorHeroSection")
);
const MonetizeYourContentSection = dynamic(() =>
	import("@/app/[locale]/sections/newCreator/MonetizeYourContentSection")
);
const OurStarCreatorsSection = dynamic(() =>
	import("@/app/[locale]/sections/newCreator/OurStarCreatorsSection")
);
const OurKeyFeaturesSection = dynamic(() =>
	import("@/app/[locale]/sections/newCreator/OurKeyFeaturesSection")
);
const YourCreativeSpaceSection = dynamic(() =>
	import("@/app/[locale]/sections/newCreator/YourCreativeSpaceSection")
);

const NewFooter = dynamic(() => import("@/app/[locale]/components/NewFooter"));

export const metadata = {
	title: {
		absolute: "New Creator Page - Cult Creative",
	},
	description:
		"Experience our brand new landing page with modern design and enhanced features.",
	openGraph: {
		title: "New Creator Page",
	},
	alternates: {
		canonical: "/new-creator",
	},
};

const NewCreator = ({ params: { locale } }) => {
	setRequestLocale(locale);

	return (
		<>
			<FloatingNavbar />
			<main className="flex flex-col min-h-screen w-full overflow-x-clip bg-white">
				<Suspense
					fallback={
						<div className="min-h-screen flex items-center justify-center bg-black">
							<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
						</div>
					}
				>
					<CreatorHeroSection />
					<OurStarCreatorsSection />
					<OurKeyFeaturesSection />
					<YourCreativeSpaceSection />
					<MonetizeYourContentSection />
					<CreatorAcademySection />
					<CreatorTestimonialsSection />
					<NewFooter />
					<Toaster position="top-center" />
				</Suspense>
			</main>
		</>
	);
};

export default NewCreator;
