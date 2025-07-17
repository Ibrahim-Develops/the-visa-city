import React from 'react'
import V1 from '../assets/V1.webp';
import V2 from '../assets/V2.webp';
import V3 from '../assets/V3.webp';
import V4 from '../assets/V4.webp';
import V5 from '../assets/V5.webp';
import V6 from '../assets/V6.webp';
import V7 from '../assets/V7.webp';
import V8 from '../assets/V8.webp';
import V9 from '../assets/V9.webp';
import V10 from '../assets/V10.webp';
import V11 from '../assets/V11.webp';
import V12 from '../assets/V12.webp';
import V14 from '../assets/V14.webp';
import V15 from '../assets/V15.webp';
import V16 from '../assets/V16.webp';
import V17 from '../assets/V17.png';
import V18 from '../assets/V18.webp';
import V19 from '../assets/V19.webp';
import V20 from '../assets/V20.webp';
import V21 from '../assets/V21.webp';
import V22 from '../assets/V22.webp';
import V23 from '../assets/V23.webp';
import V24 from '../assets/V24.webp';
import V25 from '../assets/V25.webp';
import V26 from '../assets/V26.webp';
import V27 from '../assets/V27.webp';
import V28 from '../assets/V28.webp';
import V29 from '../assets/V29.webp';
import V30 from '../assets/V30.webp';
import V31 from '../assets/V31.webp';
import V32 from '../assets/V32.webp';
import V33 from '../assets/V33.webp';
import V34 from '../assets/V34.webp';
import V35 from '../assets/V35.webp';
import V36 from '../assets/V36.webp';
import V37 from '../assets/V37.webp';
import V38 from '../assets/V38.webp'; 
import Image from 'next/image';

const VisaImages = [
  V1, V2, V3, V4, V5, V6, V7, V8, V9, V10,
  V11, V12, V14, V15, V16, V17, V18, V19, V20,
  V21, V22, V23, V24, V25, V26, V27, V28, V29, V30,
  V31, V32, V33, V34, V35, V36, V37, V38,
];

const Visas = () => {
  return (
    <div className="relative w- overflow-hidden py-8 bg-white mx-20">
      <div className="scroll-infinite flex w-max animate-scroll-left space-x-6 hover:paused">
        {[...VisaImages, ...VisaImages].map((item, i) => (
          <div key={i} className="min-w-[250px]">
            <Image
              src={item}
              alt={`Visa ${i + 1}`}
              width={250}
              height={250}
              className="rounded-md shadow-md transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Visas