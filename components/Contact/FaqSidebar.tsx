"use client";
import { MessageSquareText, PhoneCall } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";

export default function FaqSidebar() {
  return (
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
  );
}
