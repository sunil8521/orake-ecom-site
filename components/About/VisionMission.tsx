"use client";
import { motion } from "framer-motion";
import { titleFont, textFont } from "@/lib/fonts";

export default function VisionMission() {
	return (
		<section className="relative bg-[#e8e8e9] overflow-hidden py-28 md:py-40">
			{/* Subtle grid background */}
			<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

			{/* Accent glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#de3e4f] blur-[250px] opacity-[0.04] pointer-events-none rounded-full" />

			<div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">

				{/* ─────── Section Label ─────── */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, margin: "-80px" }}
					transition={{ duration: 0.6 }}
					className="text-center mb-20 md:mb-28"
				>
					<span className={`${textFont.className} text-[#de3e4f] text-xs sm:text-sm tracking-[0.4em] uppercase font-bold`}>
						Why We Exist
					</span>
				</motion.div>

				{/* ─────── Vision Block ─────── */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, margin: "-80px" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="mb-24 md:mb-36"
				>
					<div className="relative">
						<span className={`${titleFont.className} absolute -top-8 md:-top-14 left-0 text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem] uppercase leading-none tracking-widest text-black/[0.02] select-none pointer-events-none`}>
							Vision
						</span>

						<div className="relative z-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
							{/* Left label */}
							<div className="shrink-0 flex items-center gap-4">
								<div className="w-12 h-[2px] bg-[#de3e4f]" />
								<h3 className={`${titleFont.className} text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide text-gray-900`}>
									Our <span className="text-[#de3e4f]">Vision</span>
								</h3>
							</div>

							{/* Right content */}
							<p className={`${textFont.className} text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed font-light max-w-3xl`}>
								To recreate the human relationship with Soda — from <span className="text-gray-900 font-medium">guilt to glory</span>, from only calories to a <span className="text-gray-900 font-medium">living culture</span> of craft-freed, growth-freed refreshment.
							</p>
						</div>
					</div>
				</motion.div>

				{/* ─────── Divider ─────── */}
				<div className="flex items-center gap-6 mb-24 md:mb-36">
					<div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
					<div className="w-2 h-2 bg-[#de3e4f] rotate-45" />
					<div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
				</div>

				{/* ─────── Mission Block ─────── */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, margin: "-80px" }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<div className="relative">
						<span className={`${titleFont.className} absolute -top-8 md:-top-14 right-0 text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] uppercase leading-none tracking-widest text-black/[0.02] select-none pointer-events-none`}>
							Mission
						</span>

						<div className="relative z-10 flex flex-col lg:flex-row-reverse items-start gap-8 lg:gap-16">
							{/* Right label */}
							<div className="shrink-0 flex items-center gap-4">
								<h3 className={`${titleFont.className} text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide text-gray-900`}>
									Our <span className="text-[#de3e4f]">Mission</span>
								</h3>
								<div className="w-12 h-[2px] bg-[#de3e4f]" />
							</div>

							{/* Left content */}
							<p className={`${textFont.className} text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed font-light max-w-3xl`}>
								We put <span className="text-gray-900 font-medium">trillions of gut-friendly</span> fiber cultures inside a Soda so deliciously fizzy, every body craves it — good body cleansers in every sip. <span className="text-[#de3e4f] font-semibold">No fake wellness.</span> Real. That&apos;s how it is.
							</p>
						</div>
					</div>
				</motion.div>

				{/* ─────── Bottom accent line ─────── */}
				<motion.div
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: false }}
					transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
					className="mt-24 md:mt-36 h-[2px] bg-gradient-to-r from-transparent via-[#de3e4f]/30 to-transparent origin-center"
				/>
			</div>
		</section>
	);
}
