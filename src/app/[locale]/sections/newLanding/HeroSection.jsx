"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden pt-64" style={{ backgroundColor: '#231f20' }}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Moving Gradient Blobs - Bigger Size */}
        <motion.div
          className="absolute opacity-40"
          style={{
            width: '800px',
            height: '600px',
            background: `radial-gradient(ellipse 400px 300px at 60% 40%, #1340ff, #855afe, transparent)`,
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            filter: 'blur(80px)',
            left: '-10%',
            top: '10%',
          }}
          animate={{
            x: [0, 200, -150, 100, 0],
            y: [0, -100, 150, -80, 0],
            scale: [1, 1.4, 0.8, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Circle 1 - #1340ff (blue) - Top Left */}
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{
            background: '#1340ff',
            left: '10%',
            top: '10%',
          }}
          animate={{
            x: [0, 200, 0],
            y: [0, 150, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Circle 2 - #1340ff (blue) - Top Right */}
        <motion.div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-28"
          style={{
            background: '#1340ff',
            right: '15%',
            top: '15%',
          }}
          animate={{
            x: [0, -180, 0],
            y: [0, 120, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Circle 3 - #8a5afe (purple) - Bottom Left */}
        <motion.div
          className="absolute w-88 h-88 rounded-full blur-3xl opacity-32"
          style={{
            background: '#8a5afe',
            left: '20%',
            bottom: '20%',
          }}
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Circle 4 - #8a5afe (purple) - Bottom Right */}
        <motion.div
          className="absolute w-76 h-76 rounded-full blur-3xl opacity-29"
          style={{
            background: '#8a5afe',
            right: '25%',
            bottom: '15%',
          }}
          animate={{
            x: [0, -120, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Circle 5 - #a992df (light purple) - Center */}
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-35"
          style={{
            background: '#a992df',
            left: '45%',
            top: '40%',
          }}
          animate={{
            x: [0, -50, 50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Stars positioned above "Creators" - responsive */}
        <div
          className="absolute"
          style={{
            top: '-2%',
            right: '-5%',
          }}
        >
          <img 
            src="/images/NewMain/stars.svg" 
            alt="decorative stars" 
            className="w-[32rem] h-[32rem] opacity-100 hidden md:block"
          />
        </div>

        {/* Mobile stars positioned above "Creators" */}
        <div
          className="absolute md:hidden"
          style={{
            top: '17%',
            right: '10%',
          }}
        >
          <img 
            src="/images/NewMain/stars.svg" 
            alt="decorative stars" 
            className="w-24 h-24 opacity-100"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 flex-1 flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight text-white font-aileron"
            style={{ 
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.25)',
              letterSpacing: '-0.05em'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Connecting Brands With 
            <br />
            <span className="relative inline-block mb-8">Creators
              <img 
                src="/images/NewMain/curlyline.svg" 
                alt="decorative line" 
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-72"
                style={{ transform: 'translateX(-40%)' }}
              />
            </span> Who Move Culture
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-3xl lg:text-4xl mb-12 text-white leading-relaxed italic"
            style={{ 
              fontFamily: '"Times New Roman", Times, serif',
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.25)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            SEA's Leading AI Platform for Content Collaboration
          </motion.p>

          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button 
              className="px-16 py-3 text-white font-semibold rounded-full text-lg relative overflow-hidden"
              style={{
                backgroundColor: '#1340ff',
                background: '#1340ff',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 8px 20px rgba(0, 0, 0, 0.2)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
              }}
              whileHover={{
                scale: 1.05,
                background: '#1340ff',
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6), 0 12px 30px rgba(0, 0, 0, 0.4)',
                filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4))'
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="flex items-center gap-2">
                JOIN US NOW 
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="inline-block"
                >
                  <path 
                    d="M7 17L17 7M17 7H7M17 7V17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Interactive Phone Images Section */}
      <div className="container mx-auto px-6 relative z-10 pb-8">
        <div className="flex justify-center items-center">
          <motion.div
            ref={ref}
            className="relative cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Default state - show only ipmid.svg with skew effect */}
            <motion.div
              className="relative"
              animate={{
                scale: isInView ? 0.5 : 1,
                skewX: isInView ? 58 : 0,
                skewY: isInView ? -15 : 0,
                opacity: isInView ? 0 : 1,
                // skewZ: isInView ? 60 : 0,
              }}
              transition={{ 
                duration: 0.4, 
                ease: [0.4, 0.0, 0.2, 1],
                delay: isInView ? 0 : 0.15
              }}
            >
              <img 
                src="/images/NewMain/ipmid.svg" 
                alt="Platform overview" 
                className="w-auto h-auto max-w-full"
                style={{
                  maxHeight: '600px',
                  // width: '800px',
                  height: 'auto',
                  filter: isInView ? 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))' : 'none',
                }}
              />
            </motion.div>

            {/* Scroll-triggered state - show all three images exactly like ip3d.svg */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                opacity: isInView ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
              style={{ 
                perspective: '1200px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Back image (ipbottom) - bottom center stacking */}
              <motion.div
                className="absolute"
                animate={{
                  x: isInView ? 0 : 0,
                  y: isInView ? 80 : 0,
                  scale: isInView ? 2.0 : 1,
                  rotateX: isInView ? 15 : 0,
                  rotateY: isInView ? 0 : 0,
                  rotateZ: isInView ? 0 : 0,
                }}
                transition={{ 
                  duration: 0.35, 
                  delay: 0.08, 
                  ease: [0.4, 0.0, 0.2, 1]
                }}
                style={{ 
                  transformOrigin: 'center center',
                  transformStyle: 'preserve-3d',
                  zIndex: 1,
                }}
              >
                 <img 
                   src="/images/NewMain/ipbottom1.svg" 
                   alt="Bottom analytics" 
                   className="w-auto h-auto"
                   style={{
                     width: '800px',
                     height: 'auto',
                     filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4))',
                   }}
                 />
              </motion.div>

              {/* Middle image (ipmid) - center cascading */}
              <motion.div
                className="absolute"
                animate={{
                  x: isInView ? 0 : 0,
                  y: isInView ? 0 : 0,
                  scale: isInView ? 2.0 : 1,
                  rotateX: isInView ? 15 : 0,
                  rotateY: isInView ? 0 : 0,
                  rotateZ: isInView ? 0 : 0,
                }}
                transition={{ 
                  duration: 0.35, 
                  delay: 0.12, 
                  ease: [0.4, 0.0, 0.2, 1]
                }}
                style={{
                  transformOrigin: 'center center',
                  transformStyle: 'preserve-3d',
                  zIndex: 10,
                }}
              >
                 <img 
                   src="/images/NewMain/ipmid1.png" 
                   alt="Platform overview" 
                   className="w-auto h-auto"
                   style={{
                     width: '800px',
                     height: 'auto',
                     filter: 'drop-shadow(0 35px 70px rgba(0, 0, 0, 0.35))',
                   }}
                 />
              </motion.div>

              {/* Front image (iptop) - top center stacking */}
              <motion.div
                className="absolute"
                animate={{
                  x: isInView ? 0 : 0,
                  y: isInView ? -80 : 0,
                  scale: isInView ? 2.0 : 1,
                  rotateX: isInView ? 15 : 0,
                  rotateY: isInView ? 0 : 0,
                  rotateZ: isInView ? 0 : 0,
                }}
                transition={{ 
                  duration: 0.35, 
                  delay: 0.18, 
                  ease: [0.4, 0.0, 0.2, 1]
                }}
                style={{ 
                  transformOrigin: 'center center',
                  transformStyle: 'preserve-3d',
                  zIndex: 20,
                }}
              >
                 <img 
                   src="/images/NewMain/iptop1.svg" 
                   alt="Top engagement" 
                   className="w-auto h-auto"
                   style={{
                     width: '800px',
                     height: 'auto',
                     filter: 'drop-shadow(0 40px 80px rgba(0, 0, 0, 0.5))',
                   }}
                 />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Brands section */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <img 
              src="/images/NewMain/logos.svg" 
              alt="Brands" 
              className="w-full h-auto opacity-70"
            />
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
