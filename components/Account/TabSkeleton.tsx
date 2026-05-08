import { titleFont, textFont } from "@/lib/fonts";


export default function TabSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] animate-pulse">
      <div className="flex items-center justify-between mb-8">
        <div className="h-7 w-48 bg-gray-200 rounded-xl" />
        <div className="h-10 w-32 bg-gray-200 rounded-xl" />
      </div>
      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="h-3 w-20 bg-gray-100 rounded mb-2" />
            <div className="h-12 bg-gray-100 rounded-xl" />
          </div>
          <div>
            <div className="h-3 w-24 bg-gray-100 rounded mb-2" />
            <div className="h-12 bg-gray-100 rounded-xl" />
          </div>
        </div>
        <div>
          <div className="h-3 w-28 bg-gray-100 rounded mb-2" />
          <div className="h-12 bg-gray-100 rounded-xl" />
        </div>
        <div>
          <div className="h-3 w-20 bg-gray-100 rounded mb-2" />
          <div className="h-12 bg-gray-100 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
