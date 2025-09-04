import React from "react";

const Header = () => {
    return (
        <section id="home" className="relative w-full h-150 text-white overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/back.mp4" // Replace with actual path
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay for darkening effect */}
            <div className="absolute inset-0 bg-opacity-50 z-10"></div>

            {/* Vertical Buttons (left side) */}
            <div className="fixed left-3 top-120 transform -translate-y-1/2 z-20 space-y-48 cursor-pointer">
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

            {/* Centered Text */}
            <div className="relative z-20 flex flex-col justify-center h-full px-4 sm:px-8 md:px-16 lg:px-24 ml-50 mt-10">
                <p className="text-lg font-semibold tracking-widest mb-2">
                    PROGRESS WORKS GYM - GLENFIELD, LEICESTER
                </p>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    LEICESTERS <br />
                    BEST <br />
                    EQUIPPED <br />
                    GYM<span className="text-red-600">.</span>
                </h1>

                {/* Sign Up Button */}
                <button className="mt-6 max-w-40 ml-15 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 text-sm sm:text-base tracking-wider uppercase">
                    Sign Up
                </button>
            </div>
        </section>
    );
};

export default Header;
