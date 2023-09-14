/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#352F44",
      },
      backgroundImage: {
        banner: `url('../public/images/findyourperfume_banner.png')`,
      },
    },
  },
  plugins: [],
};
