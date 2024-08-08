/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        "main-blue-100": "#a1daee",
        "main-blue-200": "#7ec8e5",
        "main-blue-300": "#5bb5dd",
        "main-blue-400": "#0a1fa9",
        "main-blue-500": "#051296",
        "main-blue-600": "#000483",
        "main-blue-700": "#427BE9",
        "main-green-100": "#00af64",
        "main-green-200": "#009c53",
        "main-green-300": "#008a43"
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "192": "48rem",
        "200": "50rem",
      }
    },
  },
  plugins: [],
}

