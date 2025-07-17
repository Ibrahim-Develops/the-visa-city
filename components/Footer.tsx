import Image from 'next/image';
import React from 'react';
import F1 from '../assets/F1.png';
import Logo from '../assets/logo.png';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { MdWhatsapp } from 'react-icons/md';
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#f9fafb] text-gray-800 px-6 md:px-20 py-12 space-y-12">

            <div className="bg-black text-white w-full px-6 md:px-12 py-8 rounded-2xl flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                <div className="lg:max-w-xl">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug">
                        Get Ready to Explore the World
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                        Visa applications take time, can be complicated, and need careful attention to detail.
                        We make it easy for you by handling all the paperwork. Your vacation shouldn’t feel like more office work!
                    </p>
                    <button className="bg-white hover:scale-105 duration-300 text-black cursor-pointer transition font-bold px-6 py-3 rounded-md text-sm">
                        Apply Now
                    </button>
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={F1}
                        alt="Travel illustration"
                        width={500}
                        className="w-full h-auto max-w-sm lg:max-w-md"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

                <div className="flex flex-col gap-4">
                    <Image src={Logo} alt="Visa City Logo" width={180} />
                    <p className="text-sm text-gray-600">
                        Hassle-free travel shouldn’t just be a dream. <br />
                        Visa City – Visa Simplified.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-base font-semibold text-[#072343]">Quick Links</h4>
                    <nav className="flex flex-col gap-2 text-sm text-gray-700">
                        <Link href="/home" className="hover:text-[#072343] cursor-pointer">
                            Home
                        </Link>
                        <Link href="/contact" className="hover:text-[#072343] cursor-pointer">
                            Contact
                        </Link>
                        <Link href="/about" className="hover:text-[#072343] cursor-pointer">
                            About
                        </Link>
                        <Link href="/countries" className="hover:text-[#072343] cursor-pointer">
                            Countries
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-base font-semibold text-[#072343]">Our Services</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>Immigration Works</li>
                        <li>Visas Apply</li>
                        <li>Passport Apply</li>
                        <li>Work Permits</li>
                        <li>Green Card</li>
                        <li>Safety Staying</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-base font-semibold text-[#072343]">Our Visa</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>Residence Visa</li>
                        <li>Business Visa</li>
                        <li>Tourist Visa</li>
                        <li>Conference Visa</li>
                        <li>Medical Visa</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-base font-semibold text-[#072343]">Support</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>FAQ</li>
                        <li>Disclaimer</li>
                        <li>Support</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>

            <div className="gap-6 flex text-sm text-gray-700">
                <div className="flex items-center gap-2">
                    <IoCallOutline className="text-xl text-blue-600" />
                    <p>+971 58 5669976</p>
                </div>
                <a href="https://wa.me/971547499849" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <MdWhatsapp className="text-xl text-green-600" />
                    <p>+971 54 7499849</p>
                </a>
                <a
                    href="https://mail.google.com/mail/?view=cm&to=contact@thevisacity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                >
                    <IoMailOutline className="text-xl text-red-600" />
                    <p>contact@thevisacity.com</p>
                </a>
                <div className="flex  items-center">
                    <IoLocationOutline className='text-xl text-yellow-500' />
                    <p className="mt-2">19th Floor, Damac Executive Heights, Al Barsha Heights, Dubai, UAE</p>
                </div>
            </div>

            <div className="text-sm flex flex-col md:flex-row justify-between items-center text-gray-400 mt-8 border-t pt-4 gap-4">
                <div>
                    © {new Date().getFullYear()} Visa City. All rights reserved.
                </div>
                <div className="flex gap-3 text-xl">
                    <FaFacebook className="hover:text-blue-600 cursor-pointer duration-300" />
                    <BsTwitterX className="hover:text-black cursor-pointer duration-300" />
                    <FaInstagram className="hover:text-pink-600 cursor-pointer duration-300" />
                    <FaLinkedinIn className="hover:text-blue-600 cursor-pointer duration-300" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
