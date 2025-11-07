"use client";

import { motion } from "framer-motion";

const ForBrandsFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Campaign Management",
      description: "Streamline your influencer campaigns with our comprehensive management tools",
      width: 721,
      height: 381,
      top: 0,
      left: 0,
      background: "linear-gradient(180deg, #1340FF 0%, #001FA3 100%)"
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Track performance with detailed analytics and insights",
      width: 453,
      height: 381,
      top: 0,
      left: 751,
      background: "linear-gradient(180deg, #FF3500 0%, #A72300 100%)"
    },
    {
      id: 3,
      title: "Creator Network",
      description: "Access our vast network of verified creators",
      width: 445,
      height: 381,
      top: 400,
      left: 0,
      background: "linear-gradient(180deg, #026D54 0%, #025844 100%)"
    },
    {
      id: 4,
      title: "Content Approval",
      description: "Review and approve content before it goes live",
      width: 728,
      height: 381,
      top: 400,
      left: 476,
      background: "linear-gradient(180deg, #8A5AFE 0%, #533698 100%)"
    }
  ];

  return (
    <div className="w-full flex justify-center py-8" style={{ background: '#FFFFFF' }}>
      <section 
        className="relative"
        style={{
          width: '1440px',
          height: '1172px',
          paddingTop: '120px',
          paddingRight: '120px',
          paddingBottom: '140px',
          paddingLeft: '120px',
          gap: '60px',
          opacity: 1,
          borderRadius: '20px',
          background: 'radial-gradient(circle, rgba(35, 31, 32, 1) 0%, rgba(0, 9, 79, 1) 35%, rgba(0, 13, 46, 1) 100%)',
          overflow: 'hidden'
        }}
      >
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Title Section */}
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-white mb-4"
            style={{
              fontFamily: 'Aileron',
              fontWeight: 700,
              fontStyle: 'Bold',
              fontSize: '58.32px',
              lineHeight: '57.86px',
              letterSpacing: '-0.06em',
              textTransform: 'capitalize',
              background: '#FFFFFF',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Our Key Features
          </h2>
          
          {/* Curly yellow underline */}
          <div className="relative inline-block ml-28">
            <img 
              src="/images/ForBrands/curlyyellow.svg" 
              alt="Curly yellow underline" 
              className="w-auto h-8 -mt-4"
            />
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="flex-1 relative"
          style={{ height: '800px' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Top Row */}
          <div className="flex gap-4 mb-4">
            {/* Blue Card */}
            <motion.div
              className="p-8 flex flex-col justify-center relative overflow-hidden"
              style={{
                width: '721px',
                height: '381px',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, #1340FF 0%, #001FA3 100%)'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="relative z-10 text-white flex items-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="mr-8">
                  <img 
                    src="/images/ForBrands/unified.svg" 
                    alt="Unified Workflow" 
                    className="w-84 h-84"
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-3xl font-bold mb-4"
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 700,
                      fontSize: '32px'
                    }}
                  >
                    Unified Workflow
                  </h3>
                  <p 
                    className="text-lg opacity-90"
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 400,
                      fontSize: '18px'
                    }}
                  >
                    Manage creator content, communication and payments effortlessly
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Red Card */}
            <motion.div
              className="p-8 flex flex-col justify-center relative overflow-hidden"
              style={{
                width: '453px',
                height: '381px',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, #FF3500 0%, #A72300 100%)'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="relative z-10 text-white flex flex-col items-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <img 
                    src="/images/ForBrands/campaignanalytics.svg" 
                    alt="Campaign Analytics" 
                    className="w-70 h-70"
                  />
                </div>
                <div className="text-left w-full">
                  <h3 
                    className="text-3xl font-bold "
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 700,
                      fontSize: '32px'
                    }}
                  >
                    Campaign Analytics
                  </h3>
                  <p 
                    className="text-lg opacity-90"
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 400,
                      fontSize: '18px'
                    }}
                  >
                    Access real-time campaign performance and ROI metrics in one clear dashboard.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap-4">
            {/* Green Card */}
            <motion.div
              className="p-8 flex flex-col justify-center relative overflow-hidden"
              style={{
                width: '445px',
                height: '381px',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, #026D54 0%, #025844 100%)'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="relative z-10 text-white flex flex-col items-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <img 
                    src="/images/ForBrands/guided.svg" 
                    alt="Guided Strategy" 
                    className="w-70 h-70"
                  />
                </div>
                <div className="text-left w-full">
                  <h3 
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 700,
                      fontSize: '32px'
                    }}
                  >
                    Guided Strategy
                  </h3>
                  <p 
                    className="text-lg opacity-90"
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 400,
                      fontSize: '18px'
                    }}
                  >
                    Get expert recommendations and video direction from our dedicated Client Success team
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Purple Card */}
            <motion.div
              className="p-8 flex flex-col justify-center relative overflow-hidden"
              style={{
                width: '728px',
                height: '381px',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, #8A5AFE 0%, #533698 100%)'
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="relative z-10 text-white flex items-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="mr-8">
                  <img 
                    src="/images/ForBrands/smartmatching.svg" 
                    alt="Smart Matching" 
                    className="w-84 h-84"
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-3xl font-bold mb-4"
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 700,
                      fontSize: '32px'
                    }}
                  >
                    Smart Matching
                  </h3>
                  <p 
                    className="text-lg opacity-90"
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 400,
                      fontSize: '18px'
                    }}
                  >
                    Quickly connect with reliable, high-quality creators whose audience perfectly aligns with your brand goals.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </section>
    </div>
  );
};

export default ForBrandsFeatures;



