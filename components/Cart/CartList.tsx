"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { titleFont, textFont } from "@/lib/fonts";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { updateCartItemQty, removeFromCart } from "@/actions/cart";
import { toast } from "sonner";
import { useCartWishlistStore } from "@/store/useCartWishlistStore";

interface CartItemType {
  id: number;
  name: string;
  flavor: string;
  price: number;
  qty: number;
  image: string;
}
  
export default function CartList({ initialItems }: { initialItems: CartItemType[] }) {
  // ✅ initialItems comes from server — no loading state needed
  const [items, setItems] = useState<CartItemType[]>(initialItems);
  const router = useRouter();

  const updateQty = async (id: number | string, delta: number) => {
    const item = items.find(i => i.id === id);
    if (!item) return;
    const newQty = Math.max(1, item.qty + delta);

    // ✅ Optimistic update — instant UI feedback
    setItems(prev => prev.map(i => i.id === id ? { ...i, qty: newQty } : i));

    const res = await updateCartItemQty(id.toString(), newQty);
    if (!res.success) {
      toast.error("Failed to update quantity");
      setItems(prev => prev.map(i => i.id === id ? { ...i, qty: item.qty } : i)); // revert
    }
  };

  const { decrementCart } = useCartWishlistStore();

  const removeItem = async (id: number | string) => {
    const snapshot = [...items];
    const removedItem = items.find(i => i.id === id);
    setItems(prev => prev.filter(i => i.id !== id)); // ✅ instant removal

    const res = await removeFromCart(id.toString());
    if (!res.success) {
      toast.error("Failed to remove item");
      setItems(snapshot); // revert
    } else {
      if (removedItem) decrementCart(removedItem.qty);
      router.refresh(); // ✅ re-syncs server state (updates hero count too)
    }
  };

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;

  if (items.length === 0) return <EmptyCart />;

  return (
    <div className="px-6 sm:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Cart Items */}
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

        {/* Order Summary */}
        <div className="lg:w-[380px] shrink-0">
          <div className="bg-[#15161b] rounded-[2rem] p-8 text-white sticky top-28">
            <h2 className={`${textFont.className} text-xl font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4`}>
              Order Summary
            </h2>
            <div className="space-y-4 text-sm mb-8">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal</span><span>Rs. {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : `Rs. ${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-xl font-bold border-t border-white/10 pt-4">
                <span>Total</span>
                <span className="text-[#c25b5e]">Rs. {total.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => router.push("/checkout")}
              className={`${textFont.className} w-full bg-white text-[#15161b] rounded-xl py-4 font-bold text-lg uppercase tracking-widest hover:bg-[#c25b5e] hover:text-white transition-all`}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}