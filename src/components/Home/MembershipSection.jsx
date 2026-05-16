"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";

const plans = [
  {
    title: "Pay As You Go",
    slug: "cash-membership",
    options: [
   
      { label: "1 Month", price: "£46" },
      { label: "3 Month", price: "£119" },
      { label: "6 Month", price: "£219" },
      { label: "12 Month", price: "£408" },
    ],
  },
  {
    title: "Direct Debit Membership",
    slug: "plans-pricing",
    options: [
      { label: "1 Month Rolling Membership", price: "£39" },
      { label: "1 Month Couples Membership", price: "£68" },
    ],
  },
  {
    title: "Special Memberships",
    slug: "special-memberships",
    options: [
      { label: "Senior Citizen", price: "£32" },
      { label: "Off Peak", price: "£34" },
    ],
  },
  {
    title: "Day Passes",
    slug: "day-passes",
    options: [
      { label: "1 Day", price: "£9" },
      { label: "7 Day", price: "£22" },
      { label: "Multi Pass", price: "£65" },
    ],
  },
  {
    title: "Partner Memberships",
    slug: "partner-memmbership",
    options: [
      { label: "1 Month", price: "£82" },
      { label: "3 Month", price: "£219" },
      { label: "6 Month", price: "£408" },
      { label: "12 Month", price: "£747" },
    ],
  },
];

function getVisibleCount() {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export default function MembershipPlans() {
  const sectionRef  = useRef(null);
  const titleRef    = useRef(null);
  const subtitleRef = useRef(null);
  const trackRef    = useRef(null);

  const [visibleCount, setVisibleCount] = useState(4);
  // Start at index = visibleCount (after cloned prefix)
  const [currentIndex, setCurrentIndex] = useState(4);
  const [transition, setTransition]     = useState(true);

  const total = plans.length; // 5

  // Build infinite list: [...last N clones, ...original, ...first N clones]
  // N = visibleCount (max 4). We'll clone all 5 on both ends to be safe.
  const cloneCount = total;
  // Actually: prefix = last `cloneCount` items, suffix = first `cloneCount` items
  const prefixClones = plans.slice(-cloneCount);
  const suffixClones = plans.slice(0, cloneCount);
  const items        = [...prefixClones, ...plans, ...suffixClones];
  // Real cards start at index = cloneCount
  const realStart = cloneCount;

  /* ── Resize ── */
  useEffect(() => {
    const update = () => {
      const count = getVisibleCount();
      setVisibleCount(count);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // When visibleCount changes, reset to first real card without animation
  useEffect(() => {
    setTransition(false);
    setCurrentIndex(realStart);
  }, [visibleCount, realStart]);

  /* ── Navigate ── */
  const slideTo = useCallback((index) => {
    setTransition(true);
    setCurrentIndex(index);
  }, []);

  const prev = () => slideTo(currentIndex - 1);
  const next = () => slideTo(currentIndex + 1);

  /* ── After transition ends — silent jump for loop ── */
  const handleTransitionEnd = useCallback(() => {
    const lastReal = realStart + total - 1;

    // Jumped into suffix clones → teleport back to real start
    if (currentIndex > lastReal) {
      setTransition(false);
      setCurrentIndex(realStart + (currentIndex - lastReal - 1));
    }
    // Jumped into prefix clones → teleport to real end
    else if (currentIndex < realStart) {
      setTransition(false);
      setCurrentIndex(lastReal - (realStart - currentIndex - 1));
    }
  }, [currentIndex, realStart, total]);

  /* ── Re-enable transition after silent jump ── */
  useEffect(() => {
    if (!transition) {
      const t = setTimeout(() => setTransition(true), 50);
      return () => clearTimeout(t);
    }
  }, [transition]);

  /* ── Active dot (maps currentIndex → 0..total-1) ── */
  const activeDot = ((currentIndex - realStart) % total + total) % total;

  /* ── GSAP title ── */
  useEffect(() => {
    let ctx;
    let mounted = true;
    (async () => {
      const gsapModule          = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap          = gsapModule.default || gsapModule;
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);
      if (!mounted) return;
      ctx = gsap.context(() => {
        gsap.set([titleRef.current, subtitleRef.current], { autoAlpha: 0, y: 24 });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            defaults: { ease: "power3.out" },
          })
          .to(titleRef.current,    { autoAlpha: 1, y: 0, duration: 0.5 })
          .to(subtitleRef.current, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.2");
      }, sectionRef);
    })();
    return () => { mounted = false; ctx?.revert(); };
  }, []);

  const cardPct    = 100 / visibleCount;
  const translateX = -(currentIndex * cardPct);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0d1117] text-white py-16 px-4 scroll-m-15 pb-10 md:pb-30"
      id="member"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold">
          MEMBERSHIP <span className="text-red-600">PLANS</span>
        </h2>
        <p ref={subtitleRef} className="text-gray-400 mt-2">
          Choose the plan that fits your lifestyle
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto">

        {/* LEFT ARROW — always enabled (loop) */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            -translate-x-3 sm:-translate-x-5
            w-9 h-9 sm:w-10 sm:h-10 rounded-full border
            border-red-600 bg-[#141820] text-red-500
            hover:bg-red-600 hover:text-white
            shadow-lg shadow-red-600/20
            flex items-center justify-center
            transition-all duration-200 select-none cursor-pointer
          "
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* RIGHT ARROW — always enabled (loop) */}
        <button
          onClick={next}
          aria-label="Next"
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            translate-x-3 sm:translate-x-5
            w-9 h-9 sm:w-10 sm:h-10 rounded-full border
            border-red-600 bg-[#141820] text-red-500
            hover:bg-red-600 hover:text-white
            shadow-lg shadow-red-600/20
            flex items-center justify-center
            transition-all duration-200 select-none cursor-pointer
          "
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Overflow clip */}
        <div className="overflow-hidden">
          {/* Track */}
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: `translateX(${translateX}%)`,
              transition: transition
                ? "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {items.map((plan, index) => (
              <div
                key={index}
                style={{ minWidth: `${cardPct}%` }}
                className="px-2 sm:px-3"
              >
                <div className="border border-red-600 rounded-md p-5 flex flex-col bg-[#141820] h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-red-600/10 transition-all duration-300">
                  <h3 className="text-base sm:text-lg font-semibold text-red-500 mb-4 leading-tight">
                    {plan.title}
                  </h3>

                  <ul className="space-y-2 mb-4 flex-grow">
                    {plan.options.map((option, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between items-center bg-[#1c1f26] px-3 py-2 rounded-md"
                      >
                        <span className="text-sm text-gray-300">{option.label}</span>
                        <span className="text-red-500 font-semibold text-sm">{option.price}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/${plan.slug}`}
                    className="block text-center w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold text-sm mt-auto transition-colors duration-200"
                  >
                    Choose Plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {plans.map((_, i) => (
            <button
              key={i}
              onClick={() => slideTo(realStart + i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeDot === i
                  ? "w-6 bg-red-600"
                  : "w-2 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
