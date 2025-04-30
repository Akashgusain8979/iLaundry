// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import SchedulePickup from './Pages/SchedulePickup';
import OrderTracking from './Pages/OrderTracking';
import Payment from './Pages/Payment';
import Register from './Pages/Register';
import Login from './Pages/Login';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/schedule-pickup" element={<SchedulePickup />} />
          <Route path="/order-tracking" element={<OrderTracking />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
