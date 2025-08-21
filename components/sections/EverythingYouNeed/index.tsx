import React from 'react'
import { motion } from 'framer-motion';
import TabSystem from './TabSystem';

const EverythingYouNeed = () => {
  return (
    <div className="min-h-screen bg-[#001521] py-8 sm:py-12 lg:py-16  relative overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute right-0 top-0 w-1/2 sm:w-1/3 lg:w-1/4 opacity-30 sm:opacity-50 lg:opacity-100"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full h-96 bg-gradient-to-l from-pink-500/20 to-transparent rounded-l-full"></div>
      </motion.div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Everything you need to create your course
          </motion.h2>
          <motion.p
            className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build, publish, schedule, and engage — all from your personal Creator Dashboard.
          </motion.p>
        </div>

        {/* Infinite Cards Section */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
         <TabSystem/>
        </motion.div>


        <div className="h-8 sm:h-12 lg:h-16"></div>
      </div>

      {/* Bottom gradient overlay for mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#001521] to-transparent lg:hidden"></div>
    </div>
  );
};

export default EverythingYouNeed;