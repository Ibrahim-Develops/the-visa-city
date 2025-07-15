'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {Sheet,SheetContent,SheetHeader,SheetTitle,} from '@/components/ui/sheet'
import { FaUser, FaCog, FaFolder, FaBars, FaChartPie } from 'react-icons/fa'
import Image from 'next/image'
import Logo from '../assets/logo.png'
import Logo2 from '../assets/logo2.png'
import { IoHomeOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div onMouseEnter={() => setOpen(true)} className="flex flex-col py-2 gap-10 w-24 items-center border-r-[1px] h-screen border-[#101d2c36]">
        <Image src={Logo2} alt="Logo" className='px-1'/>
        <div className='text-2xl flex flex-col gap-8 text-[#101d2c]'>
          <LuLayoutDashboard />
          <IoHomeOutline />
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 p-0 text-white bg-white [&>button]:text-black" >
          <SheetHeader className="px-4 py-5">
            <SheetTitle>
              <Image src={Logo} alt="Logo" />
            </SheetTitle>
          </SheetHeader>

          <div className="px-10 gap-8 mt-10 text-[#4b6391] flex flex-col justify-center ">
            <Link href="/dashboard" onClick={() => setOpen(false)} className='hover:border-[#4b6391] hover:border-2 rounded-2xl hover:p-2 duration-200'>
              <div className="flex items-center gap-3 cursor-pointer">
                <LuLayoutDashboard className='text-[#101d2c] text-xl' /> Dashboard
              </div>
            </Link>
            <Link href="/overview" onClick={() => setOpen(false)} className='hover:border-[#4b6391] hover:border-2 rounded-2xl hover:p-2 duration-200'>
              <div className="flex items-center gap-3 cursor-pointer">
                <IoHomeOutline className='text-[#101d2c] text-xl' /> Home
              </div>
            </Link>
          </div>

        </SheetContent>
      </Sheet>
    </>
  )
}

export default Sidebar
