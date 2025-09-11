"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PricingPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  isHighlighted?: boolean;
}

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: PricingPlan[] = [
    {
      name: "Free (Starter)",
      monthlyPrice: "₦0",
      annualPrice: "₦0",
      description: "Hobbyists, new creators testing the platform",
      features: [
        "14-day free trial (Pro features)",
        "60 mins per meeting, up to 100 users (trial only)",
        "Basic moderation tools (no collaboration)",
        "1 space (forever)",
        "Basic notifications",
        "No quizzes",
        "Nil branding customization",
        "No analytics after trial",
        "Forums & knowledge base",
        "Can list and sell courses",
        "Instant revenue access",
        "5% transaction fee",
        "Banner ads visible",
        "No priority listing"
      ],
      buttonText: "Get Started",
    },
    {
      name: "Basic",
      monthlyPrice: "₦20,000",
      annualPrice: "₦192,000",
      description: "Independent creators or small teams",
      features: [
        "Up to 10 courses (master/short series)",
        "60 mins per meeting, 100 participants / month",
        "Interactive classroom & moderation tools",
        "20 spaces",
        "Broadcast to subscribers & notifications",
        "Up to 10 quizzes",
        "Subdomain branding",
        "Basic insights",
        "Email support (within 2 business days)",
        "Can list and sell courses/products",
        "Instant revenue access",
        "3.5% transaction fee",
        "No banner ads",
        "Priority listing"
      ],
      buttonText: "Start Basic",
    },
    {
      name: "Pro",
      monthlyPrice: "₦40,000",
      annualPrice: "₦384,000",
      description: "Growing educators or small businesses scaling up",
      features: [
        "Unlimited courses",
        "10 hours per meeting, 100 participants / month",
        "SSO, branded classrooms, usage logs",
        "Unlimited + private spaces",
        "Advanced automation",
        "Unlimited quizzes & assessments",
        "Custom subdomain branding",
        "Engagement analytics & revenue breakdown",
        "Priority email (within 12 hrs) + webinars",
        "List & sell products",
        "Instant revenue access",
        "2.5% transaction fee",
        "No banner ads",
        "Priority listing"
      ],
      buttonText: "Start Pro",
      isPopular: true,
      isHighlighted: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      description: "Large institutions or teams with 1,000+ students",
      features: [
        "Fully customizable",
        "Custom meeting limits",
        "Advanced SSO, fully branded classrooms, detailed logs",
        "Tailored social groups",
        "Enterprise-level automation",
        "Full quizzes & assessments suite",
        "White-labeled, full theming",
        "Exportable reports, in-depth dashboards",
        "Dedicated CSM & SLA support",
        "Enterprise marketplace listing",
        "Instant revenue access",
        "0–2% or custom transaction fee",
        "No banner ads",
        "Priority listing"
      ],
      buttonText: "Contact Sales",
    }
  ];

  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Crevoe All-In-One Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Start with a 14-day free trial to explore everything Crevoe has to offer. After your trial ends, choose a plan that fits your goals and audience size.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-primary-500' : 'bg-gray-300'}`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-5 h-5 bg-white rounded-full shadow-md"
                animate={{
                  x: isAnnual ? 28 : 4
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm font-medium">
              Save 20%
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(`relative bg-white rounded-2xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300`,
                plan.isPopular && "bg-[#0aa5ed] text-white transform scale-105")}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 -right-3">
                  <Image
                    src="/popular.png"
                    alt="Popular"
                    width={80}
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-xl font-bold mb-2 ${plan.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className={`text-4xl font-bold ${plan.isHighlighted ? 'text-white' : 'text-gray-900'}`}>
                  {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className={`text-lg ${plan.isHighlighted ? 'text-white/80' : 'text-gray-500'}`}>
                  {isAnnual ? '/year' : '/month'}
                </span>
              </div>

              {/* Description */}
              <p className={`text-sm mb-6 ${plan.isHighlighted ? 'text-white/80' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.isHighlighted ? 'text-white' : 'text-green-500'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-sm ${plan.isHighlighted ? 'text-white/90' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-sm font-semibold transition-colors duration-200 ${plan.isHighlighted
                  ? 'bg-white text-primary-600 hover:bg-gray-50'
                  : 'bg-primary-500 text-white hover:bg-primary-600'}`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;