import { Anton, Oswald } from "next/font/google";

const headingFont = Anton({ subsets: ["latin"], weight: "400" });
const bodyFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const faqs = [
  {
    q: "Is this drink non-alcoholic?",
    a: "Yes, all 3Sisters drinks are completely non-alcoholic.",
  },
  {
    q: "How should I serve it?",
    a: "Serve chilled, with ice, or use as a base for mocktails.",
  },
  {
    q: "Do you have gifting options?",
    a: "Yes, we offer premium gift bundles for occasions and events.",
  },
];

export default function ProductFaqSection() {
  return (
    <section className="mx-auto mt-16 w-full max-w-7xl px-5 pb-20 sm:px-10 lg:px-16">
      <h2 className={`${headingFont.className} text-[clamp(1.9rem,4.6vw,3.2rem)] uppercase leading-[0.92] tracking-[0.02em] text-[#fff2dc]`}>
        Product FAQ
      </h2>

      <div className="mt-7 space-y-4">
        {faqs.map((item) => (
          <article key={item.q} className="rounded-2xl border border-[#f2d7a0]/30 bg-[#421124]/65 p-5">
            <h3 className={`${headingFont.className} text-2xl uppercase text-[#f8e5bf]`}>{item.q}</h3>
            <p className={`${bodyFont.className} mt-2 text-lg leading-tight text-[#f6e3bf]`}>{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
