import { Anton, Oswald } from "next/font/google";

const headingFont = Anton({ subsets: ["latin"], weight: "400" });
const bodyFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const bundles = [
  { name: "Weekend Trio", items: "3 best-selling flavors", price: "Rs. 1,199" },
  { name: "Party Pack", items: "6 assorted premium bottles", price: "Rs. 2,199" },
  { name: "Gift Box", items: "Curated set + message card", price: "Rs. 1,499" },
];

export default function ProductBundleSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-5 sm:px-10 lg:px-16">
      <div className="rounded-3xl border border-[#f2d7a0]/35 bg-[#611b32]/50 p-6 shadow-[0_24px_45px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8">
        <h2 className={`${headingFont.className} text-[clamp(1.9rem,4.6vw,3.2rem)] uppercase leading-[0.92] tracking-[0.02em] text-[#fff2dc]`}>
          Curated Bundles
        </h2>
        <p className={`${bodyFont.className} mt-3 text-lg font-medium text-[#f6e3bf]`}>
          Pick a bundle made for your mood, event, or gifting plan.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {bundles.map((bundle) => (
            <article key={bundle.name} className="rounded-2xl border border-[#f2d7a0]/25 bg-[#3e1020]/70 p-5">
              <h3 className={`${headingFont.className} text-2xl uppercase text-[#f8e5bf]`}>{bundle.name}</h3>
              <p className={`${bodyFont.className} mt-2 text-base text-[#f6e3bf]`}>{bundle.items}</p>
              <p className={`${bodyFont.className} mt-4 text-2xl font-semibold text-[#fff7ea]`}>{bundle.price}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
