"use client"
import React from 'react';
import FloatingElement from './FloatingElement';
import { motion } from 'framer-motion';
import { Video, Users, ShoppingBag, MessageSquare } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-16 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
        <div className="text-center relative z-10 mt-8 sm:mt-12 lg:mt-20">
          <div className="mb-6 sm:mb-8">
            <AnimatedLogo />
          </div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight sm:leading-relaxed px-4"
          >
            Create. Connect. Learn. Earn.
            <br />
            <span className="text-gray-700 mt-1 sm:mt-2 inline-block">All in One Place.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Crevoe is the all-in-one platform where creators build powerful courses, learners grow
            in engaged communities, and everyone thrives together.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-primary-500 font-semibold text-white px-8 sm:px-6 py-3 sm:py-2 rounded-full hover:bg-primary-600 border border-primary-600 transition-colors"
            >
              Start Creating
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white font-semibold text-black px-8 sm:px-10 py-3 sm:py-2 rounded-full border border-primary-400 transition-colors"
            >
              Browse Courses
            </motion.button>
          </motion.div>
        </div>

        <div className="hidden lg:block">
          <FloatingElement className="top-32 left-64" delay={0.2}>
            <div className="bg-transparent border border-primary-200 px-2 pr-6 py-2 rounded-lg flex items-center gap-2 shadow-lg">
              <div className='bg-orange-100 p-2 rounded-lg'>
                <Video size={20} className='text-[#FFB800]' fill='#FFB800' />
              </div>
              <span className="font-medium text-black">Video conferencing</span>
            </div>
          </FloatingElement>

          <FloatingElement className="top-60 right-40" delay={0.4}>
            <div className="bg-transparent border border-primary-200 px-2 pr-6 py-2 rounded-lg flex items-center gap-2 shadow-lg">
              <div className='bg-[#DCF4FF] p-2 rounded-lg'>
                <ShoppingBag size={20} className='text-[#01B8C7]' stroke='#01B8C7' />
              </div>
              <span className="font-medium">Marketplace</span>
            </div>
          </FloatingElement>

          <motion.img
            className='absolute top-32 right-14'
            src={"./assets/PinkStar.svg"}
          />

          <FloatingElement className="bottom-40 left-20" delay={0.6}>
            <div className="bg-transparent border border-primary-200 px-2 pr-6 py-2 rounded-lg flex items-center gap-2 shadow-lg">
              <div className='bg-[#e7f9dd] p-2 rounded-lg'>
                <Users size={20} fill='#64D71E' className='text-[#64D71E]' />
              </div>
              <span className="font-medium">Community</span>
            </div>
          </FloatingElement>

          <FloatingElement className="bottom-32 right-10" delay={0.8}>
            <div className="bg-transparent border border-primary-200 px-2 pr-6 py-2 rounded-lg flex items-center gap-2 shadow-lg">
              <div className='bg-[#ffdcea] p-2 rounded-lg'>
                <MessageSquare size={20} fill='#fd1674' className='text-[#fd1674]' />
              </div>
              <span className="font-medium">Social feeds</span>
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;