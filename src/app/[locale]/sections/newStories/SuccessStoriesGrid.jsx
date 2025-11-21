"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const SuccessStoriesGrid = () => {

  // Mock data - replace with real data from API later
  const [stories] = useState([
    {
      id: 1,
      title: "Longchamp",
      image:
        "/images/newStories/grid-images/longchamp.jpg",
    },
    {
      id: 2,
      title: "Marriott Group",
      image:
        "/images/newStories/grid-images/marriott.jpg",
    },
    {
      id: 3,
      title: "Rexperience",
      image:
        "/images/newStories/grid-images/rexperience.jpg",
    },
    {
      id: 4,
      title: "Bata",
      image:
        "/images/newStories/grid-images/bata.jpg",
    },
    {
      id: 5,
      title: "Samsung",
      image:
        "/images/newStories/grid-images/samsung.jpg",
    },
    {
      id: 6,
      title: "Dressing Paula",
      image:
        "/images/newStories/grid-images/dressing_paula.png",
    },
    {
      id: 7,
      title: "Malaysian Pavilion World Expo",
      image:
        "/images/newStories/grid-images/expo.jpg",
    },
    {
      id: 8,
      title: "Noir",
      image:
        "/images/newStories/grid-images/noir.png",
    },
    {
      id: 9,
      title: "The Body Shop",
      image:
        "/images/newStories/grid-images/body_shop.png",
    },
  ]);

    return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 auto-rows-max">
      {stories.map((story) => (
        <motion.div
          key={story.id}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="origin-center"
        >
          <Link
            href={`/new-stories/${story.id}`}
            className="group relative overflow-hidden rounded-2xl aspect-square block"
          >
            {/* Story Card */}
            <Image
              src={story.image}
              alt={story.title}
              width={280}
              height={280}
              className="w-[280px] md:w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/50 transition-colors duration-300"></div>

            {/* Title */}
            <div className="absolute inset-0 flex text-center tracking-tight items-center">
              <p className="text-white text-4xl font-aileron p-0 w-full">
                {story.title}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default SuccessStoriesGrid;