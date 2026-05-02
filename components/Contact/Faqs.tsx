import { titleFont, textFont } from "@/lib/fonts";
import FaqAccordion from "./FaqAccordion";
import FaqSidebar from "./FaqSidebar";

export default function Faqs() {
  return (
    <section id="faqs" className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="text-center mb-16 py-4">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-[#de3e4f]"></span>
            <span className={`${textFont.className} text-[#de3e4f] text-sm font-bold uppercase tracking-[0.25em]`}>
              FAQ
            </span>
            <span className="h-[2px] w-8 bg-[#de3e4f]"></span>
          </div>
          <h2 className={`${titleFont.className} text-[clamp(3.5rem,6vw,5.5rem)] uppercase leading-[0.95] tracking-wide text-[#15161b]`}>
            Still Wondering? <br />
            <span className="text-[#de3e4f]">Look Here.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <FaqAccordion />
          <FaqSidebar />
        </div>
      </div>
    </section>
  );
}
