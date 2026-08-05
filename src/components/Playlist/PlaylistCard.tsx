import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';
import { SectionTitle } from '../shared/SectionTitle';
import { SectionCard } from '../shared/SectionCard';

/**
 * Small inline Spotify glyph (avoids pulling in a whole icon-library
 * dependency for a single brand mark; lucide-react has no Spotify icon).
 */
function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34a.75.75 0 01-1.032.24c-2.828-1.727-6.386-2.118-10.579-1.16a.751.751 0 11-.336-1.464c4.585-1.048 8.52-.596 11.706 1.35a.75.75 0 01.241 1.034zm1.469-3.267a.937.937 0 01-1.29.307c-3.237-1.989-8.171-2.566-11.999-1.404a.938.938 0 01-.545-1.796c4.372-1.327 9.804-.684 13.526 1.6a.938.938 0 01.308 1.293zm.126-3.403C15.24 8.4 8.82 8.19 5.14 9.318a1.125 1.125 0 11-.656-2.153c4.223-1.283 11.246-1.035 15.68 1.6a1.125 1.125 0 11-1.148 1.933z" />
    </svg>
  );
}

/**
 * Playlist section. Per the invitation spec, this intentionally does
 * NOT embed a Spotify player — only an icon, short description, and a
 * button that opens `weddingConfig.spotify.playlistUrl` in a new tab.
 */
export function PlaylistCard() {
  const { description, playlistUrl } = weddingConfig.spotify;

  return (
    <section id="playlist" className="bg-paper-soft px-6 py-24">
      <SectionTitle eyebrow="Música" title="Armá Nuestra Playlist" />

      <div className="mx-auto mt-12 max-w-md">
        <SectionCard className="flex flex-col items-center text-center">
          <motion.div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1DB954]/10 text-[#1DB954]"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <SpotifyIcon />
          </motion.div>

          <p className="mt-5 text-balance font-body text-sm leading-relaxed text-ink-soft sm:text-base">
            {description}
          </p>

          <a
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#1DB954] px-8 py-3.5 font-body text-sm font-medium text-white shadow-soft transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Escuchá Nuestra Playlist
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </SectionCard>
      </div>
    </section>
  );
}
