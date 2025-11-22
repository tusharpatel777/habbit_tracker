// // // // // frontend/src/pages/HomePage.jsx
// // // // import React from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { useAuth } from '../context/AuthContext';

// // // // function HomePage() {
// // // //   const { user } = useAuth();

// // // //   return (
// // // //     <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-8 text-white text-center">
// // // //       <div className="max-w-4xl mx-auto">
// // // //         <h1 className="text-6xl font-extrabold mb-6 animate-pulse-slow">
// // // //           Track Your Habits, Transform Your Life.
// // // //         </h1>
// // // //         <p className="text-2xl mb-10 leading-relaxed opacity-90">
// // // //           HabitPulse is your personal companion for building powerful routines. Set goals, track your progress, and unlock your full potential.
// // // //           With AI-powered suggestions, achieving your dreams has never been easier.
// // // //         </p>

// // // //         {user ? (
// // // //           <Link
// // // //             to="/dashboard"
// // // //             className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-full text-xl hover:bg-indigo-100 transition duration-300 transform hover:scale-105 shadow-lg"
// // // //           >
// // // //             Go to My Dashboard
// // // //           </Link>
// // // //         ) : (
// // // //           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
// // // //             <Link
// // // //               to="/register"
// // // //               className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-full text-xl hover:bg-indigo-100 transition duration-300 transform hover:scale-105 shadow-lg"
// // // //             >
// // // //               Get Started Free
// // // //             </Link>
// // // //             <Link
// // // //               to="/login"
// // // //               className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-xl hover:bg-white hover:text-indigo-700 transition duration-300 transform hover:scale-105 shadow-lg"
// // // //             >
// // // //               Login Now
// // // //             </Link>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       <div className="mt-20 text-lg opacity-80">
// // // //         <p>&copy; {new Date().getFullYear()} HabitPulse. All rights reserved.</p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default HomePage;
// // // // frontend/src/pages/HomePage.jsx
// // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { useAuth } from '../context/AuthContext';

// // // function HomePage() {
// // //   const { user } = useAuth();

// // //   return (
// // //     <div className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex flex-col items-center justify-center p-8 text-white text-center overflow-hidden">
// // //       {/* Dynamic AI Background Elements */}
// // //       <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl animate-glow-pulse-slow pointer-events-none homepage-bg-effect-1"></div>
// // //       <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/30 rounded-full mix-blend-screen filter blur-3xl animate-glow-pulse-slow-reverse pointer-events-none homepage-bg-effect-2"></div>
// // //       <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-400/20 rounded-full mix-blend-screen filter blur-2xl animate-spin-slow pointer-events-none homepage-bg-effect-3"></div>

// // //       <div className="relative z-10 max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl shadow-purple-800/40 animate-fade-in-up">
// // //         <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-purple-300 animate-pulse-slow animate-delay-300">
// // //           Track Your Habits, Transform Your Life.
// // //         </h1>
// // //         <p className="text-xl md:text-2xl mb-10 leading-relaxed text-gray-200 opacity-90 animate-fade-in-up animate-delay-500">
// // //           HabitPulse is your personal companion for building powerful routines. Set goals, track your progress, and unlock your full potential.
// // //           With AI-powered suggestions, achieving your dreams has never been easier.
// // //         </p>

// // //         {user ? (
// // //           <Link
// // //             to="/dashboard"
// // //             className="px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bold rounded-full text-xl hover:from-purple-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/40 animate-fade-in-up animate-delay-700"
// // //           >
// // //             Go to My Dashboard
// // //           </Link>
// // //         ) : (
// // //           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
// // //             <Link
// // //               to="/register"
// // //               className="px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-bold rounded-full text-xl hover:from-purple-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/40 animate-fade-in-up animate-delay-700"
// // //             >
// // //               Get Started Free
// // //             </Link>
// // //             <Link
// // //               to="/login"
// // //               className="px-10 py-5 border-2 border-purple-400 text-purple-300 font-bold rounded-full text-xl hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-400/30 animate-fade-in-up animate-delay-900"
// // //             >
// // //               Login Now
// // //             </Link>
// // //           </div>
// // //         )}
// // //       </div>

