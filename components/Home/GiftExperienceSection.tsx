"use client";
import Image from "next/image";
import { Sansita, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function GiftExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff] px-6 py-16 sm:px-12 md:py-24 lg:px-20">
       
 
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-4 sm:gap-10 lg:grid-cols-2 lg:gap-14">

        {/* ━━━ Left Typography & CTA ━━━ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pt-2 relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <h2 className={`${titleFont.className} text-[clamp(3.5rem,7vw,6.5rem)] uppercase leading-[0.85] tracking-[0.01em] text-[#15161b] drop-shadow-sm`}>
            Gift The
            <br />
            <span className="text-[#de3e4f]">Experience</span>
          </h2>

          <p className={`${textFont.className} mt-6 sm:mt-8 max-w-[34ch] text-[clamp(1.15rem,2.2vw,2.05rem)] font-medium leading-[1.3] text-[#292a31]`}>
            Whether it&apos;s a birthday, a promotion, or just a Tuesday night, our curated gift boxes are designed to impress. Pick your sisters, share the flavor.
          </p>

          <button className={`${textFont.className} group mt-8 sm:mt-10 inline-flex items-center gap-4 rounded-full bg-black pl-5 pr-8 py-3.5 text-[1.2rem] sm:text-[1.5rem] font-semibold leading-none text-white transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)]`}>
            <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-sm text-black transition-transform duration-300 group-hover:rotate-[20deg] shadow-inner">🔒</span>
            Coming soon!
          </button>
        </motion.div>

        {/* ━━━ Right Visual: Gift Image ━━━ */}
        <div className="relative flex justify-center lg:justify-end w-full mt-10 lg:mt-0 pb-10 lg:pb-0 z-10">

          {/* Grounding Shadow (No visible plate/pedestal, just the shadow effect) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-[2%] sm:bottom-[8%] lg:bottom-[4%] left-1/2 lg:left-[50%] -translate-x-1/2 w-[60%] sm:w-[50%] lg:w-[65%] h-[40px] sm:h-[60px] bg-black/25 rounded-[50%] blur-[12px] pointer-events-none z-0"
          />

          {/* Grounded Gift Box */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-[420px] sm:max-w-[550px] lg:max-w-[600px] xl:max-w-[650px] aspect-square z-10 lg:origin-right hover:-translate-y-2 transition-transform duration-500"
          >
            <Image
              src="/gift.png"
              alt="Curated Gift Box"
              fill
              sizes="(max-width: 1024px) 80vw, 50vw"
              className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)]"
              priority
            />
          </motion.div>
        </div>

      </div>

      {/* Decorative Wave */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-18 w-full overflow-hidden">
        <style>{`
          @keyframes waveMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <svg className="h-full w-[200%] animate-[waveMove_8s_linear_infinite]" viewBox="0 0 2880 120" preserveAspectRatio="none">
          <path
            d="M0 0 C60 0 60 38 120 38 C180 38 180 0 240 0 C300 0 300 38 360 38 C420 38 420 0 480 0 C540 0 540 38 600 38 C660 38 660 0 720 0 C780 0 780 38 840 38 C900 38 900 0 960 0 C1020 0 1020 38 1080 38 C1140 38 1140 0 1200 0 C1260 0 1260 38 1320 38 C1380 38 1380 0 1440 0 C1500 0 1500 38 1560 38 C1620 38 1620 0 1680 0 C1740 0 1740 38 1800 38 C1860 38 1860 0 1920 0 C1980 0 1980 38 2040 38 C2100 38 2100 0 2160 0 C2220 0 2220 38 2280 38 C2340 38 2340 0 2400 0 C2460 0 2460 38 2520 38 C2580 38 2580 0 2640 0 C2700 0 2700 38 2760 38 C2820 38 2820 0 2880 0 L2880 120 L0 120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
// "use client";
// import React from "react";
// import Image from "next/image";
// import { DM_Sans } from "next/font/google";
// import { motion } from "framer-motion";

// const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// export default function EnergyDrinksDealBanner() {
//   return (
//     <div className={`w-full max-w-[1400px] xl:max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 mt-16 sm:mt-20 md:mt-24 pb-16 md:pb-20 ${bodyFont.className}`}>

//       {/* Container: Rounded floating pill */}
//       <motion.section
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: false, amount: 0.15 }}
//         transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
//         className="relative w-full bg-[#8a9b87] rounded-[32px] sm:rounded-[40px] md:rounded-[60px] flex flex-col md:flex-row items-center justify-between p-5 pb-0 sm:p-6 sm:pb-0 md:p-16 lg:p-20 xl:p-24 shadow-[0_30px_60px_rgba(138,155,135,0.4)] overflow-visible min-h-[380px] sm:min-h-[420px] md:min-h-[450px]"
//       >

//         {/* INNER BOUNDARY FOR Background Effects (SVG & Glow) */}
//         <div className="absolute inset-0 rounded-[32px] sm:rounded-[40px] md:rounded-[60px] overflow-hidden pointer-events-none z-0">
//           {/* Subtle Right glow */}
//           <div className="absolute right-0 top-0 w-[80%] md:w-[50%] h-[150%] bg-[#a3b3a0] rounded-full blur-[80px] opacity-70 translate-x-[20%] -translate-y-[10%]"></div>
//           {/* Subtle Left glow */}
//           <div className="absolute left-[-20%] bottom-[-40%] w-[60%] h-[100%] bg-[#778b73] rounded-full blur-[100px] opacity-80"></div>

//           {/* Premium Decorative lines (SVG) */}
//           <svg
//             className="absolute left-[-5%] bottom-[-10%] z-0 w-[400px] sm:w-[500px] md:w-[700px] opacity-60"
//             viewBox="0 0 600 440"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path d="M0 540 Q300 300 600 540" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 8" fill="none" opacity="0.35" />
//             <path d="M0 480 Q300 240 600 480" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.25" />
//             <path d="M0 420 Q300 180 600 420" stroke="#ffffff" strokeWidth="1.5" fill="none" opacity="0.35" />
//             <path d="M0 360 Q300 120 600 360" stroke="#ffffff" strokeWidth="2" strokeDasharray="10 10" fill="none" opacity="0.15" />
//           </svg>
//         </div>

//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: false, amount: 0.3 }}
//           transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
//           className="flex flex-col justify-center w-full max-w-[650px] z-10 relative md:pr-10"
//         >
//           <div className="w-fit mb-4 sm:mb-5 md:mb-6 overflow-hidden rounded-full p-[2px] bg-gradient-to-r from-[#f3f3e7] to-white/10 shadow-sm">
//             <span className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 bg-[#8a9b87] rounded-full text-xs sm:text-sm md:text-base text-[#f3f3e7] font-semibold tracking-widest uppercase shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
//               ❄️ Winter Deal Days
//             </span>
//           </div>

//           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white leading-[1.05] mb-4 sm:mb-5 md:mb-6 drop-shadow-sm tracking-tight">
//             Save 20% or more<br />on Energy
//           </h2>

//           <p className="text-[#f3f3e7] text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-6 sm:mb-8 md:mb-10 md:w-5/6 opacity-95">
//             Unlock maximum performance and ultimate hydration. Grab your favorite prebiotic blends before the season ends.
//           </p>

//           <button className="relative w-fit px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5 bg-white text-[#8a9b87] rounded-full font-bold shadow-[0_15px_30px_rgba(0,0,0,0.15)] overflow-hidden">
//             <span className="relative z-10 text-lg sm:text-xl flex items-center gap-3">
//               Shop Now <span className="text-xl sm:text-2xl leading-none">→</span>
//             </span>
//           </button>
//         </motion.div>

//         {/* 3D Floating Cans */}
//         <div className="relative w-full h-[420px] sm:h-[480px] md:h-auto md:w-[500px] lg:w-[580px] xl:w-[650px] mt-4 sm:mt-6 md:mt-0 z-20 pointer-events-none flex items-center justify-center">

//           {/* Back Can (Strawberry) */}
//           <motion.div
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.2 }}
//             transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
//             className="absolute top-1/2 left-1/2 md:left-auto md:right-[10%] lg:right-[15%] xl:right-[20%] -translate-x-[65%] md:translate-x-0 -translate-y-[45%] rotate-[15deg] w-[460px] sm:w-[520px] md:w-[500px] lg:w-[620px] xl:w-[700px] h-[940px] sm:h-[1060px] md:h-[1000px] lg:h-[1200px] xl:h-[1350px] drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] z-10"
//           >
//             <Image src="/can1.png" alt="Energy Drink Vanilla" fill sizes="(max-width: 768px) 50vw, 40vw" className="object-contain" />
//           </motion.div>

//           {/* Front Can (Lemon) - Larger and foreground */}
//           <motion.div
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false, amount: 0.2 }}
//             transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
//             className="absolute top-1/2 left-1/2 md:left-auto md:right-[-15%] lg:right-[-20%] xl:right-[-25%] -translate-x-[35%] md:translate-x-0 -translate-y-[50%] md:-translate-y-[55%] -rotate-[10deg] w-[550px] sm:w-[650px] md:w-[620px] lg:w-[760px] xl:w-[850px] h-[1100px] sm:h-[1300px] md:h-[1200px] lg:h-[1450px] xl:h-[1600px] drop-shadow-[0_30px_35px_rgba(0,0,0,0.4)] z-20"
//           >
//             <Image src="/can2.png" alt="Energy Drink Lemon" fill sizes="(max-width: 768px) 60vw, 50vw" className="object-contain" />
//           </motion.div>

//         </div>

//       </motion.section>
//     </div>
//   );
// }



