
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
// Modern About Herosection with split layout, animated highlight, and bubbles

export default function Herosection() {
	const aboutImages = ["/can1.png"];
	const fadedWords = ["HYDRATE", "INSPIRE"];
	const [imgIdx, setImgIdx] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setImgIdx((prev) => (prev + 1) % aboutImages.length);
		}, 2500);
		return () => clearInterval(interval);
	}, [aboutImages.length]);

	return (
		   <section
			   className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden overflow-y-hidden bg-gradient-to-br from-[#ce777b] via-[#fff6f6] to-[#fff] dark:from-[#ce777b] dark:via-[#ff92aa] dark:to-[#ea526b] transition-colors duration-700"
		   >
			{/* Split layout */}
			   <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 py-32 gap-24">
				{/* Left: Animated text block */}
				   <div className="flex-1 flex flex-col items-start justify-center relative pl-2 md:pl-12">
					   <h1 className="text-6xl md:text-8xl font-black text-[#a85a67] dark:text-[#f6efe2] mb-8 leading-tight tracking-tight drop-shadow-xl">
						   About <span className="text-[#ce777b] dark:text-[#a85a67]">Us</span>
					   </h1>
					   <p className="max-w-2xl text-2xl md:text-3xl text-[#6e3c44] dark:text-[#f6efe2] mb-10 font-medium">
						   Experience hydration that feels real.<br/>
						   <span className="text-[#a85a67] dark:text-[#ce777b] font-bold">Premium bottles</span> designed for your everyday life.<br/>
						   <span className="italic text-[#ce777b] dark:text-[#a85a67]">Elegant, practical, and sustainable</span>—just like you.
					   </p>
					   <div className="flex gap-8 mt-2">
						   <a
							   href="#products"
							   className="px-6 py-2 rounded-full bg-[#a85a67] text-white font-bold shadow-md hover:bg-[#ce777b] hover:scale-105 transition-all duration-200 text-base border-2 border-white/40"
						   >
							   Explore Products
						   </a>
						   <a
							   href="#contact"
							   className="px-6 py-2 rounded-full border-2 border-[#a85a67] text-[#a85a67] dark:text-[#f6efe2] font-bold hover:bg-[#ce777b]/10 dark:hover:bg-[#a85a67]/60 transition-all duration-200 text-base shadow-md"
						   >
							   Contact Us
						   </a>
					   </div>
				   </div>
				{/* Right: Floating bottle image with glow and bubbles */}
				   <div className="flex-1 flex items-center justify-center relative min-h-100">
					   {/* Glass reflection effect */}
					   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90rem] h-[90rem] rounded-full bg-gradient-to-br from-[#fff] via-[#ce777b33] to-[#a85a6733] opacity-45 blur-2xl" />
					   {/* Shadow under bottle */}
					   <div className="absolute left-1/2 bottom-20 -translate-x-1/2 w-[54rem] h-32 bg-black/20 rounded-full blur-2xl opacity-70 z-10" />
					   {aboutImages.map((src, idx) => (
						   <Image
							   key={src}
							   src={src}
							   alt="about bottle"
							   width={2000}
							   height={2000}
							   className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] object-contain transition-opacity duration-700 drop-shadow-2xl ${imgIdx === idx ? 'opacity-100 scale-115' : 'opacity-0 scale-95'}`}
							   priority={idx === 0}
						   />
					   ))}
					   {/* Subtle glass shine overlay */}
					   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[12rem] bg-white/40 rounded-full blur-2xl opacity-40 rotate-12 z-20" />
				   </div>
			</div>

			{/* Large faded background text, behind everything */}
			   <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
				   <span className="text-[min(19vw,140px)] font-black uppercase tracking-widest opacity-20 drop-shadow-2xl animate-pulse-slow" style={{ color: '#ffffff' }}>
					   {fadedWords[imgIdx]}
				   </span>
			   </div>

			{/* Custom animations */}
			   <style jsx>{`
				   @keyframes highlight-bar {
					   0%, 100% { box-shadow: 2px 0 0 0 #ce777b; }
					   50% { box-shadow: 0 0 32px 8px #ffffffcc; }
				   }
				   .animate-highlight-bar { animation: highlight-bar 3.5s ease-in-out infinite; }
				   @keyframes glow {
					   0%, 100% { opacity: 0.3; }
					   50% { opacity: 0.5; }
				   }
				   .animate-glow { animation: glow 4s ease-in-out infinite; }
				   @keyframes pulse-slow {
					   0%, 100% { opacity: 0.10; }
					   50% { opacity: 0.18; }
				   }
				   .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
			   `}</style>
		</section>
	);
}
