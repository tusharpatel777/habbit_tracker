import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  UserPlusIcon, 
  LockOpenIcon,   
  KeyIcon,       
  ArrowPathIcon  
} from '@heroicons/react/24/outline';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState(null);

  const { register, user, loading, authError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);

    if (password !== confirmPassword) {
      setLocalError('Passwords do not match.');
      return;
    }

    try {
      await register(name, email, password);
    } catch (err) {
      setLocalError(authError || 'An unexpected error occurred during registration.');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4 overflow-hidden pt-[80px]">
      <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-[0.07] text-purple-400 transform -rotate-12 pointer-events-none animate-float-slow">
        <UserPlusIcon className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.07] text-indigo-400 transform rotate-12 pointer-events-none animate-float-slow-reverse">
        <LockOpenIcon className="w-full h-full" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-[0.05] text-blue-400 pointer-events-none animate-pulse-faded">
        <KeyIcon className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-md w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl shadow-purple-800/40 animate-fade-in-up">
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-fade-in-up animate-delay-200">
          Register
        </h2>

        {(localError || authError) && (
          <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded relative mb-6 animate-fade-in-up animate-delay-300" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{localError || authError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-fade-in-up animate-delay-400">
            <label className="block text-gray-200 text-lg font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition duration-200 shadow-md"
              placeholder="Your Name"
              required
              disabled={loading}
            />
          </div>
          <div className="animate-fade-in-up animate-delay-500">
            <label className="block text-gray-200 text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition duration-200 shadow-md"
              placeholder="your@example.com"
              required
              disabled={loading}
            />
          </div>
          <div className="animate-fade-in-up animate-delay-600">
            <label className="block text-gray-200 text-lg font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition duration-200 shadow-md"
              placeholder="********"
              required
              minLength="6"
              disabled={loading}
            />
          </div>
          <div className="animate-fade-in-up animate-delay-700">
            <label className="block text-gray-200 text-lg font-semibold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition duration-200 shadow-md"
              placeholder="********"
              required
              minLength="6"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-600/40 animate-fade-in-up animate-delay-800"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <ArrowPathIcon className="animate-spin h-5 w-5 mr-3 text-white" />
                Registering...
              </div>
            ) : 'Register'}
          </button>
        </form>
        <p className="mt-8 text-center text-gray-300 animate-fade-in-up animate-delay-900">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-400 hover:underline font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;