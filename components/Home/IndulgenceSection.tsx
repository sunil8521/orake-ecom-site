export default function IndulgenceSection() {
  return (
    <section className="relative bg-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex items-center justify-center min-h-80">
          {/* Main heading */}
          <div className="text-center">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-tight mb-4">
              INDULGENCE<br />
              REIMAGINED. NON-ALCOHOLIC<br />
              BEVERAGES WITH BOLD FLAVORS<br />
              <span className="relative inline-block">
                AND ZERO GUILT.
                {/* Red badge overlay */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-red-600 text-white rounded-full px-6 py-2 text-sm font-black whitespace-nowrap">
                  FOR EVERY PARTY
                </div>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
