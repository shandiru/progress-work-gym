// File: ContactForm.jsx
import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-black py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-md mx-auto">
            Have questions or want to join? Fill out the form below and we’ll get
            back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form className="bg-[#111111] rounded-lg border border-red-600/30 p-6 sm:p-8 grid grid-cols-1 gap-5 shadow-lg">
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
