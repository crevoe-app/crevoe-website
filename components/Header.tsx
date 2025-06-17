"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div className="flex items-center flex-shrink-0 basis-4/12">
            <AnimatedLogo animateOnHover />
          </motion.div>

          <nav className="hidden md:flex items-center justify-center space-x-8 basis-4/12">
            <a href="#" className="text-gray-700 hover:text-primary-500 transition-colors">
              How it works
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-500 transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className='hidden md:flex justify-end items-center space-x-4 basis-4/12'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white font-semibold text-black px-6 lg:px-10 py-2 rounded-full border border-primary-400 transition-colors"
            >
              Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 font-semibold text-white px-4 lg:px-6 py-2 rounded-full hover:bg-primary-600 border border-primary-600 transition-colors"
            >
              Create Account
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="text-gray-700 p-2"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it works
                </a>
                <a
                  href="#"
                  className="block py-2 text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>

                {/* Mobile Buttons */}
                <div className="pt-4 space-y-3">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white font-semibold text-black py-3 rounded-full border border-primary-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-500 font-semibold text-white py-3 rounded-full hover:bg-primary-600 border border-primary-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Create Account
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;