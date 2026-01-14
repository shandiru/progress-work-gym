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

  

 

 Cardio: [
  { name: "Name 1", desc: "Description 1", img: "/Progress Work Equipment_Cardio area_BIKES (CUT LADY)_.JPG" },
  { name: "Name 2", desc: "Description 2", img: "/Progress Work Equipment_Cardio area_INCLINE TEADMILL.JPG" },
  { name: "Name 3", desc: "Description 3", img: "/Progress Work Equipment_Cardio area_MORE TREADMILLS.JPG" },
  { name: "Name 4", desc: "Description 4", img: "/Progress Work Equipment_Cardio area_ROWING ALTERNATIVE.JPG" },
  { name: "Name 5", desc: "Description 5", img: "/Progress Work Equipment_Cardio area_ROWING MACHINE.JPG" },
  { name: "Name 6", desc: "Description 6", img: "/Progress Work Equipment_Cardio area_RUNNING THINGS.JPG" },
  { name: "Name 7", desc: "Description 7", img: "/Progress Work Equipment_Cardio area_STAIR MASTERS.JPG" },
  { name: "Name 8", desc: "Description 8", img: "/Progress Work Equipment_Cardio area_STEP MACHINE.JPG" },
  { name: "Name 9", desc: "Description 9", img: "/Progress Work Equipment_Cardio area_TREADMILL.JPG" },
],
WeightRoom: [
  { name: "Name 1", desc: "Description 1", img: "/Progress Work Equipment_Weight Room_ABB UNKNOWN .JPG" },
  { name: "Name 2", desc: "Description 2", img: "/Progress Work Equipment_Weight Room_ABDOMINAL CRUNCH.JPG" },
  { name: "Name 3", desc: "Description 3", img: "/Progress Work Equipment_Weight Room_ARM CURLS.JPG" },
  { name: "Name 4", desc: "Description 4", img: "/Progress Work Equipment_Weight Room_ARM EXTENSION.JPG" },
  { name: "Name 5", desc: "Description 5", img: "/Progress Work Equipment_Weight Room_ASSIST CHIN.JPG" },
  { name: "Name 6", desc: "Description 6", img: "/Progress Work Equipment_Weight Room_BAR WEIGHTS .JPG" },
  { name: "Name 7", desc: "Description 7", img: "/Progress Work Equipment_Weight Room_BIG YOGA BALLS (CUT GUY OUT).JPG" },
  { name: "Name 8", desc: "Description 8", img: "/Progress Work Equipment_Weight Room_BOXING BAG_DUMBELLS HORIZONTAL.JPG" },
  { name: "Name 9", desc: "Description 9", img: "/Progress Work Equipment_Weight Room_BOXING BAG_DUMBELLS VERITCAL.JPG" },
  { name: "Name 10", desc: "Description 10", img: "/Progress Work Equipment_Weight Room_CALF RAISES MAYBE_.JPG" },
  { name: "Name 11", desc: "Description 11", img: "/Progress Work Equipment_Weight Room_CHEST PRESS MAYBE_.JPG" },
  { name: "Name 12", desc: "Description 12", img: "/Progress Work Equipment_Weight Room_CHEST PRESS(I THINKO(.JPG" },
  { name: "Name 13", desc: "Description 13", img: "/Progress Work Equipment_Weight Room_CHEST PRESS.JPG" },
  { name: "Name 14", desc: "Description 14", img: "/Progress Work Equipment_Weight Room_CURLING MACHINE.JPG" },
  { name: "Name 15", desc: "Description 15", img: "/Progress Work Equipment_Weight Room_DECLINE BENCH PRESS.JPG" },
  { name: "Name 16", desc: "Description 16", img: "/Progress Work Equipment_Weight Room_HIGH ROW(BACK).JPG" },
  { name: "Name 17", desc: "Description 17", img: "/Progress Work Equipment_Weight Room_INCLINE BENCH PRESS.JPG" },
  { name: "Name 18", desc: "Description 18", img: "/Progress Work Equipment_Weight Room_ISO LATERAL DECLINE PRESS.JPG" },
  { name: "Name 19", desc: "Description 19", img: "/Progress Work Equipment_Weight Room_ISO LATERAL INCLINE PRESS .JPG" },
  { name: "Name 20", desc: "Description 20", img: "/Progress Work Equipment_Weight Room_ISO LATERAL SHOULDER PRESS.JPG" },
  { name: "Name 21", desc: "Description 21", img: "/Progress Work Equipment_Weight Room_LAT PULL DOWN 2.JPG" },
  { name: "Name 22", desc: "Description 22", img: "/Progress Work Equipment_Weight Room_LAT PULL DOWN. 3.JPG" },
  { name: "Name 23", desc: "Description 23", img: "/Progress Work Equipment_Weight Room_LAT PULL DOWN.JPG" },
  { name: "Name 24", desc: "Description 24", img: "/Progress Work Equipment_Weight Room_LAT ROW (INDUVIDUAL).JPG" },
  { name: "Name 25", desc: "Description 25", img: "/Progress Work Equipment_Weight Room_LATERAL RAISE.JPG" },
  { name: "Name 26", desc: "Description 26", img: "/Progress Work Equipment_Weight Room_MEDICINE BALLS.JPG" },
  { name: "Name 27", desc: "Description 27", img: "/Progress Work Equipment_Weight Room_NAME UNKNOWN.JPG" },
  { name: "Name 28", desc: "Description 28", img: "/Progress Work Equipment_Weight Room_OVERHEAD PRESS 2.JPG" },
  { name: "Name 29", desc: "Description 29", img: "/Progress Work Equipment_Weight Room_OVERHEAD PRESS.JPG" },
  { name: "Name 30", desc: "Description 30", img: "/Progress Work Equipment_Weight Room_PULLDOWN.JPG" },
  { name: "Name 31", desc: "Description 31", img: "/Progress Work Equipment_Weight Room_PULLOVER MACHING BACK.JPG" },
  { name: "Name 32", desc: "Description 32", img: "/Progress Work Equipment_Weight Room_PULLOVER MACHING FRONT.JPG" },
  { name: "Name 33", desc: "Description 33", img: "/Progress Work Equipment_Weight Room_ROW 2.JPG" },
  { name: "Name 34", desc: "Description 34", img: "/Progress Work Equipment_Weight Room_ROWING .JPG" },
  { name: "Name 35", desc: "Description 35", img: "/Progress Work Equipment_Weight Room_STANDARD WEIGHT DIFFERENT ANGLE.JPG" },
  { name: "Name 36", desc: "Description 36", img: "/Progress Work Equipment_Weight Room_STANDARD WEIGHTS .JPG" },
  { name: "Name 37", desc: "Description 37", img: "/Progress Work Equipment_Weight Room_STANDING MULTI FLIGHT.JPG" },
  { name: "Name 38", desc: "Description 38", img: "/Progress Work Equipment_Weight Room_T BAR ROW (BACK).JPG" },
  { name: "Name 39", desc: "Description 39", img: "/Progress Work Equipment_Weight Room_WEIGHT RACK (SMALL).JPG" },
  { name: "Name 40", desc: "Description 40", img: "/Progress Work Equipment_Weight Room_WHATEVER THIS IS .JPG" },
  { name: "Name 41", desc: "Description 41", img: "/Progress Work Equipment_Weight Room_YOGA MATS_STRETCH AREA.JPG" },
],
CoreRoom: [
  { name: "Name 1", desc: "Description 1", img: "/Progress Work Equipment_Core room_ABDOMINAL (VERY DAMAGED).JPG" },
  { name: "Name 2", desc: "Description 2", img: "/Progress Work Equipment_Core room_CORE ROOM LOGO 2.JPG" },
  { name: "Name 3", desc: "Description 3", img: "/Progress Work Equipment_Core room_CORE ROOM LOGO.JPG" },
  { name: "Name 4", desc: "Description 4", img: "/Progress Work Equipment_Core room_CORE ROOM OVERVIEW.JPG" },
  { name: "Name 5", desc: "Description 5", img: "/Progress Work Equipment_Core room_FORWARD AB RAISES.JPG" },
  { name: "Name 6", desc: "Description 6", img: "/Progress Work Equipment_Core room_LEG RAISE_AB RAISES ALT.JPG" },
  { name: "Name 7", desc: "Description 7", img: "/Progress Work Equipment_Core room_LEG RAISE_AB RAISES.JPG" },
  { name: "Name 8", desc: "Description 8", img: "/Progress Work Equipment_Core room_NAME UNKNOWN.JPG" },
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
