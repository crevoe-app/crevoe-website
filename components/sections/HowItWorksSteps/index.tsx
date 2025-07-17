"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Step {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface HowItWorksStepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

const HowItWorksSteps: React.FC<HowItWorksStepsProps> = ({
  title,
  subtitle,
  steps
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        delay: 0.2
      }
    }
  };

  const numberVariants = {
    hidden: {
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: 0.1
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-20 lg:space-y-32"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  variants={numberVariants}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white text-2xl font-bold rounded-full mb-4"
                >
                  {step.number}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  {step.description}
                </motion.p>
              </div>

              {/* Image */}
              <motion.div
                variants={imageVariants}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay gradient for better visual appeal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200
                  }}
                  className={`absolute -top-4 ${index % 2 === 0 ? '-right-4' : '-left-4'
                    } w-8 h-8 bg-primary-500 rounded-full opacity-20`}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className={`absolute -bottom-6 ${index % 2 === 0 ? '-left-6' : '-right-6'
                    } w-12 h-12 bg-pink-400 rounded-full opacity-15`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20 lg:mt-24"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;