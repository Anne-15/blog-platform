import React from 'react'
import Image from "next/image"
import Footer from '@/app/components/Footer'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'

const page = ({params} : {params: number}) => {
  return <>
  <Navbar/>
  {/* before hero image */}
  <div className='flex justify-around m-20'>
    {/* share the article */}
    <div>
      <p>Share this article</p>

    </div>
    <div className='space-y-8 w-3/5'>
      <p className='font-medium text-blue-500'>SUPPORT</p>
      <h1 className='font-bold text-4xl'>We provide custom tech solutions that help your business grow</h1>
      <p className='font-medium text-base italic'>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
    </div>
  </div>
  
  {/* hreo image */}
  <section>
    <div>
      <Image
        src={'/featured.jpg'}
        width={2000}
        height={100}
        alt='image view'
        className='w-full h-100'
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
    </div>
  </section>
  {/* body */}
  <section className='min-h-screen flex items-center justify-center'>
    <div className='w-full max-w-2xl p-6 space-y-10 my-10'>
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
          <button className='flex flex-row gap-3 w-auto p-2 rounded-lg ring-1 ring-inset ring-black'>
            <Image
              src={'/back-arrow.svg'}
              width={25}
              height={25}
              alt='back arrow'
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            Back to projects
          </button>
        </Link>
      </div>
    </div>
  </section>
  <Footer/>
  
  </>;
}

export default page