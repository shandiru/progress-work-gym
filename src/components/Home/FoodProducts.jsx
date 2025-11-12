"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Product data by category
const productData = {
  "Pots of gold": [
    {
      name: "Pesto Pasta with HECK! Seasoned Chicken",
      desc: "High-protein pasta bowl (33g protein, 420 kcal) made with HECK’s seasoned chicken mince, fresh pesto, pasta, colourful veg, and mozzarella – balanced, flavour-packed, and ideal for lean eating",
      img: "/heck-chicken-pestp-pasta-1024x1024.jpg",
    },
    {
      name: "Tender Chicken Tikka Masala",
      desc: "Low Cal Chicken Tikka Masala – a lighter take on the classic dish, inspired by its 1960s Glasgow origins.",
      img: "/21.1-Tikka-Masala-Bowl-1-1024x1024.jpg",
    },
    {
      name: "Creamy Peppercorn Chicken Pasta",
      desc: "Grilled chicken breast with Boccole pasta in a creamy peppercorn sauce – a Chef Special twist on our classic Pots O Gold.",
      img: "/peppercorn-Large-1024x1024.jpeg",
    },
    {
      name: "Oriental Sweet & Sour Chicken",
      desc: "Authentic Sweet & Sour Chicken, reimagined with high protein, low saturated fat, and a tangy aromatic kick..",
      img: "/1.1-Oriental-Sweet-Sour-Bowl-1024x1024.jpg",
    },
    {
      name: "Roast Chicken Dinner",
      desc: "Roast Chicken Dinner Pot O Gold – tender chicken, roast potatoes, stuffing, veg & gravy, delivering tradition with just 260 kcal and 30.8g protein..",
      img: "/roast-chicken-dinner-bowl-shot-low-1024x1024.jpg",
    },
    {
      name: "Greek Souvlaki Chicken with Rice",
      desc: "Greek-style Pot O Gold – savoury rice, roast chicken, Souvlaki sauce, Oumi cheese, onion & olives. A wholesome, time-saving meal in minutes.",
      img: "/Greek-Bowl-White-copy-1024x1024.jpeg",
    },
    {
      name: "Firecracker Chicken & Spicy Rice",
      desc: "Firecracker Chicken & Spicy Rice – crispy Panko chicken with sriracha, veg and spiced rice, a healthier twist on a takeaway classic",
      img: "/firecracker-chicken-bowl.jpg",
    },
    {
      name: "Crispy Chicken & Egg Fried Rice",
      desc: "Crispy Chicken & Egg Fried Rice – golden Panko chicken with soy-glazed rice, peppers, peas & spring onions. A healthier comfort takeaway in minutes.",
      img: "/crispy-chicken-egg-fired-rice-bowl-shot-low-copy-Medium.jpg",
    },
    {
      name: "Chipotle Roast Chicken Rice & Beans",
      desc: "Chipotle Roast Chicken Rice & Beans – tender chicken in smoky chipotle sauce with rice, beans, and vibrant veg. Tex-Mex flavour, balanced and approachable.",
      img: "/golden-butter-chicken-bowl-shot-low-1024x1024.jpg",
    },
     {
      name: "Chinese Style Beef Curry",
      desc: "Chinese-Style Beef Curry – tender rump cap beef in spiced curry sauce with rice, beans, peas & peppers. A wholesome, flavourful dish with low salt and saturated fat.",
      img: "/14.1-Beef-Curry-Bowl-1024x1024.jpg",
    },
    {
      name: " Cheeky Piri Piri & Spicy Rice",
      desc: "Piri-Piri Chicken with Spicy Rice – tender marinated chicken breast with low-GI rice, peppers & peas. A protein-rich, nutritious meal with a zingy kick.",
      img: "/9.1-Piri-Piri-Bowl.jpg",
    },
    {
      name: "Smoky Caribbean Jerk Chicken",
      desc: "Jerk-marinated chicken breast pieces, combined with a vibrant rice and peas side with tasty peas, chopped red peppers and red kidney beans.",
      img: "/10.1-Caribbean-Jerk-Bowl.jpg",
    },
     {
      name: "Fragrant Thai Green Curry",
      desc: "Tender, bite-sized chicken breast pieces coated in a fragrant Thai green curry sauce, with healthy green veg and fluffy white rice.",
      img: "/19.1-Thai-Green-Curry-Bowl.jpg",
    },
     {
      name: "Chicken Black Bean & Special Fried Rice",
      desc: "Chilli Black Bean Pot O Gold – rich, authentic oriental flavour with just 4.6g fat. A macro-friendly way to enjoy a favourite sauce guilt-free.",
      img: "/11.1-Chilli-Black-Bean-Bowl.jpg",
    },
     {
      name: "Rich & Hearty Pasta Bolognese",
      desc: "Beef & Chorizo Fusilli – lean beef and chorizo ragu with durum wheat pasta and Italian herbs. Low sugar, 40g protein, ready in 6 minutes.",
      img: "/13.1-Pasta-Bolognese-Bowl-1024x1024.jpg",
    },
      {
      name: "Stir Fry Chicken Fajita",
      desc: "Tex Mex Chicken & Spicy Rice – seasoned chicken breast with charred onions, peppers, and paprika-spiced rice with Roquito peppers. Bold flavour, wholesome fuel.",
      img: "/17.1-Chicken-Fajita-Fajita-Chicken.jpg",
    },
 {
      name: "Morning Classic English Breakfast",
      desc: "Morning Classic English Breakfast – a healthier take on the British favourite, now with an improved recipe for a tastier, more satisfying start to your day.",
      img: "/16.1-English-Breakfast-Bowl.jpg",
    },
     {
      name: "Takeaway Style Chicken Balti",
      desc: "Takeaway Style Chicken Balti – tender chicken breast with peppers, onions & tomatoes, cooked in aromatic spices like turmeric, garam masala, garlic & ginger. A healthy twist on a classic.",
      img: "/20.1-Balti-Balti.jpg",
    },
     {
      name: "Crispy Spiced Buffalo Chicken",
      desc: "Buffalo Chicken & Potatoes – crispy breadcrumb chicken with hot chilli-vinegar Buffalo sauce, potato slices, sweetcorn & peas. A healthier New York-style classic, low in salt and sugar.",
      img: "/15.1-Crispy-Buffalo-Buffalo.jpg",
    },
     {
      name: "Smooth Satay Chicken Curry",
      desc: "Chicken Satay with Basmati Rice – tender chicken in creamy peanut & coconut satay sauce with peppers, green beans and fragrant spices. An authentic, healthy Indonesian-inspired dish crafted with chef expertise.",
      img: "/8.1-Satay-Chicken-Bowl.jpg",
    },
    {
      name: "Chicken Curry with Special Fried Rice",
      desc: "Curry Chicken with Special Fried Rice – steamed chicken in a 15-spice curry sauce with char siu pork fried rice. Our highest-protein Pot O Gold at 46g protein, low in sugar and salt.",
      img: "/6.1-Chicken-Curry-Bowl.jpg",
    },
    {
      name: "Malaysian Coconut Chicken Curry",
      desc: "Coconut Chicken Curry with Rice – tender chicken in a delicately spiced coconut curry sauce with fluffy rice, turmeric and bell peppers. Packed with superfoods for flavour and all-round nutrition.",
      img: "/12.1-Malaysian-Bowl.jpg",
    },

   
  ],
  "Chicken bites": [
    {
      name: "Greek Souvlaki Chicken Bites",
      desc: "Greek-style Roast Chicken Bites – marinated, grilled, and paired with Oumi cheese, onion & olives. A protein-packed snack or easy recipe starter for healthy meals.",
      img: "/SOUVLAKI-BAG-website-1024x1024.jpg",
    },
    {
      name: "Hickory BBQ Chicken Bites",
      desc: "Texas BBQ Chicken Bites – 100% roast chicken breast coated in a smoky, tangy BBQ spice blend with hickory, tomato, garlic & paprika.",
      img: "/bbq-bag-1024x1024.jpg",
    },
     {
      name: "Salt & Pepper Chicken Bites",
      desc: "Chinese Salt & Pepper Chicken Bites – 100% roast chicken breast with chilli, spices, ginger, garlic, onion, pepper & paprika for a protein-rich flavour hit",
      img: "/salt-and-pepper-bag-1024x1024.jpg",
    },
     {
      name: "Spicy Fajita Chicken Bites",
      desc: "1kg Fajita Chicken Bites – 100% roast chicken pieces coated in sizzling fajita spice mix. Convenient, high-protein and freezer-ready for snacks or recipes.",
      img: "/fajita-bag-1024x1024.jpg",
    },
     {
      name: "Panko Breaded Chicken Bites",
      desc: "1kg Panko Chicken Bites – 100% real breadcrumbs, high-protein, low in fat, salt & sugar. Convenient, tasty and freezer-ready for snacks or recipe hacks.",
      img: "/breaded-bag-white-1024x1024.jpg",
    },
      {
      name: "Ready Cooked Chicken Breasts 2.5kg (24 Breasts)",
      desc: "Steam-Cooked Chicken Breasts – lean, high-quality, prepped for convenience. Defrost and enjoy your way: reheat, cook, or serve straight from defrosted.",
      img: "/5.0-2.5kg-Breasts-Packaging-shadow-1024x1024.jpg",
    },
  ],
  "Protein wraps": [
    {
      name: "Greek Souvlaki Chicken Wrap",
      desc: "Greek Souvlaki Chicken Wrap – roast chicken, peppers, onions & Oumi in a tortilla with Greek-style sauce. High-protein, low in salt, fat & sugar, ready in 3 minutes.",
      img: "/Greek-Wrap-Web-1024x1024.jpg",
    },
    {
      name: "Sizzling Chicken Fajita Wrap",
      desc: "Salt & Pepper Chicken Wrap – a quick, protein-rich meal for busy, active lifestyles. Healthy, flavourful, and ready whenever you need it.",
      img: "/Sizzling-Fajita-Wrap-Product-Image-1024x1024.jpg",
    },
     {
      name: "Aromatic Salt & Pepper Wrap",
      desc: "Salt & Pepper Chicken Wrap – lean, Halal chicken with superb nutrition: low salt, fat, sugar & calories, high protein, and ready in 3 minutes. Perfect for active lifestyles, any time of day..",
      img: "/salt-and-pepper-wrap-product-image-1024x1024.jpg",
    },
    {
      name: "Festive Turkey & All The Trimmings",
      desc: "Festive Turkey Protein Wrap – all the trimmings, high protein, low fat & sugar. A guilt-free Christmas classic that keeps holiday flavour alive.",
      img: "/festive-on-white-bauble-1024x1024.jpg",
    },
     {
      name: "Sticky BBQ Chicken Wrap",
      desc: "Hickory BBQ Chicken Protein Wrap – smoky, flavour-packed, high-protein and wholesome. A balanced meal that satisfies cravings and fuels your day.",
      img: "/bbq-on-white-1024x1024.jpg",
    },
    {
      name: "Tender Chicken Tikka Wrap",
      desc: "Chicken Tikka Protein Wrap – high protein, low fat & sugar. A balanced, nutritious wrap that satisfies cravings while supporting a healthy lifestyle.",
      img: "/tikka-on-white-2-1-1024x1024.jpeg",
    },
     {
      name: "English Breakfast Wrap",
      desc: "Indulge in the classic taste of an English breakfast whilst staying committed to a healthy and nutritious lifestyle.",
      img: "/breakfast-on-white-1-1024x1024.jpeg",
    },
  ],
  "Signature meals": [
    {
      name: "Slow Cooked Beef Ragu",
      desc: "Slow Cooked Beef Ragu – tender beef in rich tomato sauce with fragrant herbs. An Italian classic, slow-simmered for wholesome Mediterranean flavour.",
      img: "/meatball-ragu-flat-lay-cut-out-copy-WEB-1024x1024.jpg",
    },
    {
      name: "Hearty Lamb Hotpot",
      desc: "Hearty Lamb Hotpot – premium lamb slow-cooked in rich gravy with rosemary potatoes and kale. A warm, nourishing comfort classic.",
      img: "/hot-pot-flat-lay-cut-out-copy-WEB-1024x1024.jpg",
    },
     {
      name: "Panang Chicken Curry",
      desc: "Panang Chicken Curry – tender chicken in a rich coconut milk base with lemongrass, kaffir lime, and fragrant spices. Aromatic, nourishing, and full of flavour.",
      img: "/paneng-flat-lay-cut-out-copy-WEB-1024x1024.jpg",
    },
     {
      name: "Chicken Tikka Dhal",
      desc: "Chicken Tikka Dhal – tender marinated chicken with spiced lentils and coconut milk. A wholesome, protein- and fibre-rich dish full of aromatic flavour.",
      img: "/chicken-tikka-flat-lay-cut-out-copy-WEB-1024x1024.jpg",
    },
  ],
};





