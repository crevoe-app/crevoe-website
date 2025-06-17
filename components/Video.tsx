'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const VideoCard = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full max-w-xl h-96 bg-pink-400 rounded-3xl overflow-hidden p-8 text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="text-2xl font-semibold text-purple-900 mb-2">Video Conferencing</h2>
      <p className="text-sm text-purple-950 max-w-md">
        Stay on top of classes, webinars, and study sessions with built-in scheduling tools.
      </p>

      {/* Image stack at top-right */}
      <div className="absolute top-4 right-4 flex flex-col items-end">
        {/* Bottom image (Black card) */}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: isHovered ? -10 : 0,
            transition: { type: 'spring', stiffness: 200, damping: 20 }
          }}
          className="w-32 h-44 bg-black rounded-xl shadow-xl z-10 absolute top-0 right-0"
        >
          <div className="flex items-center justify-center h-full text-white">
            <div className="bg-blue-400 rounded-full w-12 h-12 flex items-center justify-center font-semibold text-lg">
              KA
            </div>
          </div>
          <div className="absolute bottom-2 left-2 text-xs text-white">
            <p className="font-medium">John Doe the...</p>
            <p className="text-gray-300">Co Host</p>
          </div>
        </motion.div>

        {/* Top image (Face) */}
        <motion.div
          initial={{ x: 0 }}
          animate={{
            x: isHovered ? 10 : 0,
            transition: { type: 'spring', stiffness: 200, damping: 20 }
          }}
          className="w-36 h-52 rounded-xl overflow-hidden shadow-2xl border-4 border-blue-200 bg-white relative z-20"
        >
          <Image
            src="/sample-face.jpg" // Update to your image path
            alt="Video Face"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default VideoCard
