'use client';

import React, { useState, useEffect } from 'react'
import { VscLayers } from "react-icons/vsc";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";
import { PiIslandLight } from "react-icons/pi";
import { IoSnowOutline } from "react-icons/io5";
import { ImGlass2 } from "react-icons/im";
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import axios from 'axios';
import Link from 'next/link';
interface Country {
    id: number,
    name: string;
    flag: string;
    mainImage: string;
    price: number;
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
        <div className='p-20'>
            <div className='flex w-full gap-20 justify-between'>
                <div className="flex gap-10 overflow-x-auto">
                    {tabs.map(({ label, icon: Icon }) => (
                        <div
                            key={label}
                            onClick={() => setActiveCategory(label)}
                            className={`flex flex-col items-center cursor-pointer text-sm 
                            ${activeCategory === label ? 'text-[#FFD700] font-medium' : 'text-white'} 
                            hover:text-[#FFD700] transition duration-200 relative`}
                        >
                            <Icon className="text-xl mb-1" />
                            <p>{label}</p>
                            {activeCategory === label && <span className="w-6 h-1 bg-[#FFD700] rounded mt-1" />}
                        </div>
                    ))}
                </div>

                <div className="relative inline-block text-left w-48">
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-full border border-gray-300 cursor-pointer rounded-md shadow-sm px-4 py-2 bg-black text-white text-left flex justify-between items-center"
                    >
                        {selectedRegion}
                        <FaChevronDown className={`ml-2 text-sm transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`} />
                    </button>

                    {open && (
                        <div className="absolute mt-1 w-full bg-black text-white border border-gray-200 rounded-md shadow-lg z-10">
                            {regions.map((region) => (
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

            <div className="flex flex-wrap gap-5 py-5 justify-">
                {countries.length > 0 ? (
                    countries.map((item, i) => (
                            <div key={i} className="w-[250px] duration-300 hover:scale-105 cursor-pointer">
                                <Link href={`/displayvisa/${item.id}`}>
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
                                            <span className="text-sm font-medium text-white">{item.name}</span>
                                        </div>
                                        <span className="text-sm font-semibold text-white">
                                            AED {Number(item.price).toLocaleString()}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        ))
                ) : (
                    <p className="text-gray-500 mt-5 text-center w-full">No countries found.</p>
                )}
            </div>
        </div>
    );
};

export default Countries3;
