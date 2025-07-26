"use client";

import React from "react";
import Image from "next/image";
import B1 from '../assets/B1.jpg'
import B2 from '../assets/B2.jpg'
import B3 from '../assets/B3.jpg'
import B4 from '../assets/B4.jpg'
import B5 from '../assets/B5.jpg'
import B6 from '../assets/B6.jpg'
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Top Visa‑Free Countries for UAE Residents in 2025",
    category: "TRAVEL TIPS",
    image: B1,
    description: "Discover visa-free destinations UAE residents can explore without paperwork.",
    content: "As visa waivers expand globally, explore destinations across Asia, the Americas, and Europe offering spontaneous travel opportunities for UAE citizens."
  },
  {
    id: 2,
    title: "How to Get a Business Visa for Europe: Step‑by‑Step Guide",
    category: "CORPORATE VISAS",
    image: B2,
    description: "Expert advice on applying for business visas to Europe this year.",
    content: "From Germany to France, our step-by-step guide simplifies the visa process—documents, interviews, timelines, and insider tips."
  },
  {
    id: 3,
    title: "Visa Application Mistakes You Should Avoid in 2025",
    category: "VISA GUIDANCE",
    image: B3,
    description: "Common errors in visa applications that lead to rejection or delays.",
    content: "Missing paperwork, inconsistent travel history, or inaccurate data can derail your application. Learn how to avoid frequent mistakes."
  },
  {
    id: 4,
    title: "Top Student Visa Destinations and How to Apply",
    category: "STUDY ABROAD",
    image: B4,
    description: "Countries offering easier student visa routes in 2025: Canada, UK, Germany, Australia.",
    content: "Compare student visa pathways—requirements, processing times, SOP tips—and set yourself up for success."
  },
  {
    id: 5,
    title: "Family Visas: Bringing Loved Ones Closer, Legally",
    category: "FAMILY VISAS",
    image: B5,
    description: "How to sponsor parents, spouse or children with ease and legal compliance.",
    content: "Understand the process of sponsoring family members, required documentation, income thresholds, and interview expectations."
  },
  {
    id: 6,
    title: "Fast‑Track Visa Services You Should Know About",
    category: "EXPRESS SERVICES",
    image: B6,
    description: "Need urgent travel? Learn about embassies offering express visa processing.",
    content: "Many consulates now offer 1–3 day visa services. See who qualifies, what extra fees are charged, and how to apply via The Visa City."
  },
];

const Blog1 = () => {
  return (
    <div className="w-full px-6 md:px-20 lg:px-40 py-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#FFD700]">
        Visa Advice & Travel Tips from TheVisaCity
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`displayblog/${post.id}`}
          >
            <div className="flex flex-col gap-4 shadow-lg rounded-xl overflow-hidden border border-gray-600 bg-black hover:scale-105 cursor-pointer transition-all duration-300">
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-[#FFD700] uppercase mb-1">
                  {post.category}
                </p>
                <h3 className="text-lg font-semibold text-white leading-snug">
                  {post.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog1;
