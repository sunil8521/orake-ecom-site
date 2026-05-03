"use client";

import { useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { titleFont, textFont } from "@/lib/fonts";
import { clearCart } from "@/actions/cart";
import { placeOrder } from "@/actions/order";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import OrderSuccessModal from "../Cart/OrderSuccessModal";

export default function CheckoutForm({ initialCartItems, user }: { initialCartItems: any[], user: any }) {
  const router = useRouter();
  const [processing, setProcessing] = useState(false);
  const [cartItems] = useState<any[]>(initialCartItems);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successOrderId, setSuccessOrderId] = useState<string>();

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/?auth=login&redirect=/checkout");
    }
  }, [user, router]);

  // Form state
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    phone: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India"
  });

  const [paymentMethod, setPaymentMethod] = useState("COD"); // 'COD' or 'Razorpay'

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setProcessing(true);

    try {
      // 1. Create order in Database (Pending or Processing based on method)
      const res = await placeOrder(formData, paymentMethod);

      if (!res.success || !res.orderId) {
        toast.error(res.error || "Failed to create order");
        setProcessing(false);
        return;
      }

      // 2. If COD, we are done!
      if (paymentMethod === "COD") {
        setSuccessOrderId(res.orderId);
        setIsSuccessModalOpen(true);
        setProcessing(false);
        return;
      }

      // 3. If Razorpay, open the modal
      if (paymentMethod === "Razorpay") {
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
          toast.error("Failed to load Razorpay SDK");
          setProcessing(false);
          return;
        }

        const options: any = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: res.totalPrice * 100, // paise
          currency: "INR",
          name: "Orake Energy",
          description: "Order Payment",
          order_id: res.razorpayOrderId, // MUST pass the Razorpay Order ID from backend
          handler: async function (response: any) {
            // Payment Success
            await clearCart();
            setSuccessOrderId(res.orderId); // Show our DB order ID
            setIsSuccessModalOpen(true);
            setProcessing(false);
          },
          prefill: {
            name: formData.fullName,
            email: user?.email,
            contact: formData.phone
          },
          theme: {
            color: "#c25b5e",
          },
          modal: {
            ondismiss: function() {
              toast.error("Payment cancelled. Order saved as Pending in your account.");
              setProcessing(false);
            }
          }
        };

        const rzp = new (window as any).Razorpay(options);
        
        rzp.on("payment.failed", function (response: any) {
          toast.error(response.error.description || "Payment failed");
          setProcessing(false);
        });

        rzp.open();
      }

    } catch (error) {
      console.error(error);
      toast.error("An error occurred during checkout");
      setProcessing(false);
    }
  };

  if (!user) {
    return <div className="flex justify-center items-center py-40 min-h-screen"><Loader2 className="animate-spin text-[#c25b5e]" size={40} /></div>;
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12 md:py-20">
      
      <h1 className={`${titleFont.className} text-4xl md:text-5xl text-[#15161b] mb-10 tracking-tight uppercase`}>
        Checkout
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form Column */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Shipping Address */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-[1.5rem] border border-gray-100">
              <h2 className={`${textFont.className} text-xl font-bold uppercase tracking-wide mb-6`}>Shipping Address</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input required type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#c25b5e]" />
                <input required type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#c25b5e]" />
                <input required type="text" name="street" placeholder="Street Address" value={formData.street} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#c25b5e] md:col-span-2" />
                <input required type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#c25b5e]" />
                <input required type="text" name="state" placeholder="State" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#c25b5e]" />
                <input required type="text" name="postalCode" placeholder="Postal / Zip Code" value={formData.postalCode} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#c25b5e]" />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-[1.5rem] border border-gray-100">
              <h2 className={`${textFont.className} text-xl font-bold uppercase tracking-wide mb-6`}>Payment Method</h2>
              
              <div className="space-y-4">
                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'Razorpay' ? 'border-[#c25b5e] bg-white shadow-sm' : 'border-gray-200 bg-transparent'}`}>
                  <input type="radio" name="payment" value="Razorpay" checked={paymentMethod === 'Razorpay'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-[#c25b5e] border-gray-300 focus:ring-[#c25b5e]" />
                  <div className="ml-4 flex-1 flex items-center justify-between">
                    <span className={`${textFont.className} font-bold text-gray-800`}>Pay Online (Card, UPI, NetBanking)</span>
                    <span className="text-xs bg-[#c25b5e] text-white px-2 py-1 rounded">Recommended</span>
                  </div>
                </label>

                <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'COD' ? 'border-[#15161b] bg-white shadow-sm' : 'border-gray-200 bg-transparent'}`}>
                  <input type="radio" name="payment" value="COD" checked={paymentMethod === 'COD'} onChange={(e) => setPaymentMethod(e.target.value)} className="w-5 h-5 text-[#15161b] border-gray-300 focus:ring-[#15161b]" />
                  <div className="ml-4">
                    <span className={`${textFont.className} font-bold text-gray-800`}>Cash on Delivery (COD)</span>
                    <p className="text-xs text-gray-500 mt-1">Pay when your order arrives at your door.</p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={processing || cartItems.length === 0}
              className={`${textFont.className} w-full bg-[#15161b] text-white rounded-xl py-4 font-bold text-lg uppercase tracking-widest hover:bg-[#c25b5e] hover:shadow-lg transition-all flex items-center justify-center gap-2`}
            >
              {processing && <Loader2 size={20} className="animate-spin" />}
              {processing ? "Processing..." : `Place Order (Rs. ${total.toFixed(2)})`}
            </button>
          </form>
        </div>

        {/* Order Summary Column */}
        <div className="lg:w-[400px] shrink-0">
          <div className="bg-[#15161b] rounded-[2rem] p-8 text-white sticky top-28">
            <h2 className={`${textFont.className} text-xl font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4`}>
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#c25b5e transparent' }}>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-start text-sm">
                  <div className="flex gap-3">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center p-1 shrink-0">
                      <img src={item.image} alt={item.name} className="h-full object-contain drop-shadow-md" />
                    </div>
                    <div>
                      <p className={`${textFont.className} font-bold`}>{item.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">Qty: {item.qty}</p>
                    </div>
                  </div>
                  <p className="font-medium shrink-0">Rs. {(item.price * item.qty).toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm border-t border-white/10 pt-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : `Rs. ${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t border-white/10 pt-4 mt-2">
                <span>Total</span>
                <span className="text-[#c25b5e]">Rs. {total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderSuccessModal 
        isOpen={isSuccessModalOpen}
        onClose={() => router.push("/account")} // Redirect to account/orders
        orderId={successOrderId || "unknown"}
      />
    </div>
  );
}
