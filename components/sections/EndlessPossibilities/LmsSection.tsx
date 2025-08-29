"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import AnimatedLogo from "@/components/AnimatedLogo"
import Link from "next/link"

export default function LmsSection() {
  const [selectedDate, setSelectedDate] = useState({ month: "September", day: 20, time: "5:00 AM" })
  const { scrollY } = useScroll()
  const profileCardY = useTransform(scrollY, [0, 300], [0, -50])
  const profileCardOpacity = useTransform(scrollY, [0, 100, 200], [0, 0.5, 1])

  const scheduleData = [
    { month: "July", day: 18, time: "3:00 AM" },
    { month: "August", day: 19, time: "4:00 AM" },
    { month: "September", day: 20, time: "5:00 AM" },
    { month: "October", day: 21, time: "6:00 AM" },
    { month: "November", day: 22, time: "7:00 AM" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6  shadow rounded-2xl md:w-[120%]  bg-white px-5 py-5 relative"
        >
          <div className="">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-8 bg-blue-100 rounded-md flex items-center justify-center">
                <span className="text-primary-600 font-semibold text-sm">LMS</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-primary-600 mb-2">Learning Management System</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Organize your courses and content in one streamlined dashboard.
            </p>
          </div>
          <motion.div className="flex items-center ml-20  flex-shrink-0 ">
                      <Link href="/">
                        <AnimatedLogo animateOnHover />
                      </Link>
                    </motion.div>

          {/* Sidebar */}
          <motion.img
                   className=" flex  my-20 md:ml-20"
                   src="/lms.svg"
                   alt="Conten"
                   variants={{
                     initial: { opacity: 0, scale: 0.8, x: 0, y: 0 },
                     hover: { opacity: 1, scale: 1.5, y: -40 }
                   }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 0.2 }}
                 />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute md:top-10 top-56 right-0  md:right-10 z-10"
          >
            <Card className="md:p-6 border border-gray-200 shadow-xl bg-white max-w-xs w-32 md:w-60">
              <div className="text-center">
                <Avatar className="md:w-14 md:h-14 mx-auto mb-3">
                  <AvatarImage src="/avatar.svg" />
                </Avatar>

                <h3 className="md:text-sm text-[8px] font-bold mb-1">CrevoeHQ</h3>
                <p className="text-gray-500 text-[8px] md:text-xs mb-3">@Crevoe</p>

                <div className="flex justify-center gap-4 mb-3">
                  <div className="text-center">
                    <p className="font-bold text-[8px] md:text-sm">51,889</p>
                    <p className="tmd:ext-xs text-[8px] text-gray-500">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-sm">919</p>
                    <p className="md:text-xs text-[8px] text-gray-500">Following</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-2">
                  <p className="md:text-[8px] text-[6px] text-primary-700 font-medium">🎨 Embracing Creativity in Every Pixel</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Right Section - Event Scheduling */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4 flex justify-end flex-col md:items-end"
        >


          <Card className="p-6 md:w-[80%] border bg-white border-gray-200 shadow-sm">
                      <div className="flex">
            <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">Events</span>
          </div>
            <h2 className="text-3xl font-bold text-primary-600 mb-2">Event Scheduling</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Organize your courses and content in one streamlined dashboard.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-lg text-gray-600 mb-4">When should we deliver this card?</p>

              <div className="space-y-3">
                {scheduleData.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedDate(item)}
                    className={`flex justify-between items-center p-3 rounded-lg cursor-pointer transition-all ${
                      selectedDate.day === item.day ? "bg-gray-800 text-white" : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-sm font-medium">{item.month}</span>
                    <span className="text-sm">{item.day}</span>
                    <span className="text-sm">{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-lg font-medium">
                Set Date
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
