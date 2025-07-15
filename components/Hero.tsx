'use client'

import React from 'react'
import Hero1 from '../assets/Hero1.png'
import Hero2 from '../assets/Hero2.png'
import Image from 'next/image'
import { AiOutlineGlobal } from "react-icons/ai"
import { LuShieldCheck } from "react-icons/lu"
import { IoIosFlash } from "react-icons/io"
import { FaPlaneDeparture } from "react-icons/fa"
import { IoSearchOutline } from "react-icons/io5"

const Hero = () => {
  return (
    <div className="w-full px-6 md:px-20 lg:px-40 pb-10">
      <div className="flex flex-wrap justify-between items-center gap-8">
        <Image src={Hero1} alt="hero-left" width={500} className="max-w-full" />

        <div className="flex flex-col gap-8 justify-center items-center flex-1 text-center">
          <h1 className="text-4xl md:text-6xl font-bold flex gap-3 flex-wrap justify-center">
            <span className="text-[#072343]">Visa</span>
            <span className="text-[#4b6391]">Simplified</span>
          </h1>
          <p className="text-gray-600 max-w-lg">
            The world is yours to explore, with smart and effortless visa solutions from the UAE.
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-semibold text-gray-700">
            <div className="flex gap-2 items-center">
              <IoIosFlash className="text-xl text-[#072343]" />
              <p className="text-sm">50+ Countries</p>
            </div>
            <div className="flex gap-2 items-center">
              <AiOutlineGlobal className="text-xl text-[#072343]" />
              <p className="text-sm">Fast & Flexible</p>
            </div>
            <div className="flex gap-2 items-center">
              <LuShieldCheck className="text-xl text-[#072343]" />
              <p className="text-sm">Secure</p>
            </div>
          </div>

          <div className="w-full max-w-xl border border-gray-300 rounded-2xl px-6 py-3 flex items-center justify-between gap-4 shadow-sm bg-white">
            <div className="flex items-center gap-4 flex-1">
              <FaPlaneDeparture className="text-[#4b6391] text-2xl" />
              <div className="w-full">
                <label className="text-xs text-gray-500 font-medium block mb-1">
                  Travelling To
                </label>
                <input
                  type="text"
                  placeholder="Enter country"
                  className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <button className="bg-[#072343] hover:bg-[#061a30] transition-colors duration-200 text-white p-3 rounded-full">
              <IoSearchOutline className="text-xl" />
            </button>
          </div>
        </div>

        <Image src={Hero2} alt="hero-right" width={500} className="max-w-full" />
      </div>

      <div className="custom-dashed-line mt-10"></div>
    </div>
  )
}

export default Hero
