'use client';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { FaFileAlt } from 'react-icons/fa';

interface Step {
  title: string;
  description: string;
}

interface Country {
  id: number;
  name: string;
  price: string;
  flag: string;
  mainImage: string;
  extraImg1: string;
  extraImg2: string;
  category: string[];
  region: string[];
  step: {
    id: number;
    steps: Step[];
  };
}

const VisaDocuments = () => {
  const { id } = useParams();
  const [data, setData] = useState<Country | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        if (!id) return;
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/country/${id}`, {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` }
        });

        const countryData: Country = res.data.data;
        setData(countryData);

        const imgArray = [countryData.mainImage];
        if (countryData.extraImg1) imgArray.push(countryData.extraImg1);
        if (countryData.extraImg2) imgArray.push(countryData.extraImg2);
        setImages(imgArray);
      } catch (error) {
        console.error("Failed to fetch country:", error);
      }
    };
    fetchCountry();
  }, [id]);

  if (!data) return <p className="pt-20 px-20">Loading documents details...</p>;

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-[#FFD700]">
        Documents Required for Visa Application
      </h2>

      <div className="space-y-4">
        {data.step.steps.map((doc, index) => (
          <div key={index} className="border-b pb-3">
            <button
              className="flex w-full items-start justify-between text-left gap-3"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-start gap-3">
                <div className="bg-black border p-2 rounded-lg text-[#FFD700] text-lg">
                  <FaFileAlt />
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
                {doc.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaDocuments;
