import React from 'react';
import { motion } from 'framer-motion';

const VideoConferencingCard = () => {
  return (
    <motion.div
      className="bg-[#F682A5] rounded-3xl shadow-2xl relative p-4 sm:p-6 lg:pl-6 lg:pr-0 lg:py-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center min-h-[250px] sm:min-h-[300px] lg:min-h-0">
        <div className="text-white order-2 lg:order-1 mt-36">
          <motion.h1
            className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-purple-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Video Conferencing
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base text-black leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stay on top of classes, webinars, and study sessions with built-in scheduling tools.
          </motion.p>
        </div>

        <motion.div
          className="relative h-48 sm:h-60 lg:h-80 flex justify-center lg:justify-end items-center lg:items-start order-1 lg:order-2"
          whileHover="hover"
          initial="initial"
        >

          <div className="block lg:hidden relative w-full h-full">
            <motion.div
              className="absolute bg-black rounded-xl sm:rounded-2xl shadow-2xl w-32 h-24 sm:w-40 sm:h-28 overflow-hidden border-2 sm:border-4 border-gray-800 left-10 top-8"
              variants={{
                initial: { rotate: 15, scale: 0.9 },
                hover: { rotate: 12, scale: 0.95 }
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
            </motion.div>

            <motion.div
              className="absolute bg-white rounded-xl sm:rounded-2xl shadow-2xl w-36 h-24 sm:w-44 sm:h-28 overflow-hidden border-2 sm:border-4 border-primary-200 right-8 top-12"
              variants={{
                initial: { rotate: -15, scale: 0.9 },
                hover: { rotate: -12, scale: 0.95 }
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
            </motion.div>
          </div>

          <div className="hidden lg:block relative w-full h-full">
            <motion.div
              className="absolute bg-black rounded-2xl shadow-2xl w-56 h-64 overflow-hidden border-4 border-gray-800"
              variants={{
                initial: { x: -45, y: 18, rotate: -10 },
                hover: { x: -40, y: 18, rotate: -14 }
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <motion.img
                src={"/co-host.png"}
                alt='co-host'
                className='object-fill w-full h-full'
                variants={{
                  initial: { rotate: 10 }
                }}
              />
            </motion.div>

            <motion.div
              className="absolute bg-white rounded-2xl shadow-2xl w-72 h-56 overflow-hidden border-4 border-primary-200 z-10"
              variants={{
                initial: { x: 38, y: 30, rotate: 100 },
                hover: { x: 48, y: 30, rotate: 101 }
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <motion.img
                src={"/call.png"}
                alt='call'
                className='object-cover w-[310px] h-[340px]'
                variants={{
                  initial: { rotate: -104, x: -2, y: -60 }
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoConferencingCard;
