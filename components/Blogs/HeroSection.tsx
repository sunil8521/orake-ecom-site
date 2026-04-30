"use client";

import { Sansita, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function HeroSection() {
  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#15161b]">
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/orake-blog-banner.png"
          alt="The Culture Blog Banner"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="w-full h-full object-cover object-center lg:object-[center_43%] opacity-100"

        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#15161b]/90 md:from-[#15161b] via-[#15161b]/40 md:via-[#15161b]/80 to-transparent w-[85%] md:w-1/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15161b]/60 md:from-[#15161b] via-transparent md:via-[#15161b]/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <h1 className={`${titleFont.className} text-white text-[clamp(4rem,10vw,8rem)] uppercase leading-[0.9] tracking-wide max-w-4xl mb-6`}>
          THE
          <br />
          <span className="text-[#de3e4f]">CULTURE.</span>
        </h1>

        <p className={`${textFont.className} text-xl sm:text-2xl text-gray-300 font-light max-w-2xl border-l-4 border-[#de3e4f] pl-4`}>
          Dive into the lifestyle. The latest drops, creator interviews, and everything fueling the next generation.
        </p>
      </div>
    </section>
  );
}
