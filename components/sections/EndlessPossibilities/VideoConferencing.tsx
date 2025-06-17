import React from 'react';
import { motion } from 'framer-motion';

const VideoConferencingCard = () => {
  return (
    <motion.div
      className="bg-[#F682A5] rounded-3xl shadow-2xl relative pl-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <motion.h1
            className="text-2xl font-bold mb-4 text-purple-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Video Conferencing
          </motion.h1>
          <motion.p
            className="text-sm text-black leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stay on top of classes, webinars, and study sessions with built-in scheduling tools.
          </motion.p>
        </div>

        <motion.div
          className="relative h-80 flex right-0 justify-end items-start"
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className="absolute bg-black rounded-2xl shadow-2xl w-64 h-56 overflow-hidden border-4 border-gray-800"
            variants={{
              initial: { x: -90, y: 35, rotate: 80, zIndex: 1 },
              hover: { x: -95, y: 35, rotate: 72, zIndex: 1 }
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >

          </motion.div>

          <motion.div
            className="absolute bg-white rounded-2xl shadow-2xl w-72 h-56 overflow-hidden border-4 border-blue-200"
            variants={{
              initial: { x: 20, y: 30, rotate: 100, zIndex: 2 },
              hover: { x: 28, y: 30, rotate: 108, zIndex: 2 }
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >

          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoConferencingCard;