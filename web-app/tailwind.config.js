/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:  '#3D9B6A',   // verde corporativo (del logo)
          greenDark: '#2a7a52',
          greenLight: '#e8f5ee',
          teal:   '#1AABCD',   // celeste corporativo
          tealDark: '#1289a7',
          tealLight: '#e3f6fb',
          dark:   '#0f1f2e',   // fondo oscuro hero
          navy:   '#1A2840',
          light:  '#F8FAFC',
          gray:   '#64748b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.14)',
        'brand': '0 4px 20px rgba(61, 155, 106, 0.3)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3D9B6A 0%, #1AABCD 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0f1f2e 0%, #1A2840 50%, #0d2e38 100%)',
      },
    },
  },
  plugins: [],
}
