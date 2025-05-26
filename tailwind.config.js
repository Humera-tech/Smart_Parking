/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "./index.html"
  ],
  screen:{
    sm:"480px",
    md:"780px",
    lg:"1240px"
  },
  theme: {
    extend: {
      "colors":{
        primary:"#2D3142",
        secondary:"#4F5D75",
        third: "#f17c3a",
        fourth:"#272d2d",
        electric: "#00b0e6",
        white:"#fff",
        background:"#F5F5F5",
      }
    },
  },
  plugins: [],
}

