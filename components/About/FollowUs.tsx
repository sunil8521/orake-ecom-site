"use client";

const instaImages = [
    "https://placehold.co/300x300/444/fff.jpg?text=Gallery+1",
    "https://placehold.co/300x300/444/fff.jpg?text=Gallery+2",
    "https://placehold.co/300x300/444/fff.jpg?text=Gallery+3",
    "https://placehold.co/300x300/444/fff.jpg?text=Gallery+4",
    "https://placehold.co/600x600/444/fff.jpg?text=Main+Feature",
    "https://placehold.co/300x300/444/fff.jpg?text=Gallery+5",
    "https://placehold.co/300x300/444/fff.jpg?text=Gallery+6",
    "https://placehold.co/300x300/444/fff.jpg?text=Gallery+7",
    "https://placehold.co/300x300/444/fff.jpg?text=Gallery+8",
];

export default function FollowUs() {
  return (
    <section id="follow-us" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* watermark */}
      <div className="absolute top-6 left-0 right-0 text-center font-playfair font-extrabold uppercase text-gray-900 opacity-[0.025] leading-none pointer-events-none select-none whitespace-nowrap text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
        FOLLOW US
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center pb-10">
        
        {/* Header */}
        <div className="text-center mb-16 py-4">
          <span className="text-red-600 text-sm flex justify-center gap-0.5">♦♦♦</span>
          <p className="text-red-600 text-[11px] font-bold uppercase tracking-[4px] mt-2 mb-3">
            FOLLOW US
          </p>
          <h2 className="font-playfair font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Follow Us On <span className="text-red-600">Instagram</span>
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-16">
            
            {/* Column 1 (2 small) */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <img src={instaImages[0]} alt="Instagram" className="w-full aspect-square object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-500 shadow-sm" />
                <img src={instaImages[1]} alt="Instagram" className="w-full aspect-square object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-500 shadow-sm" />
            </div>
            
            {/* Column 2 (2 small) */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <img src={instaImages[2]} alt="Instagram" className="w-full aspect-square object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-500 shadow-sm" />
                <img src={instaImages[3]} alt="Instagram" className="w-full aspect-square object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-500 shadow-sm" />
            </div>

            {/* Column 3 & 4 (1 Large spanning 2 cols, height matching 2 small + gap) */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2 order-first lg:order-none mb-4 lg:mb-0">
                <img src={instaImages[4]} alt="Instagram feature" className="w-full h-full min-h-[300px] object-cover rounded-3xl hover:scale-[1.02] transition-transform duration-500 shadow-md" />
            </div>

            {/* Column 5 (2 small) */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <img src={instaImages[5]} alt="Instagram" className="w-full aspect-square object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-500 shadow-sm" />
                <img src={instaImages[6]} alt="Instagram" className="w-full aspect-square object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-500 shadow-sm" />
            </div>
            
            {/* Column 6 (2 small) */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <img src={instaImages[7]} alt="Instagram" className="w-full aspect-square object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-500 shadow-sm" />
                <img src={instaImages[8]} alt="Instagram" className="w-full aspect-square object-cover rounded-2xl hover:scale-[1.03] transition-transform duration-500 shadow-sm" />
            </div>
        </div>

        <a href="#" className="inline-flex items-center justify-center bg-red-600 text-white px-10 py-4 font-bold text-[14px] uppercase tracking-widest rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
            FOLLOW US
        </a>
      </div>
    </section>
  );
}
