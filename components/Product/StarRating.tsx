import React from 'react';

interface StarRatingProps {
  rating: number;
  className?: string; // e.g. "w-4 h-4" or "w-5 h-5"
}

export function StarRating({ rating, className = "w-4 h-4" }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalfStar ? 1 : 0));

  const starPath = "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z";

  return (
    <div className="flex gap-1 items-center">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="half-star" x1="0" x2="1" y1="0" y2="0">
            <stop offset="50%" stopColor="#dbba53" />
            <stop offset="50%" stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${className} text-[#dbba53] drop-shadow-sm`} fill="currentColor">
          <path fillRule="evenodd" d={starPath} clipRule="evenodd" />
        </svg>
      ))}

      {/* Half Star */}
      {hasHalfStar && (
        <svg key="half" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${className} drop-shadow-sm`} fill="url(#half-star)">
          <path fillRule="evenodd" d={starPath} clipRule="evenodd" />
        </svg>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${className} text-gray-200 drop-shadow-sm`} fill="currentColor">
          <path fillRule="evenodd" d={starPath} clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
}
