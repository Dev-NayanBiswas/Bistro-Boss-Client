import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'holud':'#fcde67',
        'sonali':'#d1a054'
      },
      fontFamily:{
        cin:["Cinzel", 'serif']
      }
    },
  },
  plugins: [daisyui],
}