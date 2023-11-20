import React from 'react'
import Image from 'next/image'

const CardBlogs = () => {
  return (
    <div className='card-blog flex flex-row space-x-10'>
      <Image
      src={'/card.jpg'}
      width={450}
      height={200}
      alt='Hero image'
      className='rounded-2xl'
      />
      <div className='flex flex-col justify-center'>
        <div className='flex flex-row justify-between'>
          <h1 className='mt-5 font-bold text-xl'>Migration to Linear 101</h1>
          <Image
          src={'/arrow-up-right.svg'}
          width={20}
          height={20}
          alt='Hero image'
          className='mt-3'
          />
        </div>
        
        <p className='mt-3 text-base'>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
      </div>
        
      {/* <div className='flex flex-row gap-4 mt-5 font-medium'>
        <Image
            src={'/person.jpg'}
            width={50}
            height={100}
            alt='Hero image'
            className='rounded-full'
        />
        <p className='mt-3'>Jonathan Wills</p>
        <p className='mt-3'>19 Jan 2022</p>
      </div> */}
    </div>
  )
}

export default CardBlogs