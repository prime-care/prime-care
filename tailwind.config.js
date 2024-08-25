const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // flowbite
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f5373',
        secondary: '#50bfb4',
        secondaryBg: '#ecf6f5',
      },
    },
  },
  plugins: [
    flowbite.plugin() // flowbite
  ],
}