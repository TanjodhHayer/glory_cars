"use client";

import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-red-600">GloryCars</div>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul className={`md:flex gap-8 text-secondary dark:text-white ${open ? "block mt-4" : "hidden md:flex"} transition-all`}>
          <li><a href="#hero" className="hover:text-red-600">Home</a></li>
          <li><a href="#features" className="hover:text-red-600">Features</a></li>
          <li><a href="#how" className="hover:text-red-600">How it Works</a></li>
          <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
