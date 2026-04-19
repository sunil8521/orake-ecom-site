"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChefHat } from "lucide-react";

const navLinks = ["Home", "Menu", "About Us", "Gallery", "Blogs", "Contact Us"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isWhite = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isWhite ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center shadow">
              <ChefHat size={18} className="text-white" />
            </div>
            <div className="leading-none">
              <p className={`font-playfair text-xl font-bold tracking-wide transition-colors duration-300 ${isWhite ? "text-gray-900" : "text-white"}`}>
                Restro.
              </p>
              <p className={`text-[8px] uppercase tracking-[3px] mt-0.5 transition-colors duration-300 ${isWhite ? "text-gray-400" : "text-gray-300"}`}>
                Restaurant
              </p>
            </div>
          </div>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-[13px] font-medium transition-colors duration-200 hover:text-red-600 ${
                  i === 0
                    ? "text-red-600 font-semibold"
                    : isWhite ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* ── Book a Table ── */}
          <a
            href="#reserve"
            className={`hidden lg:inline-flex items-center px-6 py-2.5 border-2 text-[13px] font-semibold rounded-full transition-all duration-300 uppercase tracking-wider ${
              isWhite
                ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                : "border-white text-white hover:bg-white hover:text-gray-900"
            }`}
          >
            Book a Table
          </a>

          {/* ── Mobile Toggle ── */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 transition-colors ${isWhite ? "text-gray-700" : "text-white"} hover:text-red-600`}
            aria-label="Toggle navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 pt-4 pb-6 flex flex-col gap-3">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setOpen(false)}
              className={`py-2 text-sm font-medium border-b border-gray-50 transition-colors hover:text-red-600 ${
                i === 0 ? "text-red-600 font-semibold" : "text-gray-700"
              }`}
            >
              {link}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-6 py-3 border-2 border-gray-900 text-sm font-semibold text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase tracking-wider"
          >
            Book a Table
          </a>
        </nav>
      </div>
    </header>
  );
}
