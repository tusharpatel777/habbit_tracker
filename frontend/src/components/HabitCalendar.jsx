import React from 'react';

const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

function HabitCalendar({ completedDates = [] }) {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const completedDayStrings = new Set(
    completedDates.map(dateStr => new Date(dateStr).toDateString())
  );

  const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

  // get weekday names for header
  const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        {today.toLocaleString('default', { month: 'long', year: 'numeric' })} Overview
      </h3>
      <div className="grid grid-cols-7 gap-1 text-center text-sm font-semibold text-gray-600 mb-2">
        {weekdayNames.map((name) => (
          <div key={name}>{name}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
       
        {Array.from({ length: daysInCurrentMonth[0].getDay() }).map((_, i) => (
          <div key={`empty-start-${i}`} className="p-2"></div>
        ))}

        {daysInCurrentMonth.map((day, index) => {
          const isCompleted = completedDayStrings.has(day.toDateString());
          const isToday = day.toDateString() === today.toDateString();
          const dayNumber = day.getDate();

          let dayClasses = "p-2 rounded-md flex items-center justify-center";
          if (isCompleted) {
            dayClasses += " bg-green-200 text-green-800 font-medium";
          } else if (day > today) { 
            dayClasses += " bg-gray-50 text-gray-400";
          } else { // past incomplete dates 
            dayClasses += " bg-red-50 text-red-700";
          }
          if (isToday) {
            dayClasses += " ring-2 ring-indigo-500 ring-offset-2"; // highlight krdiya today ko
          }

          return (
            <div key={day.toISOString()} className={dayClasses}>
              {dayNumber}
            </div>
          );
        })}
         
         {Array.from({ length: 6 - daysInCurrentMonth[daysInCurrentMonth.length -1].getDay() }).map((_, i) => (
          <div key={`empty-end-${i}`} className="p-2"></div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-6 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-green-200 border border-green-300"></span> Completed
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-red-50 border border-red-100"></span> Missed
        </div>
         <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-gray-50 border border-gray-100"></span> Future
        </div>
         <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full ring-2 ring-indigo-500 ring-offset-2 bg-transparent"></span> Today
        </div>
      </div>
    </div>
  );
}

export default HabitCalendar;