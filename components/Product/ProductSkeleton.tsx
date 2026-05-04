export default function ProductSkeleton() {
  return (
    <div className="min-h-[50vh] bg-white py-10 md:py-16 px-4 sm:px-8 lg:px-20 animate-pulse">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
          <div className="flex gap-2">
             <div className="h-10 w-24 bg-gray-200 rounded-full"></div>
             <div className="h-10 w-24 bg-gray-200 rounded-full hidden sm:block"></div>
             <div className="h-10 w-24 bg-gray-200 rounded-full hidden sm:block"></div>
          </div>
          <div className="h-6 w-20 bg-gray-200 rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-x-10 md:gap-x-16 gap-y-24 md:gap-y-28 pt-6 md:pt-10 justify-items-center">
            {[1, 2].map((i) => (
               <div key={i} className="w-full max-w-[340px] h-[400px] bg-gray-100 rounded-2xl"></div>
            ))}
        </div>
      </div>
    </div>
  );
}
