
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  HomeIcon, 
  ClipboardDocumentListIcon, 
  UserCircleIcon,
  ArrowRightOnRectangleIcon, 
  UserPlusIcon 
} from '@heroicons/react/24/outline';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="fixed w-full top-0 z-50 h-16 bg-gray-900/80 backdrop-blur-md border-b border-white/10 shadow-lg animate-fade-in-down">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        <Link to="/" className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text transition duration-300 transform hover:scale-105">
          HabitPulse
        </Link>

        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <NavLink to="/dashboard" icon={<HomeIcon className="h-5 w-5" />}>
                Dashboard
              </NavLink>
              <NavLink to="/tracker" icon={<ClipboardDocumentListIcon className="h-5 w-5" />}>
                Tracker
              </NavLink>
              <NavLink to="/profile" icon={<UserCircleIcon className="h-5 w-5" />}>
                Profile
              </NavLink>
              <span className="text-purple-300 text-lg font-semibold animate-fade-in-up animate-delay-600 hidden sm:block">
                Hi, {user.name}!
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-700 text-white rounded-full text-lg font-medium hover:from-red-700 hover:to-rose-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-300 transform hover:scale-105 shadow-md shadow-red-700/30 flex items-center space-x-2 animate-fade-in-up animate-delay-700"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" icon={<ArrowRightOnRectangleIcon className="h-5 w-5 rotate-180" />}> {/* Rotated for 'in' direction */}
                Login
              </NavLink>
              <Link
                to="/register"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-bold hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition duration-300 transform hover:scale-105 shadow-md shadow-purple-600/40 flex items-center space-x-2 animate-fade-in-up animate-delay-600"
              >
                <UserPlusIcon className="h-5 w-5" />
                <span>Register</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ to, children, icon }) => (
  <Link
    to={to}
    className="text-gray-300 text-lg font-medium hover:text-purple-400 transition duration-200 flex items-center space-x-2 animate-fade-in-up animate-delay-500" // Added animation
  >
    {icon}
    <span>{children}</span>
  </Link>
);

export default Navbar;