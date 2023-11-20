import Footer from '@/app/components/Footer'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    {/* hreo image */}
      <section>
        <div>
          <Image
          src={'/featured.jpg'}
          width={2000}
          height={100}
          alt='image view'
          />
        </div>
      </section>
    {/* body */}
      <section className='min-h-screen flex items-center justify-center'>
        <div className='w-full max-w-2xl p-6 space-y-10'>
          {/* title */}
          <h1 className='font-bold text-3xl'>Migration to Linear 101</h1>
            {/* description */}
            <div className='font-medium text-sm italic'>
              <p>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
            </div>
            {/* body */}
            <div className='text-base'>
              <p>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
            </div>
            {/* summary and links */}
            <h2 className='font-bold text-2xl'>Conclusions and Quotations</h2>
            <div className='text-base'>
              <p>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default page