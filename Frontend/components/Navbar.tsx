'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.png'
import { IoHomeOutline } from "react-icons/io5"
import { FaGlobeAmericas, FaBlog } from "react-icons/fa"
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { MdWorkOutline } from "react-icons/md"
import { RiBuilding2Line } from "react-icons/ri"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { usePathname } from 'next/navigation'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const getIconClass = (path: string) => {
    return pathname === path
      ? 'border-2 border-yellow-500 text-yellow-400 bg-black rounded-xl w-20 h-20 flex justify-center shadow-lg'
      : 'hover:text-yellow-400 hover:border-yellow-400 border border-transparent flex justify-center rounded-xl w-20 h-20 transition-all duration-300';
  }

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 bg-black border-b text-center border-gray-900 left-0 w-full shadow-lg z-50">
      <div className="flex justify-between items-center px-6 py-3">
        <Image src={Logo} alt="Logo" className="h-12 w-auto" />

        <div className="hidden lg:flex gap-6 text-2xl text-gray-300">
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

          <a href="https://wa.me/971547499849" target="_blank" rel="noopener noreferrer">
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

        <div className="lg:hidden block text-gray-300 text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700 px-6 py-4 pb-4 text-gray-300 flex flex-col gap-4">
          {[
            { href: '/home', icon: <IoHomeOutline />, label: 'Home' },
            { href: '/countries', icon: <FaGlobeAmericas />, label: 'Countries' },
            { href: '/workpermit', icon: <MdWorkOutline />, label: 'Work Permit' },
            { href: 'https://wa.me/971547499849', icon: <HiOutlineInformationCircle />, label: 'Urgent Appointment', external: true },
            { href: '/corporatevisa', icon: <RiBuilding2Line />, label: 'Corporate Visa' },
            { href: '/blog', icon: <FaBlog />, label: 'Blog' },
            { href: '/about', icon: <HiOutlineInformationCircle />, label: 'About' },
            { href: '/contact', icon: <TfiHeadphoneAlt />, label: 'Contact' }
          ].map((item, index) => (
            item.external ? (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-yellow-400 transition">
                {item.icon}
                {item.label}
              </a>
            ) : (
              <Link key={index} href={item.href} onClick={() => setIsOpen(false)}>
                <div className="flex items-center gap-3 text-sm hover:text-yellow-400 transition">
                  {item.icon}
                  {item.label}
                </div>
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar;
