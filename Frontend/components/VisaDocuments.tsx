'use client';

import React, { useState } from 'react';
import { FaCalendarCheck, FaFileAlt, FaCamera, FaPassport, FaIdCard, FaNotesMedical, FaFileSignature, FaHotel, FaMoneyBillWave, FaChild, } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const documents = [
  { icon: <FaCalendarCheck />, title: "Appointment Confirmation", content: "You must bring your appointment slip (printed or digital)." },
  { icon: <FaFileAlt />, title: "Application Form", content: "Fill out the visa application form completely and accurately." },
  { icon: <FaCamera />, title: "Passport Size Photo", content: "Provide a recent passport-sized photo with a plain background." },
  { icon: <FaPassport />, title: "Valid Passport", content: "Passport should be valid for the required duration with empty pages." },
  { icon: <FaIdCard />, title: "Proof of Legal Residence", content: "Submit proof of your residence permit or national ID if applicable." },
  { icon: <FaNotesMedical />, title: "Travel Insurance", content: "Insurance should cover emergencies and medical expenses during your trip." },
  { icon: <FaFileSignature />, title: "Sponsor’s Letter (if applicable)", content: "If sponsored, provide a letter of no objection or sponsorship confirmation." },
  { icon: <FaHotel />, title: "Accommodation Details", content: "Include hotel bookings or an invitation letter from the host." },
  { icon: <FaMoneyBillWave />, title: "Financial Proof", content: "Provide recent bank statements or financial documents showing sufficient funds." },
  { icon: <FaChild />, title: "For Minors (Under 18)", content: "Submit birth certificate and consent letter signed by parents/guardians." },
];

const VisaDocuments = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-[#FFD700]">
        Documents Required for Visa Application
      </h2>

      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="border-b pb-3">
            <button
              className="flex w-full items-start justify-between text-left gap-3"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-start gap-3">
                <div className="bg-black border p-2 rounded-lg text-[#FFD700] text-lg">
                  {doc.icon}
                </div>
                <p className="text-[#FFD700] font-medium text-sm sm:text-base">
                  {doc.title}
                </p>
              </div>
              <div className="text-xl text-gray-500">
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
              }`}
            >
              <p className="ml-12 text-sm text-white pr-6">
                {doc.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaDocuments;
