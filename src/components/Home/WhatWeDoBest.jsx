import React from "react";

const WhatWeDoBest = () => {
    return (
        <section className="bg-white w-full">
            <div className="w-full h-80 bg-gray-200"></div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
                {/* Left Side: Text */}
                <div className="flex flex-col justify-center px-6 sm:px-10 py-12 max-w-lg mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-6 leading-tight">
                        What We Do <br /> Best
                    </h2>
                    <p className="text-lg font-semibold text-gray-800 leading-relaxed mt-5 tracking-widest">
                        At Progress Works Gym we cover all bases. Whether you're an IFBB Pro
                        preparing for your next show, or just beginning your fitness journey.
                        Our Gym is split into dedicated rooms providing all your needs from
                        strength, legs, cardio, posing and stretching. Choose your room and
                        get to work.
                    </p>
                </div>

                {/* Right Side: Image */}
                <div className="w-full h-full ml-9">
                    <img
                        src="/working.avif" // ⬅ Replace with your actual path
                        alt="Gym cardio room"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoBest;
