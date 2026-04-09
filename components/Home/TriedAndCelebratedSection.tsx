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
    text: "The Indie-soda range by 3Sisters is completely awesome!! I like all four flavors, but my real favorites are kala khatta and imli chaska. The two have refreshingly punchy and playful taste.",
  },
];

export default function TriedAndCelebratedSection() {
  return (
    <section className="bg-[#f3f3f3] py-20 px-6 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-5xl sm:text-6xl font-black text-black mb-16">
          TRIED AND CELEBRATED
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="relative bg-[#112650] text-white px-8 py-12 rounded-[3rem] min-h-[380px]"
                style={{ clipPath: "polygon(0 9%, 86% 0, 100% 6%, 100% 90%, 82% 100%, 0 85%)" }}
              >
                <div className="absolute -left-5 top-24 w-16 h-16 rounded-full bg-[#e33d4e] border-2 border-[#f3f3f3] flex items-center justify-center text-4xl leading-none font-bold">
                  &ldquo;
                </div>
                <h3 className="text-5xl font-black text-center mb-4">{item.name}</h3>
                <p className="text-lg leading-relaxed text-center font-semibold">{item.text}</p>
              </article>
            ))}
          </div>

          <button
            aria-label="Previous testimonial"
            className="hidden lg:flex absolute left-[-22px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-black border border-gray-200 shadow items-center justify-center text-4xl"
          >
            &#8249;
          </button>
          <button
            aria-label="Next testimonial"
            className="hidden lg:flex absolute right-[-22px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white text-black border border-gray-200 shadow items-center justify-center text-4xl"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
