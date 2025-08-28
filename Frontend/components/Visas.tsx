import React from 'react'
import V1 from '../public/V1.webp';
import V2 from '../public/V2.webp';
import V3 from '../public/V3.webp';
import V4 from '../public/V4.webp';
import V5 from '../public/V5.webp';
import V6 from '../public/V6.webp';
import V8 from '../public/V8.webp';
import V9 from '../public/V9.webp';
import V10 from '../public/V10.webp';
import V12 from '../public/V12.webp';
import V14 from '../public/V14.webp';
import V15 from '../public/V15.webp';
import V16 from '../public/V16.webp';
import V17 from '../public/V17.png';
import V18 from '../public/V18.webp';
import V19 from '../public/V19.webp';
import V20 from '../public/V20.webp';
import V21 from '../public/V21.webp';
import V22 from '../public/V22.webp';
import V23 from '../public/V23.webp';
import V24 from '../public/V24.webp';
import V25 from '../public/V25.webp';
import V27 from '../public/V27.webp';
import V28 from '../public/V28.webp';
import V29 from '../public/V29.webp';
import V30 from '../public/V30.webp';
import V31 from '../public/V31.webp';
import V32 from '../public/V32.webp';
import V33 from '../public/V33.webp';
import V34 from '../public/V34.webp';
import V35 from '../public/V35.webp';
import V36 from '../public/V36.webp';
import V37 from '../public/V37.webp';
import V38 from '../public/V38.webp'; 
import Image from 'next/image';

const VisaImages = [
  V1, V2, V3, V4, V5, V6, V8, V9, V10,
  V12, V14, V15, V16, V17, V18, V19, V20,
  V21, V22, V23, V24, V25, V27, V28, V29, V30,
  V31, V32, V33, V34, V35, V36, V37, V38,
];

const Visas = () => {
  return (
    <div className="relative overflow-hidden py-8 px-4 sm:px-10 md:px-16 lg:px-20">
      <div className="scroll-infinite flex w-max animate-scroll-left space-x-4 sm:space-x-6 hover:[animation-play-state:paused]">
        {[...VisaImages, ...VisaImages].map((item, i) => (
          <div key={i} className="w-[180px] sm:w-[220px] md:w-[250px] flex-shrink-0">
            <Image
              src={item}
              alt={`Visa ${i + 1}`}
              width={250}
              height={250}
              className="rounded-md shadow-md object-cover w-full h-auto transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Visas