// File: Products.jsx
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


// Product data by category
const productData = {
  "Hoodie": [
    {
      name: "Hoodie 1a",
      desc: "High-protein pasta bowl (33g protein, 420 kcal) made with HECK’s seasoned chicken mince, fresh pesto, pasta, colourful veg, and mozzarella – balanced, flavour-packed, and ideal for lean eating",
      img: "/Hoodie 1a.png",
    },
    {
      name: "Hoodie 1b",
      desc: "Low Cal Chicken Tikka Masala – a lighter take on the classic dish, inspired by its 1960s Glasgow origins.",
      img: "/Hoodie 1b.png",
    },
    {
      name: "Hoodie 2b",
      desc: "Grilled chicken breast with Boccole pasta in a creamy peppercorn sauce – a Chef Special twist on our classic Pots O Gold.",
      img: "/Hoodie 2b.png",
    },
    {
      name: "Hoodie 2a",
      desc: "Authentic Sweet & Sour Chicken, reimagined with high protein, low saturated fat, and a tangy aromatic kick..",
      img: "/Hoodie 2a.png",
    },
    {
      name: "Hoodie 3a",
      desc: "Roast Chicken Dinner Pot O Gold – tender chicken, roast potatoes, stuffing, veg & gravy, delivering tradition with just 260 kcal and 30.8g protein..",
      img: "/Hoodie 3a.png",
    },
    {
      name: "Hoodie 3b",
      desc: "Greek-style Pot O Gold – savoury rice, roast chicken, Souvlaki sauce, Oumi cheese, onion & olives. A wholesome, time-saving meal in minutes.",
      img: "/Hoodie 3b.png",
    },
    {
      name: "Hoodie 4b",
      desc: "Firecracker Chicken & Spicy Rice – crispy Panko chicken with sriracha, veg and spiced rice, a healthier twist on a takeaway classic",
      img: "/Hoodie 4b.png",
    },
    {
      name: "Hoodie 4a",
      desc: "Crispy Chicken & Egg Fried Rice – golden Panko chicken with soy-glazed rice, peppers, peas & spring onions. A healthier comfort takeaway in minutes.",
      img: "/Hoodie 4a.png",
    },
    {
      name: "Hoodie 5a",
      desc: "Chipotle Roast Chicken Rice & Beans – tender chicken in smoky chipotle sauce with rice, beans, and vibrant veg. Tex-Mex flavour, balanced and approachable.",
      img: "/Hoodie 5a.png",
    },
    {
      name: "Hoodie 5b",
      desc: "Chinese-Style Beef Curry – tender rump cap beef in spiced curry sauce with rice, beans, peas & peppers. A wholesome, flavourful dish with low salt and saturated fat.",
      img: "/Hoodie 5b.png",
    },
    {
      name: "Hoodie 6",
      desc: "Piri-Piri Chicken with Spicy Rice – tender marinated chicken breast with low-GI rice, peppers & peas. A protein-rich, nutritious meal with a zingy kick.",
      img: "/Hoodie 6.png",
    },
  ],

  "T-shirt ": [
    {
      name: "T shirt 1a",
      desc: "Greek-style Roast Chicken Bites – marinated, grilled, and paired with Oumi cheese, onion & olives. A protein-packed snack or easy recipe starter for healthy meals.",
      img: "/t shirt 1a.png",
    },
    {
      name: "T shirt 1b",
      desc: "Texas BBQ Chicken Bites – 100% roast chicken breast coated in a smoky, tangy BBQ spice blend with hickory, tomato, garlic & paprika.",
      img: "/t shirt 1a.png",
    },
    {
      name: "T shirt 2a",
      desc: "Chinese Salt & Pepper Chicken Bites – 100% roast chicken breast with chilli, spices, ginger, garlic, onion, pepper & paprika for a protein-rich flavour hit",
      img: "/t shirt 1a.png",
    },
    {
      name: "T shirt 2 a",
      desc: "1kg Fajita Chicken Bites – 100% roast chicken pieces coated in sizzling fajita spice mix. Convenient, high-protein and freezer-ready for snacks or recipes.",
      img: "/t shirt 1a.png",
    },
    {
      name: "T shirt 3a",
      desc: "1kg Panko Chicken Bites – 100% real breadcrumbs, high-protein, low in fat, salt & sugar. Convenient, tasty and freezer-ready for snacks or recipe hacks.",
      img: "/t shirt 1a.png",
    },
    {
      name: "T shirt 3b",
      desc: "Steam-Cooked Chicken Breasts – lean, high-quality, prepped for convenience. Defrost and enjoy your way: reheat, cook, or serve straight from defrosted.",
      img: "/t shirt 1a.png",
    },
    {
      name: "T shirt 4a",
      desc: "Steam-Cooked Chicken Breasts – lean, high-quality, prepped for convenience. Defrost and enjoy your way: reheat, cook, or serve straight from defrosted.",
      img: "/t shirt 1a.png",
    },
    {
      name: "T shirt 4b",
      desc: "Steam-Cooked Chicken Breasts – lean, high-quality, prepped for convenience. Defrost and enjoy your way: reheat, cook, or serve straight from defrosted.",
      img: "/t shirt 1a.png",
    },
    {
      name: "T shirt 5b",
      desc: "Steam-Cooked Chicken Breasts – lean, high-quality, prepped for convenience. Defrost and enjoy your way: reheat, cook, or serve straight from defrosted.",
      img: "/t shirt 1a.png",
    },
    {
      name: "T shirt 6b",
      desc: "Steam-Cooked Chicken Breasts – lean, high-quality, prepped for convenience. Defrost and enjoy your way: reheat, cook, or serve straight from defrosted.",
      img: "/t shirt 1a.png",
    },
  ],
};


