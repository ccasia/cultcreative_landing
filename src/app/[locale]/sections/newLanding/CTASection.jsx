"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold font-aileron relative" style={{ color: '#231f20' }}>
              <img 
                src="/images/NewMain/what.svg" 
                alt="What decoration" 
                className="absolute -top-6 -left-12 w-10 h-10"
              />
              What <span className="relative">
                <img 
                  src="/images/NewMain/rectangle.svg" 
                  alt="Rectangle background" 
                  className="absolute top-4 left-10 w-3/4 h-3/4 object-cover"
                />
                <span className="relative px-2 py-1">We Do.</span>
              </span>
            </h2>
          </div>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto relative font-aileron">
            Cult Creative is the <strong className="text-black font-bold">all-in-one portal</strong> for <strong className="relative text-black font-bold">creators
              <img 
                src="/images/NewMain/creatoru.svg" 
                alt="Creator underline" 
                className="absolute -bottom-1 left-0 w-full h-auto"
              />
            </strong> and <strong className="relative text-black font-bold">brands
              <img 
                src="/images/NewMain/brandu.svg" 
                alt="Brand underline" 
                className="absolute -bottom-1 left-0 w-full h-auto"
              />
            </strong> <br />
            to seamlessly work, collaborate, and elevate.
          </p>
        </motion.div>

        {/* Three Phone Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* All-In-One Platform */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
              <div className="rounded-xl p-8 transition-all duration-300 cursor-pointer group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600" style={{ backgroundColor: '#F4F4F4' }}>
                <div className="relative mx-auto mb-6 max-w-[200px]">
                  <img 
                    src="/images/NewMain/iphonestatic.svg" 
                    alt="All-In-One Platform" 
                    className="w-full h-auto transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              <div className="min-h-[80px] flex flex-col justify-center">
                <h3 className="text-xl text-black group-hover:text-white mb-2 transition-colors duration-300" style={{ fontFamily: 'Inter Display, sans-serif' }}>
                  All-In-One Platform
                </h3>
                <p 
                  className="text-gray-600 group-hover:text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300" 
                  style={{ fontFamily: 'Inter Display, sans-serif' }}
                >
                  Simplifying the way creators and brands connect
                </p>
              </div>
            </div>
          </motion.div>

          {/* Data-Based Results */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
              <div className="rounded-xl p-8 transition-all duration-300 cursor-pointer group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600" style={{ backgroundColor: '#F4F4F4' }}>
                <div className="relative mx-auto mb-6 max-w-[200px]">
                  <img 
                    src="/images/NewMain/tilt2.svg" 
                    alt="Data-Based Results" 
                    className="w-full h-auto transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              <div className="min-h-[80px] flex flex-col justify-center">
                <h3 className="text-xl text-black group-hover:text-white mb-2 transition-colors duration-300" style={{ fontFamily: 'Inter Display, sans-serif' }}>
                  Data-Based Results
                </h3>
                <p 
                  className="text-gray-600 group-hover:text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300" 
                  style={{ fontFamily: 'Inter Display, sans-serif' }}
                >
                  Real-time data to see how your content or campaign is performing
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tailored Recommendations */}
          <motion.div
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
              <div className="rounded-xl p-8 transition-all duration-300 cursor-pointer group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-600" style={{ backgroundColor: '#F4F4F4' }}>
                <div className="relative mx-auto mb-6 max-w-[200px]">
                  <img 
                    src="/images/NewMain/tilt3.svg" 
                    alt="Tailored Recommendations" 
                    className="w-full h-auto transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              <div className="min-h-[80px] flex flex-col justify-center">
                <h3 className="text-xl text-black group-hover:text-white mb-2 transition-colors duration-300" style={{ fontFamily: 'Inter Display, sans-serif' }}>
                  Tailored Recommendations
                </h3>
                <p 
                  className="text-gray-600 group-hover:text-white text-sm opacity-0 group-hover:opacity-100 transition-all duration-300" 
                  style={{ fontFamily: 'Inter Display, sans-serif' }}
                >
                  Expert recommendations to maximise chances of success
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
