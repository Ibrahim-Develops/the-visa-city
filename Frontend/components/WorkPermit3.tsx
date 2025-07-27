'use client';

import { useState } from 'react';
import Link from 'next/link';

const WorkPermit3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="px-6 py-10 md:px-20 text-white">
      {/* Intro Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Work permit application</h2>
        <p className="mb-4">
          A work permit can only be obtained by the employer, natural person or legal entity, based on the documents submitted to the territorial units of the{' '}
          <Link href="https://igi.mai.gov.ro/en/" target="_blank" className="text-[#FFD700] underline">
            Inspectorate General for Immigration
          </Link>.
        </p>
        <p className="mb-4">
          The employer must also keep the document in order to prove that the employment of the foreign citizen was lawful.
          The employee must always keep a certified copy of the work permit or of the residence permit granted for work purposes.
        </p>
      </div>

      {/* Dropdown Trigger */}
      <div
        className="bg-[#FFD700] text-black px-4 py-2 rounded flex justify-between items-center max-w-xl mb-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">THE WORK PERMIT APPLICATION'S DOCUMENTS</span>
        <span className="text-xl font-bold">{isOpen ? '−' : '+'}</span>
      </div>

      {/* Dropdown Content */}
      <div
        className={`transition-all duration-500 overflow-hidden max-w-xl mb-10 ${
          isOpen ? 'max-h-96 p-4' : 'max-h-0 p-0'
        } bg-[#333] text-white rounded-b`}
      >
        <ul className="list-disc ml-6 space-y-2">
          <li>Application form (standard format)</li>
          <li>Employer’s registration certificate</li>
          <li>Employment contract or offer letter</li>
          <li>Proof of no suitable local candidate (labor market test)</li>
          <li>Tax payment proof for work permit request</li>
          <li>Copy of foreign citizen’s passport</li>
        </ul>
      </div>

      {/* Internal Procedures Section */}
      <div>
        <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Internal Procedures</h2>
        <p className="mb-4">
          After submitting your <strong>application for work permit</strong>, the General Inspectorate for Immigration (IGI) must answer the request within <strong>30 days</strong>.
          The term may be extended by a maximum of 15 days for further verification.
          After obtaining the work permit, foreign citizens must apply for <strong>long term visa</strong> at the Romanian diplomatic missions and consular offices.
        </p>
        <p className="mb-4">
          For foreign citizens who carry out work under a valid work permit, the IGI approval is no longer required, the only mandatory approval being that of the{' '}
          <Link href="https://evisa.mae.ro/" target="_blank" className="text-[#FFD700] underline">
            National Visa Centre
          </Link>{' '}
          for long stay visa for employment purposes. Within 60 days from obtaining your work permit, an application must be filled in for a long-stay visa for employment purposes. Otherwise, the permit will expire.
        </p>
        <p className="mb-4">
          For more details about long-term visa for third-country citizens access the{' '}
          <Link href="https://www.mae.ro/en/node/2035" target="_blank" className="text-[#FFD700] underline">
            'Visas for Foreign Researchers'
          </Link>{' '}
          section of our website or the official website of the Ministry of Foreign Affairs,{' '}
          <Link href="https://www.mae.ro/en/node/2040" target="_blank" className="text-[#FFD700] underline">
            'Long Stay Visa'
          </Link>.
        </p>
        <p className="mb-4">
          The right of residence granted with the long term visa may be extended by filing a request accompanied by a series of documents to the General Inspectorate for Immigration.
          The request must be made at least 30 days before the expiration of the previous residence permit. Along with it, the employment authorisation may also be extended, but only if the work place was maintained.
        </p>
        <p>
          More information regarding the internal procedures for long-term work visas and residence permits can be found on the official website of the General Inspectorate for Immigration, section Residence in Romania for work.
        </p>
      </div>
    </section>
  );
};

export default WorkPermit3;