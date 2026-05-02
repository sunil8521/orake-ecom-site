"use client";
import { ArrowRight, Truck, Shield, RotateCcw, Loader2 } from "lucide-react";
import { titleFont, textFont } from "@/lib/fonts";
import { useState } from "react";
import { createRazorpayOrder } from "@/actions/payment";
import { useAuthStore } from "@/store/useAuthStore";
import { useSession } from "@/lib/auth-client";
import { toast } from "sonner";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  onPaymentSuccess?: (orderId: string) => void;
}

export default function OrderSummary({ subtotal, shipping, total, onPaymentSuccess }: OrderSummaryProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { openAuthModal } = useAuthStore();
  const { data: session } = useSession();
  const user = session?.user;

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

      // Create order on server
      const result = await createRazorpayOrder(total);
      
      if (!result.success || !result.orderId) {
        toast.error(result.error || "Could not initialize checkout");
        setIsProcessing(false);
        return;
      }

      // Initialize Razorpay Options
      const options: RazorpayOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: Number(result.amount) || total * 100,
        currency: result.currency || "INR",
        name: "Orake Energy",
        description: "Water Bottle Order",
        order_id: result.orderId,
        handler: function (response) {
          // Success callback
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
    <div className="lg:w-[380px] shrink-0">
      <div className="bg-[#15161b] rounded-[2rem] p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] sticky top-28">
        <h3 className={`${titleFont.className} text-2xl uppercase tracking-wide mb-6`}>Order Summary</h3>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span className={`${textFont.className} text-gray-400 text-lg`}>Subtotal</span>
            <span className={`${textFont.className} text-white text-lg font-semibold`}>Rs. {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className={`${textFont.className} text-gray-400 text-lg`}>Shipping</span>
            <span className={`${textFont.className} text-lg font-semibold ${shipping === 0 ? "text-green-400" : "text-white"}`}>
              {shipping === 0 ? "FREE" : `Rs. ${shipping}`}
            </span>
          </div>
          {shipping > 0 && (
            <p className={`${textFont.className} text-gray-500 text-sm`}>Free shipping on orders over Rs. 999</p>
          )}
          <div className="h-px bg-white/10" />
          <div className="flex justify-between">
            <span className={`${titleFont.className} text-white text-xl uppercase tracking-wide`}>Total</span>
            <span className={`${titleFont.className} text-white text-2xl`}>Rs. {total.toFixed(2)}</span>
          </div>
        </div>

        {/* Promo */}
        <div className="flex gap-2 mb-6">
          <input type="text" placeholder="Promo code" className={`${textFont.className} flex-1 bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:border-[#dbba53] focus:outline-none transition-colors`} />
          <button className={`${textFont.className} bg-white/10 px-5 py-3 rounded-xl text-white font-bold uppercase tracking-wider hover:bg-white/20 transition-colors text-sm`}>Apply</button>
        </div>

        <button 
          onClick={handleCheckout}
          disabled={isProcessing}
          className={`${textFont.className} w-full bg-[#c25b5e] hover:bg-[#de3e4f] disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 rounded-full text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(222,62,79,0.4)] active:scale-[0.98] flex items-center justify-center gap-3`}
        >
          {isProcessing ? (
             <><Loader2 size={20} className="animate-spin" /> Processing...</>
          ) : (
             <>Checkout <ArrowRight size={20} /></>
          )}
        </button>

        {/* Trust */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          {[
            { icon: Truck, label: "Free Ship 999+" },
            { icon: Shield, label: "Secure Pay" },
            { icon: RotateCcw, label: "Easy Returns" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="text-center">
              <Icon size={18} className="mx-auto text-gray-500 mb-1" />
              <span className={`${textFont.className} text-[10px] text-gray-500 uppercase tracking-wider leading-tight block`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
