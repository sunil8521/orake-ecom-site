"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Data Array is now highly scalable - you can add an unlimited number of reviews here!
const testimonials = [
  {
    text: "I've never tasted a drink so fresh and natural. The mango flavor is my absolute favorite—it's like a burst of fruit!",
    author: "Emily R.",
    role: "Fitness Enthusiast",
    rating: 5,
    accent: "#dbba53", // Gold/Lemon
    emoji: "🍋",
  },
  {
    text: "It's my daily pick-me-up. I love that it's delicious and made with real ingredients. The perfect alternative to soda.",
    author: "Jordan M.",
    role: "Health Coach",
    rating: 5,
    accent: "#cf797e", // Strawberry Pink
    emoji: "🍓",
  },
  {
    text: "The perfect balance of natural sweetness. I've cut out artificial ingredients, and this has been a total game-changer!",
    author: "Carlos T.",
    role: "Wellness Blogger",
    rating: 5,
    accent: "#8a9b87", // Sage Green
    emoji: "🌿",
  },
  {
    text: "My absolute go-to after an intense workout. The flavor burst is incredibly refreshing without any nasty syrups.",
    author: "Mark D.",
    role: "CrossFit Athlete",
    rating: 4,
    accent: "#de3e4f", // Orake Red
    emoji: "⚡",
  },
];

// Star rating component
const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 sm:w-5 sm:h-5 ${i < count ? "text-[#f4d169]" : "text-gray-200"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const t = testimonials[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.95 }),
  };

  return (
    // Reduced heights significantly: 'py-12 md:py-16' instead of 'py-24'
    <section id="testimonials" className={`relative w-full bg-[#faf9f6] py-16 sm:py-20 md:py-24 overflow-hidden ${textFont.className}`}>

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft radial glow */}
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#dbba53]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-[#cf797e]/8 rounded-full blur-[120px]" />
        {/* Decorative quote marks */}
        <div className="absolute top-[15%] left-[5%] sm:left-[10%] text-[12rem] sm:text-[18rem] font-serif text-black/[0.02] leading-none select-none">"</div>
        <div className="absolute bottom-[10%] right-[5%] sm:right-[10%] text-[12rem] sm:text-[18rem] font-serif text-black/[0.02] leading-none select-none rotate-180">"</div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] xl:max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8a9b87]/10 text-[#8a9b87] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
            What People Say
          </span>
          <h2 className={`${titleFont.className} text-[clamp(2.2rem,5.5vw,4rem)] uppercase leading-[1] text-[#15161b]`}>
            Stories from <span className="text-[#de3e4f]">The Source</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base font-medium tracking-wider uppercase">
            Real reviews from real sippers
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative flex flex-col items-center">

          {/* Main Card */}
          <div className="relative w-full max-w-[800px] min-h-[280px] sm:min-h-[300px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
                className="w-full"
              >
                <div className="relative bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100/80">

                  {/* Accent top bar */}
                  <div
                    className="absolute top-0 left-8 sm:left-10 right-8 sm:right-10 h-[3px] rounded-b-full transition-colors duration-500"
                    style={{ backgroundColor: t.accent }}
                  />

                  {/* Emoji flavor badge */}
                  <div
                    className="absolute -top-5 right-6 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xl sm:text-2xl shadow-lg transition-colors duration-500"
                    style={{ backgroundColor: `${t.accent}18` }}
                  >
                    {t.emoji}
                  </div>

                  {/* Stars */}
                  <Stars count={t.rating} />

                  {/* Quote */}
                  <p className={`mt-5 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium leading-[1.5] text-[#292a31] italic`}>
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author info */}
                  <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
                    {/* Avatar with accent ring */}
                    <div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-md transition-colors duration-500"
                      style={{ backgroundColor: t.accent }}
                    >
                      {t.author.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-bold text-[#15161b] text-base sm:text-lg leading-tight">{t.author}</p>
                      <p className="text-gray-400 text-xs sm:text-sm font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-8 sm:mt-10">

            {/* Prev Button */}
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-200 hover:border-[#de3e4f] flex items-center justify-center transition-all duration-300 hover:bg-[#de3e4f] active:scale-90"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2 sm:gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="relative"
                >
                  <div
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-400 ${
                      i === current ? "scale-100" : "bg-gray-200 hover:bg-gray-300 scale-100"
                    }`}
                    style={i === current ? { backgroundColor: t.accent } : {}}
                  />
                  {i === current && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute inset-[-3px] rounded-full border-2 transition-colors duration-500"
                      style={{ borderColor: t.accent }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-200 hover:border-[#de3e4f] flex items-center justify-center transition-all duration-300 hover:bg-[#de3e4f] active:scale-90"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Review count badge */}
          <p className="mt-6 text-xs sm:text-sm text-gray-300 font-medium tracking-wider uppercase">
            {current + 1} / {testimonials.length}
          </p>

        </div>
      </div>
    </section>
  );
}
