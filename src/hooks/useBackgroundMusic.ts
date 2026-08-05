import { useCallback, useEffect, useRef, useState } from 'react';

interface UseBackgroundMusicOptions {
  src: string;
  volume: number;
}

interface UseBackgroundMusicReturn {
  isPlaying: boolean;
  /** Starts playback with a fade-in. Call this from a user gesture (the
   * "Open Invitation" button) — browsers block autoplay without one. */
  play: () => void;
  /** Toggles play/pause with a smooth fade, for the floating music button. */
  toggle: () => void;
}

const FADE_DURATION_MS = 900;
const FADE_STEP_MS = 40;

/**
 * Owns a single looping <audio> element for the site's ambient background
 * music. Handles:
 *  - Respecting browser autoplay restrictions (playback only ever starts
 *    from an explicit `play()` call, which components trigger inside a
 *    click handler).
 *  - Looping playback.
 *  - Smooth volume fade-ins / fade-outs instead of an abrupt cut.
 */
export function useBackgroundMusic({
  src,
  volume,
}: UseBackgroundMusicOptions): UseBackgroundMusicReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Create the audio element once on mount.
  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0; // start silent; we fade in on play()
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
      if (fadeIntervalRef.current) window.clearInterval(fadeIntervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  const fadeTo = useCallback((target: number, onComplete?: () => void) => {
    const audio = audioRef.current;
    if (!audio) return;

    if (fadeIntervalRef.current) window.clearInterval(fadeIntervalRef.current);

    const steps = FADE_DURATION_MS / FADE_STEP_MS;
    const startVolume = audio.volume;
    const delta = (target - startVolume) / steps;
    let currentStep = 0;

    fadeIntervalRef.current = window.setInterval(() => {
      currentStep += 1;
      const nextVolume = startVolume + delta * currentStep;
      audio.volume = Math.min(1, Math.max(0, nextVolume));

      if (currentStep >= steps) {
        if (fadeIntervalRef.current) window.clearInterval(fadeIntervalRef.current);
        audio.volume = target;
        onComplete?.();
      }
    }, FADE_STEP_MS);
  }, []);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        fadeTo(volume);
      })
      .catch(() => {
        // Autoplay was blocked (e.g. no user gesture registered) — the
        // floating music button lets the user start it manually instead.
        setIsPlaying(false);
      });
  }, [fadeTo, volume]);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    fadeTo(0, () => {
      audio.pause();
      setIsPlaying(false);
    });
  }, [fadeTo]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, pause, play]);

  return { isPlaying, play, toggle };
}
