"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { PORTAL_URL } from "@/lib/site";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="shell nav-row">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="brand"
          aria-label="Glory Auto Hub home"
        >
          <span className="brand-icon">GA</span>
          <span>
            GLORY AUTO HUB<small>REPAIR FINANCING</small>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#for-shops">For repair shops</Link>
          <Link href="/contactCustomer">Contact</Link>
          <a href={PORTAL_URL + "/login"}>Shop login</a>
          <a className="button small" href={PORTAL_URL + "/signup"}>
            Register your shop
          </a>
        </nav>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-nav shell"
          onClick={() => setOpen(false)}
        >
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#for-shops">For repair shops</Link>
          <Link href="/contactCustomer">Contact</Link>
          <a href={PORTAL_URL + "/login"}>Shop login</a>
          <a className="button" href={PORTAL_URL + "/signup"}>
            Register your shop
          </a>
        </nav>
      )}
    </header>
  );
}
