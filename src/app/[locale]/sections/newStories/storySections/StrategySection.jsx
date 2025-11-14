"use client";
import Image from "next/image";

const StrategySection = ({ strategyTitle, strategyContent }) => {
  return (
    <section className="lg:py-20 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Title with Icon */}
        <div className="mb-5 flex items-center gap-4">
          <h2 className="text-3xl font-aileron tracking-tighter font-bold text-black">{strategyTitle}</h2>
          <Image 
            src="/images/newStories/deco.png" 
            alt="Decoration"
            width={50}
            height={50}
            className="relative -left-4 bottom-5"
          />
        </div>

        {/* Content */}
        <div className="text-lg text-gray-700 leading-6 font-aileron">
          {Array.isArray(strategyContent) ? (
            strategyContent.map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 last:mb-0"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))
          ) : (
            <p dangerouslySetInnerHTML={{ __html: strategyContent }} />
          )}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;