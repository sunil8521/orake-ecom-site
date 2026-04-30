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
		discount: 5, // 5% discount
		image: "/can1.png",
		numReviews: 48,
		size: "12x 250ML"
	},
	{
		id: 2,
		name: "CHAOS EDITION BOX",
		price: 750.00,
		oldPrice: 783.00,
		discount: 4, // 4% discount
		image: "/can2.png",
		numReviews: 12,
		size: "12x 250ML"
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
						viewport={{ once: false, margin: "-50px" }}
					>
						<div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-x-10 md:gap-x-16 gap-y-24 md:gap-y-28 pt-6 md:pt-10 justify-items-center">
							{products.map((product) => (
								<motion.div key={product.id} variants={itemVariants} className="w-full max-w-[340px]">
									<ProductCard product={product} />
								</motion.div>
							))}
						</div>
					</motion.div>

				</div>
			</section>

			{/* ━━━ Advertising Section ━━━ */}
			<section className="bg-white pb-20 px-4 sm:px-8 lg:px-20">
				<div className="max-w-[1400px] mx-auto relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] lg:h-[600px] group border-4 border-[#15161b]/5">
					<div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-700" />
					<img
						src="/orake-ad-banner.png"
						alt="Orake Advertisement"
						className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
					/>
					<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{ duration: 0.6 }}
							className={`${titleFont.className} text-5xl md:text-6xl lg:text-8xl text-white uppercase tracking-wider leading-[0.9] mb-4 drop-shadow-2xl`}
						>
							Unleash the <br className="md:hidden" /><span className="text-[#c25b5e]">Chaos</span>
						</motion.h3>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className={`${textFont.className} text-white/90 text-sm md:text-base lg:text-xl font-medium tracking-wide mb-8 max-w-2xl drop-shadow-md`}
						>
							The ultimate fusion of taste and prebiotic energy. Refresh differently.
						</motion.p>
						<motion.button
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className={`${textFont.className} px-8 py-4 bg-[#c25b5e] text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#15161b] transition-colors shadow-2xl hover:scale-105 duration-300`}
						>
							Discover More
						</motion.button>
					</div>
				</div>
			</section>

		</div>
	);
}