"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com"; // Import EmailJS
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the default CSS for Toastify

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);

  const [formStatus, setFormStatus] = useState(""); // For showing form submission status

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gather form data
    const formData = new FormData(e.target);
    const data = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      from_phone: formData.get("phone"),
      message: formData.get("message"),
    };

    // Send email via EmailJS
    emailjs
      .send(
        "service_8642cwa", // Service ID from EmailJS
        "template_gza1ztb", // Template ID from EmailJS
        data,
        "tmUgtXKf_TwGrV1iE" // User ID from EmailJS
      )
      .then(
        (response) => {
          // Show success toast
          toast.success("Message sent successfully!");
          console.log("Success:", response);
        },
        (error) => {
          // Show error toast
          toast.error("Message failed to send. Please try again.");
          console.log("Error:", error);
        }
      );
  };

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
          onSubmit={handleSubmit} // Bind the submit handler
          className="bg-[#111111] rounded-lg border border-red-600/30 p-6 sm:p-8 grid grid-cols-1 gap-5 shadow-lg"
        >
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Full Name*
            </label>
            <input
              type="text"
              name="name" // Add name attribute for reference
              placeholder="Enter your full name"
              className="w-full bg-black border border-gray-700 rounded-md px-3 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Email*
            </label>
            <input
              type="email"
              name="email" // Add name attribute for reference
              placeholder="Enter your email"
              className="w-full bg-black border border-gray-700 rounded-md px-3 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Phone*
            </label>
            <input
              type="tel"
              name="phone" // Add name attribute for reference
              placeholder="Enter your phone number"
              className="w-full bg-black border border-gray-700 rounded-md px-3 py-2.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">
              Message*
            </label>
            <textarea
              name="message" // Add name attribute for reference
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

        {/* Toast Notifications Container */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </section>
  );
}
