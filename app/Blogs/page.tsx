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
                    <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Recent Blogs</li>
                    <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Prouct Design</li>
                    <li className='p-2 rounded-lg hover:bg-gray-200 cursor-pointer'>Software Development</li>
                </ul>
            </article>
            <section className='space-y-8'>
                <h1 id='recent' className='font-bold text-2xl'>My Blogs</h1>
                {/* <Card/> */}
                <div className='space-y-10'>
                    <CardBlogs/>
                    <CardBlogs/>
                    <CardBlogs/>
                </div>
            </section>
        </div>       
        <Footer/>
    </main>
  )
}

export default Blogs