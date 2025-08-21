"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import CreateMarketSell from "./CreateMarketSell"
import CourseModule from "./CourseModule"

interface TabSystemProps {
  className?: string
}

const TabSystem = ({ className }: TabSystemProps) => {
  const [activeTab, setActiveTab] = useState("LMS")

  const tabs = [
    { id: "LMS", label: "LMS" },
    { id: "Video Conferencing", label: "Video Conferencing" },
    { id: "Community", label: "Community" },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case "LMS":
        return (
          <motion.div
            key="lms"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="w-full">
                <CreateMarketSell />
              </div>
              <div className="w-full">
                <CourseModule />
              </div>
            </div>
          </motion.div>
        )

      case "Video Conferencing":
        return (
          <motion.div
            key="lms"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="w-full">
                <CreateMarketSell />
              </div>
  <div className="w-full">
      <motion.div
        className="w-full relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[400px] xl:h-[550px] 2xl:h-[550px]">
          <div className="absolute inset-0 opacity-20"></div>


          <motion.img
            src="/vc.svg"
            alt="course-module"
            className="w-full h-full object-fill"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

        </div>

        <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors duration-300"></div>
      </motion.div>
    </div>
            </div>
          </motion.div>
        )

      case "Community":
        return (
                   <motion.div
            key="lms"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="w-full">
                <CreateMarketSell />
              </div>
               <div className="w-full">
                   <motion.div
                     className="w-full relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg"
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.6, ease: "easeOut" }}
                     whileHover={{ scale: 1.02 }}
                   >
                     <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[400px] xl:h-[550px] 2xl:h-[550px]">
                       <div className="absolute inset-0 opacity-20"></div>
             
             
                       <motion.img
                         src="/community.svg"
                         alt="course-module"
                         className="w-full h-full object-fill"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 0.8, delay: 0.2 }}
                       />
             
                     </div>
             
                     <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors duration-300"></div>
                   </motion.div>
                 </div>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-gray-800/50 p-2 rounded-full backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                activeTab === tab.id ? "bg-white text-gray-900 shadow-lg" : "text-white hover:text-gray-300",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full">{renderTabContent()}</div>
    </div>
  )
}

export default TabSystem
