import React, { useEffect, useRef } from "react";

export default function Header() {
  const textRef = useRef(null);
  const btnsRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    let ctx;
    let mounted = true;

    (async () => {
      // Dynamic import so it only runs in the browser
      const gsapModule = await import("gsap");
      const ScrollTriggerModule = await import("gsap/ScrollTrigger");

      const gsap = gsapModule.default || gsapModule; // handle default/named export
      const ScrollTrigger = ScrollTriggerModule.ScrollTrigger || ScrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      if (!mounted) return;

      // gsap.context keeps things tidy on hot reload/unmount
      ctx = gsap.context(() => {
        if (textRef.current) {
          gsap.from(textRef.current, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }

        if (btnsRef.current && btnsRef.current.children.length) {
          gsap.from(Array.from(btnsRef.current.children), {
            x: -120,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.25,
            scrollTrigger: {
              trigger: rootRef.current || btnsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      }, rootRef);
    })();

    return () => {
      mounted = false;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative w-full h-[600px] text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/back.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay (use bg-black/50 or bg-black bg-opacity-50) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Vertical Buttons */}
      <div
        ref={btnsRef}
        className="fixed left-3 top-1/2 -translate-y-1/2 z-20 space-y-48 cursor-pointer"
      >
        <a
          href="#member"
          className="-rotate-90 origin-left bg-red-600 text-white hover:bg-red-500 px-10 pt-2 font-bold text-lg text-center tracking-widest block"
        >
          SIGN UP TODAY
        </a>
        <a
          href="#contact"
          className="-rotate-90 origin-left bg-black text-white hover:bg-gray-700 px-10 pt-2 font-bold text-lg text-center tracking-widest block"
        >
          CONTACT US
        </a>
      </div>

      {/* Centered Text */}
      <div
        ref={textRef}
        className="relative z-20 flex flex-col justify-center h-full px-4 sm:px-8 md:px-16 lg:px-24 ml-12 mt-10"
      >
        <p className="text-lg font-semibold tracking-widest mb-2">
          PROGRESS WORKS GYM - GLENFIELD, LEICESTER
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          LEICESTER&apos;S <br />
          BEST <br />
          EQUIPPED <br />
          GYM<span className="text-red-600">.</span>
        </h1>
        <a
          href="#member"
          className="mt-6 max-w-40 ml-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 text-sm sm:text-base tracking-wider uppercase inline-block text-center"
        >
          Sign Up
        </a>
      </div>
    </section>
  );
}
