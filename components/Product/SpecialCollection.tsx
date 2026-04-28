import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SpecialCollection() {
	return (
		<section className="py-16 md:py-32 px-4 md:px-8 bg-[#ce777b] text-white text-center relative overflow-hidden">
			<div className="max-w-6xl mx-auto relative z-10">
				<h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-12 md:mb-20 leading-snug px-2 text-white">
					Discover our special collection crafted for those<br className="hidden md:block" /> who appreciate exceptional taste.
				</h2>

				<div className="relative flex items-center justify-center my-16 md:my-32">
					{/* Faded Background Text */}
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
						<span className="text-[6rem] sm:text-[10rem] md:text-[22rem] font-serif text-gray-50 font-bold tracking-tighter select-none relative z-0">
							Antiquity
						</span>
					</div>

					<button className="z-20 px-3 md:px-5 py-1.5 md:py-2 border border-white rounded-4xl hover:bg-white/20 transition absolute left-0 md:left-12 bg-[#ce777b] flex items-center justify-center shadow-sm">
						<ArrowLeft size={12} className="md:hidden text-white" />
						<ArrowLeft size={14} className="hidden md:block text-white" />
					</button>

					<img
						src="/can2.png"
						alt="Antiquity"
						className="h-52 sm:h-72 md:h-[450px] object-contain relative z-10 transform rotate-18  drop-shadow-2xl mix-blend-multiply "
					/>

					<button className="z-20 px-3 md:px-5 py-1.5 md:py-2 border border-white rounded-4xl hover:bg-white/20 transition absolute right-0 md:right-12 bg-[#ce777b] flex items-center justify-center shadow-sm">
						<ArrowRight size={12} className="md:hidden text-white" />
						<ArrowRight size={14} className="hidden md:block text-white" />
					</button>
				</div>

				<div className="mt-10 md:mt-16 relative z-10">
					<h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 md:mb-6 text-white">Reserve Signature Edition</h3>
					<p className="text-white/80 text-sm max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed px-4">
						Smooth, refined, and meticulously crafted using select ingredients, this exclusive edition delivers depth, balance, and a lasting finish for truly elevated moments.
					</p>
					<button className="bg-white text-[#ce777b] px-8 md:px-10 py-3 md:py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition duration-300">
						EXPLORE COLLECTION
					</button>
				</div>
			</div>
		</section>
	);
}