'use client';

import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { Anton, Oswald } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

import ProductCard, { ProductType } from "@/components/Product/ProductCard";

const titleFont = Anton({ subsets: ["latin"], weight: "400" });
const textFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const products: ProductType[] = [
	{
		id: 1,
		name: "FAN FAVORITES BOX",
		price: 627.00,
		oldPrice: 660.00,
		badge: "HYPE DROP",
		badgeStyle: "red",
		image: "/can1.png",
		rating: 5,
		reviews: 48
	},
	{
		id: 2,
		name: "CHAOS EDITION BOX",
		price: 750.00,
		oldPrice: 783.00,
		badge: "RESTOCKED",
		badgeStyle: "black",
		image: "/can2.png",
		rating: 4,
		reviews: 12
	},
	{
		id: 3,
		name: "SUPER COLA DATE EDITION",
		price: 999.00,
		oldPrice: 1000.00,
		badge: "-15%",
		badgeStyle: "red",
		image: "/can1.png",
		rating: 5,
		reviews: 32
	},
	{
		id: 4,
		name: "TROPICAL RUSH SINGLE",
		price: 199.00,
		oldPrice: null,
		badge: "",
		image: "/can2.png",
		rating: 4,
		reviews: 21
	},
	{
		id: 5,
		name: "MIDNIGHT BERRY PACK",
		price: 449.00,
		oldPrice: 520.00,
		badge: "HYPE DROP",
		badgeStyle: "red",
		image: "/can1.png",
		rating: 5,
		reviews: 67
	},
	{
		id: 6,
		name: "CITRUS BLAST COMBO",
		price: 399.00,
		oldPrice: null,
		badge: "NEW",
		badgeStyle: "black",
		image: "/can2.png",
		rating: 4,
		reviews: 8
	}
];

const categoryTabs = ['All', 'Curated Box', 'Singles', 'New Drops', 'Sale'];

export default function BestSelling() {
	const [activeTab, setActiveTab] = useState('All');

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 }
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", bounce: 0.4, duration: 0.7 }
		}
	};

	return (
		<div className="min-h-screen bg-white">


			{/* ━━━ Hero Banner ━━━ */}
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] overflow-hidden">
				{/* Decorative bg elements */}
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute w-96 h-96 bg-[#c25b5e]/10 rounded-full blur-[120px] -top-20 -right-20" />
					<div className="absolute w-72 h-72 bg-[#c25b5e]/5 rounded-full blur-[100px] bottom-0 left-1/4" />
				</div>

				<div className="relative max-w-6xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className={`${textFont.className} inline-block bg-[#c25b5e] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-[0_0_20px_rgba(194,91,94,0.4)]`}>
							Official Store
						</div>
						<h1 className={`${titleFont.className} text-6xl md:text-8xl lg:text-9xl text-white tracking-tight uppercase leading-none mb-4`}>
							THE GEAR
						</h1>
						<p className={`${textFont.className} text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase max-w-md mx-auto`}>
							Fuel your grind. Every can engineered for performance.
						</p>
					</motion.div>
				</div>
			</section>

			{/* ━━━ Filter Bar + Products ━━━ */}
			<section className="bg-white py-12 md:py-16 px-6 sm:px-12 lg:px-20">
				<div className="max-w-6xl mx-auto">

					{/* Category Pills */}
					<div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-8 border-b border-gray-200">
						<div className="flex flex-wrap gap-2 md:gap-3">
							{categoryTabs.map((tab) => (
								<button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={`${textFont.className} px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2
										${activeTab === tab
											? 'bg-[#15161b] text-white border-[#15161b] shadow-lg'
											: 'bg-transparent text-gray-500 border-gray-200 hover:border-[#15161b] hover:text-[#15161b]'
										}`}
								>
									{tab}
								</button>
							))}
						</div>

						<div className="flex items-center gap-4">
							<span className={`${textFont.className} text-gray-400 text-sm tracking-widest uppercase hidden md:block`}>
								{products.length} Products
							</span>
							<div className={`${textFont.className} flex items-center gap-2 text-sm bg-gray-50 px-4 py-2.5 rounded-full border border-gray-200 cursor-pointer hover:border-gray-400 transition-colors`}>
								<span className="text-[#c25b5e] font-bold uppercase tracking-widest">Sort:</span>
								<span className="text-gray-700 uppercase tracking-widest">Featured</span>
								<ChevronDown size={14} className="text-gray-400" />
							</div>
						</div>
					</div>

					{/* ━━━ Two Column: Sidebar + Grid ━━━ */}
					<div className="flex gap-12 lg:gap-16 relative">

						{/* Sidebar — truly sticky */}
						<aside className="hidden lg:block w-56 shrink-0">
							<div className="sticky top-28">
								<div className="space-y-8">

									{/* Availability */}
									<div>
										<h3 className={`${textFont.className} text-sm font-bold uppercase tracking-[0.15em] text-[#15161b] mb-4`}>
											Availability
										</h3>
										<div className="space-y-3">
											<label className="flex items-center gap-3 cursor-pointer group">
												<div className="w-5 h-5 rounded border-2 border-gray-300 group-hover:border-[#c25b5e] flex items-center justify-center transition-colors">
													<div className="w-2.5 h-2.5 rounded-sm bg-[#c25b5e]" />
												</div>
												<span className={`${textFont.className} text-sm text-gray-600 group-hover:text-[#15161b] uppercase tracking-wider transition-colors`}>
													In Stock ({products.length})
												</span>
											</label>
											<label className="flex items-center gap-3 cursor-pointer group opacity-40">
												<div className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center" />
												<span className={`${textFont.className} text-sm text-gray-500 uppercase tracking-wider`}>
													Out of Stock (0)
												</span>
											</label>
										</div>
									</div>

									{/* Flavor */}
									<div>
										<h3 className={`${textFont.className} text-sm font-bold uppercase tracking-[0.15em] text-[#15161b] mb-4`}>
											Flavor
										</h3>
										<div className="space-y-3">
											{['Original Berry', 'Tropical Citrus', 'Midnight Blast'].map(f => (
												<label key={f} className="flex items-center gap-3 cursor-pointer group">
													<div className="w-5 h-5 rounded border-2 border-gray-300 group-hover:border-[#c25b5e] transition-colors" />
													<span className={`${textFont.className} text-sm text-gray-600 group-hover:text-[#15161b] uppercase tracking-wider transition-colors`}>
														{f}
													</span>
												</label>
											))}
										</div>
									</div>

									{/* Price */}
									<div>
										<h3 className={`${textFont.className} text-sm font-bold uppercase tracking-[0.15em] text-[#15161b] mb-4`}>
											Price
										</h3>
										<div className="flex items-center gap-2">
											<div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-1">
												<span className="text-gray-400 text-sm">₹</span>
												<input type="text" placeholder="0" className="bg-transparent w-full text-[#15161b] outline-none text-sm" />
											</div>
											<span className="text-gray-400 text-xs">—</span>
											<div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-1">
												<span className="text-gray-400 text-sm">₹</span>
												<input type="text" placeholder="1000" className="bg-transparent w-full text-[#15161b] outline-none text-sm" />
											</div>
										</div>
									</div>

								</div>
							</div>
						</aside>

						{/* Product Grid */}
						<motion.div
							className="flex-1 min-w-0"
							variants={containerVariants}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-50px" }}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-28 pt-20">
								{products.map((product) => (
									<motion.div key={product.id} variants={itemVariants}>
										<ProductCard product={product} />
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>

				</div>
			</section>
		</div>
	);
}