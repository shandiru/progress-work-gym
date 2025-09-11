"use client";
import React, { useState } from "react";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

// Navigation links for the site
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Who Are We", href: "#about" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#member" },
  { label: "Special Offer", href: "#specialoffer" },
  { label: "Our Equipment", href: "#ourequipment" },
  { label: "Product", hasDropdown: true },
  { label: "Our Partners", href: "#ourpartners" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Review", href: "#review" },
  { label: "Champion Athletes", href: "#ChampionAthletes" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for the dropdown

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-[#06091A] text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.avif"
            alt="Progress Works Gym"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative">
              <a
                href={link.href}
                className="text-xs font-medium hover:text-red-500 transition"
                onClick={link.hasDropdown ? toggleDropdown : undefined} // Only toggle dropdown for 'Product'
              >
                {link.label}
              </a>

              {/* Dropdown for Product */}
              {link.hasDropdown && dropdownOpen && (
                <div className="absolute top-full text-sm left-0 w-35 bg-[#06091A] text-white border-t border-gray-700 mt-2">
                  <a
                    href="#ourproducts"
                    className="block px-4 py-2 font-medium hover:text-red-500 transition"
                  >
                    Our Products
                  </a>
                  <a
                    href="#ourfoods"
                    className="block px-4 py-2 font-medium hover:text-red-500 transition"
                  >
                    Our Foods
                  </a>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Instagram Icon (Desktop) */}
        <a
          href="https://www.instagram.com/progress_works_gym"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-black hover:bg-red-500 hover:text-white transition"
        >
          <FaInstagram className="text-lg" />
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#06091A] border-t border-gray-700">
          <nav className="flex flex-col items-center gap-6 py-6">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative">
                <a
                  href={link.href}
                  className="text-lg font-medium hover:text-red-500 transition"
                  onClick={link.hasDropdown ? toggleDropdown : undefined}
                >
                  {link.label}
                </a>

                {/* Dropdown for Product in mobile */}
                {link.hasDropdown && dropdownOpen && (
                  <div className="absolute top-full left-0 w-full bg-[#06091A] text-white border-t border-gray-700 mt-2">
                    <a
                      href="#ourproducts"
                      className="block px-4 py-2 text-lg font-medium hover:text-red-500 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Our Products
                    </a>
                    <a
                      href="#ourfoods"
                      className="block px-4 py-2 text-lg font-medium hover:text-red-500 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      Our Foods
                    </a>
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://www.instagram.com/progress_works_gym"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-red-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              <FaInstagram /> Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
