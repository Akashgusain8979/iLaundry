// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (
      savedUser &&
      savedUser.email === formData.email &&
      savedUser.password === formData.password
    ) {
      localStorage.setItem('loggedInUser', JSON.stringify(savedUser));
      setUser(savedUser);
      alert('Login Successful!');
      navigate('/');
    } else {
      alert('Invalid Credentials!');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
