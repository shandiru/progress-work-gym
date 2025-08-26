import React from "react";

const LifestyleSection = () => {
  return (
    <section className="bg-white w-full">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left: Image */}
        <div className="w-full h-full">
          <img
            src="/front.avif" // 👈 Replace with your actual image path
            alt="Progress Works Gym Desk"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="flex flex-col justify-center px-6 sm:px-12 py-12 ml-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            It’s a Lifestyle
          </h2>
          <p className="text-base font-semibold text-gray-800 leading-relaxed max-w-sm">
            Get fit. Stay healthy. Feel amazing. Do it all at Progress Works Gym.
            Our state-of-the-art facility and fully-equipped training rooms offer
            a one-of-a-kind experience in a comfortable, personal and professional
            atmosphere. Browse our site to learn more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
