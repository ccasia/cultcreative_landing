"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

const LocationSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("my");
  const router = useRouter();
  const pathname = usePathname();

  const locations = [
    { code: "my", name: "Malaysia", flag: "🇲🇾" },
    { code: "sg", name: "Singapore", flag: "🇸🇬" }
  ];

  const handleLocationChange = (code: string) => {
    if (code === selectedLocation) {
      setIsOpen(false);
      return;
    }

    // Replace the locale in the pathname
    const pathParts = pathname.split('/');
    pathParts[1] = code;
    const newPath = pathParts.join('/');

    setSelectedLocation(code);
    setIsOpen(false);
    router.push(newPath);
  };

  const currentLocation = locations.find(loc => loc.code === selectedLocation);

  return (
    <div className="relative">
      {/* Location Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">{currentLocation?.flag}</span>
        <span className="text-sm font-medium text-gray-700">Change Location</span>
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute bottom-full mb-2 right-0 bg-white rounded-2xl shadow-2xl p-6 z-50 w-80 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Select Your Location</h3>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Subtitle */}
              <p className="text-sm text-gray-600 mb-6">
                You are currently on the {currentLocation?.name} site
              </p>

              {/* Location Options */}
              <div className="space-y-3 mb-6">
                {locations.map((location) => (
                  <motion.button
                    key={location.code}
                    onClick={() => handleLocationChange(location.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedLocation === location.code
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl">{location.flag}</span>
                    <span className={`font-medium ${
                      selectedLocation === location.code
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}>
                      {location.name}
                    </span>
                    {selectedLocation === location.code && (
                      <svg className="w-5 h-5 ml-auto text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Confirm Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Confirm Location
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LocationSelector;
