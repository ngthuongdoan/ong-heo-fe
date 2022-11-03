/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.stories.{js,ts,jsx,tsx}",
    "./.storybook/**/**",
  ],
  theme: {
    extend: {
      fontWeight: {
        medium: 700,
        bold: 900,
      },
    },
  },
  plugins: [],
}
