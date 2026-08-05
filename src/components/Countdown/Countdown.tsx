import { motion } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import { weddingConfig } from '../../config/weddingConfig';

interface CountdownUnitProps {
  value: number;
  label: string;
  delay: number;
  /** Smaller typography scale for use inside the Hero, where the countdown
   * is a secondary element and must not compete with the couple's names. */
  compact: boolean;
  isFirst: boolean;
  onImage: boolean;
}

/** A single "88 / Días" style block. Value changes animate with a soft crossfade. */
function CountdownUnit({ value, label, delay, isFirst, compact, onImage }: CountdownUnitProps) {
  const padded = value.toString().padStart(2, '0');

   const boxClass = onImage
    ? `flex flex-col items-center px-4 sm:px-6 ${isFirst ? '' : 'border-l border-paper/25'}`
    : compact
      ? 'flex flex-col items-center'
      : 'flex flex-col items-center rounded-2xl bg-paper-card px-4 py-5 shadow-card ring-1 ring-ink/5 sm:px-6 sm:py-7';

  const valueClass = onImage
    ? 'font-display text-3xl font-medium text-paper sm:text-4xl'
    : compact
      ? 'font-display text-xl font-semibold text-ink sm:text-2xl'
      : 'font-display text-4xl font-semibold text-ink sm:text-5xl';

  const labelClass = onImage
    ? 'mt-1.5 font-body text-[10px] uppercase tracking-widest2 text-paper/70 sm:text-[11px]'
    : compact
      ? 'mt-1 font-body text-[9px] uppercase tracking-widest2 text-ink-faint sm:text-[10px]'
      : 'mt-2 font-body text-[11px] uppercase tracking-widest2 text-ink-faint sm:text-xs';

  return (
    <motion.div
      className={boxClass}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        key={padded}
        className={valueClass}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {padded}
      </motion.span>
      <span className={labelClass}>{label}</span>
    </motion.div>
  );
}

interface CountdownDisplayProps {
  /**
   * When true, renders a much smaller, more delicate version with no card
   * background — used directly beneath the couple's names in the Hero.
   * When false, renders the larger boxed version. Defaults to false.
   */
  compact?: boolean;
  onImage?: boolean;
}

/**
 * <CountdownDisplay />
 * --------------------
 * Live countdown to the wedding date, ticking every second via
 * `useCountdown`. Once the date has passed, shows a celebratory message
 * instead of negative numbers.
 *
 * This is a presentational, section-less component (no <section> wrapper,
 * no heading) so it can be embedded anywhere — currently it's used inside
 * <Hero /> directly beneath the couple's names, with `compact` set to
 * true so it stays visually secondary to the names.
 */
export function CountdownDisplay({ compact = false, onImage = false }: CountdownDisplayProps) {
  const weddingDate = new Date(weddingConfig.weddingDateISO);
  const { days, hours, minutes, seconds, isPast } = useCountdown(weddingDate);

  if (isPast) {
    return (
      <motion.p
        className={
      onImage
            ? 'font-display text-lg text-paper'
            : compact
              ? 'font-display text-lg text-rose'
              : 'text-center font-display text-3xl text-rose'
        }
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        >
        ¡Hoy es el gran día! 🎉
      </motion.p>
    );
  }

  return (
     <div className={onImage ? 'flex items-start' : compact ? 'flex items-start gap-3 sm:gap-5' : 'grid grid-cols-4 gap-3 sm:gap-6'}>
      <CountdownUnit value={days} label="Días" delay={0} isFirst compact={compact} onImage={onImage} />
      <CountdownUnit value={hours} label="Horas" delay={0.08} isFirst={false} compact={compact} onImage={onImage} />
      <CountdownUnit value={minutes} label="Min" delay={0.16} isFirst={false} compact={compact} onImage={onImage} />
      <CountdownUnit value={seconds} label="Seg" delay={0.24} isFirst={false} compact={compact} onImage={onImage} />
    </div>
  );
}
