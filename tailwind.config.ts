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
        'radial-gradient':'radial-gradient(circle, rgba(165,29,29,1) 10%, rgba(5,0,58,0.6038748262977065) 100%)',
        'landingPage': "url('../public/assets/LandingPage/bglanding.png')",
        'signIn':"url('../public/assets/SignInbg.png')"
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
