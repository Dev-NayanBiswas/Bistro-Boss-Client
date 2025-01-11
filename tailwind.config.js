import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        cin:["Cinzel", 'serif']
      }
    },
  },
  plugins: [daisyui],
}