export default function ClosebyAlwaysSection() {
  return (
    <section className="relative bg-[#ffffff] py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side - Heading and Description */}
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl sm:text-5xl font-black text-[#b89c3a] leading-tight mb-6">
              WE ARE<br />
              CLOSEBY ALWAYS
            </h2>
            <p className="text-[#a67c52] text-lg leading-relaxed">
              Our non alcoholic drinks are available at our partner brands' stores and food outlets, as well as on popular E-Commerce and Quick Commerce platforms. Buy your favorite 3Sisters drink today!
            </p>
          </div>

          {/* Center - Illustration Placeholder */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xs h-80 bg-gradient-to-b from-[#fffbe6] via-[#f6efe2] to-[#f9e7d0] rounded-3xl border-8 border-[#b89c3a] flex items-center justify-center overflow-hidden shadow-lg">
              <div className="text-center text-[#b89c3a] px-6">
                <p className="text-5xl mb-4">🎨</p>
                <p className="text-sm font-semibold">Illustration Placeholder</p>
                <p className="text-xs mt-2">Replace with brand characters image</p>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {/* Stat 1 */}
            <div className="text-center lg:text-left">
              <p className="text-4xl sm:text-5xl font-black text-[#ce777b] leading-tight">60L +</p>
              <p className="text-[#a67c52] font-medium mt-2">Units Sold So Far</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center lg:text-left">
              <p className="text-4xl sm:text-5xl font-black text-[#ce777b] leading-tight">7IK +</p>
              <p className="text-[#a67c52] font-medium mt-2">Stores, Eateries & Airports</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center lg:text-left">
              <p className="text-4xl sm:text-5xl font-black text-[#ce777b] leading-tight">25 +</p>
              <p className="text-[#a67c52] font-medium mt-2">States & UT Covered</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center lg:text-left">
              <p className="text-4xl sm:text-5xl font-black text-[#ce777b] leading-tight">10 +</p>
              <p className="text-[#a67c52] font-medium mt-2">International Locations Covered</p>
            </div>
          </div>
        </div>

        {/* Partner Brands Section */}
        <div className="mt-16 pt-12 border-t-2 border-[#b89c3a]">
          <div className="bg-gradient-to-r from-[#fffbe6] via-[#f6efe2] to-[#f9e7d0] rounded-3xl px-8 py-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
              {/* Brand 1 */}
              <div className="flex justify-center">
                <div className="text-[#ce777b] text-center">
                  <p className="text-xs font-bold mb-2">SWIGGY</p>
                  <p className="text-xl font-black">instamart</p>
                </div>
              </div>

              {/* Brand 2 */}
              <div className="flex justify-center">
                <div className="text-[#ce777b] text-center">
                  <p className="text-2xl font-black">Reliance</p>
                  <p className="text-xs font-semibold">RETAIL</p>
                </div>
              </div>

              {/* Brand 3 */}
              <div className="flex justify-center">
                <div className="text-[#ce777b] text-center italic">
                  <p className="text-2xl font-black">Nature's Basket</p>
                </div>
              </div>

              {/* Brand 4 */}
              <div className="flex justify-center">
                <div className="text-[#ce777b] text-center">
                  <p className="text-4xl font-black">zepto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
