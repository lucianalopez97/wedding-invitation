import { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from './config/weddingConfig';
import { useBackgroundMusic } from './hooks/useBackgroundMusic';

import { WelcomeScreen } from './components/Welcome/WelcomeScreen';
import { Hero } from './components/Hero/Hero';
import { Timeline } from './components/Timeline/Timeline';
import { DressCode } from './components/DressCode/DressCode';
import { PlaylistCard } from './components/Playlist/PlaylistCard';
import { RSVPSection } from './components/RSVP/RSVPSection';
import { Footer } from './components/Footer/Footer';
import { FloatingMusicButton } from './components/Music/FloatingMusicButton';
import { WelcomeMessage } from './components/Welcome/WelcomeMessage';
import { WhenAndWhereSection } from './components/WhenAndWhere/WhenAndWhereSection';
import { Faq } from './components/Faq/Faq';
import { Gallery } from './components/Gallery/Gallery';

/**
 * App — top-level page composition.
 *
 * Owns two pieces of state:
 *  - `isInvitationOpen`: whether the visitor has dismissed the welcome
 *    cover. The scrollable invitation only renders (and music only
 *    starts) after this becomes true.
 *  - background music playback, via `useBackgroundMusic`.
 *
 * Section order below matches the required flow: Hero → Countdown →
 * Timeline → Events (Ceremony + Reception) → Dress Code → Gifts →
 * Playlist → RSVP → Footer. To reorder sections, reorder the JSX below
 * — no other file needs to change.
 */
export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  const { isPlaying, play, toggle } = useBackgroundMusic({
    src: weddingConfig.music.src,
    volume: weddingConfig.music.defaultVolume,
  });

  // Triggered by the Welcome screen's "Abrir Invitación" button — the
  // only place guaranteed to carry a user gesture, which browsers
  // require before allowing audio playback to start.
  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    play();
  };

  return (
    <div className="min-h-screen bg-paper">
      <WelcomeScreen isOpen={isInvitationOpen} onOpen={handleOpenInvitation} />

      {isInvitationOpen && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero />
          <WelcomeMessage />
          <WhenAndWhereSection />
          <Timeline />
          <Gallery />
          <DressCode />
          <Faq />
          <PlaylistCard />
          <RSVPSection />
          <Footer />
        </motion.main>
      )}

      <FloatingMusicButton isPlaying={isPlaying} onToggle={toggle} visible={isInvitationOpen} />
    </div>
  );
}
