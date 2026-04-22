"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck, Shield, RotateCcw } from "lucide-react";
import { Anton, Oswald } from "next/font/google";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

interface CartItem {
  id: number;
  name: string;
  flavor: string;
  price: number;
  qty: number;
  image: string;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: "FAN FAVORITES BOX", flavor: "Strawberry Vanilla", price: 627, qty: 2, image: "/can1.png" },
    { id: 2, name: "CHAOS EDITION BOX", flavor: "Ginger Lemon", price: 750, qty: 1, image: "/can2.png" },
  ]);

  const updateQty = (id: number, delta: number) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id: number) => setItems(prev => prev.filter(item => item.id !== id));

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
          {items.length === 0 ? (
            <div className="text-center py-24">
              <ShoppingBag size={80} className="mx-auto text-gray-200 mb-8" />
              <h2 className={`${titleFont.className} text-3xl text-[#15161b] uppercase mb-4`}>Your cart is empty</h2>
              <p className={`${textFont.className} text-gray-400 text-lg mb-8`}>Looks like you haven&apos;t added any drinks yet.</p>
              <Link href="/Product" className={`${textFont.className} inline-flex items-center gap-3 bg-[#15161b] text-white px-8 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-[#c25b5e] transition-all hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)]`}>
                Shop Now <ArrowRight size={20} />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Items */}
              <div className="flex-1 space-y-4">
                {/* Table header — desktop only */}
                <div className={`${textFont.className} hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-6 pb-4 border-b border-gray-200 text-xs font-bold uppercase tracking-[0.2em] text-gray-400`}>
                  <span>Product</span>
                  <span className="text-center">Price</span>
                  <span className="text-center">Quantity</span>
                  <span className="text-right">Total</span>
                  <span className="w-8" />
                </div>

                {items.map(item => (
                  <div key={item.id} className="group bg-gray-50 border border-gray-100 rounded-[1.5rem] p-4 sm:p-5 flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center hover:shadow-md hover:border-gray-200 transition-all">
                    {/* Product */}
                    <div className="flex gap-4 items-center w-full sm:w-auto">
                      <div className="w-20 h-24 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
                        <Image src={item.image} alt={item.name} width={150} height={250} className="w-auto h-[120%] object-contain" />
                      </div>
                      <div className="min-w-0">
                        <h3 className={`${textFont.className} text-base font-bold text-[#15161b] uppercase tracking-wide truncate`}>{item.name}</h3>
                        <p className={`${textFont.className} text-gray-400 text-xs tracking-wider uppercase mt-0.5`}>{item.flavor}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <p className={`${textFont.className} text-[#15161b] text-lg font-semibold text-center hidden sm:block`}>Rs. {item.price.toFixed(2)}</p>

                    {/* Qty */}
                    <div className="flex items-center justify-center">
                      <div className="flex items-center gap-0 bg-white rounded-full border border-gray-200">
                        <button onClick={() => updateQty(item.id, -1)} className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-[#c25b5e] transition-colors rounded-full hover:bg-gray-50">
                          <Minus size={14} />
                        </button>
                        <span className={`${textFont.className} text-[#15161b] font-bold text-lg w-8 text-center`}>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-[#c25b5e] transition-colors rounded-full hover:bg-gray-50">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <p className={`${textFont.className} text-[#c25b5e] text-xl font-bold text-right`}>Rs. {(item.price * item.qty).toFixed(2)}</p>

                    {/* Remove */}
                    <button onClick={() => removeItem(item.id)} className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-[#de3e4f] transition-colors rounded-full hover:bg-red-50">
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary */}
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

                  <button className={`${textFont.className} w-full bg-[#c25b5e] hover:bg-[#de3e4f] text-white py-4 rounded-full text-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_10px_30px_rgba(222,62,79,0.4)] active:scale-[0.98] flex items-center justify-center gap-3`}>
                    Checkout <ArrowRight size={20} />
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
