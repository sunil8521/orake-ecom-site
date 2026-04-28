"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function BrandShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={ref} className="relative w-full bg-[#15161b] py-20 md:py-28 overflow-hidden">
      {/* Subtle glow effects */}
      <div className="absolute w-[500px] h-[500px] bg-[#cf797e]/10 rounded-full blur-[180px] -top-60 left-1/4 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-[#dbba53]/8 rounded-full blur-[150px] -bottom-40 right-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className={`${textFont.className} inline-block bg-white/5 border border-white/10 text-white/70 px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-5`}>
            The New Age Soda
          </div>
          <h2 className={`${titleFont.className} text-4xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-none`}>
            Zero Sugar. <span className="text-[#c25b5e]">Real Flavor.</span>
          </h2>
          <p className={`${textFont.className} text-gray-500 text-sm md:text-base tracking-[0.15em] uppercase mt-4 max-w-lg mx-auto`}>
            Prebiotic fiber drinks that taste incredible and support your gut health
          </p>
        </motion.div>

        {/* Two banner images with parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Strawberry Vanilla Banner */}
          <motion.div
            style={{ y: y1 }}
            className="group relative rounded-[2rem] overflow-hidden aspect-[16/9] shadow-2xl shadow-black/30"
          >
            <Image
              src="/Orake1.png"
              alt="Orake Strawberry Vanilla — Prebiotic Fiber Drink"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className={`${titleFont.className} text-white text-xl uppercase tracking-wide`}>Strawberry Vanilla</p>
              <p className={`${textFont.className} text-white/70 text-xs uppercase tracking-widest`}>250ML • Prebiotic Fiber</p>
            </div>
            {/* Corner badge */}
            <div className={`${textFont.className} absolute top-5 left-5 bg-[#c25b5e] text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg`}>
              Bestseller
            </div>
          </motion.div>

          {/* Ginger Lemon Banner */}
          <motion.div
            style={{ y: y2 }}
            className="group relative rounded-[2rem] overflow-hidden aspect-[16/9] shadow-2xl shadow-black/30"
          >
            <Image
              src="/Orake2.png"
              alt="Orake Ginger Lemon — Zero Sugar Prebiotic Drink"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className={`${titleFont.className} text-white text-xl uppercase tracking-wide`}>Ginger Lemon</p>
              <p className={`${textFont.className} text-white/70 text-xs uppercase tracking-widest`}>250ML • Zero Sugar</p>
            </div>
            {/* Corner badge */}
            <div className={`${textFont.className} absolute top-5 left-5 bg-[#dbba53] text-[#15161b] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg`}>
              New Drop
            </div>
          </motion.div>
        </div>

        {/* Minimal stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-14 md:mt-20"
        >
          {[
            { label: "Sugar", value: "0g" },
            { label: "Prebiotic Fiber", value: "5g" },
            { label: "Calories", value: "<25" },
            { label: "Flavors", value: "2" },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className={`${titleFont.className} text-3xl md:text-4xl text-white`}>{stat.value}</p>
              <p className={`${textFont.className} text-gray-500 text-[10px] uppercase tracking-[0.25em]`}>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
