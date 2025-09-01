import Image from 'next/image'
import React from 'react'
import HelpBanner from '../public/Buildings.png'
import { IoChevronForwardSharp } from 'react-icons/io5'

const SuccessTop = () => {
    return (
        <div className="bg-black">
            <div className="relative px-4 md:px-10 lg:px-20 text-white overflow-hidden">
                <div className="relative z-10">
                    <div className="text-[#FFD700] font-bold pt-10 flex items-center gap-2 py-8">
                        Home <IoChevronForwardSharp className="text-white" /> Success Stories
                    </div>

                    <div className="mb-10">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Explore <span className="text-[#FFD700]">Our Success Stories</span>
                        </h1>
                        <div className="h-1 w-32 md:w-40 bg-[#FFD700] mb-6" />
                        <p className="text-base md:text-lg text-white max-w-xl font-semibold">
                            Discover real journeys of growth, resilience, and success that inspire greatness.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[400px] z-0">
                    <Image
                        src={HelpBanner}
                        alt="City Background"
                        layout="fill"
                        objectFit="cover"
                        className="pointer-events-none"
                    />
                </div>
            </div>
        </div>
    )
}

export default SuccessTop