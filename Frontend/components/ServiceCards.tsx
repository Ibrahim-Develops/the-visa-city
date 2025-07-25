import React from 'react';
import { FaBriefcase, FaPlaneDeparture, FaUserClock, FaPassport, FaFileAlt } from 'react-icons/fa';

const services = [
  { icon: <FaBriefcase />, title: 'Business Visa Applications', desc: 'For meetings, negotiations, or expansion plans abroad.' },
  { icon: <FaPassport />, title: 'Work Permit Assistance', desc: 'End-to-end handling of skilled labor and professional work visas.' },
  { icon: <FaPlaneDeparture />, title: 'Visit Visas for Employees', desc: 'Short-term visits, family meetups, or pre-relocation exploration.' },
  { icon: <FaUserClock />, title: 'Urgent Appointments', desc: 'Ideal for last-minute meetings or critical international travel.' },
  { icon: <FaFileAlt />, title: 'Document Support', desc: 'Invitation letters, NOCs, covering letters, and more.' },
];

const ServiceCards = () => {
  return (
    <section className="py-14 px-6">
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div key={idx} className="bg-black border p-6 shadow-lg rounded-xl text-center hover:shadow-xl transition">
            <div className="text-[#FFD700] text-3xl mb-4">{service.icon}</div>
            <h3 className="font-bold text-[#FFD700] text-lg mb-2">{service.title}</h3>
            <p className="text-white">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
