import Image from "next/image";
import { DM_Sans } from "next/font/google";

const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function SmoothieShowcaseSection() {
  return (
    <div className={`relative w-full ${bodyFont.className}`}>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block relative h-[200vh] xl:h-[210vh] w-full overflow-clip">

        {/* Layer 1: Vanilla left + Placeholder right */}
        <div className="sticky top-[6vh] xl:top-[8vh] w-full h-[88vh] overflow-hidden flex z-10 bg-[#f4f4f4]">

          {/* Left — Strawberry Vanilla */}
          <div className="flex-1 bg-[#cf797e] flex flex-col items-center justify-center pt-10 p-6 relative overflow-hidden group">

            <div className="relative z-10 w-full h-[65%] max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] flex items-center justify-center">
              <Image
                src="/can1.png"
                alt="Strawberry Vanilla"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain drop-shadow-[0_45px_35px_rgba(0,0,0,0.5)] scale-[1.3] lg:scale-[1.35] xl:scale-[1.4] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-[1.4] lg:group-hover:scale-[1.45] group-hover:-translate-y-5"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center mt-auto pb-10">
              <h2 className="text-white text-4xl xl:text-5xl font-bold mb-2">Strawberry Vanilla</h2>
              <p className="text-white/90 text-lg xl:text-xl mb-5 font-normal">Prebiotic Fiber Drink</p>
              <button className="flex items-center justify-center gap-2 px-8 py-3 border border-white/70 rounded-full text-white font-semibold hover:bg-white hover:text-[#cf797e] transition-colors shadow-sm">
                View more <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          {/* Right — Blurred placeholder */}
          <div className="flex-1 bg-[#f4f4f4] flex flex-col items-center justify-center p-8 relative overflow-hidden border-l border-black/5">
            <div className="relative w-full h-[65%] max-w-[450px] flex items-center justify-center opacity-10 blur-[3px]">
              <Image src="/can2.png" alt="preview" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain scale-[1.2]" />
            </div>
            <div className="text-center opacity-20 blur-[2px] pointer-events-none mt-auto pb-10">
              <h2 className="text-[#dbba53] text-4xl xl:text-5xl font-bold mb-2">Ginger Lemon</h2>
              <p className="text-[#dbba53] text-lg xl:text-xl mb-5 font-normal">Zero Sugar</p>
            </div>
          </div>
        </div>

        {/* Layer 2: Transparent left + Ginger Lemon right */}
        <div className="sticky top-[6vh] xl:top-[8vh] w-full h-[88vh] overflow-hidden flex z-20 pointer-events-none">

          {/* Left — Transparent (Vanilla shows through) */}
          <div className="flex-1 bg-transparent pointer-events-none" />

          {/* Right — Ginger Lemon */}
          <div className="flex-1 bg-[#dbba53] flex flex-col items-center justify-center pt-10 p-6 relative overflow-hidden group pointer-events-auto">

            <div className="relative z-10 w-full h-[65%] max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] flex items-center justify-center">
              <Image
                src="/can2.png"
                alt="Ginger Lemon"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain drop-shadow-[0_45px_35px_rgba(0,0,0,0.5)] scale-[1.3] lg:scale-[1.35] xl:scale-[1.4] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-[1.4] lg:group-hover:scale-[1.45] group-hover:-translate-y-5"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center mt-auto pb-10">
              <h2 className="text-white text-4xl xl:text-5xl font-bold mb-2">Ginger Lemon</h2>
              <p className="text-white/90 text-lg xl:text-xl mb-5 font-normal">Zero Sugar</p>
              <button className="flex items-center justify-center gap-2 px-8 py-3 border border-white/70 rounded-full text-white font-semibold hover:bg-white hover:text-[#dbba53] transition-colors shadow-sm">
                View more <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ========== MOBILE — Full-width stacked sticky ========== */}
      <div className="md:hidden relative h-[190vh] w-full overflow-clip">

        {/* Layer 1 — Vanilla */}
        <div className="sticky top-0 w-full h-[100dvh] bg-[#cf797e] flex flex-col items-center justify-center p-4 z-10 overflow-hidden group">
          <div className="relative w-full h-[55%] max-w-[85vw] sm:max-w-[70vw] flex items-center justify-center">
            <Image src="/can1.png" alt="Vanilla" fill sizes="(max-width: 640px) 85vw, 70vw" className="object-contain drop-shadow-[0_40px_35px_rgba(0,0,0,0.5)] scale-[1.5] sm:scale-[1.45] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-[1.55] group-hover:-translate-y-4" />
          </div>
          <div className="text-center w-full flex flex-col items-center pb-6">
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-1">Strawberry Vanilla</h2>
            <p className="text-white/90 text-sm sm:text-base mb-3 font-normal">Prebiotic Fiber Drink</p>
            <button className="flex items-center justify-center gap-2 px-6 py-2.5 border border-white/70 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-[#cf797e] transition-colors shadow-sm w-fit">
              View more →
            </button>
          </div>
        </div>

        {/* Layer 2 — Lemon (scrolls up over Vanilla) */}
        <div className="sticky top-0 w-full h-[100dvh] bg-[#dbba53] flex flex-col items-center justify-center p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.2)] z-20 overflow-hidden group">
          <div className="relative w-full h-[55%] max-w-[85vw] sm:max-w-[70vw] flex items-center justify-center">
            <Image src="/can2.png" alt="Lemon" fill sizes="100vw" className="object-contain drop-shadow-[0_40px_35px_rgba(0,0,0,0.5)] scale-[1.5] sm:scale-[1.45] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-[1.55] group-hover:-translate-y-4" />
          </div>
          <div className="text-center w-full flex flex-col items-center pb-6">
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-1">Ginger Lemon</h2>
            <p className="text-white/90 text-sm sm:text-base mb-3 font-normal">Zero Sugar</p>
            <button className="flex items-center justify-center gap-2 px-6 py-2.5 border border-white/70 rounded-full text-white text-sm font-semibold hover:bg-white hover:text-[#dbba53] transition-colors shadow-sm w-fit">
              View more →
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
