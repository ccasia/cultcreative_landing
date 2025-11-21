"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const VideoCard = ({ video, index }) => {
  const [isVisible, setIsVisible] = useState(index === 0); // First video loads immediately
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`shrink-0 relative -top-20 ${
        index === 0 ? "" : index === 1 ? "hidden md:block " : "hidden lg:block"
      }`}
    >
      <div className="scale-[0.52] origin-center">
        <DeviceFrameset device="iPhone X" color="black">
          <div className="h-full w-full bg-white relative">
            {!isLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}
            {isVisible && (
              <video
                ref={videoRef}
                src={video.thumbnail}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedData={() => setIsLoaded(true)}
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </DeviceFrameset>
      </div>
    </div>
  );
};

const VideosSection = ({ videos }) => {
  // Mock video data for now - placeholder iPhones
  const mockVideos = videos || [
    { id: 1, thumbnail: "https://storage.googleapis.com/landing-cultcreative/successStories/KAX%20-%20Isabelle%20Nature%20Valley%20Bar.mp4" },
    { id: 2, thumbnail: "https://storage.googleapis.com/landing-cultcreative/successStories/KAX%20-%20Isabelle%20Nature%20Valley%20Bar.mp4" },
    { id: 3, thumbnail: "https://storage.googleapis.com/landing-cultcreative/successStories/KAX%20-%20Isabelle%20Nature%20Valley%20Bar.mp4" },
    { id: 4, thumbnail: "https://storage.googleapis.com/landing-cultcreative/successStories/KAX%20-%20Isabelle%20Nature%20Valley%20Bar.mp4" },
  ];

  return (
    <section className="relative bg-white h-[475px] flex justify-center items-center">
      {/* Thumb icon - hidden on mobile, shown on desktop */}
      <div className="md:flex absolute left-16 top-[90%] -translate-y-44 flex-col gap-4">
        <Image
          src="/images/newStories/thumb.png"
          alt="Instagram"
          width={90}
          height={90}
          className="relative w-18 md:w-[90px] h-18 md:h-[90px] right-14 md:right-0 -top-10 md:top-0 z-100"
        />
      </div>

      {/* iPhone Frames Grid - 1 on mobile, 2 on tablet, 4 on desktop */}
      <div className="flex justify-center lg:-space-x-40 flex-wrap">
        {mockVideos.map((video, index) => (
          <VideoCard key={video.id} video={video} index={index} />
        ))}
      </div>

      {/* Social Icons - hidden on mobile, shown on desktop */}
      <div className="flex absolute right-20 top-32 -translate-y-44 flex-col gap-4">
        <Image
          src="/images/newStories/ig.png"
          alt="Instagram"
          width={100}
          height={100}
          className="relative left-24 md:left-0 top-14 md:top-0 w-20 md:w-[100px] h-20 md:h-[100px]"
        />
        <Image
          src="/images/newStories/tiktok.png"
          alt="TikTok"
          width={100}
          height={100}
          className="relative left-14 md:left-16 top-62 md:-top-8"
        />
      </div>
    </section>
  );
};

export default VideosSection;