import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/** Either an external URL (opens in a new tab) or an internal route (client-side navigation). */
type RSVPButtonProps = {
  label: string;
  icon: LucideIcon;
} & ({ href: string; to?: never } | { to: string; href?: never });

/**
 * <RSVPButton />
 * --------------
 * Generic pill-shaped button used for "Confirmar Asistencia", "Gift
 * Registry", and the link to the standalone "Datos para Regalo" page —
 * so all of them are guaranteed identical width, typography, spacing,
 * and hover behavior. Pass either:
 *   - `href`: an external URL, opened in a new tab (RSVP form, gift
 *     registry), or
 *   - `to`: an internal route (e.g. "/regalo"), navigated client-side
 *     via react-router — used for the standalone Payment page.
 */
export function RSVPButton({ label, icon: Icon, href, to }: RSVPButtonProps) {
  const className =
    'inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-ink px-10 py-4 font-body text-sm uppercase tracking-widest2 text-paper shadow-soft transition-colors duration-300 hover:bg-ink/90';

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.25 }}>
        <Link to={to} className={className}>
          <Icon size={18} aria-hidden="true" />
          {label}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25 }}
    >
      <Icon size={18} aria-hidden="true" />
      {label}
    </motion.a>
  );
}