export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Pots of gold");
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3); // 👈 added responsive control

  // Refs
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const tabsRef = useRef(null);
  const gridRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  const lastIndexRef = useRef(0);
  const lastCategoryRef = useRef(activeCategory);

  // Handle responsive per-view count
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

  // Data guards
  const items = useMemo(
    () => (productData?.[activeCategory] ? productData[activeCategory] : []),
    [activeCategory]
  );
  const visibleItems = useMemo(
    () => items.slice(startIndex, startIndex + itemsPerView),
    [items, startIndex, itemsPerView]
  );
  const categories = useMemo(() => Object.keys(productData || {}), []);

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

  // Animation logic unchanged
  useEffect(() => {
    (async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default || gsapModule;
      const cards =
        gridRef.current &&
        Array.from(gridRef.current.querySelectorAll(":scope > div"));
      if (!cards || !cards.length) return;

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

      const dir = Math.sign(startIndex - lastIndexRef.current) || 1;
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
    <section
      className="bg-black text-white py-35 px-4 scroll-m-15"
      ref={sectionRef}
      id="ourfoods"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold" ref={titleRef}>
          OUR <span className="text-red-600">FOODS</span>
        </h2>
        <p className="text-gray-400 mt-2" ref={subRef}>
          Fuel your workouts with premium supplements
        </p>
      </div>

      {/* Category Tabs */}
      <div ref={tabsRef} className="flex justify-center flex-wrap gap-4 mb-10">
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
          className={`${
            startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          } text-red-500 md:flex text-xl bg-white rounded-full p-2 hover:bg-gray-400 will-change-transform`}
          aria-label="Previous"
        >
          <FaChevronLeft />
        </button>

        {/* Product Cards */}
        <div
          className={`grid ${
            itemsPerView === 1
              ? "grid-cols-1"
              : itemsPerView === 2
              ? "sm:grid-cols-2"
              : "lg:grid-cols-3"
          } gap-6 max-w-6xl w-full`}
          ref={gridRef}
        >
          {visibleItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="border border-red-600 rounded-md overflow-hidden bg-[#0d1117] will-change-transform"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-78 object-cover bg-gray-800"
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
          disabled={startIndex >= items.length - itemsPerView}
          className={`${
            startIndex >= items.length - itemsPerView
              ? "opacity-50 cursor-not-allowed"
              : ""
          } text-red-500 md:flex text-xl bg-white rounded-full p-2 hover:bg-gray-400 will-change-transform`}
          aria-label="Next"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

