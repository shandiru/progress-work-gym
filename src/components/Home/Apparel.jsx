
// File: Equipment.jsx
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Uses your existing equipmentData object

// Equipment data by category
const equipmentData = {
  
 "TShirts": [
  {
    name: "Hoodie HO-1",
    desc: "Classic gym-style hoodie crafted for comfort and durability. Perfect for training sessions or casual wear, with a soft-touch finish.",
    img: "/HO-1.png",
  },
  {
    name: "Hoodie HO-2",
    desc: "Versatile hoodie designed with breathable cotton fabric. Combines a relaxed fit with premium stitching for all-day comfort.",
    img: "/HO-2.png",
  },
  {
    name: "Hoodie HO-3",
    desc: "Minimalist gym hoodie with a sleek design. Lightweight yet warm, ideal for warm-ups and cool-downs.",
    img: "/HO-3.png",
  },
  {
    name: "Hoodie HO-4",
    desc: "Everyday essential hoodie featuring the Progress Works Gym branding. Soft fleece lining ensures maximum coziness.",
    img: "/HO-4.png",
  },
  {
    name: "Hoodie HO-5",
    desc: "Casual street-style hoodie with a durable cotton-poly blend. A perfect mix of athletic and lifestyle wear.",
    img: "/HO-5.png",
  },
  {
    name: "Hoodie HO-6",
    desc: "Classic heavyweight hoodie designed to keep you warm. Features a front logo print and ribbed cuffs.",
    img: "/HO-6.png",
  },
  {
    name: "Hoodie HO-7",
    desc: "Modern slim-fit hoodie made for performance and comfort. Ideal for layering during workouts.",
    img: "/HO-7.png",
  },
  {
    name: "Hoodie HO-8",
    desc: "Stylish hoodie featuring a relaxed fit and durable construction. Great for post-gym recovery days.",
    img: "/HO-8.png",
  },
  {
    name: "Hoodie HO-9",
    desc: "Lightweight hoodie perfect for all seasons. Combines sporty looks with soft-touch fabric.",
    img: "/HO-9.png",
  }, {
    name: "T-Shirt T-1",
    desc: "Lightweight performance tee designed for comfort and breathability during intense workouts or casual wear.",
    img: "/T-1.png",
  },
  {
    name: "T-Shirt T-2",
    desc: "Classic cotton gym t-shirt featuring the Progress Works Gym logo. Soft fabric and a relaxed fit.",
    img: "/T-2.png",
  },
  {
    name: "T-Shirt T-3",
    desc: "Sleek black t-shirt with minimalist styling. Perfect for both training sessions and everyday use.",
    img: "/T-3.png",
  },
  {
    name: "T-Shirt T-4",
    desc: "Durable training t-shirt made with moisture-wicking material to keep you dry during workouts.",
    img: "/T-4.png",
  },
  {
    name: "T-Shirt T-5",
    desc: "Athletic-fit t-shirt with contrast shoulder panels, offering a sporty look and flexible movement.",
    img: "/T-5.png",
  },
  {
    name: "T-Shirt T-6",
    desc: "Two-tone training t-shirt combining breathable mesh fabric and stretch comfort for active sessions.",
    img: "/T-6.png",
  },
  {
    name: "T-Shirt T-7",
    desc: "Soft cotton tee with subtle logo detailing, designed for all-day comfort and casual layering.",
    img: "/T-7.png",
  },
  {
    name: "T-Shirt T-8",
    desc: "Light and airy gym t-shirt offering a classic fit with a modern aesthetic for everyday wear.",
    img: "/T-8.png",
  },
  {
    name: "T-Shirt RT-1",
    desc: "Premium cotton training t-shirt with a modern cut and soft finish for all-day comfort.",
    img: "/RT-1.png",
  },
  {
    name: "T-Shirt RT-2",
    desc: "Sporty short sleeve tee made with moisture-wicking fabric to keep you cool during workouts.",
    img: "/RT-2.png",
  },
  {
    name: "T-Shirt RT-3",
    desc: "Lightweight and flexible gym t-shirt designed for performance and style.",
    img: "/RT-3.png",
  }

],
"Shorts": [
  {
    name: "Gym Training Shorts",
    desc: "Lightweight and breathable shorts designed for high-performance training and everyday comfort.",
    img: "/shorts.png",
  }
]
,
"Hoodies": [
  {
    name: "Hoodie 1",
    desc: "Classic gym-style hoodie crafted for comfort and durability. Perfect for training sessions or casual wear.",
    img: "/Hoodies-1.png",
  },
  {
    name: "Hoodie 2",
    desc: "Lightweight performance hoodie with a relaxed fit, offering breathable comfort for workouts and daily wear.",
    img: "/Hoodies-2.png",
  }
]
,
"Vests": [
  {
    name: "Vest V-1",
    desc: "Lightweight training vest designed for maximum breathability and freedom of movement.",
    img: "/V-1.png",
  },
  {
    name: "Vest V-2",
    desc: "Classic sleeveless gym vest made from soft cotton, perfect for workouts and casual wear.",
    img: "/V-2.png",
  },
  {
    name: "Vest V-3",
    desc: "Performance vest with quick-dry fabric to keep you cool during intense training.",
    img: "/V-3.png",
  },
  {
    name: "Vest V-4",
    desc: "Minimalist athletic vest offering comfort and flexibility for everyday training.",
    img: "/V-4.png",
  },
  {
    name: "Vest V-5",
    desc: "Durable gym vest featuring a relaxed fit and moisture-wicking fabric for all-day wear.",
    img: "/V-5.png",
  },
  {
    name: "Vest V-6",
    desc: "Breathable mesh vest designed to keep you cool and dry during tough sessions.",
    img: "/V-6.png",
  },
  {
    name: "Vest V-7",
    desc: "Slim-fit gym vest built for comfort, flexibility, and a modern athletic style.",
    img: "/V-7.png",
  },
  {
    name: "Vest V-8",
    desc: "Stretch-fit vest offering lightweight support and unrestricted range of motion.",
    img: "/V-8.png",
  },
  {
    name: "Vest V-9",
    desc: "Comfort-focused vest made with soft-touch fabric and subtle logo detailing.",
    img: "/V-9.png",
  },
  {
    name: "Vest V-10",
    desc: "Performance-driven vest featuring sweat-wicking technology for intense training.",
    img: "/V-10.png",
  },
  {
    name: "Vest V-11",
    desc: "Sporty sleeveless vest designed for layering or wearing solo at the gym.",
    img: "/V-11.png",
  },
  {
    name: "Vest V-12",
    desc: "All-purpose gym vest with a modern cut and breathable stretch fabric.",
    img: "/V-12.png",
  }
]


 



};
export default function Equipment() {
  const [activeCategory, setActiveCategory] = useState("TShirts");
  const [startIndex, setStartIndex] = useState(0);

  // --- Refs for GSAP
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const tabsRef = useRef(null);
  const gridRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const lastIndexRef = useRef(0);
  const lastCategoryRef = useRef(activeCategory);

  const items = useMemo(() => equipmentData[activeCategory] || [], [activeCategory]);
  const visibleItems = useMemo(() => items.slice(startIndex, startIndex + 3), [items, startIndex]);
  const categories = useMemo(() => Object.keys(equipmentData || {}), []);

  // --- Scroll reveal setup
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
        // Initial states
        gsap.set([titleRef.current, subRef.current], { autoAlpha: 0, y: 24 });
        gsap.set([tabsRef.current, leftBtnRef.current, rightBtnRef.current], {
          autoAlpha: 0,
          y: 16,
        });

        // Title & subtitle
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
          .to(
            [tabsRef.current, leftBtnRef.current, rightBtnRef.current],
            { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1 },
            "-=0.1"
          );

        // Initial cards reveal (stagger)
        const cards = () =>
          gridRef.current
            ? Array.from(gridRef.current.querySelectorAll(":scope > div"))
            : [];
        gsap.set(cards(), {
          autoAlpha: 0,
          y: 28,
          rotateX: 6,
          transformOrigin: "50% 100%",
        });

        gsap.to(cards(), {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }, sectionRef);
    })();

    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, []);

  // --- Animate when paging (left/right) or switching category
  useEffect(() => {
    (async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default || gsapModule;
      const cards =
        gridRef.current &&
        Array.from(gridRef.current.querySelectorAll(":scope > div"));

      if (!cards || !cards.length) return;

      // Category change → soft fade/raise
      if (lastCategoryRef.current !== activeCategory) {
        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
            stagger: 0.08,
          }
        );
        lastCategoryRef.current = activeCategory;
        lastIndexRef.current = startIndex;
        return;
      }

      // Slide direction based on index change
      const dir = Math.sign(startIndex - lastIndexRef.current) || 1; // right = 1, left = -1
      gsap.fromTo(
        cards,
        { x: 24 * dir, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.35,
          ease: "power3.out",
          stagger: 0.06,
        }
      );
      lastIndexRef.current = startIndex;
    })();
  }, [activeCategory, startIndex, visibleItems.length]);

  // --- Micro press animation on arrows
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

  const prevSlide = async () => {
    if (startIndex === 0) return;
    await pressButton(leftBtnRef);
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextSlide = async () => {
    if (startIndex + 3 >= items.length) return;
    await pressButton(rightBtnRef);
    setStartIndex((prev) => Math.min(prev + 1, items.length - 3));
  };

  const handleCategory = async (cat) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    setStartIndex(0);
  };

  return (
    <section
      className="bg-black text-white py-12 px-4 md:px-8 lg:px-12 scroll-m-15"
      ref={sectionRef}
      id="Apparel"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold" ref={titleRef}>
          OUR <span className="text-red-600">APPAREL</span>
        </h2>
        <p className="text-gray-400 mt-2" ref={subRef}>
          State-of-the-art machines for every muscle group
        </p>
      </div>

      {/* Category Tabs */}
      <div
        ref={tabsRef}
        className="flex justify-center flex-wrap gap-4 mb-10"
      >
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

      {/* Carousel */}
      <div className="flex items-center justify-center gap-4">
        {/* Left Arrow */}
        <button
          ref={leftBtnRef}
          onClick={prevSlide}
          disabled={startIndex === 0}
          className="text-red-500 md:flex text-xl cursor-pointer bg-white rounded-full p-2 hover:bg-gray-400 disabled:opacity-40 disabled:cursor-not-allowed will-change-transform"
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>

        {/* Equipment Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl"
        >
          {visibleItems.map((item, index) => (
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
          ))}
        </div>

        {/* Right Arrow */}
        <button
          ref={rightBtnRef}
          onClick={nextSlide}
          disabled={startIndex + 3 >= items.length}
          className="text-red-500 md:flex text-xl cursor-pointer bg-white rounded-full p-2 hover:bg-gray-400 disabled:opacity-40 disabled:cursor-not-allowed will-change-transform"
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}






























