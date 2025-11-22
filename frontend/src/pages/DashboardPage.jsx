// // frontend/src/pages/DashboardPage.jsx
// import React, { useEffect, useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { getHabits } from '../services/habitService';
// import { Link } from 'react-router-dom';

// function DashboardPage() {
//   const { user, token } = useAuth();
//   const [habits, setHabits] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUserHabits = async () => {
//       if (!token) return;
//       try {
//         setLoading(true);
//         const userHabits = await getHabits(token);
//         setHabits(userHabits);
//         setError(null);
//       } catch (err) {
//         console.error('Failed to fetch habits for dashboard:', err);
//         setError('Could not load your habit data.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserHabits();
//   }, [token]);

//   // Calculate dashboard statistics
//   const totalHabits = habits.length;
//   const habitsCompletedToday = habits.filter(habit => {
//     if (!habit.lastCompleted) return false;
//     const today = new Date();
//     const lastCompletedDate = new Date(habit.lastCompleted);
//     return today.toDateString() === lastCompletedDate.toDateString();
//   }).length;
//   const activeStreaks = habits.filter(habit => habit.streak > 0).length;
//   const longestStreak = habits.reduce((max, habit) => Math.max(max, habit.streak), 0);


//   if (loading) {
//     return (
//       <div className="min-h-[calc(100vh-64px)] bg-gray-100 flex items-center justify-center">
//         <p className="text-xl text-gray-700">Loading your dashboard...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-[calc(100vh-64px)] bg-red-100 text-red-700 flex items-center justify-center p-4">
//         <p className="text-xl">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
//       <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl p-8">
//         <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-10 drop-shadow-lg">
//           Welcome back, {user?.name}!
//         </h1>

//         <p className="text-center text-lg text-gray-700 mb-12">
//           Here's a quick overview of your habit journey. Keep up the great work!
//         </p>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           <StatCard title="Total Habits" value={totalHabits} icon="📊" bgColor="bg-blue-50" textColor="text-blue-700" />
//           <StatCard title="Completed Today" value={habitsCompletedToday} icon="✅" bgColor="bg-green-50" textColor="text-green-700" />
//           <StatCard title="Active Streaks" value={activeStreaks} icon="🔥" bgColor="bg-yellow-50" textColor="text-yellow-700" />
//           <StatCard title="Longest Streak" value={longestStreak} icon="🏆" bgColor="bg-purple-50" textColor="text-purple-700" />
//         </div>

//         {totalHabits === 0 ? (
//           <div className="text-center p-10 bg-gray-50 rounded-lg shadow-inner">
//             <p className="text-2xl text-gray-700 mb-4">You haven't added any habits yet.</p>
//             <p className="text-lg text-gray-600 mb-6">Start building good habits today!</p>
//             <Link
//               to="/tracker"
//               className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-xl hover:bg-indigo-700 transition duration-200"
//             >
//               Go to Habit Tracker
//             </Link>
//           </div>
//         ) : (
//           <div className="text-center p-10 bg-gray-50 rounded-lg shadow-inner">
//              <p className="text-2xl text-gray-700 mb-4">Ready to update your habits?</p>
//             <Link
//               to="/tracker"
//               className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-xl hover:bg-indigo-700 transition duration-200"
//             >
//               View All Habits
//             </Link>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default DashboardPage;

