"use client";
import Image from "next/image";
import { Trash2, ShoppingBag } from "lucide-react";
import { textFont } from "@/lib/fonts";

import { addToCart } from "@/actions/cart";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useCartWishlistStore } from "@/store/useCartWishlistStore";

interface WishlistCardProps {
  item: {
    id: string;
    name: string;
    flavor: string;
    price: number;
    oldPrice: number | null;
    image: string;
    inStock: boolean;
  };
  onRemove: (id: string) => void;
}

export default function WishlistCard({ item, onRemove }: WishlistCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const { incrementCart } = useCartWishlistStore();

  const handleAddToCart = async () => {
    setIsAdding(true);
    const res = await addToCart(item.id, 1);
    setIsAdding(false);
    
    if (res.success) {
      incrementCart(1);
    } else {
      toast.error(res.error || "Failed to add to cart");
    }
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-[1.5rem] overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all relative">
      {/* Remove */}
      <button onClick={() => onRemove(item.id)} className="absolute top-4 right-4 z-20 w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-300 hover:bg-red-50 hover:text-[#de3e4f] transition-all shadow-sm opacity-0 group-hover:opacity-100 border border-gray-100">
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

        <button 
          onClick={handleAddToCart}
          disabled={!item.inStock || isAdding}
          className={`${textFont.className} w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
            item.inStock
              ? "bg-[#15161b] text-white hover:bg-[#c25b5e] hover:shadow-[0_8px_20px_rgba(194,91,94,0.2)] active:scale-[0.98]"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          {isAdding ? <Loader2 size={16} className="animate-spin" /> : <ShoppingBag size={16} />}
          {isAdding ? "Adding..." : (item.inStock ? "Add to Cart" : "Unavailable")}
        </button>
      </div>
    </div>
  );
}
