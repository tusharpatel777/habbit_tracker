
import React, { useState } from 'react';
import { getAiHabitSuggestions } from '../services/habitService';

function AISuggestion({ onAddHabit }) {
  const [goal, setGoal] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetSuggestions = async () => {
    if (!goal.trim()) {
      setError('Please enter a goal to get suggestions.');
      return;
    }
    setLoading(true);
    setError(null);
    setSuggestions([]); // Clear previous suggestions

    try {
      // Simulate a network delay for better UI feedback of the loading spinner
      await new Promise(resolve => setTimeout(resolve, 800));
      const aiSuggestions = await getAiHabitSuggestions(goal);
      setSuggestions(aiSuggestions);
    } catch (err) {
      console.error('Error fetching AI suggestions:', err);
      setError(err.message || 'Failed to get AI suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddSuggestedHabit = (suggestionName) => {
    onAddHabit(suggestionName);
    // Optionally remove the added suggestion from the list
    setSuggestions((prev) => prev.filter(s => s.name !== suggestionName));
  };

  return (
    <div className="p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl shadow-purple-800/40 animate-fade-in-up animate-delay-200">
      <h3 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text animate-fade-in-up animate-delay-300">
        AI Habit Suggestions
      </h3>
      <p className="text-center text-lg text-gray-300 mb-8 animate-fade-in-up animate-delay-400">
        Tell our AI your goal, and it will suggest personalized habits.
      </p>

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 animate-fade-in-up animate-delay-500">
        <input
          type="text"
          placeholder="e.g., 'Improve my fitness', 'Be more organized'"
          value={goal}
          onChange={(e) => {
            setGoal(e.target.value);
            setError(null); // Clear error when typing
          }}
          className="flex-grow p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition duration-200 shadow-md"
          disabled={loading}
        />
        <button
          onClick={handleGetSuggestions}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg text-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-600/40"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Thinking...
            </div>
          ) : 'Get Suggestions'}
        </button>
      </div>

      {error && (
        <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded relative mb-4 animate-fade-in-up animate-delay-600" role="alert">
          <strong className="font-bold">AI Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="mt-6 space-y-4 animate-fade-in-up animate-delay-700">
          <h3 className="text-xl font-semibold text-gray-200">Suggested Habits:</h3>
          {suggestions.map((sug, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-md animate-fade-in-up"
              style={{ animationDelay: `${700 + index * 100}ms` }} // Staggered animation
            >
              <div>
                <p className="font-medium text-white text-lg">{sug.name}</p>
                <p className="text-sm text-gray-300">{sug.description}</p>
              </div>
              <button
                onClick={() => handleAddSuggestedHabit(sug.name)}
                className="mt-4 sm:mt-0 px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm rounded-lg hover:from-emerald-600 hover:to-teal-700 transition duration-200 shadow-md transform hover:scale-105"
              >
                Add Habit
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AISuggestion;