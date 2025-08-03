import AddCountry from '@/components/AddCountry'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="pt-24 w-full bg-white">
        <AddCountry/>
      </div>
    </div>
  )
}

export default page