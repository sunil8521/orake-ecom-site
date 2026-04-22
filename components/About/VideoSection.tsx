"use client";
import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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

  return (
    <section className="relative w-full z-20 py-16 bg-[#15161b]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col mb-12">
        <p className={`${textFont.className} text-[#de3e4f] text-sm font-bold uppercase tracking-[0.4em] mb-4`}>
          The Culture
        </p>
        <h2 className={`${titleFont.className} text-[clamp(3rem,6vw,5rem)] text-white uppercase tracking-wide leading-none`}>
          HYPE <span className="text-gray-600">REEL</span>
        </h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto h-[400px] md:h-[600px] overflow-hidden sm:rounded-3xl border border-white/5 shadow-2xl">
        <video
          ref={videoRef}
          src="/bottlevideo.mp4"
          playsInline
          autoPlay
          muted
          loop
          className="w-full h-full object-cover filter contrast-125 saturate-110"
        />
        
        {/* Dark overlay & vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* ── Content ── */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Play button */}
            <button
                onClick={() => setPlaying((s) => !s)}
                className="group w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#de3e4f]/90 backdrop-blur flex items-center justify-center hover:bg-white hover:-translate-y-2 transition-all duration-300 shadow-[0_10px_40px_rgba(222,62,79,0.5)] active:scale-95"
                aria-label="Play video"
            >
                {playing ? (
                <Pause size={32} className="text-white group-hover:text-[#15161b] transition-colors duration-300" />
                ) : (
                <Play size={32} className="text-white group-hover:text-[#15161b] transition-colors duration-300 ml-1" />
                )}
            </button>
            <p className={`${textFont.className} text-white font-bold uppercase tracking-[0.3em] text-sm md:text-base`}>
              {playing ? "PAUSE ACTION" : "PLAY ACTION"}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
