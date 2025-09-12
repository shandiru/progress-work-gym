"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

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
  const [productOpen, setProductOpen] = useState(false);
  const dropdownRef = useRef(null);
  const productButtonRef = useRef(null);

  // Handle clicks outside of dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        productButtonRef.current &&
        !productButtonRef.current.contains(event.target)
      ) {
        setProductOpen(false);
      }
    }

    // Only add listener when dropdown is open
    if (productOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [productOpen]);

  const handleProductClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setProductOpen(!productOpen);
  };

  const handleDropdownItemClick = () => {
    setProductOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#06091A] text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.avif" alt="Progress Works Gym" className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative">
              {link.hasDropdown ? (
                <button
                  ref={productButtonRef}
                  className="text-xs font-medium hover:text-red-500 transition cursor-pointer"
                  onClick={handleProductClick}
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.href}
                  className="text-xs font-medium hover:text-red-500 transition cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}

              {/* Dropdown for Product (desktop) */}
              {link.hasDropdown && productOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 w-40 bg-[#06091A] text-white border border-gray-700 rounded shadow cursor-pointer"
                >
                  <a
                    href="#ourproducts"
                    className="block px-4 py-2 text-sm hover:text-red-500 transition"
                    onClick={handleDropdownItemClick}
                  >
                    Our Products
                  </a>
                  <a
                    href="#ourfoods"
                    className="block px-4 py-2 text-sm hover:text-red-500 transition"
                    onClick={handleDropdownItemClick}
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
          onClick={() => {
            setMenuOpen(!menuOpen);
            setProductOpen(false);
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#06091A] border-t border-gray-700">
          <nav className="flex flex-col gap-4 py-6 px-6">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="flex flex-col">
                {/* Mobile main link */}
                {link.hasDropdown ? (
                  <button
                    className="flex justify-between items-center text-lg font-medium hover:text-red-500 transition w-full"
                    onClick={() => setProductOpen(!productOpen)}
                  >
                    {link.label}
                    <span className="ml-2 text-sm">{productOpen ? "▲" : "▼"}</span>
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="text-lg font-medium hover:text-red-500 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )}

                {/* Product Dropdown (mobile inline) */}
                {link.hasDropdown && productOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 border-l border-gray-700 pl-4">
                    <a
                      href="#ourproducts"
                      className="block text-base font-medium hover:text-red-500 transition"
                      onClick={handleDropdownItemClick}
                    >
                      Our Products
                    </a>
                    <a
                      href="#ourfoods"
                      className="block text-base font-medium hover:text-red-500 transition"
                      onClick={handleDropdownItemClick}
                    >
                      Our Foods
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* Instagram Link */}
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