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
          <h3 className="text-md sm:text-lg font-semibold text-[#FFD700]">UAE Citizens</h3>
          <p className="text-sm sm:text-base text-white">
            UAE citizens need to apply for a Schengen visa in Dubai to visit Portugal as tourists.
          </p>
        </div>

        <div className="border-l-2 border-gray-300 pl-4">
          <h3 className="text-md sm:text-lg font-semibold text-[#FFD700]">UAE Residents</h3>
          <p className="text-sm sm:text-base text-white">
            <Link href="#" className="text-[#FFD700] underline">Contact us</Link> to know the eligibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisaRequirementSection;
