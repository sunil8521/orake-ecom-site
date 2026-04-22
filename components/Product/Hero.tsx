import Image from "next/image";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Hero() {
	return (
		<div className="relative bg-[#15161b]">
            <style>{`
                @keyframes heroFloat {
                    0%, 100% { transform: translateY(0px) rotate(-12deg); }
                    50% { transform: translateY(-40px) rotate(-6deg); }
                }
                .animate-hero-float {
                    animation: heroFloat 6s ease-in-out infinite;
                }
            `}</style>
			<section className="relative bg-[#de3e4f] text-white pt-32 md:pt-48 pb-32 md:pb-40 px-4 md:px-8 flex flex-col justify-between z-10 w-full overflow-visible">
				
				{/* Aggressive Graphic Background */}
				<div className="absolute inset-0 bg-[#de3e4f] pointer-events-none z-0 overflow-hidden">
                   <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-black opacity-10 blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
                   <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white opacity-20 blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
                </div>

				<div className="relative z-10">
                    <p className={`${textFont.className} text-center text-white font-bold tracking-[0.4em] uppercase text-sm mb-4 drop-shadow-md`}>
                        Exclusive Drop
                    </p>
					<h1 className={`${titleFont.className} text-center text-[clamp(4.5rem,12vw,14rem)] leading-[0.85] tracking-widest text-[#15161b] opacity-95 mb-16 md:mb-24 px-2 md:px-4 uppercase mix-blend-overlay`}>
						THE FUEL.
					</h1>
				</div>

				<div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-end justify-between relative z-20 flex-1 pb-8 md:pb-16 gap-12 md:gap-0">
					{/* Left Stats */}
					<div className="flex gap-8 md:gap-12 mb-4 md:mb-0 order-2 md:order-1 pt-20 md:pt-0 pointer-events-auto">
						<div className="text-center md:text-left">
							<div className={`${titleFont.className} text-5xl md:text-7xl mb-1 text-white drop-shadow-lg`}>0G</div>
							<div className={`${textFont.className} text-xs md:text-sm text-[#15161b] uppercase tracking-[0.2em] font-bold`}>Sugar</div>
						</div>
						<div className="text-center md:text-left">
							<div className={`${titleFont.className} text-5xl md:text-7xl mb-1 text-white drop-shadow-lg`}>200</div>
							<div className={`${textFont.className} text-xs md:text-sm text-[#15161b] uppercase tracking-[0.2em] font-bold`}>MG Caffeine</div>
						</div>
					</div>

					{/* Center Image - Massive 3D Pop Out & Floating Animation */}
					<div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full pointer-events-auto order-1 md:order-2 z-30 flex justify-center group cursor-crosshair">
						<div className="relative w-full max-w-[500px] h-auto flex items-center justify-center translate-y-[28%] md:translate-y-[35%] scale-[1.8] sm:scale-[2.3] md:scale-[2.8]">
                            <div className="animate-hero-float transform group-hover:!animate-none transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-110 group-hover:rotate-6 group-hover:-translate-y-12">
                                <Image
                                    src="/can2.png"
                                    alt="Orake Energy Can"
                                    width={400}
                                    height={600}
                                    className="object-contain drop-shadow-[0_50px_50px_rgba(0,0,0,0.8)] group-hover:drop-shadow-[0_80px_60px_rgba(0,0,0,0.9)] filter contrast-125 saturate-150 transition-all duration-700"
                                    priority
                                />
                            </div>
						</div>
					</div>

					{/* Right Info */}
					<div className="max-w-sm text-center md:text-right flex flex-col items-center md:items-end mb-4 md:mb-0 order-3 pt-20 md:pt-0 pointer-events-auto">
						<p className={`${textFont.className} text-xl text-white mb-8 md:mb-10 leading-relaxed font-medium drop-shadow-md`}>
							Precision-engineered for gamers, athletes, and creatives. Masterful flavors, laser focus, and absolutely no crash.
						</p>
						<button className={`${textFont.className} bg-[#15161b] text-white px-12 py-5 rounded-full font-bold uppercase text-lg tracking-widest hover:bg-white hover:text-[#15161b] hover:-translate-y-2 transition-all duration-300 shadow-[0_20px_40px_rgba(21,22,27,0.5)] border-2 border-transparent hover:border-[#15161b] active:scale-95`}>
							SECURE YOURS
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}