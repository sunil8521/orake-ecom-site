"use client";

import { Search } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] min-h-[550px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1575763387984-476af626100a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10 sm:pb-16">
        {/* Breadcrumb */}
        <div className="mb-4 sm:mb-6">
          <p className="text-white/70 text-xs sm:text-sm font-medium">
            <span className="hover:text-white cursor-pointer transition-colors">
              Home
            </span>{" "}
            &gt;{" "}
            <span className="text-white">What We Do</span>
          </p>
        </div>

        {/* Headline */}
        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight max-w-2xl mb-6 sm:mb-8 animate-fadeInUp"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Nature Is Essential For The Survival Of All Life On Earth. But
          It&apos;s Diminishing, Fast.
        </h1>

        {/* Search bar */}
        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 animate-fadeInUp delay-200">
          <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2.5 w-full max-w-xs border border-white/30">
            <Search className="w-4 h-4 text-white/70 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search news..."
              className="bg-transparent text-white placeholder-white/60 text-sm outline-none w-full"
            />
          </div>
          <button className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
            Search
          </button>
        </div>

        {/* Bottom labels */}
        <div className="flex items-center justify-between animate-fadeIn delay-300">
          <span className="text-white/70 text-xs sm:text-sm font-medium tracking-wide">
            Flora Fauna
          </span>
          <span className="text-white/70 text-xs sm:text-sm font-medium tracking-wide">
            What We Do
          </span>
        </div>
      </div>
    </section>
  );
}
