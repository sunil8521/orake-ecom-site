"use client";
import React from "react";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function EnergyDrinksDealBanner() {
  return (
    <div className={`w-full max-w-[1400px] xl:max-w-[1500px] mx-auto px-12 sm:px-16 lg:px-28 mt-16 sm:mt-20 md:mt-24 pb-16 md:pb-20 ${bodyFont.className}`}>

      {/* Container: Rounded floating pill */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        className="relative w-full bg-[#8a9b87] rounded-[32px] sm:rounded-[40px] lg:rounded-[60px] flex flex-col lg:flex-row items-center justify-between p-6 pt-12 pb-0 sm:p-10 sm:pb-0 lg:p-16 lg:pb-16 xl:p-20 shadow-[0_30px_60px_rgba(138,155,135,0.4)] overflow-visible min-h-[500px] sm:min-h-[550px] lg:min-h-[480px]"
      >

        {/* INNER BOUNDARY FOR Background Effects */}
        <div className="absolute inset-0 rounded-[32px] sm:rounded-[40px] lg:rounded-[60px] overflow-hidden pointer-events-none z-0">

          {/* Subtle Water Texture Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
            style={{ backgroundImage: "url('/water-splash.png')" }}
          />

          {/* Subtle Right glow */}
          <div className="absolute right-0 top-0 w-[80%] lg:w-[50%] h-[150%] bg-[#a3b3a0] rounded-full blur-[80px] opacity-70 translate-x-[20%] -translate-y-[10%]"></div>
          {/* Subtle Left glow */}
          <div className="absolute left-[-20%] bottom-[-40%] w-[60%] h-[100%] bg-[#778b73] rounded-full blur-[100px] opacity-80"></div>

          {/* Premium Decorative lines (SVG) */}
          <svg
            className="absolute left-[-5%] bottom-[-10%] z-0 w-[400px] sm:w-[500px] lg:w-[700px] opacity-60"
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
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
          className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:max-w-[500px] xl:max-w-[650px] z-10 relative lg:pr-10 mt-4 lg:mt-0"
        >
          <div className="w-fit mb-5 lg:mb-6 overflow-hidden rounded-full p-[2px] bg-gradient-to-r from-[#f3f3e7] to-white/10 shadow-sm">
            <span className="inline-block px-5 py-2 bg-[#8a9b87] rounded-full text-xs sm:text-sm lg:text-base text-[#f3f3e7] font-semibold tracking-widest uppercase shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
              ❄️ Winter Deal Days
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] font-bold text-white leading-[1.05] mb-5 lg:mb-6 drop-shadow-sm tracking-tight">
            Save 20% or more<br className="hidden sm:block lg:hidden" />on Energy
          </h2>

          <p className="text-[#f3f3e7] text-sm sm:text-base lg:text-xl font-medium mb-8 lg:mb-10 lg:w-5/6 opacity-95 max-w-[320px] sm:max-w-[400px] lg:max-w-full">
            Unlock maximum performance and ultimate hydration. Grab your favorite prebiotic blends before the season ends.
          </p>

          <button className="relative w-fit px-8 sm:px-10 lg:px-12 py-3.5 sm:py-4 lg:py-5 bg-white text-[#8a9b87] rounded-full font-bold shadow-[0_15px_30px_rgba(0,0,0,0.15)] overflow-hidden hover:bg-[#15161b] hover:text-white transition-all duration-300 group">
            <span className="relative z-10 text-sm sm:text-lg lg:text-xl flex items-center gap-3">
              Shop Now <span className="text-lg sm:text-xl lg:text-2xl leading-none transition-transform group-hover:translate-x-1">→</span>
            </span>
          </button>
        </motion.div>

        {/* 3D Floating Cans */}
        <div className="relative w-full h-[400px] sm:h-[480px] lg:h-auto lg:w-[480px] xl:w-[600px] mt-6 sm:mt-10 lg:mt-0 z-20 pointer-events-none flex items-center justify-center">

          {/* Back Can (Strawberry) */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
            className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[10%] xl:right-[10%] -translate-x-[60%] lg:translate-x-0 -translate-y-[60%] lg:-translate-y-[55%] rotate-[15deg] w-[420px] sm:w-[500px] lg:w-[650px] xl:w-[750px] h-[860px] sm:h-[1020px] lg:h-[1300px] xl:h-[1500px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] z-10"
          >
            <Image src="/can1.png" alt="Energy Drink Vanilla" fill sizes="(max-width: 768px) 50vw, 40vw" className="object-contain" />
          </motion.div>

          {/* Front Can (Lemon) - Larger and foreground */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[-15%] xl:right-[-40%] -translate-x-[40%] lg:translate-x-0 -translate-y-[55%] lg:-translate-y-[50%] -rotate-[10deg] w-[480px] sm:w-[600px] lg:w-[780px] xl:w-[900px] h-[980px] sm:h-[1220px] lg:h-[1550px] xl:h-[1800px] drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)] z-20"
          >
            <Image src="/can2.png" alt="Energy Drink Lemon" fill sizes="(max-width: 1024px) 70vw, 50vw" className="object-contain" priority />
          </motion.div>

        </div>

      </motion.section>
    </div>
  );
}
