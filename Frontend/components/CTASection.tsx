import React from 'react';
import { RiMailDownloadFill } from "react-icons/ri";

const CTASection = () => {
  return (
    <section className="text-white py-16 px-6 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-4 text-[#FFD700] text-center">Partner With Us</h2>
      <p className="mb-6 max-w-2xl mx-auto text-lg text-center">
        Whether you’re a startup or a multinational, let <span className="font-semibold">The Visa City</span> manage your visa needs — so your team can focus on what they do best.
      </p>
       <a href="https://wa.me/971547499849" target="_blank" rel="noopener noreferrer" 
        className="bg-black font-semibold px-6 py-3 text-center w-fit flex justify-center items-center gap-2 rounded-lg shadow-lg border hover:scale-105 transition"
      >
        <RiMailDownloadFill className='text-[#FFD700] text-2xl'/> Contact Us for a Consultation
      </a>
    </section>
  );
};

export default CTASection;
