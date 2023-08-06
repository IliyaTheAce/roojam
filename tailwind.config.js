/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#d86827",
        // secondary: "#6ebb98",
        // dimBlack: "rgba(0,0,0,0.8)",
        // dimWhite: "rgba(255, 255, 255, 0.7)",
        // dimBlue: "rgba(82,82,82,0.1)",
        primary: "rgba(26,26,26,1)",
        secondary: "#d86827",
        dimBlack: "rgba(0,0,0,0.8)",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(82,82,82,0.1)",
        dashboardPrimary: "rgba(20,24,39,1)",
        dashboardSecondary: "rgba(27,36,54,1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        tunisia: ["tunisia"],
        shabnam: ["shabnam"],
        yekan: ["yekan"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
