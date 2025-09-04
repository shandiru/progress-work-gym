import React from "react";

const Trainer = () => {
  return (
    <section className="bg-[#0a0b15] text-white py-20 px-4">
      <div className="fixed left-3 top-120 transform -translate-y-1/2 z-20 space-y-49 cursor-pointer">
        <div className="bg-red-600 text-white rotate-[-90deg] hover:bg-red-500 origin-left px-10 pt-2 font-bold text-lg text-center tracking-widest">
          SIGN UP TODAY
        </div>
        <a
          href="#contact"
          className="bg-black text-white rotate-[-90deg] hover:bg-gray-700 origin-left px-10 pt-2 font-bold text-lg text-center tracking-widest block"
        >
          CONTACT US
        </a>
      </div>
      <div className="max-w-4xl ml-20 md:ml-40 mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left: Heading */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-extrabold leading-tight">
            PERSONAL <br /> TRAINERS
          </h2>
        </div>

        {/* Right: Description */}
        <div className="w-full md:w-1/2">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
            We understand it can be hard to know where to start, or if you're looking
            to take your fitness to the next level our personal trainers cover all aspects
            from Holistic, Competition Prep & Sports Specific Instruction
          </p>
          <hr className="w-12 border-t border-white" />
        </div>
      </div>
    </section>
  );
};

export default Trainer;
