/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter, sans-serif",
      },
      fontSize: {
        s1: "30px",
        s2: "26px",
        s3: "22px",
        s4: "14px",
        s5: "13px",
        s6: "11px",
      },
      colors: {
        putih: "rgba(255, 255, 255, 1)",
        "putih-op30%": "rgba(255, 255, 255, 0.3)",
        smokewhite: "rgba(229, 229, 229, 1)",
        midgray: "rgba(109, 109, 110, 0.7)",
        "abu-abu": "rgba(128, 128, 128, 1)",
        hitam: "rgba(20, 20, 20, 1)",
        merah: "rgba(185, 9, 11, 1)",
      },
    },
  },
  plugins: [],
};
