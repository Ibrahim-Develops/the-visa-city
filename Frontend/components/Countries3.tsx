'use client';

import React, { useState, useEffect } from 'react';
import { VscLayers } from 'react-icons/vsc';
import { CiGlobe } from 'react-icons/ci';
import { AiOutlineFire } from 'react-icons/ai';
import { PiIslandLight } from 'react-icons/pi';
import { IoSnowOutline } from 'react-icons/io5';
import { ImGlass2 } from 'react-icons/im';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';

interface Country {
  id: number;
  name: string;
  flag: string;
  mainImage: string;
  region: string[] | string;
  category: string[] | string;
}

const regions = [
  'All', 'Australia', 'Brazil', 'South America', 'North America',
  'Africa', 'Europe', 'Asia',
];

const tabs = [
  { label: 'All Visas', icon: VscLayers },
  { label: 'eVisa', icon: CiGlobe },
  { label: 'Trending', icon: AiOutlineFire },
  { label: 'Tropical', icon: PiIslandLight },
  { label: 'Winter', icon: IoSnowOutline },
  { label: 'Leisure', icon: ImGlass2 },
];

const cleanArray = (arr: any): string[] => {
  try {
    if (Array.isArray(arr) && typeof arr[0] === 'string' && arr[0].startsWith('["')) {
      return JSON.parse(arr.join(''));
    }
    return arr;
  } catch {
    return arr;
  }
};

const Countries3 = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState('Region');
  const [activeCategory, setActiveCategory] = useState('All Visas');
  const [visibleCount, setVisibleCount] = useState(10);
  const [open, setOpen] = useState(false);

  const fetchCountries = async (region: string, category: string) => {
    try {
      const token = localStorage.getItem("token")?.replace(/"/g, "");
      const query = new URLSearchParams();

      if (region !== 'Region' && region !== 'All') query.append('region', region);
      if (category !== 'All Visas') query.append('category', category);

      const res = await axios.get(`http://13.61.35.24:3000/country/filter?${query.toString()}`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      });

      setCountries(res.data.data || []);
      setVisibleCount(10);
    } catch (err) {
      console.error("Failed to fetch countries:", err);
    }
  };

  useEffect(() => {
    fetchCountries(selectedRegion, activeCategory);
  }, [selectedRegion, activeCategory]);

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-between items-start lg:items-center">
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
          <div className="flex gap-6 min-w-max">
            {tabs.map(({ label, icon: Icon }) => (
              <div
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`flex-shrink-0 flex flex-col items-center text-sm cursor-pointer 
                  ${activeCategory === label ? 'text-[#ffd700] font-medium' : 'text-white'} 
                  hover:text-[#ffd700] transition relative min-w-[60px]`}
              >
                <Icon className="text-xl mb-1" />
                <p className="text-xs sm:text-sm text-center">{label}</p>
                {activeCategory === label && (
                  <span className="w-6 h-1 bg-[#ffd700] rounded mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full sm:w-full lg:w-[250px] mt-2 lg:mt-0">
          <button
            onClick={() => setOpen(!open)}
            className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 bg-black text-white flex justify-between items-center"
          >
            {selectedRegion}
            <FaChevronDown className={`ml-2 text-sm transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
          </button>

          {open && (
            <div className="absolute mt-1 w-full bg-black text-white border border-gray-200 rounded-md shadow-lg z-10">
              {regions.map(region => (
                <div
                  key={region}
                  onClick={() => {
                    setSelectedRegion(region);
                    setOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer"
                >
                  {region}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-8">
        {countries.length > 0 ? (
          countries
            .filter((item) => {
              const regionMatch = selectedRegion === 'All' || selectedRegion === 'Region' || cleanArray(item.region).includes(selectedRegion);
              const categoryMatch = activeCategory === 'All Visas' || cleanArray(item.category).includes(activeCategory);
              return regionMatch && categoryMatch;
            })
            .map((item, i) => (
              <div key={i} className="hover:scale-105 transition-transform duration-300 cursor-pointer">
                <Link href={`/displayvisa/${item.id}`}>
                  <div className="relative w-full h-[180px] rounded-xl overflow-hidden">
                    <Image
                      src={item.mainImage}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 270px"
                    />
                  </div>

                  <div className="flex justify-between items-center mt-2 px-1">
                    <div className="flex items-center gap-1">
                      <Image
                        src={item.flag}
                        alt={`${item.name} flag`}
                        width={18}
                        height={12}
                        className="object-cover"
                      />
                      <span className="text-sm font-medium text-white">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-white">
                      
                    </span>
                  </div>
                </Link>
              </div>
            ))
        ) : (
          <p className="text-gray-500 mt-5 text-center col-span-full">No countries found.</p>
        )}
      </div>
    </div>
  );
};

export default Countries3;
