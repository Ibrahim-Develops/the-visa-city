"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import C1 from '../public/C1.webp'
import C2 from '../public/C2.webp'
import C3 from '../public/C3.webp'

const Carousel = () => {

    const slides = [
        {
            title: "Explore Europe this summer",
            description: "Summer Deals waiting Just for You. Travel 29 European countries with one visa.",
            image: C1,
        },
        {
            title: "Discover Asia like never before",
            description: "Explore exotic destinations with seamless visa experiences.",
            image: C2,
        },
        {
            title: "Visit the Middle East",
            description: "Experience history, culture, and modernity all in one place.",
            image: C3,
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-2xl overflow-hidden custom-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-fit md:h-[280px] w-full flex items-center">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    )
}

export default Carousel