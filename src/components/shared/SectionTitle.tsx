import { motion } from 'framer-motion';

interface SectionTitleProps {
  /** Small uppercase label shown above the title, e.g. "CEREMONIA". */
  eyebrow?: string;
  /** Main heading text, set in the Marcellus display face. */
  title: string;
  /** Optional supporting sentence shown under the title. */
  subtitle?: string;
}

/**
 * Standard section heading used at the top of every major section
 * (Countdown, Events, Dress Code, Gifts, Playlist, RSVP). Animates into
 * view once when it scrolls into the viewport.
 */
export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      className="mx-auto max-w-xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-heading text-3xl text-ink sm:text-4xl">{title}</h2>
      <div className="ornament-rule mt-4" />
      {subtitle && <p className="mt-4 text-balance text-sm text-ink-soft sm:text-base">{subtitle}</p>}
    </motion.div>
  );
}
