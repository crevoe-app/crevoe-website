"use client"
import React from "react";
import { motion } from "framer-motion";

interface ComparisonFeature {
  name: string;
  free: string | boolean;
  basic: string | boolean;
  pro: string | boolean;
  enterprise: string | boolean;
}

const PricingComparison = () => {
  const features: ComparisonFeature[] = [
    { name: "Price", free: "₦0/mo", basic: "₦20,000/mo", pro: "₦40,000/mo", enterprise: "Custom" },
    { name: "Target Users", free: "Hobbyists, testers", basic: "Independent creators, small teams", pro: "Growing educators, small businesses", enterprise: "Large institutions" },
    { name: "Free Trial", free: "14-day Pro trial", basic: "14-day Pro trial", pro: "14-day Pro trial", enterprise: "Custom" },
    { name: "Meeting Duration", free: "60 mins / 100 users (trial only)", basic: "60 mins / 100 participants/mo", pro: "10 hrs / 100 participants/mo", enterprise: "Custom" },
    { name: "Courses", free: "Can list & sell courses", basic: "Up to 10 courses", pro: "Unlimited courses", enterprise: "Fully customizable" },
    { name: "Spaces", free: "1 space (forever)", basic: "20 spaces", pro: "Unlimited + private", enterprise: "Tailored" },
    { name: "Moderation Tools", free: "Basic only", basic: "Interactive tools", pro: "Advanced tools", enterprise: "Enterprise-level" },
    { name: "Collaboration", free: false, basic: true, pro: true, enterprise: true },
    { name: "Notifications", free: "Basic only", basic: "Broadcasts & notifications", pro: "Advanced automation", enterprise: "Enterprise automation" },
    { name: "Quizzes & Assessments", free: false, basic: "Up to 10", pro: "Unlimited", enterprise: "Full suite" },
    { name: "Branding", free: "None", basic: "Subdomain branding", pro: "Custom subdomain branding", enterprise: "White-label + full theming" },
    { name: "Analytics", free: "Trial only", basic: "Basic insights", pro: "Engagement + revenue breakdown", enterprise: "Exportable reports & dashboards" },
    { name: "Support", free: "Forums & knowledge base", basic: "Email (2 business days)", pro: "Priority email (12 hrs) + webinars", enterprise: "Dedicated CSM & SLA" },
    { name: "Marketplace Listing", free: "Standard listing", basic: "Priority listing", pro: "Priority listing", enterprise: "Enterprise listing" },
    { name: "Products", free: "Can sell courses", basic: "Courses & products", pro: "Courses & products", enterprise: "Courses & products" },
    { name: "Revenue Access", free: "Instant", basic: "Instant", pro: "Instant", enterprise: "Instant" },
    { name: "Transaction Fee", free: "5%", basic: "3.5%", pro: "2.5%", enterprise: "0–2% or custom" },
    { name: "Banner Ads", free: "Visible", basic: "No ads", pro: "No ads", enterprise: "No ads" },
    { name: "SSO / Security", free: false, basic: false, pro: "SSO, logs", enterprise: "Advanced SSO, logs" },
  ];

  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      ) : (
        <span className="text-gray-400">—</span>
      );
    }
    return <span className="text-sm text-gray-700">{value}</span>;
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-full">
            {/* Header Row */}
            <div className="grid grid-cols-5">
              <div className="bg-gray-100 p-4"></div>
              {["Free", "Basic", "Pro", "Enterprise"].map((plan, idx) => (
                <div key={idx} className="bg-primary-500 p-4 text-center text-white font-semibold">
                  {plan}
                </div>
              ))}
            </div>
            {/* Feature Rows */}
            {features.map((feature, idx) => (
              <div key={idx} className={`grid grid-cols-5 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                <div className="p-4 border-r font-medium text-gray-700">{feature.name}</div>
                <div className="p-4 text-center border-r">{renderCell(feature.free)}</div>
                <div className="p-4 text-center border-r">{renderCell(feature.basic)}</div>
                <div className="p-4 text-center border-r">{renderCell(feature.pro)}</div>
                <div className="p-4 text-center">{renderCell(feature.enterprise)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="block md:hidden space-y-6">
          {["Free", "Basic", "Pro", "Enterprise"].map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border rounded-xl shadow-sm p-5"
            >
              <h3 className="text-xl font-bold text-primary-600 mb-4">{plan}</h3>
              <ul className="space-y-3">
                {features.map((feature, fIdx) => {
                  const value =
                    plan === "Free"
                      ? feature.free
                      : plan === "Basic"
                      ? feature.basic
                      : plan === "Pro"
                      ? feature.pro
                      : feature.enterprise;
                  return (
                    <li key={fIdx} className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm text-gray-600">{feature.name}</span>
                      <div>{renderCell(value)}</div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingComparison;
