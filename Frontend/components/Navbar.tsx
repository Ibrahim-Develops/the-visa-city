'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { IoHomeOutline } from "react-icons/io5"
import { LuLayoutDashboard } from "react-icons/lu"
import Image from 'next/image'
import Logo from '../assets/logo.png'
import Logo2 from '../assets/logo2.png'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaGlobeAmericas } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef(null)
  const [shouldTrackLeave, setShouldTrackLeave] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (open) {
      timeout = setTimeout(() => setShouldTrackLeave(true), 150)
    } else {
      setShouldTrackLeave(false)
    }

    return () => clearTimeout(timeout)
  }, [open])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!shouldTrackLeave) return

      const sidebarEl = sidebarRef.current as HTMLElement | null
      const sheetEl = document.querySelector('[data-side="left"]') as HTMLElement | null

      if (!sidebarEl || !sheetEl) return

      const inSidebar = sidebarEl.contains(e.target as Node)
      const inSheet = sheetEl.contains(e.target as Node)

      if (!inSidebar && !inSheet) {
        setOpen(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [shouldTrackLeave])

  const pathname = usePathname();

  const getIconClass = (allowedPaths: string | string[]) => {
    return allowedPaths.includes(pathname)
      ? 'border-2 border-[#101d2c] rounded-xl p-2 bg-gray-100'
      : 'hover:bg-gray-100 p-2 rounded-xl';
  }

  return (
    <>
      <div
        ref={sidebarRef}
        onMouseEnter={() => setOpen(true)}
        className="flex flex-col py-2 gap-10 w-24 items-center border-r-[1px] h-screen border-[#101d2c36]"
      >
        <Image src={Logo2} alt="Logo" className='px-1' />
        <div className="text-2xl flex flex-col gap-6 text-[#101d2c]">
          <Link href="/dashboard">
            <div className={getIconClass(["/login", '/dashboard', '/dashboard/addcountry'])}>
              <LuLayoutDashboard />
            </div>
          </Link>
          <Link href="/overview">
            <div className={getIconClass('/home')}>
              <IoHomeOutline />
            </div>
          </Link>
          <Link href="/about">
            <div className={getIconClass('/about')}>
              <HiOutlineInformationCircle />
            </div>
          </Link>
          <Link href="/contact">
            <div className={getIconClass('/contact')}>
              <TfiHeadphoneAlt />
            </div>
          </Link>
          <Link href="/countries">
            <div className={getIconClass('/countries')}>
              <FaGlobeAmericas />
            </div>
          </Link>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          data-side="left"
          className="w-64 p-0 text-white bg-white [&>button]:text-black z-50"
        >
          <SheetHeader className="px-4 py-5">
            <SheetTitle>
              <Image src={Logo} alt="Logo" />
            </SheetTitle>
          </SheetHeader>

          <div className="px-10 gap-8 mt-10 text-[#4b6391] flex flex-col justify-center">
            <Link href="/login" onClick={() => setOpen(false)} className='hover:border-[#4b6391] hover:border-2 rounded-2xl hover:p-2 duration-200'>
              <div className="flex items-center gap-3 cursor-pointer">
                <LuLayoutDashboard className='text-[#101d2c] text-xl' /> Dashboard
              </div>
            </Link>
            <Link href="/home" onClick={() => setOpen(false)} className='hover:border-[#4b6391] hover:border-2 rounded-2xl hover:p-2 duration-200'>
              <div className="flex items-center gap-3 cursor-pointer">
                <IoHomeOutline className='text-[#101d2c] text-xl' /> Home
              </div>
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className='hover:border-[#4b6391] hover:border-2 rounded-2xl hover:p-2 duration-200'>
              <div className="flex items-center gap-3 cursor-pointer">
                <HiOutlineInformationCircle className='text-[#101d2c] text-xl' /> About
              </div>
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className='hover:border-[#4b6391] hover:border-2 rounded-2xl hover:p-2 duration-200'>
              <div className="flex items-center gap-3 cursor-pointer">
                <TfiHeadphoneAlt className='text-[#101d2c] text-xl' /> Contact
              </div>
            </Link>
            <Link href="/countries" onClick={() => setOpen(false)} className='hover:border-[#4b6391] hover:border-2 rounded-2xl hover:p-2 duration-200'>
              <div className="flex items-center gap-3 cursor-pointer">
                <FaGlobeAmericas className='text-[#101d2c] text-xl' /> Countries
              </div>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Sidebar
