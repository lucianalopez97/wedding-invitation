import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';
import { SectionTitle } from '../shared/SectionTitle';
import { GalleryLightbox } from './GalleryLightbox';

/** Matches Tailwind's `sm` breakpoint (640px) — desktop/tablet vs. mobile use different autoplay speeds. */
const MOBILE_BREAKPOINT_QUERY = '(max-width: 639px)';

/** How often the carousel auto-advances on mobile. */
const MOBILE_AUTOPLAY_INTERVAL_MS = 500;
/** How often the carousel auto-advances on desktop/tablet. */
const DESKTOP_AUTOPLAY_INTERVAL_MS = 3000;

/**
 * <Gallery />
 * -----------
 * "Nuestra Historia en Fotos" — a single-photo carousel, placed right
 * after the Timeline. One photo fills the carousel's slot at a time and
 * auto-advances on a loop:
 *
 * - Desktop/tablet: advances every 3 seconds, in a larger slot.
 * - Mobile: advances every 0.5 seconds, in a smaller slot.
 *
 * Arrow controls let visitors step through manually at any size; small
 * dots below the photo show position and double as direct-jump buttons.
 * Clicking the photo opens it full-screen in <GalleryLightbox />.
 *
 * CONFIGURATION
 * -------------
 * `weddingConfig.gallery` = `{ title, subtitle, images }`. `images` is an
 * ordered array of `{ id, src, alt }` — add, remove, or reorder entries
 * there to change the gallery; this component only maps over the array.
 */
export function Gallery() {
  const { title, subtitle, images } = weddingConfig.gallery;

  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT_QUERY);
    setIsMobile(mediaQuery.matches);

    function handleChange(event: MediaQueryListEvent) {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const intervalMs = isMobile ? MOBILE_AUTOPLAY_INTERVAL_MS : DESKTOP_AUTOPLAY_INTERVAL_MS;
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [isMobile, images.length]);

  function goToPrevious() {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }

  function goToNext() {
    setActiveIndex((current) => (current + 1) % images.length);
  }

  if (images.length === 0) return null;
  const activeImage = images[activeIndex];

  return (
    <section id="gallery" className="bg-paper px-6 py-24">
      <SectionTitle title={title} subtitle={subtitle} />

      <div className="relative mx-auto mt-14 h-80 max-w-sm sm:h-[28rem] sm:max-w-2xl">
        <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-sm">
          <AnimatePresence mode="wait">
            <motion.button
              key={activeImage.id}
              type="button"
              onClick={() => setOpenIndex(activeIndex)}
              aria-label={`Ampliar foto: ${activeImage.alt}`}
              className="absolute inset-0 h-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="h-full w-full object-cover"
              />
            </motion.button>
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {images.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir a la foto ${index + 1}`}
                className="p-1"
              >
                <span
                  aria-hidden="true"
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-4 bg-paper' : 'w-1.5 bg-paper/40'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={goToPrevious}
          aria-label="Foto anterior"
          className="absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-paper-card text-ink shadow-card transition-colors duration-300 hover:bg-ink hover:text-paper sm:flex"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={goToNext}
          aria-label="Foto siguiente"
          className="absolute right-0 top-1/2 z-10 hidden translate-x-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-paper-card text-ink shadow-card transition-colors duration-300 hover:bg-ink hover:text-paper sm:flex"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>

      <GalleryLightbox
        images={images}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}