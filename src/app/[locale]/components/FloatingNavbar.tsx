"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  
  // Extract locale from pathname (e.g., "/my/new-landing" -> "my")
  const locale = pathname?.split('/')[1] || 'my';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "For Brands", href: `/${locale}/for-brands` },
    { name: "For Creators", href: "#creators" },
    { name: "Success Stories", href: "#stories" }
  ];

  return (
    <motion.div 
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.nav
        className={`transition-all duration-300 ${
          isScrolled ? "scale-95" : "scale-100"
        }`}
      >
      <div className="relative">
        {/* Curvy Background */}
        <div className="bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200/50 px-6 py-2 rounded-full min-w-[800px]">
          
          {/* Navigation Items */}
          <div className="flex items-center justify-between w-full">
            {/* Logo - Far Left */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/${locale}/new-landing`}>
                <img
                  src="/images/logo1.png"
                  alt="Cult Creative"
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            </motion.div>

            {/* Navigation Links - Center with smaller margins */}
            <div className="hidden md:flex items-center space-x-12 mx-40">
              {navItems.map((item, index) => (
                item.href.startsWith('#') ? (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-[#231f20] font-medium text-sm transition-colors duration-200 relative group"
                    style={{
                      fontFamily: 'Aileron',
                      fontWeight: 400,
                      fontStyle: 'normal',
                      fontSize: '14px',
                      lineHeight: '100%',
                      letterSpacing: '0%'
                    }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#231f20] transition-all duration-200 group-hover:w-full"></span>
                  </motion.a>
                ) : (
                  <Link key={item.name} href={item.href}>
                    <motion.span
                      className="text-gray-700 hover:text-[#231f20] font-medium text-sm transition-colors duration-200 relative group cursor-pointer block"
                      style={{
                        fontFamily: 'Aileron',
                        fontWeight: 400,
                        fontStyle: 'normal',
                        fontSize: '14px',
                        lineHeight: '100%',
                        letterSpacing: '0%'
                      }}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#231f20] transition-all duration-200 group-hover:w-full"></span>
                    </motion.span>
                  </Link>
                )
              ))}
            </div>

            {/* CTA Button - Far Right */}
            <motion.button
              className="bg-[#231f20] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#3a3636] transition-colors duration-200 shadow-lg hover:shadow-xl flex-shrink-0"
              style={{
                fontFamily: 'Aileron',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              LOGIN
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-gray-700 hover:text-[#231f20] transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Floating Shadow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10 scale-110"></div>
      </div>
      </motion.nav>
    </motion.div>
  );
};

export default FloatingNavbar;

