import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark-1': '#0a0a0a',
        'bg-dark-2': '#121212',
        'bg-dark-3': '#1a1a1a',
        'accent': '#E6EB2F',
        'accent-hover': '#d4d928',
        'text-main': '#ffffff',
        'text-muted': 'rgba(255, 255, 255, 0.5)',
        'border-light': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite 0.8s',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      screens: {
        'xs': '400px',
      },
      maxWidth: {
        'content': '1200px',
      },
      borderColor: {
        DEFAULT: 'rgba(255,255,255,0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
