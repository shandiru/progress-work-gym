// File: MembershipPlans.jsx
"use client";
import React, { useEffect, useRef } from "react";

const plans = [
  {
    title: "Pay As You Go",
    slug: "cash-membership",
    options: [
      { label: "1 Month", price: "£45" },
      { label: "3 Month", price: "£116" },
      { label: "6 Month", price: "£213" },
      { label: "12 Month", price: "£396" },
    ],
  },
  {
    title: "Direct Debit Membership: ",
    slug: "debit",
    options: [
      { label: "1 Month Rolling Membership", price: "£39" },
      { label: "1 Month Couples Membership", price: "£68" },
    ],
  },
  {
    title: "Special Memberships",
    slug: "special-memberships",
    options: [
      { label: "Senior Citizen", price: "£31" },
      { label: "Off Peak", price: "£33" },
    ],
  },
  {
    title: "Day Passes",
    slug: "day-passes",
    options: [
      { label: "1 Day", price: "£9" },
      { label: "7 Day", price: "£21" },
      { label: "Multi Pass", price: "£65" },
    ],
  },
];

export default function MembershipPlans() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);

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
        // initial states
        gsap.set([titleRef.current, subtitleRef.current], { autoAlpha: 0, y: 24 });
        const cards = gridRef.current
          ? Array.from(gridRef.current.querySelectorAll(":scope > div"))
          : [];
        gsap.set(cards, { autoAlpha: 0, y: 32, rotateX: 6, transformOrigin: "50% 100%" });

        // title + subtitle reveal
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
            defaults: { ease: "power3.out" },
          })
          .to(titleRef.current, { autoAlpha: 1, y: 0, duration: 0.5 })
          .to(subtitleRef.current, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.2");

        // cards stagger in
        gsap.to(cards, {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });

        // subtle parallax while scrolling
        cards.forEach((card) => {
          gsap.to(card, {
            y: -8,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        });
      }, sectionRef);
    })();

    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      className="bg-[#0d1117] text-white py-12 px-4 scroll-m-15"
      id="member"
      ref={sectionRef}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold" ref={titleRef}>
          MEMBERSHIP <span className="text-red-600">PLANS</span>
        </h2>
        <p className="text-gray-400 mt-2" ref={subtitleRef}>
          Choose the plan that fits your lifestyle
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border border-red-600 rounded-md p-6 flex flex-col justify-between bg-[#141820] will-change-transform"
          >
            <h3 className="text-xl font-semibold text-red-500 mb-4">
              {plan.title}
            </h3>
            <ul className="space-y-3 mb-4 flex-grow">
              {plan.options.map((option, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-[#1c1f26] px-4 py-2 rounded-md"
                >
                  <span>{option.label}</span>
                  <span className="text-red-500 font-semibold">{option.price}</span>
                </li>
              ))}
            </ul>
            <a
              href={`/${plan.slug}`}
              className="block text-center w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold mt-auto"
            >
              Choose Plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
