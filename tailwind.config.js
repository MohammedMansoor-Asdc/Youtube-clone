/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "youtube-image-third":
          "url('https://img.freepik.com/premium-photo/youtube-template-3d-illustration_665513-18.jpg')",
      },
      colors: {
        lightGray: "#222222",
        superGray: "#4a4a4a",
        borderColor : 'hsl(0,0%,20%)',
        lightWhite : '#aaa'
      },
    },
    fontFamily: {
      Roboto: ["Roboto Flex", "sans-serif"],
    },
    borderRadius: {
      fourty: "40px",
    },
    // colors:{
    //   lightGray:'#222222',
    // },
  },
  plugins: [],
};
