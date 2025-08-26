'use client';
import React from "react";
import { GiGymBag, GiWeightLiftingUp } from "react-icons/gi";
import { FaDumbbell, FaBottleWater } from "react-icons/fa6";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-12 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image or Video */}
        <div className="relative">
          <div className="relative rounded-md overflow-hidden shadow-lg w-full max-w-[500px] mx-auto border-[6px] border-white rotate-[-2deg]">
            <img
              src="/man-training.jpg"
              alt="Fitness training"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white text-black rounded-full p-4 shadow-lg hover:scale-110 transition">
                ►
              </button>
            </div>
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
            We Can Give A Shape Of <br />
            Your Body Here!
          </h2>

          {/* Paragraph */}
          <p className="text-gray-300 text-base max-w-xl">
            Gymat an unknown printer took a galley of type and scarey aretea mbled it to make a type specimen book. May has survived not only five centuries, but also the leap into electronic.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="flex items-center gap-3">
              <GiWeightLiftingUp className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Free Fitness <br /> Training</span>
            </div>
            <div className="flex items-center gap-3">
              <FaDumbbell className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Modern Gym <br /> Equipments</span>
            </div>
            <div className="flex items-center gap-3">
              <GiGymBag className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Gym Bag <br /> Equipments</span>
            </div>
            <div className="flex items-center gap-3">
              <FaBottleWater className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Fresh Bottle <br /> Water</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-block mt-6 text-white font-semibold border border-white px-6 py-3 rounded hover:bg-[#ed1c24] hover:border-[#ed1c24] transition"
          >
            OUR CLASSES →
          </a>
        </div>
      </div>
    </section>
  );
}
