// app/components/property/PropertyImageGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useSwipeable } from "react-swipeable";

interface PropertyImageGalleryProps {
  images: string[];
}

export default function PropertyImageGallery({ images }: PropertyImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: false,
  });

  return (
    <>
      {/* Galerie principale avec conteneur centré et aspect ratio fixe */}
      <div
        className="relative w-full max-w-5xl mx-auto aspect-[16/9] overflow-hidden rounded-lg mb-8 cursor-pointer"
        onClick={openLightbox}
      >
        <Image
          src={images[activeIndex]}
          alt={`Photo ${activeIndex + 1}`}
          fill
          priority
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 80vw,
                 60vw"
        />
        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-10"
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-10"
              aria-label="Image suivante"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>

      {/* Miniatures */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 max-w-5xl mx-auto">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative w-20 h-16 flex-shrink-0 cursor-pointer rounded overflow-hidden border ${
                idx === activeIndex ? "border-blue-600" : "border-transparent"
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <Image
                src={img}
                alt={`Miniature ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox plein écran avec swipe */}
      {lightboxOpen && (
        <div
          {...swipeHandlers}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          {/* Bouton fermer */}
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Fermer"
          >
            <X className="h-8 w-8" />
          </button>
          {/* Boutons de navigation */}
          <button
            className="absolute left-4 text-white p-2"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            className="absolute right-4 text-white p-2"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
            aria-label="Image suivante"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          {/* Image agrandie */}
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={images[activeIndex]}
              alt={`Photo agrandie ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
