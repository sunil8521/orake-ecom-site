"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sansita, DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";

const headingFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function LoadOne() {
  const [progress, setProgress] = useState(0);

  // Fake loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fdfafb] overflow-hidden">
      {/* Background radial gradient for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,91,94,0.08)_0%,transparent_70%)]" />

      {/* Floating Ingredients */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[20%] w-16 h-16 opacity-60"
      >
        <Image src="/svgs/starwbery-svg.png" alt="" fill className="object-contain" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[25%] right-[20%] w-20 h-20 opacity-60"
      >
        <Image src="/svgs/flower-sb.png" alt="" fill className="object-contain" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[30%] right-[30%] w-12 h-12 opacity-50"
      >
        <Image src="/svgs/leaf-svg.png" alt="" fill className="object-contain" />
      </motion.div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Floating Can */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[120px] h-[280px] md:w-[150px] md:h-[350px] drop-shadow-2xl"
        >
          <Image
            src="/can1.png"
            alt="Orake Can"
            fill
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Loading Text & Progress */}
        <div className="mt-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${headingFont.className} text-4xl md:text-5xl uppercase tracking-widest text-[#15161b] mb-4`}
          >
            Orake
          </motion.div>

          <div className="flex items-center gap-4 w-64">
            <div className="h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#c25b5e] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>
            <span className={`${bodyFont.className} text-[#c25b5e] font-bold text-sm min-w-[40px]`}>
              {progress > 100 ? 100 : progress}%
            </span>
          </div>

          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`${bodyFont.className} text-xs tracking-[0.3em] uppercase text-gray-400 font-bold mt-4`}
          >
            Brewing Freshness...
          </motion.p>
        </div>
      </div>
    </div>
  );
}
