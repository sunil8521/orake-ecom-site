'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, StarHalf } from "lucide-react";
import { useState } from "react";
import { headingFont, bodyFont } from "@/lib/fonts";
function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex justify-center md:justify-start items-center gap-1.5 mb-2 w-full">
      <div className="flex gap-0.5 text-[#dbba53]">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = rating >= star;
          const half = !filled && rating >= star - 0.5;
          return (
            <div key={star} className="relative w-4 h-4 sm:w-4 sm:h-4">
              <Star size={16} className="absolute inset-0 text-gray-200" fill="currentColor" strokeWidth={1} />
              {filled && <Star size={16} className="absolute inset-0 text-[#dbba53]" fill="currentColor" strokeWidth={1} />}
              {half && <StarHalf size={16} className="absolute inset-0 text-[#dbba53]" fill="currentColor" strokeWidth={1} />}
            </div>
          );
        })}
      </div>
      <span className={`${bodyFont.className} text-[10px] sm:text-[11px] font-bold text-gray-500 tracking-wider uppercase ml-1`}>
        ({reviews > 0 ? reviews : 0} REVIEWS)
      </span>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center gap-3">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@domain.com"
        className="flex-1 px-4 py-3 rounded-md border border-gray-200 focus:outline-none"
      />
      <button type="submit" className="bg-black text-white px-4 py-3 rounded-md font-bold">Subscribe</button>
      {subscribed && <span className="text-sm text-green-600 ml-3">Thanks for joining!</span>}
    </form>
  );
}

