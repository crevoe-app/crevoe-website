"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, Grid3X3, ExternalLink } from "lucide-react"
import ScrollUploadComponent from "./ScrollUploadComponent"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function CourseManagementCard() {
  const [uploadProgress, setUploadProgress] = useState(75)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    "Easy course creation with support for videos, quizzes, and downloadable materials.",
    "Built-in scheduling tools to manage classes, events, and reminders.",
    "Track progress with clear insights on lessons completed and scores.",
    "All-in-one dashboard for managing courses, students, and content with ease.",
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  const rightPanelVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  }

  return (
    <div className="h-auto relative py-20 bg-white shadow p-8">
      <div className="md:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p
                className="text-primary font-medium text-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Course Creation
              </motion.p>
              <motion.h1
                className="md:text-4xl text-xl font-bold text-primary leading-tight"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Course Upload and Management
              </motion.h1>
              <motion.p className="text-gray-600 md:text-lg leading-relaxed" variants={itemVariants}>
                Organize your courses and content in one streamlined dashboard.
              </motion.p>
            </motion.div>

            <motion.div className="space-y-4 divide-y divide-primary-100" variants={containerVariants}>
              {features.map((feature, index) => (
              
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 group py-4 first:pt-0 last:pb-0 "
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5"
                    whileHover={{ scale: 1.1, backgroundColor: "#dcfce7" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Check className="w-3 h-3 text-primary-600" />
                  </motion.div>
                  <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <div className=" md:relative ">

          <motion.img
                   className=" flex  md:items-end md:justify-end md:absolute md:-right-10 "
                   src="/module.svg"
                   alt="Conten"
                   variants={{
                     initial: { opacity: 0, scale: 0.8, x: 0, y: 0 },
                     hover: { opacity: 1, scale: 1.5, y: -40 }
                   }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 0.2 }}
                 />
                 <ScrollUploadComponent/>
                 </div>
        </div>
      </div>
    </div>
  )
}
