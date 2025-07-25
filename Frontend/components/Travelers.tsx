import React from 'react'

const Travelers = () => {
  return (
    <div className="py-20 px-6 md:px-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-4">
        From Travelers to Travel Experts
      </h2>
      <p className="text-white max-w-3xl mx-auto mb-12">
        We were travelers first and understand the challenges of international travel.
        That’s why we provide visa solutions to make traveling abroad easier.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-40 h-60 bg-gray-300 rounded-xl shadow-md" />

        <div className="max-w-xl text-white relative">
          <div className="text-yellow-300 text-6xl leading-none mb-2">“</div>
          <p className="mb-4">
            We started as travellers, just like you! Along the way, we experienced the excitement of
            exploring new places but also the frustrations of dealing with visas, endless paperwork, and complex rules.
            Those challenges inspired us to make the journey smoother for others.
          </p>
          <p className="mb-4">
            Today, we have grown into a dedicated visa service that simplifies all these processes for you.
          </p>
          <p className="mb-4">
            Our team has firsthand experience with the travel hustle, and that’s why we offer solutions
            that make it feel like you're just one step away from your next adventure.
          </p>
          <p>
            When you work with us, you’re partnering with a team that’s been in your shoes and knows
            the ins and outs of travel. Let’s make your travel experience as easy as packing your bags!
          </p>
          <div className="text-yellow-300 text-6xl leading-none mt-4 rotate-180">“</div>
        </div>

        <div className="w-40 h-60 bg-gray-300 rounded-xl shadow-md" />
      </div>
    </div>
  )
}

export default Travelers
