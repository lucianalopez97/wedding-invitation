import { useEffect, useState } from 'react';

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  /** True once the target date has passed — lets the UI switch to a "today!" message. */
  isPast: boolean;
}

/** Computes the difference between now and `targetDate`, clamped at zero. */
function calculateTimeRemaining(targetDate: Date): TimeRemaining {
  const diffMs = targetDate.getTime() - Date.now();

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isPast: false };
}

/**
 * Ticks once per second and returns the time remaining until `targetDate`.
 * Used by the Countdown component to drive the day/hour/minute/second display.
 */
export function useCountdown(targetDate: Date): TimeRemaining {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() =>
    calculateTimeRemaining(targetDate),
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  return timeRemaining;
}
