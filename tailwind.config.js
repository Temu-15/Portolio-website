import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gold-crayola": "hsl(38, 61%, 73%)",
        "quick-silver": "hsla(0, 0%, 65%, 1)",
        "davys-grey": "hsla(30, 3%, 34%, 1)",
        "smoky-black-1": "hsla(40, 12%, 5%, 1)",
        "smoky-black-2": "hsla(30, 8%, 5%, 1)",
        "smoky-black-3": "hsla(0, 3%, 7%, 1)",
        "eerie-black-1": "hsla(210, 4%, 9%, 1)",
        "eerie-black-2": "hsla(210, 4%, 11%, 1)",
        "eerie-black-3": "hsla(180, 2%, 8%, 1)",
        "eerie-black-4": "hsla(0, 0%, 13%, 1)",
        white: "hsla(0, 0%, 100%, 1)",
        "white-alpha-20": "hsla(0, 0%, 100%, 0.2)",
        "white-alpha-10": "hsla(0, 0%, 100%, 0.1)",
        black: "hsla(0, 0%, 0%, 1)",
        "black-alpha-80": "hsla(0, 0%, 0%, 0.8)",
        "black-alpha-15": "hsla(0, 0%, 0%, 0.15)",
      },
      gradientColorStops: {
        "loading-text-gradient":
          "linear-gradient(90deg, transparent 0% 16.66%, hsla(0, 3%, 7%, 1) 33.33% 50%, transparent 66.66% 75%)",
        "gradient-1":
          "linear-gradient(to top, hsla(0, 0%, 0%, 0.9), hsla(0, 0%, 0%, 0.7), transparent)",
      },
      fontFamily: {
        forum: ["Forum", "cursive"],
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "display-1": "calc(1rem + 6vw)",
        "headline-1": "calc(2rem + 2.5vw)",
        "headline-2": "calc(1.3rem + 2.4vw)",
        "title-1": "calc(1.6rem + 1.2vw)",
        "title-2": "2.2rem",
        "title-3": "2.1rem",
        "title-4": "calc(1.6rem + 1.2vw)",
        "body-1": "2.4rem",
        "body-2": "1.6rem",
        "body-3": "1.8rem",
        "body-4": "1.6rem",
        "label-1": "1.4rem",
        "label-2": "1.2rem",
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      lineHeight: {
        1: "1em",
        2: "1.2em",
        3: "1.5em",
        4: "1.6em",
        5: "1.85em",
        6: "1.4em",
      },
      letterSpacing: {
        1: "0.15em",
        2: "0.4em",
        3: "0.2em",
        4: "0.3em",
        5: "3px",
      },
      spacing: {
        "section-space": "70px",
      },
      boxShadow: {
        1: "0px 0px 25px 0px hsla(0, 0%, 0%, 0.25)",
      },
      borderRadius: {
        24: "24px",
        circle: "50%",
      },
      transitionDuration: {
        1: "250ms",
        2: "500ms",
        3: "1000ms",
      },
      screens: {
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      keyframes: {
        menuBtn: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0.5)" },
        },
        sliderReveal: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
        },
        smoothScale: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.15)" },
        },
        shine: {
          "0%": { transform: "translateX(-180%) skewX(-15deg)", opacity: "0" },
          "100%": {
            transform: "translateX(275%) skewX(-15deg)",
            opacity: "10",
          },
        },
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveUpDown: {
          "0%": { transform: "translateY(0px)" },

          "50%": { transform: "translateY(50px)" },

          "100%": { transform: "translateY(0)" },
        },
        moveLeftRight: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(25px)" },
          "50%": { transform: "translateX(0)" },
          "75%": { transform: "translateX(-25px)" },
          "100%": { transform: "translateX(0)" },
        },
        loadingText: {
          "0%": { backgroundPosition: "100%" },
          "100%": { backgroundPosition: "0%" },
        },
      },
      animation: {
        menuBtn: "menuBtn 400ms ease-in-out alternate infinite",
        sliderReveal: "sliderReveal 1s ease forwards",
        smoothScale: "smoothScale 7s linear forwards",
        smoothScaleFast: "smoothScale 0.6s linear forwards",
        shine: "shine 1s ease-in-out",
        rotate360: "rotate360 15s linear infinite",
        rotate360fast: "rotate360 1s linear infinite",
        moveUpDown: "moveUpDown 5s linear infinite",
        moveLeftRight: "moveLeftRight 4s linear infinite",
        loadingText: "loadingText 2s linear infinite",
      },
    },
  },
  plugins: [forms, typography],
};
