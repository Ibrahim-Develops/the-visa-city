import React from 'react';
import { FaMoneyBillWave, FaWhatsapp } from 'react-icons/fa';

const PriceSupport = () => {
    return (
        <div className="pt-40 px-6 md:px-20 flex flex-col gap-10">
            <div>
                <div className="bg-[#f9fafb] border border-gray-300 rounded-xl p-6 md:p-10 shadow-sm text-center">
                    <div className="flex flex-col items-center gap-3">
                        <FaMoneyBillWave className="text-4xl text-green-500" />
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                            Visa Price
                        </h2>
                        <p className="text-3xl md:text-4xl font-bold text-[#1e2b4e]">
                            600 AED
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            This includes visa application service fees and processing charges.
                        </p>
                    </div>
                </div>
            </div>

            <div className="border border-green-300 bg-green-50 rounded-lg p-4 flex items-center justify-between max-w-md shadow-sm">
                <div>
                    <h3 className="text-green-600 font-semibold flex items-center gap-2 text-lg">
                        <FaWhatsapp className="text-xl" />
                        WhatsApp Support
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                        Chat with our team about any queries or assistance you need.
                    </p>
                </div>
                <a
                        href="https://wa.me/971547499849"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='border border-green-500 text-green-600 px-4 py-1.5 rounded-md hover:bg-green-100 transition'
                    >
                    Chat
                </a>
            </div>
        </div>
    );
};

export default PriceSupport;
