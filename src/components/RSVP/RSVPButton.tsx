import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface RSVPButtonProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

/**
 * <RSVPButton />
 * --------------
 * Generic pill-shaped external-link button used for BOTH the "Confirmar
 * Asistencia" and "Gift Registry" calls to action in <RSVPSection />, so
 * the two are guaranteed identical width, typography, spacing, and hover
 * behavior — only the `href`, `label`, and `icon` differ per use.
 *
 * Neither of these buttons embeds a form — they simply open an external
 * URL (RSVP form or gift registry) supplied by the caller, which in turn
 * reads it from `weddingConfig.rsvpUrl` / `weddingConfig.giftRegistryUrl`.
 */
export function RSVPButton({ href, label, icon: Icon }: RSVPButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-ink px-10 py-4 font-body text-sm uppercase tracking-widest2 text-paper shadow-soft transition-colors duration-300 hover:bg-ink/90"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
    >
      <Icon size={18} aria-hidden="true" />
      {label}
    </motion.a>
  );
}
