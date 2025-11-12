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
      <div className="absolute left-16 top-[90%] -translate-y-44 flex flex-col gap-4">
        <Image
          src="/images/newStories/thumb.png"
          alt="Instagram"
          width={90}
          height={90}
        />
      </div>
      {/* iPhone Frames Grid - Centered */}
      <div className="flex justify-center -space-x-40 flex-wrap">
        {mockVideos.map((video) => (
          <div key={video.id} className="shrink-0 relative -top-24" >
            {/* iPhone Frame */}
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

      {/* Social Icons - Absolutely positioned on the right */}
      <div className="absolute right-20 top-32 -translate-y-44 flex flex-col gap-4">
        <Image
          src="/images/newStories/ig.png"
          alt="Instagram"
          width={100}
          height={100}
        />
        <Image
          src="/images/newStories/tiktok.png"
          alt="TikTok"
          width={100}
          height={100}
          className="absolute left-16 top-20"
        />
      </div>
    </section>
  );
};

export default VideosSection;