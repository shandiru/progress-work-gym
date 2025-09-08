// File: About.jsx
import React from "react";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag, GiBodyBalance } from "react-icons/gi";

export default function About() {
  return (
    <section
      className="relative bg-black overflow-hidden py-16 px-4 sm:px-6 lg:px-12"
      id="about"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 relative z-10">
          {/* Badge */}
          <div className="inline-block bg-[#ed1c24] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Who Are We
          </div>

          {/* Heading */}
          <h1 className="text-[24px] sm:text-[36px] lg:text-[40px] font-bold leading-tight text-white">
            Fitness. Lifestyle.{" "}
            <span className="text-[#ed1c24]">Progress.</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-300 text-base leading-relaxed max-w-lg">
            Founded in 2016, Progress Works Gym is where anyone can train, grow,
            and feel their best. We bring the latest equipment and a holistic
            approach to fitness in Leicester.
          </p>

          {/* Features / Keywords */}
          <div className="grid grid-cols-3 text-center divide-x divide-gray-700 border-y border-gray-700 py-6">
            <div className="px-4">
              <FaDumbbell className="text-[#ed1c24] text-4xl mx-auto mb-2" />
              <p className="text-sm font-bold text-white uppercase">
                Progress
              </p>
            </div>
            <div className="px-4">
              <GiGymBag className="text-[#ed1c24] text-4xl mx-auto mb-2" />
              <p className="text-sm font-bold text-white uppercase">
                Lifestyle
              </p>
            </div>
            <div className="px-4">
              <GiBodyBalance className="text-[#ed1c24] text-4xl mx-auto mb-2" />
              <p className="text-sm font-bold text-white uppercase">
                Community
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href="/#contact"
            className="inline-block mt-6 bg-[#ed1c24] text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:bg-red-700 transition"
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
            src="/whoarewe.png"
            alt="Running Visual"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[650px] z-10 object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
}
