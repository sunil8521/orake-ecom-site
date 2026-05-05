"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { Loader2, ChevronRight } from "lucide-react";
import { textFont } from "@/lib/fonts";


interface SlideToGoogleProps {
  onSlideComplete: () => void;
  disabled?: boolean;
  loading?: boolean;
  label?: string;
}

export default function SlideToGoogle({
  onSlideComplete,
  disabled = false,
  loading = false,
  label = "Slide to Sign in with Google",
}: SlideToGoogleProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [completed, setCompleted] = useState(false);
  const startXRef = useRef(0);
  const trackWidthRef = useRef(0);

  const THUMB_SIZE = 48; // Perfect circle
  const THRESHOLD = 0.85;

  const getMaxDrag = useCallback(() => {
    // 52px track height, 2px border on each side = 4px.
    // Total inner space = width - 4 (borders) - THUMB_SIZE.
    return trackWidthRef.current - THUMB_SIZE - 4; 
  }, []);

  const handleStart = useCallback(
    (clientX: number) => {
      if (disabled || loading || completed) return;
      const track = trackRef.current;
      if (!track) return;
      trackWidthRef.current = track.getBoundingClientRect().width;
      startXRef.current = clientX;
      setIsDragging(true);
    },
    [disabled, loading, completed]
  );

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;
      const delta = clientX - startXRef.current;
      const max = getMaxDrag();
      const clamped = Math.max(0, Math.min(delta, max));
      setDragX(clamped);
    },
    [isDragging, getMaxDrag]
  );

  const handleEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    const max = getMaxDrag();
    if (dragX / max >= THRESHOLD) {
      setDragX(max);
      setCompleted(true);
      onSlideComplete();
    } else {
      setDragX(0);
    }
  }, [isDragging, dragX, getMaxDrag, onSlideComplete]);

  useEffect(() => {
    if (!isDragging) return;
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, handleMove, handleEnd]);

  useEffect(() => {
    if (!isDragging) return;
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => handleEnd();
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging, handleMove, handleEnd]);

  useEffect(() => {
    if (!loading && completed) {
      const timer = setTimeout(() => {
        setCompleted(false);
        setDragX(0);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading, completed]);

  const progress = getMaxDrag() > 0 ? dragX / getMaxDrag() : 0;

  return (
    <div className="w-full select-none">
      <p className={`${textFont.className} text-center text-gray-400 text-[11px] uppercase tracking-[0.25em] font-semibold mb-2.5`}>
        {completed ? "Connecting..." : label}
      </p>

      <div
        ref={trackRef}
        className={`relative w-full h-[52px] rounded-full flex items-center transition-colors duration-300 ${
          disabled || loading ? "opacity-50 cursor-not-allowed" : "cursor-grab"
        } ${
          completed
            ? "bg-[#34A853]/10 border-2 border-[#34A853]/30"
            : "bg-gray-50 border-2 border-gray-200"
        }`}
      >
        {/* Progress Fill Background */}
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-colors duration-200 pointer-events-none"
          style={{
            width: `${dragX + THUMB_SIZE}px`,
            background: completed
              ? "rgba(52, 168, 83, 0.12)"
              : `rgba(66, 133, 244, ${0.04 + progress * 0.1})`,
          }}
        />

        {/* Text */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
            progress > 0.3 ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className={`${textFont.className} text-gray-400 text-xs font-semibold uppercase tracking-wider pl-8`}>
            {label}
          </span>
        </div>

        {/* Arrows */}
        {!isDragging && !completed && !loading && (
          <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex items-center gap-0 pointer-events-none">
            <ChevronRight size={16} className="text-gray-300 animate-pulse" style={{ animationDelay: "0ms" }} />
            <ChevronRight size={16} className="text-gray-300 animate-pulse" style={{ animationDelay: "150ms" }} />
            <ChevronRight size={16} className="text-gray-300 animate-pulse" style={{ animationDelay: "300ms" }} />
          </div>
        )}

        {/* Thumb */}
        <div
          className={`relative z-10 flex items-center justify-center rounded-full shadow-sm transition-shadow duration-200 ${
            isDragging ? "shadow-md scale-105" : ""
          } ${completed ? "bg-[#34A853] border-[#34A853]" : "bg-white border border-gray-200"}`}
          style={{
            width: `${THUMB_SIZE}px`,
            height: `${THUMB_SIZE}px`,
            transform: `translateX(${dragX}px)`,
            transition: isDragging ? "none" : "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseDown={(e) => handleStart(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        >
          {loading ? (
            <Loader2 size={20} className="animate-spin text-[#4285F4]" />
          ) : completed ? (
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
