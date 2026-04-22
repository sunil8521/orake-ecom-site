import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function FooterBanner() {
	return (
		<section className="relative h-[600px] md:h-[800px] flex items-center justify-center text-center text-white bg-[#15161b] overflow-hidden">
			{/* Background Image */}
			<div 
				className="absolute inset-0 bg-cover bg-center transform scale-105"
				style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop')" }}
			/>
            {/* Aggressive Dual Gradient */}
			<div className="absolute inset-0 bg-gradient-to-t from-[#15161b] via-[#15161b]/80 to-[#de3e4f]/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#15161b] via-transparent to-transparent opacity-80" />
      
			<div className="relative z-10 px-6 flex flex-col items-center max-w-4xl">
				<h4 className={`${textFont.className} text-[#de3e4f] text-sm md:text-base tracking-[0.4em] uppercase mb-8 md:mb-10 font-bold bg-[#15161b]/40 backdrop-blur-md px-6 py-2 rounded-full border border-[#de3e4f]/30`}>
					Join The Underground
				</h4>
				<h2 className={`${titleFont.className} text-[clamp(4rem,8vw,7rem)] mb-8 md:mb-12 drop-shadow-[0_10px_30px_rgba(222,62,79,0.5)] leading-[0.9] tracking-widest uppercase`}>
					NEVER CRASH <br/> <span className="text-white">AGAIN.</span>
				</h2>
				<p className={`${textFont.className} text-gray-300 mb-10 md:mb-16 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light`}>
					Sign up for sms drops to get first access to our limited-run flavors, secret pop-up shows, and exclusive merch. The revolution is televised.
				</p>
				<button className={`${textFont.className} bg-[#de3e4f] text-white px-12 py-5 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-[0_10px_30px_rgba(222,62,79,0.5)] active:scale-95 border-2 border-transparent hover:border-[#de3e4f]`}>
					SIGN UP FOR ALERTS
				</button>
			</div>
		</section>
	);
}
