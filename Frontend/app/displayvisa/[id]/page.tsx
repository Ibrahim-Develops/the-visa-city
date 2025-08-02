'use client';

import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SpecCountry from '@/components/SpecCountry';
import VisaDocuments from '@/components/VisaDocuments';
import VisaRequirementSection from '@/components/VisaRequirementSection';
import VisaSteps from '@/components/VisaSteps';
import ParticlesCanvas from '@/animations/ParticlesCanvas';
import BG from '../../../public/herobg.png'

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />

      <div className="relative px-6 md:px-20 lg:px-[180px] w-full bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <ParticlesCanvas />
        </div>

        <div className="relative z-10">
           <SpecCountry />
            <VisaRequirementSection />
            <VisaDocuments />
            <VisaSteps />
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
