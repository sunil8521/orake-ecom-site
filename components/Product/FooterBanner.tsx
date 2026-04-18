export default function FooterBanner() {
	return (
		<section className="relative h-[500px] md:h-[800px] flex items-center justify-center text-center text-white mt-8 md:mt-12 bg-[#1f1f1f]">
			{/* Background Image */}
			<div 
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a1a1a/444444?text=Bartender+Making+Cocktail')" }}
			/>
			<div className="absolute inset-0 bg-black/60 bg-linear-to-t from-[#1f1f1f] to-transparent mix-blend-multiply" />
      
			<div className="relative z-10 px-4 md:px-6 flex flex-col items-center max-w-2xl">
				<h4 className="text-[10px] tracking-[0.3em] uppercase mb-6 md:mb-8 py-3 border-y border-white/20 inline-block font-medium">
					Private Events &amp; Experiences
				</h4>
				<h2 className="text-xl sm:text-3xl md:text-5xl font-serif mb-6 md:mb-8 drop-shadow-lg font-light leading-snug">
					Where every moment becomes a celebration
				</h2>
				<p className="text-gray-300 mb-8 md:mb-12 text-xs md:text-sm leading-relaxed max-w-md mx-auto font-light px-4">
					We create unforgettable experiences through expertly crafted drinks, atmospheric settings, and flawless service, perfect for private events, celebrations, and exclusive gatherings.
				</p>
				<button className="bg-white text-black px-8 md:px-10 py-3 md:py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition duration-300 shadow-xl">
					CONTACT US
				</button>
			</div>
		</section>
	);
}