import React from "react";
import { HiLocationMarker } from "react-icons/hi";

export default function Contact() {
  return (
    <section className="bg-[#0d1117] text-white py-16 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          GET IN <span className="text-red-600">TOUCH</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Ready to start your fitness journey?
        </p>
      </div>

      {/* Map Card */}
      <div className="max-w-4xl mx-auto border border-red-600 rounded-md overflow-hidden shadow-lg bg-[#161b22]">
        <div className="text-center p-4 border-b border-red-600">
          <h3 className="text-xl font-semibold text-white">Our Location</h3>
          <p className="text-gray-400 text-sm">
            Explore our gym location with 360° Street View
          </p>
        </div>

        {/* Google Street View Embed */}
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            title="Google Street View"
            className="w-full h-96"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!4v1712419757756!6m8!1m7!1sCAoSLEFGMVFpcE9EZ29pSEFwU3hsZ2NBcmptN0NReGVyUk1KYjVRckl3WWR6V2No!2m2!1d52.647937!2d-1.1914016!3f270!4f0!5f0.7820865974627469"
            allowFullScreen
          ></iframe>
        </div>

        {/* Address and Buttons */}
        <div className="p-6 text-center space-y-4">
          <p className="flex items-center justify-center font-semibold gap-2">
            <HiLocationMarker className="w-6 h-6 text-red-500" />
            132 Station Rd, Glenfield, Leicester LE3 8BR
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://goo.gl/maps/Dpr8svJDd4m2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm font-medium"
            >
              Open in Google Maps
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=132+Station+Rd,+Glenfield,+Leicester+LE3+8BR"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-5 py-2 rounded-md text-sm font-medium"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
