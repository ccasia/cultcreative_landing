"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SuccessStoriesContent = () => {
  const handleServicesClick = () => {
    // Navigate to services page - update this route as needed
    window.location.href = "/services";
  };

  return (
    <div className="flex flex-col w-full md:max-w-lg">
      {/* Title with gradient text */}
      <p style={{ lineHeight: 0.95 }} className="md:tracking-[-0.2rem] tracking-[-0.15rem] relative text-5xl md:text-6xl font-semibold mb-2">
        <span className="text-[#FF9FBD]">Our</span>
        <br/>
        <span className="text-[#CFB5F6]">Success</span>
        <br/>
        <span className="text-[#8A5AFE]">Stories.</span>
        <Image 
          src="/images/newStories/asterisk-yellow.png"
          alt="TikTok"
          width={65}
          height={65}
          className="absolute bottom-1 z-10 left-44 md:left-52 w-16 h-16"
        />
      </p>
      {/* Subtitle */}
      <p className="text-3xl md:text-5xl italic font-baskerville tracking-tighter md:tracking-5 text-white mb-6 md:mb-8">Proof in the numbers</p>

      {/* Description */}
      <div className="flex-col md:pr-16">
        <p className="text-white leading-tight font-aileron text-base md:text-xl mb-12 md:mb-24">
          See how leading brands transformed their vision into successful
          campaigns. Our platform connects them with the right creators to drive
          awareness, engagement, and long-term growth.
        </p>

        {/* Button */}
        <button
          onClick={handleServicesClick}
          className="md:w-full mx-auto md:mx-0 px-14 md:px-8 py-3 md:py-4 bg-[#1340FF] text-base md:text-lg text-white font-aileron font-semibold rounded-full flex justify-center items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.8)] hover:shadow-[0_0_40px_rgba(255,255,255,1),0_0_40px_rgba(255,255,255,0.6)]"
        >
          OUR SERVICES
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default SuccessStoriesContent;
