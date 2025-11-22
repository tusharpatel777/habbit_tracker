import React from 'react';
import { Link } from 'react-router-dom'; 

function HabitList({ habits, onComplete, onDelete }) {
  if (!habits || habits.length === 0) {
    return (
      <p className="text-gray-600 italic">No habits added yet. Start tracking!</p>
    );
  }

  return (
    <div className="space-y-4">
      {habits.map((habit) => (
        <div
          key={habit._id}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
        >
          <div>
            <Link to={`/habit/${habit._id}`} className="hover:underline"> {/* <--- Added Link here */}
              <h3 className="text-xl font-semibold text-gray-800">{habit.name}</h3>
            </Link>
            <p className="text-gray-600 text-sm">
              Streak: <span className="font-bold">{habit.streak}</span>
              {habit.lastCompleted && ` | Last Completed: ${new Date(habit.lastCompleted).toLocaleDateString()}`}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onComplete(habit._id)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
            >
              Complete
            </button>
            <button
              onClick={() => onDelete(habit._id)}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitList;