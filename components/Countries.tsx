'use client'

import React, { useState } from 'react'
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
import Australia from '../assets/australia.webp';
import Austria from '../assets/austria.webp';
import Belgium from '../assets/belgium.webp';
import Brazil from '../assets/brazil.webp';
import Canada from '../assets/canada.webp';
import China from '../assets/china.webp';
import CzechRepublic from '../assets/czech republic.webp';
import Denmark from '../assets/denmark.webp';
import Finland from '../assets/finland.webp';
import France from '../assets/france.webp';
import Germany from '../assets/germany.webp';
import Greece from '../assets/greece.webp';
import Hungary from '../assets/hungary.webp';
import Iceland from '../assets/iceland.webp';
import Ireland from '../assets/ireland.webp';
import Italy from '../assets/italy.webp';
import Japan from '../assets/japan.webp';
import Netherlands from '../assets/netherlands.webp';
import NewZealand from '../assets/new zealand.webp';
import Norway from '../assets/norway.webp';
import Portugal from '../assets/portugal.webp';
import SaudiaArabia from '../assets/saudia arabia.webp';
import SouthKorea from '../assets/south korea.webp';
import Spain from '../assets/spain.webp';
import Sweden from '../assets/sweden.webp';
import Switzerland from '../assets/switzerland.webp';
import Thiland from '../assets/thiland.webp';
import Turkey from '../assets/turkey.webp';
import UK from '../assets/uk.webp';
import USA from '../assets/usa.webp';
import at from '../assets/at.png';
import au from '../assets/au.png';
import be from '../assets/be.png';
import br from '../assets/br.png';
import ca from '../assets/ca.png';
import ch from '../assets/ch.png';
import cn from '../assets/cn.png';
import cz from '../assets/cz.png';
import de from '../assets/de.png';
import dk from '../assets/dk.png';
import es from '../assets/es.png';
import fi from '../assets/fi.png';
import fr from '../assets/fr.png';
import gb from '../assets/gb.png';
import gr from '../assets/gr.png';
import hu from '../assets/hu.png';
import ie from '../assets/ie.png';
import is from '../assets/is.png';
import it from '../assets/it.png';
import jp from '../assets/jp.png';
import kr from '../assets/kr.png';
import nl from '../assets/nl.png';
import no from '../assets/no.png';
import nz from '../assets/nz.png';
import pt from '../assets/pt.png';
import sa from '../assets/sa.png';
import se from '../assets/se.png';
import th from '../assets/th.png';
import tr from '../assets/tr.png';
import us from '../assets/us.png';
import Image from 'next/image';

const regions = [
        'All',
        'Australia',
        'Antarctica',
        'South America',
        'North America',
        'Africa',
        'Europe',
        'Asia',
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

    const countries = [
        { name: 'Austria', image: Austria, flag: at, price: 125000 },
        { name: 'Australia', image: Australia, flag: au, price: 165000 },
        { name: 'Belgium', image: Belgium, flag: be, price: 120000 },
        { name: 'Brazil', image: Brazil, flag: br, price: 95000 },
        { name: 'Canada', image: Canada, flag: ca, price: 180000 },
        { name: 'Switzerland', image: Switzerland, flag: ch, price: 140000 },
        { name: 'China', image: China, flag: cn, price: 70000 },
        { name: 'Czech Republic', image: CzechRepublic, flag: cz, price: 115000 },
        { name: 'Germany', image: Germany, flag: de, price: 125000 },
        { name: 'Denmark', image: Denmark, flag: dk, price: 135000 },
        { name: 'Spain', image: Spain, flag: es, price: 130000 },
        { name: 'Finland', image: Finland, flag: fi, price: 145000 },
        { name: 'France', image: France, flag: fr, price: 135000 },
        { name: 'UK', image: UK, flag: gb, price: 155000 },
        { name: 'Greece', image: Greece, flag: gr, price: 105000 },
        { name: 'Hungary', image: Hungary, flag: hu, price: 95000 },
        { name: 'Ireland', image: Ireland, flag: ie, price: 115000 },
        { name: 'Iceland', image: Iceland, flag: is, price: 150000 },
        { name: 'Italy', image: Italy, flag: it, price: 120000 },
        { name: 'Japan', image: Japan, flag: jp, price: 170000 },
        { name: 'South Korea', image: SouthKorea, flag: kr, price: 160000 },
        { name: 'Netherlands', image: Netherlands, flag: nl, price: 135000 },
        { name: 'Norway', image: Norway, flag: no, price: 145000 },
        { name: 'New Zealand', image: NewZealand, flag: nz, price: 175000 },
        { name: 'Portugal', image: Portugal, flag: pt, price: 110000 },
        { name: 'Saudi Arabia', image: SaudiaArabia, flag: sa, price: 48000 },
        { name: 'Sweden', image: Sweden, flag: se, price: 130000 },
        { name: 'Thailand', image: Thiland, flag: th, price: 60000 },
        { name: 'Turkey', image: Turkey, flag: tr, price: 85000 },
        { name: 'USA', image: USA, flag: us, price: 180000 },
    ];

const Countries = () => {

    const [selected, setSelected] = useState('Region');
    const [active, setActive] = useState('Leisure');
    const [visibleCount, setVisibleCount] = useState(10);
    const [open, setOpen] = useState(false);

    const handleViewMore = () => {
        setVisibleCount((prev) => prev + 10);
    };

    return (
        <div className=''>

            <div className='flex justify-between'>
                <div className="flex gap-10 overflow-x-auto">
                    {tabs.map(({ label, icon: Icon }) => (
                        <div
                            key={label}
                            onClick={() => setActive(label)}
                            className={`flex flex-col items-center cursor-pointer text-sm 
                        ${active === label ? 'text-[#4b6391] font-medium' : 'text-gray-500'} 
                        hover:text-[#4b6391] transition duration-200 relative`}
                        >
                            <Icon className="text-xl mb-1" />
                            <p>{label}</p>
                            {active === label && (
                                <span className="w-6 h-1 bg-[#4b6391] rounded mt-1" />
                            )}
                        </div>
                    ))}
                </div>


                <div className="relative inline-block text-left w-48">
                    <button
                        onClick={() => setOpen(!open)}
                        className="w-full cursor-pointer border border-gray-300 rounded-md shadow-sm px-4 py-2 bg-white text-gray-700 text-left flex justify-between items-center"
                    >
                        {selected}
                        <FaChevronDown
                            className={`ml-2 text-sm transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                        />
                    </button>

                    {open && (
                        <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                            {regions.map((region) => (
                                <div
                                    key={region}
                                    onClick={() => {
                                        setSelected(region);
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
                {countries.slice(0, visibleCount).map((item, i) => (
                    <div key={i} className="w-[250px]">
                        <div className="relative w-[250px] h-[180px] rounded-xl overflow-hidden">
                            <Image
                                src={item.image}
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
                                AED {item.price.toLocaleString()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < countries.length && (
                <div className="text-center py-4">
                    <button
                        onClick={handleViewMore}
                        className="px-6 py-2 text-sm font-medium bg-[#072343] cursor-pointer text-white rounded hover:bg-gray-700 transition"
                    >
                        View More
                    </button>
                </div>
            )}
        </div>
    )
}

export default Countries