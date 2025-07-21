'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import StarRating from './ui/StarRating';
import Image from 'next/image';
import Googles from '../assets/google.png';
import axios from 'axios';

interface Country {
    id: number;
    name: string;
    flag: string;
    mainImage: string;
    extraImg1?: string;
    extraImg2?: string;
    price: number;
    region: string[] | string;
    category: string[] | string;
}

const SpecCountry = () => {
    const { id } = useParams();
    const [data, setData] = useState<Country | null>(null);
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                if (!id) return;
                const token = localStorage.getItem("token")?.replace(/"/g, "");
                const res = await axios.get(`http://localhost:3000/country/${id}`, {
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

    if (!data) return <p className="pt-20 px-20">Loading country details...</p>;

    return (
        <div className="flex flex-col justify-start items-start gap-4 pt-20 px-10 w-full">
            <div>
                <h1 className='text-4xl font-bold text-[#072343]'>Visa for {data.name}</h1>
                <p>Get complete assistance for your visa from Dubai.</p>
            </div>

            <div className="flex gap-2 w-full max-w-[850px]">
                <div className="w-[66%] h-[400px] rounded-lg overflow-hidden">
                    <img
                        src={images[0]}
                        alt={data.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-[34%] flex flex-col gap-2">
                    {images.slice(1, 3).map((img, index) => (
                        <div key={index} className="h-[196px] rounded-lg overflow-hidden">
                            <img
                                src={img}
                                alt={`Extra ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex gap-2 items-center justify-center w-full">
                <h2 className="text-lg font-bold text-[#072343]">EXCELLENT</h2>
                <StarRating value={5} />
                <Image src={Googles} alt="Google logo" width={80} />
            </div>
        </div>
    );
};

export default SpecCountry;