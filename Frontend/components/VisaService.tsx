import React from 'react'
import { FaRegStickyNote } from "react-icons/fa";
import { LuCalendarCheck2 } from "react-icons/lu";
import { IoFlashOutline } from "react-icons/io5";

const features = [
  {
    icon: <FaRegStickyNote className="text-2xl" />,
    title: "Comprehensive Travel Planning",
    description:
      "We offer a wide range of services, so you can find the one that fits. Offering a travel itinerary for the entire trip or individual tickets, our team of experts will guide you through it all and make sure your trip is safe and enjoyable.",
  },
  {
    icon: <LuCalendarCheck2 className="text-2xl" />,
    title: "Expert Consultation & Itineraries",
    description:
      "Our visa consultants will review all of your details, answer any questions, and offer expert advice about a particular country. We can also recommend tailor-made itineraries to suit your specific travel plans.",
  },
  {
    icon: <IoFlashOutline className="text-2xl" />,
    title: "Fast & Reliable Assistance",
    description:
      "We offer convenient, efficient, and prompt visa assistance in UAE. Our staff will go the extra mile to ensure that your visa can be delivered within the shortest time possible.",
  },
];

const VisaService = () => {
  return (
    <div className='py-16'>
      <p className="text-[#FFD700] font-medium mb-2">All Inclusive Visa Service</p>
      <h2 className="text-3xl text-[#FFD700] md:text-5xl font-bold mb-4">
        What Sets Us Apart From <br /> Other Visa Services in UAE?
      </h2>
      <p className="text-white max-w-2xl mb-10">
        The visa service is available at your convenience and will always be there to assist you with your application.
        Our dedicated team will guide you through the process at every step.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <div key={idx} className="flex gap-4">
            <div className='text-[#FFD700]'>{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-1 text-[#FFD700] ">{item.title}</h3>
              <p className="text-white text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VisaService