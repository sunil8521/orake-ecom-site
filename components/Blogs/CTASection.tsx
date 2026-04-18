"use client";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-10 sm:mb-14" />

        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-2xl leading-tight mb-8 sm:mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Let&apos;s Save Nature Together For People &amp; Planet
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            <button className="btn-outline-pill">can I help?</button>
            <button className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
              Donate Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
