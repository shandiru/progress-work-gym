"use client";
import React, { useState, useEffect } from "react";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/#about",
    dropdown: [
      { label: "Who Are We", href: "/#about" },
      { label: "Trainers", href: "/#trainers" },
      { label: "Our Partners", href: "/#ourpartners" },
    ],
  },
  {
    label: "Programs",
    href: "/#programs",
    dropdown: [
      { label: "Special Offer", href: "/#specialoffer" },
      { label: "Our Equipment", href: "/#ourequipment" },
      { label: "Champion Athletes", href: "/#ChampionAthletes" },
    ],
  },
  {
    label: "Membership",
    href: "/#member",
    dropdown: [
      { label: "Plans", href: "/#member" },
      { label: "Why Choose Us", href: "/#why" },
    ],
  },
  {
    label: "Products",
    href: "/#ourproducts",
    dropdown: [
      { label: "Our Products", href: "/#ourproducts" },
      { label: "Our Foods", href: "/#ourfoods" },
    ],
  },
  { label: "Reviews", href: "/#review" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (label, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-[#06091A] text-white shadow-lg fixed w-full top-0 left-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* ✅ Logo */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo.avif"
            alt="Progress Works Gym"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* ✅ Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 font-semibold text-sm tracking-wide">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative flex items-center gap-1 group">
              <HashLink
                smooth
                to={link.href}
                className="transition-all text-white/90 hover:text-red-500"
                onClick={closeAllMenus}
              >
                {link.label}
              </HashLink>

              {link.dropdown && (
                <button
                  onClick={(e) => toggleDropdown(link.label, e)}
                  className="ml-1 text-white/80 hover:text-red-500 transition"
                >
                  {activeDropdown === link.label ? (
                    <FiChevronUp className="w-4 h-4" />
                  ) : (
                    <FiChevronDown className="w-4 h-4" />
                  )}
                </button>
              )}

              {/* ✅ Dropdown */}
              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-[2.5rem] left-0 w-52 bg-[#0B0F1F] border border-gray-700 rounded-lg shadow-xl overflow-hidden">
                  {link.dropdown.map((item, index) => (
                    <HashLink
                      key={index}
                      smooth
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-red-600/20 transition"
                      onClick={closeAllMenus}
                    >
                      {item.label}
                    </HashLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ✅ Instagram Icon */}
        <a
          href="https://www.instagram.com/progress_works_gym"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black hover:bg-red-500 hover:text-white transition"
        >
          <FaInstagram className="text-lg" />
        </a>

        {/* ✅ Mobile Hamburger */}
        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setActiveDropdown(null);
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#06091A] border-t border-gray-700">
          <nav className="flex flex-col gap-4 py-6 px-6 text-base">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="flex flex-col">
                <div className="flex justify-between items-center">
                  <HashLink
                    smooth
                    to={link.href}
                    className="text-lg font-medium hover:text-red-500 transition"
                    onClick={closeAllMenus}
                  >
                    {link.label}
                  </HashLink>
                  {link.dropdown && (
                    <button
                      onClick={(e) => toggleDropdown(link.label, e)}
                      className="text-white hover:text-red-500"
                    >
                      {activeDropdown === link.label ? (
                        <FiChevronUp className="w-5 h-5" />
                      ) : (
                        <FiChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </div>

                {link.dropdown && activeDropdown === link.label && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 border-l border-gray-700 pl-4">
                    {link.dropdown.map((item) => (
                      <HashLink
                        key={item.label}
                        smooth
                        to={item.href}
                        className="block text-base font-medium text-gray-300 hover:text-red-500 transition"
                        onClick={closeAllMenus}
                      >
                        {item.label}
                      </HashLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Instagram (Mobile) */}
            <a
              href="https://www.instagram.com/progress_works_gym"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-red-500 transition mt-4"
              onClick={closeAllMenus}
            >
              <FaInstagram /> Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
