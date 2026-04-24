"use client";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] min-h-[500px] overflow-hidden bg-[#15161b]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop"
          alt="Brand Vibe"
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        {/* Aggressive gradient overlays for readability and neon vibe */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15161b] via-[#15161b]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#de3e4f]/30 to-transparent mix-blend-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 h-full flex flex-col justify-end pb-12 sm:pb-20">
        {/* Breadcrumb */}
        <div className="mb-4 sm:mb-6 flex items-center gap-2">
          <p className={`${textFont.className} text-[#dbba53] text-sm font-bold uppercase tracking-[0.2em]`}>
            <span className="hover:text-white cursor-pointer transition-colors">
              Home
            </span>
            <span className="text-white/30 mx-2">/</span>
            <span className="text-white">The Culture</span>
           </p>
        </div>

        {/* Headline */}
        <h1
          className={`${titleFont.className} text-white text-[clamp(4rem,10vw,8rem)] uppercase leading-[0.9] tracking-wide max-w-4xl mb-6 relative z-10`}
        >
          THE
          <br />
          <span className="text-[#de3e4f]">CULTURE.</span>
        </h1>
        
        {/* Subtitle */}
        <p className={`${textFont.className} text-xl sm:text-2xl text-gray-300 font-light max-w-2xl border-l-4 border-[#de3e4f] pl-4`}>
          Dive into the lifestyle. The latest drops, creator interviews, and everything fueling the next generation.
        </p>

      </div>
    </section>
  );
}
