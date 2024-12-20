/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      scrollbarWidth: ["none"],
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        "washed-peach-50": "#ffe6d0",
        "washed-peach-100": "#ffd2a1",
        "washed-peach-200": "#ffc17a",
        "washed-peach-300": "#ffb153",
        "washed-peach-400": "#ffa22d",
        "washed-peach-500": "#ff9126",
        "washed-peach-600": "#ff7f1f",
        "washed-peach-700": "#ff6e18",
        "washed-peach-800": "#ff5c11",
        "wwashed-peach-900": "#ff4b0a",
        "washed-pink-50": "#f8d3d7",
        "washed-pink-100": "#f7b8c3",
        "washed-pink-200": "#f79ccf",
        "washed-pink-300": "#f681bb",
        "washed-pink-400": "#f565a7",
        "washed-pink-500": "#f44a93",
        "washed-pink-600": "#f02f80",
        "washed-pink-700": "#e41a6f",
        "washed-pink-800": "#d20d5c",
        "washed-pink-900": "#c20049",
        "primary-peach-50": "#ffd9b2",
        "primary-peach-100": "#ffbf91",
        "primary-peach-200": "#ffaa6f",
        "primary-peach-300": "#ff9a56",
        "primary-peach-400": "#ff8a3d",
        "primary-peach-500": "#ff7a24",
        "primary-peach-600": "#ff6a0a",
        "primary-peach-700": "#e55d00",
        "primary-peach-800": "#cc5100",
        "primary-peach-900": "#b24500",
        "primary-pink-50": "#f1a9c0",
        "primary-pink-100": "#f285a4",
        "primary-pink-200": "#f26b8e",
        "primary-pink-300": "#f2537a",
        "primary-pink-400": "#f13b67",
        "primary-pink-500": "#f02756",
        "primary-pink-600": "#e61d4a",
        "primary-pink-700": "#d1143e",
        "primary-pink-800": "#b80a33",
        "primary-pink-900": "#a20128",
        "Neutrals/neutrals-1": "#ffffff",
        "Neutrals/neutrals-2": "#fcfcfd",
        "Neutrals/neutrals-3": "#f5f5f6",
        "Neutrals/neutrals-4": "#f0f0f1",
        "Neutrals/neutrals-5": "#d9d9dc",
        "Neutrals/neutrals-6": "#c0bfc4",
        "Neutrals/neutrals-7": "#8d8c95",
        "Neutrals/neutrals-8": "#5b5966",
        "Neutrals/neutrals-9": "#464553",
        "Neutrals/neutrals-10": "#282637",
        "Neutrals/neutrals-11": "#201f30",
        "Neutrals/neutrals-12": "#161427",
        "Neutrals/neutrals-13": "#020014",
        "brand-washedPink": "#fad1d1",
        "brand-washedPeach": "#ffd8b1",
        "brand-primaryPeach": "#ff9a56",
        "brand-primaryPink": "#f27e92",
        'brand-dark': '#030014',
        'brand-white': '#ffffff',

      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};