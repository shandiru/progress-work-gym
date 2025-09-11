"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading + paragraph
      gsap.from(headingRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animate form fields
      gsap.from(formRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-black py-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-md mx-auto">
            Have questions or want to join? Fill out the form below and we’ll get
            back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          className="bg-[#111111] rounded-lg border border-red-600/30 p-6 sm:p-8 grid grid-cols-1 gap-5 shadow-lg"
        >
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-black border border-gray-700 rounded-md px-3 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-black border border-gray-700 rounded-md px-3 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-black border border-gray-700 rounded-md px-3 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="w-full bg-black border border-gray-700 rounded-md px-3 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 resize-none transition"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 rounded-md font-semibold text-sm shadow-md hover:shadow-red-600/30 transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
