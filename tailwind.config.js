module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    debugScreens: {
      position: ['bottom', 'right'],
      style: {
        backgroundColor: '#C0FFEE',
        color: 'black',
      },
      prefix: 'screen: ',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
}
