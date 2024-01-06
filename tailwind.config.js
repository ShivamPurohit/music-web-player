/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        80: "20rem",
      },
      maxWidth: {
        80: "20rem",
      },
      backgroundImage: {
        "galaxy-img": "url('./public/static/jpg/galaxy-image.jpg')",
      },
    },
  },
  plugins: [],
};
