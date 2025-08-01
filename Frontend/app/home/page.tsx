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
import Navbar from '@/components/Navbar';
import BG from '../../public/herobg.png'
import BG3 from '../../public/herobg3.png'
import ParticlesCanvas from '@/animations/ParticlesCanvas';

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />

      <div
        className="w-full pt-32 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG3.src})` }}
      >
        <Hero />
      </div>

      <div className="relative px-6 md:px-20 lg:px-[180px] pt-24 w-full bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesCanvas />
        </div>

        <div className="relative z-10">
          <Countries />
          <Carousel />
          <Assistance />
          <VisaService />
          <Google />
          <Reviews />
          <Questions />
        </div>
      </div>

      <div
        className="w-full pt-24 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG.src})` }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default page;
