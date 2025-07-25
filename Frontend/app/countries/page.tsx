import React from 'react'
import Countries2 from '@/components/Countries2'
import Countries3 from '@/components/Countries3'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Visas from '@/components/Visas'
import BG from '../../assets/herobg.png'
import ParticlesCanvas from '@/animations/ParticlesCanvas'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="px-6 md:px-20 lg:px-[180px] pt-24 w-full bg-black">
        <ParticlesCanvas/>
        <Countries2 />
        <Countries3 />
        <Visas />
      </div>
      <div className="w-full pt-24 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG.src})` }}>
        <Footer />
      </div>
    </div>
  )
}

export default page
