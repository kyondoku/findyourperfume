/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#000000",
      },
      backgroundImage: {
        banner: `url('../public/images/findyourperfume_banner.png')`,
      },
    },
  },
  plugins: [],
};
