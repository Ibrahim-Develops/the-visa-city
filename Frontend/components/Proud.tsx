import React from 'react'
import Image from 'next/image'
import Stars from '../public/stars.png'
import Google from '../public/google.png'

const Proud = () => {
  return (
    <div className="pt-12 py-10 text-center px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-0">
          Proudly Assisted 10,000+ Travelers
        </h2>

        <div className="text-center">
          <Image src={Stars} alt="Star Rating" width={150} className="mx-auto mb-2" />
          <p className="text-2xl font-semibold text-yellow-600">4.8</p>
          <Image src={Google} alt="Google Logo" width={100} className="mx-auto mt-1" />
        </div>
      </div>
    </div>
  )
}

export default Proud
