"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headingFont, bodyFont } from "@/lib/fonts";
import ReviewModal from "./ReviewModal";
import { PopulatedReview } from "@/lib/data/review";

interface ProductTabsProps {
  product: {
    _id: string;
    slug: string;
    name: string;
    description: string;
    numReviews: number;
  };
  reviews: PopulatedReview[];
}

export default function ProductTabs({ product, reviews }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use mock reviews if none exist, per user request
  const displayReviews = reviews.length > 0 ? reviews : [
    {
      _id: "mock1",
      rating: 5,
      name: "S. Maharana",
      text: "Super drink was extremely refreshing and perfectly fizzy. Highly recommend!",
      createdAt: new Date().toISOString()
    },
    {
      _id: "mock2",
      rating: 4,
      name: "A. Kumar",
      text: "Loved the taste. Great alternative to sugary sodas.",
      createdAt: new Date().toISOString()
    }
  ];

  // Calculate average rating
  const totalRating = displayReviews.reduce((sum, rev) => sum + rev.rating, 0);
  const avgRating = displayReviews.length > 0 ? (totalRating / displayReviews.length).toFixed(1) : "5.0";
  const numReviews = reviews.length > 0 ? reviews.length : displayReviews.length;

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-24 relative mt-10">
      <div className="flex items-center gap-8 border-b border-gray-100 mb-10">
        <button
          onClick={() => setActiveTab("description")}
          className={`${headingFont.className} text-xl sm:text-2xl uppercase tracking-wider pb-4 transition-colors relative ${activeTab === "description" ? "text-[#15161b]" : "text-gray-400 hover:text-[#15161b]"}`}
        >
          Description
          {activeTab === "description" && (
            <motion.div layoutId="tab-indicator" className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#c25b5e]" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`${headingFont.className} text-xl sm:text-2xl uppercase tracking-wider pb-4 transition-colors relative ${activeTab === "reviews" ? "text-[#15161b]" : "text-gray-400 hover:text-[#15161b]"}`}
        >
          Customer Reviews
          {activeTab === "reviews" && (
            <motion.div layoutId="tab-indicator" className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#c25b5e]" />
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
              className={`${bodyFont.className} text-gray-500 leading-relaxed max-w-4xl text-[15px] sm:text-base space-y-6`}
            >
              <p>{product.description}</p>
              <p>How does it taste then? Delightfully tasty! Sweetened with real fruit extracts only, it's a supercool and healthier alternative to the usual energy drinks. You can enjoy it anytime, whether you're watching a movie, partying, or simply hanging out with friends.</p>
              <p>So, if you want to savor the classic taste sans the sugar, make a smart choice today. Order Orake {product.name} to enjoy all the fizz and flavor, and say goodbye to all the guilt.</p>
            </motion.div>
          )}

          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20"
            >
              {/* Summary */}
              <div className="col-span-1">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-[#dbba53] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm ${i < Math.round(Number(avgRating)) ? "text-[#dbba53]" : "text-gray-200"}`}>
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <span className={`${headingFont.className} text-4xl sm:text-5xl text-[#15161b] leading-none`}>{avgRating}</span>
                </div>
                <p className={`${bodyFont.className} text-xs text-gray-400 mb-8 uppercase tracking-[0.2em] font-bold`}>Based on {numReviews} reviews</p>

                <div className="space-y-3 mb-10">
                  {[5, 4, 3, 2, 1].map((star) => {
                    const count = displayReviews.filter(r => r.rating === star).length;
                    const percent = displayReviews.length > 0 ? (count / displayReviews.length) * 100 : 0;
                    return (
                      <div key={star} className="flex items-center gap-3">
                        <div className="flex text-[#dbba53] gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 ${i < star ? "text-[#dbba53]" : "text-gray-200"}`}>
                              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                          ))}
                        </div>
                        <div className="flex-1 h-[6px] bg-gray-100 rounded-full overflow-hidden">
                          <div className={`h-full bg-[#15161b] transition-all duration-500`} style={{ width: `${percent}%` }} />
                        </div>
                        <span className={`${bodyFont.className} text-xs text-gray-400 font-bold w-4 text-right`}>{count}</span>
                      </div>
                    )
                  })}
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`${bodyFont.className} flex items-center justify-center gap-3 w-full h-[60px] bg-[#15161b] hover:bg-[#c25b5e] text-white text-sm font-bold uppercase tracking-widest whitespace-nowrap rounded-full transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(194,91,94,0.3)] hover:-translate-y-1 active:translate-y-0`}
                >
                  Write a Review
                </button>
              </div>

              {/* Review List */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {displayReviews.map((review: any) => {
                  const reviewerName = review.userID?.name || review.name || "Anonymous";
                  const initial = reviewerName.charAt(0).toUpperCase();

                  return (
                    <div key={review._id} className="bg-white p-6 sm:p-8 rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="flex text-[#dbba53] gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 sm:w-5 sm:h-5 drop-shadow-sm ${i < review.rating ? "text-[#dbba53]" : "text-gray-200"}`}>
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                              </svg>
                            ))}
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 border border-gray-100 shadow-inner">
                              <span className={`${headingFont.className} text-lg`}>{initial}</span>
                            </div>
                            <span className={`${bodyFont.className} font-bold text-[#15161b] uppercase text-sm tracking-wide`}>{reviewerName}</span>
                          </div>
                        </div>
                        <span className={`${bodyFont.className} text-[11px] font-bold tracking-widest text-gray-400 mt-1`}>
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className={`${bodyFont.className} text-[15px] text-gray-500 leading-relaxed`}>{review.text}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productId={product._id}
        productSlug={product.slug}
      />
    </div>
  );
}
