import React from 'react';
import { motion } from 'framer-motion';

const CommunityCard = () => {
  return (
    <motion.div
      className="bg-gradient-to-br bg-[#C9DA8F] rounded-3xl p-8 shadow-2xl relative overflow-visible -mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative"
        whileHover="hover"
        initial="initial"
      >
        <div className="absolute -top-6 right-8 w-[90%] h-20 bg-gradient-to-r from-pink-300 to-pink-400  rounded-2xl shadow-lg transform -rotate-12 z-10"></div>

        <div className="absolute -top-4 right-4 w-[90%] h-20 bg-gradient-to-r  from-orange-400 to-red-400 rounded-2xl shadow-lg transform -rotate-6 z-20"></div>

        <div className="absolute top-0 right-0 w-[100%] h-20 bg-white transform -rotate-3 rounded-2xl shadow-lg z-30"></div>

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
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">C</span>
              </div>
              <button className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M15 9l-6 6" />
                  <path d="M9 9l6 6" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="text-white">
                <p className="text-xs">
                  <span className="font-medium">Crevoe</span> invited you to join
                </p>
                <p className="text-xs font-medium">javascript masterclass</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="relative z-10 mt-10">
        <motion.h1
          className="font-bold mb-6 text-gray-800 text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Community
        </motion.h1>

        <motion.p
          className="text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Connect with learners and creators in shared learning spaces.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CommunityCard;