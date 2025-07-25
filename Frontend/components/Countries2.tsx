import React from 'react'
import HelpBanner from '../assets/Buildings.png'
import Image from 'next/image'
import { IoChevronForwardSharp } from 'react-icons/io5';

const Countries2 = () => {
    return (
        <div className="relative px-20 py-5 text-black overflow-hidden">

            <div className=" items-start justify-between relative z-10">
                <div className='text-[#FFD700] font-bold pt-10 flex items-center gap-2 py-8'>Home <IoChevronForwardSharp className='text-white'/> Countries  </div>
                <div className="mb-10 md:mb-0">
                    <h1 className="text-5xl text-white font-bold mb-4">
                        Our <span className="text-[#FFD700]">Countries.</span>
                    </h1>
                    <div className="h-1 w-40 bg-[#FFD700] mb-6" />
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
    )
}

export default Countries2