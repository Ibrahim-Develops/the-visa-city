import CorporateVisa from '@/components/CorporateVisa'
import CountriesCovered from '@/components/CountriesCovered'
import CTASection from '@/components/CTASection'
import IntroText from '@/components/IntroText'
import ServiceCards from '@/components/ServiceCards'
import React from 'react'
import BG from '../../assets/herobg.png'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticlesCanvas from '@/animations/ParticlesCanvas'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="px-6 md:px-20 lg:px-[180px] pt-24 w-full bg-black">
        <ParticlesCanvas/>
         <CorporateVisa/>
         <IntroText/>
         <ServiceCards/>
         <CountriesCovered/>
         <CTASection/>
      </div>
      <div className="w-full pt-24 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG.src})` }}>
        <Footer />
      </div>
    </div>
  )
}

export default page