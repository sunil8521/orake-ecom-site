"use client";

const footerLinks = [
  "Home",
  "Our Agency",
  "Urgent Challenges",
  "What We Do",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row with links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 gap-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Large brand name with image */}
        <div className="relative overflow-hidden rounded-t-3xl h-[200px] sm:h-[280px] lg:h-[360px]">
          <img
            src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=2000"
            alt="Colorful parrot - Flouna wildlife"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-center pb-4 sm:pb-8">
            <h2
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[180px] font-black text-white/90 tracking-tight leading-none select-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Flouna
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
