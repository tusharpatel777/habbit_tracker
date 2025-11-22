// frontend/src/components/AISuggestion.jsx
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
    <div className="p-4 bg-purple-100 rounded-lg shadow-inner">
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
        <input
          type="text"
          placeholder="e.g., 'Improve my fitness', 'Be more organized'"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="flex-grow p-3 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={loading}
        />
        <button
          onClick={handleGetSuggestions}
          className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Thinking...' : 'Get Suggestions'}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">AI Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="mt-4 space-y-3">
          <h3 className="text-xl font-semibold text-purple-800">Suggested Habits:</h3>
          {suggestions.map((sug, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-white rounded-md shadow-sm"
            >
              <div>
                <p className="font-medium text-gray-800">{sug.name}</p>
                <p className="text-sm text-gray-600">{sug.description}</p>
              </div>
              <button
                onClick={() => handleAddSuggestedHabit(sug.name)}
                className="mt-2 sm:mt-0 px-4 py-2 bg-green-500 text-white text-sm rounded-md hover:bg-green-600 transition duration-200"
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