// // // frontend/src/App.jsx
// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import { useAuth } from './context/AuthContext'; // Import useAuth
// // import Navbar from './components/Navbar';
// // import HabitList from './components/HabitList';
// // import AddHabitForm from './components/AddHabitForm';
// // import AISuggestion from './components/AISuggestion';
// // import LoginPage from './pages/LoginPage';
// // import RegisterPage from './pages/RegisterPage';
// // import { getHabits, createHabit, completeHabit, deleteHabit } from './services/habitService';

// // // PrivateRoute component to protect routes
// // const PrivateRoute = ({ children }) => {
// //   const { user, loading } = useAuth();

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //         <p className="text-xl text-gray-700">Loading user...</p>
// //       </div>
// //     );
// //   }
// //   return user ? children : <Navigate to="/login" />;
// // };

// // function App() {
// //   const { user, token, loading: authLoading, authError } = useAuth(); // Destructure from useAuth
// //   const [habits, setHabits] = useState([]);
// //   const [loadingHabits, setLoadingHabits] = useState(false); // Renamed to avoid conflict
// //   const [habitError, setHabitError] = useState(null); // Renamed to avoid conflict

// //   // Function to fetch habits from the backend
// //   const fetchHabits = async () => {
// //     if (!token) { // Only fetch if token exists
// //         setHabits([]); // Clear habits if no token (user logged out)
// //         return;
// //     }
// //     try {
// //       setLoadingHabits(true);
// //       const fetchedHabits = await getHabits(token); // Pass token
// //       setHabits(fetchedHabits);
// //       setHabitError(null);
// //     } catch (err) {
// //       console.error('Failed to fetch habits:', err);
// //       setHabitError('Failed to load habits. Please try again later.');
// //     } finally {
// //       setLoadingHabits(false);
// //     }
// //   };

// //   // Load habits when component mounts or token changes
// //   useEffect(() => {
// //     if (user && token) { // Only fetch if user is logged in and token is available
// //         fetchHabits();
// //     } else {
// //         setHabits([]); // Clear habits if no user or token
// //     }
// //   }, [user, token]); // Depend on user and token

// //   // Handler for adding a new habit
// //   const handleAddHabit = async (name) => {
// //     if (!token) return; // Prevent if not logged in
// //     try {
// //       const newHabit = await createHabit(name, token); // Pass token
// //       setHabits((prevHabits) => [...prevHabits, newHabit]);
// //     } catch (err) {
// //       console.error('Failed to add habit:', err);
// //       setHabitError(err.message || 'Failed to add habit.');
// //     }
// //   };

// //   // Handler for completing a habit
// //   const handleCompleteHabit = async (id) => {
// //     if (!token) return; // Prevent if not logged in
// //     try {
// //       const updatedHabit = await completeHabit(id, token); // Pass token
// //       setHabits((prevHabits) =>
// //         prevHabits.map((habit) => (habit._id === id ? updatedHabit : habit))
// //       );
// //     } catch (err) {
// //       console.error('Failed to complete habit:', err);
// //       setHabitError(err.message || 'Failed to mark habit as complete.');
// //     }
// //   };

// //   // Handler for deleting a habit
// //   const handleDeleteHabit = async (id) => {
// //     if (!token) return; // Prevent if not logged in
// //     if (window.confirm('Are you sure you want to delete this habit?')) {
// //       try {
// //         await deleteHabit(id, token); // Pass token
// //         setHabits((prevHabits) => prevHabits.filter((habit) => habit._id !== id));
// //       } catch (err) {
// //         console.error('Failed to delete habit:', err);
// //         setHabitError(err.message || 'Failed to delete habit.');
// //       }
// //     }
// //   };

// //   // Main Habit Tracker Content component
// //   const HabitTrackerContent = () => (
// //     <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
// //       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
// //         <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-10 drop-shadow-lg">
// //           My HabitPulse Tracker
// //         </h1>

// //         {habitError && (
// //           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
// //             <strong className="font-bold">Error: </strong>
// //             <span className="block sm:inline">{habitError}</span>
// //           </div>
// //         )}

// //         {/* Add Habit Section */}
// //         <section className="mb-10 p-6 bg-indigo-50 rounded-lg shadow-inner">
// //           <h2 className="text-3xl font-bold text-indigo-700 mb-6">Add New Habit</h2>
// //           <AddHabitForm onAddHabit={handleAddHabit} />
// //         </section>

// //         {/* AI Suggestion Section */}
// //         <section className="mb-10 p-6 bg-purple-50 rounded-lg shadow-inner">
// //           <h2 className="text-3xl font-bold text-purple-700 mb-6">Need Ideas? Get AI Suggestions!</h2>
// //           <AISuggestion onAddHabit={handleAddHabit} />
// //         </section>


// //         {/* Habit List Section */}
// //         <section className="p-6 bg-gray-50 rounded-lg shadow-inner">
// //           <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Habits</h2>
// //           {loadingHabits ? (
// //             <p className="text-center text-gray-700 text-lg">Loading habits...</p>
// //           ) : (
// //             <HabitList
// //               habits={habits}
// //               onComplete={handleCompleteHabit}
// //               onDelete={handleDeleteHabit}
// //             />
// //           )}
// //         </section>
// //       </div>
// //     </div>
// //   );

