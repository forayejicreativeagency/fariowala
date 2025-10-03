// Tailwind CSS configuration for e-commerce platform theme
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.ts",
    "./resources/**/*.tsx",
    "./Modules/**/resources/**/*.blade.php",
    "./Modules/**/resources/**/*.js",
    "./Modules/**/resources/**/*.jsx",
    "./Modules/**/resources/**/*.ts",
    "./Modules/**/resources/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Theme Colors
        'theme': {
          blue: {
            DEFAULT: '#00383C',
            50: 'rgba(0, 56, 60, 0.05)',
            100: 'rgba(0, 56, 60, 0.1)',
            200: 'rgba(0, 56, 60, 0.2)',
            300: 'rgba(0, 56, 60, 0.3)',
            400: 'rgba(0, 56, 60, 0.4)',
            500: 'rgba(0, 56, 60, 0.5)',
            600: 'rgba(0, 56, 60, 0.6)',
            700: 'rgba(0, 56, 60, 0.7)',
            800: 'rgba(0, 56, 60, 0.8)',
            900: 'rgba(0, 56, 60, 0.9)',
          },
          green: {
            DEFAULT: '#03BE6A',
            50: 'rgba(3, 190, 106, 0.05)',
            100: 'rgba(3, 190, 106, 0.1)',
            200: 'rgba(3, 190, 106, 0.2)',
            300: 'rgba(3, 190, 106, 0.3)',
            400: 'rgba(3, 190, 106, 0.4)',
            500: 'rgba(3, 190, 106, 0.5)',
            600: 'rgba(3, 190, 106, 0.6)',
            700: 'rgba(3, 190, 106, 0.7)',
            800: 'rgba(3, 190, 106, 0.8)',
            900: 'rgba(3, 190, 106, 0.9)',
          },
          yellow: {
            DEFAULT: 'rgb(255, 215, 131)',
            50: 'rgba(255, 215, 131, 0.05)',
            100: 'rgba(255, 215, 131, 0.1)',
            200: 'rgba(255, 215, 131, 0.2)',
            300: 'rgba(255, 215, 131, 0.3)',
            400: 'rgba(255, 215, 131, 0.4)',
            500: 'rgba(255, 215, 131, 0.5)',
            600: 'rgba(255, 215, 131, 0.6)',
            700: 'rgba(255, 215, 131, 0.7)',
            800: 'rgba(255, 215, 131, 0.8)',
            900: 'rgba(255, 215, 131, 0.9)',
          },
          red: {
            DEFAULT: 'rgb(255, 0, 0)',
            50: 'rgba(255, 0, 0, 0.05)',
            100: 'rgba(255, 0, 0, 0.1)',
            200: 'rgba(255, 0, 0, 0.2)',
            300: 'rgba(255, 0, 0, 0.3)',
            400: 'rgba(255, 0, 0, 0.4)',
            500: 'rgba(255, 0, 0, 0.5)',
            600: 'rgba(255, 0, 0, 0.6)',
            700: 'rgba(255, 0, 0, 0.7)',
            800: 'rgba(255, 0, 0, 0.8)',
            900: 'rgba(255, 0, 0, 0.9)',
          }
        },
        // Background Colors
        'bg-body': 'rgb(245, 245, 245)',
        'custom-white': 'rgb(255, 255, 255)',
        'custom-black': 'rgb(0, 0, 0)',
        'custom-gray': 'rgb(238, 238, 238)',

        // Brand colors
        'gray': '#E8ECED',
        'gray-light-solid': '#E7FBFF',
        'hero-blue': '#DFEBF8',
        'shadow-blue': '#E0EBF8',
        'body': '#F3F3F3',

        // Primary color mapping to theme-blue
        primary: {
          DEFAULT: '#00383C',
          50: 'rgba(0, 56, 60, 0.05)',
          100: 'rgba(0, 56, 60, 0.1)',
          200: 'rgba(0, 56, 60, 0.2)',
          300: 'rgba(0, 56, 60, 0.3)',
          400: 'rgba(0, 56, 60, 0.4)',
          500: 'rgba(0, 56, 60, 0.5)',
          600: 'rgba(0, 56, 60, 0.6)',
          700: 'rgba(0, 56, 60, 0.7)',
          800: 'rgba(0, 56, 60, 0.8)',
          900: 'rgba(0, 56, 60, 0.9)',
        },

        // Secondary color mapping to theme-green
        secondary: {
          DEFAULT: '#03BE6A',
          50: 'rgba(3, 190, 106, 0.05)',
          100: 'rgba(3, 190, 106, 0.1)',
          200: 'rgba(3, 190, 106, 0.2)',
          300: 'rgba(3, 190, 106, 0.3)',
          400: 'rgba(3, 190, 106, 0.4)',
          500: 'rgba(3, 190, 106, 0.5)',
          600: 'rgba(3, 190, 106, 0.6)',
          700: 'rgba(3, 190, 106, 0.7)',
          800: 'rgba(3, 190, 106, 0.8)',
          900: 'rgba(3, 190, 106, 0.9)',
        },

        // Success mapping to green
        success: {
          DEFAULT: 'rgb(3, 190, 106)',
          light: 'rgba(3, 190, 106, 0.1)',
        },

        // Warning mapping to yellow
        warning: {
          DEFAULT: 'rgb(255, 215, 131)',
          light: 'rgba(255, 215, 131, 0.1)',
        },

        // Danger mapping to red
        danger: {
          DEFAULT: 'rgb(255, 0, 0)',
          light: 'rgba(255, 0, 0, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'theme': '0 4px 6px -1px rgba(1, 56, 65, 0.1), 0 2px 4px -1px rgba(1, 56, 65, 0.06)',
        'theme-lg': '0 10px 15px -3px rgba(1, 56, 65, 0.1), 0 4px 6px -2px rgba(1, 56, 65, 0.05)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
