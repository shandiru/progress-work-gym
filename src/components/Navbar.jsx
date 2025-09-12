"use client";
import React, { useState } from "react";
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
  const [productOpen, setProductOpen] = useState(false); // separate toggle for Product

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
              <a
                href={link.href}
                className="text-xs font-medium hover:text-red-500 transition cursor-pointer"
                onClick={
                  link.hasDropdown
                    ? () => setProductOpen(!productOpen)
                    : () => setMenuOpen(false)
                }
              >
                {link.label}
              </a>

              {/* Dropdown for Product (desktop) */}
              {
                link.hasDropdown && productOpen && (
                  <div className="absolute top-full left-0 mt-2 w-40 bg-[#06091A] text-white border border-gray-700 rounded shadow cursor-pointer">
                    <a
                      href="#ourproducts"
                      className="block px-4 py-2 text-sm hover:text-red-500 transition"
                    >
                      Our Products
                    </a>
                    <a
                      href="#ourfoods"
                      className="block px-4 py-2 text-sm hover:text-red-500 transition"
                    >
                      Our Foods
                    </a>
                  </div>
                )
              }
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
      </div >

      {/* Mobile Menu */}
      {
        menuOpen && (
          <div className="md:hidden bg-[#06091A] border-t border-gray-700">
            <nav className="flex flex-col gap-4 py-6 px-6">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="flex flex-col">
                  {/* Mobile main link */}
                  <button
                    className="flex justify-between items-center text-lg font-medium hover:text-red-500 transition w-full"
                    onClick={
                      link.hasDropdown
                        ? () => setProductOpen(!productOpen)
                        : () => setMenuOpen(false)
                    }
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <span className="ml-2 text-sm">{productOpen ? "▲" : "▼"}</span>
                    )}
                  </button>

                  {/* Product Dropdown (mobile inline) */}
                  {link.hasDropdown && productOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2 border-l border-gray-700 pl-4">
                      <a
                        href="#ourproducts"
                        className="block text-base font-medium hover:text-red-500 transition"
                        onClick={() => setMenuOpen(false)}
                      >
                        Our Products
                      </a>
                      <a
                        href="#ourfoods"
                        className="block text-base font-medium hover:text-red-500 transition"
                        onClick={() => setMenuOpen(false)}
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
        )
      }
    </header >
  );
}
