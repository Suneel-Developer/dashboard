/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F2F3B",
        secondary: "#7366FF",
        white: "#ffffff",
        text: "#4B465C",
        grey: "#4B465C14",
        light_grey: "#4267B229",
        light_red: "#DB443729",
        light_blue: "#1DA1F229",
        dark_blue: "#1DA1F2",
        dark_red: "#DB4437",
        dark_grey: "#4267B2",
        success: "#28C76F",
        dark_text: "#878C9B80"
      },
    },
  },
  plugins: [],
};
