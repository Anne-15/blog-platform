import Image from 'next/image'
import Hero from '../public/featured.jpg';
import Card from './components/Card';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


export default function Home() {
  return (
    <main>
      {/* navbar */}
      <Navbar/>
      {/* hero section */}
      <div className='hero-section relative m-4'>
        <Image
          src={Hero}
          width={1700}
          alt='Hero image'
          className='rounded-2xl'
        />
        <div className='absolute bottom-0 left-0 p-10 ml-10 mb-5 text-white font-medium'>
          <p className='text-xl'>Featured</p>
          <h1 className='text-4xl font-bold mt-4'>Breaking into Product Design: Advice from Untitled Founder, Frankie</h1>
          <p className=' mt-4'>Let's get one thing out of the way: you don't need a Bachelor's degree to get into <br /> product design.
          We sat down with Frankie Sulllivan to talk about gatekeeping in <br /> product design and how one can get into this growing industry
          </p>
        </div>
      </div>

      {/* recent blogs */}
      <div className='container mx-auto mb-20'>
        <h1 className='mt-10 font-bold text-2xl mx-20'>Recent blogs</h1>
        {/* card */}
        <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <h1 className='mt-10 font-bold text-2xl mx-20'>Recent projects</h1>
        <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
      {/* footer */}
      <Footer/>
    </main>
  )
}
