'use client';

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import ProductCard, { ProductType } from "@/components/Product/ProductCard";
import { textFont } from "@/lib/fonts";



const categoryTabs = ['All', 'New Drops', 'Sale'];
// const categoryTabs = ['All', 'Curated Box', 'Singles', 'New Drops', 'Sale'];
export default function BestSellingClient({ initialProducts }: { initialProducts: ProductType[] }) {
	const [activeTab, setActiveTab] = useState('All');
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.5; // Slow down video to 50%
		}
	}, []);
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
							{initialProducts.length} Products
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
							{initialProducts.map((product) => (
								<motion.div key={product.id} variants={itemVariants} className="w-full max-w-[340px]">
									<ProductCard product={product} />
								</motion.div>
							))}
						</div>
					</motion.div>

				</div>
			</section>

			{/* ━━━ Advertising Section ━━━ */}
		

		</div>
	);
}