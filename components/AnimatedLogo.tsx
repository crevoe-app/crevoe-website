"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface AnimatedLogoProps {
  animateOnHover?: boolean;
}

const AnimatedLogo = ({ animateOnHover }: AnimatedLogoProps) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const remainingLetters = ['r', 'e', 'v', 'o', 'e'];

  const containerVariants: Variants = {
    initial: {
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      width: 0,
      marginLeft: 0,
      scale: 0.9,
    },
    visible: (i: number) => ({
      opacity: 1,
      width: 'auto',
      marginLeft: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.01,
        ease: [0.25, 0.46, 0.45, 0.94],
        width: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    }),
    exit: (i: number) => ({
      opacity: 0,
      width: 0,
      marginLeft: 0,
      scale: 0.8,
      transition: {
        delay: (remainingLetters.length - i - 1) * 0.005,
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        width: {
          duration: 0.2,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    })
  };

  useEffect(() => {
    if (!animateOnHover) {
      setIsAnimating(true);
      const interval = setInterval(() => {
        setIsAnimating((prev) => !prev);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [animateOnHover]);

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="flex items-center bg-primary-600 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 cursor-pointer"
        variants={containerVariants}
        initial="initial"
        animate={isAnimating ? "hover" : "initial"}
        onMouseEnter={() => animateOnHover && setIsAnimating(true)}
        onMouseLeave={() => animateOnHover && setIsAnimating(false)}
      >
        <div className="flex items-center">
          <motion.div className="font-bold text-white flex items-center">
            <Image
              src={"./CrevoeLogoShort.svg"}
              alt='CrevoeLogoShort'
              width={20}
              height={20}
              className="sm:w-6 sm:h-6 md:w-7 md:h-7"
            />
          </motion.div>

          <AnimatePresence mode="wait">
            {isAnimating && (
              <div className="flex tracking-tighter">
                {remainingLetters.map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-[2.6rem] text-white inline-block overflow-hidden -mt-0.5 sm:-mt-1"
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ transformOrigin: 'left center', lineHeight: '0.7', letterSpacing: 0 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;