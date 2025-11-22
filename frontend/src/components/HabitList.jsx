// // frontend/src/components/HabitList.jsx
// import React from 'react';

// function HabitList({ habits, onComplete, onDelete }) {
//   if (!habits || habits.length === 0) {
//     return (
//       <p className="text-gray-600 italic">No habits added yet. Start tracking!</p>
//     );
//   }

//   return (
//     <div className="space-y-4">
//       {habits.map((habit) => (
//         <div
//           key={habit._id}
//           className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
//         >
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800">{habit.name}</h3>
//             <p className="text-gray-600 text-sm">
//               Streak: <span className="font-bold">{habit.streak}</span>
//               {habit.lastCompleted && ` | Last Completed: ${new Date(habit.lastCompleted).toLocaleDateString()}`}
//             </p>
//           </div>
//           <div className="flex space-x-2">
//             <button
//               onClick={() => onComplete(habit._id)}
//               className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
//             >
//               Complete
//             </button>
//             <button
//               onClick={() => onDelete(habit._id)}
//               className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-200"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HabitList;
// frontend/src/components/HabitList.jsx
import React from 'react';

function HabitList({ habits, onComplete, onDelete }) {
  if (!habits || habits.length === 0) {
    return (
      <p className="text-gray-400 italic text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-md animate-fade-in-up animate-delay-200">
        No habits added yet. Start tracking!
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {habits.map((habit, index) => (
        <div
          key={habit._id}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg animate-fade-in-up"
          style={{ animationDelay: `${200 + index * 100}ms` }} // Staggered animation
        >
          <div className="mb-3 sm:mb-0">
            <h3 className="text-xl font-semibold text-white">{habit.name}</h3>
            <p className="text-gray-300 text-sm">
              Streak: <span className="font-bold text-blue-300">{habit.streak}</span>
              {habit.lastCompleted && (
                <>
                  {' '}
                  <span className="mx-1 text-gray-500">|</span> Last Completed:{' '}
                  <span className="font-bold">
                    {new Date(habit.lastCompleted).toLocaleDateString()}
                  </span>
                </>
              )}
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => onComplete(habit._id)}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-md hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-75 transition duration-200 shadow-md transform hover:scale-105"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Complete
              </span>
            </button>
            <button
              onClick={() => onDelete(habit._id)}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-md hover:from-red-700 hover:to-rose-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-200 shadow-md transform hover:scale-105"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.925a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m-1.022.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.925a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397M12 9.75v-3C12 5.25 10.75 4 9.25 4S6.5 5.25 6.5 6.75V9.75" />
                </svg>
                Delete
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitList;