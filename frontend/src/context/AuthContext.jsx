// frontend/src/context/AuthContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { registerUser, loginUser, getMe } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null); // For auth-specific errors

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const fetchedUser = await getMe(token);
          setUser(fetchedUser);
        } catch (err) {
          console.error('Failed to load user from token:', err);
          logout(); // If token is invalid or expired, log out
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [token]);

  const login = async (email, password) => {
    setLoading(true);
    setAuthError(null);
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('token', response.token);
      setToken(response.token);
      setUser(response.user);
      setLoading(false);
      return true; // Indicate success
    } catch (err) {
      setAuthError(err.message || 'Login failed');
      setLoading(false);
      throw err; // Re-throw for form components to catch
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    setAuthError(null);
    try {
      const response = await registerUser({ name, email, password });
      localStorage.setItem('token', response.token);
      setToken(response.token);
      setUser(response.user);
      setLoading(false);
      return true; // Indicate success
    } catch (err) {
      setAuthError(err.message || 'Registration failed');
      setLoading(false);
      throw err; // Re-throw for form components to catch
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setAuthError(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, authError, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

