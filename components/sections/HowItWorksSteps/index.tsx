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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll('[data-step]');
      if (stepElements.length === 0) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentActiveStep = 0;
      let progress = 0;

      // Find which step is currently active
      stepElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          currentActiveStep = index;
          
          // Calculate progress within the current step
          const stepProgress = (scrollPosition - elementTop) / rect.height;
          progress = index + Math.min(Math.max(stepProgress, 0), 1);
        }
      });

      // Handle case where scroll is before first step
      const firstElement = stepElements[0];
      const firstRect = firstElement.getBoundingClientRect();
      const firstTop = firstRect.top + window.scrollY;
      
      if (scrollPosition < firstTop) {
        progress = 0;
        currentActiveStep = 0;
      }

      // Handle case where scroll is after last step
      const lastElement = stepElements[stepElements.length - 1];
      const lastRect = lastElement.getBoundingClientRect();
      const lastBottom = lastRect.top + window.scrollY + lastRect.height;
      
      if (scrollPosition > lastBottom) {
        progress = stepElements.length;
        currentActiveStep = stepElements.length - 1;
      }

      setActiveStep(currentActiveStep);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

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
          {/* Background Timeline Line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full"></div>

          {/* Animated Progress Line */}
          <motion.div
            className="hidden lg:block absolute left-8 top-0 w-1 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-600 rounded-full origin-top shadow-lg"
            style={{
              height: `${Math.min((scrollProgress / steps.length) * 100, 100)}%`,
            }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 30,
              mass: 0.8
            }}
          />

          {/* Timeline Dots */}
          {steps.map((_, index) => {
            const dotProgress = Math.max(0, Math.min(1, scrollProgress - index));
            const isActive = scrollProgress > index;
            const isCompleted = scrollProgress > index + 0.8;
            
            return (
              <motion.div
                key={index}
                className="hidden lg:block absolute left-6 w-5 h-5 rounded-full border-2 transition-all duration-500 ease-out z-10"
                style={{
                  top: `${(index * 100) / (steps.length - 1)}%`,
                  transform: 'translateY(-50%)',
                  backgroundColor: isActive ? '#3B82F6' : '#E5E7EB',
                  borderColor: isCompleted ? '#1D4ED8' : isActive ? '#3B82F6' : '#D1D5DB',
                  scale: isActive ? 1.2 : 1,
                  boxShadow: isActive ? '0 0 20px rgba(59, 130, 246, 0.4)' : 'none'
                }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: isActive ? 1.2 : 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Inner dot for completed steps */}
                {isCompleted && (
                  <motion.div
                    className="absolute inset-1 bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                )}
                
                {/* Pulsing ring for active step */}
                {isActive && !isCompleted && (
                  <motion.div
                    className="absolute inset-0 bg-primary-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0.2, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Steps Content */}
          <div className="lg:ml-20 space-y-32">
            {steps.map((step, index) => {
              const stepProgress = Math.max(0, Math.min(1, scrollProgress - index));
              const isInView = stepProgress > 0;
              
              return (
                <motion.div
                  key={step.number}
                  data-step={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                  style={{
                    opacity: isInView ? 1 : 0.7,
                    transform: `translateY(${isInView ? 0 : 20}px)`,
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                  }}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {/* Step Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-500 ${
                        isInView 
                          ? 'bg-primary-100 text-primary-700 shadow-lg' 
                          : 'bg-gray-100 text-gray-500'
                      }`}
                      style={{
                        transform: `scale(${isInView ? 1 : 0.95})`,
                      }}
                    >
                      Step {step.number}
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className={`text-3xl lg:text-4xl font-bold leading-tight transition-colors duration-500 ${
                        isInView ? 'text-gray-900' : 'text-gray-600'
                      }`}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className={`text-lg leading-relaxed transition-colors duration-500 ${
                        isInView ? 'text-gray-600' : 'text-gray-400'
                      }`}
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
                    style={{
                      transform: `scale(${isInView ? 1 : 0.95}) translateY(${isInView ? 0 : 10}px)`,
                      transition: 'transform 0.6s ease-out'
                    }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                      className={`relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden transition-all duration-500 ${
                        isInView ? 'shadow-2xl' : 'shadow-lg'
                      }`}
                    >
                      <Image
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      
                      {/* Progress overlay */}
                      <motion.div
                        className="absolute inset-0 bg-primary-500/5"
                        style={{
                          opacity: stepProgress * 0.1
                        }}
                      />
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
                      className={`absolute -top-4 ${
                        index % 2 === 0 ? '-right-4' : '-left-4'
                      } w-8 h-8 rounded-full transition-all duration-500 ${
                        isInView ? 'bg-primary-500 opacity-20' : 'bg-gray-400 opacity-10'
                      }`}
                      style={{
                        scale: isInView ? 1 : 0.8
                      }}
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
                      className={`absolute -bottom-6 ${
                        index % 2 === 0 ? '-left-6' : '-right-6'
                      } w-12 h-12 rounded-full transition-all duration-500 ${
                        isInView ? 'bg-pink-400 opacity-15' : 'bg-gray-400 opacity-8'
                      }`}
                      style={{
                        scale: isInView ? 1 : 0.8
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
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