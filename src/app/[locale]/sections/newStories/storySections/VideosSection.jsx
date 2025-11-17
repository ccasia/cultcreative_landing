"use client";

import Image from "next/image";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

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
          <div
            key={video.id}
            className={`shrink-0 relative -top-20 ${
              index === 0 ? '' :
              index === 1 ? 'hidden md:block ' :
              'hidden lg:block'
            }`}
          >
            {/* iPhone Frame - smaller on mobile, original size on desktop */}
            <div className="scale-[0.52] origin-center">
              <DeviceFrameset device='iPhone X' color="black">
                <div className="h-full w-full bg-white">
                  <video
                    src={video.thumbnail}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </DeviceFrameset>
            </div>
          </div>
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