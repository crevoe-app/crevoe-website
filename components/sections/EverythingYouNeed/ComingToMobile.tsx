"use client";
import { motion } from "framer-motion";
import HowItWorksCTA from "../HowItWorksCTA";
import AnimatedLogo from "@/components/AnimatedLogo";
import Link from "next/link";

const ComingToMobile = () => {
  return (
    <section className="w-full mx-auto md:px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <HowItWorksCTA>
        <div className=" space-y-8 flex flex-col md:grid md:grid-cols-2  ">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex my-5"
            >
              <AnimatedLogo animateOnHover />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight"
            >
              Coming soon to your Mobile Stores!
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            >
              Your next big move begins with one small click. Join thousands
              building knowledge businesses and growing every day.
            </motion.p>

            {/* Single CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-50 text-primary-700 font-semibold md:px-14 px-5 py-2 rounded-full md:text-lg text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              >
              <Link href="https://app.crevoe.com/socials" target="_blank" rel="noopener noreferrer">
                
                Get started
                </Link>
              </motion.button>
            </motion.div>
          </div>
          <div >
            <motion.img
              className=" flex md:absolute md:-top-40 z-50 md:shadow"
              src="/rectangle.svg"
              alt="Content"
              variants={{
                initial: { opacity: 0, scale: 0.8, x: 0, y: 0 },
                hover: { opacity: 1, scale: 1.5, y: -40 },
              }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </HowItWorksCTA>
    </section>
  );
};

export default ComingToMobile;
