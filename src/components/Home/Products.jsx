import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Product data by category
const productData = {
  "Pre Workout": [
    {
      name: "Nitro Pump Pre-Workout",
      desc: "Boosts energy, focus & endurance",
      img: "/placeholder.webp",
    },
    {
      name: "Explosive Pre-Workout",
      desc: "High caffeine blend for maximum intensity",
      img: "/placeholder.webp",
    },
  ],
  "Protein Powder": [
    {
      name: "Whey Protein Isolate",
      desc: "Fast-absorbing protein for muscle growth",
      img: "/placeholder.webp",
    },
    {
      name: "Plant-Based Protein",
      desc: "Vegan-friendly blend with complete amino profile",
      img: "/placeholder.webp",
    },
  ],
  "Protein Bars": [
    {
      name: "Chocolate Crunch Bar",
      desc: "High-protein snack with low sugar",
      img: "/placeholder.webp",
    },
    {
      name: "Peanut Butter Bar",
      desc: "Delicious protein-packed fuel",
      img: "/placeholder.webp",
    },
  ],
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Pre Workout");
  const [startIndex, setStartIndex] = useState(0);

  const items = productData[activeCategory];
  const visibleItems = items.slice(startIndex, startIndex + 3);

  const categories = Object.keys(productData);

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, items.length - 3));
  };

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setStartIndex(0);
  };

  return (
    <section className="bg-black text-white py-35 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          OUR <span className="text-red-600">PRODUCTS</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Fuel your workouts with premium supplements
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1 border rounded-md ${
              activeCategory === cat
                ? "bg-red-600 text-white"
                : "border-red-600 text-white hover:bg-red-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="text-red-500 hidden md:flex text-xl cursor-pointer bg-white rounded-full p-2 hover:bg-gray-400"
        >
          <FaChevronLeft />
        </button>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-md overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover bg-gray-800"
              />
              <div className="bg-[#0d1117] p-4">
                <h4 className="font-bold text-white">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={startIndex + 3 >= items.length}
          className="text-red-500 hidden md:flex text-xl cursor-pointer bg-white rounded-full p-2 hover:bg-gray-400"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
