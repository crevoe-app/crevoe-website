import React from 'react'
import People from './People'

const WhatPeopleAreSaying = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 xl:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            What people are saying
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto px-4 sm:px-0">
            Join thousands of learners and instructors who are transforming the way they learn and teach with Crevoe.
          </p>
        </div>

        {/* People Component */}
        <div className="w-full">
          <People />
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors duration-200 text-sm sm:text-base">
              Start Learning Today
            </button>
            <button className="px-6 py-3 sm:px-8 sm:py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-colors duration-200 text-sm sm:text-base">
              Become an Instructor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleAreSaying;