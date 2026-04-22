"use client";
import React from "react";
import Image from "next/image";
import { Oswald } from "next/font/google";

const bodyFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function EnergyDrinksDealBanner() {
  return (
    <div className={`w-full max-w-[1400px] mx-auto px-4 md:px-8 mt-24 pb-20 ${bodyFont.className}`}>
      
      {/* Container: Rounded floating pill */}
      <section className="relative w-full bg-[#8a9b87] rounded-[40px] md:rounded-[60px] flex flex-col md:flex-row items-center justify-between p-6 pb-2 md:p-24 shadow-[0_30px_60px_rgba(138,155,135,0.4)] group overflow-visible min-h-[450px]">
        
        {/* INNER BOUNDARY FOR Background Effects (SVG & Glow) */}
        <div className="absolute inset-0 rounded-[40px] md:rounded-[60px] overflow-hidden pointer-events-none z-0">
          
          {/* Subtle Right glow */}
          <div className="absolute right-0 top-0 w-[80%] md:w-[50%] h-[150%] bg-[#a3b3a0] rounded-full blur-[80px] opacity-70 translate-x-[20%] -translate-y-[10%]"></div>
          {/* Subtle Left glow */}
          <div className="absolute left-[-20%] bottom-[-40%] w-[60%] h-[100%] bg-[#778b73] rounded-full blur-[100px] opacity-80"></div>

          {/* Premium Decorative lines (SVG) */}
          <svg
            className="absolute left-[-5%] bottom-[-10%] z-0 w-[500px] md:w-[700px] opacity-60"
            viewBox="0 0 600 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 540 Q300 300 600 540" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 8" fill="none" opacity="0.35" />
            <path d="M0 480 Q300 240 600 480" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.25" />
            <path d="M0 420 Q300 180 600 420" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.35" />
            <path d="M0 360 Q300 120 600 360" stroke="#ffffff" strokeWidth="2" strokeDasharray="10 10" fill="none" opacity="0.15" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center w-full max-w-[650px] z-10 relative md:pr-10">
          <div className="w-fit mb-6 overflow-hidden rounded-full p-[2px] bg-gradient-to-r from-[#f3f3e7] to-white/10 shadow-sm">
             <span className="inline-block px-5 py-2 bg-[#8a9b87] rounded-full text-sm md:text-base text-[#f3f3e7] font-semibold tracking-widest uppercase shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
               ❄️ Winter Deal Days
             </span>
          </div>
          
          <h2 className="text-5xl md:text-[80px] font-bold text-white leading-[1.05] mb-6 drop-shadow-sm tracking-tight">
            Save 20% or more<br />on Energy
          </h2>
          
          <p className="text-[#f3f3e7] text-xl md:text-2xl font-medium mb-10 md:w-5/6 opacity-95">
            Unlock maximum performance and ultimate hydration. Grab your favorite prebiotic blends before the season ends.
          </p>
          
          <button className="relative w-fit px-12 py-5 bg-white text-[#8a9b87] rounded-full font-bold shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 overflow-hidden group/btn">
            <div className="absolute inset-0 bg-gradient-to- from-transparent via-[#f3f3e7] to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none"></div>
            <span className="relative z-10 text-xl flex items-center gap-3">
               Shop Now <span className="text-2xl leading-none">→</span>
            </span>
          </button>
        </div>

        {/* 3D Floating Cans (Massively Scaled & Centered properly on mobile) */}
        {/* Shrank the container height on mobile to 350px so it's tight, letting the 900px cans spill over wildly */}
        <div className="relative w-full h-[350px] md:h-auto md:w-[450px] lg:w-[500px] mt-8 md:mt-0 z-20 pointer-events-none flex items-center justify-center">
          
          {/* Back Can (Strawberry) */}
          {/* Mobile: Centered & staggered left. Desktop: Right anchored, massively scaled */}
          <div className="absolute top-1/2 left-1/2 md:left-auto md:right-[20%] lg:right-[30%] -translate-x-[65%] md:translate-x-0 -translate-y-[45%] md:-translate-y-[45%] w-[350px] sm:w-[400px] md:w-[350px] lg:w-[450px] xl:w-[500px] h-[750px] sm:h-[800px] md:h-[700px] lg:h-[850px] xl:h-[950px] rotate-[15deg] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[18deg] group-hover:-translate-y-[48%] group-hover:translate-x-6 group-hover:scale-[1.08] drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] z-10">
            <Image src="/can1.png" alt="Energy Drink Vanilla" fill className="object-contain" />
          </div>

          {/* Front Can (Lemon) - Larger and foreground */}
          {/* Mobile: Centered & staggered right. Desktop: Right boundary anchored, dominating scale */}
          <div className="absolute top-1/2 left-1/2 md:left-auto md:right-[-10%] lg:right-[-15%] -translate-x-[35%] md:translate-x-0 -translate-y-[50%] md:-translate-y-[55%] w-[420px] sm:w-[500px] md:w-[450px] lg:w-[550px] xl:w-[600px] h-[900px] sm:h-[1000px] md:h-[850px] lg:h-[1000px] xl:h-[1100px] -rotate-[10deg] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[5deg] group-hover:-translate-y-[55%] group-hover:-translate-x-4 group-hover:scale-[1.15] drop-shadow-[0_30px_35px_rgba(0,0,0,0.4)] z-20">
             <Image src="/can2.png" alt="Energy Drink Lemon" fill className="object-contain" />
          </div>

        </div>

      </section>
    </div>
  );
}
