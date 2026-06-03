"use client";
import { ArrowRight, Tag, Shield, RotateCcw, Loader2, CheckCircle, Percent } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";
import { useState } from "react";
import { createRazorpayOrder } from "@/actions/payment";
import { useAuthStore } from "@/store/useAuthStore";
import { useSession } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface OrderSummaryProps {
  subtotal: number;
  savings: number;
  total: number;
  itemsQty: number;
  pastOrdersCount: number;
  onPaymentSuccess?: (orderId: string) => void;
}

export default function OrderSummary({ subtotal, savings, total, itemsQty, pastOrdersCount, onPaymentSuccess }: OrderSummaryProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { openAuthModal } = useAuthStore();
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const isFirstTime = pastOrdersCount === 0;
  const originalSubtotal = subtotal + savings;
  
  // First time buyers pay 80% of original (20% off)
  // Returning buyers pay 85% of original (15% off)
  const targetRate = isFirstTime ? 0.80 : 0.85;
  const targetTotal = Math.round(originalSubtotal * targetRate);
  
  // Auto discount is the extra amount needed to reach the target total
  const autoDiscount = Math.max(0, subtotal - targetTotal);
  const discountLabel = "FIRST TIME EXTRA OFF";

  const finalTotal = Math.max(0, total - autoDiscount);
  const isValidCheckout = itemsQty >= 2;

  const handleCheckout = () => {
    if (!isValidCheckout) return;
    if (!user) {
      toast.error("Please login to complete your order");
      openAuthModal("login");
      return;
    }
    
    router.push(`/checkout`);
  };
  return (
    <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
      <div className="bg-[#15161b] rounded-[1.5rem] p-6 sm:p-8 text-white shadow-xl lg:sticky lg:top-28">
        <h3 className={`${textFont.className} text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-gray-400 mb-5 sm:mb-6 pb-4 border-b border-white/10`}>
          Order Summary
        </h3>

        {/* Price Breakdown */}
        <div className="space-y-4 mb-7">
          <div className="flex justify-between items-baseline">
            <span className={`${textFont.className} text-gray-400 text-sm sm:text-base`}>Subtotal</span>
            <span className={`${textFont.className} text-white text-sm sm:text-base font-semibold`}>₹{subtotal.toFixed(0)}</span>
          </div>

          {savings > 0 && (
            <div className="flex justify-between items-baseline">
              <span className={`${textFont.className} text-[#4ade80] text-sm sm:text-base flex items-center gap-1.5`}>
                <Tag size={14} /> Savings
              </span>
              <span className={`${textFont.className} text-[#4ade80] text-sm sm:text-base font-semibold`}>
                -₹{savings.toFixed(0)}
              </span>
            </div>
          )}

          {autoDiscount > 0 && (
            <div className="flex justify-between items-baseline">
              <span className={`${textFont.className} text-[#dbba53] text-sm sm:text-base flex items-center gap-1.5`}>
                <Percent size={14} /> Auto Discount
              </span>
              <div className="text-right">
                <span className={`${textFont.className} text-[#dbba53] text-[10px] block mb-0.5 uppercase tracking-widest`}>{discountLabel}</span>
                <span className={`${textFont.className} text-[#dbba53] text-sm sm:text-base font-semibold`}>
                  -₹{autoDiscount.toFixed(0)}
                </span>
              </div>
            </div>
          )}

          <div className="h-px bg-white/10 !mt-5" />

          <div className="flex justify-between items-baseline !mt-4">
            <span className={`${textFont.className} text-white text-base sm:text-lg font-bold uppercase tracking-widest`}>Total</span>
            <div className="text-right">
              {autoDiscount > 0 && (
                <span className={`${textFont.className} text-gray-500 text-xs line-through block mb-0.5`}>
                  ₹{total.toFixed(0)}
                </span>
              )}
              <span className={`${titleFont.className} text-white text-3xl sm:text-4xl tracking-tight`}>
                ₹{finalTotal.toFixed(0)}
              </span>
            </div>
          </div>
        </div>

        {/* Discount automatically applied, manual coupons removed */}

        {/* Checkout Button */}
        {!isValidCheckout && (
          <div className="bg-[#c25b5e]/10 border border-[#c25b5e]/20 rounded-xl p-4 mb-4 text-center">
            <p className={`${textFont.className} text-[#c25b5e] text-xs sm:text-sm font-bold uppercase tracking-widest`}>
              Please add {2 - itemsQty} more item{2 - itemsQty > 1 ? 's' : ''} to checkout. Minimum order is 2 items.
            </p>
          </div>
        )}
        <button 
          onClick={handleCheckout}
          disabled={isProcessing || !isValidCheckout}
          className={`${textFont.className} w-full bg-[#c25b5e] hover:bg-[#de3e4f] disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl text-base font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(194,91,94,0.35)] active:scale-[0.98] flex items-center justify-center gap-3`}
        >
          {isProcessing ? (
             <><Loader2 size={20} className="animate-spin" /> Processing...</>
          ) : (
             <>Checkout <ArrowRight size={20} /></>
          )}
        </button>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-6 pt-5 border-t border-white/5">
          {[
            { icon: Shield, label: "Secure" },
            { icon: RotateCcw, label: "Returns" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={16} className="text-gray-500" />
              <span className={`${textFont.className} text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
