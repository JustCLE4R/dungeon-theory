import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

export function Lightbox({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  title?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const previousBodyOverflow = useRef<string>("");

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowLeft" && images.length > 1) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    } else if (e.key === "ArrowRight" && images.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length, onClose]);

  useEffect(() => {
      if (!isOpen || images.length === 0) return;

      // Save previous overflow state
      previousBodyOverflow.current = document.body.style.overflow;
      // Lock scroll
      document.body.style.overflow = "hidden";

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        // Restore previous overflow state
        document.body.style.overflow = previousBodyOverflow.current || "";
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, handleKeyDown, images.length]);

    if (!isOpen || images.length === 0) return null;

    const currentImage = images[currentIndex];

    // Prevent closing when clicking on the image itself
    const handleImageClick = (e: React.MouseEvent) => {
      e.stopPropagation();
    };

    return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm animate-fade-in"
        aria-hidden="true"
      />

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-parchment transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-parchment transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold hidden sm:flex cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-parchment transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold hidden sm:flex cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Image container */}
      <div className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto" onClick={handleImageClick}>
        <img
          src={currentImage}
          alt={`${title || "Image"} - ${currentIndex + 1} of ${images.length}`}
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-parchment/70 text-sm font-mono">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Mobile swipe navigation hint */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-parchment/50 text-xs sm:hidden">
          Swipe or use arrow keys to navigate
        </div>
      )}
    </div>,
    document.body
  );
}