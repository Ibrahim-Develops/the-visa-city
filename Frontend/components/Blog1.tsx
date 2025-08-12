"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

interface BlogPost {
  id: number;
  title: string;
  image: string;
}

const Blog1 = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
        const response = await axios.get("http://13.61.35.24:3000/blog/all", {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(response.data.data || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-1 xl:px-32 py-12 md:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center text-[#FFD700]">
        Visa Advice & Travel Tips from TheVisaCity
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {visibleBlogs.map((post) => (
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
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                  {post.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {visibleCount < blogs.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleViewMore}
            className="bg-[#FFD700] text-black cursor-pointer px-6 py-2 rounded-sm font-semibold transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog1;