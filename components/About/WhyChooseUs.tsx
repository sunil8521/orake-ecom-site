import { CheckCircle2 } from "lucide-react";

const stats = [
  { value: "20+",  label: "Expert Chefs" },
  { value: "125+", label: "Seating Options" },
  { value: "60+",  label: "Awards" },
];

const features = [
  "Luxurious AC Dining & Comfortable Seating",
  "Unrivaled Service, Remarkable Experience",
  "Where Comfort Meets Exquisite Cuisine",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-white py-20 md:py-28 overflow-hidden">

      {/* watermark */}
      <p className="absolute top-6 left-0 right-0 text-center font-playfair font-extrabold uppercase text-gray-900 opacity-[0.025] leading-none pointer-events-none select-none whitespace-nowrap
        text-[5rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
        Why Choose
      </p>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-red-600 text-sm">♦♦♦</span>
          <p className="text-red-600 text-[11px] font-bold uppercase tracking-[4px] mt-2 mb-3">
            Why Choose Us
          </p>
          <h2 className="font-playfair font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Why <span className="text-red-600 italic">Dine With Us?</span>
          </h2>
        </div>

        {/* ── 3-column layout ── */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8 xl:gap-12">

          {/* ── Col 1: two stacked round images ── */}
          <div className="relative w-full lg:w-[30%] shrink-0 flex justify-center">
            {/* Background image (large, tilted) */}
            <div className="relative w-48 sm:w-52 md:w-56 lg:w-48 xl:w-52 rounded-full overflow-hidden border-4 border-white shadow-xl aspect-square z-10">
              <img
                src="https://placehold.co/400x400/f5d5b0/7a3c00.jpg?text=Dining"
                alt="Dining experience"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second image — offset overlapping */}
            <div className="absolute right-0 sm:right-8 md:right-12 lg:right-0 xl:right-4 top-[55%] sm:top-[50%] w-36 sm:w-40 md:w-44 lg:w-36 xl:w-40 rounded-full overflow-hidden border-4 border-white shadow-xl aspect-square z-20">
              <img
                src="https://placehold.co/400x400/fde8d0/9a3c00.jpg?text=Chef"
                alt="Chef"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ── 4.9 Star badge ── */}
            <div className="absolute left-2 sm:left-6 bottom-2 sm:bottom-0 z-30 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 border border-gray-100">
              {/* Food icon circles */}
              <div className="flex -space-x-2">
                {["/f5e8d0/8b4513", "/fde8c8/7a4010", "/e8f5e0/2d6a0a"].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden shrink-0">
                    <img src={`https://placehold.co/28x28/${c}.jpg?text=+`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-none">4.9 Star</p>
                <p className="text-[10px] text-gray-400 leading-none mt-0.5">Reviews</p>
              </div>
            </div>
          </div>

          {/* ── Spacer for overlapping images on mobile ── */}
          <div className="h-24 sm:h-28 lg:hidden w-full" />

          {/* ── Col 2 & 3: text content (fills right side) ── */}
          <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 lg:gap-8 xl:gap-12 items-start">

            {/* Description block */}
            <div>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-gray-100">
                {stats.map((s, i) => (
                  <div key={i} className="relative">
                    <p className="font-playfair font-bold text-gray-900 text-2xl sm:text-3xl leading-none mb-1">
                      {s.value}
                    </p>
                    <p className="text-gray-400 text-[11px] uppercase tracking-wide">{s.label}</p>
                    {i < 2 && <div className="absolute top-1 bottom-1 right-0 w-px bg-gray-100" />}
                  </div>
                ))}
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-red-600 shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#reserve"
                className="inline-flex items-center px-8 py-3.5 bg-red-600 text-white text-[12px] font-bold uppercase tracking-[2px] rounded-full hover:bg-red-700 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
