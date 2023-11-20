import React from 'react'
import Navbar from '../components/Navbar'
import CardBlogs from '../components/CardBlogs'
import Image from 'next/image'
import Footer from '../components/Footer'
import CardProjects from '../components/CardProjects'

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
            <article className='tracking-wide leading-loose flex basis-1/4 flex-col h-screen'>
                <ul className='flex flex-col gap-2 p-4'>
                    <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer relative'>
                        All Projects
                    </li>
                    <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Prouct Design</li>
                    <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Frontend Projects</li>
                    <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Backend Projects</li>
                </ul>
            </article>
            <section className='flex flex-row flex-wrap justify-around'>
                <CardProjects/>
                <CardProjects/>
                <CardProjects/>
                <CardProjects/>
                <CardProjects/>
                <CardProjects/>
            </section>
        </div>
        <Footer/>
    </>
  )
}

export default page