// frontend/src/pages/RegisterPage.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [localError, setLocalError] = useState(null);

  const { register, user, loading, authError } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null); // Clear previous errors

    if (password !== confirmPassword) {
      setLocalError('Passwords do not match.');
      return;
    }

    try {
      await register(name, email, password);
      // Registration successful, useEffect will handle navigation
    } catch (err) {
      setLocalError(authError || 'An unexpected error occurred during registration.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">Register</h2>

        {localError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{localError}</span>
          </div>
        )}
        {authError && !localError && ( // Display context error if no specific local error
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{authError}</span>
            </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="your@example.com"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
              required
              minLength="6"
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
              required
              minLength="6"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white text-xl font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <p className="mt-6 text-center text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="text-indigo-600 hover:underline font-semibold">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;