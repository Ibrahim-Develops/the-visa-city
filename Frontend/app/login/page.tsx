import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import BG from '../../public/herobg.png'
import ParticlesCanvas from '@/animations/ParticlesCanvas'
import Login from '@/components/Login'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />

      <div className="relative px-6 md:px-20 lg:px-[180px] pt-24 w-full bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesCanvas />
        </div>

        <div className="relative z-20">
          <Login/>
        </div>
      </div>
    </div>
  )
}

export default page
