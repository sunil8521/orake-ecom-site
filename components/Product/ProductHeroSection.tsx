import { Sansita, DM_Sans } from "next/font/google";

const headingFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ProductHeroSection() {
  return (
    <section className="bg-linear-to-b from-[#2b0a14] via-[#3a0f1d] to-[#5a1730] pb-12 pt-32 text-[#fff7ea]">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-10 lg:px-16">
        <p className={`${bodyFont.className} text-sm uppercase tracking-[0.28em] text-[#f2d7a0]`}>Our Signature Range</p>
        <h1 className={`${headingFont.className} mt-4 max-w-[11ch] text-[clamp(2.3rem,6.4vw,5.4rem)] uppercase leading-[0.92] tracking-[0.02em]`}>
          Discover Our Products
        </h1>
        <p className={`${bodyFont.className} mt-6 max-w-2xl text-[clamp(1.05rem,1.8vw,1.45rem)] font-medium leading-[1.35] text-[#f6e3bf]`}>
          Premium non-alcoholic drinks made for celebrations, casual evenings, and every mood in between.
        </p>
      </div>
    </section>
  );
}
