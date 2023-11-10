import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CardBlogs from '../components/CardBlogs'
import Image from 'next/image'


const Blogs = () => {
  return (
    <main>
        <Navbar/>
        <div className='container mx-auto flex flex-row gap-4 mb-10'>
        <article className='tracking-wide leading-loose flex basis-1/4 flex-col h-screen'>
            <ul className='flex flex-col gap-2 p-4'>
                <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>All Blogs</li>
                <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Prouct Design</li>
                <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Software Development</li>
            </ul>
        </article>
            <section className='basis-1/2'>
                <h1 id='recent' className='mt-5 mb-2 font-bold text-2xl'>Recent Blogs</h1>
                {/* <Card/> */}
                <div className=''>
                    <CardBlogs/>
                    <CardBlogs/>
                </div>
                
            </section>
            <aside className='basis-1/4'>
                <h1 className='mt-5 mb-1 font-bold text-lg'>Skills</h1>
                <div className='flex flex-row flex-wrap p-2 gap-2'>
                    <button className='border-2 rounded-full w-24'>Flutter</button>
                    <button className='border-2 rounded-full w-24'>ReactJS</button>
                    <button className='border-2 rounded-full w-24'>Figma</button>
                    <button className='border-2 rounded-full w-24'>UI/UX</button>
                </div>
                
            </aside>
        </div>        
        <Footer/>
    </main>
  )
}

export default Blogs