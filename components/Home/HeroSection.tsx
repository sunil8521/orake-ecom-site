"use client";

import { useEffect, useState } from "react";
import { Anton, Oswald } from "next/font/google";
import { motion } from "framer-motion";

const headingFont = Anton({ subsets: ["latin"], weight: "400" });
const bodyFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const heroImages = [
  "https://images.unsplash.com/photo-1700893417216-44e85c0a77d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1700893417216-47933d90bde8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1700893417226-e48266b94b48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -90, y: 32, rotate: -4, scale: 0.94 },
  show: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
};

const textVariants = {
  hidden: { opacity: 0, x: 80, y: 18 },
  show: { opacity: 1, x: 0, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function HeroSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length);
    }, 2000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-linear-to-br from-[#2b0a14] via-[#3a0f1d] to-[#4a1024] px-5 py-10 sm:px-10 md:min-h-[104vh] md:py-12 lg:px-16">
      

      <motion.div
        className="relative mx-auto grid w-full max-w-7xl items-center gap-20 pt-7 md:gap-24 md:pt-16 lg:grid-cols-[1.24fr_0.9fr] lg:gap-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
      >
        <motion.div className="relative" variants={imageVariants} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <div className="relative aspect-5/4 w-full overflow-hidden rounded-[2.2rem] border-[6px] border-[#f6efe2] bg-[#6d2a38] shadow-[0_26px_50px_rgba(0,0,0,0.32)]">
            {heroImages.map((image, index) => (
              <div
                key={image}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform transition-[opacity,transform,filter] duration-1400 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  backgroundImage: `url(${image})`,
                  opacity: index === activeImageIndex ? 1 : 0,
                  filter: index === activeImageIndex ? "blur(0px)" : "blur(6px)",
                  transform:
                    index === activeImageIndex
                      ? "perspective(1200px) rotateY(0deg) translate3d(0,0,0) scale(1)"
                      : index < activeImageIndex || (activeImageIndex === 0 && index === heroImages.length - 1)
                        ? "perspective(1200px) rotateY(-24deg) translate3d(-56px,10px,-120px) scale(1.08)"
                        : "perspective(1200px) rotateY(24deg) translate3d(56px,-10px,-120px) scale(1.08)",
                  backfaceVisibility: "hidden",
                }}
              />
            ))}

            <div className="absolute left-6 top-4 rounded-md bg-[#2b0a14] px-3 py-2 text-white shadow-lg">
              <p className="text-[11px] uppercase tracking-wide text-[#d4a64a]">As seen on</p>
              <p className="text-[29px] font-black leading-[0.9] text-[#f6efe2]">SHARK</p>
              <p className="text-[29px] font-black leading-[0.9] text-[#f6efe2]">TANK</p>
              <p className="text-[29px] font-black leading-[0.9] text-[#d4a64a]">INDIA</p>
              <p className="text-[12px] font-bold leading-tight text-[#f2d7a0]">SEASON 5</p>
            </div>

          </div>

          <div className="absolute -right-8 top-3 z-10 rotate-19 rounded-full border-2 border-[#f6efe2] bg-[#4a1024] px-4 py-2 text-[#f6efe2] shadow-md">
            <p className={`${bodyFont.className} whitespace-nowrap text-lg font-semibold tracking-wide`}>For every Mood</p>
          </div>

          <div className="absolute -right-5 bottom-[26%] z-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#f6efe2] bg-[#7a1e3a] text-[#f6efe2] shadow-lg">
            <p className={`${bodyFont.className} text-center text-xl font-semibold leading-[0.9]`}>
              Lets
              <br />
              Go!
            </p>
          </div>

          <div className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-2xl bg-[#7a1e3a] px-10 py-2 shadow-lg">
            <p className="text-4xl font-black uppercase tracking-wider text-[#f6efe2]">3SISTERS</p>
          </div>
        </motion.div>

        <motion.div
          className="text-[#fff7ea]"
          variants={textVariants}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          whileInView="show"
          initial="hidden"
          viewport={{ once: false, amount: 0.35 }}
        >
          <h1 className={`${headingFont.className} max-w-[13ch] text-[clamp(2.25rem,6.4vw,5.35rem)] uppercase leading-[0.92] tracking-[0.02em] text-[#fff7ea]`}>
            Premium Non Alcoholic Drinks
          </h1>

          <p className={`${bodyFont.className} mt-8 max-w-[26ch] text-[clamp(1.32rem,2.35vw,2.55rem)] font-semibold leading-[1.18] text-[#f6e3bf]`}>
            Crafted for all your different moods and occasions. Savor the refreshing taste and let happiness flow.
          </p>

          <motion.button
            className={`${bodyFont.className} mt-8 rounded-full bg-[#f6efe2] px-7 py-2 text-[1.85rem] font-medium leading-none text-[#3a0f1d] transition hover:bg-[#fff7ea]`}
            variants={buttonVariants}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Shop Now
          </motion.button>
        </motion.div>
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-18 w-full">
        <svg className="h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <g>
            <path
              d="M0 0 C60 0 60 38 120 38 C180 38 180 0 240 0 C300 0 300 38 360 38 C420 38 420 0 480 0 C540 0 540 38 600 38 C660 38 660 0 720 0 C780 0 780 38 840 38 C900 38 900 0 960 0 C1020 0 1020 38 1080 38 C1140 38 1140 0 1200 0 C1260 0 1260 38 1320 38 C1380 38 1380 0 1440 0 L1440 120 L0 120 Z"
              fill="#ffffff"
            />
            <path
              transform="translate(1440 0)"
              d="M0 0 C60 0 60 38 120 38 C180 38 180 0 240 0 C300 0 300 38 360 38 C420 38 420 0 480 0 C540 0 540 38 600 38 C660 38 660 0 720 0 C780 0 780 38 840 38 C900 38 900 0 960 0 C1020 0 1020 38 1080 38 C1140 38 1140 0 1200 0 C1260 0 1260 38 1320 38 C1380 38 1380 0 1440 0 L1440 120 L0 120 Z"
              fill="#ffffff"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-1440 0"
              dur="12s"
              repeatCount="indefinite"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}
