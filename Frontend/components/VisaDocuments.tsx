'use client';

import React, { useState } from 'react';
import {
  FaCalendarCheck,
  FaFileAlt,
  FaCamera,
  FaPassport,
  FaIdCard,
  FaNotesMedical,
  FaFileSignature,
  FaHotel,
  FaMoneyBillWave,
  FaChild,
} from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const documents = [
  { icon: <FaCalendarCheck />, title: "Appointment confirmation", content: "You must bring your appointment slip printed or digital." },
  { icon: <FaFileAlt />, title: "Application Form", content: "Fill out the Schengen visa application form completely." },
  { icon: <FaCamera />, title: "Passport Size Photo", content: "Provide a recent passport-sized photo (white background)." },
  { icon: <FaPassport />, title: "Passport", content: "Passport must be valid for at least 6 months with 2 blank pages." },
  { icon: <FaIdCard />, title: "UAE Residence Visa", content: "A valid UAE residence visa with at least 3 months validity." },
  { icon: <FaNotesMedical />, title: "Travel Insurance", content: "Insurance must cover €30,000 for medical emergencies." },
  { icon: <FaFileSignature />, title: "Sponsor’s Letter (NOC)", content: "If sponsored, submit a NOC from your employer/sponsor." },
  { icon: <FaHotel />, title: "Details About Accommodation", content: "Provide hotel bookings or a confirmed invitation letter." },
  { icon: <FaMoneyBillWave />, title: "Financial Proof", content: "Include 3 months bank statement showing sufficient funds." },
  { icon: <FaChild />, title: "For Minors (Under 18)", content: "Birth certificate and consent letter from parents are required." },
];

const VisaDocuments = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-[#FFD700]">
        Documents Required for Portugal Visa Application
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
