"use client";

import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Blog {
  title: string;
  description: string;
  image: string;
}

const DisplayBlog = () => {
  const [data, setData] = useState<Blog | null>(null);
  const params = useParams();
  const blogId = params?.id ? parseInt(params.id as string) : NaN;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
        const res = await axios.get(`https://13.61.35.24:3000/blog/${blogId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.data.data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      }
    };

    if (!isNaN(blogId)) fetchBlog();
  }, [blogId]);

  if (!data) {
    return <div className="text-center py-20 text-white">Loading blog...</div>;
  }

  return (
    <section className="min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 text-white">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 leading-snug">
          {data.title}
        </h1>
        <div className="h-1 w-20 bg-[#FFD700] mt-4 rounded-full" />

      </div>

      <div className="relative h-64 sm:h-80 md:h-[550px] mb-12 shadow-lg rounded-xl overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
      </div>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4">
        {data.description}
      </p>
    </section>
  );
};

export default DisplayBlog;
