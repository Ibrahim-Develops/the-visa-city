'use client';

import Image from 'next/image';
import Link from 'next/link';
import W1 from '../public/W1.jpg';
import W2 from '../public/W2.jpg';
import { useState } from 'react';

const WorkPermit2 = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="px-6 py-20 md:px-20 text-white">
      <div className="mt-16 flex justify-center items-center gap-10 flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-[#FFD700] mb-4">Work Permit</h2>
          <p className="mb-4">
            The professional activity of foreign citizens on national territory can only be carried out with a <strong>Work Notice</strong> or a <strong>Work Permit</strong>.
          </p>
          <p className="mb-4">
            According to the European Union regulations, every EU/EEA citizen enjoys the same labour rights as the ones applied to Romanian citizens, and thus, they <strong>do not need a work permit</strong>.
            Foreign citizens who are <strong>third country nationals</strong>, can work in Romania only after obtaining a work permit, and subsequently a long stay visa for work and a residence permit.
          </p>
        </div>

        <div className="md:w-1/2 w-full">
          <Image
            src={W1}
            alt="Work Permit Writing"
            width={5000}
            height={100}
            className="rounded-md w-full aspect-[3/3] object-cover"
          />

          <div className="mt-4 space-y-2">
            <div>
              <div
                className="bg-[#FFD700] text-black px-4 py-2 rounded flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('conditions')}
              >
                <span className="font-semibold">THE CONDITIONS</span>
                <span>{openSection === 'conditions' ? '−' : '+'}</span>
              </div>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openSection === 'conditions' ? 'max-h-40 p-4' : 'max-h-0 p-0'
                } bg-[#333] text-white rounded-b`}
              >
                <ul className="list-disc ml-6 space-y-2">
                  <li>Employer must prove no suitable local candidate is available.</li>
                  <li>All documentation must be provided and translated where needed.</li>
                  <li>Employer must pay taxes and submit an application to IGI.</li>
                </ul>
              </div>
            </div>

            <div>
              <div
                className="bg-[#FFD700] text-black px-4 py-2 rounded flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection('exempted')}
              >
                <span className="font-semibold">CITIZENS WHO ARE <u>EXEMPTED</u></span>
                <span>{openSection === 'exempted' ? '−' : '+'}</span>
              </div>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openSection === 'exempted' ? 'max-h-40 p-4' : 'max-h-0 p-0'
                } bg-[#333] text-white rounded-b`}
              >
                <ul className="list-disc ml-6 space-y-2">
                  <li>EU/EEA citizens</li>
                  <li>Family members of Romanian citizens</li>
                  <li>Persons with permanent residency in Romania</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center items-center gap-10 flex-col-reverse md:flex-row-reverse">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Types of work permits</h3>
          <p className="mb-4">
            There are several <strong>types of work permits</strong> that can be granted to foreign citizens: for permanent workers, seasonal workers, for trainees, for athletes, for cross-border workers, nominal work permit.
            Depending on the category of your activity, <em>the right to extend</em> your temporary stay for employment purposes can be extended up to 1 year, as a general rule. As far as highly skilled workers are concerned, their stay can be extended up to 2 years.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <Image
            src={W2}
            alt="Blocks Numbers"
            width={5000}
            height={100}
            className="rounded-md aspect-[3/3] w-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-[#FFD700] mb-4">Steps to obtain a work permit</h3>
        <p className="mb-4">
          The <strong>steps necessary to obtain a work permit</strong> are initiated by the employer who will submit the necessary files and pay the applicable taxes at the offices of the General Inspectorate for Immigration (IGI).
          It takes up to 30 days for IGI to solve such requests. For additional information, please visit the official IGI page regarding{' '}
          <Link href="https://igi.mai.gov.ro/en/work-permits" target="_blank" className="text-[#FFD700] underline">
            work permits
          </Link>.
        </p>
        <p>
          More details and prerequisites for foreigners can be found on the official website of the Ministry of Labour, Family, Social Protection and Elderly, Work Section -{' '}
          <Link href="https://www.mai.gov.ro/en/information-guide-for-third-country-nationals" target="_blank" className="text-[#FFD700] underline">
            Information guide for third-country nationals
          </Link>.
        </p>
      </div>
    </section>
  );
};

export default WorkPermit2;
