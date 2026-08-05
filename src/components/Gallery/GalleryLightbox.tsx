import { useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '../../types';

interface GalleryLightboxProps {
  images: GalleryImage[];
  /** Index of the currently open image, or null when the lightbox is closed. */
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

/** Minimum horizontal swipe distance (px) before it counts as a slide gesture. */
const SWIPE_THRESHOLD = 50;

/**
 * <GalleryLightbox />
 * -------------------
 * Full-screen photo viewer opened by clicking a gallery thumbnail.
 * Dark, blurred backdrop; previous/next arrows; swipe left/right on
 * touch devices; closes on ESC or on a click outside the image.
 *
 * Purely presentational/controlled — <Gallery /> owns which index (if
 * any) is open and passes it in via `openIndex`, so this component never
 * needs to know about the wedding config directly.
 */
export function GalleryLightbox({ images, openIndex, onClose, onNavigate }: GalleryLightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const isOpen = openIndex !== null;
  const currentImage = isOpen ? images[openIndex] : null;

  const goToPrevious = useCallback(() => {
    if (openIndex === null) return;
    onNavigate((openIndex - 1 + images.length) % images.length);
  }, [openIndex, images.length, onNavigate]);

  const goToNext = useCallback(() => {
    if (openIndex === null) return;
    onNavigate((openIndex + 1) % images.length);
  }, [openIndex, images.length, onNavigate]);

  // Close on ESC, navigate with arrow keys, while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goToPrevious();
      if (event.key === 'ArrowRight') goToNext();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, goToPrevious, goToNext]);

  function handleTouchStart(event: React.TouchEvent) {
    touchStartX.current = event.touches[0].clientX;
  }

  function handleTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;

    if (deltaX > SWIPE_THRESHOLD) goToPrevious();
    else if (deltaX < -SWIPE_THRESHOLD) goToNext();

    touchStartX.current = null;
  }

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Visor de fotos"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors duration-300 hover:bg-paper/20 sm:right-6 sm:top-6"
          >
            <X size={20} aria-hidden="true" />
          </button>

          {/* Previous arrow */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goToPrevious();
            }}
            aria-label="Foto anterior"
            className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors duration-300 hover:bg-paper/20 sm:left-6"
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              goToNext();
            }}
            aria-label="Foto siguiente"
            className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-paper/10 text-paper transition-colors duration-300 hover:bg-paper/20 sm:right-6"
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>

          {/* Image — clicking it does NOT close (only the backdrop does); swipe-enabled */}
          <motion.img
            key={currentImage.id}
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-soft"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
