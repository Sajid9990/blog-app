// src/LoginPage.js
import React, { useState } from 'react';
import './login.css';

const LoginPage = () => {
  const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
  };

  return (
    <div className={`login-container ${show ? 'show' : ''}`}>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
