import type { Config } from 'tailwindcss';

/**
 * TAILWIND DESIGN TOKENS
 * ----------------------
 * This is the single source of truth for the invitation's visual identity.
 * Palette: warm ivory paper + dusty rose + soft sage + a muted antique-gold
 * accent, evoking pressed botanicals on fine stationery rather than a
 * generic "gold foil wedding" look.
 *
 * Colors are named semantically (paper, ink, rose, sage, gold) so
 * components never hardcode hex values — change the palette here and it
 * propagates everywhere.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FBF7F1', // warm ivory background
          soft: '#F5EEE4', // slightly deeper ivory for alternating sections
          card: '#FFFDFA', // near-white for cards floating above the paper tone
        },
        ink: {
          DEFAULT: '#3C332C', // primary text — warm charcoal, never pure black
          soft: '#6B5F55', // secondary text
          faint: '#9C8F82', // captions, labels, timestamps
        },
        rose: {
          DEFAULT: '#C99B96', // dusty rose accent
          light: '#EAD3CE',
          dark: '#A9726C',
        },
        sage: {
          DEFAULT: '#8A9A80', // muted sage green, used sparingly for contrast
          light: '#D9E1D2',
        },
        gold: {
          DEFAULT: '#B8935F', // antique gold for fine rules & accents only
          light: '#E4D2B4',
        },
        midnight: {
          DEFAULT: '#211C18', // warm near-black background for the Timeline section
          soft: '#2B2521', // slightly lighter panel tone / line color on dark bg
        },
      },
      fontFamily: {
        // Couple names / large display moments
        display: ['"Cormorant Garamond"', 'serif'],
        // Section titles / eyebrows
        heading: ['"Marcellus"', 'serif'],
        // Body copy, buttons, UI text
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(60, 51, 44, 0.18)',
        card: '0 8px 30px -10px rgba(60, 51, 44, 0.15)',
      },
      backgroundImage: {
        'paper-gradient':
          'radial-gradient(120% 120% at 50% 0%, #FFFDFA 0%, #FBF7F1 55%, #F5EEE4 100%)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
