import { getRecentReviews } from "@/lib/data/review";
import TriedAndCelebratedClient from "./TriedAndCelebratedClient";

export default async function TriedAndCelebratedSection() {
  const testimonialsData = await getRecentReviews(3);
  
  if (testimonialsData.length === 0) {
    return null;
  }

  const testimonials = testimonialsData.map(t => ({
    name: t.userID?.name || t.name || "Anonymous",
    text: t.text
  }));

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
          <TriedAndCelebratedClient testimonials={testimonials} />
        </div>
        {/* Fade-in animation keyframes moved to global CSS */}
      </section>
    );
  }
