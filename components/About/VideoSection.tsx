"use client";
import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.play().catch(() => {});
    } else {
      v.pause();
      v.currentTime = 0;
    }
  }, [playing]);

  // Generate a totally deterministic organic & rugged torn edge path
  const tearPoints = Array.from({ length: 300 }).map((_, i) => {
    const x = 100 - (i * (100 / 299));
    const wave1 = Math.sin(i * 0.1) * 8;
    const wave2 = Math.sin(i * 0.4) * 4;
    const wave3 = Math.sin(i * 1.0) * 2;
    const pseudoRandom = ((i * i * 37) % 12) - 6; 
    let y = 35 + wave1 + wave2 + wave3 + pseudoRandom;
    y = Math.max(0, Math.min(100, y)); 
    return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
  }).join(', ');
  
  // Top tear is anchored to Top Left (0 0) and Top Right (100% 0)
  const topTearPath = `polygon(0 0, 100% 0, 100% 10%, ${tearPoints}, 0 10%)`;
  
  // Bottom tear is anchored to Bottom Left (0 100%) and Bottom Right (100% 100%)
  const bottomTearPath = `polygon(0 100%, 100% 100%, 100% 90%, ${tearPoints}, 0 90%)`;

  return (
    <section id="gallery" className="relative w-full -mt-[2px] z-20">
      {/* ── torn-paper top edge matching Hero bottom ── */}
      <div
        className="absolute -top-[2px] left-0 w-full h-10 sm:h-14 bg-white z-20 pointer-events-none"
        style={{
          clipPath: topTearPath,
        }}
      />

      {/* ── Background image ── */}
      <div className="relative w-full h-[520px] sm:h-[400px] md:h-[580px] lg:h-[620px]">
        <video
          ref={videoRef}
          src="/bottlevideo.mp4"
          playsInline
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* ── Content ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-5 sm:gap-7">
          {/* Label */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-red-500 text-sm flex gap-0.5">♦♦♦</span>
            <p className="text-white/80 text-[11px] sm:text-[13px] uppercase font-semibold tracking-[3px]">
              WATCH THE VIDEO
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair font-bold text-white leading-tight max-w-2xl
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Get a Glimpse of Our Dining Experience
          </motion.h2>

          {/* Play button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }}
            onClick={() => setPlaying((s) => !s)}
            className="group w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white/80 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 mt-1"
            aria-label="Play video"
          >
            {playing ? (
              <Pause size={22} className="text-white group-hover:scale-110 transition-transform duration-300" />
            ) : (
              <Play size={22} className="text-white group-hover:scale-110 transition-transform duration-300 ml-0.5" />
            )}
          </motion.button>
        </div>
      </div>

      {/* ── torn-paper bottom edge ── */}
      <div
        className="absolute -bottom-[2px] left-0 w-full h-10 sm:h-14 bg-white z-20 pointer-events-none"
        style={{
          clipPath: bottomTearPath,
        }}
      />
    </section>
  );
}
