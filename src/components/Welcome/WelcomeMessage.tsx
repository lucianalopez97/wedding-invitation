import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { weddingConfig } from '../../config/weddingConfig';

/**
 * <WelcomeMessage />
 * ------------------
 * The "We're Getting Married" section — shown right after the Hero. A
 * full-width, rounded-corner photo (matching the Hero image's proportions)
 * followed by a short eyebrow/title/message block.
 *
 * Distinct from the Welcome COVER screen (`WelcomeScreen.tsx`, shown before
 * "Abrir Invitación") — this is a normal in-page section.
 *
 * CONFIGURATION
 * -------------
 * - `weddingConfig.welcomeImage`: path/URL to the photo.
 * - `weddingConfig.welcomeSection`: `{ eyebrow, title, message }` text
 *   content shown beneath the image.
 */
export function WelcomeMessage() {
  const { eyebrow, title, message } = weddingConfig.welcomeSection;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-15px', '15px']);

  return (
    <section
      id="welcome-message"
      ref={sectionRef}
      className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-ink"
    >
      <motion.img
        src={weddingConfig.welcomeImage}
        alt=""
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 1.03 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-xl px-6 py-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-body text-[11px] uppercase tracking-widest2 text-paper/80">
          {eyebrow}
        </p>
        <h2 className="mt-3 font-heading text-4xl text-paper sm:text-5xl">{title}</h2>
        <div className="ornament-rule mt-4 bg-paper/40" />
        <p className="mt-5 text-balance font-body text-base leading-relaxed text-paper/85">
          {message}
        </p>
      </motion.div>
    </section>
  );
}
