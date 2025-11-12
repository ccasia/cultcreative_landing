import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { setRequestLocale } from "next-intl/server";

const FloatingNavbar = dynamic(() =>
  import("@/app/[locale]/components/FloatingNavbar")
);

const HeroSection = dynamic(() =>
  import("@/app/[locale]/sections/newLanding/HeroSection")
);
const CTASection = dynamic(() =>
  import("@/app/[locale]/sections/newLanding/CTASection")
);
const HowWeDoItSection = dynamic(() =>
  import("@/app/[locale]/sections/newLanding/HowWeDoItSection")
);
const NewHeroSection = dynamic(() =>
  import("@/app/[locale]/sections/newLanding/NewHeroSection")
);
const TestimonialsSection = dynamic(() =>
  import("@/app/[locale]/sections/newLanding/TestimonialsSection")
);
const ContactFormSection = dynamic(() =>
  import("@/app/[locale]/sections/newLanding/ContactFormSection")
);
const NewFooter = dynamic(() =>
  import("@/app/[locale]/components/NewFooter")
);

export const metadata = {
  title: {
    absolute: "New Landing Page - Cult Creative",
  },
  description:
    "Experience our brand new landing page with modern design and enhanced features.",
  openGraph: {
    title: "New Landing Page - Revolutionary Experience",
  },
  alternates: {
    canonical: "/new-landing",
  },
};

const NewLanding = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <FloatingNavbar />
      <main className="flex flex-col min-h-screen w-full overflow-x-clip">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
          </div>
        }>
          <HeroSection />
          <CTASection />
          <HowWeDoItSection />
          <NewHeroSection />
          <TestimonialsSection />
          <ContactFormSection />
          <NewFooter />
          <Toaster position="top-center" />
        </Suspense>
      </main>
    </>
  );
};

export default NewLanding;
