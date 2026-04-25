import Link from "next/link";
import { Sansita, DM_Sans } from "next/font/google";
import { AlertTriangle, ArrowRight } from "lucide-react";
import Image from "next/image";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-[#15161b] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#de3e4f]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#dbba53]/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Dynamic Watermark */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ${titleFont.className} uppercase text-white opacity-[0.02] leading-none pointer-events-none select-none whitespace-nowrap text-[12rem] sm:text-[20rem] md:text-[30rem]`}>
        404
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        
        {/* Small badge */}
        <div className="inline-flex items-center justify-center gap-3 mb-8">
          <span className="h-[2px] w-8 bg-[#de3e4f]"></span>
          <span className={`${textFont.className} text-[#de3e4f] text-sm font-bold uppercase tracking-[0.25em] flex items-center gap-2`}>
            <AlertTriangle size={16} /> Error 404
          </span>
          <span className="h-[2px] w-8 bg-[#de3e4f]"></span>
        </div>

        {/* Main Title */}
        <h1 className={`${titleFont.className} text-6xl sm:text-8xl md:text-9xl text-white uppercase leading-[0.9] tracking-wide mb-6`}>
          Lost in the <br />
          <span className="text-[#de3e4f]">Void.</span>
        </h1>

        {/* Description */}
        <p className={`${textFont.className} text-gray-400 text-base sm:text-lg tracking-[0.1em] uppercase max-w-lg mx-auto mb-12`}>
          The page you're looking for has evaporated. It might have been moved, deleted, or it never existed in the first place.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link 
            href="/" 
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#de3e4f] text-white font-bold uppercase tracking-wider overflow-hidden rounded-full transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Back to Base <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link 
            href="/products" 
            className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/5 transition-colors"
          >
            Shop Energy
          </Link>
        </div>
      </div>
    </div>
  );
}