// // --- Helper Component for Dashboard ---
// const StatCard = ({ title, value, icon, bgColor, textColor }) => (
//   <div className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md ${bgColor}`}>
//     <div className={`text-5xl mb-3 ${textColor}`}>{icon}</div>
//     <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
//     <p className="text-4xl font-bold text-gray-900">{value}</p>
//   </div>
// );
// frontend/src/pages/DashboardPage.jsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getHabits } from '../services/habitService';
import { Link } from 'react-router-dom';

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

  // Calculate dashboard statistics
  const totalHabits = habits.length;
  const habitsCompletedToday = habits.filter(habit => {
    if (!habit.lastCompleted) return false;
    const today = new Date();
    const lastCompletedDate = new Date(habit.lastCompleted);
    // Compare dates ignoring time for "today"
    return today.toDateString() === lastCompletedDate.toDateString();
  }).length;
  const activeStreaks = habits.filter(habit => habit.streak > 0).length;
  const longestStreak = habits.reduce((max, habit) => Math.max(max, habit.streak), 0);


  if (loading) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4 text-white">
        <div className="flex items-center space-x-3 text-xl animate-pulse">
            <svg className="animate-spin h-5 w-5 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
    <div className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 p-8 overflow-hidden">
      {/* Dynamic Background Elements (Heroicons) */}
      {/* Chart Bar (top-left) - From Heroicons outline */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-[0.07] text-purple-400 transform -rotate-12 pointer-events-none animate-float-slow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125l7.246-7.246a.75.75 0 011.06 0l.504.504 3.295 3.295a.75.75 0 01.117.995l-1.97 2.455 1.455 1.455a.75.75 0 01.117.995l-1.97 2.455-.967 1.258a.75.75 0 01-1.173.04c-.38-.28-.796-.525-1.228-.731l-3.333-3.333-.504-.504a.75.75 0 01-.117-.995l1.97-2.455-1.455-1.455a.75.75 0 01-.117-.995l1.97-2.455z" />
        </svg>
      </div>
      {/* Calendar (bottom-right) - From Heroicons outline */}
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.07] text-indigo-400 transform rotate-12 pointer-events-none animate-float-slow-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5m18 7.5v-7.5m-18 0h18m-10.5 0h.008v.008H7.5v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </div>
      {/* Lightning Bolt (top-right) - From Heroicons outline */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-[0.05] text-blue-400 pointer-events-none animate-pulse-faded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 10.5l-6 5.25a.75.75 0 01-1.275-.375v-6.75a.75.75 0 011.275-.375l6 5.25z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V7.5A2.25 2.25 0 014.5 5.25H12c1.026 0 1.954.237 2.812.654C16.326 6.94 18 9.243 18 12c0 2.757-1.674 5.06-3.188 6.13A5.025 5.025 0 0112 18.75z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl shadow-purple-800/40 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 animate-fade-in-up animate-delay-200">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Welcome back</span>, <span className="text-white">{user?.name}!</span>
        </h1>

        <p className="text-center text-xl text-gray-300 mb-12 animate-fade-in-up animate-delay-300">
          Here's a quick overview of your habit journey. Keep up the great work!
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Total Habits" value={totalHabits} icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 0a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25h16.5a2.25 2.25 0 002.25-2.25v-2.25a2.25 2.25 0 00-2.25-2.25H3.75z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75V1.5m0 0l-1.5-1.5m1.5 1.5l1.5-1.5M3.75 12c0-1.657 1.007-3 2.25-3h12.516c1.243 0 2.25 1.343 2.25 3M12 21.75v-1.5m0 0l-1.5 1.5m1.5-1.5l1.5 1.5" />
              </svg>
            } iconColor="text-blue-400" animateDelay="animate-delay-400" /> {/* Stack icon */}
          <StatCard title="Completed Today" value={habitsCompletedToday} icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            } iconColor="text-green-400" animateDelay="animate-delay-500" /> {/* Check Circle icon */}
          <StatCard title="Active Streaks" value={activeStreaks} icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.627a8.23 8.23 0 00-4.707-.945c-2.868 0-5.462 1.255-7.065 3.245M15.362 5.627C17.765 7.02 19.5 9.384 19.5 12c0 2.206-.921 4.254-2.52 5.518m-1.996-8.991v-1.009M10.146 5.627C7.636 7.042 6 9.395 6 12c0 2.206.921 4.254 2.52 5.518m-1.996-8.991V17.5M8.25 10.5V17.5" />
              </svg>
            } iconColor="text-yellow-400" animateDelay="animate-delay-600" /> {/* Fire icon */}
          <StatCard title="Longest Streak" value={longestStreak} icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75l-4.5 4.5m0 0l-4.5-4.5m4.5 4.5V13.5m0 0V8.25m0 0h.008v.008H12v-.008zM12 12v.008H12.008V12H12zM12 8.25v.008H12.008V8.25H12zM12 4.5v.008H12.008V4.5H12zM12 1.5v.008H12.008V1.5H12zM9.75 1.5v.008H9.758V1.5H9.75zM14.25 1.5v.008H14.258V1.5H14.25z" />
              </svg>
            } iconColor="text-purple-400" animateDelay="animate-delay-700" /> {/* Trophy icon */}
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

// --- Helper Component for Dashboard ---
const StatCard = ({ title, value, icon, iconColor, animateDelay }) => (
  <div className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-lg bg-white/5 backdrop-blur-md border border-white/10 text-white animate-fade-in-up ${animateDelay}`}>
    <div className={`text-5xl mb-3 ${iconColor}`}>{icon}</div>
    <h3 className="text-lg font-semibold text-gray-200 mb-1">{title}</h3>
    <p className="text-4xl font-bold text-white">{value}</p>
  </div>
);