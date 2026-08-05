import { motion } from 'framer-motion';
import { Church, PartyPopper, Utensils, MapPin } from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';
import type { WeddingEvent } from '../../types';
import { SectionTitle } from '../shared/SectionTitle';

const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

/** Maps each config-friendly icon name to its lucide-react component. */
const ICONS = {
  church: Church,
  partyPopper: PartyPopper,
  utensils: Utensils,
  mapPin: MapPin,
} as const;

interface EventColumnProps {
  event: WeddingEvent;
  delay: number;
}

/** One column (Ceremony or Reception) inside the "When & Where" grid. */
function EventColumn({ event, delay }: EventColumnProps) {
  const Icon = ICONS[event.icon];

  return (
    <motion.div
      className="flex flex-col items-center px-6 py-10 text-center sm:px-10 lg:py-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-light text-rose-dark">
        <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
      </div>

      <p className="mt-4 font-body text-xs font-semibold uppercase tracking-widest2 text-ink-faint">
        {event.title}
      </p>

      <h3 className="mt-2 font-heading text-2xl text-ink sm:text-3xl">{event.venueName}</h3>

      <p className="mt-3 font-body text-sm text-ink-soft">{event.address}</p>
      <p className="font-body text-sm text-ink-soft">{event.city}</p>
      <p className="mt-3 font-display text-xl font-medium text-rose-dark">{event.time}</p>

      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3 font-body text-xs uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper sm:w-auto"
      >
        <MapPin size={14} aria-hidden="true" />
        Cómo Llegar
      </a>
    </motion.div>
  );
}

/**
 * <WhenAndWhereSection />
 * -----------------------
 * "When & Where" — sits immediately before the Timeline. Shows the
 * wedding date once, then the Ceremony and Reception details side by
 * side (stacked on mobile) with a thin divider between them on tablet
 * and desktop.
 *
 * CONFIGURATION
 * -------------
 * - `weddingConfig.whenAndWhere`: `{ eyebrow, title }` heading text.
 * - `weddingConfig.events`: the Ceremony/Reception entries themselves —
 *   with exactly two entries they render as the LEFT/RIGHT columns
 *   described in the design. Add/remove/reorder entries there; this
 *   component only maps over the array.
 */
export function WhenAndWhereSection() {
  const { eyebrow, title } = weddingConfig.whenAndWhere;
  const weddingDate = new Date(weddingConfig.weddingDateISO);
  const formatted = dateFormatter.format(weddingDate);
  const capitalized = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  return (
    <section id="when-and-where" className="bg-paper-soft px-6 py-24">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={capitalized} />

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 divide-y divide-ink/10 rounded-3xl bg-paper-card shadow-card ring-1 ring-ink/5 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {weddingConfig.events.map((event, index) => (
          <EventColumn key={event.id} event={event} delay={index * 0.12} />
        ))}
      </div>
    </section>
  );
}
