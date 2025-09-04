'use client'
import React from 'react'

const plans = [
  {
    title: '1 Month Rolling Membership',
    price: 45,
    features: [
      'No Joining Fee',
      'Usage 7 Days a Week',
      'Wide Range of Facilities',
      'Expert Help And Advice',
      "1 Month Cancellation"
    ],
  },
  {
    title: '1 Month Couples Membership',
    price: 68.00 ,
    features: [
      'Pay As You Go (No Contract)',
      'Gym available during all hours',
      'Unlimited usage',
      'Free induction',
    ],
  },
]

export default function PricingPlansSection() {
  return (
    <section className="bg-[#f8f8f8] py-20 px-4 sm:px-6 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Exclusive Pricing Plan</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          All Pay As You Go memberships are on a no-contract basis. 
          Enjoy access to the gym during all available hours, with unlimited usage 
          and a free induction included.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden flex flex-col justify-between"
          >
            <div className="relative">
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-64 object-cover grayscale"
              />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 w-[85%]">
                <div className="bg-white py-2 text-center transform -skew-y-3 shadow-md">
                  <div className="text-red-600 font-semibold text-lg transform skew-y-3">
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
                PURCHASE NOW →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
