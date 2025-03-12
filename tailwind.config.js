/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss,css}", // Covers everything in src
    "./projects/**/*.{html,ts,scss,css}", // Covers Angular libraries
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
