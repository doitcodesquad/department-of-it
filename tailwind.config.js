/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#eadef4",
        "accent": "#CAB8FF"
      },
      scale: {
        '101': '1.01',
        '102': '1.02',
        '103': '1.03',
      },
      fontSize: {
        'icon': '2.9rem',
      },
      spacing: {
        'extra': '111%',
      },
      width: {
        'ex': '59.124%',
      }
    },
  },
  plugins: [],
};
