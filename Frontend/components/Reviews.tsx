'use client';

import React, { useEffect, useRef, useState } from 'react';
import StarRating from './ui/StarRating';
import Google1 from '../assets/google1.webp';
import Image from 'next/image';
import BlueTick from '../assets/bluetick.png';
import U1 from '../assets/U1.png';
import U2 from '../assets/U2.png';
import U3 from '../assets/U3.png';
import U4 from '../assets/U4.png';
import U5 from '../assets/U5.png';
import U6 from '../assets/U6.png';

import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const profiles = [
    { image: U1, name: 'Yasir Hassan', date: '10 April 2025', review: 'The team made my UAE visit visa process so smooth and stress-free. Everything was handled with professionalism, and I was updated regularly.' },
    { image: U2, name: 'Ahmed Raza', date: '12 April 2025', review: 'I highly recommend this agency. They guided me through every step of the UAE work visa application and ensured all documents were perfect.' },
    { image: U3, name: 'Hania Shahid', date: '15 April 2025', review: 'Incredible service! I applied for a UAE freelance visa and got full assistance. The staff was polite, patient, and always available to answer my questions.' },
    { image: U4, name: 'Nimra Javed', date: '18 April 2025', review: 'A smooth and efficient process. From consultation to visa approval, they handled everything. Definitely recommend for anyone applying to UAE.' },
    { image: U5, name: 'Mohammad Al Amir', date: '20 April 2025', review: 'Very satisfied with the support I received. They made the UAE employment visa process easy, even with my tight deadline.' },
    { image: U6, name: 'Kausar Ali', date: '22 April 2025', review: 'They truly care about their clients. My Dubai residency application was managed flawlessly. Would not hesitate to use their services again.' },
];

const Reviews = () => {
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);
    const carouselRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const toggleExpand = (index: number) => {
        setExpandedIndexes((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    useEffect(() => {
        const nextBtn = carouselRef.current?.querySelector('[data-carousel-next]') as HTMLElement;
        const totalSlides = Math.ceil(profiles.length / 4);
        let currentIndex = 0;

        intervalRef.current = setInterval(() => {
            if (nextBtn) nextBtn.click();
            currentIndex++;

            if (currentIndex >= totalSlides) {
                setTimeout(() => {
                    const prevBtn = carouselRef.current?.querySelector('[data-carousel-previous]') as HTMLElement;
                    for (let i = 0; i < totalSlides; i++) {
                        prevBtn?.click();
                    }
                    currentIndex = 0;
                }, 500);
            }
        }, 3000);

        return () => clearInterval(intervalRef.current!);
    }, []);

    return (
        <div className="px-6 pb-8">
            <div ref={carouselRef}>
                <Carousel className="w-full">
                    <CarouselContent>
                        {profiles.map((item, i) => {
                            const isExpanded = expandedIndexes.includes(i);
                            return (
                                <CarouselItem
                                    key={i}
                                    className="pl-2 md:basis-1/2 lg:basis-1/4"
                                >
                                    <Card className={`p-4 bg-black border-black flex flex-col space-y-3 transition-all duration-300 ${isExpanded ? 'max-h-full' : 'h-[250px]'} overflow-hidden relative`}>
                                        <div className="flex flex-col gap-5">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Image src={item.image} alt={item.name} width={40} height={40} className="rounded-full" />
                                                    <div>
                                                        <h4 className="font-semibold text-sm text-white">{item.name}</h4>
                                                        <p className="text-xs text-gray-400">{item.date}</p>
                                                    </div>
                                                </div>
                                                <Image src={Google1} alt="Google icon" width={18} height={18} />
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <StarRating value={5} />
                                                <Image src={BlueTick} alt="Verified" width={20} height={14} />
                                            </div>

                                            <p className="text-sm text-white leading-snug">
                                                {isExpanded || item.review.length <= 200
                                                    ? item.review
                                                    : `${item.review.slice(0, 200)}...`}
                                            </p>

                                            {item.review.length > 200 &&
                                                (!isExpanded ? (
                                                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent flex items-end justify-center pb-3">
                                                        <button
                                                            onClick={() => toggleExpand(i)}
                                                            className="text-sm text-gray-500 font-medium"
                                                        >
                                                            Read more
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        onClick={() => toggleExpand(i)}
                                                        className="text-sm text-gray-500 font-medium self-end"
                                                    >
                                                        Show less
                                                    </button>
                                                ))}
                                        </div>
                                    </Card>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious data-carousel-previous />
                    <CarouselNext data-carousel-next />
                </Carousel>
            </div>
        </div>
    );
};

export default Reviews;
