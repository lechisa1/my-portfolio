"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
<Link href="/" className="text-2xl font-bold text-indigo-600">
  Lechisa | Full-Stack Dev
</Link>

        
        <div className="hidden md:flex space-x-10">
          <Link href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</Link>
          <Link href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</Link>
          <Link href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors">Skills</Link>
          <Link href="#experience" className="text-gray-700 hover:text-indigo-600 transition-colors">Experience</Link>
          <Link href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</Link>
        </div>
        
        <button className="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;