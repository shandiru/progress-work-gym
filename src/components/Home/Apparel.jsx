"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
gsap.registerPlugin(Draggable);

const categories = ["Hoodie", "T-shirt", "Vest"];

const beforeAfterData = [
  // 🧥 Hoodie Category
  { id: 1, category: "Hoodie", before: "/Hoodie 1a.png", after: "/Hoodie 1b.png" },
  { id: 2, category: "Hoodie", before: "/Hoodie 2a.png", after: "/Hoodie 2b.png" },
  { id: 3, category: "Hoodie", before: "/Hoodie 3a.png", after: "/Hoodie 3b.png" },
  { id: 4, category: "Hoodie", before: "/Hoodie 4a.png", after: "/Hoodie 4b.png" },
  { id: 5, category: "Hoodie", before: "/Hoodie 5a.png", after: "/Hoodie 5b.png" },
  { id: 6, category: "Hoodie", before: "/Hoodie 6.png", after: "/Hoodie 6.png" },

  // 👕 T-shirt Category
  { id: 7, category: "T-shirt", before: "/t shirt 1a.png", after: "/t shirt 1b.png" },
  { id: 8, category: "T-shirt", before: "/t shirt 2a.png", after: "/t shirt 2 a.png" },
  { id: 9, category: "T-shirt", before: "/t shirt 3a.png", after: "/t shirt 3b.png" },
  { id: 10, category: "T-shirt", before: "/t shirt 4a.png", after: "/t shirt 4b.png" },
  { id: 11, category: "T-shirt", before: "/t shirt 5b.png", after: "/t shirt 6b.png" },

  // 🦺 Vest Category
  { id: 12, category: "Vest", before: "/vest 1a.png", after: "/vest 1b.png" },
  { id: 13, category: "Vest", before: "/vest 2a.png", after: "/vest 2b.png" },
  { id: 14, category: "Vest", before: "/vest 3a.png", after: "/vest 3b.png" },
  { id: 15, category: "Vest", before: "/vest 4a.png", after: "/vest 4b.png" },
  { id: 16, category: "Vest", before: "/vest 5a.png", after: "/vest 5b.png" },
  { id: 17, category: "Vest", before: "/vest 6a.png", after: "/vest 6.png" },
];


export default function BeforeAfterGallery() {
 const [activeCategory, setActiveCategory] = useState("Hoodie");
  const [startIndex, setStartIndex] = useState(0);
  const gridRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const sectionRef = useRef(null);
  const lastIndexRef = useRef(0);
  const lastCategoryRef = useRef(activeCategory);

  // Filtered data for category
  const items = useMemo(
    () =>
      activeCategory === "All"
        ? beforeAfterData
        : beforeAfterData.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const visibleItems = useMemo(() => items.slice(startIndex, startIndex + 3), [items, startIndex]);

  const prevSlide = async () => {
    if (startIndex > 0) {
      await pressButton(leftBtnRef);
      setStartIndex((prev) => prev - 1);
    }
  };

  const nextSlide = async () => {
    if (startIndex < items.length - 3) {
      await pressButton(rightBtnRef);
      setStartIndex((prev) => prev + 1);
    }
  };

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setStartIndex(0);
  };

  const pressButton = async (ref) => {
    const gsapModule = await import("gsap");
    const gsap = gsapModule.default || gsapModule;
    if (!ref.current) return;
    await gsap.to(ref.current, {
      scale: 0.94,
      duration: 0.08,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  };

  // Animate grid when changing slides or category
  useEffect(() => {
    const gsapModule = gsap;
    const cards = gridRef.current && Array.from(gridRef.current.querySelectorAll(":scope > div"));
    if (!cards || !cards.length) return;

    // Category changed → fade
    if (lastCategoryRef.current !== activeCategory) {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.08,
        }
      );
      lastCategoryRef.current = activeCategory;
      lastIndexRef.current = startIndex;
      return;
    }

    // Slide transition
    const dir = Math.sign(startIndex - lastIndexRef.current) || 1;
    gsap.fromTo(
      cards,
      { x: 30 * dir, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out", stagger: 0.05 }
    );
    lastIndexRef.current = startIndex;
  }, [activeCategory, startIndex, visibleItems.length]);

  return (
    <section className="bg-black text-white py-20 px-4" ref={sectionRef} id="before-after">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          BEFORE & <span className="text-red-600">AFTER RESULTS</span>
        </h2>
        <p className="text-gray-400 mt-2">Real transformations you can see</p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1 border rounded-md transition-colors ${
              activeCategory === cat
                ? "bg-red-600 text-white"
                : "border-red-600 text-white hover:bg-red-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel Navigation */}
      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          ref={leftBtnRef}
          onClick={prevSlide}
          disabled={startIndex === 0}
          className={`${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          } text-red-500 text-xl bg-white rounded-full p-2 hover:bg-gray-300 will-change-transform`}
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
        >
          {visibleItems.map((item) => (
            <BeforeAfterCard key={item.id} before={item.before} after={item.after} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          ref={rightBtnRef}
          onClick={nextSlide}
          disabled={startIndex >= items.length - 3}
          className={`${
            startIndex >= items.length - 3 ? "opacity-50 cursor-not-allowed" : ""
          } text-red-500 text-xl bg-white rounded-full p-2 hover:bg-gray-300 will-change-transform`}
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

function BeforeAfterCard({ before, after }) {
  const containerRef = useRef(null);
  const afterRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const afterImg = afterRef.current;
    const handle = handleRef.current;

    const width = container.offsetWidth;
    gsap.set(handle, { x: width / 2 });
    gsap.set(afterImg, { clipPath: `inset(0 50% 0 0)` });

    Draggable.create(handle, {
      type: "x",
      bounds: container,
      onDrag: function () {
        const percent = (this.x / width) * 100;
        gsap.set(afterImg, { clipPath: `inset(0 ${100 - percent}% 0 0)` });
      },
    });

    const onResize = () => {
      const w = container.offsetWidth;
      gsap.set(handle, { x: w / 2 });
      gsap.set(afterImg, { clipPath: `inset(0 50% 0 0)` });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="ba-card relative w-full h-110 aspect-[4/3] rounded-lg overflow-hidden border border-red-600 bg-[#0d1117] shadow-lg"
    >
      {/* Before */}
      <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
      {/* After */}
      <img
        ref={afterRef}
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Handle */}
      <div
        ref={handleRef}
        className="absolute top-0 bottom-0 w-[3px] bg-red-600 cursor-ew-resize z-10 flex items-center justify-center"
      >
        <div className="absolute -left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow">
          ⇆
        </div>
      </div>
    </div>
  );
}
