import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { setRequestLocale } from "next-intl/server";

// Dynamic import for floating navbar
const FloatingNavbar = dynamic(() =>
  import("@/app/[locale]/components/FloatingNavbar")
);

// Dynamic import for For Brands sections
const FirstSection = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/FirstSection")
);

const SecondSection = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/SecondSection")
);
const ThirdSection = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/ThirdSection")
);
const FourthSection = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/FourthSection")
);
const FifthSection = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/FifthSection")
);
const SixthSection = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/SixthSection")
);
const NewFooter = dynamic(() =>
  import("@/app/[locale]/components/NewFooter")
);

export const metadata = {
  title: {
    absolute: "For Brands - Cult Creative",
  },
  description:
    "Influencer Marketing, Simplified. Stop building manual reports and managing endless spreadsheets.",
  openGraph: {
    title: "For Brands - Influencer Marketing Simplified",
  },
  alternates: {
    canonical: "/for-brands",
  },
};

const ForBrandsPage = async ({ params }) => {
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
                 <FirstSection />
                 <SecondSection />
                 <ThirdSection />
                 <FourthSection />
                 <FifthSection />
                 <SixthSection />
                 <NewFooter />
                 <Toaster position="top-center" />
               </Suspense>
      </main>
    </>
  );
};

export default ForBrandsPage;
