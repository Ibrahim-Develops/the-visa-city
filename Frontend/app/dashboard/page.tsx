import React from 'react'
import Dashboard from '@/components/Dashboard'
import Navbar from '@/components/Navbar'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="pt-24 w-full bg-white h-screen">
        <Dashboard />
      </div>
    </div>
  )
}

export default page