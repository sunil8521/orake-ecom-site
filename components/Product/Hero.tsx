import Image from "next/image";

export default function Hero() {
	return (
		<div className="relative mb-20">
			 
			<section className="relative bg-[#ce777b] text-white pt-32 md:pt-48 pb-20 md:pb-28 px-4 md:px-8 mx-2 md:mx-4 mt-2 md:mt-4 rounded-4xl md:rounded-[3rem] border border-gray-800 min-h-[90vh] md:min-h-[110vh] flex flex-col justify-between z-10 w-[calc(100%-1rem)] md:w-[calc(100%-2rem)]">
				{/* Background radial gradient to give depth */}
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none rounded-4xl md:rounded-[3rem]" />
				<div className="relative z-10">
					<h1 className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-medium mb-8 md:mb-12 px-2 md:px-4 text-white/95 tracking-wide">
						Discover Refreshment Redefined
					</h1>
				</div>
				<div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-end justify-between relative z-10 flex-1 pb-8 md:pb-16 gap-8 md:gap-0">
					{/* Left Stats */}
					<div className="flex gap-6 md:gap-10 mb-4 md:mb-0 order-2 md:order-1">
						<div className="text-center md:text-left">
							<div className="text-2xl md:text-3xl font-serif mb-1 text-white">100+</div>
							<div className="text-[10px] md:text-xs text-[#ffffff] uppercase tracking-widest font-medium">Unique Beverages</div>
						</div>
						<div className="text-center md:text-left">
							<div className="text-2xl md:text-3xl font-serif mb-1 text-white">99%</div>
							<div className="text-[10px] md:text-xs text-[#ffffff] uppercase tracking-widest font-medium">Customer Satisfaction</div>
						</div>
						<div className="text-center md:text-left">
							<div className="text-2xl md:text-3xl font-serif mb-1 text-white">Eco</div>
							<div className="text-[10px] md:text-xs text-[#ffffff] uppercase tracking-widest font-medium">Sustainable Packaging</div>
						</div>
					</div>
					{/* Center Image */}
					<div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 w-100 lg:w-150 pointer-events-none overflow-hidden rounded-b-[3rem] order-1 md:order-2">
						<div className="relative w-full h-100 lg:h-125 flex items-center justify-center">
							<Image
								src="/can2.png"
								alt="Product Can"
								width={400}
								height={400}
								className="object-contain drop-shadow-2xl scale-125 md:scale-150"
								priority
							/>
						</div>
					</div>
					{/* Right Info */}
					<div className="max-w-sm text-center md:text-right flex flex-col items-center md:items-end mb-4 md:mb-0 order-3">
						<p className="text-sm text-white mb-6 md:mb-8 leading-relaxed">
							Explore our handpicked range of innovative drinks—crafted for every taste, delivered with care, and always eco-friendly.
						</p>
						<button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gray-200 transition duration-300">
							EXPLORE COLLECTION
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}