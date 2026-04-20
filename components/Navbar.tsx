'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
    <nav className="fixed left-0 top-3 z-50 w-full translate-x-0 border-b border-[#f6efe2] md:top-4">
      <div className={`animate-navbarReveal px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? 'bg-[#c25b5e] bg-opacity-95' : 'bg-transparent'}`}> 
        <div className="relative z-60 flex h-26 items-center justify-between md:h-20 md:justify-center lg:h-26">
          <Link href="/" className="flex items-center gap-3 md:absolute md:left-0">
            <div className="ml-4 flex h-11 w-11 items-center justify-center border border-[#f6efe2]/30 bg-[#2b0a14] text-[#f6efe2] md:ml-55">
              <Image
                src="/logo.png"
                alt="Logo"
                width={176}
                height={216}
                className="h-54 w-44 scale-243 rounded-full object-contain"
                style={{ display: "block" }}
              />
            </div>
          </Link>

          <div className="hidden items-center gap-4 pl-65 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path === "/" && pathname === "/");
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleNavClick}
                  className={`group relative px-4 py-3 text-lg font-bold uppercase tracking-[0.16em] transition-colors duration-300
                    ${scrolled ? "text-[#f6efe2] hover:text-[#d4a64a]" : "text-[#f6efe2] hover:text-[#f2c56f]"}
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 rounded transition-all duration-500 ease-in-out ${
                      scrolled ? "bg-[#d4a64a]" : "bg-[#f2c56f]"
                    } ${isActive ? "w-[calc(100%-2rem)] opacity-100" : "w-0 opacity-0 group-hover:w-[calc(100%-2rem)] group-hover:opacity-70"}`}
                    style={{
                      transitionProperty: "width, opacity",
                    }}
                  />
                </Link>
              );
            })}
          </div>

          <button
            className={`inline-flex items-center gap-3 border border-[#f6efe2]/35 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 md:hidden ${scrolled ? "bg-[#2b0a14] text-[#f6efe2]" : "bg-[#f6efe2] text-[#2b0a14]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className="relative h-5 w-5 shrink-0">
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1.5 rounded transition-all duration-300 ${scrolled ? "bg-[#f6efe2]" : "bg-[#2b0a14]"} ${menuOpen ? "translate-y-0 rotate-45" : ""}`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 rounded transition-all duration-300 ${scrolled ? "bg-[#f6efe2]" : "bg-[#2b0a14]"} ${menuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 translate-y-1.5 rounded transition-all duration-300 ${scrolled ? "bg-[#f6efe2]" : "bg-[#2b0a14]"} ${menuOpen ? "translate-y-0 -rotate-45" : ""}`}
              ></span>
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu overlay"
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-4/5 max-w-xs transform transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ boxShadow: menuOpen ? "rgba(0,0,0,0.12) -4px 0px 24px" : undefined }}
        aria-hidden={!menuOpen}
      >
        <div className={`flex h-full flex-col border-l border-[#f6efe2]/15 bg-[#2b0a14] p-4`}>
          <div className="flex items-center justify-between pb-4">
            <div>
              <div className={`font-serif text-xl text-[#f6efe2]`}>Quick navigation</div>
              <div className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a64a]`}>Mobile menu</div>
            </div>
            <button
              className={`ml-2 rounded border border-[#d4a64a]/60 bg-[#f6efe2] px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#2b0a14]`}
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          <div className="mt-4 grid flex-1 grid-cols-1 gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path === "/" && pathname === "/");
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={handleNavClick}
                  className={`relative rounded px-4 py-4 text-left text-base font-semibold uppercase tracking-[0.16em] transition-all duration-300
                    bg-[#f6efe2] text-[#2b0a14] hover:bg-[#d4a64a] hover:text-[#2b0a14]
                  `}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 rounded transition-all duration-500 ease-in-out bg-[#d4a64a] ${isActive ? "w-[calc(100%-2rem)] opacity-100" : "w-0 opacity-0 group-hover:w-[calc(100%-2rem)] group-hover:opacity-70"}`}
                    style={{
                      transitionProperty: "width, opacity",
                    }}
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
