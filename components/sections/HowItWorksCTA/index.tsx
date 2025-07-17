"use client"
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from '@/components/AnimatedLogo';
import Image from 'next/image';

const HowItWorksCTA = ({ children }: { children: React.ReactNode }) => {
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

          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowItWorksCTA;