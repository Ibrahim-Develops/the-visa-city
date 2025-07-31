import React from 'react'
import HelpBanner from '../public/Buildings.png'
import { IoChevronForwardSharp } from 'react-icons/io5'
import Image from 'next/image'

const CorporateVisa = () => {
  return (
    <div className="">
      <div className="relative px-20 text-white overflow-hidden">
        <div className="items-start justify-between relative z-10">
          <div className="text-[#FFD700] font-bold pt-10 flex items-center gap-2 py-8">
            Home <IoChevronForwardSharp className="text-white" /> Corporate Visa
          </div>

          <div className="mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">
              Corporate Visa <span className="text-[#FFD700]">Services</span>
            </h1>
            <div className="h-1 w-40 bg-[#FFD700] mb-6" />
            <p className="text-lg text-white max-w-lg font-semibold">
              Smart solutions for your company’s global mobility.
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

export default CorporateVisa