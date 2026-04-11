"use client";
const testimonials = [
  {
    name: "Aaron Karthik",
    text: "I've tried a lot of non alcoholic beers and by far this one is my favorite. German Lager is my favourite, which is very close to real beer, followed by Kiwi Mint and Peach. Strawberry and Cranberry are on the little sweeter side, but definitely worth it!",
  },
  {
    name: "Raj",
    text: "3Sisters Sports drink is just too good. No added sugar is a plus. It hydrates and provide energy instantly and tastes really good. It has become my constant now while playing pickleball.",
  },
  {
    name: "Shivam",
    text: "The Indie-soda range by 3Sisters is completely awesome!! I like all four flavors, but my real favorites are kala khatta and imli chaska. The two have refreshingly punchy and playful taste."
  }
]

  export default function TriedAndCelebratedSection() {
    return (
      <section
        className="relative py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-[#f3f3f3] via-[#f9fafb] to-[#e9e7e1] overflow-hidden"
        style={{ fontFamily: 'Inter, ui-sans-serif, serif' }}
      >
          {/* Subtle background pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-10 bg-[url('/svg/pattern.svg')] bg-repeat" aria-hidden="true" />
          <div className="mx-auto max-w-7xl relative z-10">
            <h2
              className="text-center text-5xl sm:text-6xl font-serif font-extrabold text-[#1a1a1a] mb-2 tracking-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              TRIED AND CELEBRATED
            </h2>
            <p className="text-center text-lg text-[#444] mb-8 max-w-2xl mx-auto font-medium">
              Real stories from real people. Discover what our customers love about our drinks and why they keep coming back.
            </p>
            <div className="flex justify-center mb-16">
              <span className="block w-24 h-1 rounded bg-[#ce777b]" />
            </div>
            <div className="relative" style={{ perspective: '1200px' }}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {testimonials.map((item, idx) => (
                  <article
                    key={item.name}
                    className="relative animate-fadeIn transition-transform duration-500 min-h-[380px] flex flex-col items-center justify-center px-8 py-12 rounded-3xl border-4 border-[#ce777b] bg-gradient-to-br from-white/80 to-[#f9fafb]/80 shadow-2xl group hover:shadow-3xl hover:z-10"
                    style={{
                      animationDelay: `${idx * 0.15}s`,
                      fontFamily: 'Inter, ui-sans-serif, serif',
                      transformStyle: 'preserve-3d',
                    }}
                    onMouseMove={e => {
                      const card = e.currentTarget;
                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateX = ((y - centerY) / centerY) * 10;
                      const rotateY = ((x - centerX) / centerX) * -10;
                      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = '';
                    }}
                  >
                    {/* Avatar with initial */}
                    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#ce777b] shadow-lg border-4 border-white mb-6">
                      <span className="text-4xl font-bold text-white select-none">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#112650] mb-2 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>{item.name}</h3>
                    <div className="w-10 h-1 bg-[#ce777b] rounded-full mb-4 mx-auto" />
                    <p className="text-base leading-relaxed text-center font-medium italic text-[#222]" style={{ fontFamily: 'Inter, ui-sans-serif' }}>
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
              {/* Navigation Arrows */}
              <button
                aria-label="Previous testimonial"
                className="hidden lg:flex absolute left-[-32px] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#ce777b] text-[#ffffff] border-2 border-[#ffffff] shadow-lg items-center justify-center text-4xl hover:bg-[#d4af37] hover:text-white transition-colors duration-200 z-20"
              >
                &#8249;
              </button>
              <button
                aria-label="Next testimonial"
                className="hidden lg:flex absolute right-[-32px] top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#ce777b] text-[#ffffff] border-2 border-[#ffffff] shadow-lg items-center justify-center text-4xl hover:bg-[#d4af37] hover:text-white transition-colors duration-200 z-20"
              >
                &#8250;
              </button>
            </div>
          </div>
          {/* Fade-in animation keyframes moved to global CSS */}
        </section>
      );
    }
