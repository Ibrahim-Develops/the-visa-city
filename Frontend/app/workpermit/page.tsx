import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import BG from '../../public/herobg.png'
import ParticlesCanvas from '@/animations/ParticlesCanvas'
import WorkPermit from '@/components/WorkPermit'
import WorkPermit2 from '@/components/WorkPermit2'

const page = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Navbar />

            <div className="relative px-6 md:px-20 lg:px-[180px] pt-24 w-full bg-black overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <ParticlesCanvas />
                </div>

                <div className="relative z-10">
                  <WorkPermit/>
                  <WorkPermit2/>
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
