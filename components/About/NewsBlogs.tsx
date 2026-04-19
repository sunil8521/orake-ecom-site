"use client";

const posts = [
  {
    image: "https://placehold.co/600x400/2a2a2a/ffffff.jpg?text=Dining+Experience",
    tag: "Dining Experience",
    author: "JENNY ALEXANDER",
    date: "FEB 19, 2025",
    title: "5 Tips for the Perfect Romantic Dinner: Creating an Unforgettable Experience",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "https://placehold.co/600x400/2a2a2a/ffffff.jpg?text=Chef's+Insights",
    tag: "Chef's Insights",
    author: "JENNY ALEXANDER",
    date: "FEB 18, 2025",
    title: "A Day in the Life of Our Restaurant Kitchen: Behind the Scenes of Culinary",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    image: "https://placehold.co/600x400/2a2a2a/ffffff.jpg?text=Atmosphere",
    tag: "Dining Experience",
    author: "JENNY ALEXANDER",
    date: "FEB 17, 2025",
    title: "Why Ambience Matters: How We Create a Memorable Atmosphere",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default function NewsBlogs() {
  return (
    <section id="blogs" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* watermark */}
      <div className="absolute top-6 left-0 right-0 text-center font-playfair font-extrabold uppercase text-gray-900 opacity-[0.025] leading-none pointer-events-none select-none whitespace-nowrap text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[11rem]">
        NEWS & BLOGS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 py-4">
          <span className="text-red-600 text-sm flex justify-center gap-0.5">♦♦♦</span>
          <p className="text-red-600 text-[11px] font-bold uppercase tracking-[4px] mt-2 mb-3">
            NEWS & BLOGS
          </p>
          <h2 className="font-playfair font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            Our Latest <span className="text-red-600">News & Blogs</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {posts.map((post, idx) => (
             <article key={idx} className="group cursor-pointer flex flex-col items-start text-left">
                 {/* Image */}
                 <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-[2rem] mb-6 shadow-sm group-hover:shadow-lg transition-shadow duration-500">
                     <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110" />
                     {/* Floating Tag */}
                     <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/50 text-white text-[13px] font-medium px-5 py-2.5 rounded-full shadow-lg">
                         {post.tag}
                     </div>
                 </div>

                 {/* Meta */}
                 <div className="flex items-center gap-2.5 text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-4">
                     <span>BY {post.author}</span>
                     <span className="text-red-500 text-[16px] leading-none">•</span>
                     <span>{post.date}</span>
                 </div>

                 {/* Title */}
                 <h3 className="font-playfair text-xl md:text-[22px] font-bold text-gray-900 leading-snug mb-3 group-hover:text-red-600 transition-colors duration-300">
                     {post.title}
                 </h3>

                 {/* Excerpt */}
                 <p className="text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-3 font-light">
                     {post.excerpt}
                 </p>

                 {/* Link */}
                 <div className="mt-auto flex items-center text-red-600 font-bold text-[14px] underline underline-offset-4 decoration-2 decoration-transparent group-hover:decoration-red-600 transition-all duration-300">
                     Read More <span className="ml-2 text-lg transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                 </div>
             </article>
          ))}
        </div>
      </div>
    </section>
  );
}
