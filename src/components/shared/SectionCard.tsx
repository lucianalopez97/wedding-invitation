import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionCardProps {
  children: ReactNode;
  className?: string;
  /** Delay (seconds) before this card's reveal animation starts — used to stagger a group of cards. */
  delay?: number;
}

/**
 * Generic rounded, soft-shadowed card used as the visual base for
 * EventCard, GiftCard, PlaylistCard, and any other "floating" content
 * block. Handles the shared scroll-reveal animation so individual cards
 * only need to provide their content.
 */
export function SectionCard({ children, className = '', delay = 0 }: SectionCardProps) {
  return (
    <motion.div
      className={`rounded-3xl bg-paper-card p-6 shadow-card ring-1 ring-ink/5 sm:p-8 ${className}`}
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
