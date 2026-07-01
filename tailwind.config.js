/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#0a0d12',
          800: '#0d1117',
          700: '#12161d',
          600: '#161b22',
          500: '#1c222b',
        },
        neon: {
          DEFAULT: '#1987F0',
          soft: '#4aa3f5',
          deep: '#004B87',
          cyan: '#00e5ff',
        },
        signal: {
          green: '#2ecc71',
          amber: '#FFA500',
          red: '#ff4d5e',
        },
        ink: {
          DEFAULT: '#e6edf3',
          muted: '#8b949e',
          faint: '#586069',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(25,135,240,0.35), 0 0 60px rgba(25,135,240,0.12)',
        'glow-sm': '0 0 12px rgba(25,135,240,0.35)',
        'glow-cyan': '0 0 20px rgba(0,229,255,0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(25,135,240,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(25,135,240,0.08) 1px, transparent 1px)',
        'neon-radial': 'radial-gradient(600px circle at var(--mx,50%) var(--my,0%), rgba(25,135,240,0.12), transparent 45%)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 18px rgba(25,135,240,0.45)' },
          '50%': { opacity: '0.85', boxShadow: '0 0 34px rgba(25,135,240,0.75)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        scan: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100%)' } },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        blink: 'blink 1.05s step-end infinite',
        scan: 'scan 6s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
