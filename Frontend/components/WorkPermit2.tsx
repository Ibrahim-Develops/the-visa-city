'use client';

import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';
import WP1 from '../public/WP1.png'
import WP2 from '../public/WP2.png'
import WP3 from '../public/WP3.png'
import WP4 from '../public/WP4.png'
import WP5 from '../public/WP5.png'

const data = [
  {
    image: WP1,
    title: '🇭🇺 Work in the Heart of Europe – Hungary Awaits You',
    description:
      'Hungary is quickly becoming a top choice for international professionals. With a booming job market, affordable lifestyle, and central location — it’s the ideal place to build your future.',
    need:
      'If you are a UAE resident holding a non-Emirati passport and have received a job offer from a Hungarian employer, you must apply for a Hungary Work Visa (Long-Term Type D) before starting employment.',
    documents: [
      'Valid Passport Copy (minimum 6 months validity)',
      'UAE Residence Visa Copy',
      'Emirates ID Copy',
      'Signed Employment Contract from Hungarian Employer',
      'Employer’s Letter of Intent / Work Permit Application Approval',
      'Educational & Professional Qualification Documents',
      'Updated CV / Resume',
      'Proof of Accommodation in Hungary',
      'Passport-size Photograph (white background)',
      'Travel Insurance (initial entry period)',
      'Police Clearance Certificate (if required)',
    ],
    notes: [
      'The Hungarian employer must initiate the work permit application with the Immigration and Asylum Office in Hungary.',
      'Once approved, the employee applies for a Type D Work Visa at the Hungarian Consulate.',
      'Processing times may vary depending on the employer’s documents and embassy workload.',
    ],
  },
  {
    image: WP2,
    title: '🇷🇴 Romania Work Permit Visa from Dubai, UAE',
    description:
      'Romania is emerging as a hub for skilled professionals across various industries. With affordable living, expanding opportunities, and a strategic European location — it\'s the perfect place to advance your career.',
    need:
      'If you are a UAE resident holding a non-Emirati passport and have received a confirmed job offer from a Romanian employer, you must apply for a Long-Stay (D/AM) Work Visa after the employer obtains a work authorization on your behalf from Romanian authorities.',
    documents: [
      'Valid Passport Copy (minimum 6 months validity)',
      'UAE Residence Visa Copy',
      'Emirates ID Copy',
      'Official Work Permit from Romanian Immigration',
      'Signed Employment Contract / Job Offer Letter',
      'Educational & Professional Qualification Documents',
      'Updated CV / Resume',
      'Police Clearance Certificate (attested)',
      'Proof of Accommodation in Romania',
      'Passport-size Photograph (white background)',
      'Travel Insurance (for visa issuance period)',
      'Visa Application Form (filled and signed)',
    ],
    notes: [
      'The Romanian employer applies for the work authorization inside Romania first.',
      'Once approved, you apply for the D/AM Long-Stay Work Visa at the Romanian Embassy.',
      'After arrival in Romania, you must register and obtain a residence permit within 30 days.',
    ],
  },
  {
    image: WP3,
    title: '🇵🇹 Portugal Work Permit Visa from Dubai, UAE',
    description:
      'With a growing economy, friendly lifestyle, and one of the best climates in Europe — Portugal offers great career opportunities across tech, tourism, construction, agriculture, and more.',
    need:
      'If you are a UAE resident holding a non-Emirati passport and have received a confirmed job offer from a Portuguese employer, you must apply for a Long-Stay Work Visa (Type D) after the employer obtains a work contract approved by Portuguese authorities.',
    documents: [
      'Valid Passport Copy (minimum 6 months validity)',
      'UAE Residence Visa Copy',
      'Emirates ID Copy',
      'Signed Employment Contract from Portuguese Employer',
      'Proof of Accommodation in Portugal',
      'Educational & Professional Certificates',
      'Updated CV / Resume',
      'Police Clearance Certificate (attested)',
      'Medical Travel Insurance',
      'Passport-size Photograph (white background)',
      'Visa Application Form (filled and signed)',
    ],
    notes: [
      'Employer applies for a Work Contract or Authorization at SEF (Portuguese Immigration).',
      'Once approved, the applicant applies for a Long-Stay (D) Work Visa.',
      'After arriving in Portugal, you must apply for a Residence Permit (within 4 months).',
      'Family members can apply as dependents under certain visa categories.',
    ],
  },
  {
    image: WP4,
    title: '🇲🇹 Malta Work Permit Visa from Dubai, UAE',
    description:
    'With its booming economy, English-speaking environment, and beautiful coastal lifestyle, Malta is a rising destination for skilled workers in Europe. From hospitality and healthcare to construction and tech — job opportunities are growing fast.',
    need:
    'If you are a UAE resident holding a non-Emirati passport and have a confirmed job offer from a Maltese employer, you will need to apply for a Single Permit (Long-Stay Work Visa) before relocating to Malta.',
    documents: [
      'Valid Passport Copy (minimum 6 months validity)',
      'UAE Residence Visa Copy',
      'Emirates ID Copy',
      'Signed Employment Contract from Maltese Employer',
      'Job Description / Position Details',
      'CV / Resume with Experience Proof',
      'Academic & Professional Certificates',
      'Passport-size Photograph (white background)',
      'Police Clearance Certificate (attested)',
      'Proof of Accommodation in Malta',
      'Travel Insurance (initial period)',
      'Filled Visa Application Form',
    ],
    notes: [
      'The employer in Malta must submit the Single Permit application on your behalf.',
      'After approval, you will receive authorization to apply for the National (D) Visa.',
      'Once you arrive in Malta, you must collect your Residence Permit within 90 days.',
      'Processing time may take up to 6–8 weeks.',
    ],
  },
  {
    image: WP5,
    title: '🇧🇬 Bulgaria Work Permit Visa from Dubai, UAE',
    description:
      'Bulgaria is rapidly becoming a destination for skilled professionals in sectors such as IT, construction, hospitality, healthcare, and manufacturing. With its affordable lifestyle, growing economy, and access to the European Union market, Bulgaria offers excellent career opportunities.Whether you’re moving for a job or hiring international staff, The Visa City makes the Bulgaria work permit process simple, fast, and hassle-free from the UAE.',
    need:
      'If you are a UAE resident holding a non-Emirati passport and have received a confirmed job offer from a Bulgarian employer, you must apply for a Long-Term Work Visa after your employer obtains a work permit approval from the Bulgarian Employment Agency on your behalf.',
    documents: [
      'Valid Passport Copy (minimum 6 months validity)',
      'UAE Residence Visa Copy',
      'Emirates ID Copy',
      'Official Work Permit Approval from Bulgarian Employment Agency',
      'Signed Employment Contract / Job Offer Letter',
      'Educational & Professional Qualification Certificates (attested if required)',
      'Updated CV / Resume',
      'Police Clearance Certificate (attested)',
      'Proof of Accommodation in Bulgaria',
      'Passport-size Photograph (white background)',
      'Travel Insurance (covering visa validity period)',
      'Completed Visa Application Form',
    ],
    notes: [
      'The Bulgarian employer applies for your work permit approval first.',
      'Once approved, you apply for the long-term work visa at the Bulgarian Embassy/Consulate.',
      'Upon arrival in Bulgaria, you must register and obtain a residence permit within 14 days.',
    ],
  },
];

