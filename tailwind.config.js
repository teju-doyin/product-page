/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        mb: '375px',
        dt: "1440px"
      },
      colors:{
        'orange':'hsl(26, 100%, 55%)',
        'paleOrange': 'hsl(25, 100%, 94%)',
        'darkBlue': 'hsl(220, 13%, 13%)',
        'grayishBlue': 'hsl(220, 14%, 75%)',
        'lightGrayishBlue': 'hsl(223, 64%, 98%)',
        'darkGrayishBlue': 'hsl(219, 9%, 45%)',
        'white': 'hsl(0, 0%, 100%)',
        'black' :' hsl(0, 0%, 0%)' //(with 75% opacity for lightbox background)


      },
      fontFamily:{
        poppins:["Poppins",'sans-serif']
      },
      
      
    },
  },
  plugins: [],
}