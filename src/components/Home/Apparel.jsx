"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

gsap.registerPlugin(Draggable);

const categories = ["Hoodie", "T-shirt", "Vest"];

const beforeAfterData = [
  { id: 1, category: "Hoodie", before: "/Hoodie 1a.webp", after: "/Hoodie 1b.webp" },
  { id: 2, category: "Hoodie", before: "/Hoodie 2a.webp", after: "/Hoodie 2b.webp" },
  { id: 3, category: "Hoodie", before: "/hoodie 3a.webp", after: "/hoodie 3b.webp" },
  { id: 4, category: "Hoodie", before: "/hoodie 4b.webp", after: "/hoodie 4a.webp" },
  { id: 5, category: "Hoodie", before: "/hoodie 5a.webp", after: "/hoodie5b.webp" },
  { id: 6, category: "T-shirt", before: "/t shirt 1b.webp", after: "/t shirt 1a.webp" },
  { id: 7, category: "T-shirt", before: "/t shirt 2a.webp", after: "/t shirt 2 a.webp" },
  { id: 8, category: "T-shirt", before: "/t shirt 3b.webp", after: "/t shirt 3a.webp" },
  { id: 9, category: "T-shirt", before: "/t shirt 4b.webp", after: "/t shirt 4a.webp" },
  { id: 10, category: "T-shirt", before: "/t shirt 5a.webp", after: "/t shirt 5b.webp" },
  { id: 11, category: "T-shirt", before: "/t shirt 6a.webp", after: "/t shirt 6b.webp" },
  { id: 12, category: "Vest", before: "/vest 1a.webp", after: "/vest 1.webp" },
  { id: 13, category: "Vest", before: "/vest 2a.webp", after: "/vest 2.webp" },
  { id: 14, category: "Vest", before: "/vest 3a.webp", after: "/vest 3.webp" },
  { id: 15, category: "Vest", before: "/vest 4a.webp", after: "/vest 4b.webp" },
  { id: 16, category: "Vest", before: "/vest 5.webp", after: "/vest 5 a.webp" },
  { id: 17, category: "Vest", before: "/vest 6.webp", after: "/vest 6a.webp" },
];

export default function BeforeAfterGallery() {
  const [activeCategory, setActiveCategory] = useState("Hoodie");
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const gridRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const lastIndexRef = useRef(0);
  const lastCategoryRef = useRef(activeCategory);

  const items = useMemo(
    () =>
      activeCategory === "All"
        ? beforeAfterData
        : beforeAfterData.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

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
    <section className="bg-black px-4 py-16 text-white sm:px-8" id="before-after">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          OUR <span className="text-red-600">APPAREL</span>
        </h2>
        <p className="mt-2 text-sm text-gray-400 md:text-base">
          Premium pieces designed for training days, recovery days, and everything between
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm transition-all duration-300 sm:text-base ${
              activeCategory === cat
                ? "bg-linear-to-r from-red-600 to-red-500 text-white shadow-[0_16px_35px_rgba(220,38,38,0.35)]"
                : "border border-white/10 bg-white/[0.04] text-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.28)] hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 sm:gap-5">
        <button
          ref={leftBtnRef}
          onClick={prevSlide}
          disabled={startIndex === 0}
          className={`${
            startIndex === 0 ? "cursor-not-allowed opacity-40" : ""
          } rounded-full border border-white/12 bg-white/[0.06] p-2.5 text-lg text-white shadow-[0_18px_40px_rgba(0,0,0,0.32)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.12] sm:p-3 sm:text-xl`}
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>

        <div
          ref={gridRef}
          className="grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
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
            startIndex >= items.length - itemsPerView ? "cursor-not-allowed opacity-40" : ""
          } rounded-full border border-white/12 bg-white/[0.06] p-2.5 text-lg text-white shadow-[0_18px_40px_rgba(0,0,0,0.32)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.12] sm:p-3 sm:text-xl`}
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

    if (!container || !afterImg || !handle) return;

    const setSliderPosition = (width) => {
      gsap.set(handle, { x: width / 2 });
      gsap.set(afterImg, { clipPath: "inset(0 50% 0 0)" });
    };

    setSliderPosition(container.offsetWidth);

    const [draggable] = Draggable.create(handle, {
      type: "x",
      bounds: container,
      onDrag: function () {
        const percent = (this.x / container.offsetWidth) * 100;
        gsap.set(afterImg, { clipPath: `inset(0 ${100 - percent}% 0 0)` });
      },
    });

    const onResize = () => {
      setSliderPosition(container.offsetWidth);
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      draggable?.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative w-full overflow-hidden rounded-[26px] border border-white/10 bg-linear-to-b from-white/10 via-white/[0.04] to-white/[0.02] p-[1px] shadow-[0_24px_60px_rgba(0,0,0,0.42)] transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_30px_70px_rgba(0,0,0,0.52)]"
    >
      <div className="relative h-110 aspect-[4/3] overflow-hidden rounded-[25px] bg-[#0d1117]">
        <img src={before} alt="Before" className="absolute inset-0 h-full w-full object-cover" />
        <img
          ref={afterRef}
          src={after}
          alt="After"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-white/10" />

        <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm sm:text-xs">
          Before
        </div>
        <div className="pointer-events-none absolute right-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm sm:text-xs">
          After
        </div>

        <div
          ref={handleRef}
          className="absolute top-0 bottom-0 z-10 flex w-[2px] cursor-ew-resize items-center justify-center bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.35)]"
        >
          <div className="absolute -left-[23px] flex h-11 w-12 items-center justify-center rounded-full border border-white/20 bg-black/65 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_28px_rgba(0,0,0,0.35)] backdrop-blur-md sm:h-12 sm:w-[54px]">
            Drag
          </div>
        </div>
      </div>
    </div>
  );
}
