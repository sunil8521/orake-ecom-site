import React from "react";
import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] w-full bg-gradient-to-br from-[#ce777b] via-[#fffbe6] to-[#d7b452] overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ce777b]/30 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#d7b452]/30 rounded-full blur-3xl z-0" />
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#2b0a14] drop-shadow-lg mb-4 tracking-tight uppercase">Our Blog</h1>
        <p className="max-w-2xl text-lg md:text-2xl text-[#2b0a14]/80 mb-8 font-medium">
          Insights, stories, and updates from the world of premium beverages, sustainability, and lifestyle.
        </p>
        <Image src="/blog-hero.png" alt="Blog Hero" width={420} height={260} className="rounded-3xl shadow-xl border-4 border-[#ce777b]/30 bg-white/60" />
      </div>
    </section>
  );
}
