"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is Crevoe free?",
    answer: "Yes, Crevoe offers a free tier with basic features. Premium plans are available for advanced functionality."
  },
  {
    question: "What kind of content can I publish?",
    answer: "You can publish various educational content including video courses, interactive tutorials, documents, and assessments."
  },
  {
    question: "Can I interact with my students?",
    answer: "Absolutely! Crevoe provides discussion forums, live chat, and video conferencing tools for student interaction."
  },
  {
    question: "Is it beginner-friendly?",
    answer: "Yes, Crevoe is designed with beginners in mind, featuring an intuitive interface and comprehensive onboarding."
  },
  {
    question: "How do I track my progress during a course?",
    answer: "Our platform provides detailed progress tracking with completion percentages, milestones, and performance analytics."
  },
  {
    question: "Can I interact with my course instructor or classmates?",
    answer: "Yes, you can engage through discussion boards, direct messaging, and scheduled office hours with instructors."
  },
  {
    question: "Can I update or change my course after publishing it as an instructor?",
    answer: "Yes, you can update course content, add new modules, and make improvements even after publishing."
  },
  {
    question: "What makes Crevoe different from other learning platforms?",
    answer: "Crevoe combines AI-powered personalization, interactive learning tools, and community features in one platform."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout (stacked) */}
        <div className="block lg:hidden">
          {/* Header Section */}
          <div className="mb-8 sm:mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Everything you need to know before joining.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (side by side) */}
        <div className="hidden lg:flex lg:items-start lg:justify-center lg:gap-8 xl:gap-12">
          {/* Header Section */}
          <div className="lg:basis-5/12 xl:basis-4/12 lg:sticky lg:top-8">
            <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4 xl:mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base xl:text-lg text-gray-600">
              Everything you need to know before joining.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="flex-1 space-y-4 xl:space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 xl:px-8 py-5 xl:py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="text-base xl:text-lg font-medium text-gray-900 pr-6">
                    {faq.question}
                  </span>
                  {openIndex === idx ? (
                    <ChevronUp className="w-5 h-5 xl:w-6 xl:h-6 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 xl:w-6 xl:h-6 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === idx && (
                  <div className="px-6 xl:px-8 pb-5 xl:pb-6">
                    <p className="text-base xl:text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;