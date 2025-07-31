'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import People from '../public/people.png'
import { BsWhatsapp } from "react-icons/bs";

const faqs = [
    {
        question: "What is the purpose of obtaining a Schengen Visa?",
        answer:
            "The Schengen visa allows you to travel freely between 27 Schengen countries. The visa is stamped by the Embassy/Consulate where you will be travelling.",
    },
    {
        question: "Who needs a Schengen Visa?",
        answer:
            "Although certain groups and nationalities of countries are privileged to enter the Schengen visa-free zone, some others must meet all the requirements and attend interviews to get a visa that permits them to enter the Schengen Area.",
    },
    {
        question: "If I am travelling to multiple countries within the Schengen Area, how should I apply for the visa, and which Embassy/Consulate should I approach?",
        answer:
            "If you are travelling to more than one country in one trip, you must apply through the Embassy or Consulate in the country where you spend the majority of your time. If you plan to spend an equal amount of time in multiple Schengen countries, your visa application should be made from the country which will be your first entry.",
    },
    {
        question: "What’s the role of The Visa Guy in the visa assistance service?",
        answer:
            "Well, we, the Visa Guy, offer visa assistance in Dubai, UAE, provides proper consultation and appointment bookings in VFS or respective consulates/ embassies, and also we assist you in document verification and preparation of necessary documents if required. Please note that while we provide comprehensive visa assistance services, we cannot guarantee visa approval.",
    },
    {
        question: "Is there a guarantee for the Visa?",
        answer:
            "Please note that while we provide comprehensive visa assistance services, we cannot guarantee visa approval. Our team is dedicated to ensuring a smooth and efficient visa application process, but the final decision rests with the respective authorities.",
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
        question: "How many times can I travel with a multiple-entry Schengen Visa?",
        answer:
            "The number of entries allowed will depend on the specific visa type and its duration. Some multiple-entry visas may have restrictions on the maximum number of days or total duration of stay within a given period.",
    },
    {
        question: "Is an Interview mandatory for Schengen Visa?",
        answer:
            "No, you must go for a biometric submission, and it is compulsory to take all the applicants (including infants) at the time of submission.",
    },
    {
        question: "Applying for a visa all by myself or rely on a visa consultant service, which is the better choice?",
        answer:
            "Using a visa consultant is highly recommended for several reasons. They are experts in handling different visa types and being updated with immigration laws. Applying for a visa on your own can be time-consuming and confusing, and even small mistakes can lead to rejection. With a visa consultant, you can streamline the application process, minimise errors, and increase your chances of success. They provide valuable guidance, ensure accurate document preparation, and help you understand specific visa requirements. By seeking professional assistance, you can save time, avoid errors , and improve the likelihood of a positive visa outcome.",
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
    },
    {
        question: "Is it possible to get a visa after rejection?",
        answer:
            "If your visa application is denied, don’t lose hope. Reapplying can be challenging after a rejection, so it’s important to be extra careful when submitting a new application. Remember, there are experts who provide visa assistance services. They have valuable knowledge and can help you navigate the process. Don’t hesitate to reach out to them for guidance and support",
    },
    {
        question: "To which all countries Visa Guy Provide visa assistance services?",
        answer:
            "Visa Guy provide visa assistance services to UK,Turkey",
    },
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
