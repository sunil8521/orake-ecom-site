"use client";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
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
    <div className="group bg-gray-50 border border-gray-100 rounded-[1.5rem] p-4 sm:p-5 flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center hover:shadow-md hover:border-gray-200 transition-all">
      {/* Product */}
      <div className="flex gap-4 items-center w-full sm:w-auto">
        <div className="w-20 h-24 bg-white rounded-xl flex items-center justify-center shrink-0 border border-gray-100">
          <Image src={item.image} alt={item.name} width={150} height={250} className="w-auto h-[120%] object-contain" style={{ width: 'auto', height: 'auto' }} />
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
          <button onClick={() => onUpdateQty(item.id, -1)} className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-[#c25b5e] transition-colors rounded-full hover:bg-gray-50">
            <Minus size={14} />
          </button>
          <span className={`${textFont.className} text-[#15161b] font-bold text-lg w-8 text-center`}>{item.qty}</span>
          <button onClick={() => onUpdateQty(item.id, 1)} className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-[#c25b5e] transition-colors rounded-full hover:bg-gray-50">
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Total */}
      <p className={`${textFont.className} text-[#c25b5e] text-xl font-bold text-right`}>Rs. {(item.price * item.qty).toFixed(2)}</p>

      {/* Remove */}
      <button onClick={() => onRemove(item.id)} className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-[#de3e4f] transition-colors rounded-full hover:bg-red-50">
        <X size={16} />
      </button>
    </div>
  );
}
