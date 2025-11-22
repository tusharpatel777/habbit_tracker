import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getHabitById, updateHabit, completeHabit, deleteHabit } from '../services/habitService';
import HabitCalendar from '../components/HabitCalendar';

function HabitDetailPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { user, token } = useAuth();

  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editError, setEditError] = useState(null);
  const [completedDates, setCompletedDates] = useState([]);

  useEffect(() => {
    const fetchCurrentHabit = async () => {
      if (!token || !id) return;
      try {
        setLoading(true);
        const fetchedHabit = await getHabitById(id, token);
        setHabit(fetchedHabit);
        setEditedName(fetchedHabit.name);

        // For calendar, we need all historical completion dates.
        // Our current backend only stores 'lastCompleted'.
        // To properly show a history on the calendar, the backend 'Habit' model
        // would need an array of 'completionDates: [Date]'.
        // For now, we'll simulate a few past completions for demo purposes
        // or just use 'lastCompleted' if it exists.
        if (fetchedHabit.lastCompleted) {
            const lastCompDate = new Date(fetchedHabit.lastCompleted);
            setCompletedDates([lastCompDate.toISOString()]); // Use ISO string
            // For a more complete calendar, you'd fetch/store actual history.
            // For demonstration, let's add a couple of fake past dates if streak > 1
            if (fetchedHabit.streak > 1) {
                const twoDaysAgo = new Date(lastCompDate);
                twoDaysAgo.setDate(lastCompDate.getDate() - 1);
                setCompletedDates(prev => [...prev, twoDaysAgo.toISOString()]);
            }
            if (fetchedHabit.streak > 2) {
                const threeDaysAgo = new Date(lastCompDate);
                threeDaysAgo.setDate(lastCompDate.getDate() - 2);
                setCompletedDates(prev => [...prev, threeDaysAgo.toISOString()]);
            }

        } else {
            setCompletedDates([]);
        }

        setError(null);
      } catch (err) {
        console.error('Failed to fetch habit details:', err);
        setError(err.message || 'Failed to load habit details.');
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentHabit();
  }, [id, token]);


  const handleUpdateHabitName = async (e) => {
    e.preventDefault();
    setEditError(null);
    if (!editedName.trim()) {
      setEditError('Habit name cannot be empty.');
      return;
    }
    if (!token) return;

    try {
      const updated = await updateHabit(id, { name: editedName }, token);
      setHabit(updated); 
      setIsEditing(false); 
    } catch (err) {
      console.error('Failed to update habit name:', err);
      setEditError(err.message || 'Failed to update habit name.');
    }
  };

  const handleCompleteHabit = async () => {
    if (!token) return;
    try {
      const updated = await completeHabit(id, token);
      setHabit(updated); // Update the local habit state
      
      const today = new Date().toDateString();
      if (!completedDates.map(d => new Date(d).toDateString()).includes(today)) {
          setCompletedDates(prev => [...prev, new Date().toISOString()]);
      }

    } catch (err) {
      console.error('Failed to complete habit:', err);
      setError(err.message || 'Failed to mark habit as complete.');
    }
  };

  const handleDeleteHabit = async () => {
    if (!token) return;
    if (window.confirm('Are you sure you want to delete this habit permanently?')) {
      try {
        await deleteHabit(id, token);
        navigate('/tracker'); // Redirect to tracker list after deletion
      } catch (err) {
        console.error('Failed to delete habit:', err);
        setError(err.message || 'Failed to delete habit.');
      }
    }
  };


  if (loading) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-gray-100 flex items-center justify-center">
        <p className="text-xl text-gray-700">Loading habit details...</p>
      </div>
    );
  }

  if (error || !habit) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-red-100 text-red-700 flex flex-col items-center justify-center p-4">
        <p className="text-xl mb-4">Error: {error || 'Habit not found.'}</p>
        <Link to="/tracker" className="px-6 py-3 bg-indigo-600 text-white rounded-lg text-lg hover:bg-indigo-700 transition duration-200">
          Back to Tracker
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-50 to-purple-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl p-8">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-extrabold text-indigo-800 drop-shadow-lg">
                Habit Details
            </h1>
            <Link to="/tracker" className="text-indigo-600 hover:text-indigo-800 transition duration-200 font-medium">
                &larr; Back to Tracker
            </Link>
        </div>


        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <div className="bg-indigo-50 p-6 rounded-lg shadow-inner mb-6">
          {isEditing ? (
            <form onSubmit={handleUpdateHabitName} className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                className="flex-grow p-3 border border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => { setIsEditing(false); setEditedName(habit.name); setEditError(null); }}
                className="px-6 py-3 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-200"
              >
                Cancel
              </button>
            </form>
          ) : (
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">{habit.name}</h2>
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
              >
                Edit Name
              </button>
            </div>
          )}
          {editError && <p className="text-red-500 text-sm mt-2">{editError}</p>}

          <p className="text-gray-600 mt-4 text-lg">
            Current Streak: <span className="font-bold text-indigo-700 text-xl">{habit.streak}</span> days
          </p>
          <p className="text-gray-600 text-lg">
            Last Completed: {' '}
            {habit.lastCompleted ? (
              <span className="font-bold text-indigo-700 text-xl">{new Date(habit.lastCompleted).toLocaleDateString()}</span>
            ) : (
              <span className="italic">Never</span>
            )}
          </p>

          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleCompleteHabit}
              className="flex-grow px-6 py-3 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
            >
              Mark as Complete Today
            </button>
            <button
              onClick={handleDeleteHabit}
              className="flex-grow px-6 py-3 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
            >
              Delete Habit
            </button>
          </div>
        </div>

        <section className="mt-8">
            <HabitCalendar completedDates={completedDates} />
        </section>

      </div>
    </div>
  );
}

export default HabitDetailPage;