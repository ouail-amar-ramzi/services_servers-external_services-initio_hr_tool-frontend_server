import React from 'react'
import homeBackground from '../assets/home/background.svg'
import logo from '../assets/logo-white.svg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='relative w-full h-full flex flex-col justify-between items-start'>
      {/* Background */}
      <div className='absolute -z-10 inset-0 w-full h-full bg-center bg-container after:absolute after:w-full after:h-full after:bg-initio-green-primary after:opacity-50' style={{backgroundImage: `url(${homeBackground})`}}></div>
      
      {/* NavBar */}
      <nav className='flex justify-start align-bottom pt-4 pl-8'>
        <img src={logo} alt="initio logo" className='w-1/6 lg:w-36 xl:w-48'/>
      </nav>
      <main className='text-initio-white-primary font-Poppins h-2/3 pb-36 xl:pb-36 pl-8 xl:pl-8'>
        <h1 className='text-8xl font-semibold'>Initio Club HR Tool</h1>
        <p className='text-4xl w-3/5 mt-4'>Lorem ipsum dolor sit amet, consectetuer adip iscing elit, sed diam nonummy nibh euismod tincidunt ut.</p>
        <button type="button" className="mt-16 text-initio-green-primary font-medium text-2xl bg-initio-white-primary hover:bg-initio-white-primary rounded-lg px-5 py-2.5 mr-2 mb-2 focus:outline-none">
          <Link to="/auth/login">
            Let&apos;s get started
          </Link>
        </button>
      </main>
    </div>
  )
}

export default Home