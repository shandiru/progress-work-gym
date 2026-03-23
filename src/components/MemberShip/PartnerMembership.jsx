'use client'
import React from 'react'

const plans = [
   {
    title: '1 Month',
    price: 82,
    image: '/logo.png',
    features: [
      'Access for 2 Partners',
      'Flexible Pay As You Go',
      'Full Gym Access (All Hours)',
      'Free Induction for Both',
    ],
  },
  {
    title: '3 Month',
    price: 219,
    image: '/logo.png',
    features: [
      'Access for 2 Partners',
      'Flexible Pay As You Go',
      'Full Gym Access (All Hours)',
      'Free Induction for Both',
    ],
  },
  {
    title: '6 Month',
    price: 408,
    image: '/logo.png',
    features: [
      'Access for 2 Partners',
      'Flexible Pay As You Go',
      'Full Gym Access (All Hours)',
      'Free Induction for Both',
    ],
  },
  {
    title: '12 Month',
    price: 747,
    image: '/logo.png',
    features: [
      'Access for 2 Partners',
      'Flexible Pay As You Go',
      'Full Gym Access (All Hours)',
      'Free Induction for Both',
    ],
  },
  {
    title: 'OAP',
    price: 32,
    image: '/logo.png',
    features: [
      'Partner Friendly Plan',
      'Off-Peak Shared Access',
      'Light Gym Usage',
      'Free Induction Included',
    ],
  },
   {
    title: 'Off Peak',
    price: 34,
    image: '/logo.png',
    features: [
      'Partner Access (Off Peak)',
      'Shared Gym Usage',
      'Flexible Timing Access',
      'Free Induction Included',
    ],
  },
]

export default function PricingPlansSection() {
  return (
    <section className="bg-[#f8f8f8] py-20 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 mt-10">Partner Membership Plans</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Train together with our Partner Membership plans.
          Enjoy shared access, flexible usage, and full gym facilities
          for both members with no contract.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden flex flex-col justify-between"
          >
            <div className="relative bg-black h-64 flex items-center justify-center">
              <img
                src={plan.image}
                alt={plan.title}
                className="max-h-[85%] max-w-[85%] object-contain grayscale"
              />

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-[85%]">
                <div className="bg-white py-2 text-center -skew-y-3 shadow-md">
                  <div className="text-red-600 font-semibold text-lg skew-y-3">
                    {plan.title}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center px-6 py-8 flex-grow">
              <div className="text-4xl font-bold text-black mb-1">£{plan.price}</div>
              <div className="text-sm text-gray-500 mb-4">Total</div>

              <ul className="space-y-2 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

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