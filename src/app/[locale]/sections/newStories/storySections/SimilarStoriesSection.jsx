"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import Image from "next/image";

const SimilarStoriesSection = ({ similarStories }) => {
  // Mock data for similar stories
  const mockStories = similarStories || [
    {
      id: 2,
      title: "The Body Shop",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    },
    {
      id: 3,
      title: "REXPERIENCE",
      image:
        "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Suisen",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
    },
    {
      id: 5,
      title: "Nature Valley",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-40 bg-white">
      <div className="mx-auto">
        {/* Title */}
        <div className="mb-16 flex items-center justify-center gap-4">
          <h2 className="text-6xl italic font-baskerville tracking-tight text-black">
            Similar Stories
          </h2>
          <Image 
            src="/images/newStories/asterisk-yellow.png" 
            alt="Asterisk"
            width={75}
            height={75}
            className="relative bottom-2"
          />
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-4 gap-12">
          {mockStories.map((story) => (
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
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Title */}
                <div className="absolute inset-0 flex text-center tracking-tight items-center">
                  <h3 className="text-white text-3xl font-aileron p-0 w-full">
                    {story.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarStoriesSection;