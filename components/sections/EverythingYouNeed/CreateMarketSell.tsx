import { Check } from 'lucide-react';
import React from 'react';

const CreateMarketSell = () => {
  const checkList = [
    "Easy course creation with support for videos, quizzes, and downloadable materials.",
    "Built-in scheduling tools to manage classes, events, and reminders.",
    "Track progress with clear insights on lessons completed and scores.",
    "All-in-one dashboard for managing courses, students, and content with ease."
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          <span className="block">Create, market, and sell</span>
          <span className="block">online courses from a single</span>
          <span className="block">dashboard.</span>
        </h2>
      </div>

      {/* Description Section */}
      <div className="mt-4 sm:mt-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
          Whether you&apos;re a learner or instructor, Crevoe makes online learning seamless and powerful.
        </p>
      </div>

      {/* Checklist Section */}
      <div className="mt-6 sm:mt-8 md:mt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="space-y-0">
          {checkList.map((item: string, idx: number) => (
            <div
              key={idx}
              className="text-white border-t border-white/20 first:border-t-0 flex items-start gap-3 sm:gap-4 py-4 sm:py-5 md:py-6 max-w-full lg:max-w-4xl"
            >
              {/* Check Icon */}
              <div className="flex-shrink-0 mt-1">
                <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-200">
                  <Check className="text-[#DE2424] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </span>
              </div>

              {/* Text Content */}
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed flex-1 pt-1 sm:pt-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateMarketSell;