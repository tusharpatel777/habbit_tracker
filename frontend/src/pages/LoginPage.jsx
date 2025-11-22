
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState(null);

  const { login, user, loading, authError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null); 
    try {
      await login(email, password);
    } catch (err) {
      setLocalError(authError || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 flex items-center justify-center p-4 overflow-hidden pt-[75px]">
    
      <div className="absolute top-1/4 left-1/4 w-48 h-48 opacity-[0.07] text-purple-400 transform -rotate-12 pointer-events-none animate-float-slow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 opacity-[0.07] text-indigo-400 transform rotate-12 pointer-events-none animate-float-slow-reverse">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 opacity-[0.05] text-blue-400 pointer-events-none animate-pulse-faded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15.75l-6-6a3.75 3.75 0 010-5.303 3.75 3.75 0 015.303 0l6 6a3.75 3.75 0 010 5.303 3.75 3.75 0 01-5.303 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l1.5-1.5m-1.5 1.5l-1.5 1.5m3-3l-1.5 1.5m3-3l1.5-1.5M6 10.5a.75.75 0 01.75-.75h.008v.008H6.75a.75.75 0 01-.75.75zm12 0a.75.75 0 01.75-.75h.008v.008h-.008a.75.75 0 01-.75.75zm-9 3a.75.75 0 01.75-.75h.008v.008H9.75a.75.75 0 01-.75.75zm3 0a.75.75 0 01.75-.75h.008v.008h-.008a.75.75 0 01-.75.75zm3 0a.75.75 0 01.75-.75h.008v.008h-.008a.75.75 0 01-.75.75zM6 13.5a.75.75 0 01.75-.75h.008v.008H6.75a.75.75 0 01-.75.75zm6 0a.75.75 0 01.75-.75h.008v.008H12.75a.75.75 0 01-.75.75zm6 0a.75.75 0 01.75-.75h.008v.008h-.008a.75.75 0 01-.75.75zm-9 3a.75.75 0 01.75-.75h.008v.008H9.75a.75.75 0 01-.75.75zm3 0a.75.75 0 01.75-.75h.008v.008h-.008a.75.75 0 01-.75.75zm3 0a.75.75 0 01.75-.75h.008v.008h-.008a.75.75 0 01-.75.75z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-md w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl shadow-purple-800/40 animate-fade-in-up">
        <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text animate-fade-in-up animate-delay-200">
          Login
        </h2>

        {(localError || authError) && (
          <div className="bg-red-900/30 border border-red-700 text-red-300 px-4 py-3 rounded relative mb-6 animate-fade-in-up animate-delay-300" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{localError || authError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="animate-fade-in-up animate-delay-400">
            <label className="block text-gray-200 text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition duration-200"
              placeholder="your@example.com"
              required
              disabled={loading}
            />
          </div>
          <div className="animate-fade-in-up animate-delay-500">
            <label className="block text-gray-200 text-lg font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400 transition duration-200"
              placeholder="********"
              required
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-bold rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-600/40 animate-fade-in-up animate-delay-600"
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </form>
        <p className="mt-8 text-center text-gray-300 animate-fade-in-up animate-delay-700">
          Don't have an account?{' '}
          <Link to="/register" className="text-purple-400 hover:underline font-semibold">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;