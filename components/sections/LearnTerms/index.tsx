import React from 'react'
import FloatingElement from '@/components/FloatingElement'
import { motion } from 'framer-motion'

const LearnTerms = () => {
  return (
    <div className='relative bg-white overflow-hidden flex items-center justify-center h-[50vh]'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
        <h2 className='text-3xl font-semibold mb-6'>Learn on your terms.</h2>
        <p className='w-8/12 my-8 mx-auto flex items-center justify-center text-center'>From skill-building to soul-growing, discover courses that meet you where you are.</p>
        <motion.button
          whileTap={{ scale: 0.98 }}
          className=" w-4/12 bg-primary-600 font-semibold text-white py-3 rounded-full hover:bg-primary-600 border border-primary-600 transition-colors"
        >
          Explore All Categories
        </motion.button>
      </div>
      {/* <FloatingElement className="top-32 left-64" delay={0.2}>
        hi
      </FloatingElement> */}
    </div>
  )
}

export default LearnTerms