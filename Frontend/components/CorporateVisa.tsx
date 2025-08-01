import React from 'react'
import HelpBanner from '../public/Buildings.png'
import { IoChevronForwardSharp } from 'react-icons/io5'
import Image from 'next/image'

const CorporateVisa = () => {
  return (
    <div className="bg-black">
      <div className="relative px-4 sm:px-10 md:px-16 lg:px-20 text-white overflow-hidden">
        <div className="items-start justify-between relative z-10">
          <div className="text-[#FFD700] font-bold pt-10 flex items-center gap-2 py-8 text-sm sm:text-base">
            Home <IoChevronForwardSharp className="text-white" /> Corporate Visa
          </div>

          <div className="mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Corporate Visa <span className="text-[#FFD700]">Services</span>
            </h1>
            <div className="h-1 w-32 sm:w-40 bg-[#FFD700] mb-6" />
            <p className="text-base sm:text-lg text-white max-w-lg font-semibold">
              Smart solutions for your company’s global mobility.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[250px] sm:h-[300px] z-0">
          <Image
            src={HelpBanner}
            alt="City Background"
            fill
            className="object-cover pointer-events-none"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default CorporateVisa
