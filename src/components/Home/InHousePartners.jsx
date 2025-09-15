// File: InHousePartners.jsx
"use client";
import React, { useEffect, useRef } from "react";

const PARTNERS = [
  { name: "Fine Line", handle: "@finelines_tattoo_pmuleicester", photo: "/jodie1.png", logo: "/fineline.png" },
  { name: "Top Teir Pysio - Keith", handle: "@toptierphysio", photo: "/h-p-2.jpg", logo: "/top.jpg" },
  { name: "Milenium Fit", handle: "@millenniumfit1", photo: "/h-p-3.jpg", logo: "/fit.png" },
  { name: "Urban Martial Arts", handle: "@umaleicester", photo: "/h-p-4.png", logo: "/art.jpg" },
];

export default function InHousePartners() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

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
        gsap.set([eyebrowRef.current, headingRef.current], { autoAlpha: 0, y: 24 });
        const cards = gridRef.current
          ? Array.from(gridRef.current.querySelectorAll(":scope > article"))
          : [];
        gsap.set(cards, { autoAlpha: 0, y: 28, rotateX: 6, transformOrigin: "50% 100%" });

        // Eyebrow + Heading reveal
        gsap.timeline({
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none reverse" },
          defaults: { ease: "power3.out" },
        })
          .to(eyebrowRef.current, { autoAlpha: 1, y: 0, duration: 0.4 })
          .to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.2");

        // Cards stagger in
        gsap.to(cards, {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        });

        // Parallax on each top image while scrolling
        cards.forEach((card) => {
          const img = card.querySelector("div > img"); // top image inside aspect box
          if (!img) return;
          gsap.fromTo(
            img,
            { y: -6 },
            {
              y: 6,
              ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 0.5 },
            }
          );
        });

        // Hover micro-interaction (lift)
        cards.forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, { y: -6, boxShadow: "0 12px 24px rgba(239,68,68,0.25)", duration: 0.18, ease: "power2.out" });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { y: 0, boxShadow: "0 0px 0px rgba(0,0,0,0)", duration: 0.2, ease: "power2.out" });
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
    <section className="w-full bg-black text-white px-4 py-16 scroll-m-15" ref={sectionRef} id="ourpartners">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p ref={eyebrowRef} className="text-red-600 tracking-widest font-semibold">
          OUR PARTNERS
        </p>
        <h2 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
          In-House Partners
        </h2>
      </div>

      {/* Partner Cards */}
      <div
        ref={gridRef}
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {PARTNERS.map((p, i) => (
          <article
            key={i}
            className="rounded-xl border border-red-600 bg-black overflow-hidden shadow-lg hover:shadow-red-600/50 transition-all duration-300 will-change-transform"
          >
            {/* Top image */}
            <div className="w-full aspect-[4/5] overflow-hidden">
              <img src={p.photo} alt={p.name} className="w-full h-full object-cover" />
            </div>

            {/* Logo strip */}
            <div className="bg-black flex items-center justify-center h-24 mt-3">
              <img src={p.logo} alt={`${p.name} logo`} className="max-h-20 max-w-[80%] object-contain" />
            </div>

            {/* Text */}
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-white">{p.name}</h3>
              <a
                href={`https://www.instagram.com/${p.handle.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-600 mt-2 hover:underline block"
              >
                {p.handle}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
