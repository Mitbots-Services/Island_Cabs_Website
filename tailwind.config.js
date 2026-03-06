/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-manrope)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
        logo: ["var(--font-cinzel)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
