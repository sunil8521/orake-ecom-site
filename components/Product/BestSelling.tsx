import { Heart, ArrowLeft, ArrowRight } from "lucide-react";

const products = [
	{
		id: 1,
		name: "HIGHLAND PARK 18",
		type: "Single Malt Whiskey",
		price: "$32.00",
		tag: "BEST SELLER",
		image: "/can1.png",
		volume: "750ml",
		rating: 4.8,
		description: "A rich, full-bodied whisky with notes of honey, dried fruit, and gentle smoke."
	},
	{
		id: 2,
		name: "CHATEAU MARGAUX 2018",
		type: "Grand Vin",
		price: "$55.00",
		tag: "BEST SELLER",
		image: "/can2.png",
		volume: "750ml",
		rating: 4.9,
		description: "Elegant and complex, with aromas of blackcurrant, cedar, and subtle spice."
	},
	{
		id: 3,
		name: "SILVER PATRON",
		type: "Tequila",
		price: "$79.00",
		tag: "PREMIUM",
		image: "/can1.png",
		volume: "700ml",
		rating: 4.7,
		description: "Smooth, crisp tequila with fresh agave flavor and a hint of citrus."
	},
	{
		id: 3,
		name: "SILVER PATRON",
		type: "Tequila",
		price: "$79.00",
		tag: "PREMIUM",
		image: "/can2.png",
		volume: "700ml",
		rating: 4.7,
		description: "Smooth, crisp tequila with fresh agave flavor and a hint of citrus."
	},
	{
		id: 3,
		name: "SILVER PATRON",
		type: "Tequila",
		price: "$79.00",
		tag: "PREMIUM",
		image: "/can1.png",
		volume: "700ml",
		rating: 4.7,
		description: "Smooth, crisp tequila with fresh agave flavor and a hint of citrus."
	},
	{
		id: 3,
		name: "SILVER PATRON",
		type: "Tequila",
		price: "$79.00",
		tag: "PREMIUM",
		image: "/can2.png",
		volume: "700ml",
		rating: 4.7,
		description: "Smooth, crisp tequila with fresh agave flavor and a hint of citrus."
	}
];

export default function BestSelling() {
	return (
		<section className="py-16 md:py-24 px-4 md:px-8 bg-[#ce777b] text-white">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
					<div className="max-w-xl">
						<h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6 text-white">Our Best-Selling Bottles</h2>
						<p className="text-white/80 text-sm leading-relaxed">
							Our best-selling bottles celebrate craftsmanship, character, and timeless taste. Curated from loved vintages, they deliver rich flavor, balance, and a memorable finish.
						</p>
					</div>
					<div className="flex gap-3 mb-2">
						<button className="px-3 md:px-5 py-1.5 md:py-2 border border-white rounded-4xl hover:bg-white/20 transition shadow-sm flex items-center justify-center">
							<ArrowLeft size={12} className="md:hidden text-white" />
							<ArrowLeft size={14} className="hidden md:block text-white" />
						</button>
						<button className="px-3 md:px-5 py-1.5 md:py-2 border border-white rounded-4xl hover:bg-white/20 transition shadow-sm flex items-center justify-center">
							<ArrowRight size={12} className="md:hidden text-white" />
							<ArrowRight size={14} className="hidden md:block text-white" />
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
					{products.map((product) => (
						<div key={product.id} className="group rounded-2xl overflow-hidden bg-white/10 border border-white/30 flex flex-col shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
							<div className="h-[280px] md:h-[350px] flex items-center justify-center p-6 md:p-8 bg-white/10 relative">
								<div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
									<span className="bg-[#e3cb3f] text-white text-[10px] uppercase font-bold px-3 py-1.5 tracking-widest rounded shadow-sm">
										{product.tag}
									</span>
									<button className="bg-white/80 border border-white/30 rounded-full p-2 shadow hover:bg-white transition">
										<Heart size={14} className="text-[#ce777b] group-hover:text-red-500 transition" />
									</button>
								</div>
								<img src={product.image} alt={product.name} className="object-contain h-full w-full" />
							</div>
							<div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
								<div>
									<h3 className="font-bold text-lg md:text-xl mb-1 text-white">{product.name}</h3>
									<div className="flex items-center gap-2 mb-1">
										<span className="text-yellow-300 text-xs font-semibold">★ {product.rating}</span>
										<span className="text-xs text-white/60">| {product.volume}</span>
									</div>
									<p className="text-xs text-white/70 mb-1">{product.type}</p>
									<p className="text-xs text-white/60 mb-2 italic">{product.description}</p>
								</div>
								<div className="flex items-center justify-between mt-2">
									<span className="font-bold text-base md:text-lg text-white">{product.price}</span>
									<button className="bg-white text-[#ce777b] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition duration-300">
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}