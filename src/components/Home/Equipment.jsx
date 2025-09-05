import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Equipment data by category
const equipmentData = {
  "Legs": [
    {
      name: "Leg Press Machine",
      desc: "Build quad and hamstring strength",
      img: "/PD-1.png", // Image for Leg Press Machine
    },
    {
      name: "Leg Curl Machine",
      desc: "Isolate the hamstrings for strength",
      img: "/PD-2.png", // Image for Leg Curl Machine
    },
    {
      name: "Smith Machine",
      desc: "Versatile machine for squats and presses",
      img: "/PD-3.png", // Image for Smith Machine
    },
    {
      name: "Seated Leg Press",
      desc: "Target quads, hamstrings, and glutes",
      img: "/PD-5.png", // Image for Seated Leg Press
    },
    {
      name: "Leg Extension Machine",
      desc: "Isolate and strengthen quadriceps",
      img: "/PD-6.png", // Image for Leg Extension Machine
    },
    {
      name: "Walking Lunge Machine",
      desc: "Great for building glutes and legs",
      img: "/PD-7.png", // Image for Walking Lunge Machine
    },
    {
      name: "Glute Ham Raise",
      desc: "Targets glutes and hamstrings",
      img: "/PD-8.png", // Image for Glute Ham Raise
    },
    {
      name: "Barbell Squat Rack",
      desc: "Perform squats safely with a barbell",
      img: "/PD-9.png", // Image for Barbell Squat Rack
    },
    {
      name: "Smith Machine Squats",
      desc: "Perform squats with controlled movement",
      img: "/PD-10.png", // Image for Smith Machine Squats
    },
    {
      name: "Front Squat Barbell",
      desc: "Enhance quad engagement with front squats",
      img: "/PD-11.png", // Image for Front Squat Barbell
    },
    {
      name: "Squat Platform",
      desc: "Elevated platform for squats and leg work",
      img: "/PD-12.png", // Image for Squat Platform
    },
    {
      name: "Leg Press Calf Raise",
      desc: "Focus on calf muscles with this machine",
      img: "/PD-13.png", // Image for Leg Press Calf Raise
    },
    {
      name: "Hack Squat Press",
      desc: "Hybrid machine for squats and presses",
      img: "/PD-14.png", // Image for Hack Squat Press
    },
    {
      name: "Cable Leg Extensions",
      desc: "Effective for isolating the quadriceps",
      img: "/PD-15.png", // Image for Cable Leg Extensions
    },
    {
      name: "Standing Calf Raise",
      desc: "Build calf muscles with full range of motion",
      img: "/PD-16.png", // Image for Standing Calf Raise
    },
    {
      name: "Seated Calf Raise",
      desc: "Focused on strengthening the calves",
      img: "/PD-17.png", // Image for Seated Calf Raise
    },
    {
      name: "Barbell Deadlift",
      desc: "Great for building hamstrings and glutes",
      img: "/PD-18.png", // Image for Barbell Deadlift
    },
    {
      name: "Leg Day Squat Rack",
      desc: "Dedicated rack for squats and leg training",
      img: "/PD-19.png", // Image for Leg Day Squat Rack
    },
    {
      name: "Lunge Station",
      desc: "Perfect for unilateral leg work",
      img: "/PD-20.png", // Image for Lunge Station
    },
    // {
    //   name: "Glute Kickback Machine",
    //   desc: "Isolate and grow your glutes",
    //   img: "/p21.jpg", // Image for Glute Kickback Machine
    // },
    {
      name: "Seated Hamstring Curl",
      desc: "Target the hamstrings with proper form",
      img: "/PD-22.png", // Image for Seated Hamstring Curl
    },
    {
      name: "Leg Strength Press",
      desc: "Build overall leg strength",
      img: "/PD-23.png", // Image for Leg Strength Press
    },
    {
      name: "Assisted Squat Machine",
      desc: "Squats with assisted movement for safety",
      img: "/PD-24.png", // Image for Assisted Squat Machine
    },
    {
      name: "Kettlebell Deadlifts",
      desc: "Deadlifts using kettlebells for varied engagement",
      img: "/PD-25.png", // Image for Kettlebell Deadlifts
    },
    {
      name: "Barbell Romanian Deadlift",
      desc: "Target the posterior chain with this deadlift variation",
      img: "/PD-26.png", // Image for Barbell Romanian Deadlift
    },
    {
      name: "Step-Up Machine",
      desc: "Great for working glutes and quads",
      img: "/PD-27.png", // Image for Step-Up Machine
    },
    {
      name: "Hip Thrust Machine",
      desc: "Isolate and grow glute muscles",
      img: "/PD-28.png", // Image for Hip Thrust Machine
    },
    // {
    //   name: "Smith Machine Leg Press",
    //   desc: "Press legs in the Smith machine for controlled motion",
    //   img: "/p29.jpg", // Image for Smith Machine Leg Press
    // },
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
  name: "Cybex Bravo Functional Trainer",
  desc: "Versatile cable-based functional trainer for full-body strength and conditioning exercises",
  img: "/A1.png",
}
,
  {
  name: "Pec Deck / Rear Delt Machine",
  desc: "Dual-function machine designed for chest flys and rear deltoid exercises",
  img: "/A2.png",
}
,{
  name: "Lat Pulldown / Low Row Machine",
  desc: "Combination unit for performing lat pulldowns and seated rows to target the back and lats",
  img: "/A3.png",
}
,{
  name: "Cable Crossover Machine",
  desc: "Dual adjustable pulley system for versatile cable exercises including chest flys, tricep pushdowns, and functional training",
  img: "/A4.png",
}
,{
  name: "Plate-Loaded Chest Press",
  desc: "Strength machine that mimics the motion of a bench press using weight plates for resistance",
  img: "/A5.png",
}
,
{
  name: "Plate-Loaded Shoulder Press",
  desc: "Overhead press machine using weight plates to build shoulder and tricep strength",
  img: "/A6.png",
}
,
{
  name: "Standing Calf Raise Machine",
  desc: "Weight stack machine designed to strengthen and build the calf muscles through standing raises",
  img: "/A7.png",
}
,
{
  name: "Chest Press Machine",
  desc: "Plate-loaded machine designed to simulate the motion of a bench press for building chest, shoulders, and triceps",
  img: "/A8.png",
}
,
{
  name: "Plate-Loaded Bicep Curl",
  desc: "Arm curl machine using weight plates to isolate and build bicep strength",
  img: "/A9.png",
}

  ],
    Cardio: [
   {
  name: "Treadmill",
  desc: "Boost endurance and burn calories with walking, jogging, or running workouts",
  img: "/C1.png",
},{
  name: "Stair Climber",
  desc: "High-intensity cardio machine to strengthen legs and glutes while improving endurance",
  img: "/C2.png",
},
{
  name: "Recumbent Bike",
  desc: "Low-impact cardio with full back support, perfect for endurance and rehabilitation",
  img: "/C3.png",
}
,{
  name: "StairMaster",
  desc: "Climb continuously rotating stairs to build lower body strength and cardio endurance",
  img: "/C4.png",
}
,{
  name: "Air Bike",
  desc: "Full-body cardio machine combining pedaling and arm pushing for high-intensity training",
  img: "/C5.png",
},
{
  name: "Elliptical Trainer",
  desc: "Low-impact full-body cardio workout that burns calories and protects joints",
  img: "/C6.png",
},
{
  name: "Fan Bike",
  desc: "Full-body cardio with fan resistance that scales with your effort, ideal for HIIT",
  img: "/C7.png",
},
{
  name: "Upright Bike",
  desc: "Simulates outdoor cycling to build leg strength and improve cardiovascular endurance",
  img: "/C8.png",
}
,
{
  name: "SkiErg",
  desc: "Simulates cross-country skiing for a powerful full-body cardio and strength workout",
  img: "/C9.png",
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