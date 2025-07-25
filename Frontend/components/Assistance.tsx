import React from 'react'
import { FaCalendarAlt, FaPlane, FaHotel, FaFileAlt, FaMapMarkedAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const services = [
    { icon: <FaCalendarAlt />, title: "Appointment Booking" },
    { icon: <BsFillPencilFill />, title: "Application Form Filling" },
    { icon: <FaPlane />, title: "Flight Reservation For Visa" },
    { icon: <FaHotel />, title: "Hotel Reservation For Visa" },
    { icon: <MdOutlineMail />, title: "Covering Letter (Embassy)" },
    { icon: <FaMapMarkedAlt />, title: "Detailed Trip Itinerary" },
];

const Assistance = () => {
    return (
        <div className="py-10 rounded-3xl">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-[#FFD700]">
                    The Visa City Assistance Services UAE
                </h1>
                <p className="mt-4 text-white text-sm md:text-base">
                    The Visa City (TVC) is a trusted visa service in Dubai that provides global visa services for citizens and residents in the UAE. With Visa City, you can find answers to your visa questions. Our service is global, and we can help with any kind of visa assistance. We ensure that you get the most value for money in your visa application process.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="flex-1">
                    <h2 className="text-7xl font-bold text-[#FFD700] mb-4">
                        Visa Assistance At Your Office Door Step
                    </h2>
                    <p className="text-white text-sm md:text-base mb-4">
                        Preparing documents and delivering them at their location, explaining the process one-on-one.
                    </p>
                    <p className="text-white text-sm md:text-base mb-6">
                        We're here to simplify the process by bringing the visa application right to your office doorstep. Our mission is to make obtaining business travel visas seamless and convenient so you can focus on what matters most - your business.
                    </p>
                    <a
                        href="https://wa.me/971547499849"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-[#FFD700] duration-300 hover:scale-105 cursor-pointer text-black font-medium py-2 px-4 rounded-lg text-sm">
                            Book a Free Consultation
                        </button>
                    </a>
                </div>

                <div className="flex-1 space-y-3">
                    {services.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 p-6 bg-black border-[1px] border-white rounded-lg shadow-sm hover:shadow-md transition duration-300 hover:scale-105 cursor-pointer"
                        >
                            <div className="text-xl text-[#FFD700]">{item.icon}</div>
                            <span className="text-white text- font-medium">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Assistance