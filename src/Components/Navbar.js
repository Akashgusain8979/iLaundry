// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <h1>iLaundry</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/schedule">Schedule Pickup</Link>
        <Link to="/contactUs">Contact Us</Link>
        {user ? (
          <>
            <Link to="/myorders">My Orders</Link>
            <Link to="/track">Track Order</Link>
            <Link to="/payment">Payment</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
