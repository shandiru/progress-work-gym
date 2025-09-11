// File: SpecialOffers.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function SpecialOffers() {
  const [open, setOpen] = useState(false);

  const offers = [
    {
      title: "Gym Membership",
      note:
        "Surprise someone you love with the perfect gift — a voucher for any of our flexible pay-as-you-go memberships.",
    },
    {
      title: "10% Blue Light Discount",
      note:
        "We’re proud to support our Blue Light community — our way of saying thank you for all that you do.",
    },
  ];

  // Refs for GSAP
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const cardRef = useRef(null);
  const bodyWrapRef = useRef(null); // collapsible container

  // Scroll reveal animations
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
        gsap.set([headingRef.current, subRef.current], {
          autoAlpha: 0,
          y: 24,
        });
        gsap.set(cardRef.current, { autoAlpha: 0, y: 28 });

        // title/subtitle
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            defaults: { ease: "power3.out" },
          })
          .to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.45 })
          .to(subRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.2");

        // card
        gsap.to(cardRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
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

  // Accordion open/close animation (height: auto)
  useEffect(() => {
    (async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default || gsapModule;
      const el = bodyWrapRef.current;
      if (!el) return;

      if (open) {
        // measure content by setting height auto then reading it
        gsap.set(el, { display: "block" });
        gsap.fromTo(
          el,
          { height: 0, autoAlpha: 0 },
          {
            height: "auto",
            autoAlpha: 1,
            duration: 0.35,
            ease: "power2.out",
            clearProps: "height", // keep it stretchable after animation
          }
        );
      } else {
        gsap.to(el, {
          height: 0,
          autoAlpha: 0,
          duration: 0.28,
          ease: "power2.inOut",
          onComplete: () => {
            // keep in DOM for smoother re-open
            gsap.set(el, { display: "none" });
          },
        });
      }
    })();
  }, [open]);

  return (
    <section className="bg-black text-white px-4 py-10 scroll-m-15" ref={sectionRef} id="specialoffer">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-extrabold mb-2" ref={headingRef}>
            Special Offers
          </h1>
          <p className="text-red-500 text-base" ref={subRef}>
            Discover amazing deals and exclusive benefits
          </p>
        </header>

        {/* Card */}
        <div
          ref={cardRef}
          className="w-full rounded-xl border border-red-500 bg-red-600/10 shadow-md will-change-transform"
        >
          {/* Card header */}
          <div className="flex items-start justify-between gap-4 p-5">
            <div>
              <h2 className="text-xl font-semibold">Current Offers</h2>
              <p className="text-red-400 text-sm">Click to view all available deals</p>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 h-8 px-3 rounded-md border border-red-500 text-white hover:bg-red-600 transition"
              aria-expanded={open}
              aria-controls="offers-body"
            >
              View Offers
              <FiChevronDown
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-red-500/40 mx-5" />

          {/* Collapsible body (always in DOM for height animation) */}
          <div
            id="offers-body"
            ref={bodyWrapRef}
            className="px-5 pb-5 overflow-hidden"
            style={{ display: "none", height: 0 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {offers.map((o, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-red-500 bg-red-600/20 p-3 shadow-sm"
                >
                  <div className="font-semibold text-white">{o.title}</div>
                  <div className="text-red-200 text-sm mt-1">{o.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
