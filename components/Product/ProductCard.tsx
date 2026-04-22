"use client";

import { Heart, ShoppingBag } from "lucide-react";
import { Oswald } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

const bodyFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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
}

interface ProductCardProps {
    product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="group relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* ── The Gray Box with Pop-out Can ── */}
            <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative rounded-[2rem] aspect-[5/4] mb-5 shadow-md group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer"
            >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-50 rounded-[2rem] overflow-hidden">
                    <div className="absolute w-[120%] h-[120%] bg-gradient-to-br from-[#c25b5e]/15 to-transparent rounded-full -top-[40%] -right-[40%] blur-[60px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none" />
                </div>

                {/* Badge Sticker */}
                {product.badge && (
                    <div
                        className={`${bodyFont.className} absolute top-4 left-4 z-20 rounded-xl px-3 py-1.5 text-xs font-black tracking-widest text-white shadow-lg -rotate-6 group-hover:-rotate-2 transition-transform duration-300
                            ${product.badgeStyle === "black" ? "bg-[#15161b]" : "bg-[#c25b5e]"}
                        `}
                    >
                        {product.badge}
                    </div>
                )}

                {/* The Pop-out Can Image */}
                <div className="absolute inset-x-0 -top-[55%] bottom-[5%] flex justify-center pointer-events-none z-10">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)] group-hover:scale-110 group-hover:rotate-[3deg] group-hover:-translate-y-3 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] pointer-events-auto"
                    />
                </div>

                {/* Hover Action Buttons — slide in from right */}
                <div
                    className={`absolute top-4 right-4 flex flex-col gap-2 z-30 transition-all duration-300 ease-out ${
                        isHovered
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-3 pointer-events-none"
                    }`}
                >
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-[#15161b] hover:text-[#c25b5e] hover:scale-110 active:scale-95 transition-all">
                        <Heart size={18} strokeWidth={2} />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-[#15161b] hover:text-[#c25b5e] hover:scale-110 active:scale-95 transition-all">
                        <ShoppingBag size={18} strokeWidth={2} />
                    </button>
                </div>
            </motion.div>

            {/* ── Text Content ── */}
            <div className="px-1">
                <h3
                    className={`${bodyFont.className} mb-2 text-lg md:text-xl font-black text-gray-900 group-hover:text-[#c25b5e] transition-colors leading-tight uppercase tracking-wide`}
                >
                    {product.name}
                </h3>

                {/* Stars + Reviews */}
                <div className="flex items-center gap-2 mb-2">
                    <div className="flex tracking-wider text-base">
                        {[...Array(5)].map((_, i) => (
                            <span
                                key={i}
                                className={
                                    i < product.rating
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                }
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    {product.reviews > 0 && (
                        <span
                            className={`${bodyFont.className} text-xs font-bold text-gray-400 tracking-widest uppercase`}
                        >
                            {product.reviews} reviews
                        </span>
                    )}
                </div>

                {/* Price */}
                <div
                    className={`${bodyFont.className} flex items-center gap-2`}
                >
                    <span className="text-2xl md:text-3xl font-black text-black">
                        Rs. {product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                        <span className="text-base text-gray-400 line-through decoration-2">
                            Rs. {product.oldPrice.toFixed(2)}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
