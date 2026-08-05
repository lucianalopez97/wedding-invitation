import type { WeddingConfig } from '../types';

/**
 * ============================================================================
 *  WEDDING CONFIGURATION — THE ONLY FILE YOU SHOULD NEED TO EDIT
 * ============================================================================
 * Every piece of editable content on the site (names, date, venues, links,
 * images, FAQ, music, RSVP/gift registry URLs, etc.) lives here. Components
 * read from this object and never hardcode wedding details — so to re-use
 * this template for a different couple, or update any detail, just change
 * the values below and save. No component code needs to change.
 *
 * Dates: use ISO 8601 format ("YYYY-MM-DDTHH:mm:ss") in LOCAL time for
 * `weddingDateISO`; the countdown reads it with `new Date(...)`.
 *
 * Images: `heroImage` and `welcomeImage` accept any path under `public/`
 * (e.g. "/images/hero.jpg") or a full URL. Place your own files in
 * `public/images/` and update the path here — no component changes needed.
 * ============================================================================
 */
export const weddingConfig: WeddingConfig = {
  partnerOneName: 'Sol',
  partnerTwoName: 'Lourdes',

  

  // Wedding date & time — drives the countdown timer and every date shownZ
  // on the page. Change this single line to reschedule the wedding.
  weddingDateISO: '2026-09-26T20:00:00',

  city: 'Tucumán, Argentina',

  // Short phrase shown on the welcome COVER screen only (before "Abrir
  // Invitación"). This is separate from the mid-page "Welcome Message"
  // section below (`welcomeSection`).
  welcomeMessage: 'Nos casamos y queremos compartir este día tan especial con vos.',

  // ---------------------------------------------------------------------
  // HERO SECTION IMAGE — full-width image shown behind/above the couple's
  // names. Ships pointing at a placeholder graphic so the layout renders
  // cleanly before you add real photos. Replace with your own photo:
  // drop it in public/images/ and point this at "/images/your-file.jpg".
  // See public/images/README.md for details.
  // ---------------------------------------------------------------------
  heroImage: '/images/fotohero.jpg',

  // ---------------------------------------------------------------------
  // WELCOME MESSAGE SECTION ("We're Getting Married") — full-width imageZ
  // + title + supporting paragraph, shown right after the Hero. Also
  // ships with a placeholder graphic — replace the same way as heroImage.Z
  // ---------------------------------------------------------------------
  welcomeImage: '/images/messagefoto.jpg',
  welcomeSection: {
    eyebrow: '¡Estas invitado!',
    title: 'Nos Casamos',
    message:
      'A veces lo extraordinario comienza con la sencillez de un encuentro, donde dos almas reconocieron en la otra su propio hogar. Hoy celebramos el amor que nació de ese instante, acompáñanos a dar el SÍ y a celebrar la noche más importante de nuestras vidas',
  },

  // ---------------------------------------------------------------------
  // "WHEN & WHERE" SECTION — heading only; the Ceremony/Reception details
  // themselves come from the `events` array further below.
  // ---------------------------------------------------------------------
  whenAndWhere: {
    eyebrow: 'Cuándo y Dónde',
    title: 'Wedding Day',
  },

  // ---------------------------------------------------------------------
  // EVENTS — one entry per "When & Where" column (Ceremony, Reception).
  // Add, remove, or reorder objects in this array to change the schedule;
  // with exactly two entries they render side by side as LEFT/RIGHT
  // columns, per the current design.
  // ---------------------------------------------------------------------
  events: [
    {
      id: 'ceremony',
      title: 'Civil',
      subtitle: 'Nos daremos el sí frente a quienes más queremos',
      time: '20:30 hs',
      venueName: 'Salón Canamico Lules',
      address: 'Calle Cayetano Nazca 436',
      city: 'Lules, Tucumán',
      note: 'Por favor llegar 20 minutos antes del inicio.',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sal%C3%B3n%20Canamico%20Lules%2C%20Calle%20Cayetano%20Nazca%20436%20-%20Lules%2C%20Argentina',
      icon: 'church',
    },
    {
      id: 'reception',
      title: 'Partyyyy',
      subtitle: 'Partyyyyy',
      time: '20:00 hs',
      venueName: 'Salón Canamico Lules',
      address: 'Calle Cayetano Nazca 436',
      city: 'Lules, Tucumán',
      note: 'Salón con espacio al aire libre — se recomienda calzado cómodo.',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sal%C3%B3n%20Canamico%20Lules%2C%20Calle%20Cayetano%20Nazca%20436%20-%20Lules%2C%20Argentina',
      icon: 'partyPopper',
    },
  ],

  // ---------------------------------------------------------------------Z
  // TIMELINE — the minute-by-minute run of the night. Add, remove, or
  // reorder objects in `items` to edit it; the <Timeline /> component
  // just maps over this array. `title` isn't shown visually (the section
  // has no heading by design) but is used as an aria-label for
  // screen-reader users.
  //
  // `icon` accepts any icon name registered in the map inside
  // `Timeline.tsx` (Users, Landmark, Wine, Utensils, Music, Moon by
  // default) — add more entries there to unlock new icon names here.
  // ---------------------------------------------------------------------
  timeline: {
    title: 'Cronograma de la Noche',
    subtitle: 'Así va a transcurrir nuestra noche, minuto a minuto.',
    items: [
      { id: 'arrival', icon: 'Users', time: '20:00', title: 'Llegada al Salón' },
      {
        id: 'ceremony',
        icon: 'Landmark',
        time: '20:30',
        title: 'Ceremonia Civil',
        subtitle: 'Pérgola',
      },
      {
        id: 'reception',
        icon: 'Wine',
        time: '21:00',
        title: 'Recepción',
        subtitle: 'Patio delantero',
      },
      { id: 'dinner', icon: 'Utensils', time: '22:00', title: 'Cena', subtitle: 'Salón' },
      {
        id: 'party',
        icon: 'Music',
        time: '23:00',
        title: 'Baile - Pista',
        subtitle: 'perreo intenso',
      },
      { id: 'end', icon: 'Moon', time: '04:00', title: 'Fin', subtitle: 'a mimir' },
    ],
  },

  // ---------------------------------------------------------------------
// GALLERY — "Nuestra historia en fotos". Reemplazá con tus propias fotos
// agregando archivos en public/images/gallery/ y actualizando esta lista
// (cualquier cantidad de fotos funciona).
// ---------------------------------------------------------------------
gallery: {
  title: 'Nuestra Historia en Fotos',
  subtitle: 'Algunos de nuestros momentos favoritos.',
  images: [
    { id: 'g1', src: '/images/gallery/_edicion.jpg', alt: 'Foto de la pareja 1' },
    { id: 'g2', src: '/images/gallery/uno.jpg', alt: 'Foto de la pareja 2' },
    { id: 'g3', src: '/images/gallery/dos.jpg', alt: 'Foto de la pareja 3' },
    { id: 'g4', src: '/images/gallery/tres.jpg', alt: 'Foto de la pareja 4' },
    { id: 'g5', src: '/images/gallery/cuatro.jpg', alt: 'Foto de la pareja 5' },
    { id: 'g6', src: '/images/gallery/cinco.jpg', alt: 'Foto de la pareja 6' },
    { id: 'g6', src: '/images/gallery/seis.jpg', alt: 'Foto de la pareja 6' },
    { id: 'g6', src: '/images/gallery/siete.jpg', alt: 'Foto de la pareja 6' },
    { id: 'g6', src: '/images/gallery/ocho.jpg', alt: 'Foto de la pareja 6' },
    { id: 'g6', src: '/images/gallery/nueve.jpg', alt: 'Foto de la pareja 6' },
    { id: 'g6', src: '/images/gallery/diez.jpg', alt: 'Foto de la pareja 6' },
    { id: 'g6', src: '/images/gallery/once.jpg', alt: 'Foto de la pareja 6' },
    { id: 'g6', src: '/images/gallery/doce.jpg', alt: 'Foto de la pareja 6' },
  ],
},
  // ---------------------------------------------------------------------
  // DRESS CODE — content only; layout/position is fixed in DressCode.tsx
  // ---------------------------------------------------------------------
 dressCode: {
  eyebrow: 'Dress Code',
  title: 'Formal',
  columns: [
    {
      label: 'Ellas',
      items: [
        { text: 'Vestido largo', allowed: true },
        { text: 'Color y brillo', allowed: true },
        { text: 'No zapatillas', allowed: false },
      ],
    },
    {
      label: 'Ellos',
      items: [
        { text: 'Traje formal', allowed: true },
        { text: 'Camisa', allowed: true },
        { text: 'Corbata o moño', allowed: true },
        { text: 'Zapatillas', allowed: false },
      ],
    },
  ],
  avoid: {
    label: 'A evitar',
    description: 'Blanco y tonos lilas, reservados para las novias y damas de honor.',
    swatches: ['#FFFFFF', '#D9A8D4', '#C77DC2'],
  },
  note: 'Vestite como si fueras a encontrarte con tu ex 😏. Traé tu mejor outfit formal y tus mejores pasos prohibidos 💃.',
},
  // ---------------------------------------------------------------------
  // FAQ — rendered as a single-open accordion. Add or remove entries
  // freely; the <Faq /> component maps over this array automatically.
  // ---------------------------------------------------------------------
  faq: [
    {
      id: 'kids',
      question: '¿Puedo llevar a mis hijos?',
      answer:
        'Queremos que disfrutes de la fiesta al máximo, por eso será una celebración solo para adultos, salvo excepciones ya conversadas con nosotros. ¡Gracias por entender!',
    },
    {
      id: 'gifts',
      question: '¿Puedo llevar acompañante?',
      answer:
        'Queremos que las personas más importantes para nosotras nos acompañen, por eso esta invitación es sólo personal.',
    },
  ],

  // ---------------------------------------------------------------------
  // SPOTIFY — no embedded player, just a button that opens the playlist.
  // ---------------------------------------------------------------------
  spotify: {
    description:
      'Agrega lo que no puede faltar para perrear hasta el piso ;)',
    playlistUrl: 'https://open.spotify.com/playlist/3yWO1gKZQOVXAVjEBfdQBu?si=2b93c5d6469b4369&pt=bb20ec7b5f3dc0548708e9717f923d3f',
  },

  // ---------------------------------------------------------------------
  // RSVP & GIFT REGISTRY — both external link-outs, no embedded forms.
  // Replace with the real URLs when ready.
  // ---------------------------------------------------------------------
  rsvpUrl: 'https://tally.so/r/lbjNdN',
  giftRegistryUrl: 'https://REPLACE_WITH_YOUR_GIFT_REGISTRY_URL',

  payment: {
  eyebrow: 'Un Gesto con Nosotros',
  title: 'Si querés hacernos un regalo...',
  description: 'Tu presencia es lo más importante. Si querés, también podés dejarnos un regalo.',
  details: [
    { label: 'Banco', value: 'Personal Pay' },
    { label: 'Titular', value: 'Lourdes Maria Lopez' },
    { label: 'Alias', value: 'Regalo.solylou' },
    { label: 'CBU', value: '0000076500000008981525' },
  ],
},

  // ---------------------------------------------------------------------
  // BACKGROUND MUSIC — swap `src` to change the song. Place audio files
  // in `public/audio/` and reference them as "/audio/filename.mp3".
  // ---------------------------------------------------------------------
  music: {
    src: '/audio/que-suerte-tenerte.mp3',
    trackTitle: 'Qué Suerte Tenerte',
    trackArtist: 'Fonseca',
    defaultVolume: 0.2,
  },

  footer: {
    message: 'Gracias por ser parte de nuestra historia',
    signature: 'Sol & Lourdes',
  },
};
