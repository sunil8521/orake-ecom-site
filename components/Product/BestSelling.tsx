'use client';

import { Sansita, DM_Sans } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";

import ProductCard, { ProductType } from "@/components/Product/ProductCard";

const titleFont = Sansita({ subsets: ["latin"], weight: ["700", "800", "900"] });
const textFont = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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
	
];

const categoryTabs = ['All', 'New Drops', 'Sale'];
// const categoryTabs = ['All', 'Curated Box', 'Singles', 'New Drops', 'Sale'];
// 
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
			transition: { type: "spring", stiffness: 150, damping: 15 } as any
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

			{/* ━━━ Category Tabs + Products ━━━ */}
			<section className="bg-white py-10 md:py-16 px-4 sm:px-8 lg:px-20">
				<div className="max-w-7xl mx-auto">

					{/* Category Tabs Row */}
					<div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
						<div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
							{categoryTabs.map((tab) => (
								<button
									key={tab}
									onClick={() => setActiveTab(tab)}
									className={`${textFont.className} px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2 whitespace-nowrap
										${activeTab === tab
											? 'bg-[#15161b] text-white border-[#15161b] shadow-lg'
											: 'bg-transparent text-gray-500 border-gray-200 hover:border-[#15161b] hover:text-[#15161b]'
										}`}
								>
									{tab}
								</button>
							))}
						</div>
						<span className={`${textFont.className} text-gray-400 text-xs md:text-sm tracking-widest uppercase hidden sm:block shrink-0`}>
							{products.length} Products
						</span>
					</div>

					{/* Product Grid */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
					>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-24 md:gap-y-28 pt-6 md:pt-10">
							{products.map((product) => (
								<motion.div key={product.id} variants={itemVariants}>
									<ProductCard product={product} />
								</motion.div>
							))}
						</div>
					</motion.div>

				</div>
			</section>
		</div>
	);
}