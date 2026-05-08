"use client";
import { ArrowRight, Tag, Shield, RotateCcw, Loader2, CheckCircle, Percent } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";
import { useState } from "react";
import { createRazorpayOrder } from "@/actions/payment";
import { useAuthStore } from "@/store/useAuthStore";
import { useSession } from "@/lib/auth-client";
import { toast } from "sonner";

interface OrderSummaryProps {
  subtotal: number;
  savings: number;
  total: number;
  onPaymentSuccess?: (orderId: string) => void;
}

const VALID_COUPONS: Record<string, { discount: number; type: "percent" | "flat"; label: string }> = {
  ORAKE10: { discount: 10, type: "percent", label: "10% off" },
  ORAKE50: { discount: 50, type: "flat", label: "₹50 off" },
  WELCOME: { discount: 15, type: "percent", label: "15% off" },
};

export default function OrderSummary({ subtotal, savings, total, onPaymentSuccess }: OrderSummaryProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number; label: string } | null>(null);
  const [couponError, setCouponError] = useState("");
  const { openAuthModal } = useAuthStore();
  const { data: session } = useSession();
  const user = session?.user;

  const applyCoupon = () => {
    setCouponError("");
    const code = couponCode.trim().toUpperCase();
    if (!code) return;

    const coupon = VALID_COUPONS[code];
    if (!coupon) {
      setCouponError("Invalid coupon code");
      setAppliedCoupon(null);
      return;
    }

    const discountAmount = coupon.type === "percent"
      ? Math.round((subtotal * coupon.discount) / 100)
      : coupon.discount;

    setAppliedCoupon({ code, discount: discountAmount, label: coupon.label });
    toast.success(`Coupon "${code}" applied — ${coupon.label}!`);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
  };

  const couponDiscount = appliedCoupon?.discount ?? 0;
  const finalTotal = Math.max(0, total - couponDiscount);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please login to complete your order");
      openAuthModal("login");
      return;
    }

    setIsProcessing(true);

    try {
      const res = await loadRazorpayScript();
      if (!res) {
        toast.error("Failed to load Razorpay. Please check your connection.");
        setIsProcessing(false);
        return;
      }

      const result = await createRazorpayOrder(finalTotal);
      
      if (!result.success || !result.orderId) {
        toast.error(result.error || "Could not initialize checkout");
        setIsProcessing(false);
        return;
      }

      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: Number(result.amount) || finalTotal * 100,
        currency: result.currency || "INR",
        name: "Orake Energy",
        description: "Water Bottle Order",
        order_id: result.orderId,
        handler: function (response) {
          if (onPaymentSuccess) {
            onPaymentSuccess(response.razorpay_payment_id);
          } else {
             toast.success("Payment successful!");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
        },
        theme: {
          color: "#c25b5e",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        toast.error(response.error.description || "Payment failed");
      });
      
      paymentObject.open();

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong during checkout");
    } finally {
      setIsProcessing(false);
    }
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

          {appliedCoupon && (
            <div className="flex justify-between items-baseline">
              <span className={`${textFont.className} text-[#dbba53] text-sm sm:text-base flex items-center gap-1.5`}>
                <Percent size={14} /> Coupon
              </span>
              <span className={`${textFont.className} text-[#dbba53] text-sm sm:text-base font-semibold`}>
                -₹{couponDiscount.toFixed(0)}
              </span>
            </div>
          )}

          <div className="h-px bg-white/10 !mt-5" />

          <div className="flex justify-between items-baseline !mt-4">
            <span className={`${textFont.className} text-white text-base sm:text-lg font-bold uppercase tracking-widest`}>Total</span>
            <div className="text-right">
              {couponDiscount > 0 && (
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

        {/* Coupon Code */}
        <div className="mb-7">
          {appliedCoupon ? (
            <div className="flex items-center justify-between bg-[#dbba53]/10 border border-[#dbba53]/20 rounded-xl px-4 py-3">
              <div className="flex items-center gap-2.5">
                <CheckCircle size={18} className="text-[#dbba53]" />
                <span className={`${textFont.className} text-[#dbba53] text-sm font-bold tracking-[0.15em] uppercase mt-0.5`}>
                  {appliedCoupon.code}
                </span>
              </div>
              <button
                onClick={removeCoupon}
                className={`${textFont.className} text-gray-400 hover:text-red-400 text-xs uppercase tracking-widest transition-colors`}
              >
                Remove
              </button>
            </div>
          ) : (
            <>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => { setCouponCode(e.target.value); setCouponError(""); }}
                  onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                  placeholder="Coupon code"
                  className={`${textFont.className} flex-1 bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white text-sm placeholder-gray-500 focus:border-[#c25b5e] focus:bg-white/10 outline-none transition-all uppercase tracking-wider`}
                />
                <button
                  onClick={applyCoupon}
                  className={`${textFont.className} bg-white/10 px-6 py-3 rounded-xl text-white text-sm font-bold uppercase tracking-wider hover:bg-white/20 hover:text-[#c25b5e] transition-all`}
                >
                  Apply
                </button>
              </div>
              {couponError && (
                <p className={`${textFont.className} text-red-400 text-xs mt-2 tracking-wider ml-1`}>
                  {couponError}
                </p>
              )}
            </>
          )}
        </div>

        {/* Checkout Button */}
        <button 
          onClick={handleCheckout}
          disabled={isProcessing}
          className={`${textFont.className} w-full bg-[#c25b5e] hover:bg-[#de3e4f] disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-xl text-base font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(194,91,94,0.35)] active:scale-[0.98] flex items-center justify-center gap-3`}
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
