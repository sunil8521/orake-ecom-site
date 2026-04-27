"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

interface WishItem {
  id: number;
  name: string;
  flavor: string;
  price: number;
  oldPrice: number | null;
  image: string;
  inStock: boolean;
}

export default function WishlistPage() {
  const [items, setItems] = useState<WishItem[]>([
    { id: 1, name: "FAN FAVORITES BOX", flavor: "Strawberry Vanilla", price: 627, oldPrice: 660, image: "/can1.png", inStock: true },
    { id: 2, name: "CHAOS EDITION BOX", flavor: "Ginger Lemon", price: 750, oldPrice: 783, image: "/can2.png", inStock: true },
    { id: 3, name: "SUPER COLA DATE EDITION", flavor: "Classic Cola", price: 999, oldPrice: 1000, image: "/can1.png", inStock: true },
    { id: 4, name: "TROPICAL RUSH SINGLE", flavor: "Tropical Mix", price: 199, oldPrice: null, image: "/can2.png", inStock: false },
  ]);

  const removeItem = (id: number) => setItems(prev => prev.filter(item => item.id !== id));

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#de3e4f]/10 rounded-full blur-[120px] -top-20 -left-20" />
        </div>
        <div className="relative z-10">
          <div className={`${textFont.className} inline-block bg-[#de3e4f] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(222,62,79,0.4)]`}>
            {items.length} Saved Items
          </div>
          <h1 className={`${titleFont.className} text-5xl md:text-7xl text-white tracking-tight uppercase leading-none`}>
            WISHLIST
          </h1>
        </div>
      </div>

      {/* White Content */}
      <div className="px-6 sm:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Top bar */}
          {items.length > 0 && (
            <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200">
              <p className={`${textFont.className} text-gray-400 text-sm tracking-widest uppercase`}>{items.length} Products</p>
              <Link href="/products" className={`${textFont.className} inline-flex items-center gap-2 text-[#c25b5e] hover:text-[#15161b] text-sm font-bold uppercase tracking-widest transition-colors`}>
                Continue Shopping <ArrowRight size={16} />
              </Link>
            </div>
          )}

          {items.length === 0 ? (
            <div className="text-center py-24">
              <Heart size={80} className="mx-auto text-gray-200 mb-8" />
              <h2 className={`${titleFont.className} text-3xl text-[#15161b] uppercase mb-4`}>Your wishlist is empty</h2>
              <p className={`${textFont.className} text-gray-400 text-lg mb-8`}>Save your favorite drinks for later.</p>
              <Link href="/products" className={`${textFont.className} inline-flex items-center gap-3 bg-[#15161b] text-white px-8 py-4 rounded-full text-xl font-bold uppercase tracking-wider hover:bg-[#c25b5e] transition-all hover:shadow-[0_10px_30px_rgba(194,91,94,0.3)]`}>
                Browse Products <ArrowRight size={20} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map(item => (
                <div key={item.id} className="group bg-white border border-gray-100 rounded-[1.5rem] overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all relative">
                  {/* Remove */}
                  <button onClick={() => removeItem(item.id)} className="absolute top-4 right-4 z-20 w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-300 hover:bg-red-50 hover:text-[#de3e4f] transition-all shadow-sm opacity-0 group-hover:opacity-100 border border-gray-100">
                    <Trash2 size={14} />
                  </button>

                  {/* Stock badge */}
                  {!item.inStock && (
                    <div className={`${textFont.className} absolute top-4 left-4 z-20 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest`}>
                      Sold Out
                    </div>
                  )}

                  {/* Image */}
                  <div className={`relative h-52 sm:h-56 flex items-center justify-center bg-gray-50 ${!item.inStock ? "opacity-40" : ""}`}>
                    <Image src={item.image} alt={item.name} width={200} height={350}
                      className="h-[125%] w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500"
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-5 border-t border-gray-100">
                    <p className={`${textFont.className} text-gray-400 text-xs uppercase tracking-widest mb-1`}>{item.flavor}</p>
                    <h3 className={`${textFont.className} text-[#15161b] text-base font-bold uppercase tracking-wide mb-3 leading-tight`}>{item.name}</h3>

                    <div className="flex items-center gap-2 mb-4">
                      <span className={`${textFont.className} text-[#15161b] text-xl font-black`}>Rs. {item.price.toFixed(2)}</span>
                      {item.oldPrice && (
                        <span className={`${textFont.className} text-gray-400 text-sm line-through`}>Rs. {item.oldPrice.toFixed(2)}</span>
                      )}
                    </div>

                    <button disabled={!item.inStock}
                      className={`${textFont.className} w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                        item.inStock
                          ? "bg-[#15161b] text-white hover:bg-[#c25b5e] hover:shadow-[0_8px_20px_rgba(194,91,94,0.2)] active:scale-[0.98]"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <ShoppingBag size={16} />
                      {item.inStock ? "Add to Cart" : "Unavailable"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
