/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    	colors: {
      	'main': '#A23043',
        'eggWhite': '#F9F7F9',
      	'sec': {
      		100: '#8F3560',
      		200: '#714071',
      		300: '#504773',
      		400: '#364A69',
      		500: '#2F4858',
      	}
      },
      backgroundImage:theme => ({
       'pew': "url('/src/components/media/PewLane.png')",
       'look': "url('/src/components/media/BrickLooking.png')",
       'jump': "url('/src/components/media/HappyKick.png')",
      })
    },
    	fontFamily: {
    		'Merriweather': ['"Merriweather Sans"','sans-serif'],
  	}
  },
  plugins: [],
}
