import React from 'react';
import CourseManagementCard from './CourseManagementCard';
import VideoConferencingCard from './VideoConferencing';
import CommunityCard from './Community';
import EventSchedulingCard from './EventSchedulingCard';
import ContentDiscoveryCard from './ContentDiscoveryCard';
import { motion } from 'framer-motion';
import VideoCommunitySection from './VideoCommunity';
import LmsSection from './LmsSection';

const FeaturesSection: React.FC = () => {

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
          Explore endless possibilities.
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Everything you need to teach, learn, and grow — built into one beautiful platform.
        </p>
      </motion.div>

     
          <CourseManagementCard />
          <VideoCommunitySection/>
          <LmsSection/>

      
    </div>
  );
};

export default FeaturesSection;