"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ===================== DATA ===================== */
const equipmentData = {
  Legs: [
    { "name": "Name 1", "desc": "Description 1", "img": "leg1.jpg" },
    { "name": "Name 2", "desc": "Description 2", "img": "leg2.png" },
    { "name": "Name 3", "desc": "Description 3", "img": "leg3.jpg" },
    { "name": "Name 4", "desc": "Description 4", "img": "leg4.jpg" },
    { "name": "Name 5", "desc": "Description 5", "img": "leg5.jpg" },
    { "name": "Name 6", "desc": "Description 6", "img": "leg6.jpg" },
    { "name": "Name 7", "desc": "Description 7", "img": "leg7.jpg" },
    { "name": "Name 8", "desc": "Description 8", "img": "leg8.jpg" },
    { "name": "Name 9", "desc": "Description 9", "img": "leg9.jpg" },
    { "name": "Name 10", "desc": "Description 10", "img": "leg10.jpg" },
    { "name": "Name 11", "desc": "Description 11", "img": "leg11.jpg" },
    { "name": "Name 12", "desc": "Description 12", "img": "leg12.jpg" },
    { "name": "Name 13", "desc": "Description 13", "img": "leg13.jpg" },
    { "name": "Name 14", "desc": "Description 14", "img": "leg14.jpg" },
    { "name": "Name 15", "desc": "Description 15", "img": "leg15.jpg" },
    { "name": "Name 16", "desc": "Description 16", "img": "leg16.jpg" },
    { "name": "Name 17", "desc": "Description 17", "img": "leg17.jpg" },
    { "name": "Name 18", "desc": "Description 18", "img": "leg18.jpg" },
  ],

  Back: [
    { name: "Back1", desc: "Build a strong back with controlled rowing movements", img: "/G1.png" },
    { name: "Back2", desc: "Strengthen your upper body with supported pull-ups", img: "/G2.png" },
    { name: "Back3", desc: "Versatile cable system for full-body training", img: "/G3.png" },
    { name: "Back4", desc: "Isolate and strengthen calves", img: "/G4.png" },
  ],

  Chest: [
    { name: "Chest1", desc: "Simulates bench press safely", img: "/CH-1.png" },
    { name: "Chest2", desc: "Versatile chest & tricep machine", img: "/CH-2.png" },
  ],

  Arms: [
    { name: "Arms1", desc: "Functional trainer for full-body strength", img: "/A1.png" },
    { name: "Arms2", desc: "Chest fly & rear delt machine", img: "/A2.png" },
  ],

 Cardio: [
  { name: "Stationary Bikes", desc: "Standard bikes for low-impact cardio", img: "/Progress Work Equipment_Cardio area_BIKES (CUT LADY)_.JPG" },
  { name: "Incline Treadmill", desc: "Treadmill with adjustable incline for hill training", img: "/Progress Work Equipment_Cardio area_INCLINE TEADMILL.JPG" },
  { name: "Treadmill Row", desc: "Standard high-performance treadmills", img: "/Progress Work Equipment_Cardio area_MORE TREADMILLS.JPG" },
  { name: "Ski-Erg / Alternative Rower", desc: "Vertical rowing alternative for upper body cardio", img: "/Progress Work Equipment_Cardio area_ROWING ALTERNATIVE.JPG" },
  { name: "Rowing Machine", desc: "Full-body seated rowing ergometer", img: "/Progress Work Equipment_Cardio area_ROWING MACHINE.JPG" },
  { name: "Running Station", desc: "Additional treadmill and running equipment", img: "/Progress Work Equipment_Cardio area_RUNNING THINGS.JPG" },
  { name: "Stair Masters", desc: "Stepmill for intense lower body and cardio", img: "/Progress Work Equipment_Cardio area_STAIR MASTERS.JPG" },
  { name: "Step Machine", desc: "Compact stepping machine for glute activation", img: "/Progress Work Equipment_Cardio area_STEP MACHINE.JPG" },
  { name: "Standard Treadmill", desc: "Classic treadmill for walking or running", img: "/Progress Work Equipment_Cardio area_TREADMILL.JPG" },
],
};

/* ===================== COMPONENT ===================== */
export default function Equipment() {
  const categories = useMemo(() => Object.keys(equipmentData), []);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const gridRef = useRef(null);

  /* ---------- Responsive ---------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = equipmentData[activeCategory] || [];

  const visibleItems = useMemo(
    () => items.slice(startIndex, startIndex + itemsPerView),
    [items, startIndex, itemsPerView]
  );

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, items.length - itemsPerView)
    );
  };

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setStartIndex(0);
  };

  return (
    <section className="bg-black text-white py-20 px-4" id="ourequipment">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          OUR <span className="text-red-600">EQUIPMENT</span>
        </h2>
        <p className="text-gray-400 mt-2">Explore our premium gym machines</p>
      </div>

      {/* Categories */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1 border rounded-md transition ${
              activeCategory === cat
                ? "bg-red-600 text-white"
                : "border-red-600 hover:bg-red-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-4">
        {/* Left */}
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="bg-white text-black p-2 rounded-full disabled:opacity-40"
        >
          <FaChevronLeft />
        </button>

        {/* Cards */}
        <div
          ref={gridRef}
          className={`grid gap-6 max-w-6xl w-full ${
            itemsPerView === 1
              ? "grid-cols-1"
              : itemsPerView === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {visibleItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="border border-red-600 rounded-md overflow-hidden bg-black hover:scale-105 transition-transform duration-300"
            >
              <div className="h-94 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full rounded-2xl p-3 object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 bg-[#0d1117]">
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right */}
        <button
          onClick={nextSlide}
          disabled={startIndex + itemsPerView >= items.length}
          className="bg-white text-black p-2 rounded-full disabled:opacity-40"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
