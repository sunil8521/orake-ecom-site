"use client";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { textFont } from "@/lib/fonts";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    flavor: string;
    price: number;
    qty: number;
    image: string;
  };
  onUpdateQty: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export default function CartItem({ item, onUpdateQty, onRemove }: CartItemProps) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-[1.25rem] p-4 sm:p-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-200 transition-all duration-300">
      <div className="flex gap-4 sm:gap-6">
        {/* Image Wrapper */}
        <div className="w-20 h-24 sm:w-28 sm:h-32 bg-gradient-to-b from-gray-50 to-gray-100/50 rounded-xl flex items-center justify-center shrink-0 border border-gray-100 relative overflow-hidden group-hover:border-gray-200 transition-colors">
          <Image 
            src={item.image} 
            alt={item.name} 
            width={150} 
            height={250} 
            className="w-auto h-[120%] object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500" 
            style={{ width: 'auto', height: 'auto' }} 
          />
        </div>

        {/* Content Wrapper */}
        <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
          {/* Top: Name & Flavor & Delete */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className={`${textFont.className} text-sm sm:text-base font-bold text-[#15161b] uppercase tracking-wide leading-tight truncate`}>
                {item.name}
              </h3>
              <p className={`${textFont.className} text-gray-400 text-[10px] sm:text-xs tracking-[0.2em] uppercase mt-1`}>
                {item.flavor}
              </p>
            </div>
            
            <button 
              onClick={() => onRemove(item.id)} 
              className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-[#de3e4f] hover:bg-red-50 transition-all rounded-full shrink-0 mt-[-4px] mr-[-4px]"
              aria-label="Remove item"
            >
              <Trash2 size={14} />
            </button>
          </div>

          {/* Bottom: Qty & Price */}
          <div className="flex items-end justify-between mt-4 sm:mt-auto">
            {/* Quantity Controls */}
            <div className="flex items-center bg-[#f4f4f5] rounded-full p-0.5">
              <button 
                onClick={() => onUpdateQty(item.id, -1)} 
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-500 hover:text-[#15161b] hover:bg-white rounded-full transition-all shadow-sm"
              >
                <Minus size={12} strokeWidth={2.5} />
              </button>
              <span className={`${textFont.className} text-[#15161b] font-bold text-xs sm:text-sm w-7 sm:w-8 text-center tabular-nums`}>
                {item.qty}
              </span>
              <button 
                onClick={() => onUpdateQty(item.id, 1)} 
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-500 hover:text-[#15161b] hover:bg-white rounded-full transition-all shadow-sm"
              >
                <Plus size={12} strokeWidth={2.5} />
              </button>
            </div>

            {/* Price Info */}
            <div className="text-right">
              {item.qty > 1 && (
                <p className={`${textFont.className} text-gray-400 text-[10px] sm:text-[11px] mb-0.5`}>
                  ₹{item.price.toFixed(0)} each
                </p>
              )}
              <p className={`${textFont.className} text-[#15161b] text-base sm:text-lg font-black tabular-nums leading-none`}>
                ₹{(item.price * item.qty).toFixed(0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
