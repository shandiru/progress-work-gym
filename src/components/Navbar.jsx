import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-[#020414] text-white px-4 py-3 w-full shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/logo.avif"
                        alt="Progress Works Gym Logo"
                        className="h-16 w-auto"
                    />

                    {/* Navigation Links */}
                    <div className=" sm:flex space-x-16 text-sm md:text-base mt-10 ml-10">
                        <Link
                            to="/"
                            className={`hover:text-gray-300 ${
                                location.pathname === "/" ? "text-red-600 font-semibold" : ""
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/team"
                            className={`hover:text-red-500 ${
                                location.pathname === "/team" ? "text-red-600 font-semibold" : ""
                            }`}
                        >
                            Personal Trainers
                        </Link>
                    </div>
                </div>

                {/* Instagram Icon */}
                <div className="w-8 h-8 bg-white rounded-full mt-10 flex items-center justify-center">
                    <a
                        href="https://www.instagram.com/progress_works_gym"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="text-black hover:text-pink-500 text-lg sm:text-xl" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
