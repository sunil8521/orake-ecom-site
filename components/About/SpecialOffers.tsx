const offers = [
  {
    pct:       "20%",
    label:     "FLAT 20% DISCOUNT",
    title:     "Dine & Save – 20% Off Today!",
    desc:      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    img:       "https://placehold.co/600x700/f5d5b0/7a3c00.jpg?text=Offer+1",
    cardBg:    "bg-white",
    titleCls:  "text-gray-900",
    labelCls:  "text-red-500",
    descCls:   "text-gray-400",
    badgeBg:   "bg-red-600 text-white",
    imgRound:  "rounded-tl-3xl rounded-bl-3xl sm:rounded-tl-none sm:rounded-bl-none sm:rounded-tr-3xl sm:rounded-br-3xl",
  },
  {
    pct:       "15%",
    label:     "FLAT 15% DISCOUNT",
    title:     "Dine, Delight, & Get 15% Off!",
    desc:      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed",
    img:       "https://placehold.co/600x700/e8c9d0/6b1f2a.jpg?text=Offer+2",
    cardBg:    "bg-red-600",
    titleCls:  "text-white",
    labelCls:  "text-red-100",
    descCls:   "text-red-100",
    badgeBg:   "bg-white text-red-600",
    imgRound:  "rounded-tl-3xl rounded-bl-3xl sm:rounded-tl-none sm:rounded-bl-none sm:rounded-tr-3xl sm:rounded-br-3xl",
  },
];

export default function SpecialOffers() {
  return (
    <section id="special-offers" className="relative bg-white py-20 md:py-28 overflow-hidden">

      {/* watermark */}
      <p className="absolute top-6 inset-x-0 text-center font-playfair font-extrabold uppercase text-gray-900 opacity-[0.025] leading-none pointer-events-none select-none text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem] whitespace-nowrap">
        Special Offers
      </p>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="text-red-600 text-sm">♦♦♦</span>
          <p className="text-red-600 text-[11px] font-bold uppercase tracking-[4px] mt-2 mb-3">
            Special Offers
          </p>
          <h2 className="font-playfair font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Exclusive <span className="text-red-600 italic">Dining Offers</span>
          </h2>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 px-2">
          {offers.map((o, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden shadow-md flex flex-col sm:flex-row min-h-[240px] sm:min-h-[260px] ${o.cardBg}`}
            >
              {/* ── Wavy discount badge ── */}
              <div className="absolute top-3 left-3 z-20 w-16 h-16 sm:w-20 sm:h-20">
                <div
                  className={`w-full h-full flex flex-col items-center justify-center ${o.badgeBg} shadow-lg`}
                  style={{
                    clipPath:
                      "polygon(50% 0%,61% 13%,78% 10%,82% 28%,98% 33%,95% 50%,100% 65%,86% 76%,84% 92%,67% 93%,55% 100%,40% 92%,22% 93%,18% 78%,3% 67%,6% 51%,0% 36%,13% 24%,20% 9%,38% 13%)",
                  }}
                >
                  <span className="font-playfair font-bold text-base sm:text-xl leading-none">{o.pct}</span>
                  <span className="font-semibold text-[9px] sm:text-[11px] tracking-wider">OFF</span>
                </div>
              </div>

              {/* ── Text side ── (LEFT on desktop, BOTTOM on mobile) */}
              <div className="order-2 sm:order-1 flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-10 pt-10 sm:pt-8 pl-8 sm:pl-10">
                <p className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[2.5px] mb-2 ${o.labelCls}`}>
                  {o.label}
                </p>
                <h3 className={`font-playfair font-bold leading-[1.15] mb-3 text-2xl sm:text-[26px] md:text-[28px] ${o.titleCls}`}>
                  {o.title}
                </h3>
                <p className={`text-[13px] sm:text-sm leading-relaxed ${o.descCls}`}>
                  {o.desc}
                </p>
              </div>

              {/* ── Image side ── (RIGHT on desktop, TOP on mobile) */}
              <div className={`order-1 sm:order-2 sm:w-[44%] md:w-[42%] shrink-0 ${o.imgRound} overflow-hidden`}>
                {/* responsive height: smaller on mobile */}
                <div className="w-full h-44 sm:h-full">
                  <img
                    src={o.img}
                    alt={o.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
