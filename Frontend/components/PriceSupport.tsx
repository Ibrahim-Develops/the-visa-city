'use client'

import React, { useEffect, useState } from 'react';
import { FaMoneyBillWave, FaWhatsapp } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import axios from 'axios';

const PriceSupport = () => {
    const { id } = useParams();
    const [price, setPrice] = useState<number | null>(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                if (!id) return;
                const token = localStorage.getItem("token")?.replace(/"/g, "");
                const res = await axios.get(`https://api.thevisacity.com/country/${id}`, {
                    withCredentials: true,
                    headers: { Authorization: `Bearer ${token}` }
                });
                setPrice(res.data.data.price);
            } catch (error) {
                console.error("Failed to fetch price:", error);
            }
        };
        fetchPrice();
    }, [id]);

    return (
        <div className="pt-40 px-6 md:px-20 flex flex-col gap-10">
            <div>
                <div className="border rounded-xl p-6 md:p-10 shadow-sm text-center">
                    <div className="flex flex-col items-center gap-3">
                        <FaMoneyBillWave className="text-4xl text-green-500" />
                        <h2 className="text-xl md:text-2xl font-semibold text-white">
                            Visa Price
                        </h2>
                        <p className="text-3xl md:text-4xl font-bold text-[#FFD700]">
                            {price !== null ? `${price} AED` : "Loading..."}
                        </p>
                        <p className="text-sm text-white mt-2">
                            This includes visa application service fees and processing charges.
                        </p>
                    </div>
                </div>
            </div>

            <div className="border border-green-500 rounded-lg p-4 flex items-center justify-between max-w-md shadow-sm">
                <div>
                    <h3 className="text-green-600 font-semibold flex items-center gap-2 text-lg">
                        <FaWhatsapp className="text-xl" />
                        WhatsApp Support
                    </h3>
                    <p className="text-white text-sm mt-1">
                        Chat with our team about any queries or assistance you need.
                    </p>
                </div>
                <a
                    href="https://wa.me/971547499849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='border border-white text-green-600 px-4 py-1.5 rounded-md hover:bg-green-500 hover:border-none hover:text-white transition'
                >
                    Chat
                </a>
            </div>
        </div>
    );
};

export default PriceSupport;
