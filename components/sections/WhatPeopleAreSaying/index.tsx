import React from 'react'
import People from './People'


const WhatPeopleAreSaying = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className='text-center text-3xl font-semibold'>What people are saying</h2>
      <p className='text-center w-[40%] ml-[30%] mt-2'>Join thousands of learners and instructors who are transforming the way they learn and teach with Crevoe.</p>
      <div>
        <People />
      </div>
    </div>
  )
}

export default WhatPeopleAreSaying