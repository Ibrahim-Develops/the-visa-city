'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo.png'
import { IoHomeOutline } from "react-icons/io5"
import { FaGlobeAmericas, FaBlog } from "react-icons/fa"
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { MdWorkOutline } from "react-icons/md"
import { RiBuilding2Line } from "react-icons/ri"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { usePathname } from 'next/navigation'
``
const Navbar = () => {
  const pathname = usePathname();

  const getIconClass = (path: string) => {
    return pathname === path
      ? 'border-2 border-yellow-500 text-yellow-400 bg-black rounded-xl w-16 h-16 flex justify-center shadow-lg'
      : 'hover:text-yellow-400 hover:border-yellow-400 border border-transparent flex justify-center rounded-xl w-16 h-16 transition-all duration-300';
  }

  return (
    <nav className="fixed top-0 bg-black border-b-[1px] border-gray-900 left-0 w-full shadow-lg z-50">
      <div className="flex justify-between text-center items-center px-6 py-3">
        <Image src={Logo} alt="Logo" className="h-20 w-auto" />

        <div className="flex gap-6 text-2xl text-gray-300">
          <Link href="/home">
            <div className={`${getIconClass('/home')} flex flex-col items-center gap-1 cursor-pointer`}>
              <IoHomeOutline className="text-xl" />
              <p className="text-xs font-medium">Home</p>
            </div>
          </Link>

          <Link href="/countries">
            <div className={`${getIconClass('/countries')} flex flex-col items-center gap-1 cursor-pointer`}>
              <FaGlobeAmericas className="text-xl" />
              <p className="text-xs font-medium">Countries</p>
            </div>
          </Link>

          <Link href="/workpermit">
            <div className={`${getIconClass('/workpermit')} flex flex-col items-center gap-1 cursor-pointer`}>
              <MdWorkOutline className="text-xl" />
              <p className="text-xs font-medium">Work Permit</p>
            </div>
          </Link>

          <a href="https://wa.me/971547499849" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <div className={`${getIconClass('/urgentappointment')} flex flex-col items-center gap-1 cursor-pointer`}>
              <HiOutlineInformationCircle className="text-xl" />
              <p className="text-xs font-medium">Urgent Appointment</p>
            </div>
          </a>

          <Link href="/corporatevisa">
            <div className={`${getIconClass('/corporatevisa')} flex flex-col items-center gap-1 cursor-pointer`}>
              <RiBuilding2Line className="text-xl" />
              <p className="text-xs font-medium">Corporate Visa</p>
            </div>
          </Link>

          <Link href="/blog">
            <div className={`${getIconClass('/blog')} flex flex-col items-center gap-1 cursor-pointer`}>
              <FaBlog className="text-xl" />
              <p className="text-xs font-medium">Blog</p>
            </div>
          </Link>

          <Link href="/about">
            <div className={`${getIconClass('/about')} flex flex-col items-center gap-1 cursor-pointer`}>
              <HiOutlineInformationCircle className="text-xl" />
              <p className="text-xs font-medium">About</p>
            </div>
          </Link>

          <Link href="/contact">
            <div className={`${getIconClass('/contact')} flex flex-col items-center gap-1 cursor-pointer`}>
              <TfiHeadphoneAlt className="text-xl" />
              <p className="text-xs font-medium">Contact</p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
