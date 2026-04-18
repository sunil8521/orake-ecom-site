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
		<section className="bg-[#1f1f1f] py-10 md:py-16 px-4 md:px-8 my-4 md:my-8 relative">
			<div className="max-w-5xl mx-auto bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 relative text-center shadow-2xl overflow-hidden min-h-[300px] md:min-h-[350px]">
				{/* Background cheer icon or graphic */}
				<div className="absolute inset-x-0 bottom-10 top-10 flex justify-between px-8 md:px-16 pointer-events-none opacity-[0.03]">
					 <img src="https://placehold.co/300x300/000000/000000?text=Cheers" alt="cheers" className="object-contain hidden md:block" />
					 <img src="https://placehold.co/300x300/000000/000000?text=Cheers" alt="cheers" className="object-contain transform scale-x-[-1] hidden md:block" />
				</div>

				<span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-3 md:mb-4 block mt-2 md:mt-4">Testimonials</span>
				<h2 className="text-2xl md:text-4xl font-serif mb-6 md:mb-10">What People Say</h2>
    
				<div className="flex justify-between items-center relative z-10 px-0 md:px-0">
					<button onClick={prev} className="px-3 md:px-5 py-1.5 md:py-2 border border-black rounded-4xl hover:bg-gray-50 transition bg-white shadow-sm flex items-center justify-center shrink-0 z-20">
						<ArrowLeft size={12} className="md:hidden text-black" />
						<ArrowLeft size={14} className="hidden md:block text-black" />
					</button>

					<div className="flex-1 max-w-2xl mx-auto transition-opacity duration-300 ease-in-out px-2 md:px-4">
						<div className="flex justify-center items-center gap-4 md:gap-6 mb-4 md:mb-6">
							<img src={t.av1} alt="Face 1" className="w-8 h-8 md:w-10 md:h-10 rounded-full grayscale opacity-40 hover:opacity-100 transition duration-300 object-cover" />
							<img src={t.av2} alt={t.name} className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-white shadow-xl object-cover" />
							<img src={t.av3} alt="Face 3" className="w-8 h-8 md:w-10 md:h-10 rounded-full grayscale opacity-40 hover:opacity-100 transition duration-300 object-cover" />
						</div>
            
						<h4 className="font-bold text-base md:text-lg mb-1">{t.name}</h4>
						<p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 md:mb-6 font-semibold">{t.role}</p>
						<p className="text-sm md:text-xl italic text-gray-800 font-serif leading-relaxed px-2 md:px-4">
							&ldquo;{t.quote}&rdquo;
						</p>
					</div>

					<button onClick={next} className="px-3 md:px-5 py-1.5 md:py-2 border border-black rounded-4xl hover:bg-gray-50 transition bg-white shadow-sm flex items-center justify-center shrink-0 z-20">
						<ArrowRight size={12} className="md:hidden text-black" />
						<ArrowRight size={14} className="hidden md:block text-black" />
					</button>
				</div>
			</div>
		</section>
	);
}