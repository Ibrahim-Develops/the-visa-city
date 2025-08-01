"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import B1 from '../public/B1.jpg';
import B2 from '../public/B2.jpg';
import B3 from '../public/B3.jpg';
import B4 from '../public/B4.jpg';
import B5 from '../public/B5.jpg';
import B6 from '../public/B6.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Top Visa‑Free Countries for UAE Residents in 2025",
    category: "TRAVEL TIPS",
    image: B1,
  },
  {
    id: 2,
    title: "How to Get a Business Visa for Europe: Step‑by‑Step Guide",
    category: "CORPORATE VISAS",
    image: B2,
  },
  {
    id: 3,
    title: "Visa Application Mistakes You Should Avoid in 2025",
    category: "VISA GUIDANCE",
    image: B3,
  },
  {
    id: 4,
    title: "Top Student Visa Destinations and How to Apply",
    category: "STUDY ABROAD",
    image: B4,
  },
  {
    id: 5,
    title: "Family Visas: Bringing Loved Ones Closer, Legally",
    category: "FAMILY VISAS",
    image: B5,
  },
  {
    id: 6,
    title: "Fast‑Track Visa Services You Should Know About",
    category: "EXPRESS SERVICES",
    image: B6,
  },
];

const Blog1 = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-1 xl:px-32 py-12 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-[#FFD700]">
        Visa Advice & Travel Tips from TheVisaCity
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/displayblog/${post.id}`}
            className="group transition-transform duration-300 hover:scale-105"
          >
            <div className="flex flex-col rounded-xl overflow-hidden shadow-md border border-gray-700 bg-black h-full">
              <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-[#FFD700] uppercase mb-1">{post.category}</p>
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
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
