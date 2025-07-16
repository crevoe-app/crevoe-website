import React from 'react'
import InfiniteCards from './InfiniteMovingButtons'
import CreateMarketSell from './CreateMarketSell'
import CourseModule from './CourseModule'
import { motion } from 'framer-motion';

const EverythingYouNeed = () => {
  return (
    <div className='h-screen mt-10 bg-[#001521] py-4 w-full relative'>
      <motion.img src="/HalfPink.png" className='absolute right-0' />
      <h2 className='text-white mt-8 text-3xl text-center font-semibold w-[34%] ml-[33%]'>Everything you need to create your course</h2>
      <p className='text-white text-center mt-4'>Build, publish, schedule, and engage — all from your personal Creator Dashboard.</p>

      <div className='w-full'>
        <InfiniteCards />
      </div>

      <div className='flex items-start gap-4 w-full mt-6'>
        <div className='basis-6/12'>
          <CreateMarketSell />
        </div>
        <div className='flex-1'>
          <CourseModule />
        </div>
      </div>
    </div>
  )
}

export default EverythingYouNeed