// // //       <div className="relative z-10 mt-20 text-lg text-gray-400 opacity-80 animate-fade-in-up animate-delay-1000">
// // //         <p>&copy; {new Date().getFullYear()} HabitPulse. All rights reserved.</p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default HomePage;
// // // frontend/src/pages/HomePage.jsx
// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { useAuth } from '../context/AuthContext';

// // function HomePage() {
// //   const { user } = useAuth();

// //   return (
// //     <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex flex-col items-center justify-center p-8 text-white text-center overflow-hidden">
// //       {/* Dynamic Background Elements (subtle, faded icons mimicking the image) */}
// //       {/* Magnifying Glass (top-left) */}
// //       <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-[0.07] text-purple-400 transform -rotate-12 pointer-events-none animate-float-slow">
// //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
// //         </svg>
// //       </div>
// //       {/* Location Pin (bottom-right) */}
// //       <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.07] text-indigo-400 transform rotate-12 pointer-events-none animate-float-slow-reverse">
// //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
// //         </svg>
// //       </div>
// //       {/* Shield (AI/Security hint, top-right) */}
// //       <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-[0.05] text-blue-400 pointer-events-none animate-pulse-faded">
// //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.011-.692 1.859-1.655 2.105a4.148 4.148 0 01-2.673-.974 2.378 2.378 0 00-2.735-3.035 2.378 2.378 0 00-3.035 2.735 4.148 4.148 0 01-.974 2.673C3.692 13.859 3 13.011 3 12c0-2.403 1.055-4.509 2.766-5.875A.75.75 0 006 6h12a.75.75 0 00.234-1.875C19.945 7.491 21 9.597 21 12z" />
// //         </svg>
// //       </div>

// //       {/* Main Content Area */}
// //       <div className="relative z-10 max-w-4xl mx-auto px-4">
// //         {/* System Operational Badge */}
// //         <div className="mb-16 flex justify-center animate-fade-in-up animate-delay-100">
// //           <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800/70 backdrop-blur-sm rounded-full border border-gray-700">
// //             <span className="relative flex h-2 w-2">
// //               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
// //               <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
// //             </span>
// //             <span className="text-white text-xs font-medium uppercase tracking-wider">
// //               System Operational &bull; V2.5 AI Live
// //             </span>
// //           </div>
// //         </div>

// //         {/* Main Heading */}
// //         <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up animate-delay-300">
// //           <span className="text-white">Recover.</span>
// //           <br />
// //           <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Reconnect.</span>
// //         </h1>
// //         {/* Subtitle / Description */}
// //         <p className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-300 opacity-90 animate-fade-in-up animate-delay-500">
// //           The next-generation Lost & Found network. Powered by <span className="text-purple-400 font-semibold">AI</span> to match items
// //           with owners instantly across campus.
// //         </p>

// //         {user ? (
// //           // Logged In As Card with Gradient Border (matching the reference image)
// //           <div className="relative p-[2px] rounded-2xl mx-auto max-w-lg animate-fade-in-up animate-delay-700"
// //                // Using inline style for gradient border as Tailwind's direct gradient border is complex for arbitrary colors.
// //                style={{ backgroundImage: 'linear-gradient(to right bottom, #8A2BE2, #4F46E5)' }}>
// //             <Link
// //                 to="/dashboard"
// //                 className="block bg-gray-900 rounded-2xl px-8 py-6 text-left flex items-center justify-between space-x-6 hover:bg-gray-800 transition duration-300"
// //             >
// //                 <div className="flex flex-col">
// //                     <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">Logged In As</span>
// //                     <span className="text-white text-3xl font-bold mt-1">{user.name || 'User'}</span>
// //                 </div>
// //                 <div className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
// //                     <span>Go to Dashboard</span>
// //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
// //                         <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
// //                     </svg>
// //                 </div>
// //             </Link>
// //           </div>
// //         ) : (
// //           // Register/Login Buttons (adapted for the new dark, futuristic style)
// //           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animate-delay-700">
// //             <Link
// //               to="/register"
// //               className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full text-xl hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/40"
// //             >
// //               Get Started Free
// //             </Link>
// //             <Link
// //               to="/login"
// //               className="px-8 py-4 border-2 border-purple-400 text-purple-300 font-bold rounded-full text-xl hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-400/30"
// //             >
// //               Login Now
// //             </Link>
// //           </div>
// //         )}
// //       </div>

