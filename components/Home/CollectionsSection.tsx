'use client';

import Image from "next/image";
import { Anton, Oswald } from "next/font/google";
import { motion } from "framer-motion";

const headingFont = Anton({ subsets: ["latin"], weight: "400" });
const bodyFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function CollectionsSection() {
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
      transition: { type: "spring", bounce: 0.5, duration: 0.8 } 
    }
  };

  const badgeVariants = {
    initial: { rotate: -15, scale: 0, opacity: 0 },
    animate: { 
      rotate: 0, 
      scale: 1, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 200, delay: 0.5 } 
    }
  };

  return (
    <section className="bg-white py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Gen Z Title Style */}
        <motion.div
           initial={{ opacity: 0, y: -30, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-14 text-center flex flex-col items-center"
        >
          <div className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-4 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            Fresh Drops
          </div>
          <h2 className={`${headingFont.className} text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-black via-gray-800 to-gray-500`}>
            OUR COLLECTIONS
          </h2>
        </motion.div>

        {/* Category Tabs / Pills */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`${bodyFont.className} mb-16 flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-wider`}
        >
          {['Curated box', 'Non-Algo Beer', 'Indie sodas', 'Mixers', 'Super Cola', 'Energy'].map((tab, i) => (
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8"
        >
          {/* Product Card 1 */}
          <motion.div variants={itemVariants} className="group relative mt-24 md:mt-32">
            <motion.div 
               whileHover={{ y: -10 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="relative rounded-[2.5rem] h-[240px] md:h-[280px] lg:h-[320px] mb-6 shadow-lg group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-transparent transition-all duration-500"
            >
              {/* Background layer with overflow hidden */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-[2.5rem] overflow-hidden">
                 <div className="absolute w-[150%] h-[150%] bg-gradient-to-br from-[#c25b5e]/20 to-transparent rounded-full -top-[50%] -right-[50%] blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Badges */}
              <motion.div 
                variants={badgeVariants}
                className={`${bodyFont.className} absolute top-6 left-6 z-20 rounded-2xl bg-[#c25b5e] px-4 py-2 text-sm font-black tracking-widest text-white shadow-xl -rotate-6 group-hover:-rotate-2 transition-transform duration-300`}
              >
                HYPE DROP
              </motion.div>

              {/* The Massive Pop-out Image */}
              <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none z-10 w-full">
                <div className="relative h-[360px] sm:h-[380px] md:h-[380px] lg:h-[460px]">
                  <Image
                    src="/can1.png"
                    alt="Fan Favorites Beer Box"
                    width={500}
                    height={1000}
                    priority
                    className="h-full w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)] group-hover:scale-110 group-hover:rotate-[4deg] group-hover:-translate-y-6 transition-all duration-500 pointer-events-auto"
                  />
                </div>
              </div>
            </motion.div>
            
            <div className="px-2 text-center md:text-left mt-8">
               <h3 className={`${bodyFont.className} mb-3 text-2xl md:text-3xl font-black text-gray-900 group-hover:text-[#c25b5e] transition-colors leading-tight uppercase`}>
                 Fan Favorites Beer
               </h3>
               <div className="flex justify-center md:justify-start gap-1 mb-3 text-xl tracking-widest">
                 <span className="text-yellow-400">★★★★★</span>
               </div>
               <div className={`${bodyFont.className} flex justify-center md:justify-start items-center gap-3`}>
                 <span className="text-3xl md:text-4xl font-black text-black">Rs. 10.00</span>
                 <span className="text-xl text-gray-400 line-through decoration-2">Rs. 668.00</span>
               </div>
            </div>
          </motion.div>

          {/* Product Card 2 */}
          <motion.div variants={itemVariants} className="group relative mt-24 md:mt-32">
            <motion.div 
               whileHover={{ y: -10 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               className="relative rounded-[2.5rem] h-[240px] md:h-[280px] lg:h-[320px] mb-6 shadow-lg group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-transparent transition-all duration-500"
            >
              {/* Background layer with overflow hidden */}
              <div className="absolute inset-0 bg-gradient-to-tl from-gray-100 to-gray-50 rounded-[2.5rem] overflow-hidden">
                <div className="absolute w-[150%] h-[150%] bg-gradient-to-bl from-black/20 to-transparent rounded-full -bottom-[50%] -left-[50%] blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none" />
              </div>

              {/* Badges */}
              <motion.div 
                variants={badgeVariants}
                className={`${bodyFont.className} absolute top-6 left-6 z-20 rounded-2xl bg-black px-4 py-2 text-sm font-black tracking-widest text-white shadow-xl rotate-6 group-hover:rotate-2 transition-transform duration-300`}
              >
                RESTOCKED
              </motion.div>

              {/* The Massive Pop-out Image */}
              <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none z-10 w-full">
                <div className="relative h-[360px] sm:h-[380px] md:h-[380px] lg:h-[460px]">
                  <Image
                    src="/can2.png"
                    alt="Crack Open the Chaos"
                    width={500}
                    height={1000}
                    priority
                    className="h-full w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)] group-hover:scale-110 group-hover:-rotate-[4deg] group-hover:-translate-y-6 transition-all duration-500 pointer-events-auto"
                  />
                </div>
              </div>
            </motion.div>

            <div className="px-2 text-center md:text-left mt-8">
               <h3 className={`${bodyFont.className} mb-3 text-2xl md:text-3xl font-black text-gray-900 group-hover:text-black transition-colors leading-tight uppercase`}>
                 Chaos Edition
               </h3>
               <div className="flex justify-center md:justify-start items-center gap-2 mb-3">
                 <span className="tracking-widest text-[#120f0f] text-xl">★★★★☆</span>
                 <span className={`${bodyFont.className} text-sm font-bold text-gray-400 tracking-widest uppercase ml-2`}>12 reviews</span>
               </div>
               <div className={`${bodyFont.className} flex justify-center md:justify-start items-center gap-3`}>
                 <span className="text-3xl md:text-4xl font-black text-black">Rs. 20.00</span>
                 <span className="text-xl text-gray-400 line-through decoration-2">Rs. 1499.00</span>
               </div>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
