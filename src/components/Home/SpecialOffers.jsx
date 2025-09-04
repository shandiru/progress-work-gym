// File: SpecialOffers.jsx
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function SpecialOffers() {
  const [open, setOpen] = useState(false);

  const offers = [
    { title: "2 for 1 on Waffles", note: "Every Tuesday, after 5pm" },
    { title: "Free Topping Upgrade", note: "On any Sundae over £7" },
    { title: "Family Bundle", note: "Any 4 desserts for £25" },
  ];

  return (
    <section className="bg-black text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-extrabold mb-2">Special Offers</h1>
          <p className="text-red-600 text-base">
            Discover amazing deals and exclusive benefits
          </p>
        </header>

        {/* Card */}
        <div className="w-full rounded-xl border border-red-600 bg-black/50 shadow-md">
          {/* Card header */}
          <div className="flex items-start justify-between gap-4 p-5">
            <div>
              <h2 className="text-xl font-semibold">Current Offers</h2>
              <p className="text-red-600 text-sm">
                Click to view all available deals
              </p>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 h-8 px-3 rounded-md border border-red-600 text-white hover:bg-red-600 transition"
            >
              View Offers
              <FiChevronDown
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-red-600/40 mx-5" />

          {/* Collapsible body */}
          {open && (
            <div className="p-5 grid gap-4 sm:grid-cols-2">
              {offers.map((o, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-red-600/50 p-3 bg-black/70"
                >
                  <div className="font-semibold">{o.title}</div>
                  <div className="text-red-600 text-sm mt-1">{o.note}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
