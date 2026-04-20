"use client";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "5-Star",   label: "Dining Experience" },
  { value: "60,000+", label: "Happy Guests" },
  { value: "99%",     label: "Guest Satisfaction" },
];

export default function AboutUs() {
  return (
    <section id="about-us" className="relative bg-white overflow-hidden py-20 md:py-28">

      {/* watermark */}
      {/* <p
        className="absolute top-8 right-0 font-playfair font-extrabold uppercase text-[#c25b5e] opacity-[0.5] leading-none pointer-events-none select-none
          text-[6rem] sm:text-[8rem] md:text-[11rem] lg:text-[13rem]"
      >
        About&nbsp;Us
      </p> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:gap-28">

          {/* ─────── Left: image ─────── */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center w-full lg:w-[42%] shrink-0"
          >

            {/* soft circle behind image */}
            <div className="absolute inset-0 rounded-full bg-[#c25b5e] scale-110 -z-10" />

            {/* portrait */}
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 xl:w-[340px]">
              <div className="rounded-[50%] overflow-hidden border-[6px] border-white shadow-2xl aspect-[4/5]">
                <img
                  src="./can1.png"
                  alt="Jenny Alexander — Owner"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ── Since badge ── */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-20 h-20 sm:w-24 sm:h-24 bg-red-600 flex flex-col items-center justify-center text-white shadow-xl"
                style={{
                  clipPath:
                    "polygon(50% 0%,61% 13%,78% 10%,82% 28%,98% 33%,95% 50%,100% 65%,86% 76%,84% 92%,67% 93%,55% 100%,40% 92%,22% 93%,18% 78%,3% 67%,6% 51%,0% 36%,13% 24%,20% 9%,38% 13%)",
                }}
              >
                <span className="font-dancing text-base sm:text-lg leading-none">Since</span>
                <span className="font-bold text-lg sm:text-xl leading-none">1990</span>
              </motion.div>

              {/* ── Sparkle decorations ── */}
              <div className="absolute -bottom-2 -left-6 sm:-left-10 text-yellow-400 animate-pulse">
                <Sparkles size={48} className="fill-red-600 opacity-90" />
              </div>
              <div className="absolute bottom-16 -left-4 sm:-left-8 text-yellow-400 animate-pulse delay-150">
                <Sparkles size={28} className="fill-red-400 opacity-70" />
              </div>
              <div className="absolute -bottom-4 left-8 text-yellow-400 animate-pulse delay-300">
                <Sparkles size={18} className="fill-red-300 opacity-60" />
              </div>
            </div>
          </motion.div>

          {/* ─────── Right: content ─────── */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[58%] text-center lg:text-left"
          >

            {/* diamonds + label */}
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
              <span className="text-red-600 text-sm flex gap-0.5">♦♦♦</span>
            </div>
            <p className="text-red-600 text-[11px] font-bold uppercase tracking-[4px] mb-4">
              About Us
            </p>

            {/* heading */}
            <h2 className="font-playfair font-bold text-gray-900 leading-[1.15] mb-5
              text-3xl sm:text-4xl md:text-[42px] lg:text-[40px] xl:text-[46px]">
              A Culinary Experience of
              <br className="hidden md:block" />
              <span className="text-red-600 italic"> Elegance and Excellence</span>
            </h2>

            {/* description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            {/* stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10 pb-10 border-b border-gray-100">
              {stats.map((s, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                  className="relative"
                >
                  <p className="font-playfair font-bold text-red-600 leading-none mb-1
                    text-2xl sm:text-3xl md:text-4xl">
                    {s.value}
                  </p>
                  <p className="text-gray-400 text-[11px] sm:text-xs uppercase tracking-wide font-medium">
                    {s.label}
                  </p>
                  {i < 2 && (
                    <div className="absolute top-1 bottom-1 right-0 w-px bg-gray-100" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* owner signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <p className="font-dancing text-gray-800 mb-1 text-3xl sm:text-4xl md:text-5xl">
                Jenny Alexander
              </p>
              <div className="flex items-center gap-2 justify-center lg:justify-start text-gray-500 text-sm">
                <span className="font-semibold">Jenny Alexander</span>
                <span className="w-1 h-1 rounded-full bg-red-600 inline-block" />
                <span>Owner</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
