import React from 'react'
import { FaCalendarAlt, FaPlane, FaHotel, FaFileAlt, FaMapMarkedAlt } from "react-icons/fa";
import { BsFillPencilFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const Assistance = () => {

    const services = [
        { icon: <FaCalendarAlt />, title: "Appointment Booking" },
        { icon: <BsFillPencilFill />, title: "Application Form Filling" },
        { icon: <FaPlane />, title: "Flight Reservation For Visa" },
        { icon: <FaHotel />, title: "Hotel Reservation For Visa" },
        { icon: <MdOutlineMail />, title: "Covering Letter (Embassy)" },
        { icon: <FaMapMarkedAlt />, title: "Detailed Trip Itinerary" },
    ];

    return (
        <div className="bg-gray-50 px-4 py-10 md:px-16 rounded-3xl max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900">
                    The Visa City Assistance Services UAE
                </h1>
                <p className="mt-4 text-gray-600 text-sm md:text-base">
                    The Visa City (TVC) is a trusted visa service in Dubai that provides global visa services for citizens and residents in the UAE. With Visa City, you can find answers to your visa questions. Our service is global, and we can help with any kind of visa assistance. We ensure that you get the most value for money in your visa application process.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="flex-1">
                    <h2 className="text-7xl font-bold text-gray-900 mb-4">
                        Visa Assistance At Your Office Door Step
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base mb-4">
                        Preparing documents and delivering them at their location, explaining the process one-on-one.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base mb-6">
                        We're here to simplify the process by bringing the visa application right to your office doorstep. Our mission is to make obtaining business travel visas seamless and convenient so you can focus on what matters most - your business.
                    </p>
                    <button className="bg-[#072343] hover:bg-gray-700 cursor-pointer text-white font-medium py-2 px-4 rounded-lg text-sm">
                        Book a Free Consultation
                    </button>
                </div>

                <div className="flex-1 space-y-3">
                    {services.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition"
                        >
                            <div className="text-xl text-[#4b6391]">{item.icon}</div>
                            <span className="text-gray-800 text- font-medium">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Assistance