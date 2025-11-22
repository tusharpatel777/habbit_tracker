import React, { useState } from 'react';

function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAddHabit(habitName);
      setHabitName(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex space-x-4 animate-fade-in-up animate-delay-200">
      <input
        type="text"
        placeholder="Enter new habit name..."
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
        className="flex-grow p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition duration-200 shadow-md"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg text-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-600/40"
      >
        Add Habit
      </button>
    </form>
  );
}

export default AddHabitForm;