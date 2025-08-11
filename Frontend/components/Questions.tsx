'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import People from '../public/people.png'
import { BsWhatsapp } from "react-icons/bs";

const faqs = [
    {
        question: "Who needs a Schengen Visa?",
        answer:
            "Although certain groups and nationalities of countries are privileged to enter the Schengen visa-free zone, some others must meet all the requirements and attend interviews to get a visa that permits them to enter the Schengen Area.",
    },
    {
        question: "What’s the role of The Visa City in the visa assistance service?",
        answer:
            "Well, we, the Visa City, offer visa assistance in Dubai, UAE, provides proper consultation and appointment bookings in VFS or respective consulates/ embassies, and also we assist you in document verification and preparation of necessary documents if required. Please note that while we provide comprehensive visa assistance services, we cannot guarantee visa approval.",
    },
    {
        question: "If I intend to travel for business meetings, conferences, or events in the Schengen Area, which visa should I apply for?",
        answer:
            "Business invitations or proof of events/conferences can be included as supporting documents when submitting the Schengen Visa application at the VFS centre, embassy, or consulate.",
    },
    {
        question: "Can I apply for Schengen Visa with my family?",
        answer:
            "You can apply for a Schengen Visa with a family member by providing the main applicant’s financial documents to support the other member’s application. It is also mandatory to attach sponsorship letters and proof of relationship, such as a copy of a marriage certificate or birth certificate in English.",
    },
    {
        question: "Do I have to pay the visa fees in VFS/Embassy or Consulate?",
        answer:
            "Yes, you need to pay Visa fees while submitting documents.",
    },
    {
        question: "Is an Interview mandatory for Schengen Visa?",
        answer:
            "No, you must go for a biometric submission, and it is compulsory to take all the applicants (including infants) at the time of submission.",
    },
    {
        question: "How long does it take to get a visa?",
        answer:
            "The duration of the visa application process can vary significantly depending on several factors, including the type of visa you are applying for and the country you are applying to. The visa application process takes almost 2 weeks to 4 months, based on your visa type.",
    },
    {
        question: "What happens if your visa is rejected?",
        answer:
            "If found ineligible for a visa, don’t feel bad, you could reapply in the future. When you require visa services in the UAE, feel free to ask for our support. We will be glad to be of assistance.",
    }
]

const Questions = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx)
    }

    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <h2 className="text-4xl font-bold text-center mb-4 text-[#FFD700]">Frequently asked questions</h2>
            <p className="text-center text-white mb-1">
                We receive a lot of questions from our customers. You might also find answers to your questions here. Don’t
                hesitate to contact us if you don’t see your answer.
            </p>
            <p className="text-center text-gray-300 font-medium mb-10">Call us at: +971 58 5669976</p>

            <div className="space-y-6">
                {faqs.map((item, idx) => (
                    <div
                        key={idx}
                        className="border-b text-white bg-black p-4 border-[1px] border-white rounded-2xl"
                    >
                        <button
                            className="w-full flex cursor-pointer justify-between items-center text-left"
                            onClick={() => toggle(idx)}
                        >
                            <h3 className="text-md font-semibold">{item.question}</h3>
                            {openIndex === idx ? (
                                <FiMinus className="text-[#FFD700]" />
                            ) : (
                                <FiPlus className="text-[#FFD700]" />
                            )}
                        </button>

                        <div
                            className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? "max-h-[200px] mt-2" : "max-h-0"
                                }`}
                        >
                            <p className="text-sm text-white">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-8 flex flex-col items-center text-center">

                <h2 className="text-2xl font-bold text-[#FFD700] mb-2">Still Have Questions?</h2>
                <p className="text-white mb-6">
                    Can’t find the answer you’re looking for? Our friendly team is ready to help.
                </p>

                <a
                    href="https://wa.me/971547499849"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="flex items-center gap-3 cursor-pointer bg-[#FFD700] text-black px-5 py-3 rounded-full transition duration-300 hover:border-[#072343] hover:scale-105">
                        <BsWhatsapp className="text-xl text-green-600" />
                        <span className="font-medium text-sm">Get In Touch</span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Questions
