import React from 'react'
import HelpBanner from '../assets/Buildings.png'
import Image from 'next/image'
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import DoorStep from './DoorStep';
import { IoChevronForwardSharp } from 'react-icons/io5';

const Contact = () => {
    
    return (
        <div className=''>

            <div className="relative px-20 text-black overflow-hidden">

                <div className=" items-start justify-between relative z-10">
                    <div className='text-[#FFD700] font-bold pt-10 flex items-center gap-2 py-8'>Home <IoChevronForwardSharp className='text-white'/> Contact  </div>
                    <div className="mb-10 md:mb-0">
                        <p className="text-lg text-white mb-2 font-semibold">Have any queries?</p>
                        <h1 className="text-5xl font-bold text-white mb-4">
                            We’re Here To <span className="text-[#FFD700]">Help.</span>
                        </h1>
                        <div className="h-1 w-40 bg-[#FFD700] mb-6" />
                        <p className="text-lg text-white max-w-lg font-semibold">
                            Talk with our dedicated country specialists for detailed help.
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[300px] z-0">
                    <Image
                        src={HelpBanner}
                        alt="City Background"
                        layout="fill"
                        objectFit=""
                        className="pointer-events-none"
                    />
                </div>
            </div>

            <DoorStep />

            <div className="py-12 mx-20 px-20 rounded-2xl">
                <h2 className="text-3xl font-bold mb-10 text-white">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm text-white">
                    <div>
                        <h4 className="font-semibold mb-2 text-[#FFD700]">Address</h4>
                        <p>
                            19th Floor, Damac Executive Heights,<br /> Al Barsha Heights, <br />Dubai, UAE
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 text-[#FFD700]">Information Collected</h4>
                        <p>+971 58 5669976</p>
                        <p className="mt-2">Open: Mon - Fri, 9am - 6pm</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 text-[#FFD700]">Land Phone</h4>
                        <p>+971 58 5669976</p>
                        <p className="mt-2 text-white">For general inquiries & support</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 text-[#FFD700]">Email Us</h4>
                        <p>contact@thevisacity.com</p>
                        <p className="mt-2 text-white">We usually respond in 24 hours</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2 text-black">Social Media</h4>
                        <div className="flex items-center space-x-4 text-xl text-black">
                            <FaXTwitter className="cursor-pointer text-gray-500 hover:text-orange-500 transition" />
                            <FaWhatsapp className="cursor-pointer text-gray-500 hover:text-green-500 transition" />
                            <FaInstagram className="cursor-pointer text-gray-500 hover:text-pink-500 transition" />
                            <FaFacebook className="cursor-pointer text-gray-500 hover:text-blue-600 transition" />
                            <FaLinkedin className="cursor-pointer text-gray-500 hover:text-blue-700 transition" />
                            <FaYoutube className="cursor-pointer text-gray-500 hover:text-red-600 transition" />
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col md:flex-row items-center gap-4">
                    <button className="bg-[#FFD700] duration-300 hover:scale-105 cursor-pointer text-black font-semibold px-6 py-3 rounded-xl transition-all">
                        Call Now!
                    </button>
                    <a href="https://wa.me/971547499849" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <button className="bg-[#FFD700] duration-300 hover:scale-105 cursor-pointer text-black font-semibold px-6 py-3 rounded-xl transition-all">
                            Whatsapp Us
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
