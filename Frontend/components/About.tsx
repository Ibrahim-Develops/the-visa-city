import Image from 'next/image'
import React from 'react'
import HelpBanner from '../assets/Buildings.png'
import { IoChevronForwardSharp } from 'react-icons/io5'

const About = () => {
    return (
        <div>
            <div className="relative px-20 text-black overflow-hidden">
                <div className=" items-start justify-between relative z-10">
                <div className='text-[#4b6391] font-bold pt-10 flex items-center gap-2 py-8'>Home <IoChevronForwardSharp /> About  </div>
                    <div className="mb-10 md:mb-0">
                        <h1 className="text-5xl font-bold mb-4">
                            About <span className="text-[#4b6391]">The Visa City.</span>
                        </h1>
                        <div className="h-1 w-40 bg-black mb-6" />
                        <p className="text-lg text-gray-800 max-w-lg font-semibold">
                            Hassle-free travel shouldn't just be a dream, and we know how to make it reality.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[300px] z-0">
                    <Image
                        src={HelpBanner}
                        alt="City Background"
                        layout="fill"
                        objectFit=""
                        className="pointer-events-none"
                    />
                </div>
            </div>
        </div>
    )
}

export default About