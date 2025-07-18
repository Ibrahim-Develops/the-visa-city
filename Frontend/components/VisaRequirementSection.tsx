import React from 'react';
import Link from 'next/link';

const VisaRequirementSection = () => {
  return (
    <div className="px-20 py-10">
      <h2 className="text-2xl font-bold mb-6">Who needs a Portugal Visa?</h2>

      <div className="space-y-6">
        <div className="border-l-2 border-gray-300 pl-4">
          <h3 className="text-lg font-semibold">UAE Citizens</h3>
          <p className="text-gray-700">
            UAE citizens need to apply for a Schengen visa in Dubai to visit Portugal as tourists.
          </p>
        </div>

        <div className="border-l-2 border-gray-300 pl-4">
          <h3 className="text-lg font-semibold">UAE Residents</h3>
          <p className="text-gray-700">
            <Link href="#" className="text-[#4b6391] underline">Contact us</Link> to know the eligibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisaRequirementSection;
