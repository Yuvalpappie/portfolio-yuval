/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        'matrix-green': '#00ff41',
        'terminal-green': '#39ff14',
        'hacker-cyan': '#00ffff',
        'console-amber': '#ffb000',
      },
      animation: {
        'matrix': 'matrix 20s linear infinite',
        'scanlines': 'scanlines 0.1s linear infinite',
        'glitch': 'glitch 2s infinite',
        'terminal-blink': 'blink 1s infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        matrix: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '20px 20px' }
        },
        scanlines: {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '0 4px' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      boxShadow: {
        'terminal': '0 0 20px rgba(0, 255, 65, 0.3)',
        'glow-green': '0 0 10px rgba(0, 255, 65, 0.5)',
        'glow-cyan': '0 0 10px rgba(0, 255, 255, 0.5)',
      },
      backgroundImage: {
        'matrix-rain': 'linear-gradient(90deg, transparent 98%, #00ff41 99%, #00ff41 100%), linear-gradient(180deg, transparent 98%, #00ff41 99%, #00ff41 100%)',
      },
      backdropBlur: {
        'terminal': '10px',
      }
    },
  },
  plugins: [],
}