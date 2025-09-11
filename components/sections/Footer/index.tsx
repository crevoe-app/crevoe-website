"use client"
import React from 'react'
import AnimatedLogo from '@/components/AnimatedLogo'
import Link from 'next/link'
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className='bg-black rounded-xl relative py-10 sm:py-16'>
        <motion.img
          src={"/assets/footer/star.png"}
          className='absolute right-0 top-0 w-16 sm:w-auto'
        />
        <motion.img
          src={"/assets/footer/circle.png"}
          className='absolute left-0 bottom-4 w-16 sm:w-auto'
        />
        <motion.img
          src={"/assets/footer/triangle.png"}
          className='absolute right-4 sm:right-20 bottom-0 w-16 sm:w-auto'
        />
        <div className='h-auto sm:h-[60vh] backdrop-blur-sm bg-white/15 border border-white/10 rounded-lg shadow-lg w-[90%] ml-[5%] p-4 sm:p-6 relative'>
          <div className='mt-6 sm:mt-10'>
            <AnimatedLogo animateOnHover />
            <h1 className='text-3xl sm:text-5xl lg:text-7xl text-center text-white mt-4 font-semibold'>
              Get started with Crevoe.
            </h1>
            <div className='w-full mt-4'>
              <p className='text-white text-center text-sm sm:text-base'>
                Your next big move begins with one small click. Join thousands building knowledge businesses
              </p>
              <p className='text-white text-center text-sm sm:text-base'>
                and growing every day.
              </p>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-8 gap-3 sm:gap-4'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-primary-500 font-semibold text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-primary-600 border border-primary-600 transition-colors text-sm sm:text-base"
              >
                <Link href="https://app.crevoe.com/auth?tab=signup" target="_blank" rel="noopener noreferrer">
                Create free Account
                </Link>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-transparent font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full border transition-colors text-white text-sm sm:text-base"
              >
                <Link href="https://app.crevoe.com/market" target="_blank" rel="noopener noreferrer">
                Browse Courses
                </Link>
              </motion.button>
            </div>
          </div>

          <div className='flex w-[90%] border-t border-gray-200 opacity-50 mt-10 sm:mt-0 sm:absolute sm:bottom-10 left-0 ml-[5%] pt-6 sm:pt-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full gap-4 sm:gap-0'>
              <p className='text-white text-sm sm:text-base'>&copy; 2025</p>
              <div className='flex items-center gap-3 sm:gap-4'>
                <Link href="/info/about" className='text-white hover:underline text-[8px] md:text-sm sm:text-base'>About</Link>
                <Link href="/terms-condition" className='text-white hover:underline text-[8px] md:text-sm sm:text-base'>Terms</Link>
                <Link href="/contact" className='text-white hover:underline text-[8px] md:text-sm sm:text-base'>Contact</Link>
                <Link href="/info/privacy" className='text-white text-[8px] hover:underline md:text-sm sm:text-base'>Privacy</Link>
                <Link href="/info/company" className='text-white  text-[8px] hover:underline md:text-sm sm:text-base'>comapny</Link>
                <Link href="/info/community-guidelines" className='text-white text-[8px] hover:underline md:text-sm sm:text-base'>Guidelines</Link>
                <Link href="/info/help" className='text-white hover:underline text-[8px] md:text-sm sm:text-base'>Help</Link>
                <Link href="/info/safety" className='text-white hover:underline text-[8px] md:text-sm sm:text-base'>Safety</Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;