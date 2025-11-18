"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

import { Link } from "@/i18n/routing";

const FloatingNavbar = dynamic(() => import("@/app/[locale]/components/FloatingNavbar"));

export const Page = ({
  children,
  title,
  date,
  readTime,
  keywords = [],
  relatedResources = [],
  image,
}) => {

	return (
    <>
  		<FloatingNavbar />
        <main
          className="flex min-h-screen flex-col relative"
          style={{
            background: "linear-gradient(180deg, #7C4DFF 0%, #25123A 55%, #050109 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.08) 2px, transparent 2px)",
              backgroundSize: "22px 22px",
              backgroundPosition: "0 0",
              backgroundAttachment: "fixed",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.7))",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.7))",
            }}
          />
        {/* Article Content */}
          <div className="w-[calc(100%-40px)] mx-auto px-6 md:px-62 py-32 bg-white text-gray-800 mt-32 mb-10 rounded-3xl relative z-10">
          {/* Date and Read Time */}
          <div className="text-center mb-6">
            <p className="text-sm md:text-base text-gray-600">
              {date} | {readTime}
            </p>
          </div>

          {/* Title */}
          <h1 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-black tracking-tighter">
            {title}
          </h1>

          {/* Keywords Chips */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {keywords.map((keyword, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-white border border-[#231F20] rounded-full text-xs md:text-sm font-medium uppercase"
              >
                {keyword}
              </div>
            ))}
          </div>

          {/* Resource Image */}
          {image && (
            <div className="mb-24 rounded-2xl overflow-hidden h-[500px]">
              <Image
                src={image}
                alt={title}
                width={1200}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="text-pretty text-base md:text-lg leading-relaxed">
            {children}
          </div>
        </div>

        {/* Read Our Next Article Section */}
        <div className="bg-[#1A1A1A] py-16 px-6 md:px-10 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
              Read Our Next Article:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedResources.length > 0 ? (
                relatedResources.map((resource) => (
                  <Link key={resource.path} href={resource.path}>
                    <div className="bg-white rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 h-[300px] flex flex-col">
                      <div className="p-3">
                        <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                          <Image
                            src={resource.image}
                            alt={resource.title}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <div className="px-6 pb-6 flex-1 overflow-hidden">
                        <h3 className="text-lg md:text-3xl font-aileron tracking-tighter font-bold text-black w-full overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                          {resource.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-white">No related resources available.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

// Utility function to convert text to title case
const toTitleCase = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
};

export const h2 = ({ children }) => {
  const titleCaseChildren = typeof children === 'string' ? toTitleCase(children) : children;
  return (
    <h2 className="text-start text-xl md:text-4xl tracking-tighter font-semibold text-pretty text-black my-6 md:mb-3 md:mt-14">
      {titleCaseChildren}
    </h2>
  );
};

export const h3 = ({ children }) => {
  const titleCaseChildren = typeof children === 'string' ? toTitleCase(children) : children;
  return (
    <h3 className="text-start text-lg md:text-xl font-semibold text-pretty text-black my-6 md:my-10">
      {titleCaseChildren}
    </h3>
  );
};

export const p = ({ children }) => (
  <p className="text-base md:text-lg">{children}</p>
);

export const ol = ({ children }) => (
  <ol className="list-decimal ml-8 md:ml-10 text-base md:text-lg">
    {children}
  </ol>
);

export const ul = ({ children }) => (
  <ul className="list-disc ml-8 md:ml-10 text-base md:text-lg">
    {children}
  </ul>
);

export const li = ({ children }) => (
  <li className="my-3 text-base md:text-lg">{children}</li>
);

export const a = ({ href, children }) => (
  <a
    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 text-base md:text-lg"
    href={href}
  >
    {children}
  </a>
);

// Instagram embed removed - can be added back later with react-social-media-embed
export const IgEmbed = ({ url }) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <p className="text-gray-600 italic">Instagram embed: {url}</p>
  </div>
);