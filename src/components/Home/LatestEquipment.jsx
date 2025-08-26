import React from "react";

const LatestEquipment = () => {
  return (
    <section className="bg-[#F5F5F5] w-full">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Image */}
        <div className="w-full h-full">
          <img
            src="/cycling.avif" // Replace with your actual image path
            alt="Latest Gym Equipment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col justify-center px-6 sm:px-10 py-12 max-w-lg mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
            The Latest <br /> Equipment
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed tracking-widest">
            <span className="font-medium">
              "One thing about great gyms, they are as good as the equipment
              they have. Also how often that equipment is changed to keep pace
              with the latest trends"
            </span>{" "}
            - Neil, Progress Works Founder
          </p>
        </div>
      </div>
    </section>
  );
};

export default LatestEquipment;
