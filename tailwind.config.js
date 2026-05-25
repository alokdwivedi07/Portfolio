/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      screens: {
        xs: '420px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1180px',
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#050505',
          soft: '#171717',
          muted: '#525252',
        },
        paper: {
          DEFAULT: '#e9e9e6',
          clean: '#f7f7f3',
          warm: '#efefeb',
        },
        line: {
          DEFAULT: 'rgba(5, 5, 5, 0.14)',
          strong: 'rgba(5, 5, 5, 0.32)',
          inverse: 'rgba(255, 255, 255, 0.16)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        eyebrow: ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.28em' }],
        micro: ['0.6875rem', { lineHeight: '1rem', letterSpacing: '0.18em' }],
        lead: ['1.125rem', { lineHeight: '2rem' }],
        'display-sm': ['2.75rem', { lineHeight: '0.95', letterSpacing: '0' }],
        display: ['4.5rem', { lineHeight: '0.9', letterSpacing: '0' }],
        'display-lg': ['6rem', { lineHeight: '0.88', letterSpacing: '0' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        46: '11.5rem',
        50: '12.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        70: '17.5rem',
      },
      maxWidth: {
        readable: '42rem',
        section: '72rem',
        narrow: '56rem',
      },
      borderRadius: {
        none: '0',
        subtle: '0.375rem',
      },
      boxShadow: {
        fine: '0 1px 0 rgba(5, 5, 5, 0.08)',
        premium: '0 24px 80px rgba(5, 5, 5, 0.12)',
        'premium-dark': '0 32px 100px rgba(0, 0, 0, 0.36)',
        inset: 'inset 0 0 0 1px rgba(5, 5, 5, 0.12)',
      },
      backgroundImage: {
        'grid-ink':
          'linear-gradient(rgba(5,5,5,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(5,5,5,.06) 1px, transparent 1px)',
        'grid-white':
          'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
        'hero-dark':
          'linear-gradient(135deg, rgba(255,255,255,.12), transparent 28%), linear-gradient(160deg, #050505, #171717 48%, #000000)',
      },
      backgroundSize: {
        grid: '28px 28px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        premium: '650ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .75s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in .75s ease both',
        'scale-in': 'scale-in .75s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
