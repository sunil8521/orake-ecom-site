"use client";
import Image from "next/image";
import { Oswald } from "next/font/google";

const bodyFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function SmoothieShowcaseSection() {
  return (
    <div className={`relative w-full bg-white pb-32 ${bodyFont.className}`}>

      {/* DESKTOP SPLIT-SCREEN STICKY (Hidden on mobile) */}
      <div className="hidden md:block relative h-[200vh] w-full max-w-[1500px] mx-auto px-6
           pt-12">

        {/* Layer 1: Vanilla */}
        <div className="sticky top-[10vh] w-full h-[80vh] rounded-[40px] overflow-hidden flex shadow-2xl z-10 bg-[#f4f4f4]">

          {/* Vanilla Content (Left) */}
          <div className="flex-1 bg-[#cf797e] flex flex-col items-center justify-center p-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#c36a6e] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />

            <div className="relative z-10 w-full h-[85%] max-w-[450px] flex items-center justify-center mb-2 mt-4">
              <Image
                src="/can1.png"
                alt="Strawberry Vanilla"
                fill
                className="object-contain drop-shadow-[0_45px_35px_rgba(0,0,0,0.5)] scale-[1.2] md:scale-[1.35] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-[1.5] group-hover:-translate-y-8 group-hover:rotate-[3deg]"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center mt-auto">
              <h2 className="text-white text-4xl xl:text-5xl font-bold mb-2">Strawberry Vanilla</h2>
              <p className="text-white/90 text-lg xl:text-xl mb-6 font-normal">Prebiotic Fiber Drink</p>

              <button className="flex items-center justify-center gap-2 px-8 py-3 border border-white/70 rounded-full text-white font-semibold hover:bg-white hover:text-[#cf797e] transition-colors shadow-sm">
                View more <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Right Side Empty Placeholder */}
          <div className="flex-1 bg-[#f4f4f4] flex flex-col items-center justify-center p-8 relative overflow-hidden group border-l border-black/5">
            <div className="w-full h-[75%] mb-4 mt-6" />
            <div className="text-center opacity-20 blur-[2px] pointer-events-none mt-auto">
              <h2 className="text-[#dbba53] text-4xl xl:text-5xl font-bold mb-2">Ginger Lemon</h2>
              <p className="text-[#dbba53] text-lg xl:text-xl mb-6 font-normal">Zero Sugar</p>
            </div>
          </div>
        </div>

        {/* Layer 2: Lemon (Slides over Layer 1) */}
        <div className="sticky top-[10vh] w-full h-[80vh] rounded-[40px] overflow-hidden flex !shadow-none z-20 pointer-events-none">

          {/* Left Side Transparent Hole (Lets Vanilla show through) */}
          <div className="flex-1 bg-transparent pointer-events-none border-none shadow-none!"></div>

          {/* Lemon Content (Right) */}
          <div className="flex-1 bg-[#dbba53] flex flex-col items-center justify-center p-4 relative overflow-hidden group pointer-events-auto border-l border-white/20 !shadow-none rounded-r-[40px]">
            <div className="absolute inset-0 bg-[#d1a83b] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />

            <div className="relative z-10 w-full h-[85%] max-w-[450px] flex items-center justify-center mb-2 mt-4">
              <Image
                src="/can2.png"
                alt="Ginger Lemon"
                fill
                className="object-contain drop-shadow-[0_45px_35px_rgba(0,0,0,0.5)] scale-[1.2] md:scale-[1.35] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-[1.5] group-hover:-translate-y-8 group-hover:-rotate-[3deg]"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center mt-auto">
              <h2 className="text-white text-4xl xl:text-5xl font-bold mb-2">Ginger Lemon</h2>
              <p className="text-white/90 text-lg xl:text-xl mb-6 font-normal">Zero Sugar</p>

              <button className="flex items-center justify-center gap-2 px-8 py-3 border border-white/70 rounded-full text-white font-semibold hover:bg-white hover:text-[#dbba53] transition-colors shadow-sm">
                View more <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* MOBILE FULL-WIDTH STICKY (Hidden on desktop) */}
      <div className="md:hidden relative h-[200vh] w-full px-4 pt-12">

        {/* Layer 1 Mobile */}
        <div className="sticky top-[12vh] w-full h-[75vh] bg-[#cf797e] rounded-[40px] flex flex-col items-center justify-center p-6 shadow-2xl z-10 overflow-hidden group border-none">
          <div className="relative w-full h-[75%] max-w-[420px] flex items-center justify-center mb-2">
            <Image src="/can1.png" alt="Vanilla" fill className="object-contain drop-shadow-[0_40px_35px_rgba(0,0,0,0.5)] scale-[1.3] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-[1.45] group-hover:-translate-y-6 group-hover:rotate-[3deg]" />
          </div>
          <div className="text-center w-full flex flex-col items-center mt-auto">
            <h2 className="text-white text-4xl font-bold mb-2">Strawberry Vanilla</h2>
            <p className="text-white/90 text-lg mb-6 font-normal">Prebiotic Fiber Drink</p>
            <button className="flex items-center justify-center gap-2 px-8 py-3 border border-white/70 rounded-full text-white font-semibold hover:bg-white hover:text-[#cf797e] transition-colors shadow-sm w-fit">
              View more →
            </button>
          </div>
        </div>

        {/* Layer 2 Mobile */}
        <div className="sticky top-[12vh] w-full h-[75vh] bg-[#dbba53] rounded-[40px] flex flex-col items-center justify-center p-6 shadow-[-10px_-10px_30px_rgba(0,0,0,0.15)] z-20 overflow-hidden group border-none">
          <div className="relative w-full h-[75%] max-w-[420px] flex items-center justify-center mb-2">
            <Image src="/can2.png" alt="Lemon" fill className="object-contain drop-shadow-[0_40px_35px_rgba(0,0,0,0.5)] scale-[1.3] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-[1.45] group-hover:-translate-y-6 group-hover:-rotate-[3deg]" />
          </div>
          <div className="text-center w-full flex flex-col items-center mt-auto">
            <h2 className="text-white text-4xl font-bold mb-2">Ginger Lemon</h2>
            <p className="text-white/90 text-lg mb-6 font-normal">Zero Sugar</p>
            <button className="flex items-center justify-center gap-2 px-8 py-3 border border-white/70 rounded-full text-white font-semibold hover:bg-white hover:text-[#dbba53] transition-colors shadow-sm w-fit">
              View more →
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
