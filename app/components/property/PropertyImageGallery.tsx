// app/components/property/PropertyImageGallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyImageGalleryProps {
  images: string[];
}

const PropertyImageGallery: React.FC<PropertyImageGalleryProps> = ({ images }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="relative h-[50vh] max-h-[600px] mb-10 rounded-2xl overflow-hidden">
      <Image
        src={images[activeImageIndex]}
        alt="Image propriété"
        width={2070}
        height={1000}
        className="w-full h-full object-cover"
      />

      {/* 🔄 Navigation des images */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-6 right-6 flex justify-between">
          <Button onClick={() => setActiveImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button onClick={() => setActiveImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PropertyImageGallery;
