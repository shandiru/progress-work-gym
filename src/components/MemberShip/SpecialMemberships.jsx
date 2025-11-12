'use client'
import React from 'react'

const plans = [
  {
    title: 'Senior Citizen',
    price: 31,
    image: '/logo.png',
    features: [
      'Pay As You Go (No Contract)',
      'Available to seniors aged 65 years and above',
      'Gym access during all available hours',
      'Unlimited usage',
      'Free induction',
    ],
  },
  {
    title: 'Off Peak',
    price: 33,
    image: '/logo.png',
    features: [
      'Pay As You Go (No Contract)',
      'Valid Mon – Fri, 10:00am – 3:30pm',
      'Unlimited usage during off-peak hours',
      'Free induction',
    ],
  },
]

export default function PricingPlansSection() {
  return (
    <section className="bg-[#f8f8f8] py-20 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-10">Special Memberships</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          These special memberships are also Pay As You Go with no contract. 
          Senior Citizen memberships are for individuals aged 65 years and above, 
          while Off-Peak memberships allow access Monday to Friday from 10:00am to 3:30pm.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden flex flex-col justify-between"
          >
            {/* Logo Box */}
            <div className="relative bg-black h-64 flex items-center justify-center">
              <img
                src={plan.image}
                alt={plan.title}
                className="max-h-[85%] max-w-[85%] object-contain grayscale"
              />
              {/* Skewed Label */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-[85%]">
                <div className="bg-white py-2 text-center -skew-y-3 shadow-md">
                  <div className="text-red-600 font-semibold text-lg skew-y-3">
                    {plan.title}
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="text-center px-6 py-8 flex-grow">
              <div className="text-4xl font-bold text-black mb-1">£{plan.price}</div>
              <div className="text-sm text-gray-500 mb-4">Total</div>

              <ul className="space-y-2 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6 text-center">
              <button className="bg-red-600 text-white font-semibold px-6 py-3 w-full rounded shadow hover:bg-red-700 transition">
                Purchase At Reception
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
