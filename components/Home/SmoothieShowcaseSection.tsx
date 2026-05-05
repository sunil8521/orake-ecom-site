import Image from "next/image";
import { headingFont, bodyFont } from "@/lib/fonts";
export default function SmoothieShowcaseSection() {
  return (
    <div className={`relative w-full ${bodyFont.className}`}>

      {/* Collections-style header placed outside the showcase section */}
      <div className="max-w-[1400px] mx-auto text-center mb-12 px-6 sm:px-16">
        <div className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-4 inline-block shadow-[0_0_10px_rgba(0,0,0,0.25)]">
          Fresh Drops
        </div>
        <h2 className={`${headingFont.className} text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-black`}>
          SMOOTHIE SHOWCASE
        </h2>
        <p className={`${bodyFont.className} mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto`}>
          Our limited small-batch flavors — crafted with care and ready to refresh your day.
        </p>
        <p className={`${bodyFont.className} mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto`}>
          Each drop is small-batch and prebiotic-forward — bright fruit notes, subtle botanicals, and a clean finish. We source ingredients sustainably and craft each flavor in limited runs to preserve quality.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/products" className="inline-block bg-black text-white px-5 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition">
            See full lineup
          </a>
          <a href="/about" className="inline-block text-gray-700 underline text-sm">
            Learn about our process
          </a>
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block relative h-[200vh] xl:h-[210vh] w-full overflow-clip">

        {/* Layer 1: Vanilla left + Placeholder right */}
        <div className="sticky top-[6vh] xl:top-[8vh] w-full h-[88vh] overflow-hidden grid grid-cols-2 z-10 bg-[#f4f4f4]">

          {/* Left — Strawberry Vanilla */}
          <div className="col-span-1 bg-[#cf797e] flex flex-col items-center justify-center pt-10 p-6 relative overflow-hidden group">


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


        </div>

        {/* Layer 2: Transparent left + Ginger Lemon right */}
        <div className="sticky top-[6vh] xl:top-[8vh] w-full h-[88vh] overflow-hidden grid grid-cols-2 z-20 pointer-events-none">

          {/* Left — Transparent (Vanilla shows through) */}
          <div className="col-span-1 bg-transparent pointer-events-none" />

          {/* Right — Ginger Lemon */}
          <div className="col-span-1 bg-[#dbba53] flex flex-col items-center justify-center pt-10 p-6 relative overflow-hidden group pointer-events-auto">



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
          <div className="absolute top-4 left-4 z-30 text-left pointer-events-none">
            <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Fresh Drop</div>
            <h3 className={`${headingFont.className} text-xl text-white font-black mt-1`}>Strawberry Vanilla</h3>
            <p className="text-xs text-white/90">Prebiotic fiber — small-batch release</p>
          </div>
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
          <div className="absolute top-4 right-4 z-30 text-right pointer-events-none">
            <div className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Featured</div>
            <h3 className={`${headingFont.className} text-xl text-white font-black mt-1`}>Ginger Lemon</h3>
            <p className="text-xs text-white/90">Zero sugar — award-winning</p>
          </div>
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
