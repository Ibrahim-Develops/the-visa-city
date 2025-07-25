import React from 'react'
import Image from 'next/image'
import DooStep from '../assets/doorstep.png'

const DoorStep = () => {
  return (
    <div className="py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold tracking-widest text-[#FFD700] uppercase mb-4">
            The Visa City
          </p>
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6 leading-tight">
            What Sets Us Apart From Other Visa Services in UAE
          </h2>
          <p className="text-white mb-6">
            At TheVisaCity, we don’t just process visas — we create smooth, stress-free travel experiences designed around you. Here’s what makes us different:
          </p>

          <div className="mb-6">
            <h4 className="font-semibold text-lg text-[#FFD700] mb-1">
              <span className="text-white mr-2">›</span> Personalized, end-to-end support
            </h4>
            <p className="text-white">
              Our dedicated team is with you at every step, guiding you through the entire application process with care, clarity, and personal attention.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-lg text-[#FFD700] mb-1">
              <span className="text-white mr-2">›</span> Proven track record of success
            </h4>
            <p className="text-white">
              As a leading visa company in the UAE, we have a strong history of helping clients secure their visas quickly and confidently. We go the extra mile to make sure you achieve your travel goals without unnecessary delays.
            </p>
          </div>

          <button className="bg-[#FFD700] cursor-pointer duration-300 hover:scale-105 text-black font-bold px-6 py-3 rounded-full transition-all">
            Explore Now
          </button>
        </div>

        <div className="w-full">
          <Image
            src={DooStep}
            alt="Visa at Your Doorstep"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default DoorStep
