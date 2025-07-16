import React from 'react'
import AnimatedLogo from '@/components/AnimatedLogo'
import Link from 'next/link'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className='bg-black rounded-xl relative py-16'>
        <motion.img src={"/assets/footer/star.png"} className='absolute right-0 top-0' />
        <motion.img src={"/assets/footer/circle.png"} className='absolute left-0 bottom-4' />
        <motion.img src={"/assets/footer/triangle.png"} className='absolute right-20 bottom-0' />
        <div className='h-[60vh] backdrop-blur-sm bg-white/15 border border-white/10 rounded-lg shadow-lg w-[90%] ml-[5%] p-4 relative'>
          <div className='mt-10'>
            <AnimatedLogo animateOnHover />
            <h1 className='text-7xl text-center text-white mt-4 font-semibold'>Get started with Crevoe.</h1>
            <div className='w-full mt-4'>
              <p className='text-white text-center'>Your next big move begins with one small click. Join thousands building knowledge businesses</p>
              <p className='text-white text-center'>and growing every day.</p>
            </div>
            <div className='flex items-center justify-center mt-8 gap-4'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-primary-500 font-semibold text-white px-8 sm:px-6 py-3 sm:py-2 rounded-full hover:bg-primary-600 border border-primary-600 transition-colors"
              >
                Create free Account
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent font-semibold px-8 sm:px-10 py-3 sm:py-2 rounded-full border transition-colors text-white"
              >
                Browse Courses
              </motion.button>
            </div>
          </div>

          <div className='flex w-[90%] border-t border-gray-200 opacity-50 absolute bottom-10 left-0 ml-[5%]'>
            <div className='flex items-center justify-between w-full mt-4'>
              <p className='text-white'>&copy; 2025</p>
              <div className='flex items-center gap-4'>
                <Link href={"#"} className='text-white hover:underline'>Terms</Link>
                <Link href={"#"} className='text-white hover:underline'>Contact</Link>
              </div>
              <div>
                <p className='text-white'>Site by JG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Footer