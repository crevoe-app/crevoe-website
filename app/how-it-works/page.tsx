"use client"
import React from 'react';
import HowItWorksHero from '@/components/sections/HowItWorksHero';
import HowItWorksSteps from '@/components/sections/HowItWorksSteps';
import HowItWorksCTA from '@/components/sections/HowItWorksCTA';
import { motion } from 'framer-motion';
import AnimatedLogo from '@/components/AnimatedLogo';
import Faq from '@/components/sections/Faq';

const HowItWorks = () => {
  const heroContent = {
    title: "Lorem ipsum Lorem ipsum",
    subtitle: "Lorem ipsum",
    description: "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
    ctaText: "Start Creating",
    ctaLink: "#",
    images: [
      {
        src: "/HowToVideo.png",
        alt: "How to video demonstration"
      },
      {
        src: "/MoreInsight.png",
        alt: "More insight analytics dashboard"
      }
    ]
  };

  const stepsContent = {
    title: "How it works",
    subtitle: "Everything you need to teach, learn, and grow — built into one beautiful platform.",
    steps: [
      {
        number: "1",
        title: "Create Your Course",
        description: "Build engaging courses with our intuitive course builder. Add videos, quizzes, assignments, and interactive content to create a comprehensive learning experience for your students.",
        imageSrc: "/SectionOne.png",
        imageAlt: "Course creation interface showing video upload and content organization"
      },
      {
        number: "2",
        title: "Engage Your Students",
        description: "Connect with your students through live sessions, discussions, and personalized feedback. Track their progress and provide support when they need it most.",
        imageSrc: "/SectionTwo.png",
        imageAlt: "Student engagement dashboard with live session and discussion features"
      },
      {
        number: "3",
        title: "Grow Your Business",
        description: "Scale your teaching business with powerful analytics, marketing tools, and automated workflows. Turn your knowledge into a thriving online education business.",
        imageSrc: "/SectionThree.png",
        imageAlt: "Business growth analytics showing revenue and student enrollment metrics"
      }
    ]
  };

  return (
    <>
      <HowItWorksHero {...heroContent} />
      <HowItWorksSteps {...stepsContent} />
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
            Crevoe for Learners
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
      </HowItWorksCTA>
      <Faq />
    </>
  );
};

export default HowItWorks;