import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { setRequestLocale } from "next-intl/server";

// Dynamic import for floating navbar
const FloatingNavbar = dynamic(() =>
  import("@/app/[locale]/components/FloatingNavbar")
);

// Dynamic import for For Brands Hero
const ForBrandsHero = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/ForBrandsHero")
);

// Dynamic import for For Brands Stats
const ForBrandsStats = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/ForBrandsStats")
);
const ForBrandsProcess = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/ForBrandsProcess")
);
const ForBrandsFeatures = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/ForBrandsFeatures")
);
const PricingSection = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/PricingSection")
);
const ContactFormSection2 = dynamic(() =>
  import("@/app/[locale]/sections/forBrands/ContactFormSection2")
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
                 <ForBrandsHero />
                 <ForBrandsStats />
                 <ForBrandsProcess />
                 <ForBrandsFeatures />
                 <PricingSection />
                 <ContactFormSection2 />
                 <NewFooter />
                 <Toaster position="top-center" />
               </Suspense>
      </main>
    </>
  );
};

export default ForBrandsPage;
