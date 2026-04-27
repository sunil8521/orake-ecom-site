'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ShoppingCart, User, Heart, Menu, X, LogIn } from "lucide-react";
import { useSession } from "next-auth/react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/products", label: "Products" },
  { path: "/contact", label: "Contact" },
  { path: "/blog", label: "Blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
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

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-[#c25b5e] shadow-md" : "bg-transparent py-2"
      }`}
    >
      {/* ✅ FIXED CONTAINER */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 items-center">
              <Image
                src="/orake-white-logo.svg"
                alt="Logo"
                width={120}
                height={40}
                className={`h-full w-auto object-contain transition-all duration-500 ${
                  scrolled
                    ? "[filter:brightness(0)_saturate(100%)_invert(78%)_sepia(60%)_saturate(500%)_hue-rotate(5deg)_brightness(105%)]"
                    : ""
                }`}
                priority
              />
            </div>
          </Link>

          {/* ✅ DESKTOP NAV (FIXED BREAKPOINT) */}
          <div className="hidden flex-1 items-center justify-center lg:flex lg:gap-6 xl:gap-10">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.path ||
                (link.path === "/" && pathname === "/");

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleNavClick}
                  className={`group relative px-2 py-2 text-[13px] lg:text-[15px] font-bold uppercase tracking-[0.16em] transition-colors duration-300
                    ${
                      scrolled
                        ? "text-[#f6efe2] hover:text-[#d4a64a]"
                        : "text-[#f6efe2] hover:text-[#f2c56f]"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-[2px] rounded transition-all duration-300
                      ${
                        isActive
                          ? "w-[calc(100%-1rem)] opacity-100 bg-[#f2c56f]"
                          : "w-0 opacity-0 group-hover:w-[calc(100%-1rem)] group-hover:opacity-70 bg-[#f2c56f]"
                      }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Icons + Hamburger */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* ✅ ICONS FIXED */}
            <div className="flex items-center gap-3 lg:gap-5 text-[#f6efe2]">
              <Link href="/wishlist" className="hover:scale-110 transition-all">
                <Heart className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={2.2} />
              </Link>
              <Link href="/cart" className="hover:scale-110 transition-all">
                <ShoppingCart className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={2.2} />
              </Link>
              {status === "authenticated" ? (
                <Link href="/account" className="hover:scale-110 transition-all">
                  <User className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={2.2} />
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="group flex items-center transition-all duration-300"
                >
                  {/* Mobile: Just Icon */}
                  <LogIn className="h-6 w-6 sm:hidden hover:scale-110 transition-transform" strokeWidth={2.2} />
                  
                  {/* Desktop: Full Button */}
                  <div className={`hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-[#f2c56f] text-[12px] lg:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    scrolled
                      ? "text-[#f6efe2] hover:bg-[#f2c56f] hover:text-[#15161b]"
                      : "text-[#f6efe2] hover:bg-[#f2c56f] hover:text-[#15161b]"
                  }`}>
                    <LogIn className="h-4 w-4" strokeWidth={2.5} />
                    Sign In
                  </div>
                </Link>
              )}
            </div>

            {/* ✅ BETTER HAMBURGER */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center rounded-lg text-white bg-white/10 p-2 backdrop-blur-md hover:bg-[#de3e4f] transition-all duration-300 lg:hidden"
            >
              {menuOpen ? (
                <X className="h-8 w-8 " strokeWidth={2.2} />  
              ) : (
                <Menu className="h-8 w-8 " strokeWidth={2.2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ✅ MOBILE SIDEBAR FIXED */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm bg-[#15161b] border-l border-white/10 transition-all duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-6">

          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#de3e4f]/30">
            <div>
              <div className="text-2xl font-bold text-white uppercase">
                Orake
              </div>
              <div className="text-[10px] tracking-[0.3em] text-[#de3e4f] uppercase">
                Menu
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full text-white bg-white/10 hover:bg-[#de3e4f] transition"
            >
              <X className="h-6 w-6" strokeWidth={2.2} />
            </button>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.path ||
                (link.path === "/" && pathname === "/");

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleNavClick}
                  className={`px-4 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all border-b border-white/5
                    ${
                      isActive
                        ? "text-[#de3e4f]"
                        : "text-white/80 hover:bg-[#de3e4f] hover:text-white"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}