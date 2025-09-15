"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";




// Equipment data by category
const equipmentData = {
  "Legs": [
    {
      name: "Leg1",
      desc: "Build quad and hamstring strength",
      img: "/PD-1.png", // Image for Leg Press Machine
    },
    {
      name: "Leg2",
      desc: "Isolate the hamstrings for strength",
      img: "/PD-2.png", // Image for Leg Curl Machine
    },
    {
      name: "Leg3",
      desc: "Versatile machine for squats and presses",
      img: "/PD-3.png", // Image for Smith Machine
    },
    {
      name: "Leg4",
      desc: "Target quads, hamstrings, and glutes",
      img: "/PD-5.png", // Image for Seated Leg Press
    },
    {
      name: "Leg5",
      desc: "Isolate and strengthen quadriceps",
      img: "/PD-6.png", // Image for Leg Extension Machine
    },
    {
      name: "Leg6",
      desc: "Great for building glutes and legs",
      img: "/PD-7.png", // Image for Walking Lunge Machine
    },
    {
      name: "Leg7",
      desc: "Targets glutes and hamstrings",
      img: "/PD-8.png", // Image for Glute Ham Raise
    },
    {
      name: "Leg8",
      desc: "Perform squats safely with a barbell",
      img: "/PD-9.png", // Image for Barbell Squat Rack
    },
    {
      name: "Leg9",
      desc: "Perform squats with controlled movement",
      img: "/PD-10.png", // Image for Smith Machine Squats
    },
    {
      name: "Leg10",
      desc: "Enhance quad engagement with front squats",
      img: "/PD-11.png", // Image for Front Squat Barbell
    },
    {
      name: "Leg11",
      desc: "Elevated platform for squats and leg work",
      img: "/PD-12.png", // Image for Squat Platform
    },
    {
      name: "Leg12",
      desc: "Focus on calf muscles with this machine",
      img: "/PD-13.png", // Image for Leg Press Calf Raise
    },
    {
      name: "Leg13",
      desc: "Hybrid machine for squats and presses",
      img: "/PD-14.png", // Image for Hack Squat Press
    },
    {
      name: "Leg14",
      desc: "Effective for isolating the quadriceps",
      img: "/PD-15.png", // Image for Cable Leg Extensions
    },
    {
      name: "Leg15",
      desc: "Build calf muscles with full range of motion",
      img: "/PD-16.png", // Image for Standing Calf Raise
    },
    {
      name: "Leg16",
      desc: "Focused on strengthening the calves",
      img: "/PD-17.png", // Image for Seated Calf Raise
    },
    {
      name: "Leg17",
      desc: "Great for building hamstrings and glutes",
      img: "/PD-18.png", // Image for Barbell Deadlift
    },
    {
      name: "Leg18",
      desc: "Dedicated rack for squats and leg training",
      img: "/PD-19.png", // Image for Leg Day Squat Rack
    },
    {
      name: "Leg19",
      desc: "Perfect for unilateral leg work",
      img: "/PD-20.png", // Image for Lunge Station
    },
    // {
    //   name: "Glute Kickback Machine",
    //   desc: "Isolate and grow your glutes",
    //   img: "/p21.jpg", // Image for Glute Kickback Machine
    // },
    {
      name: "Leg20",
      desc: "Target the hamstrings with proper form",
      img: "/PD-22.png", // Image for Seated Hamstring Curl
    },
    {
      name: "Leg21",
      desc: "Build overall leg strength",
      img: "/PD-23.png", // Image for Leg Strength Press
    },
    {
      name: "Leg22",
      desc: "Squats with assisted movement for safety",
      img: "/PD-24.png", // Image for Assisted Squat Machine
    },
    {
      name: "Leg23",
      desc: "Deadlifts using kettlebells for varied engagement",
      img: "/PD-25.png", // Image for Kettlebell Deadlifts
    },
    {
      name: "Leg24",
      desc: "Target the posterior chain with this deadlift variation",
      img: "/PD-26.png", // Image for Barbell Romanian Deadlift
    },
    // {
    //   name: "Step-Up Machine",
    //   desc: "Great for working glutes and quads",
    //   img: "/PD-27.png", // Image for Step-Up Machine
    // },
    // {
    //   name: "Hip Thrust Machine",
    //   desc: "Isolate and grow glute muscles",
    //   img: "/PD-28.png", // Image for Hip Thrust Machine
    // },
    // {
    //   name: "Smith Machine Leg Press",
    //   desc: "Press legs in the Smith machine for controlled motion",
    //   img: "/p29.jpg", // Image for Smith Machine Leg Press
    // },
  ],
  Back: [
  {
  name: "Back1",
  desc: "Build a strong back with controlled rowing movements",
  img: "/G1.png",
}
,
   {
  name: "Back2",
  desc: "Strengthen your upper body with supported pull-ups and dips",
  img: "/G2.png",
}
,
   {
  name: "Back3",
  desc: "Versatile cable system for full-body strength and stability training",
  img: "/G3.png",
}
,
  {
  name: "Back4",
  desc: "Isolate and strengthen your calves with controlled seated raises",
  img: "/G4.png",
}
,
  {
  name: "Back5",
  desc: "Develop a strong back with controlled seated cable rows",
  img: "/G5.png",
}
,
  {
  name: "Back6",
  desc: "Build a wide, strong back with controlled pulldown movements",
  img: "/G6.png",
}
,
   {
  name: "Back7",
  desc: "Dual-function machine for building both lats and mid-back strength",
  img: "/G7.png",
}
,
  {
  name: "Back8",
  desc: "Versatile dual-cable system for chest, arms, shoulders, and functional training",
  img: "/G8.png",
}
,
  {
  name: "Back9",
  desc: "Dual-purpose machine for building both back width and thickness",
  img: "/G9.png",
}
,
   {
  name: "Back10",
  desc: "Strengthen your lats and upper back with a plate-loaded pulldown for natural resistance",
  img: "/G10.png",
}
,
  {
  name: "Back11",
  desc: "Build back thickness and strength with heavy plate-loaded rows",
  img: "/G11.png",
}
,
  {
  name: "Back12",
  desc: "Train each side independently for balanced back strength and muscle symmetry",
  img: "/G12.png",
}
,
 {
  name: "Back13",
  desc: "Build chest, triceps, and shoulders with a guided pressing motion",
  img: "/G13.png",
}
,
 {
  name: "Back14",
  desc: "Dual-function machine to target chest with flyes and rear delts with reverse flyes",
  img: "/G14.png",
}
,
   
  ],
  Chest: [
    {
  name: "Chest1",
  desc: "Simulates bench press safely",
  img: "CH-1.png",
}
,{
  name: "Chest2",
  desc: "Versatile machine for chest flys, tricep pushdowns, and functional training",
  img: "CH-2.png",
},
{
  name: "Chest3",
  desc: "Multi-angle chest fly and rear delt training with adjustable arms",
  img: "CH-3.png",
},
{
  name: "Chest4",
  desc: "Isolates chest muscles with controlled fly motion",
  img: "CH-4.png",
},
{
  name: "Chest5",
  desc: "Mimics free-weight bench press with plate-loaded resistance",
  img: "CH-5.png",
},
{
  name: "Chest6",
  desc: "Targets upper chest with incline pressing motion using plate resistance",
  img: "CH-6.png",
},
{
  name: "Chest7",
  desc: "Classic barbell bench press for chest, shoulders, and triceps",
  img: "CH-7.png",
},
{
  name: "Chest8",
  desc: "Guided barbell system for safe bench press, squats, and shoulder presses",
  img: "CH-8.png",
},
{
  name: "Chest9",
  desc: "Seated chest press with plate resistance for stability and chest isolation",
  img: "CH-9.png",
},


  ],
  Arms: [
   {
  name: "Arms1",
  desc: "Versatile cable-based functional trainer for full-body strength and conditioning exercises",
  img: "/A1.png",
}
,
  {
  name: "Arms2",
  desc: "Dual-function machine designed for chest flys and rear deltoid exercises",
  img: "/A2.png",
}
,{
  name: "Arms3",
  desc: "Combination unit for performing lat pulldowns and seated rows to target the back and lats",
  img: "/A3.png",
}
,{
  name: "Arms4",
  desc: "Dual adjustable pulley system for versatile cable exercises including chest flys, tricep pushdowns, and functional training",
  img: "/A4.png",
}
,{
  name: "Arms5",
  desc: "Strength machine that mimics the motion of a bench press using weight plates for resistance",
  img: "/A5.png",
}
,
{
  name: "Arms6",
  desc: "Overhead press machine using weight plates to build shoulder and tricep strength",
  img: "/A6.png",
}
,
{
  name: "Arms7",
  desc: "Weight stack machine designed to strengthen and build the calf muscles through standing raises",
  img: "/A7.png",
}
,
{
  name: "Arms8",
  desc: "Plate-loaded machine designed to simulate the motion of a bench press for building chest, shoulders, and triceps",
  img: "/A8.png",
}
,
{
  name: "Arms9",
  desc: "Arm curl machine using weight plates to isolate and build bicep strength",
  img: "/A9.png",
}
,
{
  name: "Arms10",
  desc: "Lower body machine designed to simulate barbell squats while providing guided movement and safety",
  img: "/A10.png",
}
,
{
  name: "Arms11",
  desc: "Weight stack machine designed for pressing movements to strengthen the chest, shoulders, and triceps",
  img: "/A13.png",
}
,{
  name: "Arms12",
  desc: "Bicep isolation machine designed for controlled preacher curls with adjustable resistance",
  img: "/A14.png",
}
,


  ],
    Cardio: [
   {
  name: "Cardio1",
  desc: "Boost endurance and burn calories with walking, jogging, or running workouts",
  img: "/C1.png",
},{
  name: "Cardio2",
  desc: "High-intensity cardio machine to strengthen legs and glutes while improving endurance",
  img: "/C2.png",
},
{
  name: "Cardio3",
  desc: "Low-impact cardio with full back support, perfect for endurance and rehabilitation",
  img: "/C3.png",
}
,{
  name: "Cardio4",
  desc: "Climb continuously rotating stairs to build lower body strength and cardio endurance",
  img: "/C4.png",
}
,{
  name: "Cardio5",
  desc: "Full-body cardio machine combining pedaling and arm pushing for high-intensity training",
  img: "/C5.png",
},
{
  name: "Cardio6",
  desc: "Low-impact full-body cardio workout that burns calories and protects joints",
  img: "/C6.png",
},
{
  name: "Cardio7",
  desc: "Full-body cardio with fan resistance that scales with your effort, ideal for HIIT",
  img: "/C7.png",
},
{
  name: "Cardio8",
  desc: "Simulates outdoor cycling to build leg strength and improve cardiovascular endurance",
  img: "/C8.png",
}
,
{
  name: "Cardio9",
  desc: "Simulates cross-country skiing for a powerful full-body cardio and strength workout",
  img: "/C9.png",
}






  ],
};

