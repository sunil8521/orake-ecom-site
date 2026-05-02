"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headingFont, bodyFont } from "@/lib/fonts";

interface ProductTabsProps {
  product: {
    name: string;
    description: string;
    numReviews: number;
  };
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-24">
      <div className="flex items-center gap-8 border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab("description")}
          className={`${headingFont.className} text-xl sm:text-2xl uppercase tracking-wider pb-4 transition-colors relative ${activeTab === "description" ? "text-[#15161b]" : "text-gray-400 hover:text-[#15161b]"}`}
        >
          Description
          {activeTab === "description" && (
            <motion.div layoutId="tab-indicator" className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#de3e4f]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`${headingFont.className} text-xl sm:text-2xl uppercase tracking-wider pb-4 transition-colors relative ${activeTab === "reviews" ? "text-[#15161b]" : "text-gray-400 hover:text-[#15161b]"}`}
        >
          Customer Reviews
          {activeTab === "reviews" && (
            <motion.div layoutId="tab-indicator" className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#de3e4f]" />
          )}
        </button>
      </div>

      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          {activeTab === "description" && (
            <motion.div
              key="desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`${bodyFont.className} text-gray-600 leading-relaxed max-w-4xl`}
            >
              <p className="mb-6">{product.description}</p>
              <p className="mb-6">How does it taste then? Delightfully tasty! Sweetened with real fruit extracts only, it's a supercool and healthier alternative to the usual energy drinks. You can enjoy it anytime, whether you're watching a movie, partying, or simply hanging out with friends.</p>
              <p>So, if you want to savor the classic taste sans the sugar, make a smart choice today. Order Orake {product.name} to enjoy all the fizz and flavor, and say goodbye to all the guilt.</p>
            </motion.div>
          )}

          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {/* Summary */}
              <div className="col-span-1">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-[#dbba53] text-2xl">★★★★★</div>
                  <span className={`${headingFont.className} text-3xl text-[#15161b]`}>5.00</span>
                </div>
                <p className={`${bodyFont.className} text-sm text-gray-500 mb-6 uppercase tracking-widest font-bold`}>Based on {product.numReviews} reviews</p>

                <div className="space-y-2 mb-8">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-3">
                      <div className="flex text-[#dbba53] text-sm">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < star ? "" : "text-gray-200"}>★</span>
                        ))}
                      </div>
                      <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full bg-[#15161b] ${star === 5 ? 'w-full' : 'w-0'}`} />
                      </div>
                      <span className={`${bodyFont.className} text-xs text-gray-400 font-bold w-4`}>{star === 5 ? product.numReviews : 0}</span>
                    </div>
                  ))}
                </div>

                <button className={`${bodyFont.className} w-full py-4 bg-[#15161b] text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#de3e4f] transition-colors`}>
                  Write a Review
                </button>
              </div>

              {/* Review List */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex text-[#dbba53] text-sm mb-2">★★★★★</div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                            <span className={`${headingFont.className}`}>S</span>
                          </div>
                          <span className={`${bodyFont.className} font-bold text-[#15161b] uppercase text-sm`}>Sunil M.</span>
                        </div>
                      </div>
                      <span className={`${bodyFont.className} text-xs text-gray-400`}>12/04/2026</span>
                    </div>
                    <h4 className={`${headingFont.className} text-lg text-[#15161b] mb-2`}>Loved the taste.</h4>
                    <p className={`${bodyFont.className} text-sm text-gray-600 leading-relaxed`}>Super drink was extremely refreshing and perfectly fizzy. Highly recommend!</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
