/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css,scss}",
    "./src/scss/index.scss",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
      },
      fontWeight: {
        light: "300",
        medium: "400",
        bold: "500",
      },
      colors: {
        Blue: "hsl(246, 80%, 60%)",
        VeryDarkBlue: "hsl(226, 43%, 10%)",
        DarkBlue: "hsl(235, 46%, 20%)",
        LightBlue: "hsl(235, 45%, 61%)",
        VeryLightBlue: "hsl(236, 100%, 87%)",
        DayBlue: "hsl(246 82.3% 77.8%)",
        DayVeryDarkBlue: "#FEFCFF",
        DayDarkBlue: "#A198F5",
        DayLightBlue: "hsl(235 22.1% 70.8%)",
        DayVeryLightBlue: "hsl(235 49.7% 68.8%)",
        DayGray: "#A4A7C5",
        DayWhite: "#FEFCFF",
        Work: "hsl(15, 100%, 70%)",
        Play: "hsl(195, 74%, 62%)",
        Study: "hsl(348, 100%, 68%)",
        Exercise: "hsl(145, 58%, 55%)",
        Social: "hsl(264, 64%, 52%)",
        SelfCare: "hsl(43, 84%, 65%)",
        DayWork: "hsl(15, 100%, 76%)",
        DayPlay: "hsl(195, 74%, 68%)",
        DayStudy: "hsl(348, 100%, 74%)",
        DayExercise: "hsl(145, 58%, 61%)",
        DaySocial: "hsl(264, 64%, 58%)",
        DaySelfCare: "hsl(43, 84%, 71%)",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
    },
  },

  plugins: [],
};