export default function Equipment() {
  const [activeCategory, setActiveCategory] = useState("Legs");
  const [startIndex, setStartIndex] = useState(0);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const gridRef = useRef(null);

  const items = useMemo(() => equipmentData[activeCategory] || [], [activeCategory]);
  const visibleItems = useMemo(() => items.slice(startIndex, startIndex + 3), [items, startIndex]);

  // 👉 Change to true later to show real content
  const showRealContent = false;

  useEffect(() => {
    let ctx;
    let mounted = true;

    (async () => {
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger =
        ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);
      if (!mounted) return;

      ctx = gsap.context(() => {
        gsap.set([titleRef.current, subRef.current], { autoAlpha: 0, y: 24 });
        gsap.set(gridRef.current, { autoAlpha: 0, y: 24 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            defaults: { ease: "power3.out" },
          })
          .to(titleRef.current, { autoAlpha: 1, y: 0, duration: 0.45 })
          .to(subRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.2")
          .to(gridRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.2");
      }, sectionRef);
    })();

    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      className="bg-black text-white py-12 px-4 md:px-8 lg:px-12 scroll-m-15"
      ref={sectionRef}
      id="ourequipment"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold" ref={titleRef}>
          OUR <span className="text-red-600">EQUIPMENT</span>
        </h2>
        <p className="text-gray-400 mt-2" ref={subRef}>
          State-of-the-art machines for every muscle group
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto"
      >
        {showRealContent ? (
          visibleItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="border border-red-600 rounded-md overflow-hidden bg-[#0d1117] will-change-transform"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-92 object-cover bg-gray-800"
              />
              <div className="p-4">
                <h4 className="font-bold text-white">{item.name}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-24">
            <h3 className="text-3xl font-bold text-white">
               Coming <span className="text-red-600">Soon</span>
            </h3>
            <p className="text-gray-400 mt-3 text-lg">
              We're preparing something amazing for you.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}







