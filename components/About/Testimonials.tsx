"use client";
import { motion } from "framer-motion";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Data Array is now highly scalable - you can add an unlimited number of Cans here!
const testimonials = [
  {
    text: "I've never tasted a drink so fresh and natural. The mango flavor is my absolute favorite—it’s like a burst of fruit!",
    author: "- Emily R.",
    colors: ["#f4d169", "#edbf45", "#c2911b"], // Mango
    textColor: "text-[#15161b]",
    rotation: "-rotate-[10deg]",
  },
  {
    text: "It's my daily pick-me-up. I love that it's delicious and made with real ingredients. The perfect alternative to soda.",
    author: "- Jordan M.",
    colors: ["#ff6b7e", "#e84a5f", "#c22a3e"], // Crimson
    textColor: "text-white",
    rotation: "rotate-[3deg]",
  },
  {
    text: "The perfect balance of natural sweetness. I’ve cut out artificial ingredients, and this has been a total game-changer!",
    author: "- Carlos T.",
    colors: ["#4a7fff", "#294c9e", "#1b3473"], // Deep Blue
    textColor: "text-white",
    rotation: "rotate-[10deg]",
  },
  {
    text: "My absolute go-to after an intense workout. The flavor burst is incredibly refreshing without any nasty syrups.",
    author: "- Mark D.",
    colors: ["#6ae68e", "#3dbd63", "#208a3f"], // Lime Green
    textColor: "text-[#15161b]",
    rotation: "-rotate-[5deg]",
  }
];

// Flawless pure Vector Outline Can Component WITH embedded HTML via foreignObject
const SodaCanSVG = ({ colors, t }: { colors: string[], t: any }) => (
  // Drop shadow creates the overall 3D volume
  <svg viewBox="0 0 501.551 501.551" className="relative w-full h-full z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]">
    <defs>
      <linearGradient id={`grad-${colors[0].replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={colors[0]} />
        <stop offset="50%" stopColor={colors[1]} />
        <stop offset="100%" stopColor={colors[2]} />
      </linearGradient>
    </defs>

    <g>
      <rect x="98.22" y="99.265" fill={`url(#grad-${colors[0].replace('#', '')})`} width="305.11" height="350.041" />

      {/* EMBEDDED TEXT: SCALED UP MASSIVELY FOR READABILITY */}
      <foreignObject x="98" y="105" width="305" height="340">
        <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex flex-col items-center justify-center p-4 text-center pointer-events-none">
          <div className="w-full border-y-[3px] border-black/10 py-6 px-1 flex flex-col items-center justify-center gap-5">
            <p className={`${titleFont.className} text-[2.2rem] tracking-[0.25em] uppercase opacity-80 ${t.textColor} leading-none`}>
              Review
            </p>
            <p className={`${textFont.className} ${t.textColor} text-[1.25rem] md:text-[1.4rem] font-medium italic leading-[1.4] drop-shadow-sm`}>
              "{t.text}"
            </p>
            <p className={`${titleFont.className} ${t.textColor} text-[1.8rem] uppercase tracking-widest drop-shadow-md leading-none mt-2`}>
              {t.author}
            </p>
          </div>
        </div>
      </foreignObject>

      {/* TOP RIM */}
      <path fill="#a6a6a6" d="M375.118,0H126.433c-6.269,0-11.494,5.224-11.494,11.494s5.224,11.494,11.494,11.494h248.686 c6.269,0,11.494-5.224,11.494-11.494S381.388,0,375.118,0z" />
      <polygon fill="#dcdce0" points="375.118,39.706 367.804,24.033 133.747,24.033 126.433,39.706 98.22,99.265 403.331,99.265 " />
      <path fill="#CDD6E0" d="M375.118,39.706L375.118,39.706H126.433l0,0l7.314-15.673h234.057L375.118,39.706z" />

      {/* BOTTOM RIM - Darkened cleanly so it DOES NOT bleach into the white background! */}
      <polygon fill="#c4c5cc" points="98.22,449.306 119.118,501.551 382.433,501.551 403.331,449.306 " />
      {/* Bottom base detail stroke to force it to show up on white backgrounds */}
      <polygon fill="#a3a4ab" points="119.118,495 382.433,495 382.433,501.551 119.118,501.551" />
    </g>
  </svg>
);

const ReviewCan = ({ t, idx }: { t: any; idx: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, margin: "0px" }}
    transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
    className={`flex-shrink-0 snap-center transition-all duration-700 hover:scale-[1.08] hover:-translate-y-4 hover:z-50 ${t.rotation}`}
  >
    {/* MASSIVELY SCALED UP CANS (Increased dimension for high impact readability) */}
    <div className="relative w-[260px] h-[370px] sm:w-[320px] sm:h-[450px] md:w-[420px] md:h-[580px]">

      <SodaCanSVG colors={t.colors} t={t} />

      {/* Explicit floor HARD shadow under the can to firmly anchor it to the background */}
      <div className="absolute inset-x-[15%] bottom-[2px] h-[10px] bg-black/40 blur-[5px] rounded-[100%] z-[-1]" />
      <div className="absolute inset-x-[5%] -bottom-[10px] h-[25px] bg-black/15 blur-[15px] rounded-[100%] z-[-2]" />
    </div>
  </motion.div>
);

export default function Testimonials() {
  return (
    // Reduced heights significantly: 'py-12 md:py-16' instead of 'py-24'
    <section id="testimonials" className="relative w-full bg-[#f8f8fa] py-16 md:py-20 overflow-hidden flex flex-col items-center">

      <div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Scaled-down header margins to tighten section Height */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-10 z-30 drop-shadow-sm w-full relative px-4"
        >
          <h2 className={`${titleFont.className} text-[clamp(2.5rem,6vw,4rem)] uppercase leading-none text-[#15161b]`}>
            Stories from <span className="text-[#c25b5e]">The Source</span>
          </h2>
          <p className={`${textFont.className} text-gray-500 mt-2 text-[0.9rem] sm:text-base font-medium uppercase tracking-[0.2em]`}>
            Real reviews dropped like cans
          </p>
        </motion.div>

        {/*
          HORIZONTAL SCROLL GALLERY SYSTEM FOR UNLIMITED CANS 
          Fixes the 'how can I show more' scaling issue gracefully.
        */}
        <div className="relative w-full">

          {/* Universal Stage/Floor Shadow strictly beneath the Cans Row */}
          <div className="absolute bottom-[5%] left-0 w-full h-[150px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.08)_0%,transparent_80%)] blur-2xl pointer-events-none" />

          {/* Dynamic Map Track - Allows users to add 5, 20, or 100 cans! */}
          <div
            className="relative w-full flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-16 py-12 px-[10vw] md:px-[25vw] items-center [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {testimonials.map((t, idx) => (
              <ReviewCan key={idx} t={t} idx={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
