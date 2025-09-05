'use client'
import React from 'react'

const plans = [
  {
    title: '1 Month',
    price: 45,
    image: '/logo.avif',
    features: [
      'Pay As You Go (No Contract)',
      'Gym available during all hours',
      'Unlimited usage',
      'Free induction',
    ],
  },
  {
    title: '3 Month',
    price: 116,
    image: '/logo.avif',
    features: [
      'Pay As You Go (No Contract)',
      'Gym available during all hours',
      'Unlimited usage',
      'Free induction',
    ],
  },
  {
    title: '6 Month',
    price: 213,
    image: '/logo.avif',
    features: [
      'Pay As You Go (No Contract)',
      'Gym available during all hours',
      'Unlimited usage',
      'Free induction',
    ],
  },
  {
    title: '12 Month',
    price: 396,
    image: '/logo.avif',
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md overflow-hidden flex flex-col justify-between"
          >
            {/* Image Block */}
            <div className="relative bg-black h-64 flex items-center justify-center">
              <img
                src={plan.image}
                alt={plan.title}
                className="max-h-[85%] max-w-[85%] object-contain grayscale"
              />
              {/* Title Ribbon */}
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
                PURCHASE NOW →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
