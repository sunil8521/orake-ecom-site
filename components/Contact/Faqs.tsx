"use client";
import { useState } from "react";
import { MessageSquareText, PhoneCall } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const faqs = [
  {
    q: "Where do you ship Orake?",
    a: "We currently ship to all 50 US states. International shipping is in the works, so stay tuned!"
  },
  {
    q: "What's actually in your drinks?",
    a: "Just the good stuff. Real fruit juice, natural caffeine extracted from green tea, zero artificial sugars, and essential vitamins to keep you absolutely dialed."
  },
  {
    q: "Are the cans recyclable?",
    a: "100%. We care about the planet as much as we care about your energy levels. Please recycle after you crack open the chaos."
  },
  {
    q: "What if my package arrives damaged?",
    a: "No stress. Snap a picture of the damaged box or cans, hit us up via the contact form above, and we'll ship a replacement stash immediately."
  },
  {
    q: "Do you offer wholesale pricing?",
    a: "We do. If you're looking to stock Orake in your gym, office, or store, select 'Wholesale' in the contact form above and our distribution team will hook you up."
  }
];

export default function Faqs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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
          {/* Accordion List */}
          <div className="flex-1 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? "bg-[#de3e4f] text-white border-[#de3e4f] shadow-xl shadow-red-600/20" : "bg-white text-[#15161b] border-gray-200 shadow-sm hover:shadow-md"
                    }`}
                >
                  <div className="px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between">
                    <h4 className={`${textFont.className} text-xl sm:text-2xl font-medium tracking-wide ${isOpen ? "text-white" : "text-[#15161b]"}`}>
                      {faq.q}
                    </h4>
                    <span className={`text-3xl transition-transform duration-300 leading-none ${isOpen ? "rotate-180" : ""}`}>
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 px-6 sm:px-8 ${isOpen ? "max-h-[300px] pb-6 sm:pb-8 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className={isOpen ? "text-white/95 text-lg leading-relaxed font-light" : "text-gray-500 text-lg leading-relaxed font-light"}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Blocks */}
          <div className="w-full lg:w-[400px] shrink-0 space-y-6">

            {/* Dark Contact Card */}
            <div className="bg-[#15161b] rounded-3xl p-10 py-14 text-center relative overflow-hidden text-white flex flex-col items-center shadow-xl group">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-[url('https://placehold.co/400x400/15161b/2a2a2a.png?text=Vibe')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#de3e4f] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

              <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(222,62,79,0.3)]">
                <MessageSquareText className="text-[#de3e4f] w-10 h-10" />
              </div>

              <h3 className={`${titleFont.className} relative z-10 text-3xl mb-4 text-white uppercase tracking-wide`}>Need Real Help?</h3>
              <p className={`${textFont.className} relative z-10 text-gray-400 text-lg mb-10 leading-relaxed font-light`}>
                Our support team actually replies.<br />Drop us a line and we'll fix it.
              </p>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`${textFont.className} relative z-10 bg-[#de3e4f] text-white px-10 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-black transition-colors shadow-lg shadow-[#de3e4f]/30 active:scale-95`}>
                Contact Support
              </button>
            </div>

            {/* Light Phone Card */}
            <div className="bg-[#f0f0f2] rounded-[2rem] p-8 flex items-center gap-6 shadow-sm border border-white">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                <PhoneCall className="text-[#dbba53] w-7 h-7" />
              </div>
              <div>
                <p className={`${textFont.className} text-gray-500 text-sm font-bold mb-1 uppercase tracking-widest`}>Don't like typing?</p>
                <p className={`${titleFont.className} text-2xl font-bold text-[#15161b] mb-1 uppercase tracking-wide`}>Call The Hotline</p>
                <p className={`${textFont.className} text-gray-500 text-lg`}>+1 (800) ORAKE-UP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
