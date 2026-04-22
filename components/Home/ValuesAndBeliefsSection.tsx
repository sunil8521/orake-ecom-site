
export default function ValuesAndBeliefsSection() {

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-[#ce777b] via-[#ffffff] to-[#ebb839]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl sm:text-6xl font-black text-gray-900 mb-4 tracking-tight drop-shadow-lg">
          Our Core Values
        </h2>
        <p className="text-center text-lg sm:text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          We believe in more than just great taste. Our mission is to deliver quality, innovation, and transparency for everyone.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          {/* Timeline/Stepper Line */}
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center flex-1 group">
            <span className="w-20 h-20 flex items-center justify-center rounded-full bg-[#ebb839] text-white text-5xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaCheckCircle />
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">Quality Rules</h3>
            <p className="text-gray-700 leading-relaxed text-base max-w-xs">
              Absolutely no compromise with ingredients, taste, and manufacturing standards.
            </p>
          </div>
          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center flex-1 group">
            <span className="w-20 h-20 flex items-center justify-center rounded-full bg-[#ce777b] text-white text-5xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaFlask />
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">Innovation Matters</h3>
            <p className="text-gray-700 leading-relaxed text-base max-w-xs">
              We continually experiment with flavors to create drinks that our customers love.
            </p>
          </div>
          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center flex-1 group">
            <span className="w-20 h-20 flex items-center justify-center rounded-full bg-[#ebb839] text-white text-5xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaEye />
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">Transparency Wins</h3>
            <p className="text-gray-700 leading-relaxed text-base max-w-xs">
              Consumers must know what they are drinking. We honestly reveal our ingredients.
            </p>
          </div>
          {/* Step 4 */}
          <div className="relative z-10 flex flex-col items-center text-center flex-1 group">
            <span className="w-20 h-20 flex items-center justify-center rounded-full bg-[#ce777b] text-white text-5xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaUsers />
            </span>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">All-Inclusive</h3>
            <p className="text-gray-700 leading-relaxed text-base max-w-xs">
              Our non-alcoholic beverages are for everyone—kids, adults, wellness-minded & party lovers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import { FaCheckCircle, FaFlask, FaEye, FaUsers } from "react-icons/fa";
