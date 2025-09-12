// File: Contact.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { HiLocationMarker } from "react-icons/hi";

export default function Contact() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const cardRef = useRef(null);
  const addrRef = useRef(null);
  const btnsRef = useRef(null);

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
        // Heading
        const title = headRef.current?.querySelector("h2");
        const subtitle = headRef.current?.querySelector("p");
        gsap.set([title, subtitle], { autoAlpha: 0, y: 24 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            defaults: { ease: "power3.out" },
          })
          .to(title, { autoAlpha: 1, y: 0, duration: 0.45 })
          .to(subtitle, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.2");

        // Map card reveal
        gsap.set(cardRef.current, { autoAlpha: 0, y: 40, scale: 0.95, rotateX: 6 });
        gsap.to(cardRef.current, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Address and buttons stagger
        gsap.set([addrRef.current, btnsRef.current], { autoAlpha: 0, y: 20 });
        gsap.to([addrRef.current, btnsRef.current], {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 75%",
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

  return (
    <section ref={sectionRef} className="bg-[#0d1117] text-white py-16 px-4 scroll-m-15" id="contact">
      {/* Header */}
      <div ref={headRef} className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          GET IN <span className="text-red-600">TOUCH</span>
        </h2>
        <p className="text-gray-400 mt-2">Ready to start your fitness journey?</p>
      </div>

      {/* Map Card */}
      <div
        ref={cardRef}
        className="max-w-4xl mx-auto border border-red-600 rounded-md overflow-hidden shadow-lg bg-[#161b22]"
      >
        <div className="text-center p-4 border-b border-red-600">
          <h3 className="text-xl font-semibold text-white">Our Location</h3>
          <p className="text-gray-400 text-sm">Explore our gym location with 360° Street View</p>
        </div>

        {/* Google Street View Embed */}
        <div className="aspect-w-16 aspect-h-9 w-full">
          <iframe
            title="Google Street View"
            className="w-full h-96"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9681.889077652451!2d-1.2026835309661887!3d52.651446780978894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48775e32b9178d8d%3A0x3011cd51fd68c792!2s132%20Station%20Rd%2C%20Glenfield%2C%20Leicester%20LE3%208BR%2C%20UK!5e0!3m2!1sen!2slk!4v1757669375245!5m2!1sen!2slk"
            allowFullScreen
          ></iframe>
        </div>

        {/* Address and Buttons */}
        <div className="p-6 text-center space-y-4">
          <p ref={addrRef} className="flex items-center justify-center font-semibold gap-2">
            <HiLocationMarker className="w-6 h-6 text-red-500" />
            132 Station Rd, Glenfield, Leicester LE3 8BR
          </p>
          <div ref={btnsRef} className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://goo.gl/maps/Dpr8svJDd4m2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm font-medium will-change-transform"
              onMouseDown={async (e) => {
                const gsapModule = await import("gsap");
                const gsap = gsapModule.default || gsapModule;
                gsap.to(e.currentTarget, { scale: 0.95, duration: 0.08, ease: "power2.out", yoyo: true, repeat: 1 });
              }}
            >
              Open in Google Maps
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=132+Station+Rd,+Glenfield,+Leicester+LE3+8BR"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-5 py-2 rounded-md text-sm font-medium will-change-transform"
              onMouseDown={async (e) => {
                const gsapModule = await import("gsap");
                const gsap = gsapModule.default || gsapModule;
                gsap.to(e.currentTarget, { scale: 0.95, duration: 0.08, ease: "power2.out", yoyo: true, repeat: 1 });
              }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
