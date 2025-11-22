import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getHabits } from '../services/habitService';
import { Link } from 'react-router-dom';
import MotivationalQuote from '../components/MotivationalQuote'; 

import {
  RectangleStackIcon, 
  CheckCircleIcon,   
  FireIcon,           
  TrophyIcon          
} from '@heroicons/react/24/outline';


function DashboardPage() {
  const { user, token } = useAuth();
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserHabits = async () => {
      if (!token) return;
      try {
        setLoading(true);
        const userHabits = await getHabits(token);
        setHabits(userHabits);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch habits for dashboard:', err);
        setError('Could not load your habit data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserHabits();
  }, [token]);

  const totalHabits = habits.length;
  const habitsCompletedToday = habits.filter(habit => {
    if (!habit.lastCompleted) return false;
    const today = new Date();
    const lastCompletedDate = new Date(habit.lastCompleted);
    return today.toDateString() === lastCompletedDate.toDateString();
  }).length;

  const activeStreaks = habits.filter(habit => habit.streak > 0).length;
  const longestStreak = habits.reduce((max, habit) => Math.max(max, habit.streak), 0);


  if (loading) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4 text-white pt-[75px]">
        <div className="flex items-center space-x-3 text-xl animate-pulse">
            <svg className="animate-spin h-6 w-6 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4 text-red-300">
        <div className="bg-red-900/30 border border-red-700 px-6 py-4 rounded-xl shadow-lg text-xl animate-fade-in-up">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[100vh] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 p-8 overflow-hidden pt-[80px]">
      <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-[0.07] text-purple-400 transform -rotate-12 pointer-events-none animate-float-slow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125l7.246-7.246a.75.75 0 011.06 0l.504.504 3.295 3.295a.75.75 0 01.117.995l-1.97 2.455 1.455 1.455a.75.75 0 01.117.995l-1.97 2.455-.967 1.258a.75.75 0 01-1.173.04c-.38-.28-.796-.525-1.228-.731l-3.333-3.333-.504-.504a.75.75 0 01-.117-.995l1.97-2.455-1.455-1.455a.75.75 0 01-.117-.995l1.97-2.455z" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.07] text-indigo-400 transform rotate-12 pointer-events-none animate-float-slow-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5m18 7.5v-7.5m-18 0h18m-10.5 0h.008v.008H7.5v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-[0.05] text-blue-400 pointer-events-none animate-pulse-faded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 10.5l-6 5.25a.75.75 0 01-1.275-.375v-6.75a.75.75 0 011.275-.375l6 5.25z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V7.5A2.25 2.25 0 014.5 5.25H12c1.026 0 1.954.237 2.812.654C16.326 6.94 18 9.243 18 12c0 2.757-1.674 5.06-3.188 6.13A5.025 5.025 0 0112 18.75z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl shadow-purple-800/40 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 animate-fade-in-up animate-delay-200">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Welcome back</span>, <span className="text-white">{user?.name}!</span>
        </h1>

        <MotivationalQuote /> 

        <p className="text-center text-xl text-gray-300 mb-12 animate-fade-in-up animate-delay-300">
          Here's a quick overview of your habit journey. Keep up the great work!
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Total Habits" value={totalHabits} icon={<RectangleStackIcon />} iconColor="text-blue-400" animateDelay="animate-delay-400" /> {/* Replaced SVG with Heroicon */}
          <StatCard title="Completed Today" value={habitsCompletedToday} icon={<CheckCircleIcon />} iconColor="text-green-400" animateDelay="animate-delay-500" /> {/* Replaced SVG with Heroicon */}
          <StatCard title="Active Streaks" value={activeStreaks} icon={<FireIcon />} iconColor="text-yellow-400" animateDelay="animate-delay-600" /> {/* Replaced SVG with Heroicon */}
          <StatCard title="Longest Streak" value={longestStreak} icon={<TrophyIcon />} iconColor="text-purple-400" animateDelay="animate-delay-700" /> {/* Replaced SVG with Heroicon */}
        </div>

        {totalHabits === 0 ? (
          <div className="text-center p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg animate-fade-in-up animate-delay-800">
            <p className="text-2xl text-gray-200 mb-4">You haven't added any habits yet.</p>
            <p className="text-lg text-gray-400 mb-6">Start building good habits today!</p>
            <Link
              to="/tracker"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg text-xl hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/40"
            >
              Go to Habit Tracker
            </Link>
          </div>
        ) : (
          <div className="text-center p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg animate-fade-in-up animate-delay-800">
             <p className="text-2xl text-gray-200 mb-4">Ready to update your habits?</p>
            <Link
              to="/tracker"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg text-xl hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-600/40"
            >
              View All Habits
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

export default DashboardPage;


const StatCard = ({ title, value, icon, iconColor, animateDelay }) => (
  <div className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg bg-white/5 backdrop-blur-md border border-white/10 text-white animate-fade-in-up ${animateDelay}`}>
    <div className={`text-5xl mb-3 ${iconColor}`}>
      {React.cloneElement(icon, { className: 'w-12 h-12' })}
    </div>
    <h3 className="text-lg font-semibold text-gray-200 mb-1">{title}</h3>
    <p className="text-4xl font-bold text-white">{value}</p>
  </div>
);