/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          deep: 'var(--bg-deep)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          bright: 'var(--border-bright)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          indigo: '#6366F1',
          emerald: '#10B981',
          rose: '#F43F5E',
          amber: '#F59E0B',
          sky: '#0EA5E9',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass-indigo': '0 0 20px rgba(99, 102, 241, 0.12)',
        'glass-emerald': '0 0 20px rgba(16, 185, 129, 0.12)',
        'glass-rose': '0 0 20px rgba(244, 63, 94, 0.12)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}


