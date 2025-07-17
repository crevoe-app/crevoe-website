"use client"
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from '@/components/AnimatedLogo';
import PricingSection from '@/components/sections/PricingSection';
import PricingComparison from '@/components/sections/PricingComparison';
import HowItWorksCTA from '@/components/sections/HowItWorksCTA';
import Faq from '@/components/sections/Faq';

const Pricing = () => {
  return (
    <>
      <PricingSection />
      <PricingComparison />
      <HowItWorksCTA>
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
            Not sure what plan is for you?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Take a short quiz and we&apos;ll recommend the best plan for your business.
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
              Find my plan
            </motion.button>
          </motion.div>
        </div>
      </HowItWorksCTA>
      <Faq />
    </>
  );
};

export default Pricing;