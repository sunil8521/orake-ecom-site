"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testData = [
	{
		name: "Raihan Ahmed",
		role: "Private Event Host",
		quote: "An exceptional experience from start to finish. The quality of the bottles, attention to detail, and seamless delivery truly set this store apart. Every sip feels refined and thoughtfully crafted.",
		av1: "https://placehold.co/100x100/dddddd/555555?text=1",
		av2: "https://placehold.co/120x120/dddddd/555555?text=Raihan",
		av3: "https://placehold.co/100x100/dddddd/555555?text=3",
	},
	{
		name: "Sarah Jenkins",
		role: "Collector",
		quote: "The selection here is unparalleled. I was able to find rare editions that I've been searching for years. Delivery was prompt and perfectly packaged.",
		av1: "https://placehold.co/100x100/dddddd/555555?text=Raihan",
		av2: "https://placehold.co/120x120/dddddd/555555?text=Sarah",
		av3: "https://placehold.co/100x100/dddddd/555555?text=1",
	}
];

export default function Testimonials() {
	const [index, setIndex] = useState(0);

	const next = () => setIndex((i) => (i + 1) % testData.length);
	const prev = () => setIndex((i) => (i - 1 + testData.length) % testData.length);

	const t = testData[index];

	return (
		<section className="bg-[#ce777b] text-white py-12 md:py-20 px-4 md:px-8 my-6 relative">
			<div className="max-w-4xl mx-auto relative">
				{/* Decorative background image */}
				<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
					<img
						src="https://images.unsplash.com/photo-1636715084231-8fa2daea09d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="background"
						className="w-full h-full object-cover opacity-12 scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#ce777b]/60 via-[#ce777b]/40 to-transparent" />
				</div>

				<div className="relative bg-[#d59c9f] rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden">
					<span className="text-sm uppercase tracking-wider text-white/90 block mb-2">Testimonials</span>
					<h2 className="text-3xl md:text-4xl font-serif mb-6 text-white/95">What People Say</h2>

					<div className="flex items-center gap-4 md:gap-8">
						<button onClick={prev} className="p-2 md:p-3 rounded-full bg-white text-[#ce777b] shadow-sm hover:scale-105 transition">
							<ArrowLeft size={16} className="text-[#ce777b]" />
						</button>

						<div className="flex-1 text-center px-2 md:px-6">
							<div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
								<img src={t.av1} alt="avatar 1" className="w-12 h-12 md:w-14 md:h-14 rounded-full grayscale opacity-60 hover:opacity-100 transition object-cover border-2 border-white/30" />
								<img src={t.av2} alt={t.name} className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-xl object-cover" />
								<img src={t.av3} alt="avatar 3" className="w-12 h-12 md:w-14 md:h-14 rounded-full grayscale opacity-60 hover:opacity-100 transition object-cover border-2 border-white/30" />
							</div>
							<h4 className="font-bold text-lg md:text-xl mb-1 text-white">{t.name}</h4>
							<p className="text-xs uppercase tracking-wider text-white/90 mb-4 font-semibold">{t.role}</p>
							<blockquote className="text-base md:text-lg italic text-white/95 leading-relaxed">“{t.quote}”</blockquote>
						</div>

						<button onClick={next} className="p-2 md:p-3 rounded-full bg-white text-[#ce777b] shadow-sm hover:scale-105 transition">
							<ArrowRight size={16} className="text-[#ce777b]" />
						</button>
					</div>

					<div className="flex items-center justify-center gap-2 mt-6">
						{testData.map((_, i) => (
							<button key={i} onClick={() => setIndex(i)} className={`w-2.5 h-2.5 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/40'}`}></button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
	}