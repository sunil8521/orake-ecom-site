"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { titleFont, textFont } from "@/lib/fonts";


export default function Hero() {
	return (
		<section className="relative w-full min-h-[50vh] lg:min-h-[65vh] flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] overflow-hidden">
			{/* Decorative bg elements */}
			<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-black">
				<motion.img
					src="/products_hero_bg.png"
					alt="Products"
					initial={{ scale: 1.1 }}
					animate={{ scale: 1 }}
					transition={{ duration: 5, ease: "easeOut" }}
					className="w-full h-full object-cover object-center lg:object-[center_18%] opacity-100"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-[#15161b]/90 md:from-m[#15161b] via-[#15161b]/40 md:via-[#15161b]/80 to-transparent w-[85%] md:w-1/2" />
				<div className="absolute inset-0 bg-gradient-to-t from-[#15161b]/60 md:from-[#15161b] via-transparent md:via-[#15161b]/10 to-transparent" />
			</div>

			<div className="relative max-w-6xl mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={	{ duration: 0.6 }}
				>

					<h1 className={`${titleFont.className} text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.95] tracking-wide text-white`}>
						THE
						<span className="text-[#de3e4f]"> GEAR.</span>
					</h1>
					<p className={`${textFont.className} text-gray-300 text-sm md:text-base tracking-[0.15em] uppercase max-w-lg mx-auto mt-6`}>
						Fuel your grind. Engineered for performance. No crash. No compromise.
					</p>
				</motion.div>
			</div>
		</section>
	);
}