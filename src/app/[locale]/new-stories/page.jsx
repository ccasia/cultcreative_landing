import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { setRequestLocale } from "next-intl/server";

// Dynamic import for floating navbar
const FloatingNavbar = dynamic(() =>
  import("@/app/[locale]/components/FloatingNavbar")
);

// Dynamic imports for better performance
const SuccessStoriesContent = dynamic(() =>
  import("@/app/[locale]/sections/newStories/SuccessStoriesContent")
);

const SuccessStoriesGrid = dynamic(() =>
  import("@/app/[locale]/sections/newStories/SuccessStoriesGrid")
);

const NewFooter = dynamic(() =>
  import("@/app/[locale]/components/NewFooter")
);

export const metadata = {
  title: {
    absolute: "Success Stories - Cult Creative",
  },
  description:
    "Discover inspiring success stories from our community of creators and brands.",
  openGraph: {
    title: "Success Stories - Cult Creative",
  },
  alternates: {
    canonical: "/new-stories",
  },
};

const NewStories = async ({ params }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <FloatingNavbar />
      <main className="flex flex-col">
        <section className="flex items-center justify-center bg-[#231F20] md:pt-32 md:pb-32">
          <div className="max-w-7xl mx-auto md:px-4 px-6 pt-28 pb-20 w-full">
            <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-8">
              {/* Left Side - Content */}
              <div className="flex items-center justify-center w-full md:w-auto">
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center">
                      <div className="animate-pulse">Loading...</div>
                    </div>
                  }
                >
                  <SuccessStoriesContent />
                </Suspense>
              </div>

              {/* Right Side - Grid */}
              <div className="w-full md:w-11/12 flex items-center justify-center">
                <Suspense
                  fallback={
                    <div className="flex items-center justify-center">
                      <div className="animate-pulse">Loading stories...</div>
                    </div>
                  }
                >
                  <SuccessStoriesGrid />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
        <NewFooter />
        <Toaster position="top-center" />
      </main>
    </>
  );
};

export default NewStories;
