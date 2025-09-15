"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Lechisa | Full-Stack Dev
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10">
          <Link href="#home" className="text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-indigo-600">
            About
          </Link>
          <Link href="#projects" className="text-gray-700 hover:text-indigo-600">
            Projects
          </Link>
          <Link href="#skills" className="text-gray-700 hover:text-indigo-600">
            Skills
          </Link>
          <Link
            href="#experience"
            className="text-gray-700 hover:text-indigo-600"
          >
            Experience
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg px-6 py-4 space-y-4">
          <Link
            href="#home"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="block text-gray-700 hover:text-indigo-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
