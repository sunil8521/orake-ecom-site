"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductGalleryProps {
  galleryImages: string[];
  productName: string;
}

export default function ProductGallery({ galleryImages, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Main Image Container */}
        <div className="relative w-full aspect-square rounded-3xl overflow-hidden group border border-black/5 shadow-sm">
          <img
            onClick={() => setIsZoomed(true)}
            src={galleryImages[selectedImage]}
            alt={productName}
            className="w-full h-full object-cover cursor-zoom-in"
          />

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImage(prev => prev === 0 ? galleryImages.length - 1 : prev - 1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setSelectedImage(prev => prev === galleryImages.length - 1 ? 0 : prev + 1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        {/* Thumbnails */}
        <div className="flex gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center border-2 cursor-pointer overflow-hidden transition-all ${selectedImage === index ? 'border-[#15161b]' : 'border-transparent hover:border-black/10'}`}
            >
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Zoom Lightbox */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsZoomed(false)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={galleryImages[selectedImage]}
              alt={productName}
              className="max-w-[95vw] max-h-[95vh] object-contain cursor-zoom-out"
            />

            {/* Navigation Arrows in Lightbox */}
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(prev => prev === 0 ? galleryImages.length - 1 : prev - 1); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedImage(prev => prev === galleryImages.length - 1 ? 0 : prev + 1); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
