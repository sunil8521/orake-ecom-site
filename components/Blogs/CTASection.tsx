"use client";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#de3e4f]/50 to-transparent mb-12 sm:mb-16" />

        <h2
          className={`${titleFont.className} text-[clamp(3.5rem,6vw,5.5rem)] text-[#15161b] max-w-4xl leading-[0.9] tracking-wide mb-8 sm:mb-12 uppercase`}
        >
          Ready to set the pace? <br/>
          <span className="text-[#de3e4f]">Join the movement.</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            <button className={`${textFont.className} bg-[#de3e4f] text-white text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-black transition-all duration-300 shadow-[0_10px_20px_rgba(222,62,79,0.3)] hover:shadow-lg active:scale-95`}>
              Shop The Drop
            </button>
            <button className={`${textFont.className} bg-white text-[#15161b] border-2 border-[#15161b] text-lg font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-[#15161b] hover:text-white transition-all duration-300 active:scale-95`}>
              Follow The Culture
            </button>
          </div>
          
          <p className={`${textFont.className} text-gray-500 text-lg font-medium tracking-wide`}>
             Sign up to our list for <span className="text-[#de3e4f] font-bold">15% off</span> your first case.
          </p>
        </div>
        
        <div className="w-full h-[2px] bg-gradient-to-r from-[#15161b]/10 via-transparent to-transparent mt-16 sm:mt-24" />
      </div>

      {/* Abstract background shape */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#de3e4f] rounded-full blur-[150px] opacity-[0.05] pointer-events-none translate-x-1/4 translate-y-1/4"></div>
    </section>
  );
}
