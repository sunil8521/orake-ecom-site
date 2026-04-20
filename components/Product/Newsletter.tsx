export default function Newsletter() {
	return (
		<section className="py-12 md:py-24 px-2 md:px-4 bg-[#fafafa]">
			<div className="max-w-7xl mx-auto bg-[#1f1f1f] rounded-4xl md:rounded-[3rem] overflow-hidden relative h-[350px] md:h-[500px] flex items-center justify-center text-center text-white p-4 md:p-8">
				<div 
					className="absolute inset-0 bg-cover bg-center opacity-50 mix-blend-overlay"
					style={{ backgroundImage: "url('https://placehold.co/1200x600/1f1f1f/666666?text=Bar+Interior')" }}
				/>
        
				{/* Subtle gradient overlay */}
				<div className="absolute inset-x-0 bottom-0 top-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

				<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center px-4">
					<h2 className="text-2xl sm:text-4xl md:text-6xl font-serif mb-4 md:mb-6 text-white drop-shadow-xl font-light">Stay in the Spirit</h2>
					<p className="text-gray-300 mb-8 md:mb-12 text-xs md:text-sm leading-relaxed max-w-md mx-auto font-light">
						Join our community for exclusive offers, new arrivals, and cocktail recipes.
					</p>
          
					<div className="flex bg-[#2a2a2a]/80 backdrop-blur-md p-1 md:p-1.5 rounded-full border border-gray-600/50 mx-auto w-full max-w-sm md:max-w-md shadow-2xl relative z-20">
						<input 
							type="email" 
							placeholder="Enter your email" 
							className="bg-transparent border-none outline-none flex-1 px-4 md:px-6 text-xs md:text-sm text-white placeholder-gray-400 min-w-0"
						/>
						<button className="bg-white text-black px-4 md:px-8 py-2.5 md:py-3.5 rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] hover:bg-gray-200 transition duration-300 shadow-md shrink-0">
							SUBSCRIBE
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}