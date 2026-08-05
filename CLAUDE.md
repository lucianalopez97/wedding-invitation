Always read this file completely before making any changes to the project. This document is the single source of truth for architecture, design, animations, responsiveness, code quality, and future development. Any modification must remain fully consistent with these guidelines.

# CLAUDE.md

# Wedding Invitation Project Guidelines

## Purpose

Build and maintain a premium wedding invitation website inspired by the overall user experience and visual quality of:

https://www.seiv.com.ar/sol-lourdes-5o86h

Never copy the original source code or assets. Instead, recreate the same level of elegance, pacing, and visual hierarchy using original code and reusable components.

This document is the single source of truth for every future modification.

---

# Core Principles

Every new feature must:

- Match the existing design language.
- Reuse existing components whenever possible.
- Never introduce inconsistent typography, spacing, colors, or animations.
- Be fully responsive.
- Be production-ready.
- Prioritize maintainability.

---

# Technology Stack

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

The project should run with only:

```bash
npm install
npm run dev
```

No additional configuration should be required.

---

# Configuration

No wedding information should ever be hardcoded inside components.

Create a single configuration file containing every editable value, including:

- Couple names
- Wedding date
- City
- Ceremony information
- Reception information
- Timeline events
- Dress code
- Gift information
- Google Maps URLs
- Spotify playlist URL
- RSVP URL
- Background music path

The website should be customizable by editing only this configuration file.

---

# Wedding Information

Wedding Date:

September 26, 2026

The countdown must always reference this date.

---

# Background Music

The invitation includes ambient background music.

Requirements:

- Starts only after clicking "Open Invitation"
- Browser autoplay restrictions must be respected
- Loop enabled
- Default volume: 20%
- Floating play/pause button
- Smooth fade transitions
- Audio path stored in configuration

The audio source must remain easily replaceable.

---

# Spotify Section

Do not embed Spotify.

Display:

- Spotify icon
- Short description
- "Listen to our Playlist" button

The button opens the Spotify playlist in a new tab.

The playlist URL comes from the configuration file.

---

# RSVP

Do not embed an RSVP form.

Instead display a single:

"Confirm Attendance"

button.

The button redirects to an editable external URL stored inside the configuration.

---

# Page Structure

Maintain this order unless explicitly requested otherwise:

1. Welcome Screen
2. Hero
3. Countdown
4. Timeline
5. Event Information (Ceremony & Reception)
6. Dress Code
7. Gifts
8. Spotify Playlist
9. RSVP
10. Footer

---

# Timeline

Create a reusable Timeline component.

Timeline items must be generated from a configuration array.

Each event contains:

- icon
- time
- title
- optional subtitle

Desktop:

Vertical timeline with connecting line.

Tablet:

Adaptive layout.

Mobile:

Single-column timeline with proper spacing.

---

# Ceremony & Reception

Use a premium editorial two-column layout inspired by the provided design reference.

Desktop:

- Two equal-width columns
- Thin vertical divider
- Ceremony on the left
- Reception on the right

Each column displays:

- Icon
- Event label
- Venue
- Address
- Time
- "How to Get There" button

Tablet:

Two columns when space allows, otherwise stacked.

Mobile:

Single column.

Remove the divider.

Buttons become full width.

Google Maps URLs come from configuration.

---

# Dress Code

Maintain the same visual hierarchy and placement as the reference website.

The layout should integrate naturally with the rest of the design system.

---

# Design System

## Color Palette

Background

Primary:
#FAF8F5

Secondary:
#F4F1EC

Cards:
#FFFFFF

Footer:
#F7F4EF

Text

Primary:
#1F1F1F

Secondary:
#575757

Muted:
#8A8A8A

Accent:
#A88B6A

Borders:
#DDD7CF

Dividers:
#E8E3DC

Hover:
#8F7154

---

# Typography

Google Fonts

Headings:

Cormorant Garamond

Body:

Montserrat

Typography hierarchy:

Hero Names

72 / 60 / 46

Weight 700

Main Titles

54 / 44 / 36

Weight 600

Venue Names

44 / 38 / 32

Weight 600

Times

54 / 42

Weight 600

Section Labels

Montserrat

14px

Uppercase

Letter spacing:
0.35em

Body

17 / 16

Weight 400

Line height:
1.8

Buttons

Montserrat

14px

Weight 500

Uppercase

Letter spacing:
0.18em

---

# Layout

Container:

1200px

Centered.

Horizontal padding:

Desktop:
48px

Tablet:
36px

Mobile:
24px

Section spacing:

Desktop:
140px

Tablet:
110px

Mobile:
80px

Card padding:

Desktop:
48px

Tablet:
40px

Mobile:
28px

---

# Components

Use reusable components.

Examples:

Hero

Countdown

Timeline

EventSection

EventCard

DressCode

GiftCard

PlaylistCard

RSVPButton

Footer

FloatingMusicButton

Avoid duplicated logic.

---

# Borders

Cards

1px solid #E8E3DC

Buttons

1px solid Accent

Border Radius

Cards

24px

Buttons

999px

Inputs

16px

---

# Shadows

Very subtle only.

Cards:

shadow-sm

Hover:

0 12px 36px rgba(0,0,0,.08)

Never use heavy shadows.

---

# Icons

Lucide React.

Outline style.

Stroke:

1.5

Inside circular containers.

---

# Animations

Use Framer Motion.

Animations should feel slow, elegant and premium.

Never use bouncy effects.

Page load:

Fade

0.8s

Sections:

Fade Up

30px → 0

0.7s

Cards:

Stagger animation.

Buttons:

Hover scale 1.02

Icons:

Scale 1.05

Rotate 3°

Images:

Very subtle parallax.

---

# Responsive Design

The website must be designed specifically for:

Mobile

320–767px

Tablet

768–1023px

Desktop

1024px+

Large Desktop

1440px+

Layouts must be intentionally designed for each breakpoint.

Do not simply resize desktop layouts.

No horizontal scrolling.

Touch-friendly interactions.

---

# Code Quality

- Strong TypeScript typing.
- Semantic HTML.
- Accessibility best practices.
- Clean architecture.
- Reusable components.
- No duplicated code.
- Prefer composition over repetition.
- Keep components focused and maintainable.

---

# Documentation

Every component should include concise comments explaining:

- Its purpose.
- The props it receives.
- Which configuration values control it.
- How to customize it later.

Complex logic should always be documented.

---

# Future Changes

Before implementing any new feature:

1. Read this file completely.
2. Preserve the existing design language.
3. Reuse existing components whenever possible.
4. Keep all editable content in the configuration file.
5. Maintain consistency across typography, spacing, animations, and responsiveness.

If a design decision is not covered here, choose the solution that best matches the existing aesthetic rather than introducing a new visual style.

# Development Workflow

Whenever a new feature is requested:

- Analyze the existing architecture first.
- Reuse existing components before creating new ones.
- Keep styling consistent with the design system.
- Update the configuration file if new editable content is introduced.
- Never break responsiveness.
- Never remove existing functionality unless explicitly requested.
- Preserve backward compatibility whenever possible.