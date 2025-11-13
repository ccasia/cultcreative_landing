import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { setRequestLocale } from "next-intl/server";

// Dynamic import for floating navbar
const FloatingNavbar = dynamic(() =>
    import("@/app/[locale]/components/FloatingNavbar")
);

// Dynamic imports for better performance
const ContactSection = dynamic(() => import("@/app/[locale]/sections/newContact/ContactSection"))

const NewFooter = dynamic(() => import("@/app/[locale]/components/NewFooter"));

export const metadata = {
    title: {
        absolute: "New Contact Us Page - Cult Creative",
    },
    description:
        "Experience our brand new landing page with modern design and enhanced features.",
    openGraph: {
        title: "New Contact Us Page",
    },
    alternates: {
        canonical: "/new-contact-us",
    },
};

const NewContactUs = ({ params: { locale } }) => {
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
                    <ContactSection />
                    <NewFooter />
                    <Toaster position="top-center" />
                </Suspense>
            </main>
        </>
    );
};

export default NewContactUs;
