"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: "General",
    question: "What is Crevoe?",
    answer: "Crevoe is an all-in-one platform where creators can showcase content (Social), build and sell courses (Studio), and market digital products (Marketplace)."
  },
  {
    category: "General",
    question: "Is Crevoe free to use?",
    answer: "Crevoe is free to get started. With a free account, you can access a variety of powerful features designed to enhance your experience. For creators seeking to unlock advanced tools and maximize their potential, our paid plans provide even greater value. Explore our pricing section to discover the plan that best fits your goals."
  },
  {
    category: "General",
    question: "How do I sign up?",
    answer: "You can sign up using your email, Google account, or Apple ID."
  },
  {
    category: "General",
    question: "Can I use Crevoe on mobile?",
    answer: "Currently, Crevoe works best on desktop. We're actively building our mobile experience and will announce once it's ready. For now, we recommend using the web version on a laptop or desktop for the best experience."
  },
  {
    category: "General",
    question: "What countries are Crevoe available in?",
    answer: "Crevoe is accessible globally, but some features may be limited based on your location (e.g., payments or payouts)."
  },
  {
    category: "General",
    question: "How do I reset my password?",
    answer: "Click \"Forgot Password\" on the login page and follow the steps emailed to you."
  },
  {
    category: "General",
    question: "What kind of content can I publish?",
    answer: "For now, you can only publish video courses in the Studio Section. However, we are updating our platform for you to publish ebooks, audio books, and many more! Our platform serves as a complete hub for digital products—providing everything you need to create, manage, and grow your digital offerings in one convenient place."
  },
  {
    category: "General",
    question: "Can I interact with my students?",
    answer: "Yes, you can. With Crevoe Spaces, you can connect with your community effortlessly—engaging them, gathering feedback, and building meaningful relationships. Beyond interaction, you can send targeted emails, schedule calls, and host video conferences, creating a complete, all-in-one experience for engaging and supporting your students."
  },
  {
    category: "General",
    question: "Is Crevoe beginner-friendly?",
    answer: "Absolutely! Crevoe is designed to be all-inclusive and easy to use. Our features are simple to navigate, with step-by-step video guides available throughout the platform. And whenever you need extra support, our dedicated team is always ready to provide clear guidance and assistance."
  },
  {
    category: "General",
    question: "What makes Crevoe different from others?",
    answer: "At Crevoe, we put our users first. Whether you're a creator or a content consumer, the platform is designed to prioritize your experience at every step. For creators, powerful tools such as email outreach and other advanced features make it easier to grow, engage, and succeed."
  },

  {
    category: "Studio",
    question: "How do I create my first course?",
    answer: "Go to Studio > \"Create Course\" and follow the step-by-step builder to upload videos, and set pricing."
  },
  {
    category: "Studio",
    question: "Can I issue certificates to learners?",
    answer: "Not at this time. We're working on a certification feature, stay tuned!"
  },
  {
    category: "Studio",
    question: "How do I get paid for my courses?",
    answer: "You can set your course price and receive payments via our supported payment methods (via Paystack)."
  },
  {
    category: "Studio",
    question: "Can I host live classes?",
    answer: "Live classes are currently not supported."
  },
  {
    category: "Studio",
    question: "How do I track learner progress?",
    answer: "In your dashboard, you'll see analytics on lesson completions, quiz performance, and engagement."
  },
  {
    category: "Studio",
    question: "As an instructor, can I update or change my course after publishing it?",
    answer: "Crevoe gives you the flexibility you need to succeed. From updating your courses to rearranging modules to match your unique style, the platform adapts to you. And whenever you need clarity, our dedicated support team is always ready to provide the answers you need."
  },
  {
    category: "Studio",
    question: "Can I interact with my course instructor or classmates?",
    answer: "Yes, you can! At Crevoe, we believe learning is most impactful when done together. That's why we've built the platform to prioritize community—making it simple to reach your instructors for guidance and effortless to connect with classmates for collaboration and support."
  },

  {
    category: "Marketplace",
    question: "What kind of products can I sell on Crevoe?",
    answer: "For now, you can only sell courses through Crevoe Marketplace. We're working on adding support for other digital products like ebooks, templates, music files, and design assets, coming soon!"
  },
  {
    category: "Marketplace",
    question: "How are product payments handled?",
    answer: "Payments are processed through our secure system and settled to your wallet or bank based on your settings."
  },

  {
    category: "Social",
    question: "How do I post a video on Crevoe Social?",
    answer: "Tap the \"Upload post\" button in the app, upload, or record a video, and add hashtags, tags, and captions before publishing."
  },
  {
    category: "Social",
    question: "What are \"Likes,\" \"Reposts,\" and \"Follows\" used for?",
    answer: "These drive engagement and influence content recommendations and visibility across the platform."
  },
  {
    category: "Social",
    question: "How is my feed personalized?",
    answer: "Your For You feed is personalized based on your interests, watch time, and interactions."
  },
  {
    category: "Social",
    question: "Are there content guidelines?",
    answer: "Yes, all creators must follow our Community Guidelines to ensure a safe and respectful environment."
  },

  {
    category: "Payments",
    question: "How do I withdraw my earnings?",
    answer: "Go to Wallet > Withdraw. Choose your payout method and follow the prompts."
  },
  {
    category: "Payments",
    question: "What fees apply to transactions?",
    answer: "We charge a 10% platform fee. Payment processor fees may also apply."
  },

  {
    category: "Support",
    question: "How is my data protected on Crevoe?",
    answer: "We follow global best practices for data privacy and encryption. Read more in our Privacy Policy."
  },
  {
    category: "Support",
    question: "How can I report abuse or content violations?",
    answer: "Use the \"Report\" button on any content or contact support directly via the Help Centre."
  },
  {
    category: "Support",
    question: "How do I contact customer support?",
    answer: "Email us at support@crevoe.com or use the in-app Help button."
  }
];

const categories = ["All", "General", "Studio", "Marketplace", "Social", "Payments", "Support"];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

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
              Everything you need to know about Crevoe.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs sm:text-sm rounded-full border transition-colors duration-200 ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white border-primary-500"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <div className="flex flex-col items-start pr-4">
                    <span className="text-xs text-primary-600 font-medium mb-1">
                      {faq.category}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </div>
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
            <p className="text-base xl:text-lg text-gray-600 mb-6">
              Everything you need to know about Crevoe.
            </p>
            
            {/* Category Filter for Desktop */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Categories</h3>
              <div className="flex flex-col space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 text-sm rounded-lg text-left transition-colors duration-200 ${
                      selectedCategory === category
                        ? "bg-primary-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="flex-1 space-y-4 xl:space-y-6">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 xl:px-8 py-5 xl:py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <div className="flex flex-col items-start pr-6">
                    <span className="text-xs text-primary-600 font-medium mb-1">
                      {faq.category}
                    </span>
                    <span className="text-base xl:text-lg font-medium text-gray-900">
                      {faq.question}
                    </span>
                  </div>
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