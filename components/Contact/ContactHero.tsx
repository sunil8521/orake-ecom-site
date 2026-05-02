"use client";
import { titleFont, textFont } from "@/lib/fonts";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[50vh] lg:min-h-[65vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-black">
        <motion.img
          src="/contact_hero_bg.png"
          alt="Contact Us"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "easeOut" }}
          className="w-full h-full object-cover object-center opacity-100"
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
          Got Questions?<br />
          <span className="text-[#de3e4f]">Let&apos;s Talk.</span>
        </h2>
        <p className={`${textFont.className} text-gray-300 text-sm md:text-base tracking-[0.15em] uppercase max-w-lg mx-auto mt-6`}>
          We&apos;re always here. Drop us a message and we&apos;ll get back faster than you can crack a can.
        </p>
      </motion.div>
    </section>
  );
}
