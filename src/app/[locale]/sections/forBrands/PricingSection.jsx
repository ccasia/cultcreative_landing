"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const PricingSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const pricingPlans = [
    {
      id: 1,
      name: "Trial",
      price: "RM 3,000",
      isHighlighted: false,
      features: [
        "<strong>5 CGC Credits</strong> (5 videos by nano-micro creators)",
        "<strong>1 Campaign</strong>",
        "<strong>1 month</strong> Credit Validity",
        "<strong>Standard</strong> Support",
        "Access to a Client Success Manager",
        "<strong>Basic</strong> campaign report"
      ]
    },
    {
      id: 2,
      name: "Basic",
      price: "RM 8,800",
      isHighlighted: false,
      features: [
        "<strong>15 CGC Credits</strong> (15 videos by nano-micro creators)",
        "<strong>Up to 3</strong> Campaigns",
        "<strong>2 months</strong> Credit Validity",
        "<strong>Standard</strong> Support",
        "Access to a Client Success Manager",
        "<strong>Basic</strong> campaign report"
      ]
    },
    {
      id: 3,
      name: "Essential",
      price: "RM 16,500",
      isHighlighted: true,
      features: [
        "<strong style='color: #1340FF'>30 CGC Credits</strong> (30 videos by nano-micro creators)",
        "<strong style='color: #1340FF'>Up to 5</strong> Campaigns",
        "<strong style='color: #1340FF'>3 months</strong> Credit Validity",
        "<strong style='color: #1340FF'>On-going</strong> Support",
        "<strong style='color: #1340FF'>Dedicated</strong> Client Success Manager",
        "<strong style='color: #1340FF'>In-depth</strong> campaign report"
      ]
    },
    {
      id: 4,
      name: "Pro",
      price: "RM 27,000",
      isHighlighted: false,
      features: [
        "<strong>50 CGC Credits</strong> (50 videos by nano-micro creators)",
        "<strong>Up to 8</strong> Campaigns",
        "<strong>5 months</strong> Credit Validity",
        "<strong>On-going</strong> Support",
        "<strong>Dedicated</strong> Client Success Manager",
        "<strong>In-depth</strong> campaign report"
      ]
    }
  ];

  return (
    <div className="w-full flex justify-center py-8 md:py-16" style={{ background: '#FFFFFF' }}>
      <section 
        className="relative w-full md:w-auto"
        style={{
          maxWidth: isMobile ? '100%' : '1440px',
          paddingTop: isMobile ? '40px' : '80px',
          paddingRight: isMobile ? '20px' : '120px',
          paddingBottom: isMobile ? '40px' : '80px',
          paddingLeft: isMobile ? '20px' : '120px',
          borderRadius: isMobile ? '0' : '20px',
          background: '#FFFFFF'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Pricing Cards */}
          <div className={isMobile ? "flex flex-col gap-4 mb-8" : "grid grid-cols-4 gap-6 mb-12"}>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`rounded-3xl transition-all duration-300 bg-white ${!isMobile && 'hover:border-transparent hover:shadow-[0_0_20px_rgba(59,130,246,0.4),0_0_40px_rgba(59,130,246,0.2)]'}`}
                style={{
                  border: '0.71px solid #000000',
                  background: 'white',
                  borderRadius: '24px',
                  padding: isMobile ? '24px' : '32px'
                }}
                whileHover={!isMobile ? { 
                  scale: 1.02,
                  border: '2px solid transparent',
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #60A5FA, #3B82F6, #1D4ED8) border-box'
                } : {}}
                transition={{ 
                  duration: 0.1, 
                  ease: "easeInOut"
                }}
              >
                {/* Plan Header */}
                <div className={isMobile ? "flex justify-between items-start mb-6" : "text-center mb-6"}>
                  {isMobile ? (
                    <>
                      <div 
                        style={{
                          fontFamily: 'Aileron',
                          fontWeight: 700,
                          fontStyle: 'Bold',
                          fontSize: '32px',
                          lineHeight: '36px',
                          letterSpacing: '-6%',
                          textAlign: 'left',
                          textTransform: 'capitalize',
                          background: plan.isHighlighted 
                            ? 'linear-gradient(92.03deg, #0067D5 5.05%, #1340FF 46.3%, #001FA3 99.13%)'
                            : '#231F20',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          color: plan.isHighlighted ? 'transparent' : '#231F20'
                        }}
                      >
                        {plan.price}
                      </div>
                      <div 
                        className="inline-block"
                        style={{
                          paddingTop: '5.69px',
                          paddingRight: '20px',
                          paddingBottom: '5.69px',
                          paddingLeft: '20px',
                          borderRadius: '22.75px',
                          border: plan.isHighlighted ? '0.71px solid #1340ff' : '0.71px solid #000000',
                          background: plan.isHighlighted ? '#1340ff' : 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <span 
                          style={{
                            fontFamily: 'Aileron',
                            fontWeight: 700,
                            fontSize: '14px',
                            lineHeight: '16px',
                            letterSpacing: '0%',
                            color: plan.isHighlighted ? '#FFFFFF' : '#000000'
                          }}
                        >
                          {plan.name}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div 
                        className="inline-block mb-4 mx-auto"
                        style={{
                          width: '102.3px',
                          height: '34.4px',
                          paddingTop: '5.69px',
                          paddingRight: '34.13px',
                          paddingBottom: '5.69px',
                          paddingLeft: '34.13px',
                          gap: '7.11px',
                          borderRadius: '22.75px',
                          border: plan.isHighlighted ? '0.71px solid #1340ff' : '0.71px solid #000000',
                          background: plan.isHighlighted ? '#1340ff' : 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <span 
                          style={{
                            fontFamily: 'Aileron',
                            fontWeight: 700,
                            fontSize: '14px',
                            lineHeight: '16px',
                            letterSpacing: '0%',
                            color: plan.isHighlighted ? '#FFFFFF' : '#000000'
                          }}
                        >
                          {plan.name}
                        </span>
                      </div>
                      <div 
                        style={{
                          fontFamily: 'Aileron',
                          fontWeight: 700,
                          fontStyle: 'Bold',
                          fontSize: '36px',
                          lineHeight: '41.14px',
                          letterSpacing: '-6%',
                          textAlign: 'center',
                          textTransform: 'capitalize',
                          background: plan.isHighlighted 
                            ? 'linear-gradient(92.03deg, #0067D5 5.05%, #1340FF 46.3%, #001FA3 99.13%)'
                            : '#231F20',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          color: plan.isHighlighted ? 'transparent' : '#231F20'
                        }}
                      >
                        {plan.price}
                      </div>
                    </>
                  )}
                </div>

                {/* Features List */}
                <div className={isMobile ? "space-y-3" : "space-y-4"}>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start"
                    >
                      <div className="mr-3 mt-0.5">
                        <svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke={plan.isHighlighted ? "#1340FF" : "currentColor"} 
                          viewBox="0 0 24 24"
                          style={{ color: plan.isHighlighted ? "#1340FF" : "#000000" }}
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                      <span 
                        style={{
                          fontFamily: 'Aileron',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '16px',
                          letterSpacing: '0%',
                          color: '#000000'
                        }}
                        dangerouslySetInnerHTML={{ __html: feature }}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="text-center">
            {/* Disclaimer Text */}
            <div className="mb-8 max-w-4xl mx-auto text-center">
              <p 
                className="mb-4"
                style={{
                  fontFamily: 'Aileron',
                  fontWeight: 400,
                  fontSize: isMobile ? '12px' : '20px',
                  lineHeight: isMobile ? '16px' : '24px',
                  letterSpacing: '0%',
                  color: '#000000',
                  textAlign: 'center',
                  whiteSpace: isMobile ? 'normal' : 'nowrap',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                *Excluding SST. Additional charges apply for cross-posting videos and monthly ads-usage rights. Bulk price available.
              </p>
              <p 
                className="mb-2"
                style={{
                  fontFamily: 'Aileron',
                  fontWeight: 400,
                  fontSize: isMobile ? '14px' : '20px',
                  lineHeight: isMobile ? '18px' : '24px',
                  letterSpacing: '0%',
                  color: '#000000',
                  textAlign: 'center'
                }}
              >
                Looking for a better fit? <span style={{ fontWeight: 700 }}>We offer custom packages that can be tailored to your campaign needs.</span>
              </p>
              <p 
                style={{
                  fontFamily: 'Aileron',
                  fontWeight: 400,
                  fontSize: isMobile ? '14px' : '20px',
                  lineHeight: isMobile ? '18px' : '24px',
                  letterSpacing: '0%',
                  color: '#000000',
                  textAlign: 'center'
                }}
              >
                Contact us today to learn more.
              </p>
            </div>

            {/* Call to Action Button */}
            <motion.button
              className="px-12 py-4 text-white font-bold rounded-full text-lg relative overflow-hidden flex items-center mx-auto"
              style={{
                backgroundColor: '#1340ff',
                background: 'linear-gradient(135deg, #1340ff 0%, #1340ff 100%)',
                boxShadow: '0 8px 25px rgba(19, 64, 255, 0.3)',
                fontFamily: 'Aileron',
                fontWeight: 700
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 35px rgba(19, 64, 255, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <span className="flex items-center gap-2">
                LET'S HAVE A QUICK CHAT
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
