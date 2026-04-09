export default function ValuesAndBeliefsSection() {
  return (
    <section className="relative bg-gray-50 py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-5xl sm:text-6xl font-black text-black mb-16">
          VALUES AND BELIEFS
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Value Card 1 - Quality Rules */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-4xl">
                ✓
              </div>
            </div>
            <h3 className="text-center text-2xl font-black text-black mb-4">
              QUALITY RULES
            </h3>
            <p className="text-center text-gray-600 leading-relaxed">
              Absolutely no compromise with ingredients, taste and manufacturing standards.
            </p>
          </div>

          {/* Value Card 2 - Innovation Matters */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-4xl">
                ⚗️
              </div>
            </div>
            <h3 className="text-center text-2xl font-black text-black mb-4">
              INNOVATION MATTERS
            </h3>
            <p className="text-center text-gray-600 leading-relaxed">
              We continually experiment with flavors to create drinks that our customers love.
            </p>
          </div>

          {/* Value Card 3 - Transparency Wins */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-4xl">
                👁️
              </div>
            </div>
            <h3 className="text-center text-2xl font-black text-black mb-4">
              TRANSPARENCY WINS
            </h3>
            <p className="text-center text-gray-600 leading-relaxed">
              Consumers must know what they are drinking. We honestly reveal our ingredients.
            </p>
          </div>

          {/* Value Card 4 - All-Inclusive */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center text-3xl">
                ⚡⚡
              </div>
            </div>
            <h3 className="text-center text-2xl font-black text-black mb-4">
              ALL-INCLUSIVE
            </h3>
            <p className="text-center text-gray-600 leading-relaxed">
              Our non alcoholic beverages are for everyone - kids, adults, wellness-minded & party lovers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
