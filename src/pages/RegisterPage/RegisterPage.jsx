import React, { useState } from 'react';
import { useAuth } from '../../hooks/AuthProvider';
import { Link } from 'react-router-dom';
import './RegisterPage.css';
import ill from '../../assets/illustration.png';

const RegisterPage = () => {
  const { register } = useAuth();
  const [input, setInput] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [errors, setErrors] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { firstName: '', lastName: '', email: '', password: '' };

    if (!input.firstName) {
      newErrors.firstName = 'First name is required.';
      valid = false;
    }

    if (!input.lastName) {
      newErrors.lastName = 'Last name is required.';
      valid = false;
    }

    if (!validateEmail(input.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (input.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      register(input);
    }
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  return (
    <div className="register-page">
      <div className="image-container">
        <img src={ill} alt="Register" className="register-image" />
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Join Us</h2>
          
          {/* First Name and Last Name in two separate boxes */}
          <div className="box-container">
            <div className="input-box">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={input.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>

            <div className="input-box">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            required
            minLength="6"
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <button type="submit">Register</button>

          <div className="footer-links">
            <Link to="/login" className="footer-link">Already have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
