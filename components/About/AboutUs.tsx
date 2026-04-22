"use client";
import { motion } from "framer-motion";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function AboutUs() {
	return (
		<section className="relative bg-[#e8e8e9] overflow-hidden py-24 md:py-40">
			<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
				<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

					{/* ─────── Left: Image ─────── */}
					<motion.div 
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="relative flex justify-center w-full lg:w-[45%] shrink-0 group"
					>
                        {/* Huge glow */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#de3e4f] blur-[100px] opacity-20 transition-all duration-700 group-hover:opacity-40 rounded-full" />

						<div className="relative w-full max-w-md scale-110 md:scale-[1.15] my-10 md:mt-16">
							<img
								src="/can1.png"
								alt="Orake Can in Lab"
								className="w-full h-auto object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.3)] transform -rotate-6 group-hover:rotate-0 transition-transform duration-700 ease-out"
							/>
                            {/* Floating Tech Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                                className="absolute -bottom-4 right-0 w-20 h-20 md:w-24 md:h-24 bg-[#15161b] rounded-full flex flex-col items-center justify-center text-white border-[3px] border-[#e8e8e9] shadow-2xl z-20 transform scale-75 md:scale-100"
                            >
                                <span className={`${titleFont.className} text-2xl md:text-3xl leading-none tracking-widest text-[#de3e4f]`}>0G</span>
                                <span className={`${textFont.className} text-[7px] md:text-[9px] font-bold uppercase tracking-[0.2em]`}>Sucralose</span>
                            </motion.div>
						</div>
					</motion.div>

					{/* ─────── Right: Content ─────── */}
					<motion.div 
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
						className="w-full lg:w-[55%] text-center lg:text-left pt-12 md:pt-0"
					>
						<p className={`${textFont.className} text-[#de3e4f] text-sm font-bold uppercase tracking-[0.4em] mb-4`}>
							The Lab
						</p>

						<h2 className={`${titleFont.className} text-gray-900 leading-[0.9] mb-8 text-[3rem] sm:text-[4rem] md:text-[5rem] uppercase tracking-wide`}>
							WE KILLED <br />
							<span className="text-[#de3e4f]">THE CRASH.</span>
						</h2>

						<div className={`${textFont.className} text-gray-600 space-y-6 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto lg:mx-0`}>
                            <p>
                                Every energy drink on the market was the same. Sugar spikes, artificial colors, and a massive crash at 3 PM. We were sick of it. 
                            </p>
                            <p>
                                So we locked ourselves in the lab and built Orake. Our mission was simple: engineer a high-voltage hydration system that uses real ingredients and massive doses of focus-enhancing nootropics.
                            </p>
                        </div>

						{/* Stats */}
						<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-black/10">
							<div className="text-left">
                                <p className={`${titleFont.className} text-4xl text-[#15161b] mb-1`}>100%</p>
                                <p className={`${textFont.className} text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em]`}>Vegan</p>
                            </div>
                            <div className="text-left">
                                <p className={`${titleFont.className} text-4xl text-[#15161b] mb-1`}>200MG</p>
                                <p className={`${textFont.className} text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em]`}>Clean Caffeine</p>
                            </div>
                            <div className="text-left hidden md:block">
                                <p className={`${titleFont.className} text-4xl text-[#15161b] mb-1`}>ZERO</p>
                                <p className={`${textFont.className} text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em]`}>Jitters</p>
                            </div>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
