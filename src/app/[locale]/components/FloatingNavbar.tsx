"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FloatingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: "For Creators", href: `/${locale}/new-creator` },
    { name: "Success Stories", href: `/${locale}/new-stories` }
  ];

  return (
    <motion.div 
      className="fixed top-6 left-0 right-0 z-50 flex justify-center md:justify-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.nav
        className={`transition-all duration-300 w-full md:w-auto ${
          isScrolled ? "scale-95" : "scale-100"
        }`}
      >
      <div className="relative w-full md:w-auto">
        {/* Desktop: Curvy Background */}
        <div className="hidden md:block bg-white/90 backdrop-blur-md shadow-2xl border border-gray-200/50 px-6 py-2 rounded-full min-w-[800px]">
          
          {/* Navigation Items */}
          <div className="flex items-center justify-between w-full">
            {/* Logo - Far Left */}
            <motion.div
              className="shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/${locale}/home`}>
                <img
                  src="/images/logo1.png"
                  alt="Cult Creative"
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            </motion.div>

            {/* Navigation Links - Center with smaller margins */}
            <div className="flex items-center space-x-12 mx-40">
              {navItems.map((item, index) => (
                item.href.startsWith('#') ? (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-cc-onyx font-medium text-sm transition-colors duration-200 relative group"
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
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cc-onyx transition-all duration-200 group-hover:w-full"></span>
                  </motion.a>
                ) : (
                  <Link key={item.name} href={item.href}>
                    <motion.span
                      className="text-gray-700 hover:text-cc-onyx font-medium text-sm transition-colors duration-200 relative group cursor-pointer block"
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
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cc-onyx transition-all duration-200 group-hover:w-full"></span>
                    </motion.span>
                  </Link>
                )
              ))}
            </div>

            {/* CTA Button - Far Right */}
            <motion.button
              className="bg-cc-onyx text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#3a3636] transition-colors duration-200 shadow-lg hover:shadow-xl shrink-0"
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
          </div>
        </div>

        {/* Mobile: White Rounded Rectangular Bar */}
        <div className="md:hidden bg-white shadow-lg mx-2 px-4 py-3 rounded-full">
          <div className="flex items-center justify-between w-full">
            {/* Logo - Left */}
            <motion.div
              className="shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/${locale}/home`}>
                <img
                  src="/images/logo1.png"
                  alt="Cult Creative"
                  className="h-10 w-auto cursor-pointer"
                />
              </Link>
            </motion.div>

            {/* Right Side: LOGIN Button and Hamburger Menu */}
            <div className="flex items-center gap-2">
              {/* LOGIN Button */}
              <motion.button
                className="bg-cc-onyx text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#3a3636] transition-colors duration-200 shrink-0"
                style={{
                  fontFamily: 'Aileron, sans-serif',
                  fontWeight: 700,
                  fontSize: '14px',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                LOGIN
              </motion.button>

              {/* Hamburger Menu Icon in White Rounded Square */}
              <motion.button
                className="bg-white p-2 rounded-full text-gray-700 hover:text-cc-onyx transition-colors duration-200 border border-gray-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>

        </div>

        {/* Mobile Menu Dropdown Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Background Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Dropdown Card */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed top-20 right-4 md:hidden bg-white shadow-2xl rounded-2xl p-4 z-50 w-64"
              >
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <motion.button
                    className="bg-white border border-gray-300 rounded-lg text-gray-800 hover:border-gray-400 transition-colors duration-200"
                    style={{
                      width: '32px',
                      height: '32px',
                      padding: '4.8px 8px 7.2px 8px',
                      borderRadius: '6.4px',
                      borderWidth: '0.8px',
                      borderColor: '#E7E7E7',
                      boxShadow: '0px -2.4px 0px 0px #E7E7E7 inset'
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    item.href.startsWith('#') ? (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="text-gray-900 hover:bg-gray-100 font-medium text-base transition-colors duration-200 py-3 px-4 rounded-lg"
                        style={{
                          fontFamily: 'Aileron, sans-serif',
                          fontWeight: 500,
                          fontSize: '16px',
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.a>
                    ) : (
                      <Link key={item.name} href={item.href}>
                        <motion.span
                          className="text-gray-900 hover:bg-gray-100 font-medium text-base transition-colors duration-200 py-3 px-4 rounded-lg cursor-pointer block"
                          style={{
                            fontFamily: 'Aileron, sans-serif',
                            fontWeight: 500,
                            fontSize: '16px',
                          }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    )
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Floating Shadow - Desktop Only */}
        <div className="hidden md:block absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl -z-10 scale-110"></div>
      </div>
      </motion.nav>
    </motion.div>
  );
};

export default FloatingNavbar;

