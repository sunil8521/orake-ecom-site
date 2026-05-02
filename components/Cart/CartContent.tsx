"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { titleFont, textFont } from "@/lib/fonts";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { getCart, updateCartItemQty, removeFromCart } from "@/actions/cart";
import { useSession } from "@/lib/auth-client";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface CartItemType {
  id: number;
  name: string;
  flavor: string;
  price: number;
  qty: number;
  image: string;
}

export default function CartContent() {
  const [items, setItems] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  
  const { data: session } = useSession();

  useEffect(() => {
    async function loadCart() {
      if (!session?.user) {
        setItems([]);
        setLoading(false);
        return;
      }
      try {
        const res = await getCart();
        setItems(res?.items || []);
      } catch (error) {
        console.error("Failed to load cart", error);
      } finally {
        setLoading(false);
      }
    }
    loadCart();
  }, [session?.user]);

  const handleCheckoutClick = () => {
    router.push("/checkout");
  };

  const updateQty = async (id: number | string, delta: number) => {
    // Optimistic update
    const item = items.find(i => i.id === id);
    if (!item) return;
    
    const newQty = Math.max(1, item.qty + delta);
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, qty: newQty } : item
    ));

    const res = await updateCartItemQty(id.toString(), newQty);
    if (!res.success) {
      // Revert if failed
      toast.error("Failed to update quantity");
      setItems(prev => prev.map(item =>
        item.id === id ? { ...item, qty: item.qty } : item
      ));
    }
  };

  const removeItem = async (id: number | string) => {
    const previousItems = [...items];
    setItems(prev => prev.filter(item => item.id !== id));
    
    const res = await removeFromCart(id.toString());
    if (!res.success) {
      toast.error("Failed to remove item");
      setItems(previousItems);
    } else {
      toast.success("Item removed from cart");
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#c25b5e]/10 rounded-full blur-[120px] -top-20 -right-20" />
        </div>
        <div className="relative z-10">
          <div className={`${textFont.className} inline-block bg-[#c25b5e] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(194,91,94,0.4)]`}>
            {items.length} {items.length === 1 ? "Item" : "Items"}
          </div>
          <h1 className={`${titleFont.className} text-5xl md:text-7xl text-white tracking-tight uppercase leading-none`}>
            YOUR CART
          </h1>
        </div>
      </div>

      {/* White Content */}
      <div className="px-6 sm:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {loading ? (
             <div className="flex justify-center items-center py-20 min-h-[300px]">
                <Loader2 size={40} className="animate-spin text-[#c25b5e]" />
             </div>
          ) : items.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="flex-1">
                <div className="bg-gray-50 rounded-[1.5rem] p-6 sm:p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                    <h2 className={`${titleFont.className} text-2xl sm:text-3xl text-[#15161b] uppercase tracking-tight`}>
                      Your Cart
                    </h2>
                    <span className={`${textFont.className} bg-[#c25b5e] text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest`}>
                      {items.length} ITEMS
                    </span>
                  </div>

                  <div className="space-y-6">
                    {items.map(item => (
                      <CartItem key={item.id} item={item} onUpdateQty={updateQty} onRemove={removeItem} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-[380px] shrink-0">
                <div className="bg-[#15161b] rounded-[2rem] p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] sticky top-28">
                  <h2 className={`${textFont.className} text-xl font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4`}>
                    Order Summary
                  </h2>
                  
                  <div className="space-y-4 text-sm mb-8">
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

                  <button
                    onClick={handleCheckoutClick}
                    className={`${textFont.className} w-full bg-white text-[#15161b] rounded-xl py-4 font-bold text-lg uppercase tracking-widest hover:bg-[#c25b5e] hover:text-white transition-all`}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
