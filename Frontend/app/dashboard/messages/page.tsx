import Messages from '@/components/Messages'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="px-6 md:px-20 lg:px-[180px] pt-24 w-full bg-white">
        <Messages/>
      </div>
    </div>
  )
}

export default page