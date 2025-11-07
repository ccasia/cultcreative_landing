"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HowWeDoItSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for all cards visible initially, then stack when scrolled
  const card1Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -20, -60]);
  const card2Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -40]);
  const card3Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, -20]);
  const card4Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 0]);

  const card1Scale = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1, 0.96, 0.94, 0.92]);
  const card2Scale = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1, 1, 0.96, 0.94]);
  const card3Scale = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1, 1, 1, 0.96]);
  const card4Scale = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1, 1, 1, 1]);

  return (
    <div ref={containerRef} className="bg-white py-8">
      <section className="py-20 rounded-3xl" style={{ 
        backgroundImage: 'url(/images/NewMain/purplegradientbackground.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
          <div className="container mx-auto px-6">
            {/* Header Section */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold font-aileron relative mb-8 text-white" style={{ letterSpacing: '-0.06em' }}>
                How We Do It.
                <img
                  src="/images/NewMain/howwedoit.svg"
                  alt="How We Do It underline"
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-96"
                />
              </h2>
            </motion.div>

            {/* Feature Cards */}
            <div className="max-w-4xl mx-auto">
              {/* Creator Media Kit Card */}
              <motion.div
                className="sticky top-2 bg-white shadow-lg overflow-hidden -mb-1 mx-auto md:mx-0 w-full max-w-sm md:max-w-none md:w-[955px] md:h-[276px] h-auto md:rounded-[20px] rounded-lg md:py-[18px] py-4 md:px-9 px-4 md:border-[0.75px] border border-gray-200 md:ml-[-22px] ml-0"
                style={{ 
                  y: card1Y, 
                  scale: card1Scale, 
                  zIndex: 1
                }}
              >
                <div className="flex flex-col md:flex-row items-center h-full">
                  {/* Left side - Dashboard mockup */}
                  <div 
                    className="flex items-center justify-center w-full md:w-[317.6px] h-[200px] md:h-[240px] mb-4 md:mb-0"
                    style={{
                      borderTopRightRadius: '6.67px',
                      borderBottomRightRadius: '6.67px',
                      gap: '31.5px'
                    }}
                  >
                    <img 
                      src="/images/NewMain/hwd1.svg" 
                      alt="Creator Media Kit" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Right side - Content */}
                  <div 
                    className="flex flex-col justify-center w-full md:w-[490.9px] text-center md:text-left"
                    style={{
                      height: '81.25px',
                      gap: '5.25px',
                      marginLeft: '0px'
                    }}
                  >
                    <h3 className="text-xl md:text-2xl text-gray-800 mb-2" style={{ fontFamily: 'Aileron, sans-serif' }}>
                      Creator Media Kit
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Aileron, sans-serif' }}>
                      Your all-in-one professional profile that showcases your influence and audience insights.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Campaign Analytics Card */}
              <motion.div
                className="sticky top-2 bg-white shadow-lg overflow-hidden mb-4 mx-auto md:mx-0 w-full max-w-sm md:max-w-none md:w-[925px] md:h-[276px] h-auto md:rounded-[20px] rounded-lg md:py-[18px] py-4 md:px-9 px-4 md:border-[0.75px] border border-gray-200 md:ml-[-8px] ml-0"
                style={{ 
                  y: card2Y, 
                  scale: card2Scale, 
                  zIndex: 2
                }}
              >
                <div className="flex flex-col md:flex-row items-center h-full">
                  {/* Left side - Analytics mockup */}
                  <div 
                    className="flex items-center justify-center w-full md:w-[317.6px] h-[200px] md:h-[240px] mb-4 md:mb-0"
                    style={{
                      borderTopRightRadius: '6.67px',
                      borderBottomRightRadius: '6.67px',
                      gap: '31.5px'
                    }}
                  >
                    <img 
                      src="/images/NewMain/hwd2.svg" 
                      alt="Campaign Analytics" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Right side - Content */}
                  <div 
                    className="flex flex-col justify-center w-full md:w-[490.9px] text-center md:text-left"
                    style={{
                      height: '81.25px',
                      gap: '5.25px',
                      marginLeft: '0px'
                    }}
                  >
                    <h3 className="text-xl md:text-2xl text-gray-800 mb-2" style={{ fontFamily: 'Aileron, sans-serif' }}>
                      Campaign Analytics
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Aileron, sans-serif' }}>
                      A centralized dashboard that tracks the performance of your campaigns in real time.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Content & Creator Management Card */}
              <motion.div
                className="sticky top-2 bg-white shadow-lg overflow-hidden mb-4 mx-auto w-full max-w-sm md:max-w-none md:w-[912px] md:h-[276px] h-auto md:rounded-[20px] rounded-lg md:py-[18px] py-4 md:px-9 px-4 md:border-[0.75px] border border-gray-200"
                style={{ 
                  y: card3Y, 
                  scale: card3Scale, 
                  zIndex: 3
                }}
              >
                <div className="flex flex-col md:flex-row items-center h-full">
                  {/* Left side - Management mockup */}
                  <div 
                    className="flex items-center justify-center w-full md:w-[317.6px] h-[200px] md:h-[240px] mb-4 md:mb-0"
                    style={{
                      borderTopRightRadius: '6.67px',
                      borderBottomRightRadius: '6.67px',
                      gap: '31.5px'
                    }}
                  >
                    <img 
                      src="/images/NewMain/hwd3.svg" 
                      alt="Content & Creator Management" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Right side - Content */}
                  <div 
                    className="flex flex-col justify-center w-full md:w-[490.9px] text-center md:text-left"
                    style={{
                      height: '81.25px',
                      gap: '5.25px',
                      marginLeft: '0px'
                    }}
                  >
                    <h3 className="text-xl md:text-2xl text-gray-800 mb-2" style={{ fontFamily: 'Aileron, sans-serif' }}>
                      Content & Creator Management
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Aileron, sans-serif' }}>
                      Stay organized and in control with a single hub to manage all your creators, content, and collaborations.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Automated Workflow Card */}
              <motion.div
                className="sticky top-2 bg-white shadow-lg overflow-hidden mb-4 mx-auto w-full max-w-sm md:max-w-none md:w-[912px] md:h-[276px] h-auto md:rounded-[20px] rounded-lg md:py-[18px] py-4 md:px-9 px-4 md:border-[0.75px] border border-gray-200"
                style={{ 
                  y: card4Y, 
                  scale: card4Scale, 
                  zIndex: 4
                }}
              >
                <div className="flex flex-col md:flex-row items-center h-full">
                  {/* Left side - Workflow mockup */}
                  <div 
                    className="flex items-center justify-center w-full md:w-[317.6px] h-[200px] md:h-[240px] mb-4 md:mb-0"
                    style={{
                      borderTopRightRadius: '6.67px',
                      borderBottomRightRadius: '6.67px',
                      gap: '31.5px'
                    }}
                  >
                    <img 
                      src="/images/NewMain/hwd4.svg" 
                      alt="Automated Workflow" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Right side - Content */}
                  <div 
                    className="flex flex-col justify-center w-full md:w-[490.9px] text-center md:text-left"
                    style={{
                      height: '81.25px',
                      gap: '5.25px',
                      marginLeft: '0px'
                    }}
                  >
                    <h3 className="text-xl md:text-2xl text-gray-800 mb-2" style={{ fontFamily: 'Aileron, sans-serif' }}>
                      Automated Workflow
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Aileron, sans-serif' }}>
                      Simplify collaboration with contracts that generate instantly.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default HowWeDoItSection;
