import React from 'react';
import Link from 'next/link';

const VisaRequirementSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#FFD700]">
        Who needs a Visa?
      </h2>

      <div className="space-y-6">
        <div className="border-l-2 border-gray-300 pl-4">
          <h3 className="text-md sm:text-lg font-semibold text-[#FFD700]">Travelers</h3>
          <p className="text-sm sm:text-base text-white">
            Travelers may need to apply for a visa depending on their nationality and purpose of visit.
          </p>
        </div>

        <div className="border-l-2 border-gray-300 pl-4">
          <h3 className="text-md sm:text-lg font-semibold text-[#FFD700]">Residents</h3>
          <p className="text-sm sm:text-base text-white">
            <Link href="#" className="text-[#FFD700] underline">Contact us</Link> to check your visa eligibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisaRequirementSection;
  