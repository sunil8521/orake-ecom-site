"use client";

import { Sansita, DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import { ShoppingCart, Heart, Share2, Plus, Minus, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const headingFont = Sansita({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });
const bodyFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// Mock Data
const PRODUCTS = [
    {
        id: 1,
        name: "Strawberry Vanilla",
        price: 99.00,
        oldPrice: 120.00,
        discount: 17,
        size: "250ML",
        image: "/can1.png",
        numReviews: 24,
        description: "You've forever been a fan of soda, but just don't like the loads of sugar content it comes with. Isn't it? No worries, you're not alone. We, too, feel the same, and that's why we are here with Orake Strawberry Vanilla, which contains zero sugar and zero artificial sweetener. Sweetened with natural flavors only, it's a supercool and healthier alternative to the usual soda.",
    },
    {
        id: 2,
        name: "Ginger Lemon",
        price: 89.00,
        oldPrice: 120.00,
        discount: 25,
        size: "250ML",
        image: "/can2.png",
        numReviews: 18,
        description: "Experience the crisp, refreshing kick of real ginger combined with zesty lemon. Perfectly carbonated for that satisfying fizz, without the guilt. It's an invigorating lift any time of day.",
    }
];

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const productId = parseInt(resolvedParams.id) || 1;
    const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
    const isStrawberry = product.image.includes("can1");
    
    const [quantity, setQuantity] = useState(1);
    const [liked, setLiked] = useState(false);
    const [activeTab, setActiveTab] = useState("description");
    const [shippingOpen, setShippingOpen] = useState(false);

    // Get related products (just filter out current)
    const relatedProducts = PRODUCTS.filter(p => p.id !== product.id);
    if (relatedProducts.length === 0) relatedProducts.push(PRODUCTS[0]); // fallback

    return (
        <main className="bg-[#fafafa] min-h-screen pt-24 pb-20 selection:bg-[#de3e4f] selection:text-white">

            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-4">
                <div className={`${bodyFont.className} flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400`}>
                    <Link href="/" className="hover:text-[#15161b] transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/products" className="hover:text-[#15161b] transition-colors">Products</Link>
                    <span>/</span>
                    <span className="text-[#15161b]">{product.name}</span>
                </div>
            </div>

            {/* Product Top Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
                
                {/* LEFT: Image Gallery */}
                <div className="flex flex-col gap-6">
                    {/* Main Image Container */}
                    <div className="relative w-full aspect-square md:aspect-[4/5] bg-[#f4f4f5] rounded-3xl flex items-center justify-center p-12 border border-black/5 overflow-hidden group">
                        {/* Background Watermark */}
                        <div className="absolute inset-0 pointer-events-none">
                            <Image
                                src={isStrawberry ? "/pinkcanbg.png" : "/yellowcanbg.png"}
                                alt=""
                                fill
                                className="object-cover opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-700"
                            />
                        </div>
                        {/* Shadow */}
                        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[20px] rounded-[50%] bg-[radial-gradient(ellipse,rgba(0,0,0,0.15)_0%,transparent_70%)] pointer-events-none" />
                        
                        <motion.img 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            src={product.image} 
                            alt={product.name}
                            className="relative z-10 w-auto h-full max-h-[80%] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    {/* Thumbnails */}
                    <div className="flex gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`w-20 h-20 bg-[#f4f4f5] rounded-xl flex items-center justify-center border-2 cursor-pointer ${i === 1 ? 'border-[#15161b]' : 'border-transparent hover:border-black/10'} transition-all`}>
                                <img src={product.image} className="h-[70%] w-auto object-contain drop-shadow-sm" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Product Info */}
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
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        {/* Quantity */}
                        <div className="flex items-center border-2 border-gray-200 rounded-xl bg-white h-14">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-[#15161b] transition-colors">
                                <Minus size={16} />
                            </button>
                            <span className={`${bodyFont.className} w-10 text-center font-bold text-lg`}>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-[#15161b] transition-colors">
                                <Plus size={16} />
                            </button>
                        </div>

                        {/* Add to Cart */}
                        <button className={`${bodyFont.className} flex-1 h-14 bg-[#15161b] hover:bg-[#de3e4f] text-white font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1`}>
                            Add To Cart
                        </button>
                        
                        {/* Wishlist */}
                        <button 
                            onClick={() => setLiked(!liked)}
                            className={`h-14 w-14 rounded-xl border-2 flex items-center justify-center transition-all ${
                                liked ? 'border-[#de3e4f] text-[#de3e4f] bg-red-50' : 'border-gray-200 text-gray-400 hover:border-[#15161b] hover:text-[#15161b]'
                            }`}
                        >
                            <Heart size={20} fill={liked ? "currentColor" : "none"} />
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
                        <Link href={`/products/${relatedProducts[0].id}`}>
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-[#15161b] transition-colors group cursor-pointer">
                                <img src={relatedProducts[0].image} className="w-8 h-8 object-contain" />
                                <span className={`${bodyFont.className} text-sm font-bold uppercase tracking-wide group-hover:text-[#de3e4f] transition-colors`}>
                                    {relatedProducts[0].name}
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
            </div>

            {/* Bottom Info Tabs */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-24">
                <div className="flex items-center gap-8 border-b border-gray-200 mb-8">
                    <button 
                        onClick={() => setActiveTab("description")}
                        className={`${headingFont.className} text-xl sm:text-2xl uppercase tracking-wider pb-4 transition-colors relative ${activeTab === "description" ? "text-[#15161b]" : "text-gray-400 hover:text-[#15161b]"}`}
                    >
                        Description
                        {activeTab === "description" && (
                            <motion.div layoutId="tab-indicator" className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#de3e4f]" />
                        )}
                    </button>
                    <button 
                        onClick={() => setActiveTab("reviews")}
                        className={`${headingFont.className} text-xl sm:text-2xl uppercase tracking-wider pb-4 transition-colors relative ${activeTab === "reviews" ? "text-[#15161b]" : "text-gray-400 hover:text-[#15161b]"}`}
                    >
                        Customer Reviews
                        {activeTab === "reviews" && (
                            <motion.div layoutId="tab-indicator" className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#de3e4f]" />
                        )}
                    </button>
                </div>

                <div className="min-h-[200px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "description" && (
                            <motion.div 
                                key="desc"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={`${bodyFont.className} text-gray-600 leading-relaxed max-w-4xl`}
                            >
                                <p className="mb-6">{product.description}</p>
                                <p className="mb-6">How does it taste then? Delightfully tasty! Sweetened with real fruit extracts only, it's a supercool and healthier alternative to the usual energy drinks. You can enjoy it anytime, whether you're watching a movie, partying, or simply hanging out with friends.</p>
                                <p>So, if you want to savor the classic taste sans the sugar, make a smart choice today. Order Orake {product.name} to enjoy all the fizz and flavor, and say goodbye to all the guilt.</p>
                            </motion.div>
                        )}

                        {activeTab === "reviews" && (
                            <motion.div 
                                key="reviews"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-12"
                            >
                                {/* Summary */}
                                <div className="col-span-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="flex text-[#dbba53] text-2xl">★★★★★</div>
                                        <span className={`${headingFont.className} text-3xl text-[#15161b]`}>5.00</span>
                                    </div>
                                    <p className={`${bodyFont.className} text-sm text-gray-500 mb-6 uppercase tracking-widest font-bold`}>Based on {product.numReviews} reviews</p>
                                    
                                    <div className="space-y-2 mb-8">
                                        {[5,4,3,2,1].map((star) => (
                                            <div key={star} className="flex items-center gap-3">
                                                <div className="flex text-[#dbba53] text-sm">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className={i < star ? "" : "text-gray-200"}>★</span>
                                                    ))}
                                                </div>
                                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className={`h-full bg-[#15161b] ${star === 5 ? 'w-full' : 'w-0'}`} />
                                                </div>
                                                <span className={`${bodyFont.className} text-xs text-gray-400 font-bold w-4`}>{star === 5 ? product.numReviews : 0}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className={`${bodyFont.className} w-full py-4 bg-[#15161b] text-white font-bold uppercase tracking-widest rounded-xl hover:bg-[#de3e4f] transition-colors`}>
                                        Write a Review
                                    </button>
                                </div>

                                {/* Review List */}
                                <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <div className="flex text-[#dbba53] text-sm mb-2">★★★★★</div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                                                            <span className={`${headingFont.className}`}>S</span>
                                                        </div>
                                                        <span className={`${bodyFont.className} font-bold text-[#15161b] uppercase text-sm`}>Sunil M.</span>
                                                    </div>
                                                </div>
                                                <span className={`${bodyFont.className} text-xs text-gray-400`}>12/04/2026</span>
                                            </div>
                                            <h4 className={`${headingFont.className} text-lg text-[#15161b] mb-2`}>Loved the taste.</h4>
                                            <p className={`${bodyFont.className} text-sm text-gray-600 leading-relaxed`}>Super drink was extremely refreshing and perfectly fizzy. Highly recommend!</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* You May Also Like */}
     

        </main>
    );
}
