/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "navy-900": "hsl(229, 25%, 31%)",
        "blue-700": "hsl(229, 64%, 46%)",
        "gray-600": "hsl(246, 11%, 37%)",
        "gold-500": "hsl(39, 89%, 49%)",
        "gold-600": "hsl(28, 76%, 44%)",
        "blue-500": "hsl(230, 89%, 62%)",
        "blue-700": "hsl(229, 64%, 46%)",
        "red-600": "hsl(349, 71%, 52%)",
        "red-800": "hsl(347, 75%, 35%)",
        "purple-600": "hsl(261, 73%, 60%)",
        "purple-700": "hsl(261, 51%, 44%)",
        "light-blue-400": "hsl(189, 59%, 53%)",
        "light-blue-500": "hsl(194, 58%, 42%)",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle at center, hsl(214, 47%, 23%) 0%, hsl(237, 48%, 15%) 100%)",
      },
    },
  },
  plugins: [],
};
