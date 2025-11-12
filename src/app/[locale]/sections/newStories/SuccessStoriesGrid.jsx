"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

const SuccessStoriesGrid = () => {

  // Mock data - replace with real data from API later
  const [stories] = useState([
    {
      id: 1,
      title: "Dressing Paula",
      image:
        "/images/newStories/grid-images/dressing-paula.png",
    },
    {
      id: 2,
      title: "The Body Shop",
      image:
        "/images/newStories/grid-images/body-shop.png",
    },
    {
      id: 3,
      title: "Rexperience",
      image:
        "/images/newStories/grid-images/rexperience.png",
    },
    {
      id: 4,
      title: "Suisen",
      image:
        "/images/newStories/grid-images/suisen.png",
    },
    {
      id: 5,
      title: "Nature Valley",
      image:
        "/images/newStories/grid-images/nature-valley.png",
    },
    {
      id: 6,
      title: "Lenskart",
      image:
        "/images/newStories/grid-images/lenskart.png",
    },
    {
      id: 7,
      title: "Flint",
      image:
        "/images/newStories/grid-images/flint.png",
    },
    {
      id: 8,
      title: "Pejoy",
      image:
        "/images/newStories/grid-images/pejoy.png",
    },
    {
      id: 9,
      title: "Noir",
      image:
        "/images/newStories/grid-images/noir.png",
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
            <img
              src={story.image}
              alt={story.title}
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