/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        inputBorderFocus: "0 0 1px 2px #7cde8c",
        inputBorder: "0 0 1px 1px #000",
      },
      zIndex: {
        inputLabel: 1,
        dropdownOptionsContainer: 5,
        dropdownOptionsItem: 7,
      },
      inset: {
        "3.35rem": "3.35rem",
      },
    },
  },
  plugins: [],
};
