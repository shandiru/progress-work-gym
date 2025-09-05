// File: WhyChooseUsSection.jsx
'use client';
import React from "react";
import { GiGymBag, GiWeightLiftingUp } from "react-icons/gi";
import { FaDumbbell, FaBottleWater } from "react-icons/fa6";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-12 py-20" id="why">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image or Video */}
        <div className="relative">
          <div className="relative rounded-md overflow-hidden shadow-lg w-full max-w-[500px] mx-auto border-[6px] border-white rotate-[-2deg]">
            <video
              src="/back.mp4" // replace this with the actual path to your video
              alt="Fitness training"
              className="w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>


        {/* Right Side Content */}
        <div className="space-y-6 relative">
          {/* Badge */}
          <div className="inline-block bg-[#ed1c24] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Why Choose Us
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            Built for every body.
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 text-base max-w-xl">
            From first-timers to IFBB Pros, our dedicated training rooms and
            constantly updated equipment give you everything you need to succeed.
            At Progress Works, we make fitness simple.
          </p>

          {/* Features / Keywords */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="flex items-center gap-3">
              <GiWeightLiftingUp className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Strength</span>
            </div>
            <div className="flex items-center gap-3">
              <FaDumbbell className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Cardio</span>
            </div>
            <div className="flex items-center gap-3">
              <GiGymBag className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Equipment</span>
            </div>
            <div className="flex items-center gap-3">
              <FaBottleWater className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Results</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#member"
            className="inline-block mt-6 text-white font-semibold border border-white px-6 py-3 rounded hover:bg-[#ed1c24] hover:border-[#ed1c24] transition"
          >
            Join Now →
          </a>
        </div>
      </div>
    </section>
  );
}