// //   if (authLoading) {
// //     return (
// //       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// //         <p className="text-xl text-gray-700">Loading application...</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/login" element={<LoginPage />} />
// //         <Route path="/register" element={<RegisterPage />} />
// //         <Route
// //           path="/"
// //           element={
// //             <PrivateRoute>
// //               <HabitTrackerContent />
// //             </PrivateRoute>
// //           }
// //         />
// //         {/* Optional: Add a catch-all route for 404 */}
// //         <Route path="*" element={<Navigate to="/" replace />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// // frontend/src/App.jsx
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useAuth } from './context/AuthContext';
// import Navbar from './components/Navbar';
// import HabitList from './components/HabitList';
// import AddHabitForm from './components/AddHabitForm';
// import AISuggestion from './components/AISuggestion';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import HomePage from './pages/HomePage';       // Import HomePage
// import DashboardPage from './pages/DashboardPage'; // Import DashboardPage
// import ProfilePage from './pages/ProfilePage';   // Import ProfilePage

// import { getHabits, createHabit, completeHabit, deleteHabit } from './services/habitService';

// // PrivateRoute component to protect routes
// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useAuth();

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-xl text-gray-700">Loading user...</p>
//       </div>
//     );
//   }
//   return user ? children : <Navigate to="/login" />;
// };

// function App() {
//   const { user, token, loading: authLoading } = useAuth(); // Destructure from useAuth
//   const [habits, setHabits] = useState([]);
//   const [loadingHabits, setLoadingHabits] = useState(false);
//   const [habitError, setHabitError] = useState(null);

//   // Function to fetch habits from the backend
//   const fetchHabits = async () => {
//     if (!token) {
//         setHabits([]);
//         return;
//     }
//     try {
//       setLoadingHabits(true);
//       const fetchedHabits = await getHabits(token);
//       setHabits(fetchedHabits);
//       setHabitError(null);
//     } catch (err) {
//       console.error('Failed to fetch habits:', err);
//       setHabitError('Failed to load habits. Please try again later.');
//     } finally {
//       setLoadingHabits(false);
//     }
//   };

//   // Load habits when component mounts or token changes
//   useEffect(() => {
//     if (user && token) {
//         fetchHabits();
//     } else {
//         setHabits([]);
//     }
//   }, [user, token]);

//   // Handler for adding a new habit
//   const handleAddHabit = async (name) => {
//     if (!token) return;
//     try {
//       const newHabit = await createHabit(name, token);
//       setHabits((prevHabits) => [...prevHabits, newHabit]);
//     } catch (err) {
//       console.error('Failed to add habit:', err);
//       setHabitError(err.message || 'Failed to add habit.');
//     }
//   };

//   // Handler for completing a habit
//   const handleCompleteHabit = async (id) => {
//     if (!token) return;
//     try {
//       const updatedHabit = await completeHabit(id, token);
//       setHabits((prevHabits) =>
//         prevHabits.map((habit) => (habit._id === id ? updatedHabit : habit))
//       );
//     } catch (err) {
//       console.error('Failed to complete habit:', err);
//       setHabitError(err.message || 'Failed to mark habit as complete.');
//     }
//   };

//   // Handler for deleting a habit
//   const handleDeleteHabit = async (id) => {
//     if (!token) return;
//     if (window.confirm('Are you sure you want to delete this habit?')) {
//       try {
//         await deleteHabit(id, token);
//         setHabits((prevHabits) => prevHabits.filter((habit) => habit._id !== id));
//       } catch (err) {
//         console.error('Failed to delete habit:', err);
//         setHabitError(err.message || 'Failed to delete habit.');
//       }
//     }
//   };

//   // Main Habit Tracker Content component
//   const HabitTrackerContent = () => (
//     <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
//       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
//         <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-10 drop-shadow-lg">
//           My HabitPulse Tracker
//         </h1>

//         {habitError && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
//             <strong className="font-bold">Error: </strong>
//             <span className="block sm:inline">{habitError}</span>
//           </div>
//         )}

//         {/* Add Habit Section */}
//         <section className="mb-10 p-6 bg-indigo-50 rounded-lg shadow-inner">
//           <h2 className="text-3xl font-bold text-indigo-700 mb-6">Add New Habit</h2>
//           <AddHabitForm onAddHabit={handleAddHabit} />
//         </section>

//         {/* AI Suggestion Section */}
//         <section className="mb-10 p-6 bg-purple-50 rounded-lg shadow-inner">
//           <h2 className="text-3xl font-bold text-purple-700 mb-6">Need Ideas? Get AI Suggestions!</h2>
//           <AISuggestion onAddHabit={handleAddHabit} />
//         </section>


//         {/* Habit List Section */}
//         <section className="p-6 bg-gray-50 rounded-lg shadow-inner">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Habits</h2>
//           {loadingHabits ? (
//             <p className="text-center text-gray-700 text-lg">Loading habits...</p>
//           ) : (
//             <HabitList
//               habits={habits}
//               onComplete={handleCompleteHabit}
//               onDelete={handleDeleteHabit}
//             />
//           )}
//         </section>
//       </div>
//     </div>
//   );

