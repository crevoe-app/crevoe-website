"use client"
import BlogLayout from "@/components/blog/BlogLayout";
import BlogPageClient from "@/components/blog/BlogPageClient";
import LatestArticles from "@/components/blog/LatestArticles";
import { motion } from 'framer-motion';
import AnimatedLogo from '@/components/AnimatedLogo';
import HowItWorksCTA from "@/components/sections/HowItWorksCTA";

export default function BlogPage() {
  return (
    <BlogLayout>
      <BlogPageClient />
      <HowItWorksCTA>
        <div className="text-center space-y-8">
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <AnimatedLogo animateOnHover />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
          >
            Stay Updated with Crevoe
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Get the latest insights on e-learning, education technology, and teaching strategies
            delivered to your inbox weekly.
          </motion.p>

          {/* Single CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pt-4"
          >

          </motion.div>
        </div>
      </HowItWorksCTA>
      <LatestArticles />
    </BlogLayout>
  );
}