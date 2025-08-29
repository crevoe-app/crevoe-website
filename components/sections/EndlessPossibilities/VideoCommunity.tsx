"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

import { Monitor, MoreHorizontal, Edit3, Smile, PhoneOff, Heart, MessageCircle, MoreVertical, X } from "lucide-react"

export default function VideoCommunitySection() {
  const [showNotification, setShowNotification] = useState(true)

  return (
    <div className="min-h-screen w-full bg-white-50 py-4 md:py-8">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
          {/* Video Conferencing Section */}
          <div className="space-y-4 md:space-y-6 shadow-lg px-4 py-4 md:px-6 md:py-6 bg-white rounded-xl md:rounded-2xl">
            <div className="space-y-3 md:space-y-4">
              <Button
                variant="secondary"
                className="bg-pink-100 text-pink-600 hover:bg-pink-100 px-3 py-1.5 text-xs md:text-sm font-medium rounded-full"
              >
                Course Creation
              </Button>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                Video Conferencing
              </h2>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                Stay on top of classes, webinars, and study sessions with built-in scheduling tools.
              </p>
            </div>

            {/* Video Call Interface */}
            <div className="flex justify-center items-center">
              <motion.img
                className="w-full max-w-xs md:max-w-md lg:max-w-lg flex md:w-[90%] md:h-[40rem] h-auto"
                src="/vcc.svg"
                alt="Video Conferencing Interface"
                variants={{
                  initial: { opacity: 0, scale: 0.8, x: 0, y: 0 },
                  hover: { opacity: 1, scale: 1.05, y: -10 }
                }}
                initial="initial"
                animate={{ opacity: 1, scale: 1 }}
                whileHover="hover"
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Community Section */}
          <div className="space-y-4 md:space-y-6 px-4 py-4 md:px-6 md:py-6 bg-white rounded-xl md:rounded-2xl shadow-lg">
            <div className="space-y-3 md:space-y-4">
              <Button
                variant="secondary"
                className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 px-3 py-1.5 text-xs md:text-sm font-medium rounded-full"
              >
                Community
              </Button>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
                Community
              </h2>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
                Connect with learners and creators in shared learning spaces.
              </p>
            </div>

            {/* Community Interface */}
            <div className="relative bg-white rounded-xl md:rounded-2xl  overflow-hidden">
              {/* Header */}
              <div className="bg-white border-b border-gray-200 px-3 py-2 md:px-6 md:py-3">
                <div className="flex justify-end items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-2 bg-black text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full"></div>
                    <span className="text-xs">LIVE 1:23</span>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full bg-transparent text-xs px-2 py-1 md:px-3 md:py-1">
                    <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path>
                    </svg>
                    Record
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 md:p-6">
                {/* General section header */}
                <div className="mb-4">
                  <div className="flex bg-white p-2 md:p-3 border border-gray-100 rounded-t-lg items-center justify-between">
                    <div>
                      <h3 className="text-base md:text-xl font-semibold text-gray-900">General</h3>
                      <p className="text-gray-500 text-xs md:text-sm">Description field</p>
                    </div>
                    <div className="flex items-center -space-x-1 md:-space-x-2">
                      <Avatar className="w-6 h-6 md:w-8 md:h-8 border-2 border-white">
                        <AvatarImage src="/avatar.svg" />
                        <AvatarFallback className="text-xs">U1</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-6 h-6 md:w-8 md:h-8 border-2 border-white">
                        <AvatarFallback className="text-xs">U2</AvatarFallback>
                      </Avatar>
                      <Avatar className="w-6 h-6 md:w-8 md:h-8 border-2 border-white">
                        <AvatarImage src="/avatar.svg" />
                        <AvatarFallback className="text-xs">U3</AvatarFallback>
                      </Avatar>
                      <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                        +23
                      </div>
                      <Button variant="ghost" size="sm" className="ml-1 md:ml-2 p-1">
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* First Post */}
                <div className="bg-white border border-gray-100 border-t-0 rounded-b-lg p-2 md:p-4 mb-3 md:mb-4">
                  <div className="flex items-start gap-2 md:gap-3">
                    <Avatar className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                      <AvatarImage src="/avatar.svg" />
                      <AvatarFallback className="text-xs md:text-sm">O</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-semibold text-gray-900 text-sm md:text-base">Obaking</span>
                        <span className="text-xs md:text-sm text-gray-500">Oct 30, 2024 | 11:28 am</span>
                      </div>
                      <div className="text-gray-700 space-y-2 mb-3 text-[8px] md:text-sm leading-relaxed">
                        <p>
                          We have some other ping & group roles you can select as well! These do not open any additional
                          channels but will be used to send you notifications.
                        </p>
                        <p>You can still access all general channels without these roles.</p>
                      </div>
                      <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                        <button className="flex items-center gap-1 text-xs md:text-sm text-gray-600 hover:text-gray-800 bg-gray-100 px-2 py-1 rounded transition-colors">
                          <span>👍</span>
                          <span>32</span>
                        </button>
                        <button className="flex items-center gap-1 text-xs md:text-sm text-gray-600 hover:text-gray-800 bg-gray-100 px-2 py-1 rounded transition-colors">
                          <span>❤️</span>
                          <span>32</span>
                        </button>
                        <button className="flex items-center gap-1 text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors">
                          <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          <span>Comment</span>
                        </button>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="p-1 flex-shrink-0">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </Button>
                  </div>
                </div>

                {/* Second Post with Image */}
                <div className="bg-white rounded-lg p-2 md:p-4 shadow-sm">
                  <div className="flex items-start gap-2 md:gap-3">
                    <Avatar className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                      <AvatarImage src="/avatar.svg" />
                      <AvatarFallback className="text-xs md:text-sm">O</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="font-semibold text-gray-900 text-sm md:text-base">Obaking</span>
                        <span className="text-xs md:text-sm text-gray-500">Oct 30, 2024 | 11:28 am</span>
                      </div>
                      <div className="relative mb-2">
                        <img src="/lady.png" alt="Coffee shop scene" className="rounded-lg w-full md:w-32 max-w-[200px] md:max-w-xs h-auto" />
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="p-1 flex-shrink-0">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>

              {showNotification && (
                <div className="hidden z-50 lg:block absolute top-12 -right-3 w-80">
                  <motion.div
                    className="relative"
                    whileHover="hover"
                    initial="initial"
                  >
                    <div className="absolute -top-6 border-2 border-black right-8 w-[90%] h-16 md:h-20 bg-gradient-to-r from-pink-300 to-pink-400 rounded-2xl shadow-lg transform -rotate-12 z-10"></div>
                    
                    <div className="absolute -top-4 right-4 w-[90%] h-16 md:h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl shadow-lg transform -rotate-6 z-20"></div>
                    
                    <div className="absolute top-0 right-0 w-[100%] h-16 md:h-20 bg-white transform -rotate-3 rounded-2xl shadow-lg z-30"></div>
                    
                    <motion.div
                      className="relative bg-gray-800 rounded-2xl shadow-xl z-40 overflow-hidden"
                      variants={{
                        initial: { y: 30 },
                        hover: { y: 20 }
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <div className="px-4 py-3">
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-bold">C</span>
                          </div>
                          <button 
                            onClick={() => setShowNotification(false)}
                            className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0"
                          >
                            <X size={16} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-white min-w-0 flex-1">
                            <p className="text-xs">
                              <span className="font-medium">Crevoe</span> invited you to join
                            </p>
                            <p className="text-xs font-medium truncate">javascript masterclass</p>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              Join
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}