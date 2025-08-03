import React from 'react'
import Navbar from '@/components/Navbar'
import UpdateBlog from '@/components/UpdateBlog'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="pt-24 w-full bg-white h-screen">
        <UpdateBlog/>
      </div>
    </div>
  )
}

export default page