// //       {/* Footer */}
// //       <div className="relative z-10 mt-20 text-lg text-gray-400 opacity-80 animate-fade-in-up animate-delay-1000">
// //         <p>&copy; {new Date().getFullYear()} HabitPusle. All rights reserved.</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HomePage;
// // frontend/src/pages/HomePage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// function HomePage() {
//   const { user } = useAuth();

//   return (
//     <div className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex flex-col items-center justify-center p-8 text-white text-center overflow-hidden">
//       {/* Dynamic Background Elements (subtle, faded icons mimicking CampXFind) */}
//       {/* Magnifying Glass (top-left) */}
//       <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-[0.07] text-purple-400 transform -rotate-12 pointer-events-none animate-float-slow">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
//         </svg>
//       </div>
//       {/* Location Pin (bottom-right) */}
//       <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.07] text-indigo-400 transform rotate-12 pointer-events-none animate-float-slow-reverse">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//         </svg>
//       </div>
//       {/* Abstract AI/Tech Shape (top-right) - Replaced shield with something more abstract */}
//       <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-[0.05] text-blue-400 pointer-events-none animate-pulse-faded">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 2.25v1.5M12 21.75v-1.5M4.93 4.93l1.06 1.06M17.91 17.91l1.06 1.06M2.25 12h1.5M20.25 12h1.5M6.01 18.01l1.06-1.06M17.029 5.029l1.061-1.061" />
//         </svg>
//       </div>

//       <div className="relative z-10 max-w-4xl mx-auto px-4">
//         {/* Original Heading with CampXFind Gradient Style */}
//         <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-pulse-slow animate-delay-300">
//           <span className="text-white">Track Your Habits,</span>
//           <br />
//           <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Transform Your Life.</span>
//         </h1>
//         <p className="text-xl md:text-2xl mb-10 leading-relaxed text-gray-300 opacity-90 animate-fade-in-up animate-delay-500">
//           HabitPulse is your personal companion for building powerful routines. Set goals, track your progress, and unlock your full potential.
//           With <span className="text-purple-400 font-semibold">AI-powered suggestions</span>, achieving your dreams has never been easier.
//         </p>

//         {user ? (
//           // Logged-in state with a glassmorphic card and gradient border
//           <div className="relative p-[2px] rounded-2xl mx-auto max-w-lg animate-fade-in-up animate-delay-700"
//                style={{ backgroundImage: 'linear-gradient(to right bottom, #8A2BE2, #4F46E5)' }}>
//             <Link
//                 to="/dashboard"
//                 className="block bg-gray-900 rounded-2xl px-8 py-6 text-left flex items-center justify-between space-x-6 hover:bg-gray-800 transition duration-300"
//             >
//                 <div className="flex flex-col">
//                     <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">You Are Logged In</span>
//                     <span className="text-white text-3xl font-bold mt-1">{user.name || 'User'}</span>
//                 </div>
//                 <div classNameName="flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
//                     <span>Go to My Dashboard</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                 </div>
//             </Link>
//           </div>
//         ) : (
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animate-delay-700">
//             <Link
//               to="/register"
//               className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full text-xl hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/40"
//             >
//               Get Started Free
//             </Link>
//             <Link
//               to="/login"
//               className="px-8 py-4 border-2 border-purple-400 text-purple-300 font-bold rounded-full text-xl hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-400/30"
//             >
//               Login Now
//             </Link>
//           </div>
//         )}
//       </div>

