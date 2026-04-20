"use client";

const instaImages = [
    "https://images.unsplash.com/photo-1726521689105-420d41f78a60?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1674469294251-06c642297420?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1607811121079-c33f75be7781?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1753826469259-afeb2e96969a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1674469295973-332f7906b5f7?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1567508505881-e96189d9c946?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1679333820580-d3a31c824463?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1583434820586-785238607d4f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1630265927682-9e547794c530?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function FollowUs() {
  return (
    <section id="follow-us" className="py-20 md:py-28 bg-white relative overflow-hidden">
      

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
