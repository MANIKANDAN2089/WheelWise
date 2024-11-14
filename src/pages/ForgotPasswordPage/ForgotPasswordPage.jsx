import React, { useState } from 'react';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1); 
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    setStep(2); 
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      
      alert('Password Reset Successful');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form-container">
        {step === 1 ? (
          <form onSubmit={handleEmailSubmit} className="email-form">
            <h2 className="forgot-password-heading">Forgot Password</h2>
            <label className="forgot-password-label">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="forgot-password-input"
            />
            <button type="submit" className="forgot-password-btn forgot-password-submit-btn">Send OTP</button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="otp-password-form">
            <h2 className="forgot-password-heading">Reset Your Password</h2>
            <label className="forgot-password-label">Enter OTP</label>
            <input
              type="text"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="Enter OTP"
              className="forgot-password-input"
            />
            <label className="forgot-password-label">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="Enter new password"
              className="forgot-password-input"
            />
            <label className="forgot-password-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm new password"
              className="forgot-password-input"
            />
            <button type="submit" className="forgot-password-btn forgot-password-submit-btn">Reset Password</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
