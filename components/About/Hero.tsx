"use client";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  // Generate a totally deterministic organic & rugged torn edge path
  const tearPoints = Array.from({ length: 300 }).map((_, i) => {
    const x = 100 - (i * (100 / 299));
    // Smoother waves and reduced spikes for a less rigid tear
    const wave1 = Math.sin(i * 0.1) * 8;
    const wave2 = Math.sin(i * 0.4) * 4;
    const wave3 = Math.sin(i * 1.0) * 2;
    const pseudoRandom = ((i * i * 37) % 12) - 6; 
    
    // Base center at 35% so the tear sits higher up
    let y = 35 + wave1 + wave2 + wave3 + pseudoRandom;
    y = Math.max(0, Math.min(100, y)); 
    return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
  }).join(', ');
  
  // Notice this connects 0 100% to 100% 100%, then jumps up to tearPoints which go right-to-left
  const tearPath = `polygon(0 100%, 100% 100%, 100% 90%, ${tearPoints}, 0 90%)`;

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-16 md:pt-20 overflow-hidden -mb-[2px] z-20"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1536252470153-1fa6046d8723?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Restaurant dining ambiance"
          className="w-full h-full object-cover"
        />
        {/* gradient: darker on left, subtle on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
      </div>

      {/* ── Hero Text ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Tagline row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="flex gap-0.5 text-red-500 text-sm">♦♦♦</span>
          <p className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-[3px] text-white/90">
            Where Taste Meets Elegance
          </p>
          <span className="flex gap-0.5 text-red-500 text-sm">♦♦♦</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-playfair font-bold text-white leading-[1.08] mb-6
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px]"
        >
          Delicious Dishes &amp;<br />
          <span className="italic">Memorable Moments</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-white/75 font-light max-w-xl mx-auto mb-10
          text-sm sm:text-base leading-relaxed text-center"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#menu"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="inline-flex items-center px-8 sm:px-10 py-3.5 border border-white/80 text-white text-[12px] font-semibold uppercase tracking-[2px] rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
        >
          View Full Menu
        </motion.a>
      </div>

      {/* ── Rotating GET IN TOUCH badge ── (hidden on small screens) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
        className="hidden xl:block absolute right-14 top-1/2 -translate-y-1/2 z-10"
      >
        <div className="relative w-32 h-32">
          <svg className="animate-spin-slow w-full h-full" viewBox="0 0 200 200">
            <defs>
              <path
                id="heroCircle"
                d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
              />
            </defs>
            <text fill="white" fontSize="14.5" fontWeight="600" letterSpacing="7">
              <textPath href="#heroCircle">GET IN TOUCH • GET IN TOUCH •</textPath>
            </text>
            <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors cursor-pointer">
              <ArrowUpRight className="text-white" size={22} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Torn paper bottom edge ── */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 bg-white z-10 pointer-events-none"
        style={{
          clipPath: tearPath,
        }}
      />
    </section>
  );
}
