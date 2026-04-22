import Image from "next/image";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function GiftExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#e8e8e9] px-6 py-16 sm:px-12 md:py-24 lg:px-20">
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_55%,#f4eecf_0%,rgba(244,238,207,0.7)_20%,rgba(232,232,233,0)_52%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-14">

        {/* Left Typography & CTA */}
        <div className="pt-2 relative z-10">
          <h2 className={`${titleFont.className} text-[clamp(3.2rem,7vw,6.5rem)] uppercase leading-[0.85] tracking-[0.01em] text-[#15161b] drop-shadow-sm`}>
            Gift The
            <br />
            <span className="text-[#de3e4f]">Experience</span>
          </h2>

          <p className={`${textFont.className} mt-8 max-w-[34ch] text-[clamp(1.35rem,2.2vw,2.05rem)] font-medium leading-[1.24] text-[#292a31]`}>
            Whether it&apos;s a birthday, a promotion, or just a Tuesday night, our curated gift boxes are designed to impress. Pick your sisters, share the flavor.
          </p>

          <button className={`${textFont.className} group mt-10 inline-flex items-center gap-4 rounded-full bg-black pl-5 pr-8 py-3.5 text-[1.5rem] font-semibold leading-none text-white transition-all duration-300 hover:bg-[#1a1a1a] hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)]`}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm text-black transition-transform duration-300 group-hover:rotate-[20deg] shadow-inner">🔒</span>
            View Products
          </button>
        </div>

        {/* Right 3D Visual */}
        <div className="group relative flex justify-center lg:justify-end w-full [perspective:1400px]">
          {/* Main Card Wrapper (Tilted by default, flat on hover) */}
          <div className="relative transition-all w-[90%] sm:w-[85%] mx-auto lg:w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[420px] shadow-[0_30px_50px_rgba(0,0,0,0.15)] rounded-[2rem] bg-[#f8f8f8] p-4 sm:p-5 duration-700 ease-out [transform-style:preserve-3d] [transform:rotateX(12deg)_rotateY(-15deg)] group-hover:[transform:rotateX(0deg)_rotateY(0deg)] hover:shadow-[0_40px_60px_rgba(0,0,0,0.2)] lg:mr-8 before:absolute before:inset-0 before:bg-[#b8302e] before:opacity-20 before:blur-2xl before:rounded-[3rem] before:-z-10 mt-8 lg:mt-0">

            {/* Aspect Ratio Inner Container */}
            <div className="relative aspect-[3/4] w-full [transform-style:preserve-3d]">

              {/* Box quadrants (2x2 grid) pushed flat to back */}
              <div className="absolute inset-0 rounded-[1.35rem] overflow-hidden bg-[#11234d] shadow-inner border border-white/20">
                <div className="absolute left-0 top-0 h-1/2 w-1/2 bg-[#edbf45]" />
                <div className="absolute left-1/2 top-0 h-1/2 w-1/2 bg-[#b8302e]" />
                <div className="absolute left-0 top-1/2 h-1/2 w-1/2 bg-[#ab2f2d]" />
                <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 bg-[#11234d]" />
                {/* Subtle lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
              </div>

              {/* Floating Layer (allows elements to pop out naturally in 3D) */}
              <div className="absolute inset-0 [transform-style:preserve-3d]">

                {/* Top Number/Text popping out */}
                <div className="absolute left-1/2 top-8 z-10 -translate-x-1/2 text-center w-full">
                  <div className="transition-transform duration-700 ease-out [transform:translateZ(30px)] group-hover:[transform:translateZ(60px)]">
                    <p className={`${titleFont.className} text-[3.5rem] sm:text-[5rem] leading-none text-white drop-shadow-xl`}>3</p>
                    <p className={`${textFont.className} -mt-2 text-lg sm:text-2xl font-bold uppercase tracking-[0.2em] text-white drop-shadow-md`}>Sisters</p>
                  </div>
                </div>

                {/* Center Glassmorphism Badge */}
                <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                  <div className="transition-transform duration-700 ease-out [transform:translateZ(50px)] group-hover:[transform:translateZ(90px)]">
                    <div className="rounded-2xl border border-[#e0b049]/40 bg-[#10244f]/80 backdrop-blur-md px-5 py-3 sm:px-8 sm:py-5 text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                      <p className={`${textFont.className} text-[0.7rem] sm:text-[0.85rem] font-bold uppercase tracking-[0.27em] text-[#f4d169]`}>Crack Open</p>
                      <p className={`${titleFont.className} mt-1 text-2xl sm:text-[2.2rem] uppercase leading-none text-white whitespace-nowrap`}>The Chaos</p>
                    </div>
                  </div>
                </div>

                {/* Bottom informative text */}
                <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-center w-full">
                  <div className="transition-transform duration-700 ease-out [transform:translateZ(30px)] group-hover:[transform:translateZ(60px)]">
                    <p className={`${textFont.className} text-[0.95rem] sm:text-[1.1rem] font-medium leading-snug text-[#f0f0f2] drop-shadow-lg`}>
                      This box includes<br />fun games and drinks
                    </p>
                  </div>
                </div>

                {/* The Floating Bottle pushing out dramatically - SHRUNK as requested by user */}
                <div className="absolute -right-[5%] sm:-right-8 -top-[12%] z-30 transition-transform duration-700 ease-out [transform:translateZ(60px)] group-hover:[transform:translateZ(100px)_rotate(6deg)_scale(1.08)] w-[40%] lg:w-[48%]">
                  <Image
                    src="https://images.unsplash.com/photo-1700893417209-18dc88c989a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Gift beverage bottle"
                    width={350}
                    height={700}
                    className="w-full h-auto rotate-[15deg] object-cover drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] sm:rotate-[20deg] rounded-xl"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-18 w-full">
        <svg className="h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0 0 C60 0 60 38 120 38 C180 38 180 0 240 0 C300 0 300 38 360 38 C420 38 420 0 480 0 C540 0 540 38 600 38 C660 38 660 0 720 0 C780 0 780 38 840 38 C900 38 900 0 960 0 C1020 0 1020 38 1080 38 C1140 38 1140 0 1200 0 C1260 0 1260 38 1320 38 C1380 38 1380 0 1440 0 L1440 120 L0 120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

