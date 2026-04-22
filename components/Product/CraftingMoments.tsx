import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function CraftingMoments() {
	return (
		<section className="bg-[#15161b] text-white py-24 md:py-32 px-4 md:px-8 border-t border-white/10 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-full h-[500px] bg-[#de3e4f] opacity-5 pointer-events-none transform translate-y-1/2 rotate-12"></div>

			<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
        
				{/* Left Image */}
				<div className="w-full lg:w-1/2">
                    <div className="relative rounded-[3rem] overflow-hidden group shadow-[0_20px_50px_rgba(222,62,79,0.15)]">
					    <img
						    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop"
						    alt="The Science of Focus"
						    className="w-full object-cover h-[400px] sm:h-[500px] md:h-[600px] transform group-hover:scale-105 transition-transform duration-1000 ease-out filter contrast-125"
					    />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#15161b] via-[#15161b]/20 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 right-10">
                            <div className="h-1 w-20 bg-[#dbba53] mb-4"></div>
                            <p className={`${textFont.className} text-[#de3e4f] text-sm font-bold tracking-widest uppercase`}>Proprietary Blend</p>
                        </div>
                    </div>
				</div>

				{/* Right Content */}
				<div className="w-full lg:w-1/2 text-left pl-0 md:pl-8">
                    <p className={`${textFont.className} text-[#de3e4f] font-bold tracking-[0.3em] uppercase text-sm mb-6`}>
                        Inside The Can
                    </p>
					<h2 className={`${titleFont.className} text-[clamp(3.5rem,5vw,5rem)] mb-8 leading-[0.9] tracking-wide text-white uppercase`}>
						The Science of <br /> <span className="text-[#dbba53]">Focus.</span>
					</h2>
					<p className={`${textFont.className} text-gray-400 mb-6 leading-relaxed max-w-lg text-lg font-light`}>
						We didn&apos;t just mix caffeine and water. Orake is engineered from the ground up for elite cognitive performance. Clean energy without the jitters.
					</p>
					<p className={`${textFont.className} text-white/90 mb-10 text-lg max-w-lg border-l-2 border-[#de3e4f] pl-6`}>
						"The only formula that keeps me locked in for a 12-hour stream without the brutal crash at the end." <br/>
                        <span className="text-[#dbba53] text-sm font-bold uppercase tracking-widest mt-2 block">— Top 100 Global Creator</span>
					</p>

					<div className="flex flex-wrap gap-4">
						<span className={`${textFont.className} border border-[#de3e4f]/50 bg-[#de3e4f]/10 text-[#de3e4f] px-6 py-3 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-[#de3e4f] hover:text-white transition-colors cursor-pointer`}>Zero Sugar</span>
						<span className={`${textFont.className} border border-green-500/50 bg-green-500/10 text-green-400 px-6 py-3 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-green-500 hover:text-white transition-colors cursor-pointer`}>Nootropics</span>
						<span className={`${textFont.className} border border-white/20 bg-white/5 text-white px-6 py-3 rounded-full text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-[#15161b] transition-colors cursor-pointer`}>200mg Caffeine</span>
					</div>
				</div>
			</div>
		</section>
	);
}