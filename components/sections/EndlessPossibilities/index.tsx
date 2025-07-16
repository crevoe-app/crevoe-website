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
        className="text-center mb-8 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
          Explore endless possibilities.
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
          Everything you need to teach, learn, and grow — built into one beautiful platform.
        </p>
      </motion.div>

      {/* Mobile Layout (< lg) */}
      <div className='lg:hidden flex flex-col gap-4'>
        <div className='w-full'>
          <CourseManagementCard />
        </div>
        <div className='w-full mb-6'>
          <VideoConferencingCard />
        </div>
        <div className='w-full'>
          <CommunityCard />
        </div>
        <div className='w-full'>
          <EventSchedulingCard />
        </div>
        <div className='w-full'>
          <ContentDiscoveryCard />
        </div>
      </div>

      {/* Desktop Layout (>= lg) */}
      <div className='hidden lg:flex gap-4 items-stretch h-[80vh]'>
        <div className='basis-[25%] h-full'>
          <CourseManagementCard />
        </div>
        <div className='h-full flex-1 flex flex-col justify-between items-center gap-4'>
          <div className='flex items-center justify-between gap-4 basis-6/12 w-full'>
            <div className='basis-8/12'>
              <VideoConferencingCard />
            </div>
            <div className='flex-1 mt-2'>
              <CommunityCard />
            </div>
          </div>
          <div className='flex items-stretch justify-between gap-4 flex-1 w-full'>
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