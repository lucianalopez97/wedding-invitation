import { motion, AnimatePresence } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';

interface FloatingMusicButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
  /** Only rendered after the invitation has been opened (music context exists). */
  visible: boolean;
}

/**
 * Fixed-position play/pause control for the background music, visible
 * once the invitation has been opened. Spins gently while playing as a
 * lightweight "now playing" cue, referencing the configured track title.
 */
export function FloatingMusicButton({ isPlaying, onToggle, visible }: FloatingMusicButtonProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={onToggle}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.4 }}
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
          title={`${weddingConfig.music.trackTitle} — ${weddingConfig.music.trackArtist}`}
          className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-soft transition-transform duration-300 hover:scale-105 active:scale-95 sm:bottom-8 sm:right-8"
        >
          <motion.span
            className="flex h-full w-full items-center justify-center"
            animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={
              isPlaying ? { duration: 8, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }
            }
          >
            {isPlaying ? <Pause size={20} aria-hidden="true" /> : <Play size={20} aria-hidden="true" />}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
