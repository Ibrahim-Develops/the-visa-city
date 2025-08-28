import Image from 'next/image';

const VisaImages = [
  "/V1.webp", "/V2.webp", "/V3.webp", "/V4.webp", "/V5.webp", "/V6.webp", "/V8.webp", "/V9.webp", "/V10.webp",
  "/V12.webp", "/V14.webp", "/V15.webp", "/V16.webp", "/V17.png", "/V18.webp", "/V19.webp", "/V20.webp",
  "/V21.webp", "/V22.webp", "/V23.webp", "/V24.webp", "/V25.webp", "/V27.webp", "/V28.webp", "/V29.webp", "/V30.webp",
  "/V31.webp", "/V32.webp", "/V33.webp", "/V34.webp", "/V35.webp", "/V36.webp", "/V37.webp", "/V38.webp",
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

export default Visas;
