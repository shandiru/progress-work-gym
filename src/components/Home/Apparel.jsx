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
  { id: 3, category: "Hoodie", before: "/hoodie 3a.png", after: "/hoodie 3b.png" },
  { id: 4, category: "Hoodie", before: "/hoodie 4b.png", after: "/hoodie 4a.png" },
  { id: 5, category: "Hoodie", before: "/hoodie 5a.png", after: "/hoodie5b.png" },

  // 👕 T-shirt Category
  { id: 6, category: "T-shirt", before: "/t shirt 1b.png", after: "/t shirt 1a.png" },
  { id: 7, category: "T-shirt", before: "/t shirt 2a.png", after: "/t shirt 2 a.png" },
  { id: 8, category: "T-shirt", before: "/t shirt 3b.png", after: "/t shirt 3a.png" },
  { id: 9, category: "T-shirt", before: "/t shirt 4b.png", after: "/t shirt 4a.png" },
  { id: 10, category: "T-shirt", before: "/t shirt 5a.png", after: "/t shirt 5b.png" },
  { id: 11, category: "T-shirt", before: "/t shirt 6a.png", after: "/t shirt 6b.png" },

  // 🦺 Vest Category
  { id: 12, category: "Vest", before: "/vest 1a.png", after: "/vest 1.png" },
  { id: 13, category: "Vest", before: "/vest 2a.png", after: "/vest 2.png" },
  { id: 14, category: "Vest", before: "/vest 3a.png", after: "/vest 3.png" },
  { id: 15, category: "Vest", before: "/vest 4a.png", after: "/vest 4b.png" },
  { id: 16, category: "Vest", before: "/vest 5.png", after: "/vest 5 a.png" },
  { id: 17, category: "Vest", before: "/vest 6.png", after: "/vest 6a.png" },
];

export default function BeforeAfterGallery() {
  const [activeCategory, setActiveCategory] = useState("Hoodie");
  const [startIndex, setStartIndex] = useState(0);
  const gridRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const lastIndexRef = useRef(0);
  const lastCategoryRef = useRef(activeCategory);

  // Filtered data
  const items = useMemo(
    () =>
      activeCategory === "All"
        ? beforeAfterData
        : beforeAfterData.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  // Adjust visible items by screen size
  const [itemsPerView, setItemsPerView] = useState(3);
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const visibleItems = useMemo(
    () => items.slice(startIndex, startIndex + itemsPerView),
    [items, startIndex, itemsPerView]
  );

  const prevSlide = async () => {
    if (startIndex > 0) {
      await pressButton(leftBtnRef);
      setStartIndex((prev) => prev - 1);
    }
  };

  const nextSlide = async () => {
    if (startIndex < items.length - itemsPerView) {
      await pressButton(rightBtnRef);
      setStartIndex((prev) => prev + 1);
    }
  };

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setStartIndex(0);
  };

  const pressButton = async (ref) => {
    if (!ref.current) return;
    await gsap.to(ref.current, {
      scale: 0.94,
      duration: 0.08,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  };

  // Animate transitions
  useEffect(() => {
    const cards = gridRef.current && Array.from(gridRef.current.querySelectorAll(":scope > div"));
    if (!cards?.length) return;

    if (lastCategoryRef.current !== activeCategory) {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.08 }
      );
      lastCategoryRef.current = activeCategory;
      lastIndexRef.current = startIndex;
      return;
    }

    const dir = Math.sign(startIndex - lastIndexRef.current) || 1;
    gsap.fromTo(
      cards,
      { x: 30 * dir, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.4, ease: "power3.out", stagger: 0.05 }
    );
    lastIndexRef.current = startIndex;
  }, [activeCategory, startIndex, visibleItems.length]);

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-8" id="before-after">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          OUR <span className="text-red-600">APPAREL</span>
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          State-of-the-art machines for every muscle group
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1 rounded-md text-sm sm:text-base transition-colors ${
              activeCategory === cat
                ? "bg-red-600 text-white"
                : "border border-red-600 text-white hover:bg-red-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel Controls + Grid */}
      <div className="flex items-center justify-center gap-3 sm:gap-5">
        <button
          ref={leftBtnRef}
          onClick={prevSlide}
          disabled={startIndex === 0}
          className={`${
            startIndex === 0 ? "opacity-40 cursor-not-allowed" : ""
          } text-red-500 text-lg sm:text-xl bg-white rounded-full p-2 sm:p-3 hover:bg-gray-300`}
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full"
        >
          {visibleItems.map((item) => (
            <BeforeAfterCard key={item.id} before={item.before} after={item.after} />
          ))}
        </div>

        <button
          ref={rightBtnRef}
          onClick={nextSlide}
          disabled={startIndex >= items.length - itemsPerView}
          className={`${
            startIndex >= items.length - itemsPerView ? "opacity-40 cursor-not-allowed" : ""
          } text-red-500 text-lg sm:text-xl bg-white rounded-full p-2 sm:p-3 hover:bg-gray-300`}
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
      className="relative w-full h-110 aspect-[4/3] rounded-lg overflow-hidden border border-red-600 bg-[#0d1117] shadow-lg"
    >
      <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
      <img
        ref={afterRef}
        src={after}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        ref={handleRef}
        className="absolute top-0 bottom-0 w-[3px] bg-red-600 cursor-ew-resize z-10 flex items-center justify-center"
      >
        <div className="absolute -left-3 bg-red-600 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full shadow">
          ⇆
        </div>
      </div>
    </div>
  );
}
