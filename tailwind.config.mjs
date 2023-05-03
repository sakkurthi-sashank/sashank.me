/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
        ibm_plex_mono: ["IBM Plex Mono"],
      },
    },
  },
  plugins: [],
};
