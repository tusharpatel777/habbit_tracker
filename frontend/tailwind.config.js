// // // // // /** @type {import('tailwindcss').Config} */
// // // // // export default {
// // // // //   content: [
// // // // //     "./index.html",
// // // // //     "./src/**/*.{js,ts,jsx,tsx}",
// // // // //   ],
// // // // //   theme: {
// // // // //     extend: {},
// // // // //   },
// // // // //   plugins: [],
// // // // // }
// // // // // tailwind.config.js
// // // // /** @type {import('tailwindcss').Config} */
// // // // module.exports = {
// // // //   content: [
// // // //     "./index.html",
// // // //     "./src/**/*.{js,ts,jsx,tsx}",
// // // //   ],
// // // //   theme: {
// // // //     extend: {
// // // //       keyframes: {
// // // //         'fade-in-up': {
// // // //           '0%': { opacity: '0', transform: 'translateY(20px)' },
// // // //           '100%': { opacity: '1', transform: 'translateY(0)' },
// // // //         },
// // // //         'float-slow': {
// // // //           '0%, 100%': { transform: 'translateY(0) rotate(-12deg)' },
// // // //           '50%': { transform: 'translateY(-15px) rotate(-8deg)' },
// // // //         },
// // // //         'float-slow-reverse': {
// // // //           '0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
// // // //           '50%': { transform: 'translateY(15px) rotate(8deg)' },
// // // //         },
// // // //         'pulse-faded': {
// // // //           '0%, 100%': { opacity: '0.05' }, // Lowered opacity to match faintness in image
// // // //           '50%': { opacity: '0.1' },
// // // //         },
// // // //         // Tailwind's default 'ping' animation is used for the green dot
// // // //       },
// // // //       animation: {
// // // //         'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
// // // //         'float-slow': 'float-slow 15s ease-in-out infinite alternate',
// // // //         'float-slow-reverse': 'float-slow-reverse 18s ease-in-out infinite alternate-reverse',
// // // //         'pulse-faded': 'pulse-faded 6s ease-in-out infinite',
// // // //       },
// // // //     },
// // // //   },
// // // //   plugins: [],
// // // // }

// // // // tailwind.config.js
// // // /** @type {import('tailwindcss').Config} */
// // // module.exports = {
// // //   content: [
// // //     "./index.html",
// // //     "./src/**/*.{js,ts,jsx,tsx}",
// // //   ],
// // //   theme: {
// // //     extend: {
// // //       keyframes: {
// // //         'fade-in-up': {
// // //           '0%': { opacity: '0', transform: 'translateY(20px)' },
// // //           '100%': { opacity: '1', transform: 'translateY(0)' },
// // //         },
// // //         'pulse-slow': { // Adjusted for a subtler, more futuristic pulse on text
// // //           '0%, 100%': { opacity: '1', textShadow: '0 0 5px rgba(255,255,255,0.1)' },
// // //           '50%': { opacity: '0.9', textShadow: '0 0 15px rgba(255,255,255,0.3)' },
// // //         },
// // //         'float-slow': {
// // //           '0%, 100%': { transform: 'translateY(0) rotate(-12deg)' },
// // //           '50%': { transform: 'translateY(-15px) rotate(-8deg)' },
// // //         },
// // //         'float-slow-reverse': {
// // //           '0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
// // //           '50%': { transform: 'translateY(15px) rotate(8deg)' },
// // //         },
// // //         'pulse-faded': {
// // //           '0%, 100%': { opacity: '0.05' },
// // //           '50%': { opacity: '0.1' },
// // //         },
// // //       },
// // //       animation: {
// // //         'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
// // //         'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
// // //         'float-slow': 'float-slow 15s ease-in-out infinite alternate',
// // //         'float-slow-reverse': 'float-slow-reverse 18s ease-in-out infinite alternate-reverse',
// // //         'pulse-faded': 'pulse-faded 6s ease-in-out infinite',
// // //       },
// // //     },
// // //   },
// // //   plugins: [],
// // // }
// // // tailwind.config.js
// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     extend: {
// //       keyframes: {
// //         'fade-in-up': {
// //           '0%': { opacity: '0', transform: 'translateY(20px)' },
// //           '100%': { opacity: '1', transform: 'translateY(0)' },
// //         },
// //         'float-slow': {
// //           '0%, 100%': { transform: 'translateY(0) rotate(-12deg)' },
// //           '50%': { transform: 'translateY(-15px) rotate(-8deg)' },
// //         },
// //         'float-slow-reverse': {
// //           '0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
// //           '50%': { transform: 'translateY(15px) rotate(8deg)' },
// //         },
// //         'pulse-faded': {
// //           '0%, 100%': { opacity: '0.05' },
// //           '50%': { opacity: '0.1' },
// //         },
// //       },
// //       animation: {
// //         'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
// //         'float-slow': 'float-slow 15s ease-in-out infinite alternate',
// //         'float-slow-reverse': 'float-slow-reverse 18s ease-in-out infinite alternate-reverse',
// //         'pulse-faded': 'pulse-faded 6s ease-in-out infinite',
// //       },
// //     },
// //   },
// //   plugins: [],
// // }

// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         'fade-in-up': {
//           '0%': { opacity: '0', transform: 'translateY(20px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         'pulse-slow': {
//           '0%, 100%': { opacity: '1', textShadow: '0 0 5px rgba(255,255,255,0.1)' },
//           '50%': { opacity: '0.9', textShadow: '0 0 15px rgba(255,255,255,0.3)' },
//         },
//         'float-slow': {
//           '0%, 100%': { transform: 'translateY(0) rotate(-12deg)' },
//           '50%': { transform: 'translateY(-15px) rotate(-8deg)' },
//         },
//         'float-slow-reverse': {
//           '0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
//           '50%': { transform: 'translateY(15px) rotate(8deg)' },
//         },
//         'pulse-faded': {
//           '0%, 100%': { opacity: '0.05' },
//           '50%': { opacity: '0.1' },
//         },
//       },
//       animation: {
//         'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
//         'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//         'float-slow': 'float-slow 15s ease-in-out infinite alternate',
//         'float-slow-reverse': 'float-slow-reverse 18s ease-in-out infinite alternate-reverse',
//         'pulse-faded': 'pulse-faded 6s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [],
// }
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 5px rgba(255,255,255,0.1)' },
          '50%': { opacity: '0.9', textShadow: '0 0 15px rgba(255,255,255,0.3)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0) rotate(-12deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-8deg)' },
        },
        'float-slow-reverse': {
          '0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
          '50%': { transform: 'translateY(15px) rotate(8deg)' },
        },
        'pulse-faded': {
          '0%, 100%': { opacity: '0.05' },
          '50%': { opacity: '0.1' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float-slow 15s ease-in-out infinite alternate',
        'float-slow-reverse': 'float-slow-reverse 18s ease-in-out infinite alternate-reverse',
        'pulse-faded': 'pulse-faded 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}