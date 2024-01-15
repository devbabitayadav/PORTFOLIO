/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        brightColor: "#FFB400",
        backgroundColor: "#F0F0F6",
                   
        }
      },
    },

  plugins: [],
};



// export default {
  
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         brightColor: "#FFB400",
//         backgroundColor: "#F0F0F6",
                   
//         }
//       },
//     },

//   plugins: [],
// };

