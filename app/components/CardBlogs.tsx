import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CardBlogs = () => {
  return (
    <div className='card-blog flex flex-row space-x-10'>
      <div className='relative w-350 h-200 rounded-2xl overflow-hidden'>
        <Image
        src={'/card.jpg'}
        width={350}
        height={200}
        alt='Hero image'
        className='rounded-2xl'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl'></div>
        <p className='absolute top-5 left-5 z-10 inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10'>
          Software development
        </p>
      </div>
      
      <div className='flex flex-col w-1/2'>
        <Link href={'/Blogs/id'}>
          <div className='flex flex-row justify-between'>
            <h1 className=' font-bold text-xl'>Breaking the cycle with negative self talk: Strategies for developing a growth mindset</h1>
            <Image
            src={'/arrow-up-right.svg'}
            width={20}
            height={20}
            alt='Hero image'
            className=''
            />
          </div>
        </Link>
        
        <p className='mt-3 text-sm'>
          Negative self-talk can hold us back and prevent us from reaching out full potential. In this article, we'll explore the concept of a growth
          mindset and share potential strategies for developing a more positive and growth-oriented way of thinking.
        </p>
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