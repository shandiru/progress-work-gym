"use client";
import React, { useEffect, useRef } from "react";

const partners = [
  { name: "Hussle", image: "hussle.png", link: "https://www.hussle.com/gyms-in-leicester/progress-works-gym-gym-details" },
  { name: "Gympass", image: "/wellhub.png", link: "https://wellhub.com/en-us/" },
  { name: "Cybex", image: "/cybex.avif", link: null },
  { name: "Life Fitness", image: "/LifeFitness.png", link: null },
  { name: "Panatta", image: "/panatta-copy.png", link: null },
];

export default function Partners() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const logosRef = useRef(null);

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
        gsap.set(titleRef.current, { autoAlpha: 0, y: 20 });
        gsap.set(dividerRef.current, { autoAlpha: 0, scaleY: 0, transformOrigin: "top" });

        const logos = logosRef.current
          ? Array.from(logosRef.current.querySelectorAll(":scope > a, :scope > div"))
          : [];
        gsap.set(logos, { autoAlpha: 0, y: 24, rotateX: 6, transformOrigin: "50% 100%" });

        // Title + divider reveal
        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            defaults: { ease: "power3.out" },
          })
          .to(titleRef.current, { autoAlpha: 1, y: 0, duration: 0.5 })
          .to(dividerRef.current, { autoAlpha: 1, scaleY: 1, duration: 0.45 }, "-=0.2");

        // Logos stagger in
        gsap.to(logos, {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: logosRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Parallax
        logos.forEach((logo) => {
          gsap.to(logo, {
            y: -8,
            ease: "none",
            scrollTrigger: {
              trigger: logo,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
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

  const baseLogoClass =
    "w-36 h-36 flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300 will-change-transform";

  return (
    <section className="bg-[#050616] py-12 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Title with divider */}
        <div className="flex items-center gap-4">
          <h2 ref={titleRef} className="text-white text-5xl font-semibold">
            Partners
          </h2>
          <div
            ref={dividerRef}
            className="h-20 mt-2 ml-10 border-l border-white"
          ></div>
        </div>

        {/* ✅ Fixed Layout — now wraps until 1280px */}
        <div
          ref={logosRef}
          className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-6 mt-6"
        >
          {partners.map((partner, index) =>
            partner.link ? (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className={baseLogoClass}
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="object-contain max-w-[90%] max-h-[90%]"
                />
              </a>
            ) : (
              <div key={index} className={baseLogoClass}>
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="object-contain max-w-[90%] max-h-[90%]"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
