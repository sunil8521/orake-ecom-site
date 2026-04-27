import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Mock Database of Blog Posts
const blogData: Record<string, any> = {
  "science-of-hydration": {
    image: "https://images.unsplash.com/photo-1546188994-07c34f6e5e1b?q=80&w=1200&auto=format&fit=crop",
    tag: "Science & Performance",
    author: "DR. KATE",
    date: "OCT 12, 2025",
    title: "The Science of Hydration: Why Orake Hits Different at 3 AM",
    content: (
      <>
        <p className="lead">It&apos;s 3 AM. The glow of the monitor is the only light in the room. You reach for an energy drink, hoping it will push you through the final hours of the grind. But usually, that means an inevitable, soul-crushing crash by 4 PM. Not with Orake.</p>
        
        <h2>The Zero-Sugar Difference</h2>
        <p>Most commercial energy drinks rely on a massive spike of synthetic sugars to jolt your nervous system. This causes a rapid release of insulin, which subsequently drops your blood sugar to the floor. We engineered Orake completely differently.</p>
        <p>By utilizing real fruit extracts and natural, plant-based sweeteners, we&apos;ve entirely eliminated the sugar crash. Our formula provides a sustained, steady release of energy that respects your body&apos;s natural metabolic pathways.</p>
        
        <h2>Prebiotic Fiber: The Unsung Hero</h2>
        <p>Did you know your gut microbiome plays a massive role in your cognitive function? Orake is infused with prebiotic fibers that nourish your gut bacteria. A healthy gut means improved neurotransmitter production, leading to sharper focus and faster reaction times. It&apos;s not just about waking up; it&apos;s about thinking clearer.</p>
        
        <blockquote>
          &quot;We didn&apos;t just want to make another energy drink. We wanted to engineer a functional beverage that actually supports your body&apos;s performance.&quot;<br/>
          <strong>- Dr. Kate, Lead Chemist</strong>
        </blockquote>
        
        <p>Next time you&apos;re facing a late-night session, reach for the can that&apos;s built on science, not just sugar. Grab an Orake.</p>
      </>
    )
  },
  "late-night-sessions": {
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
    tag: "Creator Spotlight",
    author: "MARCUS G.",
    date: "OCT 08, 2025",
    title: "Late Night Sessions: Fueling The Next Wave of Gamers",
    content: (
      <>
        <p className="lead">In the highly competitive world of esports, milliseconds matter. The difference between a championship title and going home empty-handed often comes down to who can maintain peak mental acuity in the final hour of a grueling tournament.</p>
        
        <h2>The Traditional Energy Drink Problem</h2>
        <p>For years, the gaming community has relied on neon-colored, heavily caffeinated syrups. While they provide an initial burst of hyper-focus, the resulting jitteriness completely ruins fine motor skills. You can&apos;t hit a flick shot when your hands are shaking.</p>
        
        <h2>Enter Orake</h2>
        <p>We sat down with top-tier professional gamers across the fighting game and tactical shooter communities to understand what they really needed. The consensus was clear: clean energy, no jitters, and absolutely no crash.</p>
        <p>Orake&apos;s natural caffeine profile, sourced from green tea extract, provides a smooth, sustained elevation in alertness. When combined with our zero-sugar base, it allows players to maintain surgical precision for hours on end.</p>
        
        <div className="highlight-box">
            <h3>Pro Tip from the Pros:</h3>
            <p>&quot;I used to drink three cans of the leading brand during a tournament. By the grand finals, I couldn&apos;t focus. Since switching to Orake Strawberry Vanilla, my energy is perfectly flat-lined at 100% all day.&quot; <strong>- Apex, Pro Gamer</strong></p>
        </div>
        
        <p>The next wave of gamers isn&apos;t compromising on their health or their performance. They are choosing clean, functional energy. They are choosing Orake.</p>
      </>
    )
  },
  "behind-the-flavor": {
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1200&auto=format&fit=crop",
    tag: "Flavor Lab",
    author: "THE TEAM",
    date: "OCT 01, 2025",
    title: "Behind The Flavor: Designing the Strawberry Vanilla Drop",
    content: (
      <>
        <p className="lead">Creating an energy drink that actually tastes good without relying on fifty grams of sugar is one of the hardest challenges in the beverage industry. Most &quot;zero sugar&quot; drinks taste like a science experiment gone wrong. We refused to accept that compromise.</p>
        
        <h2>47 Iterations Later</h2>
        <p>When we set out to create the Strawberry Vanilla flavor, our goal was simple: it had to taste like a premium, refreshing fruit smoothie, not a metallic battery.</p>
        <p>Our flavor lab went through 47 distinct iterations. Iteration 12 was too tart. Iteration 28 tasted too artificial. Iteration 41 was almost there, but lacked the creamy mouthfeel we were after.</p>
        
        <h2>Real Ingredients, Real Flavor</h2>
        <p>The breakthrough came when we decided to stop using generic flavor house compounds and started sourcing actual fruit extracts. The sharp, vibrant tartness of real strawberries cuts perfectly through the smooth, creamy finish of authentic Madagascar vanilla.</p>
        
        <ul>
            <li><strong>The Top Note:</strong> Bright, acidic strawberry that immediately wakes up the palate.</li>
            <li><strong>The Body:</strong> A clean, lightly carbonated mouthfeel enhanced by our prebiotic fiber blend.</li>
            <li><strong>The Finish:</strong> A lingering, soothing vanilla that leaves you refreshed, not sticky.</li>
        </ul>
        
        <p>It was an exhaustive process, but the moment the team tasted iteration 47, we knew we had it. It&apos;s not just a drink; it&apos;s a meticulously crafted flavor experience. Crack open a can and taste the obsession.</p>
      </>
    )
  }
};

