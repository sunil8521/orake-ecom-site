"use client";

import { ShoppingCart, Heart } from "lucide-react";
import { Sansita, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const headingFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export interface ProductType {
    id: number;
    name: string;
    price: number;
    oldPrice: number | null;
    badge: string;
    image: string;
    rating: number;
    reviews: number;
    badgeStyle?: "red" | "black";
    flavor?: string;
}

interface ProductCardProps {
    product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
    const isStrawberry = product.image.includes("can1");
    const cardBgColor = "bg-[#f4f4f5]";
    const [liked, setLiked] = useState(false);

    return (
        <motion.div
            className="group relative w-full max-w-[340px] mx-auto pt-[100px] sm:pt-[110px]"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* ── Background Card ── */}
            <div className={`relative ${cardBgColor} rounded-[1.5rem] sm:rounded-[2rem] px-4 sm:px-6 pb-5 sm:pb-6 pt-[100px] sm:pt-[120px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 border border-black/5`}>

                {/* Background Watermark */}
                <div className="absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden pointer-events-none">
                    <Image
                        src={isStrawberry ? "/pinkcanbg.png" : "/yellowcanbg.png"}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-700"
                    />
                </div>

                {/* Badge Top-Left */}
                {product.badge && (
                    <div
                        className={`${bodyFont.className} absolute top-4 left-4 sm:top-6 sm:left-6 z-20 rounded-lg px-2.5 py-1 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-white shadow-sm
                            ${product.badgeStyle === "black" ? "bg-[#15161b]" : "bg-[#c25b5e]"}
                        `}
                    >
                        {product.badge}
                    </div>
                )}

                {/* Heart Icon Top-Right */}
                <button
                    onClick={() => setLiked(!liked)}
                    className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all active:scale-90 ${liked
                            ? "bg-[#c25b5e] text-white shadow-md"
                            : "bg-white/80 text-gray-400 hover:text-[#c25b5e] hover:bg-white shadow-sm"
                        }`}
                >
                    <Heart size={16} strokeWidth={2} fill={liked ? "currentColor" : "none"} />
                </button>

                {/* ── The Popping Out Image (shadow closer to can) ── */}
                <div className="absolute left-0 right-0 -top-[90px] sm:-top-[100px] flex justify-center pointer-events-none z-10 w-full h-[200px] sm:h-[220px]">
                    {/* Tight elliptical ground shadow */}
                    <div className="absolute bottom-[15px] left-1/2 -translate-x-1/2 z-[5] w-[40%] h-[10px] sm:h-[12px] rounded-[50%] bg-[radial-gradient(ellipse,rgba(0,0,0,0.25)_0%,transparent_70%)] group-hover:w-[45%] group-hover:h-[8px] transition-all duration-500 pointer-events-none" />

                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-auto object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.12)] group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 pointer-events-auto"
                    />
                </div>

                {/* ── Text Content ── */}
                <div className="relative z-10 text-center w-full flex flex-col items-center">
                    <h3 className={`${headingFont.className} text-xl sm:text-2xl text-[#15161b] leading-[1.1] uppercase tracking-wide group-hover:text-[#c25b5e] transition-colors mb-1.5`}>
                        {product.name}
                    </h3>

                    <p className={`${bodyFont.className} text-[11px] sm:text-[13px] text-gray-500 tracking-[0.15em] uppercase font-bold mb-4`}>
                        {isStrawberry ? "STRAWBERRY VANILLA • 250ML" : "GINGER LEMON • 250ML"}
                    </p>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1.5 mb-5">
                        <div className="flex text-[16px] sm:text-[18px] gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className={i < product.rating ? "text-[#dbba53]" : "text-gray-200"}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                        {product.reviews > 0 && (
                            <span className={`${bodyFont.className} text-[10px] sm:text-[12px] text-gray-500 font-medium tracking-wider uppercase`}>
                                ({product.reviews} REVIEWS)
                            </span>
                        )}
                    </div>
                </div>

                {/* ── Bottom Row: Price & Cart ── */}
                <div className="relative z-10 flex items-center justify-between pt-4 border-t-2 border-black/5 mt-2">
                    <div className={`${bodyFont.className} flex flex-col items-start`}>
                        {product.oldPrice && (
                            <span className="text-[12px] sm:text-[13px] text-gray-400 line-through decoration-[#c25b5e] decoration-2 mb-1">
                                Rs. {product.oldPrice.toFixed(2)}
                            </span>
                        )}
                        <span className="text-xl sm:text-2xl font-black text-[#15161b] leading-none">
                            Rs. {product.price.toFixed(2)}
                        </span>
                    </div>

                    <button className="bg-[#15161b] hover:bg-[#c25b5e] text-white w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] sm:rounded-[12px] flex items-center justify-center shadow-md hover:shadow-lg transition-all active:scale-95 group/btn">
                        <ShoppingCart size={16} strokeWidth={2} className="group-hover/btn:-rotate-6 transition-transform" />
                    </button>
                </div>

            </div>
        </motion.div>
    );
}
