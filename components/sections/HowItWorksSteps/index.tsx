"use client"
import React, { useState, useEffect } from 'react';
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
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll('[data-step]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      stepElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

        {/* Steps with Timeline */}
        <div className="relative">
          {/* Timeline Line - Left Side */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-gray-200">
            <motion.div
              className="absolute top-0 left-0 w-full bg-primary-500 origin-top"
              initial={{ scaleY: 0 }}
              animate={{
                scaleY: (activeStep + 1) / steps.length,
                transition: { duration: 0.5, ease: "easeOut" }
              }}
            />
          </div>

          {/* Timeline Dots */}
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className={`hidden lg:block absolute left-6 w-5 h-5 rounded-full transition-colors duration-300 ${index <= activeStep ? 'bg-primary-500' : 'bg-gray-300'
                }`}
              style={{
                top: `${(index * 100) / (steps.length - 1)}%`,
                transform: 'translateY(-50%)'
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            />
          ))}

          {/* Steps Content */}
          <div className="lg:ml-20 space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                data-step={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  {/* Step Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4"
                  >
                    Step {step.number}
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
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: "easeOut" as const,
                    delay: 0.2
                  }}
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
                      type: "spring" as const,
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
                      type: "spring" as const,
                      stiffness: 200
                    }}
                    className={`absolute -bottom-6 ${index % 2 === 0 ? '-left-6' : '-right-6'
                      } w-12 h-12 bg-pink-400 rounded-full opacity-15`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

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