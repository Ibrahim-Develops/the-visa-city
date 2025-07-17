import About from '@/components/About'
import Footer from '@/components/Footer'
import Proud from '@/components/Proud'
import Travelers from '@/components/Travelers'
import React from 'react'

const page = () => {
  return (
    <div>
        <About/>
        <Travelers/>
        <Proud/>
        <Footer/>
    </div>
  )
}

export default page