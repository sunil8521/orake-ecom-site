'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ShoppingCart, User, Heart, Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/Product", label: "Products" },
  { path: "/contact", label: "Contact" },
  { path: "/blog", label: "Blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full max-w-[100vw] transition-all duration-500 ${scrolled ? 'bg-[#c25b5e] shadow-md' : 'bg-transparent py-1'}`} style={{ textShadow: scrolled ? 'none' : '0 1px 8px rgba(0,0,0,0.5)' }}>
      <div className="w-full px-5 sm:px-12 lg:px-20">
        <div className="flex h-16 items-center justify-between md:h-20 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-3">
            <div className="flex h-8 items-center justify-center md:h-10">
              <Image
                src="/orake-white-logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden flex-1 items-center justify-center md:flex md:gap-4 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path === "/" && pathname === "/");
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleNavClick}
                  className={`group relative px-2 py-2 text-sm lg:text-base font-bold uppercase tracking-[0.16em] transition-colors duration-300
                    ${scrolled ? "text-[#f6efe2] hover:text-[#d4a64a]" : "text-[#f6efe2] hover:text-[#f2c56f]"}
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-0.5 rounded transition-all duration-500 ease-in-out ${scrolled ? "bg-[#d4a64a]" : "bg-[#f2c56f]"} ${isActive ? "w-[calc(100%-1rem)] opacity-100" : "w-0 opacity-0 group-hover:w-[calc(100%-1rem)] group-hover:opacity-70"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Icons & Mobile Menu Toggle */}
          <div className="flex flex-shrink-0 items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3 text-[#f6efe2] md:gap-5">
              <Link href="/wishlist" aria-label="Favorites" className="transition-colors hover:text-[#f2c56f] hover:scale-110 active:scale-95 duration-200">
                <Heart className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
              </Link>
              <Link href="/account" aria-label="Profile" className="transition-colors hover:text-[#f2c56f] hover:scale-110 active:scale-95 duration-200">
                <User className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
              </Link>
              <Link href="/cart" aria-label="Cart" className="transition-colors hover:text-[#f2c56f] hover:scale-110 active:scale-95 duration-200">
                <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
              </Link>
            </div>

            <button
              className={`flex items-center justify-center p-1.5 transition-colors md:hidden text-[#f6efe2] hover:text-[#f2c56f]`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-7 w-7" strokeWidth={1.5} /> : <Menu className="h-7 w-7" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay Background */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-4/5 max-w-xs transform bg-[#15161b] border-l border-white/10 transition-all duration-300 ease-in-out md:hidden shadow-2xl ${menuOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"}`}
        aria-hidden={!menuOpen}
      >
        <div className={`flex h-full flex-col p-6`}>
          <div className="flex items-center justify-between pb-6 border-b border-[#de3e4f]/30">
            <div>
              <div className={`font-sans font-bold text-2xl tracking-wide text-white uppercase`}>Orake</div>
              <div className={`mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#de3e4f]`}>Main Menu</div>
            </div>
            <button
              className={`flex items-center justify-center rounded-full bg-white/5 p-2 text-white transition-all duration-300 hover:bg-[#de3e4f] active:scale-95`}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>

          <div className="mt-8 flex flex-1 flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path === "/" && pathname === "/");
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleNavClick}
                  className={`group relative px-4 py-5 text-left text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 border-b border-white/5
                    ${isActive ? "text-[#de3e4f]" : "text-white/80 hover:bg-[#de3e4f] hover:text-white hover:border-transparent"}
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 top-0 h-full w-1 transition-all duration-300 bg-[#de3e4f] ${isActive ? "opacity-100" : "opacity-0 group-hover:w-full group-hover:opacity-10 -z-10"}`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
