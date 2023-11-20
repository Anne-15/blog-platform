import React from 'react'
import Image from 'next/image'
import Footer from '@/app/components/Footer'
import Link from 'next/link'

const page = ({params} : {params: number}) => {
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
          {/* background */}
          <h2 className='font-bold text-2xl'>Background Information</h2>
          <div className='text-base'>
            <p>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
          </div>
          {/* objectives */}
          <h2 className='font-bold text-2xl'>Objectives</h2>
          <div className='text-base'>
            <p>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
          </div>
          {/* System functionality */}
          <h2 className='font-bold text-2xl'>Functionality</h2>
          <div className='text-base'>
            <p>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
          </div>
          {/* design files */}
          <h2 className='font-bold text-2xl'>Figma Designs and images</h2>
          <div className='text-base'>
            <p>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
          </div>
          {/* summary and links */}
          <h2 className='font-bold text-2xl'>Conclusion and Project link(s)</h2>
          <div className='text-base'>
            <p>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
          </div>
          <div>
            <Link href={'/Projects'}>
              <button>Back</button>
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default page