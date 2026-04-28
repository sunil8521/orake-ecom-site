import { Sansita, DM_Sans } from "next/font/google";
import Link from "next/link";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const posts = [
  {
    slug: "science-of-hydration",
    image: "/blog-hydration.png",
    tag: "Science & Performance",
    author: "DR. KATE",
    date: "OCT 12, 2025",
    title: "The Science of Hydration: Why Orake Hits Different at 3 AM",
    excerpt: "We broke down the exact chemical pathways of our zero-sugar formula to show why you don't get the dreaded 4 PM crash anymore."
  },
  {
    slug: "behind-the-flavor",
    image: "/blog-flavor.png",
    tag: "Flavor Lab",
    author: "THE TEAM",
    date: "OCT 01, 2025",
    title: "Behind The Flavor: Designing the Strawberry Vanilla Drop",
    excerpt: "It took 47 iterations in the flavor lab to perfect the balance between sharp strawberry tartness and smooth vanilla finish."
  }
];

export default function NewsBlogs() {
  return (
    <section id="blogs" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Dynamic Watermark */}
      <div className={`absolute top-10 left-0 right-0 text-center ${titleFont.className} uppercase text-[#15161b] opacity-[0.03] leading-none pointer-events-none select-none whitespace-nowrap text-[6rem] sm:text-[9rem] md:text-[12rem] lg:text-[16rem]`}>
        ARTICLES
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 py-4">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-[#de3e4f]"></span>
            <span className={`${textFont.className} text-[#de3e4f] text-sm font-bold uppercase tracking-[0.2em] relative`}>
              THE GRID
              <span className="absolute -right-3 -top-2 w-2 h-2 bg-[#dbba53] rounded-full animate-ping"></span>
            </span>
            <span className="h-[2px] w-8 bg-[#de3e4f]"></span>
          </div>
          <h2 className={`${titleFont.className} text-[clamp(3.5rem,6vw,5.5rem)] uppercase leading-[0.95] tracking-wide text-[#15161b]`}>
            Latest <span className="text-[#de3e4f] block sm:inline">Intel.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-4xl mx-auto">
          {posts.map((post, idx) => (
             <Link href={`/blog/${post.slug}`} key={idx} className="block group">
               <article className="cursor-pointer flex flex-col items-start text-left relative h-full">
                   {/* Image Container */}
                   <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-[2rem] mb-8 bg-[#15161b]">
                       <img 
                         src={post.image} 
                         alt={post.title} 
                         className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:opacity-80" 
                       />
                       {/* Gradient overlay to pop text if needed, or just style */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       
                       {/* Floating Tag */}
                       <div className={`${textFont.className} absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#15161b] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500`}>
                           {post.tag}
                       </div>
                   </div>

                   {/* Meta */}
                   <div className={`${textFont.className} flex items-center gap-2.5 text-[12px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-4`}>
                       <span>BY {post.author}</span>
                       <span className="text-[#de3e4f] text-[16px] leading-none">•</span>
                       <span>{post.date}</span>
                   </div>

                   {/* Title */}
                   <h3 className={`${titleFont.className} text-3xl uppercase tracking-wide text-[#15161b] leading-[1.1] mb-4 group-hover:text-[#de3e4f] transition-colors duration-300 line-clamp-3`}>
                       {post.title}
                   </h3>

                   {/* Excerpt */}
                   <p className={`${textFont.className} text-gray-500 text-lg leading-relaxed mb-8 line-clamp-3 font-light flex-grow`}>
                       {post.excerpt}
                   </p>

                   {/* Action Button */}
                   <div className={`${textFont.className} mt-auto flex items-center text-[#15161b] font-bold text-lg uppercase tracking-wider group-hover:text-[#de3e4f] transition-colors duration-300`}>
                       Read Article 
                       <span className="ml-2 w-8 h-[2px] bg-[#15161b] block group-hover:bg-[#de3e4f] group-hover:w-12 transition-all duration-300"></span>
                   </div>
               </article>
             </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
