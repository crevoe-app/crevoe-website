"use client"
import React from 'react';
import { motion } from 'framer-motion';

interface ComparisonFeature {
  name: string;
  basic: string | boolean;
  advance1: string | boolean;
  advance2: string | boolean;
  plan: string | boolean;
}

const PricingComparison = () => {
  const features: ComparisonFeature[] = [
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: "Feature text goes here",
      advance2: "Feature text goes here",
      plan: "Feature text goes here"
    },
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: "Feature text goes here",
      advance2: "Feature text goes here",
      plan: "Feature text goes here"
    },
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: "Feature text goes here",
      advance2: "Feature text goes here",
      plan: "Feature text goes here"
    },
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: "Feature text goes here",
      advance2: "Feature text goes here",
      plan: "Feature text goes here"
    },
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: "Feature text goes here",
      advance2: "Feature text goes here",
      plan: "Feature text goes here"
    },
    {
      name: "Feature text goes here",
      basic: true,
      advance1: true,
      advance2: true,
      plan: true
    },
    {
      name: "Feature text goes here",
      basic: true,
      advance1: true,
      advance2: true,
      plan: true
    },
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: true,
      advance2: true,
      plan: true
    },
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: true,
      advance2: true,
      plan: true
    },
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: true,
      advance2: true,
      plan: true
    },
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: true,
      advance2: true,
      plan: true
    },
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: "Feature text goes here",
      advance2: "Feature text goes here",
      plan: "Feature text goes here"
    },
    {
      name: "Feature text goes here",
      basic: "Feature text goes here",
      advance1: "Feature text goes here",
      advance2: true,
      plan: true
    },
    {
      name: "Feature text goes here",
      basic: true,
      advance1: true,
      advance2: true,
      plan: true
    }
  ];

  const renderCell = (value: string | boolean, isHeader: boolean = false, isPlan: boolean = false) => {
    if (typeof value === 'boolean' && value) {
      return (
        <div className="flex justify-center">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      );
    }

    return (
      <span className={`text-sm ${isHeader ? 'font-semibold text-white' : isPlan ? 'text-gray-700' : 'text-gray-600'}`}>
        {value as string}
      </span>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto"
        >
          <div className="min-w-full">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-0 mb-0">
              <div className="bg-gray-100 p-4 border-r border-gray-200"></div>
              <div className="bg-blue-500 p-4 text-center border-r border-blue-400">
                <span className="font-semibold text-white">Basic</span>
              </div>
              <div className="bg-blue-500 p-4 text-center border-r border-blue-400">
                <span className="font-semibold text-white">Advance</span>
              </div>
              <div className="bg-blue-500 p-4 text-center border-r border-blue-400">
                <span className="font-semibold text-white">Advance</span>
              </div>
              <div className="bg-pink-400 p-4 text-center relative">
                <span className="font-semibold text-white">Plan</span>
                <div className="absolute top-2 right-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`grid grid-cols-5 gap-0 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <div className="p-4 border-r border-gray-200 bg-gray-50">
                  <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                </div>
                <div className="p-4 border-r border-gray-200 text-center">
                  {renderCell(feature.basic)}
                </div>
                <div className="p-4 border-r border-gray-200 text-center">
                  {renderCell(feature.advance1)}
                </div>
                <div className="p-4 border-r border-gray-200 text-center">
                  {renderCell(feature.advance2)}
                </div>
                <div className="p-4 text-center bg-pink-100">
                  {renderCell(feature.plan, false, true)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingComparison;