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
WeightRoom: [
  { name: "Abdominal Machine", desc: "Targeted core isolation and abdominal strengthening", img: "/Progress Work Equipment_Weight Room_ABB UNKNOWN .JPG" },
  { name: "Abdominal Crunch", desc: "Seated crunch machine for upper and lower abs", img: "/Progress Work Equipment_Weight Room_ABDOMINAL CRUNCH.JPG" },
  { name: "Bicep Curl Machine", desc: "Isolated arm curls for bicep development", img: "/Progress Work Equipment_Weight Room_ARM CURLS.JPG" },
  { name: "Tricep Extension", desc: "Overhead or seated extension for arm definition", img: "/Progress Work Equipment_Weight Room_ARM EXTENSION.JPG" },
  { name: "Assisted Chin-Up", desc: "Counter-balanced pull-up and dip station", img: "/Progress Work Equipment_Weight Room_ASSIST CHIN.JPG" },
  { name: "Barbell Weights", desc: "Olympic bars and plates for compound lifting", img: "/Progress Work Equipment_Weight Room_BAR WEIGHTS .JPG" },
  { name: "Stability Balls", desc: "Yoga balls for core stability and balance work", img: "/Progress Work Equipment_Weight Room_BIG YOGA BALLS (CUT GUY OUT).JPG" },
  { name: "Horizontal Dumbbell Rack", desc: "Full range of dumbbells with boxing area access", img: "/Progress Work Equipment_Weight Room_BOXING BAG_DUMBELLS HORIZONTAL.JPG" },
  { name: "Vertical Dumbbell Rack", desc: "Space-saving dumbbell storage and heavy bag station", img: "/Progress Work Equipment_Weight Room_BOXING BAG_DUMBELLS VERITCAL.JPG" },
  { name: "Calf Raise", desc: "Isolated lower leg training for calf muscle growth", img: "/Progress Work Equipment_Weight Room_CALF RAISES MAYBE_.JPG" },
  { name: "Chest Press (Plate Loaded)", desc: "Heavy-duty chest press for pectoral strength", img: "/Progress Work Equipment_Weight Room_CHEST PRESS MAYBE_.JPG" },
  { name: "Incline Chest Press", desc: "Targeted upper chest isolation machine", img: "/Progress Work Equipment_Weight Room_CHEST PRESS(I THINKO(.JPG" },
  { name: "Standard Chest Press", desc: "Selectorized machine for general chest development", img: "/Progress Work Equipment_Weight Room_CHEST PRESS.JPG" },
  { name: "Preacher Curl Machine", desc: "Fixed-angle arm curl for maximum bicep peak", img: "/Progress Work Equipment_Weight Room_CURLING MACHINE.JPG" },
  { name: "Decline Bench Press", desc: "Bench for targeting the lower pectoral muscles", img: "/Progress Work Equipment_Weight Room_DECLINE BENCH PRESS.JPG" },
  { name: "Flat Utility Bench", desc: "Versatile bench for dumbbell and barbell exercises", img: "/Progress Work Equipment_Weight Room_FLAT BENCH.JPG" },
  { name: "Pec Fly / Rear Delt", desc: "Dual function machine for chest and back shoulders", img: "/Progress Work Equipment_Weight Room_FLY_REAR DELT.JPG" },
  { name: "Guided Bench (Smith Machine)", desc: "Fixed-track barbell for safe heavy lifting", img: "/Progress Work Equipment_Weight Room_GUIDED BENCH.JPG" },
  { name: "High Row", desc: "Vertical pulling machine for Lat and Upper Back strength", img: "/Progress Work Equipment_Weight Room_HIGH ROW(BACK).JPG" },
  { name: "Incline Bench Press", desc: "Adjustable bench for upper body compound movements", img: "/Progress Work Equipment_Weight Room_INCLINE BENCH PRESS.JPG" },
  { name: "Iso-Lateral Decline Press", desc: "Plate-loaded lower chest isolation", img: "/Progress Work Equipment_Weight Room_ISO LATERAL DECLINE PRESS.JPG" },
  { name: "Iso-Lateral Incline Press", desc: "Independent arm movement for upper pec development", img: "/Progress Work Equipment_Weight Room_ISO LATERAL INCLINE PRESS .JPG" },
  { name: "Iso-Lateral Shoulder Press", desc: "Overhead press for deltoid strength and stability", img: "/Progress Work Equipment_Weight Room_ISO LATERAL SHOULDER PRESS.JPG" },
  { name: "Lat Pull Down (Station 2)", desc: "Wide grip cable pull for back width", img: "/Progress Work Equipment_Weight Room_LAT PULL DOWN 2.JPG" },
  { name: "Lat Pull Down (Station 3)", desc: "High-volume back training station", img: "/Progress Work Equipment_Weight Room_LAT PULL DOWN. 3.JPG" },
  { name: "Standard Lat Pull Down", desc: "Primary vertical pulling machine for back growth", img: "/Progress Work Equipment_Weight Room_LAT PULL DOWN.JPG" },
  { name: "Individual Lat Row", desc: "Unilateral rowing for back thickness and symmetry", img: "/Progress Work Equipment_Weight Room_LAT ROW (INDUVIDUAL).JPG" },
  { name: "Lateral Raise Machine", desc: "Isolated movement for side deltoid definition", img: "/Progress Work Equipment_Weight Room_LATERAL RAISE.JPG" },
  { name: "Medicine Ball Station", desc: "Weighted balls for explosive power and core work", img: "/Progress Work Equipment_Weight Room_MEDICINE BALLS.JPG" },
  { name: "Multi-Gym Station", desc: "Versatile weight station for various exercises", img: "/Progress Work Equipment_Weight Room_NAME UNKNOWN.JPG" },
  { name: "Overhead Press (Variation)", desc: "Seated shoulder press for military-style training", img: "/Progress Work Equipment_Weight Room_OVERHEAD PRESS 2.JPG" },
  { name: "Standard Overhead Press", desc: "Classic shoulder strength builder", img: "/Progress Work Equipment_Weight Room_OVERHEAD PRESS.JPG" },
  { name: "Pulldown Machine", desc: "Mechanical pulldown for targeted lat isolation", img: "/Progress Work Equipment_Weight Room_PULLDOWN.JPG" },
  { name: "Pullover Machine (Rear View)", desc: "Back angle of the classic lat pullover", img: "/Progress Work Equipment_Weight Room_PULLOVER MACHING BACK.JPG" },
  { name: "Pullover Machine (Front View)", desc: "Full-body pullover for serratus and back development", img: "/Progress Work Equipment_Weight Room_PULLOVER MACHING FRONT.JPG" },
  { name: "Seated Row (Station 2)", desc: "Horizontal cable row for mid-back thickness", img: "/Progress Work Equipment_Weight Room_ROW 2.JPG" },
  { name: "Standard Rowing Machine", desc: "Seated cable row for overall back development", img: "/Progress Work Equipment_Weight Room_ROWING .JPG" },
  { name: "Standard Weight Plates", desc: "Olympic plates for bench and squat racks", img: "/Progress Work Equipment_Weight Room_STANDARD WEIGHT DIFFERENT ANGLE.JPG" },
  { name: "Weight Plate Storage", desc: "Organized storage for various weight increments", img: "/Progress Work Equipment_Weight Room_STANDARD WEIGHTS .JPG" },
  { name: "Standing Multi-Flight", desc: "Cable station for chest flies and lateral raises", img: "/Progress Work Equipment_Weight Room_STANDING MULTI FLIGHT.JPG" },
  { name: "T-Bar Row", desc: "Heavy-duty back row machine for power", img: "/Progress Work Equipment_Weight Room_T BAR ROW (BACK).JPG" },
  { name: "Compact Weight Rack", desc: "Small-footprint storage for dumbbells or plates", img: "/Progress Work Equipment_Weight Room_WEIGHT RACK (SMALL).JPG" },
  { name: "Functional Training Station", desc: "Specialized equipment for functional fitness", img: "/Progress Work Equipment_Weight Room_WHATEVER THIS IS .JPG" },
  { name: "Yoga & Stretch Area", desc: "Dedicated space with mats for flexibility and cooldown", img: "/Progress Work Equipment_Weight Room_YOGA MATS_STRETCH AREA.JPG" },
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
