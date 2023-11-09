import React from 'react'
import Navbar from '../components/Navbar'
import CardBlogs from '../components/CardBlogs'
import Image from 'next/image'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
        <Navbar/>
        <div className='border-2 border-gray-700 ml-16 mr-16 mt-5'></div>
        <div className='container mx-auto'>
            <p className='rounded-full ring-2 ring-black p-1 w-fit mt-14 mb-5'>Design Journal</p>
            <h1 className='font-bold text-6xl mb-6'>Inside Design: Workfows and Processes</h1>
            <p>Subscribe for the latest design trends, design software and releases, and exclusive interviews with design leaders</p>
        </div>
        <div className='border-2 border-gray-700 ml-16 mr-16 mt-14 mb-14'></div>
        <div className='container mx-auto flex flex-row mb-14'>
            <article className='tracking-wide leading-loose flex basis-1/4'>
                <ul>
                    <li>All Projects</li>
                    <li>Prouct Design</li>
                    <li>Frontend Projects</li>
                    <li>Backend Projects</li>
                </ul>
            </article>
            <section className=''>
                <div className='card-blog flex flex-row gap-6'>
                    <Image
                        src={'/card.jpg'}
                        width={450}
                        height={150}
                        alt='Hero image'
                        className='rounded-2xl'
                    />
                    <div className=''>
                        <h1 className='mt-5 font-bold text-2xl'>Migration to Linear 101</h1>
                        <p className='mt-3'>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
                        <div className='flex flex-row gap-4 mt-5 font-medium'>
                            <Image
                                src={'/person.jpg'}
                                width={50}
                                height={100}
                                alt='Hero image'
                                className='rounded-full'
                            />
                            <p className='mt-3'>Jonathan Wills</p>
                            <p className='mt-3'>19 Jan 2022</p>
                        </div>
                    </div>
                </div>
                <h1 className='font-medium text-2xl mt-10 mb-5'>Product Design</h1>
                <div className='ring-1 ring-gray-700 ml-1 mr-16 mt-2 mb-14'></div>
                <div className='card-blog flex flex-row gap-4'>
                    <Image
                        src={'/card.jpg'}
                        width={450}
                        height={200}
                        alt='Hero image'
                        className='rounded-2xl'
                    />
                    <div className=''>
                        <h1 className='mt-5 font-bold text-2xl'>Migration to Linear 101</h1>
                        <p className='mt-3'>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
                        <div className='flex flex-row gap-4 mt-5 font-medium'>
                            <Image
                                src={'/person.jpg'}
                                width={50}
                                height={100}
                                alt='Hero image'
                                className='rounded-full'
                            />
                            <p className='mt-3'>Jonathan Wills</p>
                            <p className='mt-3'>19 Jan 2022</p>
                        </div>
                    </div>
                </div>
                <h1 className='font-medium text-2xl mt-10 mb-5'>Frontend Projects</h1>
                <div className='ring-1 ring-gray-700 ml-1 mr-16 mt-2 mb-14'></div>
                <div className='card-blog flex flex-row gap-4'>
                    <Image
                        src={'/card.jpg'}
                        width={450}
                        height={200}
                        alt='Hero image'
                        className='rounded-2xl'
                    />
                    <div className=''>
                        <h1 className='mt-5 font-bold text-2xl'>Migration to Linear 101</h1>
                        <p className='mt-3'>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
                        <div className='flex flex-row gap-4 mt-5 font-medium'>
                            <Image
                                src={'/person.jpg'}
                                width={50}
                                height={100}
                                alt='Hero image'
                                className='rounded-full'
                            />
                            <p className='mt-3'>Jonathan Wills</p>
                            <p className='mt-3'>19 Jan 2022</p>
                        </div>
                    </div>
                </div>
                <h1 className='font-medium text-2xl mt-10 mb-5'>Backend Projects</h1>
                <div className='ring-1 ring-gray-700 ml-1 mr-16 mt-2 mb-14'></div>
                <div className='card-blog flex flex-row gap-4'>
                    <Image
                        src={'/card.jpg'}
                        width={450}
                        height={200}
                        alt='Hero image'
                        className='rounded-2xl'
                    />
                    <div className=''>
                        <h1 className='mt-5 font-bold text-2xl'>Migration to Linear 101</h1>
                        <p className='mt-3'>Linear helps streamline software projects, sprints, tasks and bug tracking. Here is how to get started</p>
                        <div className='flex flex-row gap-4 mt-5 font-medium'>
                            <Image
                                src={'/person.jpg'}
                                width={50}
                                height={100}
                                alt='Hero image'
                                className='rounded-full'
                            />
                            <p className='mt-3'>Jonathan Wills</p>
                            <p className='mt-3'>19 Jan 2022</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </>
  )
}

export default page