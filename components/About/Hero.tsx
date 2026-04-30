"use client";
import { motion } from "framer-motion";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Hero() {
	return (
		<section className="relative w-full min-h-[50vh] lg:min-h-[65vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] overflow-hidden">
			{/* Aggressive Graphic Background */}
			<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-black">
				<motion.img
					src="/about_hero_bg.png"
					alt="About Us"
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 5, ease: "easeOut" }}
					className="w-full h-full object-cover object-center opacity-100"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-[#15161b]/90 md:from-[#15161b] via-[#15161b]/40 md:via-[#15161b]/80 to-transparent w-[85%] md:w-1/2" />
				<div className="absolute inset-0 bg-gradient-to-t from-[#15161b]/60 md:from-[#15161b] via-transparent md:via-[#15161b]/10 to-transparent" />
			</div>

			<div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
					className={`${titleFont.className} text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.95] tracking-wide text-white`}
				>
					THE <span className="text-[#de3e4f]">CULT.</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
					className={`${textFont.className} text-gray-300 text-sm md:text-base tracking-[0.15em] uppercase max-w-lg mx-auto mt-6`}
				>

					We didn't just build a drink. We engineered a frequency. No sugar. No crash. Pure raw performance.
				</motion.p>
			</div>
		</section>
	);
}
