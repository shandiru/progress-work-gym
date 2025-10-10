"use client";
import { useEffect, useRef } from "react";
import { FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);
  const colsRef = useRef([]);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(colsRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.from(bottomBarRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.8,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-gray-400 py-14 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Brand */}
        <div ref={(el) => (colsRef.current[0] = el)}>
          <img
            src="/logo.avif"
            alt="Progress Works Gym Logo"
            width={60}
            height={60}
            className="object-contain mb-4"
          />
          <h1 className="text-2xl md:text-xl lg:text-2xl font-bold text-white">
            Progress Works Gym
            <span className="text-sm font-normal text-gray-500 block mt-1">
              GYM & STUDIO
            </span>
          </h1>
          <p className="text-sm mt-4 max-w-sm leading-relaxed">
            Building <span className="text-white font-semibold">strength</span>,{" "}
            <span className="text-white font-semibold">discipline</span>, and{" "}
            <span className="text-white font-semibold">community</span>. Join our
            family and start your fitness journey today.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div ref={(el) => (colsRef.current[1] = el)}>
          <h4 className="text-white text-lg font-semibold mb-5 relative inline-block">
            Quick Links
            <span className="absolute left-0 -bottom-1 h-[2px] w-10 bg-red-600"></span>
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/" className="hover:text-red-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#trainers" className="hover:text-red-500 transition-colors">
                Personal Trainers
              </a>
            </li>
            <li>
              <a
                href="#ChampionAthletes"
                className="hover:text-red-500 transition-colors"
              >
                Champion Athletes
              </a>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-red-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-red-500">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div ref={(el) => (colsRef.current[2] = el)}>
          <h4 className="text-white text-lg font-semibold mb-5 relative inline-block">
            Contact
            <span className="absolute left-0 -bottom-1 h-[2px] w-10 bg-red-600"></span>
          </h4>
          <p className="text-sm mb-3 flex items-start gap-2">
            <FaMapMarkerAlt className="mt-0.5 text-red-500 w-4 h-4 flex-shrink-0" />
            <a
              href="https://www.google.com/maps/@52.6531416,-1.2010203,3a,90y,10.17h/data=!3m8!1e1!3m6!1sCIABIhAGbzaqChiQ-2fzxD4ADMG2!2e10!3e12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              132 Station Rd, Glenfield, Leicester LE3 8BR
            </a>
          </p>
          <p className="text-sm mb-3 flex items-center gap-2">
            <FaPhoneAlt className="text-red-500 w-4 h-4" />
            <a
              href="tel:01162877667"
              className="hover:text-red-500 transition-colors"
            >
              0116 287 7667
            </a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaInstagram className="text-red-500 w-4 h-4" />
            <a
              href="https://www.instagram.com/progress_works_gym/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              @progress_works_gym
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        ref={bottomBarRef}
        className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500"
      >
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Progress Works Gym</span>.
          All rights reserved.
        </p>
        <p className="mt-2">
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 font-semibold hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
}