export function generateStaticParams() {
  return [
    { slug: "science-of-hydration" },
    { slug: "late-night-sessions" },
    { slug: "behind-the-flavor" }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    return { title: "Post Not Found — Orake Blog" };
  }

  return {
    title: `${post.title} — Orake Blog`,
    description: `${post.tag} • By ${post.author} • ${post.date}. Read the full article on the Orake blog.`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogData[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#fafafa] min-h-screen pb-24">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[70vh] bg-[#15161b]">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#15161b] via-[#15161b]/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 lg:px-24 pb-12 md:pb-20">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className={`${textFont.className} inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-bold uppercase tracking-widest mb-8 transition-colors`}>
              <ArrowLeft size={16} />
              Back to Intel
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className={`${textFont.className} bg-[#de3e4f] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider`}>
                {post.tag}
              </span>
              <span className={`${textFont.className} text-white/70 text-xs font-bold uppercase tracking-widest`}>
                {post.date}
              </span>
            </div>
            
            <h1 className={`${titleFont.className} text-4xl md:text-6xl lg:text-7xl text-white uppercase leading-[1.05] tracking-wide`}>
              {post.title}
            </h1>
            
            <div className={`${textFont.className} flex items-center gap-3 mt-8 text-white/90 text-sm font-bold uppercase tracking-[0.2em]`}>
              <div className="w-8 h-[2px] bg-[#de3e4f]"></div>
              <span>Written by {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-16 md:pt-24">
        <article className={`blog-content ${textFont.className}`}>
          {post.content}
        </article>
      </div>

      {/* Embedded Styles for Blog Content to ensure it looks premium */}
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content {
          color: #333;
          font-size: 1.125rem;
          line-height: 1.8;
        }
        .blog-content p {
          margin-bottom: 2rem;
        }
        .blog-content .lead {
          font-size: 1.5rem;
          color: #15161b;
          font-weight: 500;
          line-height: 1.6;
          margin-bottom: 3rem;
        }
        .blog-content h2 {
          font-family: ${titleFont.style.fontFamily}, sans-serif;
          font-size: 2.5rem;
          color: #15161b;
          text-transform: uppercase;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: 0.02em;
        }
        .blog-content blockquote {
          border-left: 4px solid #de3e4f;
          padding-left: 2rem;
          margin: 3rem 0;
          font-size: 1.5rem;
          font-style: italic;
          color: #15161b;
        }
        .blog-content blockquote strong {
          display: block;
          font-size: 1rem;
          font-style: normal;
          margin-top: 1rem;
          color: #de3e4f;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .blog-content .highlight-box {
          background-color: #f5e0e1;
          border-radius: 1.5rem;
          padding: 2.5rem;
          margin: 3rem 0;
        }
        .blog-content .highlight-box h3 {
          font-family: ${titleFont.style.fontFamily}, sans-serif;
          font-size: 1.5rem;
          text-transform: uppercase;
          color: #de3e4f;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }
        .blog-content ul {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }
        .blog-content ul li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1rem;
        }
        .blog-content ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #de3e4f;
        }
        .blog-content ul li strong {
          color: #15161b;
        }
      `}} />
    </div>
  );
}
