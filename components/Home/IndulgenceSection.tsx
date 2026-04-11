export default function IndulgenceSection() {
  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-[#fffbe6] via-[#f6efe2] to-[#f9e7d0] overflow-hidden">
      {/* Decorative blurred circles (bokeh) and gold pattern */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Soft gold gradient overlay */}
        <div className="absolute inset-0" style={{background: 'linear-gradient(120deg,rgba(215,180,82,0.08) 0%,rgba(255,255,255,0.0) 100%)'}} />
        {/* Bokeh circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#d7b452]/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-0 w-40 h-40 bg-[#fffbe6]/40 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#b89c3a]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-[#f6efe2]/60 rounded-full blur-2xl -translate-x-1/2" />
        {/* Subtle gold pattern overlay */}
        <div className="absolute inset-0" style={{background: 'repeating-linear-gradient(135deg,rgba(215,180,82,0.04)_0_2px,transparent_2px_40px)'}} />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center min-h-80">
          {/* Main heading */}
          <h2 className="text-center font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2b0a14] leading-tight mb-6 tracking-tight drop-shadow-md">
            <span className="block">INDULGENCE</span>
            <span className="block text-2xl sm:text-3xl font-light tracking-wide text-[#b89c3a] mt-2 mb-1">REIMAGINED</span>
            <span className="block text-2xl sm:text-3xl font-semibold font-serif text-[#2b0a14] mb-4">Non-alcoholic beverages with bold flavors</span>
            <span className="block relative">
              <span className="inline-block px-2 pb-1 border-b-4 border-[#b89c3a]">AND ZERO GUILT.</span>
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-center text-[#2b0a14]/80 text-lg sm:text-xl font-medium font-sans">
            Experience a new era of celebration with our sophisticated, guilt-free drinks. Crafted for every occasion, our beverages blend classic indulgence with modern taste—<span className="font-semibold text-[#b89c3a]">non-alcoholic beverages with bold flavors</span> and zero guilt.
          </p>
        </div>
      </div>
    </section>
  );
}
