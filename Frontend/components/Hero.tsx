'use client'

import React, { useEffect, useState } from 'react'
import Hero1 from '../public/Hero1.png'
import Hero2 from '../public/Hero2.png'
import Image from 'next/image'
import { AiOutlineGlobal } from "react-icons/ai"
import { LuShieldCheck } from "react-icons/lu"
import { IoIosFlash } from "react-icons/io"
import { FaPlaneDeparture } from "react-icons/fa"
import { IoSearchOutline } from "react-icons/io5"
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface Country {
  id: number
  name: string
}

const Hero = () => {
  const router = useRouter()
  const [countries, setCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [query, setQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/"/g, "")
        const res = await axios.get("https://13.61.35.24:3000/country/all", {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (Array.isArray(res.data.data)) {
          setCountries(res.data.data)
        }
      } catch (err) {
        console.error("Failed to fetch countries", err)
      }
    }
    fetchCountries()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    if (value.trim() === '') {
      setFilteredCountries([])
    } else {
      setFilteredCountries(
        countries.filter(c =>
          c.name.toLowerCase().includes(value.toLowerCase())
        )
      )
    }
  }

  const handleSelect = (id: number, name: string) => {
    setQuery(name)
    setShowDropdown(false)
    router.push(`/displayvisa/${id}`)
  }

  return (
    <div className="w-full px-4 bg-black z-10 sm:px-6 md:px-10 lg:px-20 xl:px-40 pb-10 relative">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image src={Hero1} alt="hero-left" className="w-full h-auto" />
        </div>

        <div className="flex flex-col gap-8 justify-center items-center text-center flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-wrap justify-center gap-2">
            <span className="text-[#FFD700]">Visa</span>
            <span className="text-[#FFD700]">Simplified</span>
          </h1>

          <p className="text-white max-w-md md:max-w-lg text-sm sm:text-base">
            The world is yours to explore, with smart and effortless visa solutions from the UAE.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-semibold text-white">
            <div className="flex gap-2 items-center text-sm">
              <IoIosFlash className="text-xl text-[#FFD700]" />
              <p>50+ Countries</p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <AiOutlineGlobal className="text-xl text-[#FFD700]" />
              <p>Fast & Flexible</p>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <LuShieldCheck className="text-xl text-[#FFD700]" />
              <p>Secure</p>
            </div>
          </div>

          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl border border-gray-300 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4 shadow-sm bg-white">
            <div className="flex items-center gap-4 flex-1 relative">
              <FaPlaneDeparture className="text-[#FFD700] text-2xl" />
              <div className="w-full text-left relative">
                <label className="text-xs text-gray-500 font-medium block mb-1">
                  Travelling To
                </label>
                <input
                  type="text"
                  value={query}
                  onFocus={() => setShowDropdown(true)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                  onChange={handleInputChange}
                  placeholder="Enter country"
                  className="w-full text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
                />

                 {showDropdown && filteredCountries.length > 0 && (
                  <ul className="absolute z-10 bg-white border border-gray-300 rounded-md w-full mt-1 max-h-60 overflow-y-auto shadow-md">
                    {filteredCountries.map((country) => (
                      <li
                        key={country.id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onMouseDown={() => handleSelect(country.id, country.name)}
                      >
                        {country.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <button
              className="bg-[#FFD700] transition-colors duration-200 text-white p-3 rounded-full"
              onClick={() => {
                const selected = countries.find(
                  (c) => c.name.toLowerCase() === query.toLowerCase()
                )
                if (selected) router.push(`/display/visa/${selected.id}`)
              }}
            >
              <IoSearchOutline className="text-xl text-black " />
            </button>
          </div>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <Image src={Hero2} alt="hero-right" className="w-full h-auto" />
        </div>
      </div>

      <div className="custom-dashed-line mt-10" />
    </div>
  )
}

export default Hero
