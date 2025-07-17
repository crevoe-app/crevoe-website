"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HowItWorksHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const HowItWorksHero = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  images
}: HowItWorksHeroProps) => {
  return (
    <section className="py-16 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-3 font-bold text-gray-900 leading-tight">
                {title}{' '}
                <span className="text-primary-500">{subtitle}</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {description}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
            >
              {ctaText}
            </motion.button>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[650px]">
              {/* Main background image */}
              {images[0] && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden flex justify-end">
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    className="object-cover right-0 relative"
                    priority
                  />
                </div>
              )}

              {/* Overlay insight card */}
              {images[1] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-4 left-4 lg:bottom-8 lg:-left-24 w-72 lg:w-72 h-72 lg:h-80 rounded-xl"
                >
                  <Image
                    src={images[1].src}
                    alt={images[1].alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;