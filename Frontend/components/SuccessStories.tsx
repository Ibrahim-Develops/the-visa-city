"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

interface Story {
  id: number;
  image: string;
  alt?: string;
}

const SuccessStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const token = localStorage.getItem("token")?.replace(/"/g, "") || "";
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/stories/all`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setStories(response.data || []);
      } catch (error) {
        console.error("Failed to fetch stories:", error);
      }
    };

    fetchStories();
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleStories = stories.slice(0, visibleCount);

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        Explore <span className="text-[#FFD700]">Our Success Stories</span>
      </h2>
      <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
        Discover real journeys of growth, resilience, and success that inspire greatness.
      </p>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visibleStories.map((story) => (
          <div
            key={story.id}
            className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
            onClick={() => setSelectedImage(story.image)}
          >
            <Image
              src={story.image}
              alt={story.alt || `Success Story ${story.id}`}
              width={600}
              height={400}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < stories.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleSeeMore}
            className="px-6 py-2 bg-[#FFD700] cursor-pointer text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition"
          >
            See More
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-transparent-me bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full px-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-5 text-white text-xl cursor-pointer font-bold bg-black/50 rounded-full px-3 py-1 hover:bg-black/80 transition"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Selected Story"
              width={900}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessStories;
