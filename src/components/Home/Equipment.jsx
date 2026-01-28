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
  { name: "Name 1", desc: "Description 1", img: "/ProgressWorkEquipment_Cardioarea_BIKESCUTLADY_.JPG" },
  { name: "Name 2", desc: "Description 2", img: "/ProgressWorkEquipment_Cardioarea_INCLINETEADMILL.JPG" },
  { name: "Name 3", desc: "Description 3", img: "/ProgressWorkEquipment_Cardioarea_MORETREADMILLS.JPG" },
  { name: "Name 4", desc: "Description 4", img: "/ProgressWorkEquipment_Cardioarea_ROWINGALTERNATIVE.JPG" },
  { name: "Name 5", desc: "Description 5", img: "/ProgressWorkEquipment_Cardioarea_ROWINGMACHINE.JPG" },
  { name: "Name 6", desc: "Description 6", img: "/ProgressWorkEquipment_Cardioarea_RUNNINGTHINGS.JPG" },
  { name: "Name 7", desc: "Description 7", img: "/ProgressWorkEquipment_Cardioarea_STAIRMASTERS.JPG" },
  { name: "Name 8", desc: "Description 8", img: "/ProgressWorkEquipment_Cardioarea_STEPMACHINE.JPG" },
  { name: "Name 9", desc: "Description 9", img: "/ProgressWorkEquipment_Cardioarea_TREADMILL.JPG" },
   { name: "Name 10", desc: "Description 10", img: "/ProgressWorkEquipment_Cardioarea_STEPMACHINENEWANGLE.JPG" },
],
WeightRoom: [
  { name: "Cybex Glute & Hamstring", desc: "Cybex, Glute and Hamstring Machine, Multi Purpose ", img: "/ProgressWorkEquipment_WeightRoom_ABBUNKNOWN.JPG" },
  { name: "Panatta Ab Crunch Machine", desc: "Panatta, Ab Crunch, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_ABDOMINALCRUNCH.JPG" },
  { name: "Cybex Arm Curl", desc: "Cybex, Bicep Curl, Max Load - 92.3kg (Pin Loaded)", img: "/ProgressWorkEquipment_WeightRoom_ARMCURLS.JPG" },
  { name: "Cybex Arm Extension ", desc: "Cybex, Tricep Extension, Max Load - 92.3kg (Pin Loaded)", img: "/ProgressWorkEquipment_WeightRoom_ARMEXTENSION.JPG" },
  { name: "Life Fitness Assisted Dip / Assisted Chin", desc: "Life Fitness, Max Load - 85kg (Pin Loaded)", img: "/ProgressWorkEquipment_WeightRoom_ASSISTCHIN.JPG" },
  { name: "Jordan Barbells ", desc: "Jordan, Barbell, Weight Range - 10kg - 45kg (5kg increments)", img: "/ProgressWorkEquipment_WeightRoom_BARWEIGHTS.JPG" },
  { name: "Name 7", desc: "Description 7", img: "/ProgressWorkEquipment_WeightRoom_BIGYOGABALLSCUTGUYOUT.JPG" },
  { name: "Name 8", desc: "Description 8", img: "/ProgressWorkEquipment_WeightRoom_BOXINGBAG_DUMBELLSHORIZONTAL.JPG" },
  { name: "Viking Press", desc: "Viking Press, Standing, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_BOXINGBAG_DUMBELLSVERITCAL.JPG" },
  { name: "Cybex Incline Chest Press", desc: "Cybex, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_CALFRAISESMAYBE_.JPG" },
  { name: "Hammer Strength Incline Press", desc: "Hammer Strength, Incline Press, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_CHESTPRESS.JPG" },
  { name: "Nautilus Chest Press", desc: "Nautilus, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_CHESTPRESSITHINKO.JPG" },
  { name: "Panatta Curling Machine", desc: "Panatta, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_CHESTPRESSMAYBE_.JPG" },
  { name: "Cybex Decline Bench Press", desc: "Cybex, Barbell Bench Press, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_CURLINGMACHINE.JPG" },
  { name: "Cybex Bench Press", desc: "Cybex, Barbell Bench Press, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_DECLINEBENCHPRESS.JPG" },
  { name: "Cybex Fly / Rear Delt", desc: "Cybex, Max Load - 137.3kg (Pin Loaded)", img: "/ProgressWorkEquipment_WeightRoom_FLATBENCH.JPG" },
  { name: "Cybex Smith Machine", desc: "Cybex, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_FLY_REARDELT.JPG" },
  { name: "Panatta High Row", desc: "Panatta, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_GUIDEDBENCH.JPG" },
  { name: "Cybex Incline Bench Press", desc: "Cybex, Barbell Bench Press, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_HIGHROWBACK.JPG" },
  { name: "Hammer Strength ISO-Lateral Decline Press", desc: "Hammer Strength, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_INCLINEBENCHPRESS.JPG" },
//  { name: "Name 21", desc: "Description 21", img: "/ProgressWorkEquipment_WeightRoom_ISOLATERALDECLINEPRESS.JPG" },
  { name: "Hammer Strength ISO Lateral Shoulder Press", desc: "Hammer Strength, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_ISOLATERALINCLINEPRESS.JPG" },
  { name: "Cybex Lateral Raise", desc: "Cybex, Max Load - 92.3kg (Pin Loaded)", img: "/ProgressWorkEquipment_WeightRoom_ISOLATERALSHOULDERPRESS.JPG" },
  { name: "Nautilus Impact Lat Pull Down", desc: "Nautilus, Max Load - 130kg (Pin Loaded)", img: "/ProgressWorkEquipment_WeightRoom_LATERALRAISE.JPG" },
  { name: "Name 25", desc: "Description 25", img: "/ProgressWorkEquipment_WeightRoom_LATPULLDOWN.3.JPG" },
  { name: "Name 26", desc: "Description 26", img: "/ProgressWorkEquipment_WeightRoom_LATPULLDOWN.JPG" },
  { name: "Hammer Strength ISO Lateral Row", desc: "Hammer Strength, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_LATPULLDOWN2.JPG" },
  { name: "Name 28", desc: "Description 28", img: "/ProgressWorkEquipment_WeightRoom_LATROWINDUVIDUAL.JPG" },
  { name: "Gymleco T-Bar Row", desc: "Gymleco, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_MEDICINEBALLS.JPG" },
  { name: "Cybex Overhead Press", desc: "Cybex, Max Load - 92.3kg (Pin Loaded)", img: "/ProgressWorkEquipment_WeightRoom_NAMEUNKNOWN.JPG" },
  { name: "Cybex Plate Loaded Overhead Press ", desc: "Cybex, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_OVERHEADPRESS.JPG" },
  { name: "Cybex Pull Down", desc: "Cybex, Max Load - 137.3kg (Pin Loaded)", img: "/ProgressWorkEquipment_WeightRoom_OVERHEADPRESS2.JPG" },
  { name: "Panatta Pull Over Machine", desc: "Panatta, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_PULLDOWN.JPG" },
//  { name: "Name 34", desc: "Description 34", img: "/ProgressWorkEquipment_WeightRoom_PULLOVERMACHINGBACK.JPG" },
  { name: "Cybex Eagle Row", desc: "Cybex, Max Load - 128.3kg (Pin Loaded)", img: "/ProgressWorkEquipment_WeightRoom_PULLOVERMACHINGFRONT.JPG" },
  { name: "Name 36", desc: "Description 36", img: "/ProgressWorkEquipment_WeightRoom_ROW2.JPG" },
  { name: "Dumbell Rack", desc: "Jordan, Weight Range - 2.5kg - 62.5kg (2.5kg increments) + Set of 72.5kg ", img: "/ProgressWorkEquipment_WeightRoom_ROWING.JPG" },
  { name: "Name 38", desc: "Description 38", img: "/ProgressWorkEquipment_WeightRoom_STANDARDWEIGHTDIFFERENTANGLE.JPG" },
  { name: "Dumbell Rack Different angle ", desc: "Jordan, Weight Range - 2.5kg - 62.5kg (2.5kg increments) + Set of 72.5kg ", img: "/ProgressWorkEquipment_WeightRoom_STANDARDWEIGHTS.JPG" },
  { name: "Panatta Standing Multi Flight", desc: "Panatta, Max Weight Load - 120kg (Pin Loaded)", img: "/ProgressWorkEquipment_WeightRoom_STANDINGMULTIFLIGHT.JPG" },
  { name: "Panatta T-Bar Row", desc: "Panatta, Plate Loaded", img: "/ProgressWorkEquipment_WeightRoom_TBARROWBACK.JPG" },
  { name: "Jordan Dumbells (Silver)", desc: "Jordan, Dumbells, Weight Range - 1kg - 10kg", img: "/ProgressWorkEquipment_WeightRoom_WEIGHTRACKSMALL.JPG" },
  { name: "Watson Dumbell Assist", desc: "Watson, Dumbell Assist", img: "/ProgressWorkEquipment_WeightRoom_WHATEVERTHISIS.JPG" },
  { name: "Uttam Matts", desc: "Uttam, Matted Area", img: "/ProgressWorkEquipment_WeightRoom_YOGAMATS_STRETCHAREA.JPG" },
],
CoreRoom: [
  { name: "Cybex Abdominal Crunch", desc: "Cybex, Max Load - 137.3kg (Pin Loaded)", img: "/ProgressWorkEquipment_Coreroom_ABDOMINALVERYDAMAGED.JPG" },
  { name: "Name 2", desc: "Description 2", img: "/ProgressWorkEquipment_Coreroom_COREROOMLOGO.JPG" },
  { name: "Name 3", desc: "Description 3", img: "/ProgressWorkEquipment_Coreroom_COREROOMLOGO2.JPG" },
  { name: "Name 4", desc: "Description 4", img: "/ProgressWorkEquipment_Coreroom_COREROOMOVERVIEW.JPG" },
  { name: "Cybex 45 Degree Back Hypertension ", desc: "Cybex, Lower Back and Glute Machine", img: "/ProgressWorkEquipment_Coreroom_FORWARDABRAISES.JPG" },
  { name: "Cybex, Chin, Dip, Leg Raise Station", desc: "Cybex, Multi Purpose Machine", img: "/ProgressWorkEquipment_Coreroom_LEGRAISE_ABRAISES.JPG" },
  
  { name: "Cybex Adjustable Abdominal Bench", desc: "Cybex, Abdominal Bench Machine", img: "/ProgressWorkEquipment_Coreroom_NAMEUNKNOWN.JPG" },
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
