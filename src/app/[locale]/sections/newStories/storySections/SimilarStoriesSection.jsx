"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const SimilarStoriesSection = ({ similarStories }) => {
  const scrollContainerRef = useRef(null);

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

  // Scroll to center on mobile
  useEffect(() => {
    const scrollToCenter = () => {
      if (scrollContainerRef.current && window.innerWidth < 768) {
        const container = scrollContainerRef.current;
        const cardWidth = 280; // Width of each card on mobile
        const gap = 24; // gap-6 = 24px
        const centerIndex = Math.floor(mockStories.length / 2) - 1; // Start at index 1 for 4 items
        const scrollPosition = centerIndex * (cardWidth + gap);

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(scrollToCenter, 100);
  }, [mockStories.length]);

  return (
    <section className="py-12 md:py-20 px-6 md:px-40 bg-white">
      <div className="mx-auto">
        {/* Title */}
        <div className="flex text-center items-center justify-center gap-2 md:gap-4">
          <h2 className="text-3xl md:text-6xl italic font-baskerville tracking-tight text-black">
            Similar Stories
          </h2>
        </div>
        <Image
          src="/images/newStories/asterisk-yellow.png"
          alt="Asterisk"
          width={30}
          height={30}
          className="relative justify-self-center bottom-10 md:bottom-20 left-64 md:left-54 md:w-[75px] md:h-[75px]"
        />

        {/* Mobile: Horizontal Scroll | Desktop: 4 Column Grid */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto md:grid md:grid-cols-4 gap-6 md:gap-12 snap-x snap-mandatory md:snap-none scrollbar-hide md:p-5"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {mockStories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="origin-center shrink-0 w-[280px] md:w-auto snap-center"
            >
              <Link
                href={`/new-stories/${story.id}`}
                className="group relative overflow-hidden rounded-2xl aspect-square block"
              >
                {/* Story Card */}
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
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

      {/* Hide scrollbar with CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SimilarStoriesSection;