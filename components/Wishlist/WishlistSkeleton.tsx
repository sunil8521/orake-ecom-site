import { titleFont, textFont } from "@/lib/fonts";

export default function WishlistSkeleton() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <div className="relative bg-gradient-to-b from-[#15161b] via-[#1a1b22] to-[#15161b] pt-32 pb-16 md:pt-40 md:pb-20 px-6 text-center overflow-hidden animate-pulse">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-[#de3e4f]/10 rounded-full blur-[120px] -top-20 -left-20" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="h-6 w-32 bg-gray-700 rounded-full mb-6"></div>
          <div className="h-16 md:h-20 w-64 bg-gray-700 rounded-lg"></div>
        </div>
      </div>

      {/* List Skeleton */}
      <div className="px-6 sm:px-12 lg:px-20 py-12 md:py-20 animate-pulse">
        <div className="max-w-6xl mx-auto">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200">
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm h-[400px]">
                <div className="w-full h-48 bg-gray-100"></div>
                <div className="p-5 space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                  <div className="h-10 bg-gray-200 rounded-full w-full mt-4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
