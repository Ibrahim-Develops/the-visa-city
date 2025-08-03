import Image from 'next/image'
import React from 'react'
import HelpBanner from '../public/Buildings.png'
import { IoChevronForwardSharp } from 'react-icons/io5'

const WorkPermit = () => {
  return (
     <div className="bg-black">
            <div className="relative px-4 md:px-10 lg:px-20 text-white overflow-hidden py-10">
                <div className="relative z-10">
                    <div className="text-[#FFD700] font-bold flex items-center gap-2 py-4 text-sm md:text-base">
                        Home <IoChevronForwardSharp className="text-white" /> Work Permit
                    </div>

                    <div className="mb-10 md:mb-0">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Work <span className="text-[#FFD700]">Permit Services</span>
                        </h1>
                        <div className="h-1 w-28 md:w-40 bg-[#FFD700] mb-6" />
                        <p className="text-base md:text-lg font-semibold max-w-md md:max-w-lg text-white">
                           Begin your international career with confidence. We simplify work permit applications for top destinations worldwide.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[200px] md:h-[280px] lg:h-[400px] z-0">
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

export default WorkPermit
