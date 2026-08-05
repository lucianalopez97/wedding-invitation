import { motion } from 'framer-motion';
import {
  Users,
  Landmark,
  Wine,
  Utensils,
  Music,
  Moon,
  MapPin,
  Church,
  PartyPopper,
  Gift,
  type LucideIcon,
} from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';
import type { TimelineItem as TimelineItemType } from '../../types';

/**
 * <Timeline />
 * ------------
 * "The Timeline" section: a dark, vertical run-of-night timeline shown
 * between "When & Where" and Dress Code. Renders WITHOUT a visible
 * section heading by design — it begins immediately with the first stop.
 * `weddingConfig.timeline.title` is still used as an aria-label on the
 * <section> so screen-reader users get an announced section name.
 *
 * CONFIGURATION
 * -------------
 * Fully data-driven — every row comes from `weddingConfig.timeline.items`.
 * To add, remove, or reorder stops, edit that array; this component only
 * maps over it and never needs to change for a content update.
 *
 * To use a new icon: import it from lucide-react below and add it to the
 * `TIMELINE_ICONS` map, then reference its name (e.g. "Sparkles") in the
 * config's `icon` field.
 */

/**
 * ICON MAP
 * --------
 * Maps the plain-string `icon` values used in `weddingConfig.ts` (e.g.
 * "Users", "Landmark") to their actual lucide-react component.
 */
const TIMELINE_ICONS: Record<string, LucideIcon> = {
  Users,
  Landmark,
  Wine,
  Utensils,
  Music,
  Moon,
  MapPin,
  Church,
  PartyPopper,
  Gift,
};

/** Fallback icon used if a config entry references a name not in the map above. */
const FALLBACK_ICON = MapPin;

interface TimelineRowProps {
  item: TimelineItemType;
  index: number;
  isLast: boolean;
}

/**
 * A single row: the icon node on the connecting line, plus the
 * time/title/subtitle text block beside it. Animates in with a fade +
 * slide as it scrolls into view, staggered by `index`.
 */
function TimelineRow({ item, index, isLast }: TimelineRowProps) {
  const Icon = TIMELINE_ICONS[item.icon] ?? FALLBACK_ICON;

  return (
    <motion.li
      className="relative flex gap-6 sm:gap-8"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Icon node + connecting line segment */}
      <div className="relative flex flex-shrink-0 flex-col items-center">
        <span className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 bg-midnight text-paper/80 sm:h-12 sm:w-12">
          <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
        </span>
        {/* Line segment connecting this node to the next — omitted after the last item */}
        {!isLast && <span className="w-px flex-1 bg-paper/15" aria-hidden="true" />}
      </div>

      {/* Time / title / subtitle text block */}
      <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-12 sm:pb-14'}`}>
        <p className="font-display text-3xl font-semibold text-paper sm:text-4xl">{item.time}</p>
        <p className="mt-1 font-body text-sm font-semibold uppercase tracking-widest2 text-paper/90">
          {item.title}
        </p>
        {item.subtitle && (
          <p className="mt-1 font-display italic text-paper/50">{item.subtitle}</p>
        )}
      </div>
    </motion.li>
  );
}

export function Timeline() {
  const { title, items } = weddingConfig.timeline;

  return (
    <section id="timeline" aria-label={title} className="bg-midnight px-6 py-24">
      <ol className="mx-auto max-w-md list-none">
        {items.map((item, index) => (
          <TimelineRow key={item.id} item={item} index={index} isLast={index === items.length - 1} />
        ))}
      </ol>
    </section>
  );
}
