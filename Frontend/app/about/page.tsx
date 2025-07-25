import React from 'react'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Proud from '@/components/Proud'
import Travelers from '@/components/Travelers'
import BG from '../../assets/herobg.png'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="px-6 md:px-20 lg:px-[180px] pt-24 w-full bg-black">
        <About />
        <Travelers />
        <Proud />
      </div>
      <div className="w-full pt-24 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG.src})` }}>
        <Footer />
      </div>
    </div>
  )
}

export default page