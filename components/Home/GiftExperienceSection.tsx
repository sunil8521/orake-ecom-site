import Image from "next/image";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function GiftExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-[#e8e8e9] px-6 py-16 sm:px-12 md:py-20 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_65%_55%,#f4eecf_0%,rgba(244,238,207,0.7)_20%,rgba(232,232,233,0)_52%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="pt-2">
          <h2 className={`${titleFont.className} text-[clamp(3rem,7vw,6.2rem)] uppercase leading-[0.9] tracking-[0.01em] text-[#15161b]`}>
            Gift The
            <br />
            <span className="text-[#de3e4f]">Experience</span>
          </h2>

          <p className={`${textFont.className} mt-8 max-w-[32ch] text-[clamp(1.35rem,2.2vw,2.05rem)] font-medium leading-[1.24] text-[#292a31]`}>
            Whether it&apos;s a birthday, a promotion, or just a Tuesday night, our curated gift boxes are designed to impress. Pick your sisters, share the flavor.
          </p>

          <button className={`${textFont.className} mt-9 inline-flex items-center gap-3 rounded-full bg-black px-8 py-3 text-[1.7rem] font-semibold leading-none text-white transition hover:bg-[#1a1a1a]`}>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm text-black">🔒</span>
            View Products
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-172.5 rounded-[1.9rem] bg-[#f8f8f8] p-4 shadow-[0_16px_34px_rgba(0,0,0,0.15)] sm:p-5">
            <div className="relative aspect-video overflow-hidden rounded-[1.35rem] bg-[#11234d]">
              <div className="absolute left-0 top-0 h-1/2 w-1/2 bg-[#edbf45]" />
              <div className="absolute left-1/2 top-0 h-1/2 w-1/2 bg-[#b8302e]" />
              <div className="absolute left-0 top-1/2 h-1/2 w-1/2 bg-[#ab2f2d]" />
              <div className="absolute left-1/2 top-1/2 h-1/2 w-1/2 bg-[#11234d]" />

              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-[#e0b049] bg-[#10244f] px-8 py-4 text-center">
                <p className={`${textFont.className} text-[0.84rem] font-semibold uppercase tracking-[0.27em] text-[#f4d169]`}>Crack Open</p>
                <p className={`${titleFont.className} text-[2rem] uppercase leading-none text-white`}>The Chaos</p>
              </div>

              <div className="absolute left-1/2 top-[22%] z-10 -translate-x-1/2 text-center">
                <p className={`${titleFont.className} text-[3.9rem] leading-none text-white`}>3</p>
                <p className={`${textFont.className} -mt-1 text-[2.05rem] font-semibold uppercase tracking-wider text-white`}>Sisters</p>
              </div>

              <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-center">
                <p className={`${textFont.className} text-[1.05rem] font-medium leading-tight text-[#f0f0f2]`}>
                  This box includes
                  <br />
                  fun games and drinks
                </p>
              </div>

              <Image
                src="https://images.unsplash.com/photo-1700893417209-18dc88c989a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Gift beverage bottle"
                width={255}
                height={510}
                className="absolute -right-2 top-[-4%] z-20 w-[30%] rotate-26 object-cover drop-shadow-[0_16px_16px_rgba(0,0,0,0.32)]"
              />
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
