"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ContactFormSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    industry: "",
    budget: ""
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <style jsx>{`
        input::placeholder {
          font-family: Aileron;
          font-weight: 400;
          font-style: normal;
          font-size: 14px;
          line-height: 100%;
          letter-spacing: 0%;
          color: #9CA3AF;
        }
      `}</style>
      <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Desktop Layout */}
        <div className="w-full max-w-7xl mx-auto hidden md:block">
          <motion.div
            className="overflow-hidden shadow-2xl w-full max-w-6xl mx-auto"
            style={{
              background: 'linear-gradient(45deg, #231F20 0%, #231F20 5%, #001A7A 20%, #001A7A 40%, #231F20 65%, #231F20 100%)',
              width: '100%',
              maxWidth: '1320px',
              height: '659px',
              borderRadius: '32px',
              padding: '80px',
              opacity: 1
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between h-full">
              {/* Left Column - Text Section */}
              <div className="flex flex-col justify-start relative pr-8" style={{ width: '40%', paddingTop: '0px' }}>
                {/* Glow effect removed per request */}
                
                <h2 
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'Aileron, sans-serif',
                    fontWeight: 700,
                    fontSize: '48px',
                    lineHeight: '56px',
                    letterSpacing: '-0.06em',
                    color: '#FFFFFF'
                  }}
                >
                  Finding Creators
                  <img 
                    src="/images/NewMain/singlestar.svg" 
                    alt="Star decoration" 
                    className="absolute top-0 right-0 w-[28rem] h-[28rem] transform -translate-y-52 translate-x-32"
                  />
                  <br />For Your Brand?
                </h2>
                <p 
                  className="text-white"
                  style={{
                    fontFamily: 'Times New Roman, serif',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    fontSize: '24px',
                    lineHeight: '32px',
                    letterSpacing: '-0.04em',
                    color: '#FFFFFF'
                  }}
                >
                  Fill in the form and we&apos;ll get in touch ASAP.
                </p>
              </div>

              {/* Right Column - Form Section */}
              <div className="pl-8" style={{ width: '60%' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <div className="flex items-center mb-2">
                      <img src="/images/NewMain/ContactForm/Person.svg" alt="Person icon" className="w-5 h-5 mr-3" />
                      <label className="text-white text-sm">Name</label>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-white border-b border-white focus:border-blue-400 focus:outline-none py-2"
                      style={{
                        fontFamily: 'Aileron',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '14px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        verticalAlign: 'middle'
                      }}
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <div className="flex items-center mb-2">
                      <img src="/images/NewMain/ContactForm/Phone.svg" alt="Phone icon" className="w-5 h-5 mr-3" />
                      <label className="text-white text-sm">Phone Number</label>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-white border-b border-white focus:border-blue-400 focus:outline-none py-2"
                      style={{
                        fontFamily: 'Aileron',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '14px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        verticalAlign: 'middle'
                      }}
                      required
                    />
                  </div>

                  {/* Company Field */}
                  <div>
                    <div className="flex items-center mb-2">
                      <img src="/images/NewMain/ContactForm/Work outline.svg" alt="Work icon" className="w-5 h-5 mr-3" />
                      <label className="text-white text-sm">Company Name</label>
                    </div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-white border-b border-white focus:border-blue-400 focus:outline-none py-2"
                      style={{
                        fontFamily: 'Aileron',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '14px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        verticalAlign: 'middle'
                      }}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <div className="flex items-center mb-2">
                      <img src="/images/NewMain/ContactForm/Email.svg" alt="Email icon" className="w-5 h-5 mr-3" />
                      <label className="text-white text-sm">Business Email</label>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Business Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-white border-b border-white focus:border-blue-400 focus:outline-none py-2"
                      style={{
                        fontFamily: 'Aileron',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '14px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        verticalAlign: 'middle'
                      }}
                      required
                    />
                  </div>

                  {/* Dropdown Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full bg-white text-black rounded-3xl px-4 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        style={{
                          fontFamily: 'Aileron',
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          verticalAlign: 'middle'
                        }}
                        required
                      >
                        <option value="">Select Industry</option>
                        <option value="fashion">Fashion</option>
                        <option value="beauty">Beauty</option>
                        <option value="lifestyle">Lifestyle</option>
                        <option value="food">Food & Beverage</option>
                        <option value="tech">Technology</option>
                        <option value="fitness">Fitness</option>
                        <option value="travel">Travel</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-4 h-4" fill="none" stroke="#231f20" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-white text-black rounded-3xl px-4 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                        style={{
                          fontFamily: 'Aileron',
                          fontWeight: 400,
                          fontStyle: 'normal',
                          fontSize: '14px',
                          lineHeight: '100%',
                          letterSpacing: '0%',
                          verticalAlign: 'middle'
                        }}
                        required
                      >
                        <option value="">Monthly Influencer Budget</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                        <svg className="w-4 h-4" fill="none" stroke="#231f20" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex justify-center">
                    <button
                      type="submit"
                      className="w-64 text-white font-bold py-4 px-8 rounded-3xl transition-colors duration-200"
                      style={{
                        backgroundColor: '#1340ff',
                        fontFamily: 'Aileron',
                        fontWeight: 700,
                        fontStyle: 'normal',
                        fontSize: '16px',
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        textAlign: 'center',
                        verticalAlign: 'middle'
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="w-full max-w-sm mx-auto md:hidden">
          <motion.div
            className="overflow-hidden shadow-2xl w-full"
            style={{
              background: 'linear-gradient(45deg, #231F20 0%, #231F20 5%, #001A7A 20%, #001A7A 40%, #231F20 65%, #231F20 100%)',
              borderRadius: '24px',
              padding: '32px',
              opacity: 1
            }}
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{}}
            viewport={{ once: true }}
          >
            {/* Mobile Header */}
            <div className="mb-6">
              <h2 
                className="text-white mb-3 relative"
                style={{
                  fontFamily: 'Aileron, sans-serif',
                  fontWeight: 700,
                  fontSize: '28px',
                  lineHeight: '34px',
                  letterSpacing: '-0.06em',
                  color: '#FFFFFF'
                }}
              >
                Finding Creators For Your Brand?
              </h2>
              <p 
                className="text-white"
                style={{
                  fontFamily: 'Times New Roman, serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '16px',
                  lineHeight: '22px',
                  letterSpacing: '-0.04em',
                  color: '#FFFFFF'
                }}
              >
                Fill in the form and we&apos;ll get in touch ASAP.
              </p>
            </div>

            {/* Mobile Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <div className="flex items-center mb-2">
                  <img src="/images/NewMain/ContactForm/Person.svg" alt="Person icon" className="w-5 h-5 mr-3" />
                  <label className="text-white text-sm">Name</label>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white border-b border-white focus:border-blue-400 focus:outline-none py-2"
                  style={{
                    fontFamily: 'Aileron',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <div className="flex items-center mb-2">
                  <img src="/images/NewMain/ContactForm/Phone.svg" alt="Phone icon" className="w-5 h-5 mr-3" />
                  <label className="text-white text-sm">Phone Number</label>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white border-b border-white focus:border-blue-400 focus:outline-none py-2"
                  style={{
                    fontFamily: 'Aileron',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}
                  required
                />
              </div>

              {/* Company Field */}
              <div>
                <div className="flex items-center mb-2">
                  <img src="/images/NewMain/ContactForm/Work outline.svg" alt="Work icon" className="w-5 h-5 mr-3" />
                  <label className="text-white text-sm">Company Name</label>
                </div>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white border-b border-white focus:border-blue-400 focus:outline-none py-2"
                  style={{
                    fontFamily: 'Aileron',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <div className="flex items-center mb-2">
                  <img src="/images/NewMain/ContactForm/Email.svg" alt="Email icon" className="w-5 h-5 mr-3" />
                  <label className="text-white text-sm">Business Email</label>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Business Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-white border-b border-white focus:border-blue-400 focus:outline-none py-2"
                  style={{
                    fontFamily: 'Aileron',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: '14px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    verticalAlign: 'middle'
                  }}
                  required
                />
              </div>

              {/* Dropdown Fields - Full Width on Mobile */}
              <div className="space-y-4">
                <div className="relative">
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full bg-gray-200 text-black rounded-2xl px-4 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      verticalAlign: 'middle'
                    }}
                    required
                  >
                    <option value="">Select Industry</option>
                    <option value="fashion">Fashion</option>
                    <option value="beauty">Beauty</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="food">Food & Beverage</option>
                    <option value="tech">Technology</option>
                    <option value="fitness">Fitness</option>
                    <option value="travel">Travel</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="#231f20" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-gray-200 text-black rounded-2xl px-4 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      verticalAlign: 'middle'
                    }}
                    required
                  >
                    <option value="">Monthly Influencer Budget</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="#231f20" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full text-white font-bold py-4 px-8 rounded-2xl transition-colors duration-200"
                  style={{
                    backgroundColor: '#1340ff',
                    fontFamily: 'Aileron',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactFormSection;
