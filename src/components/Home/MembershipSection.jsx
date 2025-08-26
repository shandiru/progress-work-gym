import React from "react";

const plans = [
  {
    title: "Cash Membership",
    options: [
      { label: "1 Month", price: "£45" },
      { label: "3 Month", price: "£116" },
      { label: "6 Month", price: "£213" },
      { label: "12 Month", price: "£396" },
    ],
  },
  {
    title: "Special Memberships",
    options: [
      { label: "Senior Citizen", price: "£31" },
      { label: "Off Peak", price: "£33" },
    ],
  },
  {
    title: "Day Passes",
    options: [
      { label: "1 Day", price: "£9" },
      { label: "7 Day", price: "£21" },
      { label: "Multi Pass", price: "£65" },
    ],
  },
];

export default function MembershipPlans() {
  return (
    <section className="bg-[#0d1117] text-white py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          MEMBERSHIP <span className="text-red-600">PLANS</span>
        </h2>
        <p className="text-gray-400 mt-2">Choose the plan that fits your lifestyle</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="border border-red-600 rounded-md p-6">
            <h3 className="text-xl font-semibold text-red-500 mb-4">{plan.title}</h3>
            <ul className="space-y-3 mb-4">
              {plan.options.map((option, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-[#1c1f26] px-4 py-2 rounded-md"
                >
                  <span>{option.label}</span>
                  <span className="text-red-500 font-semibold">{option.price}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
