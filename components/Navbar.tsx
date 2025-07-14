'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { FaUser, FaCog, FaFolder, FaBars, FaChartPie } from 'react-icons/fa'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        onMouseEnter={() => setOpen(true)}
        className="fixed top-0 left-0 h-full w-16 bg-[#0e0f29] flex flex-col items-center py-4 space-y-6 z-50"
      >
        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-black font-bold">
          <span className="text-sm">C</span>
        </div>
        <FaChartPie className="text-white text-xl" />
        <FaFolder className="text-white text-xl" />
        <FaUser className="text-white text-xl" />
        <FaCog className="text-white text-xl" />
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 p-0 bg-[#0e0f29] text-white">
          <SheetHeader className="px-4 py-5">
            <SheetTitle>
              <div className="flex items-center gap-2">
                <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">C</div>
                <h2 className="text-xl font-semibold">CodingLab</h2>
              </div>
            </SheetTitle>
          </SheetHeader>

          <div className="px-4 pt-4 space-y-6">
            {/* Main Menu */}
            <div>
              <p className="text-xs uppercase text-gray-400 mb-2">Main Menu</p>
              <div className="space-y-3">
                <Link href="/dashboard" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-3 cursor-pointer"><FaChartPie /> Dashboard</div>
                </Link>
                <Link href="/overview" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-3 cursor-pointer"><FaBars /> Overview</div>
                </Link>
                <Link href="/analytics" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-3 cursor-pointer"><FaFolder /> Analytic</div>
                </Link>
              </div>
            </div>

            {/* General */}
            <div>
              <p className="text-xs uppercase text-gray-400 mb-2">General</p>
              <div className="space-y-3">
                <Link href="/projects" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-3 cursor-pointer"><FaFolder /> Projects</div>
                </Link>
                <Link href="/groups" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-3 cursor-pointer"><FaFolder /> Groups</div>
                </Link>
                <Link href="/reports" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-3 cursor-pointer"><FaFolder /> Reports</div>
                </Link>
              </div>
            </div>

            {/* Account */}
            <div>
              <p className="text-xs uppercase text-gray-400 mb-2">Account</p>
              <div className="space-y-3">
                <Link href="/profile" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-3 cursor-pointer"><FaUser /> Profile</div>
                </Link>
                <Link href="/settings" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-3 cursor-pointer"><FaCog /> Settings</div>
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3">
            <img src="/avatar.png" alt="avatar" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-medium">Eva Murphy</p>
              <p className="text-xs text-gray-400">Web Developer</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Sidebar
