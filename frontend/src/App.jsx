import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import AISuggestion from './components/AISuggestion';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import HabitDetailPage from './pages/HabitDetailPage';
import MotivationalQuote from './components/MotivationalQuote';
import { deleteHabit } from './services/habitService';
import {
  ArrowPathIcon,     
  ChartBarIcon,    
  CalendarDaysIcon,  
  BoltIcon          
} from '@heroicons/react/24/outline';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4 text-white">
        <div className="flex items-center space-x-3 text-xl animate-pulse">
            <ArrowPathIcon className="animate-spin h-6 w-6 text-purple-400" />
            <p>Loading user...</p>
        </div>
      </div>
    );
  }
  return user ? children : <Navigate to="/login" />;
};

function App() {
  const { user, token, loading: authLoading } = useAuth();
  const [habits, setHabits] = useState([]);
  const [loadingHabits, setLoadingHabits] = useState(false);
  const [habitError, setHabitError] = useState(null);

  const fetchHabits = async () => {
    if (!token) { 
        setHabits([]); 
        return;
    }
    try {
      setLoadingHabits(true);
      const fetchedHabits = await import('./services/habitService').then(module => module.getHabits(token));
      setHabits(fetchedHabits);
      setHabitError(null); 
    } catch (err) {
      console.error('Failed to fetch habits:', err);
      setHabitError('Failed to load habits. Please try again later.');
    } finally {
      setLoadingHabits(false);
    }
  };

  useEffect(() => {
    if (user && token) {
        fetchHabits();
    } else {
        setHabits([]); 
    }
  }, [user, token]); 

  const handleAddHabit = async (name) => {
    if (!token) return; 
    try {
      const newHabit = await import('./services/habitService').then(module => module.createHabit(name, token));
      setHabits((prevHabits) => [...prevHabits, newHabit]);
      setHabitError(null); 
    } catch (err) {
      console.error('Failed to add habit:', err);
      setHabitError(err.message || 'Failed to add habit.');
    }
  };

  const handleCompleteHabit = async (id) => {
    if (!token) return; 
    try {
      const updatedHabit = await import('./services/habitService').then(module => module.completeHabit(id, token));
      setHabits((prevHabits) =>
        prevHabits.map((habit) => (habit._id === id ? updatedHabit : habit))
      );
      setHabitError(null);
    } catch (err) {
      console.error('Failed to complete habit:', err);
      setHabitError(err.message || 'Failed to mark habit as complete.');
    }
  };

  // const handleDeleteHabit = async (id) => {
  //   if (!token) return;
  //   if (window.confirm('Are you sure you want to delete this habit?')) {
  //     try {
  //       await import('./services/habitService').then(module => module.deleteHabit(id, token));
  //       setHabits((prevHabits) => prevHabits.filter((habit) => habit._id !== id));
  //       setHabitError(null); 
  //     } catch (err) {
  //       console.error('Failed to delete habit:', err);
  //       setHabitError(err.message || 'Failed to delete habit.');
  //     }
  //   }
  // };
const handleDeleteHabit = async (id) => {
  if (!token) return;

  const confirmed = window.confirm("Are you sure you want to delete this habit?");
  if (!confirmed) return;

  try {
    await deleteHabit(id, token);

    setHabits((prev) => prev.filter((h) => h._id !== id));
    setHabitError(null);

  } catch (err) {
    console.error("Failed to delete habit:", err);
    setHabitError(err.message || "Failed to delete habit.");
  }
};

  const HabitTrackerContent = () => (
    <div className="relative min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 p-8 overflow-hidden pt-[80px]">
      <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-[0.07] text-purple-400 transform -rotate-12 pointer-events-none animate-float-slow">
        <ChartBarIcon className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.07] text-indigo-400 transform rotate-12 pointer-events-none animate-float-slow-reverse">
        <CalendarDaysIcon className="w-full h-full" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-[0.05] text-blue-400 pointer-events-none animate-pulse-faded">
        <BoltIcon className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl shadow-purple-800/40 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-6 animate-fade-in-up animate-delay-200">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">My HabitPulse</span> <span className="text-white">Tracker</span>
        </h1>

        <MotivationalQuote /> 

        {habitError && (
          <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded relative mb-6 animate-fade-in-up animate-delay-300" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{habitError}</span>
          </div>
        )}

        <section className="mb-10 animate-fade-in-up animate-delay-400">
          <h2 className="text-3xl font-bold text-gray-200 mb-6 bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">Add New Habit</h2>
          <AddHabitForm onAddHabit={handleAddHabit} />
        </section>

        <section className="mb-10 animate-fade-in-up animate-delay-500">
          <h2 className="text-3xl font-bold text-gray-200 mb-6 bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">Need Ideas? Get AI Suggestions!</h2>
          <AISuggestion onAddHabit={handleAddHabit} />
        </section>

        <section className="animate-fade-in-up animate-delay-600">
          <h2 className="text-3xl font-bold text-gray-200 mb-6 bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text">Your Habits</h2>
          {loadingHabits ? (
            <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-md flex items-center justify-center text-lg text-purple-300 animate-pulse">
                <ArrowPathIcon className="animate-spin h-5 w-5 mr-3 text-purple-400" />
                <p>Loading habits...</p>
            </div>
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
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4 text-white">
        <div className="flex items-center space-x-3 text-xl animate-pulse">
            <ArrowPathIcon className="animate-spin h-6 w-6 text-purple-400" />
            <p>Loading application...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/tracker"
          element={
            <PrivateRoute>
              <HabitTrackerContent />
            </PrivateRoute>
          }
        />
        <Route
          path="/habit/:id"
          element={
            <PrivateRoute>
              <HabitDetailPage />
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
        <Route path="*" element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;