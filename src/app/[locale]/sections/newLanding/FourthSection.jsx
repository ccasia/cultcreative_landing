"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const FourthSection = () => {
  const [videoOrder, setVideoOrder] = useState([0, 1, 2, 3, 4]);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Video data - Cult Creative brand videos
  const videos = [
    {
      id: 1,
      title: "Brand Video 1",
      creator: "Cult Creative",
      name: "Creator",
      brand: "Nespresso",
      quote: "Lazy people don't",
      videoUrl: "https://storage.googleapis.com/landing-cultcreative/brands/cm83xazp602aomr019lvkg249_draft%20(1).mp4",
      description: "Cult Creative brand video"
    },
    {
      id: 2,
      title: "Brand Video 2",
      creator: "Cult Creative",
      name: "Manveer Singh", 
      brand: "Spritzer",
      quote: "Lazy people don't",
      videoUrl: "https://storage.googleapis.com/landing-cultcreative/brands/598ac8604e064853a1bc16de81ad17ed.MOV",
      description: "Cult Creative brand video"
    },
    {
      id: 3,
      title: "Brand Video 3",
      creator: "Cult Creative",
      name: "Creator",
      brand: "Samsung",
      quote: "Lazy people don't",
      videoUrl: "https://storage.googleapis.com/landing-cultcreative/brands/cm7vxwa0j014tnu01f6ybqqan_draft%20(1).mp4",
      description: "Cult Creative brand video"
    },
    {
      id: 4,
      title: "Brand Video 4",
      creator: "Cult Creative",
      name: "Creator",
      brand: "Uniqlo",
      quote: "Lazy people don't",
      videoUrl: "https://storage.googleapis.com/cult_production/FIRST_DRAFT/cmc1htz3h07c9lg015y08xujw_IBC%20le%20meridian.MOV?v=2025-08-04T10:08:02+00:00",
      description: "Cult Creative brand video"
    },
    {
      id: 5,
      title: "Brand Video 5",
      creator: "Cult Creative", 
      name: "Creator",
      brand: "Grab",
      quote: "Lazy people don't",
      videoUrl: "https://storage.googleapis.com/landing-cultcreative/brands/cm96oy47r02hcqe01mfl7ehsp_copy_3235B186-45B2-4061-B1F5-9D0E2AB93812%20(1).mp4",
      description: "Cult Creative brand video"
    }
  ];

  // Trusted brands data
  const trustedBrands = [
    { name: "Nespresso", logo: "/images/NewMain/TrustedBrands/nespresso.svg" },
    { name: "Andsons", logo: "/images/NewMain/TrustedBrands/andsons.svg" },
    { name: "Spritzer", logo: "/images/NewMain/TrustedBrands/Spritzer.svg" },
    { name: "Samsung", logo: "/images/NewMain/TrustedBrands/Samsung.svg" },
    { name: "Uniqlo", logo: "/images/NewMain/TrustedBrands/Uniqlo.svg" },
    { name: "Grab", logo: "/images/NewMain/TrustedBrands/Grab.svg" }
  ];

  const reorderMap = {
    1: [2, 3, 1, 4, 5], 
    2: [3, 5, 2, 1, 4], 
    3: [4, 1, 3, 5, 2], 
    4: [5, 1, 4, 2, 3], 
    5: [3, 2, 5, 1, 4], 
  };

  const convertTo0Based = (oneBasedArray) => {
    return oneBasedArray.map(num => num - 1);
  };

  const handleVideoClick = (clickedVideoId) => {
    const clickedIndex = clickedVideoId - 1;
    const currentCenterIndex = videoOrder[2];
    if (clickedIndex === currentCenterIndex) return; 
    
    let newOrder;
    
    if (reorderMap[clickedVideoId]) {
      const mappedOrder = reorderMap[clickedVideoId];
      newOrder = convertTo0Based(mappedOrder);
    } else {
      const clickedCurrentPosition = videoOrder.indexOf(clickedIndex);
      const stepsToCenter = clickedCurrentPosition - 2;
      
      newOrder = [...videoOrder];
      if (stepsToCenter !== 0) {
        const rotations = stepsToCenter > 0 
          ? Array(Math.abs(stepsToCenter)).fill(0).map(() => (prevIdx) => (prevIdx + 1) % 5)
          : Array(Math.abs(stepsToCenter)).fill(0).map(() => (prevIdx) => (prevIdx + 4) % 5);
        
        rotations.forEach((fn) => {
          newOrder = newOrder.map(fn);
        });
      }
    }
    
    setVideoOrder(newOrder);
  };

  const getVideoPosition = (videoIndex) => {
    const positionInOrder = videoOrder.indexOf(videoIndex);
    const positions = ["left", "left1", "center", "right1", "right"];
    return positions[positionInOrder];
  };

  const isCenterVideo = (videoIndex) => {
    return videoOrder[2] === videoIndex;
  };

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      setCurrentMobileIndex((prev) => (prev + 1) % videos.length);
    } else if (distance < -minSwipeDistance) {
      setCurrentMobileIndex((prev) => (prev - 1 + videos.length) % videos.length);
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const goToSlide = (index) => {
    setCurrentMobileIndex(index);
  };

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Trusted By Section */}
      <div className="container mx-auto px-6 mb-36">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-aileron relative z-10" style={{ color: '#231F20', letterSpacing: '-0.06em' }}>
            Trusted By
            <img
              src="/images/NewMain/trustedunderlined.svg"
              alt="Trusted By underline"
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-80 z-0"
            />
          </h2>
        </motion.div>

        {/* Moving Brands */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: [0, -1200] 
            }}
            transition={{
              duration: 25, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Duplicate brands for seamless loop */}
            {[...trustedBrands, ...trustedBrands, ...trustedBrands, ...trustedBrands].map((brand, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto md:px-6">
        <div className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-6xl text-black mb-8 relative leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-serif italic" style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '-0.04em' }}>
              Where creators win,
            </span>
            <br />
            <span className="relative font-aileron font-bold" style={{ letterSpacing: '-0.06em' }}>
              And Brands
              <span className="relative inline-block">
                <img
                  src="/images/NewMain/bluerectangle.svg"
                  alt="Blue rectangle background"
                  className="absolute inset-0 w-53 h-16 object-cover left-1"
                />
                <img
                  src="/images/NewMain/blueflowers.svg"
                  alt="Blue flowers decoration"
                  className="absolute -top-20 left-40 w-20 h-12 z-10"
                />
                <span className="relative text-white px-4 py-2 font-bold -ml-2">Want In.</span>
              </span>
            </span>
          </motion.h1>
        </div>

        {/* Video Carousel with Smooth Reordering */}
        <div className="py-20">
          <div className="w-full">
            {/* Desktop Layout */}
            <div className="hidden md:flex justify-center items-center relative h-[500px] max-w-7xl mx-auto">
              {videos.map((video, index) => {
                const videoId = index + 1; // 1-based ID
                const currentPosition = getVideoPosition(index);
                const isCenter = isCenterVideo(index);
                
                const positionVariants = {
                  center: { x: 0, scale: 1.1, zIndex: 5, y: -35 },
                  left1: { x: -380, scale: 0.9, zIndex: 3, y: -15 },
                  left: { x: -700, scale: 0.8, zIndex: 2, y: -10 },
                  right1: { x: 380, scale: 0.9, zIndex: 3, y: -15 },
                  right: { x: 700, scale: 0.8, zIndex: 2, y: -10 },
                };
                
                return (
                  <motion.div
                    key={video.id}
                    className="relative cursor-pointer"
                    layout
                    initial="center"
                    animate={currentPosition}
                    variants={positionVariants}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeInOut",
                      layout: { duration: 0.6 }
                    }}
                    onClick={() => handleVideoClick(videoId)}
                    style={{ 
                      width: "300px", 
                      height: "400px",
                      position: "absolute"
                    }}
                  >
                    <div className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                      isCenter ? 'shadow-2xl' : ''
                    }`}>
                      {/* Video Element */}
                      <div className="aspect-9/16 bg-gray-200 flex items-center justify-center">
                        <video
                          className="w-full h-full object-cover"
                          autoPlay={isCenter}
                          muted
                          loop={isCenter}
                          playsInline
                          controls={false}
                          ref={(el) => {
                            if (el) {
                              if (isCenter) {
                                el.currentTime = 0; // Reset to beginning
                                el.play().catch(console.log);
                              } else {
                                el.pause();
                              }
                            }
                          }}
                        >
                          <source src={video.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Layout - Swipeable Carousel with Side Peek */}
            <div 
              className="md:hidden relative w-full"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative h-[600px] w-full overflow-x-clip">
                <motion.div
                  className="flex h-full items-center"
                  style={{
                    paddingLeft: 'calc(50vw - 170px)', // Balance left side visibility
                    paddingRight: 'calc(50vw - 170px)', // Balance right side visibility
                  }}
                  animate={{
                    x: `-${currentMobileIndex * 340}px`, // Card width (320px) + gap (20px)
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className="shrink-0 px-2.5"
                      style={{ width: "340px" }}
                    >
                      <div 
                        className={`relative rounded-[32px] overflow-hidden transition-all duration-300 ${
                          index === currentMobileIndex ? 'shadow-2xl scale-100' : 'shadow-lg scale-90 opacity-60'
                        }`}
                        style={{ width: "320px", height: "550px" }}
                        onClick={() => setCurrentMobileIndex(index)}
                      >
                        <div className="relative bg-gray-200 w-full h-full">
                          <video
                            className="w-full h-full object-cover"
                            autoPlay={index === currentMobileIndex}
                            muted
                            loop={index === currentMobileIndex}
                            playsInline
                            controls={false}
                            ref={(el) => {
                              if (el) {
                                if (index === currentMobileIndex) {
                                  el.currentTime = 0;
                                  el.play().catch(console.log);
                                } else {
                                  el.pause();
                                }
                              }
                            }}
                          >
                            <source src={video.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          
                          {/* Bottom Overlay with Brand and Creator */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 via-black/50 to-transparent">
                            <h3 className="text-white text-3xl font-bold mb-2">
                              {video.brand}
                            </h3>
                            <p className="text-white/90 text-lg italic font-serif">
                              {video.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentMobileIndex
                        ? "bg-black w-8"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FourthSection;
