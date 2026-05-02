"use client";
import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Heart, Share2, Plus, Minus, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { headingFont, bodyFont } from "@/lib/fonts";

interface ProductInfoProps {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice: number;
    discount: number;
    size: string;
    image: string;
    numReviews: number;
    description: string;
  };
  relatedProduct: {
    id: number;
    name: string;
    image: string;
  };
}

export default function ProductInfo({ product, relatedProduct }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);

  return (
    <div className="flex flex-col pt-4">
      {/* Title */}
      <h1 className={`${headingFont.className} text-4xl sm:text-5xl lg:text-6xl text-[#15161b] uppercase leading-[1.05] tracking-wide mb-4`}>
        {product.name}
        <br />
        <span className="text-[#de3e4f]">ENERGY DRINK</span>
      </h1>

      {/* Reviews & Stock */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1.5">
          <div className="flex text-[#dbba53] text-lg">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <span className={`${bodyFont.className} text-sm font-bold text-gray-500 uppercase tracking-widest`}>
            {product.numReviews} Reviews
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-end gap-3 mb-8">
        <span className={`${headingFont.className} text-4xl text-[#15161b]`}>
          Rs. {product.price.toFixed(2)}
        </span>
        {product.oldPrice > 0 && (
          <span className={`${bodyFont.className} text-xl text-gray-400 line-through decoration-[#de3e4f] decoration-2 mb-1`}>
            Rs. {product.oldPrice.toFixed(2)}
          </span>
        )}
        {product.discount > 0 && (
          <span className={`${bodyFont.className} bg-[#de3e4f] text-white text-xs font-bold px-2.5 py-1 rounded mb-2 uppercase tracking-widest`}>
            -{product.discount}%
          </span>
        )}
      </div>

      {/* Short Description */}
      <p className={`${bodyFont.className} text-gray-600 text-sm leading-relaxed mb-8`}>
        {product.description.substring(0, 150)}...
      </p>

      {/* Pack Options */}
      <div className="mb-8">
        <p className={`${bodyFont.className} text-xs font-bold text-gray-400 uppercase tracking-widest mb-3`}>Size</p>
        <div className="flex flex-wrap gap-3">
          <button className={`${bodyFont.className} border-2 border-[#15161b] text-[#15161b] font-bold px-6 py-3 rounded-xl uppercase tracking-widest text-sm hover:bg-[#15161b] hover:text-white transition-colors flex items-center gap-2`}>
            <Check size={16} /> Pack of 12 Cans
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Quantity */}
          <div className="flex-1 sm:flex-none flex items-center justify-between sm:justify-center border-2 border-gray-200 rounded-xl bg-white h-14 px-2 sm:px-0">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 sm:w-12 h-full flex items-center justify-center text-gray-500 hover:text-[#15161b] transition-colors">
              <Minus size={16} />
            </button>
            <span className={`${bodyFont.className} w-8 sm:w-10 text-center font-bold text-lg`}>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="w-10 sm:w-12 h-full flex items-center justify-center text-gray-500 hover:text-[#15161b] transition-colors">
              <Plus size={16} />
            </button>
          </div>

          {/* Wishlist */}
          <button
            onClick={() => setLiked(!liked)}
            className={`h-14 w-14 shrink-0 rounded-xl border-2 flex items-center justify-center transition-all ${liked ? 'border-[#de3e4f] text-[#de3e4f] bg-red-50' : 'border-gray-200 text-gray-400 hover:border-[#15161b] hover:text-[#15161b]'
              }`}
          >
            <Heart size={20} fill={liked ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Add to Cart */}
        <button className={`${bodyFont.className} w-full sm:flex-1 h-14 bg-[#15161b] hover:bg-[#de3e4f] text-white font-bold uppercase tracking-widest whitespace-nowrap rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1`}>
          Add To Cart
        </button>
      </div>

      {/* Buy Now */}
      <button className={`${bodyFont.className} w-full h-14 bg-transparent border-2 border-[#15161b] text-[#15161b] hover:bg-[#15161b] hover:text-white font-bold uppercase tracking-widest rounded-xl transition-all mb-10`}>
        Buy It Now
      </button>

      <div className="w-full h-[1px] bg-gray-200 mb-8" />

      {/* Other Flavours */}
      <div className="mb-6">
        <p className={`${bodyFont.className} text-xs font-bold text-gray-400 uppercase tracking-widest mb-3`}>Try Other Flavours</p>
        <Link href={`/products/${relatedProduct.id}`}>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-[#15161b] transition-colors group cursor-pointer">
            <img src={relatedProduct.image} className="w-8 h-8 object-contain" />
            <span className={`${bodyFont.className} text-sm font-bold uppercase tracking-wide group-hover:text-[#de3e4f] transition-colors`}>
              {relatedProduct.name}
            </span>
          </div>
        </Link>
      </div>

      {/* Shipping Accordion */}
      <div className="border-t border-b border-gray-200 py-4 mb-6">
        <button
          onClick={() => setShippingOpen(!shippingOpen)}
          className="w-full flex items-center justify-between group"
        >
          <span className={`${bodyFont.className} text-sm font-bold uppercase tracking-widest text-[#15161b] group-hover:text-[#de3e4f] transition-colors`}>
            Shipping Information
          </span>
          <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${shippingOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {shippingOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className={`${bodyFont.className} text-sm text-gray-500 leading-relaxed pt-4 pb-2`}>
                Orders are processed within 1-2 business days. Standard shipping typically takes 3-5 business days. Free shipping on orders over Rs. 1500.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Share */}
      <div className="flex items-center gap-3">
        <span className={`${bodyFont.className} text-xs font-bold text-gray-400 uppercase tracking-widest`}>Share:</span>
        <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#15161b] hover:border-[#15161b] transition-colors">
          <Share2 size={14} />
        </button>
      </div>
    </div>
  );
}
