import React from 'react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import BG from '../../assets/herobg.png'
import ParticlesCanvas from '@/animations/ParticlesCanvas'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="px-6 md:px-20 lg:px-[180px] pt-24 w-full bg-black">
        <ParticlesCanvas/>
        <Contact />
      </div>
      <div className="w-full pt-24 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG.src})` }}>
        <Footer />
      </div>
    </div>
  )
}

export default page
