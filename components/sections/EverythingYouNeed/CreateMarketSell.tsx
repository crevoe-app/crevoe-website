
import { Check } from 'lucide-react'
import React from 'react'

const CreateMarketSell = () => {

  const checkList = [
    "Easy course creation with support for videos, quizzes, and downloadable materials.",
    "Built-in scheduling tools to manage classes, events, and reminders.",
    "Track progress with clear insights on lessons completed and scores.",
    "All-in-one dashboard for managing courses, students, and content with ease."
  ]
  return (
    <div>
      <div className='pl-16'>
        <h2 className='text-white w-full text-3xl'>Create, market, and sell</h2>
        <h2 className='text-white w-full text-3xl'>online courses from a single</h2>
        <h2 className='text-white w-full text-3xl'>dashboard.</h2>
      </div>

      <div className='mt-4 pl-16'>
        <p className='text-sm text-white'>Whether you&apos;re a learner or instructor, Crevoe makes online learning seamless and</p>
        <p className='text-sm text-white'>powerful</p>
      </div>
      <div className='pl-16 mt-10'>
        {
          checkList.map((item: string, idx: number) => {
            return <p key={idx} className='text-white border-t flex items-center w-8/12 gap-4 py-4'><span className='p-3 rounded-xl bg-gray-800'><Check className='text-[#DE2424]' /></span> {item}</p>
          })
        }
      </div>
    </div >
  )
}

export default CreateMarketSell