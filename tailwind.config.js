/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2e2e2e",
        foreground: "#f8f8f2",
        comment: "#75715e",
        darkercomment: "#5c5848",
        red: "#F92672",
        orange: "#FD971F",
        lightorange: "#E69F66",
        yellow: "#E6DB74",
        green: "#9bd42a",
        darkergreen: "#76a120",
        blue: "#66D9EF",
        purple: "#AE81FF",
        darkerpurple: "#8763c9",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
