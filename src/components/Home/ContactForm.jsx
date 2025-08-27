import React from "react";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-[#2F3A4D] py-16 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="text-gray-400 mt-3">
            Have questions or want to join? Fill out the form below and we’ll get
            back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form className="bg-black/40 backdrop-blur-md rounded-xl border border-red-600/40 p-8 grid grid-cols-1 gap-6 shadow-lg">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-[#1C1C1C] border border-gray-700 rounded-md px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1C1C1C] border border-gray-700 rounded-md px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-[#1C1C1C] border border-gray-700 rounded-md px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full bg-[#1C1C1C] border border-gray-700 rounded-md px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold shadow-md transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
