import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import React from 'react'
import { IoChevronForwardSharp } from 'react-icons/io5'
const page = () => {
  return (
    <div>
      <div className='text-[#4b6391] font-bold px-20 pt-10 flex items-center gap-2'>Home <IoChevronForwardSharp /> Contact  </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page