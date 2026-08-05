/**
 * TYPE DEFINITIONS
 * ----------------
 * These types describe the shape of `weddingConfig.ts`. They exist so
 * that editing the configuration file gets you full autocomplete and
 * compile-time safety — if you forget a field, or type an event date
 * incorrectly, TypeScript will tell you before it becomes a bug on the
 * live site.
 */

/** A single point-in-time event that appears in the "Event Schedule" section. */
export interface WeddingEvent {
  /** Unique key, used for React lists. Keep it short and unique, e.g. "ceremony". */
  id: string;
  /** Event name shown on the card title, e.g. "Ceremonia". */
  title: string;
  /** Short supporting label under the title, e.g. "Iglesia San José". */
  subtitle: string;
  /** Human-readable time, e.g. "18:30 hs". Kept as a string for full formatting control. */
  time: string;
  /** City where the event takes place. */
  city: string;
  /** Venue name, e.g. "Salón Los Cardales". */
  venueName: string;
  /** Full street address shown under the venue name. */
  address: string;
  /** Short free-text note shown under the address, e.g. dress code hint or parking note. Optional. */
  note?: string;
  /** Google Maps URL the "Cómo llegar" button opens in a new tab. */
  mapsUrl: string;
  /** Name of the lucide-react icon to use for this card ("church", "glass", etc.). */
  icon: 'church' | 'partyPopper' | 'utensils' | 'mapPin';
}

/**
 * Name of a lucide-react icon usable in the Timeline section. Kept as a
 * plain string (rather than a union) so new icons can be added just by
 * importing them in `Timeline.tsx`'s icon map — no type changes needed.
 */
export type TimelineIconName = string;

/** A single stop in the "Timeline" section (arrival, ceremony, dinner, ...). */
export interface TimelineItem {
  /** Unique key, used for React lists. Keep it short and unique, e.g. "arrival". */
  id: string;
  /** Name of the lucide-react icon for this stop, e.g. "Users", "Landmark", "Wine". */
  icon: TimelineIconName;
  /** Human-readable time, e.g. "20:00". */
  time: string;
  /** Uppercase event title, e.g. "Civil Ceremony". */
  title: string;
  /** Optional italic supporting line under the title, e.g. a location name. */
  subtitle?: string;
}

/** A single gift-related option shown in the "Gifts" section (bank info, gift registry, etc.). */
export interface GiftOption {
  id: string;
  title: string;
  description: string;
  /** Optional call-to-action link, e.g. a gift registry URL. Omit for a text-only card (like bank details). */
  linkUrl?: string;
  linkLabel?: string;
  /** Name of the lucide-react icon for this card. */
  icon: 'gift' | 'plane' | 'home' | 'wallet';
}

/** A single photo in the "Nuestra historia en fotos" gallery. */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

/** Root shape of the whole editable configuration object. */
export interface WeddingConfig {
  /** First partner's name, shown first in the couple name lockup. */
  partnerOneName: string;
  /** Second partner's name. */
  partnerTwoName: string;
  /** ISO 8601 date-time string for the wedding — drives the countdown and all date displays. */
  weddingDateISO: string;
  /** City / region shown under the couple names, e.g. "Buenos Aires, Argentina". */
  city: string;
  /** Short romantic quote or welcome phrase shown on the welcome screen. */
  welcomeMessage: string;

  heroImage: string;

  welcomeImage: string;
  welcomeSection: {
    eyebrow: string;
    title: string;
    message: string;
  };

  whenAndWhere: {
    eyebrow: string;
    title: string;
  };

  faq: FaqItem[];

  giftRegistryUrl: string;

  /** Ordered list of schedule events (ceremony, reception, etc.). */
  events: WeddingEvent[];

  /** "The Timeline" section — a vertical, minute-by-minute run of the night. */
  timeline: {
    /** Section heading, e.g. "The Timeline". */
    title: string;
    /** Optional supporting sentence under the title. */
    subtitle?: string;
    /** Ordered list of timeline stops, rendered top to bottom. */
    items: TimelineItem[];
  };

    /** "Nuestra historia en fotos" — galería con lightbox. */
  gallery: {
    title: string;
    subtitle?: string;
    images: GalleryImage[];
  };

  /** Dress code section content. */
dressCode: {
  eyebrow: string;
  title: string;
  columns: [
    { label: string; items: DressCodeItem[] },
    { label: string; items: DressCodeItem[] },
  ];
  avoid: {
    label: string;
    description: string;
    swatches: string[];
  };
  note: string;
};


  /** Spotify playlist section. */
  spotify: {
    description: string;
    playlistUrl: string;
  };

  /** External RSVP form URL — the "Confirmar Asistencia" button target. */
  rsvpUrl: string;

  /** Background music configuration. */
  music: {
    /** Path (or URL) to the audio file. Replace this single value to change the song. */
    src: string;
    trackTitle: string;
    trackArtist: string;
    /** Default volume from 0 to 1. */
    defaultVolume: number;
  };

  /** Footer content. */
  footer: {
    message: string;
    signature: string;
  };
}

export interface DressCodeItem {
  text: string;
  allowed: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}