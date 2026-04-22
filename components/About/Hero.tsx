"use client";
import { motion } from "framer-motion";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Hero() {
	return (
		<section className="relative w-full min-h-[90vh] flex flex-col justify-end pb-24 pt-32 px-4 md:px-8 bg-[#15161b] z-20">
			{/* Aggressive Graphic Background */}
			<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
				<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#de3e4f] rounded-full opacity-[0.03] blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white rounded-full opacity-[0.02] blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
			</div>

			<div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<p className={`${textFont.className} text-[#de3e4f] font-bold tracking-[0.4em] uppercase text-sm mb-6 drop-shadow-md`}>
						Our Origin
					</p>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
					className={`${titleFont.className} text-[clamp(4.5rem,14vw,16rem)] leading-[0.85] tracking-widest text-white uppercase mix-blend-overlay drop-shadow-2xl mb-8`}
				>
					THE <span className="text-[#de3e4f]">CULT.</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
					className={`${textFont.className} text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed`}
				>
					We didn't just build a drink. We engineered a frequency. No sugar. No crash. Pure raw performance.
				</motion.p>
			</div>
		</section>
	);
}
