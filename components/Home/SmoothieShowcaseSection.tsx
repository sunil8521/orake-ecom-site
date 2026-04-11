
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for fade/slide in
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const SmoothieShowcaseSection = () => {
  return (
    <div className="relative h-[300vh] w-full mt-74">
      {/* Section 1 */}
      <motion.section
        className="sticky top-1/2 -translate-y-1/2 w-full min-h-[70vh] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl mt-12 z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ background: "white" }}
      >
        <div className="flex-1 bg-[#ce777b] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl">
            <Image
              src="/can1.png"
              alt="Green Smoothie"
              width={620}
              height={420}
              className="transition-transform duration-500 scale-110"
            />
          </div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Green Smoothie</h2>
          <p className="text-white text-lg mb-6">Guava flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#a2b86c] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex-1 bg-[#f0f0f0] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-[#ce777b] text-2xl md:text-3xl font-bold mb-1">Berry Smoothie</h2>
          <p className="text-[#ce777b] text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-[#ce777b] rounded-full text-[#ce777b] font-semibold hover:bg-black hover:text-white transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex-1 bg-[#f0f0f0] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-[#e2b85b] text-2xl md:text-3xl font-bold mb-1">Coffee Milk</h2>
          <p className="text-white text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#ce777b] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
      </motion.section>

      {/* Section 2 */}
      <motion.section
        className="sticky top-1/2 -translate-y-1/2 w-full min-h-[70vh] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl z-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ background: "white" }}
      >
        <div className="flex-1 bg-[#f0f0f0] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Green Smoothie</h2>
          <p className="text-white text-lg mb-6">Guava flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#a2b86c] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex-1 bg-[#d7b452] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl">
            <Image
              src="/can2.png"
              alt="Berry Smoothie"
              width={620}
              height={420}
              className="transition-transform duration-500 scale-110"
            />
          </div>
          <h2 className="text-[#ffffff] text-2xl md:text-3xl font-bold mb-1">Berry Smoothie</h2>
          <p className="text-[#ffffff] text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-[#ffffff] rounded-full text-[#ffffff] font-semibold hover:bg-black hover:text-white transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex-1 bg-[#f0f0f0] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-[#e2b85b] text-2xl md:text-3xl font-bold mb-1">Coffee Milk</h2>
          <p className="text-white text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#ce777b] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section
        className="sticky top-1/2 -translate-y-1/2 w-full min-h-[70vh] flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl z-30"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ background: "white" }}
      >
        <div className="flex-1 bg-[#ffffff] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">Green Smoothie</h2>
          <p className="text-white text-lg mb-6">Guava flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#a2b86c] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex-1 bg-[#ffffff] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl"></div>
          <h2 className="text-[#ce777b] text-2xl md:text-3xl font-bold mb-1">Berry Smoothie</h2>
          <p className="text-[#ce777b] text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-[#ce777b] rounded-full text-[#ce777b] font-semibold hover:bg-black hover:text-white transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
        <div className="flex-1 bg-[#ce777b] flex flex-col items-center justify-center py-12 px-4">
          <div className="mb-8 overflow-hidden group rounded-2xl">
            <Image
              src="/can1.png"
              alt="Coffee Milk"
              width={620}
              height={420}
              className="transition-transform duration-500 scale-110"
            />
          </div>
          <h2 className="text-[#e2b85b] text-2xl md:text-3xl font-bold mb-1">Coffee Milk</h2>
          <p className="text-white text-lg mb-6">Delicious flavour</p>
          <button className="flex items-center gap-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#ce777b] transition-colors">
            View more <span className="text-xl">→</span>
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default SmoothieShowcaseSection;
