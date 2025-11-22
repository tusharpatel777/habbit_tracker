import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function HomePage() {
  const { user } = useAuth();

  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex flex-col items-center justify-center p-8 text-white text-center overflow-hidden pt-[75px]">
      
      <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-[0.07] text-purple-400 transform -rotate-12 pointer-events-none animate-float-slow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div>
    
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.07] text-indigo-400 transform rotate-12 pointer-events-none animate-float-slow-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </div>
      
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