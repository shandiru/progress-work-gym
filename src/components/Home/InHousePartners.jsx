// File: InHousePartners.jsx
import React from "react";

const PARTNERS = [
  {
    name: "Fine Line",
    handle: "@finelines_tattoo_pmuleicester",
    photo: "/jodie1.png",
    logo: "/fineline.png",
  },
  {
    name: "Top Teir Pysio - Keith",
    handle: "@toptierphysio",
    photo: "/h-p-2.jpg",
    logo: "/top.jpg",
  },
  {
    name: "Milenium Fit",
    handle: "@millenniumfit1",
    photo: "/h-p-3.jpg",
    logo: "/fit.png",
  },
  {
    name: "Urban Martial Arts",
    handle: "@umaleicester",
    photo: "/h-p-4.png",
    logo: "/art.jpg",
  },

];

export default function InHousePartners() {
  return (
    <section className="w-full bg-black text-white px-4 py-16">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-red-600 tracking-widest font-semibold">OUR PARTNERS</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
          In-House Partners
        </h2>
      </div>

      {/* Partner Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {PARTNERS.map((p, i) => (
          <article
            key={i}
            className="rounded-xl border border-red-600 bg-black overflow-hidden shadow-lg hover:shadow-red-600/50 transition-all duration-300"
          >
            {/* Top image */}
            <div className="w-full aspect-[4/5] overflow-hidden">
              <img
                src={p.photo}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Logo strip */}
            <div className="bg-black flex items-center justify-center h-24 mt-3">
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                className="max-h-20 max-w-[80%] object-contain"
              />
            </div>

            {/* Text */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-white">{p.name}</h3>
              {/* Make the handle clickable to Instagram */}
              <a
                href={`https://www.instagram.com/${p.handle.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-600 mt-2 hover:underline block"
              >
                {p.handle}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
