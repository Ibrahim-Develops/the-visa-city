'use client';

import React, { useState } from 'react';
import {
  FaFileAlt,
  FaCalendarCheck,
  FaWpforms,
  FaUserClock,
  FaMoneyBillAlt,
} from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const steps = [
  {
    icon: <FaFileAlt />,
    title: "Gather Documents",
    description: "Collect all required documents like passport, photos, application form, travel insurance, and accommodation proof.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Book an Appointment",
    description: "Schedule your visa appointment online through the official consulate or visa center.",
  },
  {
    icon: <FaWpforms />,
    title: "Fill Out the Application",
    description: "Carefully complete the Schengen visa form and ensure all information is accurate.",
  },
  {
    icon: <FaUserClock />,
    title: "Attend the Appointment",
    description: "Reach the visa center on time with all original documents and attend the biometric appointment.",
  },
  {
    icon: <FaMoneyBillAlt />,
    title: "Pay the Visa Fee",
    description: "Visa fee can be paid at the center or online, depending on the provider. Keep the receipt for proof.",
  },
];

const VisaSteps = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-10 text-[#FFD700]">
        How to Apply for a Portugal Visa For UAE Residents
      </h2>

      <div className="relative">
        <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-[#FFD700]" />

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-12 sm:pl-16 border-b pb-4">
              <div
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer"
                onClick={() => toggle(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-black z-10 relative w-8 h-8 flex items-center justify-center rounded-lg border text-[#FFD700] text-base">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-sm text-white">Step {index + 1}:</p>
                    <p className="text-[#FFD700] font-semibold text-sm sm:text-base">{step.title}</p>
                  </div>
                </div>

                <div className="text-xl text-gray-500">
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
                }`}
              >
                <p className="ml-12 text-sm text-white pr-6">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-xs sm:text-sm text-white flex items-start sm:items-center gap-2">
        <svg
          className="w-4 h-4 flex-shrink-0 mt-0.5 sm:mt-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        <span>All dates are estimated and may vary depending on the applicant.</span>
      </div>
    </div>
  );
};

export default VisaSteps;
