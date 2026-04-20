export default function CraftingMoments() {
	return (
		<section className="bg-[#ce777b] text-white py-16 md:py-24 px-4 md:px-8 mb-4">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        
				{/* Left Image */}
				<div className="w-full md:w-1/2">
					<img
						src="/can2.png"
						alt="Celebrating"
						className="w-full rounded-3xl md:rounded-4xl object-cover h-[300px] sm:h-[400px] md:h-[500px] "
					/>
				</div>

				{/* Right Content */}
				<div className="w-full md:w-1/2 text-left pl-0 md:pl-12">
					<h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight text-white">
						Crafting Moments<br />Worth Celebrating
					</h2>
					<p className="text-white/80 mb-4 md:mb-6 leading-relaxed max-w-lg text-sm">
						At Vita Spirits, we believe every bottle tells a story. With a passion for fine taste and quality, we source only the best from trusted distilleries and vineyards worldwide.
					</p>
					<p className="text-white/80 mb-8 md:mb-10 leading-relaxed max-w-lg text-sm">
						Whether you&apos;re celebrating success or unwinding after a long day, we bring sophistication to your glass. Our curated collection represents decades of expertise and an unwavering commitment to excellence.
					</p>

					<div className="flex flex-wrap gap-3 md:gap-4">
						<span className="border border-white/40 px-4 md:px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white/20 transition cursor-pointer">Premium</span>
						<span className="border border-white/40 px-4 md:px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white/20 transition cursor-pointer">Authentic</span>
						<span className="border border-white/40 px-4 md:px-6 py-2 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white/20 transition cursor-pointer">Delivered with Care</span>
					</div>
				</div>
			</div>
		</section>
	);
}