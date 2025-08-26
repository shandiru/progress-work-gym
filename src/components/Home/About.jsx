import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag, GiBodyBalance } from "react-icons/gi";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 relative z-10">
          {/* Badge */}
          <div className="inline-block bg-[#ed1c24] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Who We Are
          </div>

          {/* Heading */}
          <h1 className="text-[24px] sm:text-[36px] lg:text-[40px] font-bold leading-tight text-gray-900">
            Take Your Health And Body To <br />
            <span className="text-[#ed1c24]">Next Level</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-600 text-base leading-relaxed max-w-lg">
            Gymat an unknown printer took a galley of type and scr arsy mbled it to make a type specimen book. It has survived not only five centuri but also the.
          </p>

          {/* Features */}
          <div className="grid grid-cols-3 text-center divide-x divide-gray-300 border-y border-gray-300 py-6">
            <div className="px-4">
              <FaDumbbell className="text-[#ed1c24] text-4xl mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900 uppercase">
                Professional<br />Trainers
              </p>
            </div>
            <div className="px-4">
              <GiGymBag className="text-[#ed1c24] text-4xl mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900 uppercase">
                Modern<br />Equipments
              </p>
            </div>
            <div className="px-4">
              <GiBodyBalance className="text-[#ed1c24] text-4xl mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900 uppercase">
                Body Building<br />Machine
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#"
            className="inline-block mt-6 bg-black text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:bg-gray-800 transition"
          >
            Take A Tour →
          </a>
        </div>

        {/* Right Image with Red Half-Circle Background */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
          {/* Red Half-Circle Shape */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[85%] aspect-square rounded-full bg-[#ed1c24] z-0"></div>

          {/* Runner Image */}
          <img
            src="/right.png"
            alt="Running Visual"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[650px] z-10 object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
}

