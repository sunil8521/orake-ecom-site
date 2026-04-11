import Image from "next/image";
import { Anton, Oswald } from "next/font/google";

const headingFont = Anton({ subsets: ["latin"], weight: "400" });
const bodyFont = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function CollectionsSection() {
  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className={`${headingFont.className} mb-12 text-center text-4xl font-black uppercase tracking-[0.02em] text-black sm:text-5xl`}>
          OUR COLLECTIONS
        </h2>

        {/* Category Tabs */}
        <div className={`${bodyFont.className} mb-12 flex flex-wrap justify-center gap-3 text-sm font-medium sm:gap-6 sm:text-base`}>
          <button className="transition hover:text-black text-gray-700">Curated box</button>
          <button className="transition hover:text-black text-gray-700">Non - Alcoholic Beer</button>
          <button className="transition hover:text-black text-gray-700">Indie sodas</button>
          <button className="transition hover:text-black text-gray-700">Aruba - Mocktails & Mixers</button>
          <button className="transition hover:text-black text-gray-700">Super Cola</button>
          <button className="transition hover:text-black text-gray-700">Jerk - Energy Drink</button>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product Card 1 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96 mb-4 flex items-center justify-center">
                <Image
                  src="/can1.png"
                  alt="3 Sisters Fan Favorites Beer Box"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className={`${bodyFont.className} absolute top-4 left-4 z-10 rounded bg-red-600 px-3 py-1 text-xs font-bold text-white`}>FEATURED</div>
              </div>
              <h3 className={`${bodyFont.className} mb-2 text-sm font-semibold text-gray-900`}>My Drink Fan Favorites Beer Box</h3>
              <div className="flex gap-1 mb-2">
                <span className="text-gray-300 text-sm">☆☆☆☆☆</span>
              </div>
              <div className={`${bodyFont.className} flex items-center gap-2`}>
                <span className="text-lg font-semibold text-gray-900">Rs. 10.00</span>
                <span className="text-sm text-gray-500 line-through">Rs. 668.00</span>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96 mb-4 flex items-center justify-center">
                <Image
                  src="/can2.png"
                  alt="Crack Open the Chaos Ultimate Party Gift Box"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className={`${bodyFont.className} absolute top-4 left-4 z-10 rounded bg-red-600 px-3 py-1 text-xs font-bold text-white`}>FEATURED</div>
              </div>
              <h3 className={`${bodyFont.className} mb-2 text-sm font-semibold text-gray-900`}>Crack Open the Chaos - Ultimate Party Gift Box</h3>
              <div className="flex gap-1 mb-2">
                <span className="text-yellow-400">★★★★</span>
                <span className="text-gray-300">☆</span>
                <span className={`${bodyFont.className} ml-2 text-xs text-gray-500`}>1 review</span>
              </div>
              <div className={`${bodyFont.className} flex items-center gap-2`}>
                <span className="text-lg font-semibold text-gray-900">Rs. 20.00</span>
                <span className="text-sm text-gray-500 line-through">Rs. 1,499.00</span>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96 mb-4 flex items-center justify-center">
                <Image
                  src="/can1.png"
                  alt="3Sisters Weird Cocktail Combo"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className={`${bodyFont.className} absolute top-4 left-4 z-10 rounded bg-red-600 px-3 py-1 text-xs font-bold text-white`}>FEATURED</div>
              </div>
              <h3 className={`${bodyFont.className} mb-2 text-sm font-semibold text-gray-900`}>My Drink  Weird Cocktail Combo (Mad Mix)</h3>
              <div className="flex gap-1 mb-2">
                <span className="text-gray-300 text-sm">☆☆☆☆☆</span>
              </div>
              <div className={`${bodyFont.className} flex items-center gap-2`}>
                <span className="text-lg font-semibold text-gray-900">Rs. 850.00</span>
                <span className="text-sm text-gray-500 line-through">Rs. 936.00</span>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden h-96 mb-4 flex items-center justify-center">
                <Image
                  src="/can2.png"
                  alt="3 Sisters Ultimate Chill Can Box"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className={`${bodyFont.className} absolute top-4 left-4 z-10 rounded bg-red-600 px-3 py-1 text-xs font-bold text-white`}>FEATURED</div>
              </div>
              <h3 className={`${bodyFont.className} mb-2 text-sm font-semibold text-gray-900`}>My Drink  Ultimate Chill Can Box</h3>
              <div className="flex gap-1 mb-2">
                <span className="text-gray-300 text-sm">☆☆☆☆☆</span>
              </div>
              <div className={`${bodyFont.className} flex items-center gap-2`}>
                <span className="text-lg font-semibold text-gray-900">Rs. 770.00</span>
                <span className="text-sm text-gray-500 line-through">Rs. 840.00</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10">
            ←
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 z-10">
            →
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
