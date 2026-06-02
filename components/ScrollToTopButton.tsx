"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#de3e4f] text-white shadow-[0_4px_14px_rgba(222,62,79,0.4)] transition-all duration-500 hover:bg-[#c25b5e] hover:shadow-[0_6px_20px_rgba(222,62,79,0.6)] hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.5} />
    </button>
  );
}