const WhyChooseVisaCity = () => (
  <div className="space-y-2">
    <h3 className="font-semibold text-lg">Why Choose Visa City?</h3>
    <ul className="space-y-1 text-sm text-white">
      {[
        '100% Confidentiality',
        'Professional support from start to finish',
        'Accurate documentation & form filling',
        'On-time submission & biometric scheduling',
        'Real-time tracking & updates',
      ].map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

const ApplyNow = () => (
  <div className="space-y-2">
    <h3 className="font-semibold text-lg">Apply Now</h3>
    <p className="text-sm">
      Secure your Hungary work permit the right way with <strong>Visa City</strong>.
    </p>
    <ul className="text-sm text-gray-800">
      <li className="flex items-center gap-2 text-white">
        <FaEnvelope className="text-[#FFD700]" /> info@thevisacity.com
      </li>
      <li className="flex items-center gap-2 text-white">
        <FaPhone className="text-[#FFD700]" /> +971-54-7499849
      </li>
      <li className="flex items-center gap-2">
        <FaGlobe className="text-white" />
        <a href="https://www.thevisacity.com" target="_blank" className="text-[#FFD700] underline">
          www.thevisacity.com
        </a>
      </li>
    </ul>
  </div>
);

const WorkPermit2 = () => {
  return (
    <div className="space-y-16 p-6 md:p-12 text-[#FFD700]">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center gap-8 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
        >
          <div className="w-full lg:w-1/2">
            <Image
              src={item.image}
              alt={item.title}
              width={700}
              height={400}
              className="rounded-md object-cover w-full"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-4">
            <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="text-sm text-white">{item.description}</p>

            <p className="text-sm text-white">
              Whether you're starting a new job or hiring talent, Visa City makes the work
              permit process smooth and stress-free from the UAE.
            </p>

            <h3 className="font-semibold flex items-center gap-2 mt-4">
              Who Needs a Work Permit Visa?
            </h3>
            <p className="text-sm text-white">{item.need}</p>

            <h3 className="font-semibold mt-4 mb-1 flex items-center gap-2">
              Documents Required
            </h3>
            <ul className="list-disc list-inside text-sm text-white space-y-1">
              {item.documents?.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>

            <h3 className="font-semibold mt-4 mb-1 flex items-center gap-2">
              Additional Notes
            </h3>
            <ul className="text-sm text-white space-y-1">
              {item.notes?.map((note, i) => (
                <li key={i} className="flex gap-2">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        <WhyChooseVisaCity />
        <ApplyNow />
      </div>
    </div>
  );
};


export default WorkPermit2;
