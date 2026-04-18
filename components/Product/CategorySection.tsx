const categories = [
	{ name: "Whiskey", id: 1 },
	{ name: "Vodka", id: 2 },
	{ name: "Wine", id: 3 },
	{ name: "Rum", id: 4 },
	{ name: "Tequila", id: 5 },
	{ name: "Beer", id: 6 },
];

export default function CategorySection() {
	return (
		<section className="py-16 md:py-24 px-4 md:px-8 text-center bg-[#fafafa] text-black">
			<h2 className="text-3xl md:text-4xl font-serif mb-10 md:mb-16 text-[#1a1a1a]">Shop by Category</h2>
			<div className="flex flex-nowrap justify-start md:justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto overflow-x-auto pb-4 px-2 snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
				{categories.map((cat) => (
					<div key={cat.id} className="flex flex-col items-center group cursor-pointer shrink-0 snap-center">
						<div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border border-gray-200 overflow-hidden mb-4 md:mb-6 flex items-center justify-center bg-white group-hover:shadow-xl group-hover:-translate-y-2 transition duration-300 shadow-sm relative">
							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-300" />
							<img
								src="/can2.png"
								alt={cat.name}
								className="h-12 sm:h-16 md:h-20 lg:h-28 object-contain"
							/>
						</div>
						<span className="font-bold text-xs sm:text-sm lg:text-base text-gray-800 tracking-wide">{cat.name}</span>
					</div>
				))}
			</div>
		</section>
	);
}