export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Pots of gold");
  const [startIndex, setStartIndex] = useState(0);

  // Refs for GSAP
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const tabsRef = useRef(null);
  const gridRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);

  // For direction + category change animations
  const lastIndexRef = useRef(0);
  const lastCategoryRef = useRef(activeCategory);

  // Data guards
  const items = useMemo(
    () => (productData?.[activeCategory] ? productData[activeCategory] : []),
    [activeCategory]
  );
  const visibleItems = useMemo(
    () => items.slice(startIndex, startIndex + 3),
    [items, startIndex]
  );
  const categories = useMemo(() => Object.keys(productData || {}), []);

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

  // Initial scroll reveals
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

        // Title + subtitle
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

        // Initial cards stagger
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

  // Animate when paging or switching category
  useEffect(() => {
    (async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default || gsapModule;

      const cards =
        gridRef.current &&
        Array.from(gridRef.current.querySelectorAll(":scope > div"));
      if (!cards || !cards.length) return;

      // Category changed → fade/raise with slight stagger
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

      // Paging → slide from direction
      const dir = Math.sign(startIndex - lastIndexRef.current) || 1; // right=1, left=-1
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

  // Micro press for arrows
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

  return (
    <section className="bg-black text-white py-35 px-4 scroll-m-15" ref={sectionRef} id="ourfoods">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold" ref={titleRef}>
          OUR <span className="text-red-600">APPAREL</span>
        </h2>
        <p className="text-gray-400 mt-2" ref={subRef}>
          State-of-the-art machines for every muscle group
        </p>
      </div>

      {/* Category Tabs */}
      <div ref={tabsRef} className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1 border rounded-md transition-colors ${activeCategory === cat
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
          className={`${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            } text-red-500 md:flex text-xl bg-white rounded-full p-2 hover:bg-gray-400 will-change-transform`}
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full" ref={gridRef}>
          {visibleItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="border border-red-600 rounded-md overflow-hidden bg-[#0d1117] will-change-transform"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-108 object-cover bg-gray-800"
              />
              <div className="p-4">
                <h4 className="font-bold text-white">{item.name}</h4>
                {/* <p className="text-gray-400 text-sm">{item.desc}</p> */}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          ref={rightBtnRef}
          onClick={nextSlide}
          disabled={startIndex >= items.length - 3}
          className={`${startIndex >= items.length - 3 ? "opacity-50 cursor-not-allowed" : ""
            } text-red-500 md:flex text-xl bg-white rounded-full p-2 hover:bg-gray-400 will-change-transform`}
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}


