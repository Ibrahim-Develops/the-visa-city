import React from 'react'
import HelpBanner from '../public/Buildings.png'
import Image from 'next/image'
import { IoChevronForwardSharp } from 'react-icons/io5'

const Countries2 = () => {
    return (
        <div className="relative text-white overflow-hidden">
            <div className="relative z-10 lg:px-20 px-4">
                <div className="text-[#FFD700] font-bold pt-10 flex items-center gap-2 py-6">
                    Home <IoChevronForwardSharp className="text-white" /> Countries
                </div>

                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-[#FFD700]">Countries.</span>
                    </h1>
                    <div className="h-1 w-32 bg-[#FFD700] mb-6" />
                    <p className="text-base md:text-lg text-white max-w-lg font-semibold">
                        Explore The World.
                    </p>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[400px] z-0">
                <Image
                    src={HelpBanner}
                    alt="City Background"
                    fill
                    className="pointer-events-none object-cover"
                />
            </div>
        </div>
    )
}

export default Countries2
