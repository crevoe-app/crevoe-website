"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import AnimatedLogo from "./AnimatedLogo";
import Link from "next/link";
import { ChevronDown, BookOpen, MessageCircle, Headphones } from "lucide-react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div className="flex items-center flex-shrink-0 basis-4/12">
            <Link href="/">
              <AnimatedLogo animateOnHover />
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center justify-center space-x-8 basis-4/12">
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={toggleResources}
                className={`flex items-center space-x-1 transition-colors ${
                  isActive("/how-it-works") || isActive("/blog") || isActive("/support")
                    ? "text-primary-500"
                    : "text-gray-700 hover:text-primary-500"
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <Link
                      href="/how-it-works"
                      className={`flex items-center px-4 py-2 text-sm transition-colors ${
                        isActive("/how-it-works")
                          ? "text-primary-500 bg-primary-50"
                          : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Guides & How-tos
                    </Link>
                    <Link
                      href="/blog"
                      className={`flex items-center px-4 py-2 text-sm transition-colors ${
                        isActive("/blog")
                          ? "text-primary-500 bg-primary-50"
                          : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Blog
                    </Link>
                    <Link
                      href="/support"
                      className={`flex items-center px-4 py-2 text-sm transition-colors ${
                        isActive("/support")
                          ? "text-primary-500 bg-primary-50"
                          : "text-gray-700 hover:text-primary-500 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <Headphones className="w-4 h-4 mr-2" />
                      Support
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/pricing"
              className={`transition-colors ${
                isActive("/pricing") ? "text-primary-500" : "text-gray-700 hover:text-primary-500"
              }`}
            >
              Pricing
            </Link>
          </nav>


          {/* Desktop Buttons */}
          <div className="hidden md:flex justify-end items-center space-x-4 basis-4/12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white font-semibold text-black px-6 lg:px-10 py-2 rounded-full border border-primary-400 transition-colors"
            >
             <Link href="https://app.crevoe.com/auth?tab=signin" target="_blank" rel="noopener noreferrer">
              Login
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 font-semibold text-white px-4 lg:px-6 py-2 rounded-full hover:bg-primary-600 border border-primary-600 transition-colors"
            >
               <Link href="https://app.crevoe.com/auth?tab=signup" target="_blank" rel="noopener noreferrer">
              Create Account
              </Link>
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
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="py-2">
                  <div className="text-sm font-medium text-gray-500 mb-2">Resources</div>
                  <div className="pl-4 space-y-1">
                    <Link
                      href="/how-it-works"
                      className={`flex items-center py-2 hover:bg-gray-50 rounded-md transition-colors ${
                        isActive("/how-it-works") ? "text-primary-500" : "text-gray-700 hover:text-primary-500"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Guides & How-tos
                    </Link>
                    <Link
                      href="/blog"
                      className={`flex items-center py-2 hover:bg-gray-50 rounded-md transition-colors ${
                        isActive("/blog") ? "text-primary-500" : "text-gray-700 hover:text-primary-500"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Blog
                    </Link>
                    <Link
                      href="/support"
                      className={`flex items-center py-2 hover:bg-gray-50 rounded-md transition-colors ${
                        isActive("/support") ? "text-primary-500" : "text-gray-700 hover:text-primary-500"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Headphones className="w-4 h-4 mr-2" />
                      Support
                    </Link>
                  </div>
                </div>

                <Link
                  href="/pricing"
                  className={`block py-2 hover:bg-gray-50 rounded-md transition-colors ${
                    isActive("/pricing") ? "text-primary-500" : "text-gray-700 hover:text-primary-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>

                {/* Mobile Buttons */}
                <div className="pt-4 space-y-3">
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white font-semibold text-black py-3 rounded-full border border-primary-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
             <Link href="https://app.crevoe.com/auth?tab=signin" target="_blank" rel="noopener noreferrer">
                    Login
                    </Link>
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-500 font-semibold text-white py-3 rounded-full hover:bg-primary-600 border border-primary-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
               <Link href="https://app.crevoe.com/auth?tab=signup" target="_blank" rel="noopener noreferrer">
                    Create Account
                    </Link>
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
