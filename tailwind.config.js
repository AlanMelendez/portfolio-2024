/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Archivos de Angular
    "./projects/**/*.{html,ts}", // Si tienes librerías Angular
    "./src/**/*.html", // Asegura que detecta todos los HTML
    "./src/**/*.ts", // Asegura que detecta todos los TS
    "./src/**/*.scss", // Si usas SCSS
    "./src/**/*.css" // Si usas CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
