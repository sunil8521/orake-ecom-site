"use client";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    rating: 5.0,
    title: "Exceptional Dining Experience!",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author: "Theresa Webb",
    role: "Happy Guest",
    image: "https://placehold.co/100x100/e0e0e0/333333.jpg?text=TW",
  },
  {
    rating: 5.0,
    title: "Delicious & Memorable!",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author: "Leslie Alexander",
    role: "Happy Guest",
    image: "https://placehold.co/100x100/e0e0e0/333333.jpg?text=LA",
  },
];

export default function Testimonials() {
  const tearPoints = Array.from({ length: 300 }).map((_, i) => {
    const x = 100 - (i * (100 / 299));
    const wave1 = Math.sin(i * 0.1) * 8;
    const wave2 = Math.sin(i * 0.4) * 4;
    const wave3 = Math.sin(i * 1.0) * 2;
    const pseudoRandom = ((i * i * 37) % 12) - 6; 
    let y = 35 + wave1 + wave2 + wave3 + pseudoRandom;
    y = Math.max(0, Math.min(100, y)); 
    return `${x.toFixed(2)}% ${y.toFixed(2)}%`;
  }).join(', ');
  
  const topTearPath = `polygon(0 0, 100% 0, 100% 10%, ${tearPoints}, 0 10%)`;
  const bottomTearPath = `polygon(0 100%, 100% 100%, 100% 90%, ${tearPoints}, 0 90%)`;

  return (
    <section id="testimonials" className="relative w-full py-24 md:py-32 -mt-[2px] z-20">
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1719941257432-972e62c890d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Testimonials background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/30 to-black/20" />
      </div>

      {/* ── Torn Paper Top ── */}
      <div
        className="absolute -top-[2px] left-0 w-full h-10 sm:h-14 bg-white z-20 pointer-events-none"
        style={{
          clipPath: topTearPath,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 text-sm flex justify-center gap-0.5">♦♦♦</span>
          <p className="text-red-500 text-[11px] font-bold uppercase tracking-[4px] mt-2 mb-3">
            TESTIMONIALS
          </p>
          <h2 className="font-playfair font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            Testimonials from Our <br className="hidden sm:block" />
            <span className="text-red-500 italic">Valued Guests</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {testimonials.map((t, idx) => (
             <motion.div 
               key={idx} 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 + (idx * 0.2), ease: "easeOut" }}
               className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-white/5 shadow-2xl text-left bg-gradient-to-br from-white/10 to-transparent"
             >
                 <div className="flex items-center gap-2 mb-6 text-orange-400">
                     <FaStar size={18} />
                     <FaStar size={18} />
                     <FaStar size={18} />
                     <FaStar size={18} />
                     <FaStar size={18} />
                     <span className="text-white ml-2 font-medium">{t.rating.toFixed(1)}</span>
                 </div>
                 <h3 className="font-playfair text-xl md:text-[22px] font-bold text-white mb-4">
                     {t.title}
                 </h3>
                 <p className="text-gray-300 text-[13px] md:text-sm leading-relaxed mb-8 font-light">
                     {t.text}
                 </p>
                 <div className="flex items-center gap-4">
                     <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border-2 border-white/20 object-cover shadow-sm" />
                     <div>
                         <p className="font-playfair text-white text-[17px] leading-tight">{t.author}</p>
                         <p className="text-gray-400 text-[12px]">{t.role}</p>
                     </div>
                 </div>
             </motion.div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 mt-14">
            <div className="w-10 h-[3px] bg-red-600 rounded-full"></div>
            <div className="w-6 h-[3px] bg-white/30 rounded-full cursor-pointer hover:bg-white/50 transition-colors"></div>
            <div className="w-6 h-[3px] bg-white/30 rounded-full cursor-pointer hover:bg-white/50 transition-colors"></div>
            <div className="w-6 h-[3px] bg-white/30 rounded-full cursor-pointer hover:bg-white/50 transition-colors"></div>
        </div>
      </div>

      {/* ── Torn Paper Bottom ── */}
      <div
        className="absolute -bottom-[2px] left-0 w-full h-10 sm:h-14 bg-white z-20 pointer-events-none"
        style={{
          clipPath: bottomTearPath,
        }}
      />
    </section>
  );
}