export default function CollectionsSection() {
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [stock1, setStock1] = useState(24);
  const [qty1, setQty1] = useState(1);
  const [added1, setAdded1] = useState(false);

  const [stock2, setStock2] = useState(3);
  const [qty2, setQty2] = useState(1);
  const [added2, setAdded2] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 150, damping: 15 } as any
    }
  };

  const badgeVariants = {
    initial: { rotate: -15, scale: 0, opacity: 0 },
    animate: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 400, delay: 0.2 } as any
    }
  };

  return (
    <section className="bg-white pt-19 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Gen Z Title Style */}
        <motion.div
          initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14 text-center flex flex-col items-center"
        >
          <div className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            Fresh Drops
          </div>
          <h2 className={`${headingFont.className} text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-black`}>
            OUR COLLECTIONS
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className={`${bodyFont.className} mt-4 text-sm md:text-base text-gray-900 max-w-2xl`}
          >
            Curated small-batch flavors and limited drops — crafted for bold taste seekers. Discover what's new and shop limited releases before they sell out.
          </motion.p>
        </motion.div>

        {/* Category Tabs / Pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className={`${bodyFont.className} mb-26 flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-wider`}
        >
          {['Strawberry Vanilla', 'Ginger Lemon'].map((tab, i) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.1, y: -4, rotate: (i % 2 === 0 ? 2 : -2) }}
              whileTap={{ scale: 0.95 }}
              className="transition-all px-5 py-2.5 rounded-full border-2 border-gray-200 hover:border-black hover:bg-black hover:text-white text-gray-500 bg-transparent shadow-sm hover:shadow-xl"
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* 2 Cans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8"
        >
          {/* Product Card 1 — Strawberry Vanilla */}
          <motion.div variants={itemVariants} className="group relative mt-36 sm:mt-40 md:mt-32 lg:mt-36 xl:mt-40">
            <motion.div
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-[2rem] sm:rounded-[2.5rem] h-[200px] sm:h-[220px] md:h-[200px] lg:h-[240px] xl:h-[270px] mb-6 shadow-lg group-hover:shadow-[0_30px_60px_rgba(194,91,94,0.25)] border border-transparent transition-all duration-500"
            >
              {/* Background with illustration watermark */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c25b5e]/10 via-[#f5e0e1] to-[#faf5f5]" />
                <Image
                  src="/pinkcanbg.png"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-100 transition-opacity duration-700"
                />
                <div className="absolute w-[150%] h-[150%] bg-gradient-to-br from-[#c25b5e]/20 to-transparent rounded-full -top-[50%] -right-[50%] blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Badges */}
              <motion.div
                variants={badgeVariants}
                className={`${bodyFont.className} absolute top-4 left-4 sm:top-5 sm:left-5 md:top-4 md:left-4 lg:top-5 lg:left-5 z-20 rounded-xl sm:rounded-2xl bg-[#c25b5e] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-black tracking-widest text-white shadow-xl -rotate-6 group-hover:-rotate-2 transition-transform duration-300`}
              >
                HYPE DROP
              </motion.div>

              {/* Heart Icon Top-Right */}
              <button
                onClick={() => setLiked1(!liked1)}
                className={`absolute top-4 right-4 sm:top-5 sm:right-5 md:top-4 md:right-4 lg:top-5 lg:right-5 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all active:scale-90 ${liked1
                  ? "bg-[#c25b5e] text-white shadow-md"
                  : "bg-white/80 text-gray-400 hover:text-[#c25b5e] hover:bg-white shadow-sm"
                  }`}
              >
                <Heart size={20} strokeWidth={2} fill={liked1 ? "currentColor" : "none"} />
              </button>

              {/* The Massive Pop-out Image — 20% bigger */}
              <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-10 w-full">
                <div className="relative h-[380px] sm:h-[420px] md:h-[380px] lg:h-[480px] xl:h-[560px]">
                  <Image
                    src="/can1.png"
                    alt="Strawberry Vanilla"
                    width={500}
                    height={1000}
                    priority
                    className="h-full w-auto object-contain drop-shadow-[0_25px_40px_rgba(194,91,94,0.45)] group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-500 pointer-events-auto"
                  />
                </div>
              </div>
            </motion.div>

            <div className="px-2 text-center md:text-left mt-8">
              <h3 className={`${bodyFont.className} mb-2 text-xl md:text-2xl font-black text-gray-900 group-hover:text-[#c25b5e] transition-colors leading-tight uppercase`}>
                Strawberry Vanilla
              </h3>
              <StarRating rating={5} reviews={24} />
              <div className={`${bodyFont.className} flex flex-col md:flex-row justify-between md:justify-start items-center md:gap-6 mt-2`}>
                <div className="flex flex-col items-center md:items-start gap-1">
                  <div>
                    <span className="text-2xl md:text-3xl font-black text-black">Rs. 10.00</span>
                    <span className="ml-3 text-lg text-gray-400 line-through decoration-2">Rs. 668.00</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {stock1 > 5 ? `${stock1} in stock` : (stock1 > 0 ? `Only ${stock1} left` : 'Out of stock')}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3 md:mt-0">
                  <div className="flex items-center border rounded-full overflow-hidden">
                    <button aria-label="decrease" onClick={() => setQty1(q => Math.max(1, q - 1))} className="px-3 py-1 text-sm">-</button>
                    <div className="px-4 py-1 text-sm font-bold">{qty1}</div>
                    <button aria-label="increase" onClick={() => setQty1(q => Math.min(stock1, q + 1))} className="px-3 py-1 text-sm">+</button>
                  </div>

                  <button onClick={() => {
                    if (stock1 <= 0) return;
                    const take = Math.min(qty1, stock1);
                    setStock1(s => s - take);
                    setQty1(1);
                    setAdded1(true);
                    console.log('Add to cart', { product: 'Strawberry Vanilla', qty: take });
                    setTimeout(() => setAdded1(false), 2000);
                  }} disabled={stock1 <= 0} className="bg-[#15161b] disabled:opacity-50 hover:bg-[#c25b5e] text-white w-10 h-10 md:w-12 md:h-12 rounded-[10px] md:rounded-[12px] flex items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-95 group/btn">
                    <ShoppingCart size={18} strokeWidth={2} className="group-hover/btn:-rotate-6 transition-transform" />
                  </button>
                  {added1 && <span className="text-sm text-green-600 font-bold">Added</span>}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Card 2 — Ginger Lemon */}
          <motion.div variants={itemVariants} className="group relative mt-36 sm:mt-40 md:mt-32 lg:mt-36 xl:mt-40">
            <motion.div
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-[2rem] sm:rounded-[2.5rem] h-[200px] sm:h-[220px] md:h-[200px] lg:h-[240px] xl:h-[270px] mb-6 shadow-lg group-hover:shadow-[0_30px_60px_rgba(219,186,83,0.3)] border border-transparent transition-all duration-500"
            >
              {/* Background with illustration watermark */}
              <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#dbba53]/10 via-[#f5f0dc] to-[#faf8f0]" />
                <Image
                  src="/yellowcanbg.png"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-100 transition-opacity duration-700"
                />
                <div className="absolute w-[150%] h-[150%] bg-gradient-to-bl from-[#dbba53]/20 to-transparent rounded-full -bottom-[50%] -left-[50%] blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Badges */}
              <motion.div
                variants={badgeVariants}
                className={`${bodyFont.className} absolute top-4 left-4 sm:top-5 sm:left-5 md:top-4 md:left-4 lg:top-5 lg:left-5 z-20 rounded-xl sm:rounded-2xl bg-[#dbba53] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-black tracking-widest text-white shadow-xl rotate-6 group-hover:rotate-2 transition-transform duration-300`}
              >
                RESTOCKED
              </motion.div>

              {/* Heart Icon Top-Right */}
              <button
                onClick={() => setLiked2(!liked2)}
                className={`absolute top-4 right-4 sm:top-5 sm:right-5 md:top-4 md:right-4 lg:top-5 lg:right-5 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all active:scale-90 ${liked2
                  ? "bg-[#dbba53] text-white shadow-md"
                  : "bg-white/80 text-gray-400 hover:text-[#dbba53] hover:bg-white shadow-sm"
                  }`}
              >
                <Heart size={20} strokeWidth={2} fill={liked2 ? "currentColor" : "none"} />
              </button>

              {/* The Massive Pop-out Image — 20% bigger */}
              <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none z-10 w-full">
                <div className="relative h-[380px] sm:h-[420px] md:h-[380px] lg:h-[480px] xl:h-[560px]">
                  <Image
                    src="/can2.png"
                    alt="Ginger Lemon"
                    width={500}
                    height={1000}
                    priority
                    className="h-full w-auto object-contain drop-shadow-[0_25px_40px_rgba(219,186,83,0.45)] group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-500 pointer-events-auto"
                  />
                </div>
              </div>
            </motion.div>

            <div className="px-2 text-center md:text-left mt-8">
              <h3 className={`${bodyFont.className} mb-2 text-xl md:text-2xl font-black text-gray-900 group-hover:text-[#dbba53] transition-colors leading-tight uppercase`}>
                Ginger Lemon
              </h3>
              <StarRating rating={4} reviews={12} />
              <div className={`${bodyFont.className} flex flex-col md:flex-row justify-between md:justify-start items-center md:gap-6 mt-2`}>
                <div className="flex flex-col items-center md:items-start gap-1">
                  <div>
                    <span className="text-2xl md:text-3xl font-black text-black">Rs. 20.00</span>
                    <span className="ml-3 text-lg text-gray-400 line-through decoration-2">Rs. 1499.00</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {stock2 > 5 ? `${stock2} in stock` : (stock2 > 0 ? `Only ${stock2} left` : 'Out of stock')}
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3 md:mt-0">
                  <div className="flex items-center border rounded-full overflow-hidden">
                    <button aria-label="decrease" onClick={() => setQty2(q => Math.max(1, q - 1))} className="px-3 py-1 text-sm">-</button>
                    <div className="px-4 py-1 text-sm font-bold">{qty2}</div>
                    <button aria-label="increase" onClick={() => setQty2(q => Math.min(stock2, q + 1))} className="px-3 py-1 text-sm">+</button>
                  </div>

                  <button onClick={() => {
                    if (stock2 <= 0) return;
                    const take = Math.min(qty2, stock2);
                    setStock2(s => s - take);
                    setQty2(1);
                    setAdded2(true);
                    console.log('Add to cart', { product: 'Ginger Lemon', qty: take });
                    setTimeout(() => setAdded2(false), 2000);
                  }} disabled={stock2 <= 0} className="bg-[#15161b] disabled:opacity-50 hover:bg-[#dbba53] text-white w-10 h-10 md:w-12 md:h-12 rounded-[10px] md:rounded-[12px] flex items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-95 group/btn">
                    <ShoppingCart size={18} strokeWidth={2} className="group-hover/btn:-rotate-6 transition-transform" />
                  </button>
                  {added2 && <span className="text-sm text-green-600 font-bold">Added</span>}
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
