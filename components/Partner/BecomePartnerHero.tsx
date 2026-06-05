"use client";

import { titleFont, textFont } from "@/lib/fonts";
import { motion } from "framer-motion";

export default function BecomePartnerHero() {
  return (
    <section className="relative w-full min-h-[45vh] lg:min-h-[55vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-black">
        <motion.img
          src="/becm.png"
          alt="Become a Partner"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="w-full h-full object-cover  object-[center_30%] lg:object-[center_26%] opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#15161b]/90 md:from-[#15161b] via-[#15161b]/40 md:via-[#15161b]/80 to-transparent w-[85%] md:w-1/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15161b]/60 md:from-[#15161b] via-transparent md:via-[#15161b]/10 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h2 className={`${titleFont.className} text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.95] tracking-wide text-white`}>
          Grow With<br />
          <span className="text-[#de3e4f]">Orake.</span>
        </h2>
        <p className={`${textFont.className} text-gray-300 text-sm md:text-base tracking-[0.15em] uppercase max-w-xl mx-auto mt-6`}>
          Establish or expand your beverage distributorship business. Become a partner and ride the prebiotic soda wave.
        </p>
      </motion.div>
    </section>
  );
}
