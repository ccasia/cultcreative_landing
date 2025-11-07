"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ForBrandsHero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="https://storage.googleapis.com/landing-cultcreative/main/v2/forbrandshero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex-1 flex items-end justify-center pb-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="mb-4 leading-tight text-white relative"
            style={{ 
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.25)',
              fontSize: '54px',
              lineHeight: '57.86px',
              letterSpacing: '-6%',
              textTransform: 'capitalize'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Rectangle behind "Influencer marketing" text */}
            <div
              style={{
                position: 'absolute',
                top: '74%',
                left: '20px',
                transform: 'translateY(-50%)',
                width: '462px',
                height: '32px',
                backgroundColor: '#231f20',
                zIndex: -1
              }}
            />
            <span style={{
              fontFamily: 'Aileron',
              fontWeight: 700,
              fontStyle: 'normal'
            }}>Influencer marketing, </span>
            <span style={{
              fontFamily: 'Times New Roman',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: '54px',
              lineHeight: '40px',
              letterSpacing: '-4%'
            }}>Simplified.</span>
          </motion.h1>
          
          <motion.p
            className="mb-12 text-white/90 max-w-3xl mx-auto"
            style={{ 
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
              fontFamily: 'Aileron',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stop building manual reports and managing endless spreadsheets.
          </motion.p>

          <motion.div
            className="flex justify-center"
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
                SIGN UP AS A BRAND
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

    </section>
  );
};

export default ForBrandsHero;
