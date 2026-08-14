"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  projectTitle: string;
}

function ImageLightboxContent({
  onClose,
  images,
  initialIndex = 0,
  projectTitle,
}: Omit<ImageLightboxProps, "isOpen">) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  // Keyboard navigation & lock body scroll
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [images.length, onClose]);

  const currentImage = images[currentIndex] || images[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", duration: 0.35 }}
        className="relative z-10 flex max-h-full w-full max-w-6xl flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Title & Close Button */}
        <div className="flex w-full items-center justify-between pb-3 text-white">
          <div className="space-y-0.5">
            <h3 className="max-w-md truncate text-sm font-bold sm:text-base">
              {projectTitle}
            </h3>
            <p className="font-mono text-xs text-white/60">
              Captura {currentIndex + 1} de {images.length}
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xs transition-colors hover:bg-white/25"
            aria-label="Cerrar modal"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Main Full-Res Image Viewer */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/15">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative size-full"
            >
              <Image
                src={currentImage}
                alt={`${projectTitle} vista ampliada ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Left & Right Chevrons */}
          {images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentIndex(
                    (prev) => (prev - 1 + images.length) % images.length,
                  )
                }
                className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-orange-500"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % images.length)
                }
                className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 hover:bg-orange-500"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails Row below modal image */}
        {images.length > 1 && (
          <div className="flex max-w-full items-center justify-center gap-2 overflow-x-auto pt-4">
            {images.map((img, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={img}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative aspect-video h-12 cursor-pointer overflow-hidden rounded-xl transition-all sm:h-14 ${
                    isActive
                      ? "scale-105 shadow-md ring-2 ring-orange-500"
                      : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Miniatura ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </button>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export function ImageLightbox(props: ImageLightboxProps) {
  return (
    <AnimatePresence>
      {props.isOpen && props.images.length > 0 && (
        <ImageLightboxContent
          key={`${props.initialIndex}-${props.images[0]}`}
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

export function ImageZoomTrigger({
  onClick,
  className = "",
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur-xs transition-all hover:scale-105 hover:bg-orange-500 ${className}`}
      aria-label="Ampliar imagen"
    >
      <ZoomIn className="size-3.5" />
      <span>Ampliar</span>
    </button>
  );
}
