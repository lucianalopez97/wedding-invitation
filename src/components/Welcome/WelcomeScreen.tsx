import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../../config/weddingConfig';
import { BotanicalOrnament } from '../shared/BotanicalOrnament';

interface WelcomeScreenProps {
  isOpen: boolean;
  /** Called when the visitor taps "Abrir Invitación" — starts the music and reveals the site. */
  onOpen: () => void;
}

const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/**
 * Full-screen cover that greets every visitor before the invitation
 * itself is shown. This is the ONLY place a user gesture is guaranteed,
 * so it's also where background music playback is kicked off (see
 * `onOpen` in App.tsx).
 *
 * Once opened, the screen fades and slides away rather than unmounting
 * abruptly, then is removed from the DOM entirely.
 */
export function WelcomeScreen({ isOpen, onOpen }: WelcomeScreenProps) {
  const weddingDate = new Date(weddingConfig.weddingDateISO);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-paper-gradient px-6 text-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gold"
          >
            <BotanicalOrnament className="h-8 w-32 sm:h-10 sm:w-40" />
          </motion.div>

          <motion.p
            className="eyebrow mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nos casamos
          </motion.p>

          <motion.h1
            className="mt-4 font-display text-6xl font-semibold leading-none text-ink sm:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {weddingConfig.partnerOneName}
            <span className="mx-3 font-display italic text-rose sm:mx-4">&amp;</span>
            {weddingConfig.partnerTwoName}
          </motion.h1>

          <motion.p
            className="mt-5 font-body text-sm uppercase tracking-widest2 text-ink-soft sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            {dateFormatter.format(weddingDate)}
          </motion.p>

          <motion.button
            type="button"
            onClick={onOpen}
            className="mt-12 rounded-full bg-ink px-10 py-4 font-body text-sm uppercase tracking-widest2 text-paper shadow-soft transition-transform duration-300 hover:scale-105 active:scale-95"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
          >
            Abrir Invitación
          </motion.button>

          <motion.div
            className="mt-10 text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <BotanicalOrnament className="h-8 w-32 sm:h-10 sm:w-40" flip />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
