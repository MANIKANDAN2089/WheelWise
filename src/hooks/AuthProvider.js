import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const navigate = useNavigate();

  const register = (userData) => {
    // Store user data in local storage
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(null); // Reset user state for a new user
    navigate('/login'); // Redirect to login page after successful registration
  };

  const login = (credentials) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
      setUser(storedUser); // Set logged-in user
      navigate('/'); // Redirect to home or dashboard
    } else {
      alert('Invalid email or password');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); 
    navigate('/login'); // Redirect to login page
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

