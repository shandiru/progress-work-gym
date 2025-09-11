// File: WhyChooseUsSection.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { GiGymBag, GiWeightLiftingUp } from "react-icons/gi";
import { FaDumbbell, FaBottleWater } from "react-icons/fa6";

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const mediaWrapRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    let ctx;
    let mounted = true;
    (async () => {
      const gsapModule = await import("gsap");
      const ST = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = ST.ScrollTrigger || ST.default;
      gsap.registerPlugin(ScrollTrigger);
      if (!mounted) return;

      ctx = gsap.context(() => {
        // Initial states
        gsap.set([badgeRef.current, headingRef.current, paraRef.current], {
          autoAlpha: 0,
          y: 24,
        });
        const featureRows = featuresRef.current
          ? Array.from(featuresRef.current.querySelectorAll(":scope > div"))
          : [];
        gsap.set(featureRows, { autoAlpha: 0, y: 20 });
        gsap.set(ctaRef.current, { autoAlpha: 0, y: 16 });
        // Media frame starts slightly rotated/raised
        gsap.set(mediaWrapRef.current, { rotate: -6, y: 24, autoAlpha: 0 });

        // Media frame reveal
        gsap.to(mediaWrapRef.current, {
          autoAlpha: 1,
          y: 0,
          rotate: -2, // match your class vibe but animated
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mediaWrapRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Subtle parallax on the media frame while scrolling
        gsap.to(mediaWrapRef.current, {
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: mediaWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        // Right column reveal sequence
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power3.out" },
        });

        tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.35 })
          .to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.1")
          .to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.2")
          .to(
            featureRows,
            { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.12 },
            "-=0.1"
          )
          .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.35 }, "-=0.05");
      }, sectionRef);
    })();

    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white px-4 sm:px-6 lg:px-12 py-20 scroll-m-15"
      id="why"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Media */}
        <div className="relative">
          <div
            ref={mediaWrapRef}
            className="relative rounded-md overflow-hidden shadow-lg w-full max-w-[500px] mx-auto border-[6px] border-white rotate-[-2deg]"
          >
            <video
              src="/back.mp4"
              className="w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-6 relative">
          <div
            ref={badgeRef}
            className="inline-block bg-[#ed1c24] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Why Choose Us
          </div>

          <h2 ref={headingRef} className="text-3xl sm:text-4xl font-bold leading-snug">
            Built for every body.
          </h2>

          <p ref={paraRef} className="text-gray-300 text-base max-w-xl">
            From first-timers to IFBB Pros, our dedicated training rooms and
            constantly updated equipment give you everything you need to succeed.
            At Progress Works, we make fitness simple.
          </p>

          <div ref={featuresRef} className="grid grid-cols-2 gap-6 mt-6">
            <div className="flex items-center gap-3">
              <GiWeightLiftingUp className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Strength</span>
            </div>
            <div className="flex items-center gap-3">
              <FaDumbbell className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Cardio</span>
            </div>
            <div className="flex items-center gap-3">
              <GiGymBag className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Equipment</span>
            </div>
            <div className="flex items-center gap-3">
              <FaBottleWater className="text-[#ed1c24] text-3xl" />
              <span className="font-semibold">Results</span>
            </div>
          </div>

          <a
            ref={ctaRef}
            href="#member"
            className="inline-block mt-6 text-white font-semibold border border-white px-6 py-3 rounded hover:bg-[#ed1c24] hover:border-[#ed1c24] transition will-change-transform"
            onMouseDown={async (e) => {
              const gsapModule = await import("gsap");
              const gsap = gsapModule.default || gsapModule;
              gsap.to(e.currentTarget, { scale: 0.97, duration: 0.08, ease: "power2.out", yoyo: true, repeat: 1 });
            }}
          >
            Join Now →
          </a>
        </div>
      </div>
    </section>
  );
}
