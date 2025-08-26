import React from "react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section id="contact" className="w-full">
            {/* Main Footer Section */}
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Left Section */}
                <div
                    className="w-full md:w-1/2 bg-cover bg-center p-6 flex items-center justify-center"
                    style={{ backgroundImage: "url('/gym.avif')" }}
                >
                    <div className="bg-gray-700 bg-opacity-90 p-6 md:p-8 rounded-md w-full max-w-md text-white space-y-4">
                        <h2 className="text-xl font-bold">Get in Touch</h2>
                        <p className="text-sm">Use the form to Get in touch</p>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-2 bg-transparent border-b border-white focus:outline-none"
                            />
                            <div className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    className="w-1/2 p-2 bg-transparent border-b border-white focus:outline-none"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="w-1/2 p-2 bg-transparent border-b border-white focus:outline-none"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Type your message here..."
                                className="w-full p-2 bg-transparent border-b border-white focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-white rounded mt-5 text-black text-base font-semibold px-4 py-2 hover:bg-black hover:text-white transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Section */}

                <div className="w-full md:w-1/2 bg-[#0a0b15] text-white flex flex-col justify-center p-6">
                    <div className="flex flex-col lg:flex-row justify-between md:items-center w-full ml-10 md:ml-0">
                        {/* Left: Address and Contact */}
                        <div className="md:ml-20 space-y-2 font-semibold">
                            <a
                                href="https://www.google.com/maps/@52.6531529,-1.2009824,3a,75y,233.56h,91.84t/data=!3m8!1e1!3m6!1sCIABIhAGbzaqChiQ-2fzxFoACWwH!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAB8u6HZlgF9zCxgpWtoFNeEB1fOeGT5yFtX0U2UaE5P-tD02tQ7zXuAAWX3ZDgmY1a9CtxfQ6QL58G7M357hd2Pxm4T6HVlKSle5TRbnbf9KR5aCrqvTk69cQi2Wbn2tIVnrOp-gBcIMWoqjGQ6w%3Dw900-h600-k-no-pi-1.8400000000000034-ya65.8207574462891-ro0-fo100!7i8192!8i4096?entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="space-y-2 font-semibold block hover:text-gray-300 transition"
                            >
                                <h3 className="font-semibold text-base md:text-lg">Progress Works Gym</h3>
                                <p className="text-sm md:text-base">132 Station Rd, Glenfield,</p>
                                <p className="text-sm md:text-base">Leicester LE3 8BR</p>
                            </a>
                            <p className="text-sm md:text-base mt-2">
                                Tel:{" "}
                                <a
                                    href="tel:01162877667"
                                    className="underline font-semibold"
                                >
                                    0116 287 7667
                                </a>
                            </p>
                            <hr className="border-white mt-4 w-full md:w-[300px]" />
                        </div>

                        {/* Right: Links and Instagram */}
                        <div className="flex flex-col items-left gap-2 text-lg mt-4 md:mt-10 lg:mt-0">
                            <Link
                                to="/"
                                className="hover:text-gray-500"
                                onClick={() => {
                                    setTimeout(() => {
                                        const homeSection = document.getElementById("home");
                                        homeSection?.scrollIntoView({ behavior: "smooth" });
                                    }, 100); // slight delay to allow page transition
                                }}
                            >
                                Home
                            </Link>
                            <Link
                                to="/team"
                                className="hover:text-gray-500"
                                onClick={() => {
                                    setTimeout(() => {
                                        const trainerSection = document.getElementById("trainer");
                                        trainerSection?.scrollIntoView({ behavior: "smooth" });
                                    }, 100);
                                }}
                            >
                                Personal Trainers
                            </Link>
                            <a
                                href="https://www.instagram.com/progress_works_gym"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="text-xl hover:text-pink-500 mt-5" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="w-full h-4 bg-gray-700"></div>
            <div className="bg-black text-center text-white py-2 text-sm">
                © 2023 by Progress Works Gym.
            </div>
            <div className="w-full h-7 bg-gray-700"></div>
        </section>
    );
};

export default Footer;
