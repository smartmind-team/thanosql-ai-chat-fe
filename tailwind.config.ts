import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        base: '14px',
      },
      colors: {
        brands: {
          main: 'hsla(var(--brands-main))',
          dark: 'hsla(var(--brands-dark))',
          normal: 'hsla(var(--brands-normal))',
          light: 'hsla(var(--brands-light))',
          thin: 'hsla(var(--brands-thin))',
        },
        texts: {
          primary: 'hsla(var(--texts-primary))',
          secondary: 'hsla(var(--texts-secondary))',
          tertiary: 'hsla(var(--texts-tertiary))',
          quaternary: 'hsla(var(--texts-quenternary))',
          brand: 'hsla(var(--texts-brand))',
        },
        grays: {
          gray: 'hsla(var(--grays-gray))',
          gray01: 'hsla(var(--grays-gray-01))',
          gray02: 'hsla(var(--grays-gray-02))',
          gray03: 'hsla(var(--grays-gray-03))',
          gray04: 'hsla(var(--grays-gray-04))',
          gray05: 'hsla(var(--grays-gray-05))',
          grayLight: 'hsla(var(--grays-gray-light))',
          grayDark: 'hsla(var(--grays-gray-dark))',
        },

        background: 'hsla(var(--background))',
        sideBackground: 'hsla(var(--side-background))',
        opacityBackground: 'hsla(var(--opacity-background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsla(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
