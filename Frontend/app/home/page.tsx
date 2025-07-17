import React from 'react'
import Assistance from "@/components/Assistance";
import Carousel from "@/components/Carousel";
import Countries from "@/components/Countries";
import Footer from "@/components/Footer";
import Google from "@/components/Google";
import Hero from "@/components/Hero";
import Questions from "@/components/Questions";
import Reviews from "@/components/Reviews";
import VisaService from "@/components/VisaService";

const page = () => {
  return (
     <div className="px-6 md:px-20 lg:px-[180px] w-full flex flex-col justify-center items-center">
      <Hero />
      <Countries />
      <Carousel />
      <Assistance />
      <VisaService />
      <Google />
      <Reviews />
      <Questions />
      <Footer />
    </div>
  )
}

export default page