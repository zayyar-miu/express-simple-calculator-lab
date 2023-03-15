/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/stylesheets/*.{html,js,css}",
    "./views/*.pug",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}
