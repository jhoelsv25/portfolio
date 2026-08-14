"use client";

import * as React from "react";
import Image from "next/image";
import { Layers } from "lucide-react";
import { ImageLightbox, ImageZoomTrigger } from "./image-lightbox";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

  const handleOpenImage = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={images}
        initialIndex={selectedImageIndex}
        projectTitle={projectTitle}
      />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-foreground flex items-center gap-2 text-xl font-bold">
            <Layers className="size-5 text-orange-500" />
            Galería del Sistema & Vistas
          </h2>
          <span className="text-muted-foreground text-xs font-medium">
            (Haz clic en cualquier imagen para ampliarla en pantalla completa)
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => handleOpenImage(idx)}
              className="group bg-muted/60 relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-xl"
            >
              <Image
                src={img}
                alt={`${projectTitle} vista ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
              />

              {/* Hover overlay with zoom button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
                <ImageZoomTrigger onClick={() => handleOpenImage(idx)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