//   if (authLoading) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <p className="text-xl text-gray-700">Loading application...</p>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} /> {/* Public Home Page */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         {/* Protected Routes */}
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               <DashboardPage />
//             </PrivateRoute>
//           }
//         />
//          <Route
//           path="/tracker" {/* New path for the main tracker */}
//           element={
//             <PrivateRoute>
//               <HabitTrackerContent />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <PrivateRoute>
//               <ProfilePage />
//             </PrivateRoute>
//           }
//         />
//         {/* Redirect any unmatched routes to the home page or login if not authenticated */}
//         <Route path="*" element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// frontend/src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // Import useAuth
import Navbar from './components/Navbar';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import AISuggestion from './components/AISuggestion';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';       // Import HomePage
import DashboardPage from './pages/DashboardPage'; // Import DashboardPage
import ProfilePage from './pages/ProfilePage';   // Import ProfilePage

import { getHabits, createHabit, completeHabit, deleteHabit } from './services/habitService';

// PrivateRoute component to protect routes
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-700">Loading user...</p>
      </div>
    );
  }
  return user ? children : <Navigate to="/login" />;
};

function App() {
  const { user, token, loading: authLoading } = useAuth(); // Destructure from useAuth
  const [habits, setHabits] = useState([]);
  const [loadingHabits, setLoadingHabits] = useState(false);
  const [habitError, setHabitError] = useState(null);

  // Function to fetch habits from the backend
  const fetchHabits = async () => {
    if (!token) { // Only fetch if token exists
        setHabits([]); // Clear habits if no token (user logged out)
        return;
    }
    try {
      setLoadingHabits(true);
      const fetchedHabits = await getHabits(token); // Pass token
      setHabits(fetchedHabits);
      setHabitError(null);
    } catch (err) {
      console.error('Failed to fetch habits:', err);
      setHabitError('Failed to load habits. Please try again later.');
    } finally {
      setLoadingHabits(false);
    }
  };

  // Load habits when component mounts or token changes
  useEffect(() => {
    if (user && token) { // Only fetch if user is logged in and token is available
        fetchHabits();
    } else {
        setHabits([]); // Clear habits if no user or token
    }
  }, [user, token]); // Depend on user and token

  // Handler for adding a new habit
  const handleAddHabit = async (name) => {
    if (!token) return; // Prevent if not logged in
    try {
      const newHabit = await createHabit(name, token); // Pass token
      setHabits((prevHabits) => [...prevHabits, newHabit]);
    } catch (err) {
      console.error('Failed to add habit:', err);
      setHabitError(err.message || 'Failed to add habit.');
    }
  };

  // Handler for completing a habit
  const handleCompleteHabit = async (id) => {
    if (!token) return; // Prevent if not logged in
    try {
      const updatedHabit = await completeHabit(id, token); // Pass token
      setHabits((prevHabits) =>
        prevHabits.map((habit) => (habit._id === id ? updatedHabit : habit))
      );
    } catch (err) {
      console.error('Failed to complete habit:', err);
      setHabitError(err.message || 'Failed to mark habit as complete.');
    }
  };

  // Handler for deleting a habit
  const handleDeleteHabit = async (id) => {
    if (!token) return; // Prevent if not logged in
    if (window.confirm('Are you sure you want to delete this habit?')) {
      try {
        await deleteHabit(id, token); // Pass token
        setHabits((prevHabits) => prevHabits.filter((habit) => habit._id !== id));
      } catch (err) {
        console.error('Failed to delete habit:', err);
        setHabitError(err.message || 'Failed to delete habit.');
      }
    }
  };

  // Main Habit Tracker Content component
  const HabitTrackerContent = () => (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-10 drop-shadow-lg">
          My HabitPulse Tracker
        </h1>

        {habitError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{habitError}</span>
          </div>
        )}

        {/* Add Habit Section */}
        <section className="mb-10 p-6 bg-indigo-50 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">Add New Habit</h2>
          <AddHabitForm onAddHabit={handleAddHabit} />
        </section>

        {/* AI Suggestion Section */}
        <section className="mb-10 p-6 bg-purple-50 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">Need Ideas? Get AI Suggestions!</h2>
          <AISuggestion onAddHabit={handleAddHabit} />
        </section>


        {/* Habit List Section */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-inner">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Habits</h2>
          {loadingHabits ? (
            <p className="text-center text-gray-700 text-lg">Loading habits...</p>
          ) : (
            <HabitList
              habits={habits}
              onComplete={handleCompleteHabit}
              onDelete={handleDeleteHabit}
            />
          )}
        </section>
      </div>
    </div>
  );

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-700">Loading application...</p>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Public Home Page */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        {/* New path for the main tracker */}
        <Route
          path="/tracker"
          element={
            <PrivateRoute>
              <HabitTrackerContent />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        {/* Redirect any unmatched routes to the home page or login if not authenticated */}
        <Route path="*" element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;