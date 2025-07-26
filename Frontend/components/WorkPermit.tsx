import Image from 'next/image'
import React from 'react'
import HelpBanner from '../assets/Buildings.png'
import { IoChevronForwardSharp } from 'react-icons/io5'

const WorkPermit = () => {
  return (
    <div className="">
      <div className="relative px-20 text-white overflow-hidden">
        <div className="items-start justify-between relative z-10">
          <div className="text-[#FFD700] font-bold pt-10 flex items-center gap-2 py-8">
            Home <IoChevronForwardSharp className="text-white" /> Work Permit
          </div>

          <div className="mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">
              Work <span className="text-[#FFD700]">Permit Services</span>
            </h1>
            <div className="h-1 w-40 bg-[#FFD700] mb-6" />
            <p className="text-lg text-white max-w-lg font-semibold">
              Begin your international career with confidence. We simplify work permit applications for top destinations worldwide.
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

export default WorkPermit
