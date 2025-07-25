"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    const onResize = () => setIsMobile(window.innerWidth < 768);

    onScroll();
    onResize();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const handleLinkClick = () => {
    if (isMobile) setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a href="#hero">
          <img
            src="/zoom-logo.jpg"
            alt="GloryCars"
            className="h-[80px] w-auto md:h-[100px] object-contain"
            /></a>
      </div>


        {isMobile ? (
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-white focus:outline-none hover:text-primary"
          >
            {open ? <X size={32} /> : <Menu size={30} />}
          </button>
        ) : (
          <ul className="flex gap-10 text-lg md:text-xl font-medium text-white">
            <li>
              <Link href="/#hero" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#features" className="hover:text-primary transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-primary transition">
                About
              </Link>
            </li>
            <li>
            <Link href="/#contact" className="hover:text-primary transition">
              Contact
            </Link>

            </li>
            <li>
            <Link href="/login" className="hover:text-primary hover:underline">
              Login
            </Link>
            </li>
          </ul>
        )}
      </div>

      {isMobile && open && (
        <div className="flex flex-col items-center bg-white border-t shadow-md text-black py-4 space-y-2 text-lg font-medium">
          <Link href="/#hero" className="hover:text-primary" onClick={handleLinkClick}>
            Home
          </Link>
          <Link href="/#features" className="hover:text-primary" onClick={handleLinkClick}>
            Features
          </Link>
          <Link href="/#about" className="hover:text-primary" onClick={handleLinkClick}>
            About Us
          </Link>
          <Link href="/#contact" className="hover:text-primary" onClick={handleLinkClick}>
            Contact
          </Link>

          <Link href="/login" className="hover:text-primary" onClick={handleLinkClick}>
            Login
          </Link>          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
