"use client";
import { useState } from "react";
import { textFont } from "@/lib/fonts";

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

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
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
  );
}
