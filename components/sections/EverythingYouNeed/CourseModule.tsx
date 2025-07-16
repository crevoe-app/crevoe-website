// import React from 'react'
// import { motion } from 'framer-motion';

// const CourseModule = () => {
//   return (
//     <div className='w-full'>
//       <motion.img src="/assets/eveythingYouNeed/newModule.png" alt="course-module" className='w-full h-[550px] object-fill' />
//     </div>
//   )
// }

// export default CourseModule


import React from 'react';
import { motion } from 'framer-motion';

const CourseModule = () => {
  return (
    <div className="w-full">
      <motion.div
        className="w-full relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Responsive Image Container */}
        <div className="relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[400px] xl:h-[550px] 2xl:h-[550px]">
          {/* Fallback gradient background */}
          <div className="absolute inset-0 opacity-20"></div>


          <motion.img
            src="/assets/eveythingYouNeed/newModule.png"
            alt="course-module"
            className="w-full h-full object-fill"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

        </div>

        {/* Optional overlay for better text readability if using actual image */}
        <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors duration-300"></div>
      </motion.div>
    </div>
  );
};

export default CourseModule;