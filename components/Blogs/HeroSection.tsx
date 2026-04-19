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

      </div>
    </section>
  );
}
