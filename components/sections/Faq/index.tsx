import React from 'react'

const faqs = [
  "Is Crevoe free?",
  "What kind of content can I publish?",
  "Can I interact with my students?",
  "Is it beginner-friendly?",
  "How do I track my progress during a course?",
  "Can I interact with my course instructor or classmates?",
  "Can I update or change my course after publishing it as an instructor?",
  "What makes Crevoe different from other learning platforms?"
]
const Faq = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex items-start justify-center">
      <div className='basis-5/12'>
        <h2 className='text-3xl w-7/12'>
          Frequently Asked Questions
        </h2>
        <p className='text-sm mt-4'>Everything you need to know before joining.</p>
      </div>
      <div className='flex-1'>
        {
          faqs.map((faq, idx: number) => {
            return <p key={idx} className='bg-gray-200 mb-4 p-4 rounded-md'>{faq}</p>
          })
        }
      </div>
    </div>
  )
}

export default Faq