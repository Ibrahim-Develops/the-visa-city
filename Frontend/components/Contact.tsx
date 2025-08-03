'use client';

import React from 'react';
import HelpBanner from '../public/Buildings.png';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="relative h-[400px] bg-black w-full bg-cover bg-center text-white overflow-hidden flex items-center px-5 md:px-20">
      <div className="relative z-10 max-w-screen-xl w-full mx-auto">
        <div className="text-[#FFD700] font-bold pt-10 flex items-center gap-2 py-8">
          Home <IoChevronForwardSharp className="text-white" /> Contact
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="text-[#FFD700]">The Visa City.</span>
        </h1>
        <div className="h-1 w-40 bg-[#FFD700] mb-6" />
        <p className="text-lg text-white max-w-lg font-semibold">
          Best Customer Support.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[400px] z-0">
                <Image
                    src={HelpBanner}
                    alt="City Background"
                    fill
                    className="pointer-events-none object-cover"
                />
            </div>
    </section>
  );
};

export default Contact;
