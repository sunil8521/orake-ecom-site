"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sansita, DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const headingFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function LoadTwo() {
  const [progress, setProgress] = useState(0);

  // Fake loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#15161b] overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,186,83,0.15)_0%,transparent_60%)]" />

      {/* Dynamic Spinning Rings / Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] border border-dashed border-white/10 rounded-full"
      />

      {/* Floating SVGs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] left-[25%] w-16 h-16 opacity-40"
      >
        <Image src="/svgs/lemon-svg.png" alt="" fill className="object-contain" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [360, 180, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] right-[25%] w-20 h-20 opacity-40"
      >
        <Image src="/svgs/ginger-svg.png" alt="" fill className="object-contain" />
      </motion.div>

      {/* Center Layout */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Pulsating Logo */}
        <motion.div
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[200px] h-[60px] md:w-[300px] md:h-[90px] mb-12"
        >
          <Image
            src="/orake-yellow-logo.svg"
            alt="Orake Logo"
            fill
            priority
            className="object-contain drop-shadow-[0_0_20px_rgba(219,186,83,0.4)]"
          />
        </motion.div>

        {/* Liquid Fill Progress Number */}
        <div className="relative mb-6">
          <span className={`${headingFont.className} text-6xl md:text-8xl font-black text-transparent [-webkit-text-stroke:2px_#333]`}>
            {progress}%
          </span>
          <motion.span 
            className={`${headingFont.className} absolute inset-0 text-6xl md:text-8xl font-black text-[#dbba53] overflow-hidden drop-shadow-[0_0_15px_rgba(219,186,83,0.6)]`}
            style={{ height: `${progress}%`, bottom: 0, top: 'auto', display: 'flex', alignItems: 'flex-end' }}
          >
            {progress}%
          </motion.span>
        </div>

        {/* Loading Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 bottom-0 bg-[#dbba53] rounded-full shadow-[0_0_10px_#dbba53]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          />
        </div>

        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`${bodyFont.className} text-[10px] tracking-[0.4em] uppercase text-gray-500 font-bold mt-6`}
        >
          Unleashing Energy
        </motion.p>
      </div>
    </div>
  );
}
