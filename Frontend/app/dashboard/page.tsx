import React from 'react'
import Dashboard from '@/components/Dashboard'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="px-6 md:px-20 lg:px-[180px] pt-24 w-full bg-black">
        <Dashboard />
      </div>
    </div>
  )
}

export default page