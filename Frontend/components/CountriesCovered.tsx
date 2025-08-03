import React from 'react';

const countries = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇩🇪", name: "Schengen States" },
  { flag: "🇦🇪", name: "UAE" },
];

const CountriesCovered = () => {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-2xl font-semibold text-[#FFD700] mb-6">We Handle Visas For:</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {countries.map((country, idx) => (
          <div key={idx} className="bg-white text-black shadow-md px-6 py-4 rounded-xl text-lg font-medium flex items-center gap-2">
            <span className="text-2xl">{country.flag}</span> {country.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountriesCovered;
