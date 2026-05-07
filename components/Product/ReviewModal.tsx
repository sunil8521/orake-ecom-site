"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Loader2 } from "lucide-react";
import { headingFont, bodyFont } from "@/lib/fonts";
import { submitReview } from "@/actions/review";
import { authClient } from "@/lib/auth-client";

// Define schema
const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  text: z.string().min(10, "Review must be at least 10 characters").max(500, "Review too long"),
  name: z.string().optional(),
  email: z.string().email("Invalid email").optional(),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
  productSlug: string;
}

export default function ReviewModal({ isOpen, onClose, productId, productSlug }: ReviewModalProps) {
  const session = authClient.useSession();
  const isAuthenticated = !!session.data?.user;

  const [hoveredStar, setHoveredStar] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 5,
      text: "",
      name: "",
      email: "",
    },
  });

  const currentRating = watch("rating");

  const onSubmit = async (data: ReviewFormValues) => {
    // If not authenticated, we need name and email
    if (!isAuthenticated && (!data.name || !data.email)) {
       setErrorMsg("Name and email are required for guests.");
       return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData();
    formData.append("productId", productId);
    formData.append("productSlug", productSlug);
    formData.append("rating", data.rating.toString());
    formData.append("text", data.text);
    if (data.name) formData.append("name", data.name);
    if (data.email) formData.append("email", data.email);

    const result = await submitReview(formData);
    setIsSubmitting(false);

    if (result.success) {
      reset();
      onClose();
    } else {
      setErrorMsg(result.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#15161b]/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl pointer-events-auto"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h3 className={`${headingFont.className} text-xl uppercase tracking-widest text-[#15161b]`}>Write a Review</h3>
                <button
                  onClick={onClose}
                  className="p-2 bg-gray-50 text-gray-400 hover:text-[#15161b] hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
                {errorMsg && (
                    <div className="mb-6 p-4 bg-red-50 text-red-500 text-sm font-bold rounded-xl border border-red-100">
                        {errorMsg}
                    </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Rating Selector */}
                  <div>
                    <label className={`${bodyFont.className} block text-xs uppercase tracking-widest font-bold text-gray-500 mb-3`}>Your Rating</label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setValue("rating", star, { shouldValidate: true })}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          className="transition-transform hover:scale-110 focus:outline-none"
                        >
                          <Star
                            size={32}
                            className={`transition-colors ${(hoveredStar || currentRating) >= star ? "fill-[#dbba53] text-[#dbba53]" : "fill-gray-100 text-gray-200"}`}
                          />
                        </button>
                      ))}
                    </div>
                    {errors.rating && <p className="text-red-500 text-xs mt-2">{errors.rating.message}</p>}
                  </div>

                  {/* Text Review */}
                  <div>
                    <label className={`${bodyFont.className} block text-xs uppercase tracking-widest font-bold text-gray-500 mb-3`}>Your Review</label>
                    <textarea
                      {...register("text")}
                      rows={5}
                      placeholder="What did you like or dislike? What did you use this product for?"
                      className={`${bodyFont.className} w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#de3e4f] focus:bg-white transition-colors resize-none placeholder:text-gray-400`}
                    />
                    {errors.text && <p className="text-red-500 text-xs mt-2">{errors.text.message}</p>}
                  </div>

                  {/* Guest Fields */}
                  {!isAuthenticated && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                         <label className={`${bodyFont.className} block text-xs uppercase tracking-widest font-bold text-gray-500 mb-3`}>Name</label>
                         <input
                            {...register("name")}
                            type="text"
                            placeholder="John Doe"
                            className={`${bodyFont.className} w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#de3e4f] focus:bg-white transition-colors placeholder:text-gray-400`}
                         />
                         {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
                      </div>
                      <div>
                         <label className={`${bodyFont.className} block text-xs uppercase tracking-widest font-bold text-gray-500 mb-3`}>Email</label>
                         <input
                            {...register("email")}
                            type="email"
                            placeholder="john@example.com"
                            className={`${bodyFont.className} w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#de3e4f] focus:bg-white transition-colors placeholder:text-gray-400`}
                         />
                         {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${headingFont.className} w-full flex items-center justify-center py-5 bg-[#15161b] text-white font-bold tracking-widest uppercase rounded-xl hover:bg-[#de3e4f] transition-all disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                        <div className="flex items-center gap-2">
                           <Loader2 size={18} className="animate-spin" /> Submitting...
                        </div>
                    ) : (
                        "Submit Review"
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
