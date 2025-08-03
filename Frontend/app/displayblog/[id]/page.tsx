import ParticlesCanvas from '@/animations/ParticlesCanvas'
import DisplayBlog from '@/components/DisplayBlog'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import BG from '../../../public/herobg.png'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
            <Navbar />

            <div className="relative pt-24 w-full bg-black overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <ParticlesCanvas  />
                </div>

                <div className="relative z-10">
                    <DisplayBlog/>
                </div>
            </div>

            <div
                className="w-full pt-24 relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${BG.src})` }}
            >
                <Footer />
            </div>
        </div>
  )
}

export default page