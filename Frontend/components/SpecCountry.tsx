'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
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
                const res = await axios.get(`http://13.61.35.24:3000/country/${id}`, {
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
        <div className="flex flex-col lg:flex-row gap-4 w-full mt-40">
            <div className="lg:w-[66%] w-full h-[400px] lg:h-[700px] rounded-lg overflow-hidden">
                <img
                    src={images[0]}
                    alt={data.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="lg:w-[34%] w-full flex flex-col gap-4">
                {images.slice(1, 3).map((img, index) => (
                    <div key={index} className="h-[200px] lg:h-[340px] rounded-lg overflow-hidden">
                        <img
                            src={img}
                            alt={`Extra ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecCountry;