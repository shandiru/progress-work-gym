import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Equipment data by category
const equipmentData = {
  "Legs": [
    {
      name: "Leg Press Machine",
      desc: "Build quad and hamstring strength",
      img: "/p1.jpg", // Image for Leg Press Machine
    },
    {
      name: "Leg Curl Machine",
      desc: "Isolate the hamstrings for strength",
      img: "/p3.jpg", // Image for Leg Curl Machine
    },
    {
      name: "Smith Machine",
      desc: "Versatile machine for squats and presses",
      img: "/p4.jpg", // Image for Smith Machine
    },
    {
      name: "Seated Leg Press",
      desc: "Target quads, hamstrings, and glutes",
      img: "/p5.jpg", // Image for Seated Leg Press
    },
    {
      name: "Leg Extension Machine",
      desc: "Isolate and strengthen quadriceps",
      img: "/p6.jpg", // Image for Leg Extension Machine
    },
    {
      name: "Walking Lunge Machine",
      desc: "Great for building glutes and legs",
      img: "/p7.jpg", // Image for Walking Lunge Machine
    },
    {
      name: "Glute Ham Raise",
      desc: "Targets glutes and hamstrings",
      img: "/p8.jpg", // Image for Glute Ham Raise
    },
    {
      name: "Barbell Squat Rack",
      desc: "Perform squats safely with a barbell",
      img: "/p9.jpg", // Image for Barbell Squat Rack
    },
    {
      name: "Smith Machine Squats",
      desc: "Perform squats with controlled movement",
      img: "/p10.jpg", // Image for Smith Machine Squats
    },
    {
      name: "Front Squat Barbell",
      desc: "Enhance quad engagement with front squats",
      img: "/p11.jpg", // Image for Front Squat Barbell
    },
    {
      name: "Squat Platform",
      desc: "Elevated platform for squats and leg work",
      img: "/p12.jpg", // Image for Squat Platform
    },
    {
      name: "Leg Press Calf Raise",
      desc: "Focus on calf muscles with this machine",
      img: "/p13.jpg", // Image for Leg Press Calf Raise
    },
    {
      name: "Hack Squat Press",
      desc: "Hybrid machine for squats and presses",
      img: "/p14.jpg", // Image for Hack Squat Press
    },
    {
      name: "Cable Leg Extensions",
      desc: "Effective for isolating the quadriceps",
      img: "/p15.jpg", // Image for Cable Leg Extensions
    },
    {
      name: "Standing Calf Raise",
      desc: "Build calf muscles with full range of motion",
      img: "/p16.jpg", // Image for Standing Calf Raise
    },
    {
      name: "Seated Calf Raise",
      desc: "Focused on strengthening the calves",
      img: "/p17.jpg", // Image for Seated Calf Raise
    },
    {
      name: "Barbell Deadlift",
      desc: "Great for building hamstrings and glutes",
      img: "/p18.jpg", // Image for Barbell Deadlift
    },
    {
      name: "Leg Day Squat Rack",
      desc: "Dedicated rack for squats and leg training",
      img: "/p19.jpg", // Image for Leg Day Squat Rack
    },
    {
      name: "Lunge Station",
      desc: "Perfect for unilateral leg work",
      img: "/p20.jpg", // Image for Lunge Station
    },
    {
      name: "Glute Kickback Machine",
      desc: "Isolate and grow your glutes",
      img: "/p21.jpg", // Image for Glute Kickback Machine
    },
    {
      name: "Seated Hamstring Curl",
      desc: "Target the hamstrings with proper form",
      img: "/p22.jpg", // Image for Seated Hamstring Curl
    },
    {
      name: "Leg Strength Press",
      desc: "Build overall leg strength",
      img: "/p23.jpg", // Image for Leg Strength Press
    },
    {
      name: "Assisted Squat Machine",
      desc: "Squats with assisted movement for safety",
      img: "/p24.jpg", // Image for Assisted Squat Machine
    },
    {
      name: "Kettlebell Deadlifts",
      desc: "Deadlifts using kettlebells for varied engagement",
      img: "/p25.jpg", // Image for Kettlebell Deadlifts
    },
    {
      name: "Barbell Romanian Deadlift",
      desc: "Target the posterior chain with this deadlift variation",
      img: "/p26.jpg", // Image for Barbell Romanian Deadlift
    },
    {
      name: "Step-Up Machine",
      desc: "Great for working glutes and quads",
      img: "/p27.jpg", // Image for Step-Up Machine
    },
    {
      name: "Hip Thrust Machine",
      desc: "Isolate and grow glute muscles",
      img: "/p28.jpg", // Image for Hip Thrust Machine
    },
    {
      name: "Smith Machine Leg Press",
      desc: "Press legs in the Smith machine for controlled motion",
      img: "/p29.jpg", // Image for Smith Machine Leg Press
    },
  ],
  Back: [
  {
  name: "Seated Row",
  desc: "Build a strong back with controlled rowing movements",
  img: "/G1.png",
}
,
   {
  name: "Assisted Pull-Up / Dip",
  desc: "Strengthen your upper body with supported pull-ups and dips",
  img: "/G2.png",
}
,
   {
  name: "Functional Trainer",
  desc: "Versatile cable system for full-body strength and stability training",
  img: "/G3.png",
}
,
  {
  name: "Seated Calf Raise",
  desc: "Isolate and strengthen your calves with controlled seated raises",
  img: "/G4.png",
}
,
  {
  name: "Seated Row",
  desc: "Develop a strong back with controlled seated cable rows",
  img: "/G5.png",
}
,
  {
  name: "Lat Pulldown",
  desc: "Build a wide, strong back with controlled pulldown movements",
  img: "/G6.png",
}
,
   {
  name: "Lat Pulldown / Seated Row Combo",
  desc: "Dual-function machine for building both lats and mid-back strength",
  img: "/G7.png",
}
,
  {
  name: "Cable Crossover",
  desc: "Versatile dual-cable system for chest, arms, shoulders, and functional training",
  img: "/G8.png",
}
,
  {
  name: "Cable Row / Pulldown Combo",
  desc: "Dual-purpose machine for building both back width and thickness",
  img: "/G9.png",
}
,
   {
  name: "Plate-Loaded Lat Pulldown",
  desc: "Strengthen your lats and upper back with a plate-loaded pulldown for natural resistance",
  img: "/G10.png",
}
,
  {
  name: "Plate-Loaded Low Row",
  desc: "Build back thickness and strength with heavy plate-loaded rows",
  img: "/G11.png",
}
,
  {
  name: "Plate-Loaded Iso-Lateral Row",
  desc: "Train each side independently for balanced back strength and muscle symmetry",
  img: "/G12.png",
}
,
 {
  name: "Chest Press",
  desc: "Build chest, triceps, and shoulders with a guided pressing motion",
  img: "/G13.png",
}
,
 {
  name: "Chest Fly / Rear Delt",
  desc: "Dual-function machine to target chest with flyes and rear delts with reverse flyes",
  img: "/G14.png",
}
,
   
  ],
  Chest: [
    {
      name: "Chest Press Machine",
      desc: "Simulates bench press safely",
      img: "/placeholder.webp",
    },
    {
      name: "Pec Deck Machine",
      desc: "Isolated chest fly motion",
      img: "/placeholder.webp",
    },
  ],
  Arms: [
    {
      name: "Preacher Curl Bench",
      desc: "Isolated bicep curl training bench",
      img: "/placeholder.webp",
    },
    {
      name: "Cable Bicep Station",
      desc: "Adjustable cable system for bicep work",
      img: "/placeholder.webp",
    },
    {
      name: "Tricep Dip Machine",
      desc: "Assisted tricep dip machine",
      img: "/placeholder.webp",
    },
  ],
    Cardio: [
    {
      name: "Preacher Curl Bench",
      desc: "Isolated bicep curl training bench",
      img: "/placeholder.webp",
    }
  ],
};

export default function Equipment() {
  const [activeCategory, setActiveCategory] = useState("Legs");
  const [startIndex, setStartIndex] = useState(0);

  const items = equipmentData[activeCategory];
  const visibleItems = items.slice(startIndex, startIndex + 3);

  const categories = Object.keys(equipmentData);

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, items.length - 3)
    );
  };

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setStartIndex(0);
  };

  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          OUR <span className="text-red-600">EQUIPMENT</span>
        </h2>
        <p className="text-gray-400 mt-2">
          State-of-the-art machines for every muscle group
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
          className="text-red-500 md:flex text-xl cursor-pointer bg-white rounded-full p-2 hover:bg-gray-400"
        >
          <FaChevronLeft />
        </button>

        {/* Equipment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="border border-red-600 rounded-md overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-92 object-cover bg-gray-800"
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
          className="text-red-500 md:flex text-xl cursor-pointer bg-white rounded-full p-2 hover:bg-gray-400"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}