"use client"
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from '@/components/AnimatedLogo';
import Image from 'next/image';

const HowItWorksCTA = () => {
  return (
    <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 rounded-3xl relative py-16 sm:py-20 overflow-hidden'
      >
        {/* Pink Star Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className='absolute right-6 top-6 w-16 sm:w-20 lg:w-24'
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 0.95, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/GlassStar.png"
              alt="Decorative glass star"
              width={96}
              height={96}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* Glassmorphism Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl shadow-2xl w-[90%] mx-auto p-8 sm:p-12 lg:p-16'
        >
          <div className="text-center space-y-8">
            {/* Animated Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <AnimatedLogo animateOnHover />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            >
              Crevoe for creators
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            >
              Your next big move begins with one small click. Join thousands building knowledge businesses and growing every day.
            </motion.p>

            {/* Single CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-50 text-primary-700 font-semibold px-14 py-2 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get started
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorksCTA;