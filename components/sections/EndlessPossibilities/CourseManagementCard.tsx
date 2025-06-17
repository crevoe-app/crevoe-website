import React from 'react';
import { motion } from 'framer-motion';

const CourseManagementCard = () => {
  return (
    <div className="w-full">
      <motion.div
        className="bg-[#0073B4] rounded-3xl shadow-2xl relative h-[80vh] p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h1 className="text-white text-2xl font-bold">Course Management</h1>
        </div>

        <motion.div
          className="relative h-80 mb-8 flex items-center justify-center"
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className="absolute w-60 h-64 rounded-2xl overflow-hidden bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('./assets/RetroStars.svg')" }}
            variants={{
              initial: { x: -30, rotate: 2, zIndex: 2 },
              hover: { x: -30, rotate: -4, zIndex: 2 }
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />

          <motion.div
            className="absolute w-56 h-80 top-8 rounded-2xl overflow-hidden bg-contain bg-no-repeat bg-center"
            variants={{
              initial: { x: 60, rotate: 2, zIndex: 1 },
              hover: { x: 60, rotate: 10, zIndex: 1 }
            }}
            style={{ backgroundImage: "url('./assets/B-DayCake.svg')" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >

          </motion.div>
        </motion.div>

        <motion.img
          className="absolute -left-[2.2rem] bottom-16 object-fill"
          src={"./assets/FirstBg.png"} />

        <motion.div className='absolute bottom-8'>
          <p className='text-white'>Organize your courses and content in one streamlined dashboard.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CourseManagementCard;