//       <div className="relative z-10 mt-20 text-lg text-gray-400 opacity-80 animate-fade-in-up animate-delay-1000">
//         <p>&copy; {new Date().getFullYear()} HabitPulse. All rights reserved.</p>
//       </div>
//     </div>
//   );
// }

// export default HomePage;

// frontend/src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function HomePage() {
  const { user } = useAuth();

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex flex-col items-center justify-center p-8 text-white text-center overflow-hidden">
      {/* Dynamic Background Elements (subtle, faded icons mimicking CampXFind) */}
      {/* Magnifying Glass (top-left) - From Heroicons outline */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-[0.07] text-purple-400 transform -rotate-12 pointer-events-none animate-float-slow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
      {/* Location Pin (bottom-right) - From Heroicons outline */}
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.07] text-indigo-400 transform rotate-12 pointer-events-none animate-float-slow-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </div>
      {/* Abstract AI/Tech Shape (top-right) - From Heroicons outline (Sparkles) */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-[0.05] text-blue-400 pointer-events-none animate-pulse-faded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9.75 9.75m0 0l-1.35 1.35M9.75 9.75L12 7.5M21 12c0 1.276-.486 2.44-1.292 3.337a5.972 5.972 0 01-2.78 1.543 3.375 3.375 0 00-3.417 1.115 2.894 2.894 0 00-1.119 3.142c-.515 1.075-1.637 1.075-2.152 0a2.894 2.894 0 00-1.119-3.142 3.375 3.375 0 00-3.417-1.115 5.972 5.972 0 01-2.78-1.543C3.486 14.44 3 13.276 3 12c0-1.276.486-2.44 1.292-3.337A5.972 5.972 0 017.072 7.12c1.358.377 2.76.576 4.21.576.999 0 1.979-.102 2.93-.298V3.375c0-.816.82-1.398 1.512-1.073a11.976 11.976 0 013.873 1.157 1.125 1.125 0 01.993 1.341c-.41 1.637-1.328 3.03-2.535 4.022A1.125 1.125 0 0121 12z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-pulse-slow animate-delay-300">
          <span className="text-white">Track Your Habits,</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Transform Your Life.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 leading-relaxed text-gray-300 opacity-90 animate-fade-in-up animate-delay-500">
          HabitPulse is your personal companion for building powerful routines. Set goals, track your progress, and unlock your full potential.
          With <span className="text-purple-400 font-semibold">AI-powered suggestions</span>, achieving your dreams has never been easier.
        </p>

        {user ? (
          <div className="relative p-[2px] rounded-2xl mx-auto max-w-lg animate-fade-in-up animate-delay-700"
               style={{ backgroundImage: 'linear-gradient(to right bottom, #8A2BE2, #4F46E5)' }}>
            <Link
                to="/dashboard"
                className="block bg-gray-900 rounded-2xl px-8 py-6 text-left flex items-center justify-between space-x-6 hover:bg-gray-800 transition duration-300"
            >
                <div className="flex flex-col">
                    <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">You Are Logged In</span>
                    <span className="text-white text-3xl font-bold mt-1">{user.name || 'User'}</span>
                </div>
                <div className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-full font-bold text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105">
                    <span>Go to My Dashboard</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animate-delay-700">
            <Link
              to="/register"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full text-xl hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/40"
            >
              Get Started Free
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 border-2 border-purple-400 text-purple-300 font-bold rounded-full text-xl hover:bg-purple-600 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-400/30"
            >
              Login Now
            </Link>
          </div>
        )}
      </div>

      <div className="relative z-10 mt-20 text-lg text-gray-400 opacity-80 animate-fade-in-up animate-delay-1000">
        <p>&copy; {new Date().getFullYear()} HabitPulse. All rights reserved.</p>
      </div>
    </div>
  );
}

export default HomePage;