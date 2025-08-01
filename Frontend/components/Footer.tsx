import Image from 'next/image';
import React from 'react';
import F1 from '../public/F1.jpg';
import Logo from '../public/logo.png';
import { IoCallOutline, IoMailOutline, IoLocationOutline } from 'react-icons/io5';
import { MdWhatsapp } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="text-white px-6 md:px-12 py-12 space-y-12 bg-black">

            <div className="w-full px-4 sm:px-6 md:px-12 py-8 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-10 bg-[#111111]">
                <div className="lg:max-w-xl text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug">
                        Get Ready to Explore the World
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                        Visa applications take time, can be complicated, and need careful attention to detail.
                        We make it easy for you by handling all the paperwork. Your vacation shouldn’t feel like more office work!
                    </p>
                    <a href="https://wa.me/971547499849" target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#FFD700] hover:scale-105 duration-300 text-black transition font-bold px-6 py-3 rounded-md text-sm">
                            Apply Now
                        </button>
                    </a>
                </div>
                <div className="flex-shrink-0">
                    <Image
                        src={F1}
                        alt="Travel illustration"
                        width={500}
                        className="w-full h-auto rounded-2xl max-w-sm lg:max-w-md"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                <div className="flex flex-col gap-4">
                    <Image src={Logo} alt="Visa City Logo" width={180} />
                    <p className="text-sm text-white leading-relaxed">
                        Hassle-free travel shouldn’t just be a dream. <br />
                        Visa City – Visa Simplified.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-base font-semibold text-[#FFD700]">Quick Links</h4>
                    <nav className="flex flex-col gap-2 text-sm text-white">
                        <Link href="/home" className="hover:text-[#FFD700]">Home</Link>
                        <Link href="/contact" className="hover:text-[#FFD700]">Contact</Link>
                        <Link href="/about" className="hover:text-[#FFD700]">About</Link>
                        <Link href="/countries" className="hover:text-[#FFD700]">Countries</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-base font-semibold text-[#FFD700]">Our Services</h4>
                    <ul className="text-sm text-white space-y-1">
                        <li>Immigration Works</li>
                        <li>Visas Apply</li>
                        <li>Passport Apply</li>
                        <li>Work Permits</li>
                        <li>Green Card</li>
                        <li>Safety Staying</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-base font-semibold text-[#FFD700]">Our Visa</h4>
                    <ul className="text-sm text-white space-y-1">
                        <li>Residence Visa</li>
                        <li>Business Visa</li>
                        <li>Tourist Visa</li>
                        <li>Conference Visa</li>
                        <li>Medical Visa</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-base font-semibold text-[#FFD700]">Support</h4>
                    <ul className="text-sm text-white space-y-1">
                        <li>FAQ</li>
                        <li>Disclaimer</li>
                        <li>Support</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-6 text-sm text-white mt-8">
                <div className="flex items-start gap-2 w-full sm:w-auto">
                    <IoCallOutline className="text-xl text-[#FFD700] mt-1" />
                    <p>+971 58 5669976</p>
                </div>
                <a href="https://wa.me/971547499849" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 w-full sm:w-auto">
                    <MdWhatsapp className="text-xl text-[#FFD700] mt-1" />
                    <p>+971 54 7499849</p>
                </a>
                <a
                    href="https://mail.google.com/mail/?view=cm&to=contact@thevisacity.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 w-full sm:w-auto"
                >
                    <IoMailOutline className="text-xl text-[#FFD700] mt-1" />
                    <p>info@thevisacity.com</p>
                </a>
                <div className="flex items-start gap-2 w-full sm:w-auto">
                    <IoLocationOutline className="text-xl text-[#FFD700] mt-1" />
                    <p className="leading-snug">
                        19th Floor, Damac Executive Heights, <br className="sm:hidden" />
                        Al Barsha Heights, Dubai, UAE
                    </p>
                </div>
            </div>

            <div className="text-sm flex flex-col md:flex-row justify-between items-center text-white mt-8 border-t pt-4 gap-4">
                <div>
                    © {new Date().getFullYear()} Visa City. All rights reserved.
                </div>
                <div className="flex gap-3 text-xl">
                    <FaFacebook className="hover:text-blue-600 cursor-pointer duration-300" />
                    <BsTwitterX className="hover:text-white cursor-pointer duration-300" />
                    <FaInstagram className="hover:text-pink-600 cursor-pointer duration-300" />
                    <FaLinkedinIn className="hover:text-blue-600 cursor-pointer duration-300" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
