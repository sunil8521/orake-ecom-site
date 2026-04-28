import { Sansita, DM_Sans } from "next/font/google";

const headingFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const highlights = [
  { title: "No Alcohol", text: "Enjoy full flavor without compromise in every sip." },
  { title: "Natural Notes", text: "Layered fruit and botanical profiles with a clean finish." },
  { title: "Celebration Ready", text: "Perfect for hosting, gifting, and special occasions." },
];

export default function ProductHighlightsSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-5 sm:px-10 lg:px-16">
      <h2 className={`${headingFont.className} text-[clamp(2rem,5vw,3.6rem)] uppercase leading-[0.92] tracking-[0.02em] text-[#fff2dc]`}>
        Why People Love 3Sisters
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-[#f2d7a0]/30 bg-[#4b1428]/60 p-6 shadow-[0_16px_35px_rgba(0,0,0,0.24)]"
          >
            <h3 className={`${headingFont.className} text-2xl uppercase tracking-[0.02em] text-[#f8e5bf]`}>{item.title}</h3>
            <p className={`${bodyFont.className} mt-3 text-lg leading-tight text-[#f6e3bf]`}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
