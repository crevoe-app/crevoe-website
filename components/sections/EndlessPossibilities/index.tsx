import React from 'react';
import CourseManagementCard from './CourseManagementCard';
import VideoConferencingCard from './VideoConferencing';
import CommunityCard from './Community';
import EventSchedulingCard from './EventSchedulingCard';
import ContentDiscoveryCard from './ContentDiscoveryCard';
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => {

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Explore endless possibilities.
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Everything you need to teach, learn, and grow — built into one beautiful platform.
        </p>
      </motion.div>
      <div className='flex gap-4 items-stretch h-[80vh]'>
        <div className='basis-[25%] h-full'>
          <CourseManagementCard />
        </div>
        <div className='h-full flex-1 flex flex-col justify-between items-center gap-4'>
          <div className='flex items-start justify-between gap-4 space-y-4 basis-6/12'>
            <div className='basis-8/12'>
              <VideoConferencingCard />
            </div>
            <div className='flex-1'>
              <CommunityCard />
            </div>
          </div>
          <div className='flex items-stetch justify-between gap-2 flex-1'>
            <div className='basis-4/12'>
              <EventSchedulingCard />
            </div>
            <div className='flex-1'>
              <ContentDiscoveryCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;