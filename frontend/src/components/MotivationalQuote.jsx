// frontend/src/components/MotivationalQuote.jsx
import React, { useState, useEffect } from 'react';

const quotes = [
  "The best way to predict the future is to create it.",
  "Motivation is what gets you started. Habit is what keeps you going.",
  "Small daily improvements are the key to staggering long-term results.",
  "Discipline is choosing between what you want now and what you want most.",
  "Every action you take is a vote for the type of person you wish to become.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "It's not what we do once in a while that shapes our lives, but what we do consistently.",
  "You don't have to be great to start, but you have to start to be great.",
  "The secret to your future is hidden in your daily routine.",
];

function MotivationalQuote() {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);

    // Optional: Change quote every 30 seconds
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[newIndex]);
    }, 30000); // Change every 30 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="text-center p-4 bg-yellow-50 rounded-lg shadow-md italic text-lg text-yellow-800 mb-8 animate-fade-in">
      "{currentQuote}"
    </div>
  );
}

export default MotivationalQuote;