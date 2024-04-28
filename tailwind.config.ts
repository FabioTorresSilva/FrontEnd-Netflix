import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Gradient':"url('../public/assets/LandingPage/Gradient.png')",
        'landingPage': "url('../public/assets/LandingPage/bglanding.png')"
      },
      dropShadow: {

        '3xl': '0px 0px 10px 100px  rgba(0, 0, 0)',

      },
      colors: {
        red: "#E50914",
        whiteRed: "#EB3942",
        blackRed: "#C11119",
        midleRed: "#F50723 ",
      },
    },
  },
  plugins: [],
};
export default config;
