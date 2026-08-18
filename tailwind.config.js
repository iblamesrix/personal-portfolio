import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Existing semantic accent utilities keep their hierarchy, without color.
      colors: {
        violet: colors.neutral,
        purple: colors.neutral,
        cyan: colors.neutral,
        blue: colors.neutral,
        indigo: colors.neutral,
        emerald: colors.neutral,
        green: colors.neutral,
        teal: colors.neutral,
        amber: colors.neutral,
        yellow: colors.neutral,
        orange: colors.neutral,
        red: colors.neutral,
        pink: colors.neutral,
        brand: {
          50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4',
          400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040',
          800: '#262626', 900: '#171717', 950: '#0a0a0a',
        },
        neon: {
          purple: '#f5f5f5', blue: '#d4d4d4', cyan: '#a3a3a3',
          green: '#e5e5e5', pink: '#bdbdbd',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(255, 255, 255, 0.16)',
        'glow-sm': '0 0 15px rgba(255, 255, 255, 0.12)',
        'glow-cyan': '0 0 30px rgba(255, 255, 255, 0.12)',
        'glow-green': '0 0 20px rgba(255, 255, 255, 0.12)',
        'card-dark': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'premium': '0 10px 30px -5px rgba(0,0,0,0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-x': 'gradientX 4s ease infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'orbit': 'orbit 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,255,255,0.16)' },
          '50%': { boxShadow: '0 0 40px rgba(255,255,255,0.28)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,255,255,0.12) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      }
    },
  },
  plugins: [],
}
