"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaDumbbell } from "react-icons/fa";
import { GiGymBag, GiWeightLiftingUp } from "react-icons/gi";

export default function About() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);
  const circleRef = useRef(null);
  const imageRef = useRef(null);

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
        // Prepare initial states
        gsap.set(
          [badgeRef.current, headingRef.current, paraRef.current, ctaRef.current],
          { autoAlpha: 0, y: 30 }
        );
        gsap.set(circleRef.current, { autoAlpha: 0, scale: 0.6, transformOrigin: "center" });
        gsap.set(imageRef.current, { autoAlpha: 0, x: 40 });

        const featureItems = featuresRef.current
          ? Array.from(featuresRef.current.querySelectorAll(":scope > div"))
          : [];

        gsap.set(featureItems, { autoAlpha: 0, y: 20 });

        // Timeline when section enters viewport
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: "power3.out" },
        });

        tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.35 })
          .to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.1")
          .to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.2")
          .to(featureItems, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.12 }, "-=0.2")
          .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.1")
          .to(circleRef.current, { autoAlpha: 1, scale: 1, duration: 0.6 }, "-=0.2")
          .to(imageRef.current, { autoAlpha: 1, x: 0, duration: 0.6 }, "-=0.4");
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
      className="relative bg-black overflow-hidden py-16 px-4 sm:px-6 lg:px-12 scroll-m-15"
      id="about"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 relative z-10">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-block bg-[#ed1c24] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Who Are We
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="text-[24px] sm:text-[36px] lg:text-[40px] font-bold leading-tight text-white"
          >
            Fitness. Lifestyle. <span className="text-[#ed1c24]">Progress.</span>
          </h1>

          {/* Paragraph */}
          <p
            ref={paraRef}
            className="text-gray-300 text-base leading-relaxed max-w-lg"
          >
            Founded in 2016, Progress Works Gym is where anyone can train, grow,
            and feel their best. We bring the latest equipment and a holistic
            approach to fitness in Leicester.
          </p>

          {/* Features / Keywords */}
          <div
            ref={featuresRef}
            className="grid grid-cols-3 text-center divide-x divide-gray-700 border-y border-gray-700 py-6"
          >
            <div className="px-4">
              <FaDumbbell className="text-[#ed1c24] text-4xl mx-auto mb-2" />
              <p className="text-sm font-bold text-white uppercase">Progress</p>
            </div>
            <div className="px-4">
              <GiGymBag className="text-[#ed1c24] text-4xl mx-auto mb-2" />
              <p className="text-sm font-bold text-white uppercase">Lifestyle</p>
            </div>
            <div className="px-4">
              <GiWeightLiftingUp className="text-[#ed1c24] text-4xl mx-auto mb-2" />
              <p className="text-sm font-bold text-white uppercase">Strength</p>
            </div>
          </div>

          {/* CTA */}
          <a
            ref={ctaRef}
            href="/#contact"
            className="inline-block mt-6 bg-[#ed1c24] text-white text-sm font-bold uppercase px-6 py-3 rounded shadow hover:bg-red-700 transition"
          >
            Take A Tour <FaArrowRight className="inline-block ml-2" />
          </a>
        </div>

        {/* Right Image with Red Half-Circle Background */}
        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] flex items-center justify-end">
          {/* Red Half-Circle Shape */}
          <div
            ref={circleRef}
            className="absolute right-0 w-[85%] aspect-square rounded-full bg-[#ed1c24] z-0"
          ></div>

          {/* Runner Image */}
          <img
            ref={imageRef}
            src="/whoarewe.png"
            alt="Running Visual"
            className="relative z-10 w-full max-w-[650px] object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
}
