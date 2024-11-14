import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthProvider';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="Wheel Wise Logo" className="logo-img" />
      </Link>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        {user ? (
          <>
            <span className="welcome-text">Welcome, {user.name}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
