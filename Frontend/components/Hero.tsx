'use client'

import React, { useEffect, useState } from 'react'
import Hero1 from '../assets/Hero1.png'
import Hero2 from '../assets/Hero2.png'
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

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/"/g, "")
        const res = await axios.get("http://localhost:3000/country/all", {
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

  // Handle input changes
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
    <div className="w-full pb-10">
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

          <div className="relative w-full max-w-xl border border-gray-300 rounded-2xl px-6 py-3 flex items-center justify-between gap-4 shadow-sm bg-white">
            <div className="flex items-center gap-4 flex-1 relative">
              <FaPlaneDeparture className="text-[#4b6391] text-2xl" />
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
                        onClick={() => handleSelect(country.id, country.name)}
                      >
                        {country.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <button
              className="bg-[#072343] hover:bg-[#061a30] transition-colors duration-200 text-white p-3 rounded-full"
              onClick={() => {
                const selected = countries.find(
                  (c) => c.name.toLowerCase() === query.toLowerCase()
                )
                if (selected) router.push(`/display/visa/${selected.id}`)
              }}
            >
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
