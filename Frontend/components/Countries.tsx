'use client';

import React, { useState, useEffect } from 'react'
import { VscLayers } from "react-icons/vsc";
import { HiOutlinePercentBadge } from "react-icons/hi2";
import { IoFlashOutline } from "react-icons/io5";
import { PiAirplaneLanding } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { PiIslandLight } from "react-icons/pi";
import { IoSnowOutline } from "react-icons/io5";
import { ImGlass2 } from "react-icons/im";
import { PiPersonSimpleThrowLight } from "react-icons/pi";
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import axios from 'axios';

interface Country {
    name: string;
    flag: string;
    mainImage: string;
    price: number;
    region: string[] | string;
    category: string[] | string;
}

const regions = [
    'All', 'Australia', 'Antarctica', 'South America', 'North America',
    'Africa', 'Europe', 'Asia',
];

const tabs = [
    { label: 'All Visas', icon: VscLayers },
    { label: 'Visa Free', icon: HiOutlinePercentBadge },
    { label: 'Quick', icon: IoFlashOutline },
    { label: 'On Arrival', icon: PiAirplaneLanding },
    { label: 'eVisa', icon: CiGlobe },
    { label: 'Short Stay', icon: BsClockHistory },
    { label: 'Trending', icon: AiOutlineFire },
    { label: 'Tropical', icon: PiIslandLight },
    { label: 'Winter', icon: IoSnowOutline },
    { label: 'Leisure', icon: ImGlass2 },
    { label: 'Adventure', icon: PiPersonSimpleThrowLight },
];

// Utility to fix stringified arrays like ['["Trending"', '"Leisure"]']
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

const Countries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedRegion, setSelectedRegion] = useState('Region');
    const [activeCategory, setActiveCategory] = useState('Leisure');
    const [visibleCount, setVisibleCount] = useState(10);
    const [open, setOpen] = useState(false);

    const fetchCountries = async (region: string, category: string) => {
        try {
            const token = localStorage.getItem("token")?.replace(/"/g, "");
            const query = new URLSearchParams();

            if (region !== 'Region' && region !== 'All') query.append('region', region);
            if (category !== 'All Visas') query.append('category', category);

            const res = await axios.get(`http://localhost:3000/country/filter?${query.toString()}`, {
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
        <div>
            <div className='flex justify-between'>
                <div className="flex gap-10 overflow-x-auto">
                    {tabs.map(({ label, icon: Icon }) => (
                        <div
                            key={label}
                            onClick={() => setActiveCategory(label)}
                            className={`flex flex-col items-center cursor-pointer text-sm 
              ${activeCategory === label ? 'text-[#4b6391] font-medium' : 'text-gray-500'} 
              hover:text-[#4b6391] transition duration-200 relative`}
                        >
                            <Icon className="text-xl mb-1" />
                            <p>{label}</p>
                            {activeCategory === label && <span className="w-6 h-1 bg-[#4b6391] rounded mt-1" />}
                        </div>
                    ))}
                </div>

                <div className="relative inline-block text-left w-48">
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 bg-white text-gray-700 text-left flex justify-between items-center"
                    >
                        {selectedRegion}
                        <FaChevronDown className={`ml-2 text-sm transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} />
                    </button>

                    {open && (
                        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                            {regions.map((region) => (
                                <div
                                    key={region}
                                    onClick={() => {
                                        setSelectedRegion(region);
                                        setOpen(false);
                                    }}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    {region}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap gap-5 py-5 justify-between">
                {countries.length > 0 ? (
                    countries
                        .filter((item) => {
                            const regionMatch = selectedRegion === 'All' || selectedRegion === 'Region' || cleanArray(item.region).includes(selectedRegion);
                            const categoryMatch = activeCategory === 'All Visas' || cleanArray(item.category).includes(activeCategory);
                            return regionMatch && categoryMatch;
                        })
                        .slice(0, visibleCount)
                        .map((item, i) => (
                            <div key={i} className="w-[250px] duration-300 hover:scale-105 cursor-pointer">
                                <div className="relative w-[250px] h-[180px] rounded-xl overflow-hidden">
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
                                        <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-600">
                                        AED {Number(item.price).toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        ))
                ) : (
                    <p className="text-gray-500 mt-5 text-center w-full">No countries found.</p>
                )}
            </div>

            {visibleCount < countries.length && (
                <div className="text-center py-4">
                    <button
                        onClick={handleViewMore}
                        className="px-6 py-2 text-sm font-medium cursor-pointer bg-[#072343] text-white rounded hover:bg-gray-700 transition"
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Countries;
