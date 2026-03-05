/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aumi: {
          ai: "#1f5ea8",
          human: "#2f8f4e",
          ink: "#0f172a",
          muted: "#44556d",
          line: "#d5deea",
          surface: "#f5f8fc"
        }
      }
    }
  },
  plugins: []
};
