# Sol & Lourdes — Invitación de Boda

A premium, single-page wedding invitation built with React, TypeScript,
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

To build for production:

```bash
npm run build
npm run preview
```

The `dist/` folder produced by `npm run build` can be deployed to any
static host (Vercel, Netlify, GitHub Pages, S3, etc.).

## The only file you need to edit

**`src/config/weddingConfig.ts`** contains every piece of editable
content on the site:

- Couple names & wedding date/time (drives the countdown automatically)
- City
- Welcome / hero messages
- Timeline ("The Timeline" section) — ordered run-of-night stops, each
  with an icon, time, title, and optional subtitle
- Event schedule (ceremony, reception, ...) — venue, address, time,
  Google Maps link, per-card note
- Dress code text and tag pills
- Gift options (with optional external links)
- Spotify playlist URL
- RSVP form URL
- Background music file path, track title/artist, default volume
- Footer message

Every component reads from this file — you should never need to touch
component code just to update wedding details.

## Adding the background music file

Drop your audio file into `public/audio/` and point
`music.src` in `weddingConfig.ts` at it, e.g. `/audio/my-song.mp3`. See
`public/audio/README.md` for details. The song is only ever started
from the "Abrir Invitación" button's click handler, so it respects
browser autoplay restrictions.

## Project structure

```
src/
  config/weddingConfig.ts   # <- edit this
  types/                    # TypeScript types for the config shape
  hooks/
    useCountdown.ts         # countdown timer logic
    useBackgroundMusic.ts   # audio playback, looping, fade in/out
  components/
    Welcome/                # cover screen ("Abrir Invitación")
    Hero/                   # intro section
    Countdown/               # days/hours/min/sec grid
    Timeline/                # dark run-of-night vertical timeline
    Events/                  # EventCard + EventsSection (schedule)
    DressCode/
    Gifts/                   # GiftCard + GiftsSection
    Playlist/                # Spotify link-out card
    RSVP/                    # RSVPButton + RSVPSection (link-out)
    Footer/
    Music/                   # FloatingMusicButton
    shared/                  # SectionTitle, SectionCard, BotanicalOrnament
  App.tsx                    # page composition / section order
```

## Adding icons to the Timeline

`weddingConfig.ts` references timeline icons by plain string name (e.g.
`"Users"`, `"Landmark"`). The available names are defined in the
`TIMELINE_ICONS` map at the top of
`src/components/Timeline/Timeline.tsx` — to unlock a new icon, import it
from `lucide-react` there and add it to the map, then reference its name
in the config.

## Notes

- No RSVP form and no Spotify player are embedded — both are simple
  buttons that open external URLs configured in `weddingConfig.ts`.
- Reduced-motion preferences are respected (`prefers-reduced-motion`).
- The layout is mobile-first and tested down to 320px width with no
  horizontal scroll.
